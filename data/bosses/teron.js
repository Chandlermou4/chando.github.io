window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Tout le monde <strong>sur la plateforme</strong>. Un chasseur ouvre avec un Détournement sur le tank."}, {"mech": "Incinérer", "t": 8, "txt": "Teron pose <strong>Incinérer</strong> sur un joueur au hasard : gros dégâts de feu, puis un dot à dispell. Un soigneur est dédié au <strong>dispell en priorité</strong> (un second en secours), et heal rapide dessus en attendant.", "focus": ["healer"]}, {"mech": "Ombres écrasantes", "t": 7, "txt": "Un joueur au hasard prend <strong>+60 % de dégâts d'Ombre</strong> pendant quinze secondes. <strong>Rien ne l'enlève</strong> : c'est un check de soin, pas de dissipation — cumulé au reste, ça tue vite si les soigneurs ne suivent pas.", "focus": ["healer"]}, {"mech": "Ombre de la mort", "t": 10, "txt": "Toutes les 30 s, un joueur (jamais le tank) est marqué pour <strong>55 secondes</strong> — rien ne l'enlève. À <strong>15 s de la fin</strong>, il part vers le <strong>losange, contre le mur</strong> : à l'échéance il meurt sur place, passe en <strong>Esprit vengeur</strong> et tue les adds qui déferlent — <strong>aucun ne doit atteindre le raid</strong>. Résurrection automatique ensuite ; un <strong>BR</strong> est gardé en priorité pour un soigneur qui prendrait le debuff.<span class=\"aside\">S'entraîner à gérer les adds : <a href=\"https://teron.faldorn.net/terongame/\" target=\"_blank\" rel=\"noopener\">mini-jeu Teron</a></span>", "focus": ["rdps", "mdps"]}, {"mech": "Fleur du destin", "t": 8, "txt": "Une <strong>Fleur du destin</strong> apparaît au-dessus d'un joueur et crache des traits de l'ombre sur le raid. On la <strong>tue sans traîner</strong>."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Un seul tank au nord du boss. Tout le reste en cercle autour de Teron,
// sur la plateforme — rôles mélangés, la place exacte importe peu.

pc(0, -120, 'tank');

const RING=['rdps','healer','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps',
            'healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','healer'];
for(let n=0;n<24;n++){
  const a = -Math.PI/2 + 0.26 + n*(2*Math.PI/24);
  const r = 200 + (n%2?24:0);
  pc(Math.cos(a)*r*1.28, Math.sin(a)*r*0.74, RING[n]);
}



};
