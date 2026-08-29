
const STEPS=window.GUIDE_STEPS||[];;
const ICONS = {"tank": "assets/media/2525fef06c6f205fbd90.svg", "healer": "assets/media/6ebcd4a97c05de8d9b05.svg", "mdps": "assets/media/6c1b7ace933b5f5c95ef.svg", "rdps": "assets/media/c0835e827ed757b9014c.svg"};
const NS='http://www.w3.org/2000/svg';
function pc(x,y,role,size){size=size||30;
  const g=document.createElementNS(NS,'g');g.setAttribute('class','pc '+role);
  g.setAttribute('transform',`translate(${x},${y})`);
  const im=document.createElementNS(NS,'image');
  im.setAttribute('href',ICONS[role]);im.setAttribute('x',-size/2);im.setAttribute('y',-size/2);
  im.setAttribute('width',size);im.setAttribute('height',size);
  g.appendChild(im);(document.getElementById('raid')||document.querySelector('svg')).appendChild(g);return g}
const stage=document.getElementById('stage'),mechEl=document.getElementById('mech'),
      narEl=document.getElementById('narration'),rail=document.getElementById('rail');
let i=0,auto=null;
STEPS.forEach(()=>{const t=document.createElement('div');t.className='tick';rail.appendChild(t)});
const ticks=[...rail.children];
function render(){
  stage.dataset.step=i+1;
  stage.dataset.focus=(STEPS[i].focus||[]).join(' ');
  mechEl.innerHTML='';narEl.innerHTML='';void stage.offsetWidth;
  mechEl.textContent=STEPS[i].mech;narEl.innerHTML=STEPS[i].txt;
  ticks.forEach((t,n)=>t.className='tick'+(n<i?' done':n===i?' now':''));
}
function go(d){i=Math.max(0,Math.min(STEPS.length-1,i+d));render()}
addEventListener('keydown',e=>{
  if(document.body.classList.contains('editing')||e.target.isContentEditable||/INPUT/.test(e.target.tagName))return;
  if(e.code==='Space'||e.code==='ArrowRight'){e.preventDefault();go(1)}
  if(e.code==='ArrowLeft'){e.preventDefault();go(-1)}
  if(e.key.toLowerCase()==='r')stage.classList.toggle('rec');
  if(e.key.toLowerCase()==='p'){
    if(auto){clearInterval(auto);auto=null;return}
    i=0;render();
    const tick=()=>{if(i>=STEPS.length-1){clearInterval(auto);auto=null;return}
      go(1);clearInterval(auto);auto=setInterval(tick,STEPS[i].t*1000)};
    auto=setInterval(tick,STEPS[0].t*1000)}
});
addEventListener('click',e=>{if(!document.body.classList.contains('editing'))go(1)});
window.GUIDE_SETUP?.({pc,NS,stage});

// Mise à l'échelle : marges calculées explicitement, sans dépendre du centrage CSS
function fit(){
  const s = Math.min(innerWidth/1920, innerHeight/1080);
  const x = Math.round((innerWidth  - 1920*s)/2);
  const y = Math.round((innerHeight - 1080*s)/2);
  stage.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
}
addEventListener('resize', fit);
addEventListener('orientationchange', fit);
fit();
render();

/* ================= ÉDITEUR ================= */
(function(){
const field=document.getElementById('field');
const edSel=document.getElementById('ed-sel'),edXY=document.getElementById('ed-xy'),
      edStep=document.getElementById('ed-step'),edDur=document.getElementById('ed-dur');
let editing=false, sel=null, box=null, undo=[];

const SKIP=new Set(['defs','marker','symbol']);
function isUnit(n){
  if(!n||n===field||SKIP.has(n.tagName))return false;
  if(n.classList.contains('room')||n.classList.contains('room-inner'))return false;
  if(n.parentNode===field)return true;
  if(n.dataset&&n.dataset.nodrag!==undefined)return false;
  const p=n.parentNode;
  return p&&(p.classList.contains('layer')||p.id==='raid');
}
// remonte jusqu'au premier bloc réellement déplaçable (saute les groupes animés)
function unitOf(n){while(n&&n!==field){if(isUnit(n))return n;n=n.parentNode}return null}

function base(el){
  if(el.dataset.base===undefined)el.dataset.base=el.getAttribute('transform')||'';
  return el.dataset.base;
}
function off(el){return[+(el.dataset.dx||0),+(el.dataset.dy||0)]}
function place(el,dx,dy){
  el.dataset.dx=dx;el.dataset.dy=dy;
  const b=base(el);
  el.setAttribute('transform',(dx||dy?`translate(${+dx.toFixed(1)},${+dy.toFixed(1)}) `:'')+b);
  if(el===sel)refresh();
}
function refresh(){
  if(!sel){edSel.textContent='—';edXY.textContent='0, 0';if(box){box.remove();box=null}return}
  const [dx,dy]=off(sel);
  edSel.textContent=(sel.id||sel.getAttribute('class')||sel.tagName).slice(0,30);
  edXY.textContent=`${Math.round(dx)}, ${Math.round(dy)}`;
  if(!box){box=document.createElementNS(NS,'rect');box.setAttribute('class','sel-box');field.appendChild(box)}
  try{
    const bb=sel.getBBox(),m=sel.getCTM().multiply(field.getCTM().inverse());
    const pts=[[bb.x,bb.y],[bb.x+bb.width,bb.y],[bb.x,bb.y+bb.height],[bb.x+bb.width,bb.y+bb.height]]
      .map(([x,y])=>({x:m.a*x+m.c*y+m.e,y:m.b*x+m.d*y+m.f}));
    const xs=pts.map(p=>p.x),ys=pts.map(p=>p.y);
    box.setAttribute('x',Math.min(...xs)-8);box.setAttribute('y',Math.min(...ys)-8);
    box.setAttribute('width',Math.max(...xs)-Math.min(...xs)+16);
    box.setAttribute('height',Math.max(...ys)-Math.min(...ys)+16);
    box.style.display='';
  }catch(e){box.style.display='none'}
}
function select(el){sel=el;refresh()}
function snapshot(el){undo.push({el,dx:+(el.dataset.dx||0),dy:+(el.dataset.dy||0)});if(undo.length>60)undo.shift()}

// --- glisser ---
let drag=null;
function svgPt(e,el){
  const m=el.parentNode.getScreenCTM().inverse(),p=field.ownerSVGElement?null:null;
  const pt=field.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;return pt.matrixTransform(m);
}
field.addEventListener('pointerdown',e=>{
  if(!editing)return;
  const u=unitOf(e.target);if(!u)return;
  e.preventDefault();e.stopPropagation();
  select(u);snapshot(u);
  const s=svgPt(e,u),[dx,dy]=off(u);
  drag={el:u,ox:s.x-dx,oy:s.y-dy};
  document.body.classList.add('dragging');
  field.setPointerCapture(e.pointerId);
});
field.addEventListener('pointermove',e=>{
  if(!drag)return;
  const s=svgPt(e,drag.el);
  place(drag.el,s.x-drag.ox,s.y-drag.oy);
});
addEventListener('pointerup',()=>{drag=null;document.body.classList.remove('dragging')});

// --- réécrire un texte ---
field.addEventListener('dblclick',e=>{
  if(!editing)return;
  let n=e.target;
  if(n.tagName!=='text'){const t=unitOf(n);if(t&&t.tagName==='text')n=t;else return}
  const v=prompt('Texte :',n.textContent);
  if(v!==null)n.textContent=v;
  e.stopPropagation();
});

// --- clavier ---
addEventListener('keydown',e=>{
  const typing=e.target.isContentEditable||/INPUT|TEXTAREA/.test(e.target.tagName);
  if(!typing&&e.key.toLowerCase()==='e'){
    editing=!editing;document.body.classList.toggle('editing',editing);
    document.querySelectorAll('h1,.subtitle,.eyebrow,#mech,#narration')
      .forEach(n=>n.contentEditable=editing);
    if(!editing){sel=null;refresh();document.body.classList.remove('no-anim')}
    else{edDur.value=STEPS[i].t;edStep.textContent=i+1}
    return;
  }
  if(!editing||typing)return;
  if(e.key.toLowerCase()==='a'){document.body.classList.toggle('no-anim');return}
  if(e.key.toLowerCase()==='l'){document.body.classList.toggle('show-all');
    document.querySelectorAll('.layer').forEach(l=>l.style.opacity=
      document.body.classList.contains('show-all')?1:'');return}
  if(e.key.toLowerCase()==='h'&&sel){sel.style.display=sel.style.display==='none'?'':'none';refresh();return}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){
    const u=undo.pop();if(u){place(u.el,u.dx,u.dy);select(u.el)}e.preventDefault();return}
  if(sel&&e.key.startsWith('Arrow')){
    e.preventDefault();e.stopPropagation();
    const s=e.shiftKey?10:1,[dx,dy]=off(sel);
    snapshot(sel);
    place(sel,dx+(e.key==='ArrowRight'?s:e.key==='ArrowLeft'?-s:0),
             dy+(e.key==='ArrowDown'?s:e.key==='ArrowUp'?-s:0));
  }
},true);

// --- texte des étapes ---
['mech','narration'].forEach(id=>{
  document.getElementById(id).addEventListener('input',ev=>{
    if(!editing)return;
    if(id==='mech')STEPS[i].mech=ev.target.textContent;else STEPS[i].txt=ev.target.innerHTML;
  });
});
edDur.addEventListener('change',()=>{STEPS[i].t=+edDur.value||5});
function drawFocus(){
  const f=STEPS[i].focus||[];
  document.querySelectorAll('#ed-focus .rb').forEach(b=>b.classList.toggle('on',f.includes(b.dataset.r)));
}
document.querySelectorAll('#ed-focus .rb').forEach(b=>b.onclick=()=>{
  const f=STEPS[i].focus=(STEPS[i].focus||[]).slice();
  const k=f.indexOf(b.dataset.r); k<0?f.push(b.dataset.r):f.splice(k,1);
  if(!f.length)delete STEPS[i].focus;
  stage.dataset.focus=(STEPS[i].focus||[]).join(' ');drawFocus();
});
const _render=render;
render=function(){_render();if(editing){edDur.value=STEPS[i].t;edStep.textContent=i+1;drawFocus();
  document.querySelectorAll('#mech,#narration').forEach(n=>n.contentEditable=true)}};

document.getElementById('ed-reset').onclick=()=>{if(sel){snapshot(sel);place(sel,0,0);sel.style.display=''}};

// --- export ---
document.getElementById('ed-save').onclick=()=>{
  const c=document.documentElement.cloneNode(true);
  c.querySelector('#ed')?.remove();
  c.querySelector('.sel-box')?.remove();
  c.querySelectorAll('[contenteditable]').forEach(n=>n.removeAttribute('contenteditable'));
  c.querySelectorAll('#mech,#narration').forEach(n=>n.innerHTML='');
  const st=c.querySelector('#stage');st.className='';st.setAttribute('data-step','1');
  const sc=[...c.querySelectorAll('script')].find(s=>s.textContent.includes('const STEPS'));
  sc.textContent=sc.textContent.replace(/const STEPS = \[[\s\S]*?\];/,
    'const STEPS = '+JSON.stringify(STEPS)+';');
  const blob=new Blob(['<!DOCTYPE html>\n'+c.outerHTML],{type:'text/html'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=(document.title.split(' —')[0].toLowerCase().replace(/\s+/g,'-'))+'-edit.html';
  a.click();URL.revokeObjectURL(a.href);
};
})();

