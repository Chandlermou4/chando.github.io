window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "<strong>Un seul tank</strong>, au nord du boss. Tout le raid <strong>sur la plateforme</strong>, en cercle autour de Teron, les corps-à-corps derrière (au sud). Un chasseur ouvre avec un Détournement sur le tank."}, {"mech": "Incinération", "t": 8, "txt": "Teron pose <strong>Incinération</strong> sur un joueur au hasard : gros dégâts de feu, puis une brûlure qui tourne jusqu'à la dissipation. Un soigneur est dédié au <strong>dispel en priorité</strong> (un second en secours), et heal rapide dessus en attendant.", "focus": ["healer"]}, {"mech": "Ombre de la mort", "t": 10, "txt": "Toutes les 30 s, un joueur (jamais le tank) est marqué pour <strong>55 secondes</strong> — rien ne l'enlève. À <strong>15 s de la fin</strong>, il part vers le <strong>losange, contre le mur</strong> : à l'échéance il meurt sur place, passe en <strong>Esprit vengeur</strong> et tue les adds qui déferlent — <strong>aucun ne doit atteindre le raid</strong>. Résurrection automatique ensuite ; un <strong>BR</strong> est gardé en priorité pour un soigneur qui prendrait le debuff.", "focus": ["rdps", "mdps"]}, {"mech": "Fleur du destin", "t": 8, "txt": "Une <strong>Fleur du destin</strong> apparaît au-dessus d'un joueur et crache des traits de l'ombre sur le raid. On la <strong>tue sans traîner</strong>."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Un seul tank au nord du boss. Tout le raid sur la plateforme, en
// cercle autour de Teron : corps-à-corps au sud (derrière), soigneurs
// et distants sur le reste du cercle.

pc(0, -120, 'tank');

// corps-à-corps : arc serré au sud
for(let n=0;n<6;n++){
  const a = Math.PI/2 - 0.8 + n*(1.6/5);
  pc(Math.cos(a)*140, Math.sin(a)*140, 'mdps');
}

// soigneurs + distants : le reste du cercle, ouvert au sud pour la mêlée
const RING=['healer','rdps','rdps','healer','rdps','healer','rdps','rdps','healer','rdps',
            'healer','rdps','rdps','healer','rdps','rdps','healer','rdps'];
for(let n=0;n<18;n++){
  const span = Math.PI*1.66;
  const a = -Math.PI/2 - span/2 + n*(span/17);
  const r = 200 + (n%2?24:0);
  pc(Math.cos(a)*r, Math.sin(a)*r, RING[n]);
}



};
