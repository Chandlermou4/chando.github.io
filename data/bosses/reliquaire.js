window.GUIDE_STEPS=[{"mech": "Essence de la Souffrance", "t": 9, "txt": "Aucun soin ne passe, aucune régénération non plus. Il <strong>frappe toujours le plus proche</strong> — le raid tourne pour répartir les coups plutôt que de laisser un seul tank encaisser à sec."}, {"mech": "Drain d'Âme", "t": 8, "txt": "Trois joueurs perdent vie et mana en continu. <strong>Dissipez-le sans attendre</strong> — c'est relancé sans arrêt pendant toute cette phase.", "focus": ["healer"]}, {"mech": "Interlude", "t": 8, "txt": "Entre chaque visage, des Âmes Asservies apparaissent. <strong>Tuez-les près de vous</strong> : chaque mort restitue 30 % de vie et de mana à ceux qui se trouvent autour — c'est la seule pause de tout le combat."}, {"mech": "Essence du Désir", "t": 9, "txt": "La moitié de vos propres dégâts vous revient dessus. Les soins sont doublés en compensation, mais <strong>un gros coup porté d'un coup peut vous tuer vous-même</strong> — dosez plutôt que de tout envoyer."}, {"mech": "Sorts à gérer", "t": 9, "txt": "Un bouclier de runes à dissiper, un sort à renvoyer sur elle plutôt que sur vous. <strong>Le mana du raid entier s'épuise</strong> avec le temps — ce n'est pas un combat qu'on peut laisser traîner.", "focus": ["tank", "healer"]}, {"mech": "Essence de la Colère", "t": 8, "txt": "Des dégâts de raid qui augmentent à chaque tic, impossibles à tenir indéfiniment. <strong>Toutes les sauvegardes offensives sortent ici</strong> — c'est une course, pas un combat d'endurance."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['tank','healer','healer','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps',
         'rdps','healer','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.4, r=n%2?230:310;
  pc(Math.cos(a)*r, 20+Math.sin(a)*r, R[n]);
}



};
