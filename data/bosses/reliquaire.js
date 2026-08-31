window.GUIDE_STEPS=[{"mech": "Essence de la souffrance", "t": 9, "txt": "Aucun soin ne passe, aucune régénération non plus. Il <strong>frappe toujours le plus proche</strong> — le raid tourne pour répartir les coups plutôt que de laisser un seul tank encaisser à sec."}, {"mech": "Drain d'âme", "t": 8, "txt": "Trois joueurs perdent vie et mana en continu. <strong>Dissipez-le sans attendre</strong> — c'est relancé sans arrêt pendant toute cette phase.", "focus": ["healer"]}, {"mech": "Interlude", "t": 8, "txt": "Entre chaque visage, des Âmes asservies apparaissent. <strong>Tuez-les près de vous</strong> : chaque mort restitue 30 % de vie et de mana à ceux qui se trouvent autour — c'est la seule pause de tout le combat."}, {"mech": "Essence du désir", "t": 9, "txt": "La moitié de vos propres dégâts vous revient dessus. Les soins sont doublés en compensation, mais <strong>un gros coup porté d'un coup peut vous tuer vous-même</strong> — dosez plutôt que de tout envoyer."}, {"mech": "Sorts à gérer", "t": 9, "txt": "Un bouclier de runes à dissiper, un sort à renvoyer sur elle plutôt que sur vous. <strong>Le mana du raid entier s'épuise</strong> avec le temps — ce n'est pas un combat qu'on peut laisser traîner.", "focus": ["tank", "healer"]}, {"mech": "Essence de la colère", "t": 8, "txt": "Des dégâts de raid qui augmentent à chaque tic, impossibles à tenir indéfiniment. <strong>Tous vos CD offensifs sortent ici</strong> — c'est une course, pas un combat d'endurance."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['tank','healer','healer','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps',
         'rdps','healer','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps'];
// Le boss se tient au nord de la salle : le raid s'étale au sud, bien espacé.
const CX=-40, CY=250;
for(let n=0;n<R.length;n++){
  const a=n*2.399, rr=30+30*Math.sqrt(n);
  pc(CX+Math.cos(a)*rr*1.45, CY+Math.sin(a)*rr*0.72, R[n]);
}

};
