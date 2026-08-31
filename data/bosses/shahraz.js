window.GUIDE_STEPS=[{"mech": "Placement", "t": 9, "txt": "<strong>Trois tanks empilés</strong> sur elle, à une position fixe qu'on ne bouge plus, et les corps-à-corps au contact. Soigneurs et distants, eux, se <strong>regroupent derrière la statue</strong>, hors de vue de Shahraz : <strong>ligne de vue coupée, les rayons ne les ciblent pas</strong>."}, {"mech": "Fouette-sabre", "t": 9, "focus": ["tank"], "txt": "Son coup de base frappe les <strong>trois cibles les plus proches devant elle</strong> et partage ses dégâts entre elles. À un ou deux tanks, il tue net — c'est toute la raison des trois tanks empilés. En échange, le debuff qu'il applique les rend <strong>insensibles à l'Ombre</strong> : eux seuls n'ont pas besoin de résistance."}, {"mech": "Résistance à l'Ombre", "t": 9, "txt": "Tout le raid sauf les tanks vise <strong>environ 174 de résistance à l'Ombre</strong> à l'équipement — Médaillon de Karabor, enchantement de cape, Flacon de merveille chromatique, Glyphe de sauvegarde — plus 70 de <strong>Prière de protection contre l'Ombre</strong>. C'est ce qui rend le combat confortable."}, {"mech": "Hurlement muselant", "t": 8, "txt": "Elle réduit au silence <strong>pendant dix secondes</strong> tout ce qui se trouve à moins de <strong>dix-huit mètres</strong>. Soigneurs et lanceurs de sorts restent au-delà en permanence — ce n'est pas négociable."}, {"mech": "Liaison fatale", "t": 10, "txt": "Trois joueurs hors tanks sont <strong>téléportés ensemble au même endroit</strong> et liés par un rayon qui leur inflige de l'Ombre en continu. Le lien <strong>se brise à vingt-cinq mètres</strong> : chacun part aussitôt dans une direction différente, jamais vers le raid."}, {"mech": "Les rayons", "t": 9, "focus": ["healer", "rdps"], "txt": "Plusieurs rayons frappent un joueur au hasard hors tanks puis <strong>rebondissent sur ses voisins</strong>. L'un <strong>brûle le mana</strong>, un autre <strong>projette en arrière</strong>. C'est tout l'intérêt de la statue : à couvert, soigneurs et distants n'en prennent aucun."}, {"mech": "Aura prismatique", "t": 9, "txt": "Six auras — Ombre, Arcanes, Feu, Nature, Givre, Sacré — <strong>tournent sur les joueurs</strong> pendant tout le combat. Chacune réduit les dégâts d'une école et amplifie les autres. Si vous en jouez plusieurs, <strong>arrêtez celle qui est réduite</strong> et tapez avec celle qui est amplifiée."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// D'apres les plans raidplan du guide wowhead :
// Shahraz est tenue au fond de la salle. TROIS TANKS empiles devant elle
// (Fouette-sabre partage ses degats entre les 3 cibles les plus proches) et
// les CORPS-A-CORPS au contact. Soigneurs et distants se REGROUPENT derriere
// la statue, hors de vue : ligne de vue coupee, les rayons ne les ciblent pas.
pc(-84,   0, 'tank');
pc(-112, -30, 'tank');
pc(-112,  30, 'tank');

[[-46,-92],[30,-88],[64,-20],[76,54]].forEach(p=>pc(p[0],p[1],'mdps'));

const R=['healer','rdps','rdps','healer','rdps','rdps','healer','rdps','rdps','healer',
         'rdps','rdps','healer','rdps','rdps','rdps','rdps','rdps'];
const CX=-568, CY=52;
for(let n=0;n<R.length;n++){
  const a=n*2.399, rr=20+17*Math.sqrt(n);
  pc(CX+Math.cos(a)*rr*1.10, CY+Math.sin(a)*rr*0.80, R[n]);
}
};
