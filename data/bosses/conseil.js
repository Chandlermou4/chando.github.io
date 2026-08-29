window.GUIDE_STEPS=[{"mech": "Barre de vie partagée", "t": 9, "txt": "Quatre boss, <strong>une seule barre de vie commune</strong>. Ils meurent tous ensemble, au même instant — la répartition des dégâts entre eux détermine tout le rythme du combat."}, {"mech": "Gathios le Fracasseur", "t": 9, "txt": "Il pose une Consécration au sol — <strong>on en sort</strong>. Il faut surtout le garder loin des trois autres : son aura renforce quiconque se tient à proximité.", "focus": ["tank"]}, {"mech": "Dame Malande", "t": 9, "txt": "Son Cercle de Soins restitue une fortune de vie à tout le conseil d'un coup. <strong>Interrompez chaque lancer</strong>, avec une rotation physique et magique — elle peut alterner les protections.", "focus": ["mdps"]}, {"mech": "Veras l'Ombre-Sombre", "t": 9, "txt": "Il disparaît régulièrement et empoisonne des joueurs au hasard pendant ce temps. <strong>Dès sa réapparition, il faut le reprendre en main sans attendre</strong> — il repart de zéro en menace.", "focus": ["tank", "healer"]}, {"mech": "Zerevor", "t": 8, "txt": "Il ne se tank pas normalement : un mage le retient par <strong>vol de sort</strong>. Laissé libre, ses salves d'Arcane frappent tout le raid sans distinction."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['tank','tank','tank','tank','healer','healer','mdps','rdps','healer','rdps','mdps','rdps',
         'healer','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.5, r=n%2?260:335;
  pc(Math.cos(a)*r, Math.sin(a)*r, R[n]);
}



};
