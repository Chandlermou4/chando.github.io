window.GUIDE_STEPS=[{"mech": "Placement", "t": 9, "txt": "Gruul au centre, jamais tourné. Les corps-à-corps forment un <strong>cercle large</strong> à portée maximale, les distants et les soigneurs occupent tout le pourtour de la salle. La règle unique de ce combat : <strong>huit mètres entre chacun, tout le temps</strong>."}, {"mech": "Frappe Nocive", "t": 9, "txt": "Elle frappe toujours le <strong>deuxième en menace parmi les joueurs au corps-à-corps</strong>, toutes les vingt secondes, pour 12 000 à 13 000. Le tank numéro deux doit tenir cette place — si un DPS le dépasse, ce DPS meurt.", "focus": ["tank", "mdps"]}, {"mech": "Éboulement", "t": 8, "txt": "Une zone au sol, huit mètres de rayon, environ 3 000 dégâts toutes les trois secondes. Le sol vous prévient avant l'impact. <strong>Dézoomez la caméra au maximum</strong> et faites un pas de côté — c'est entièrement évitable."}, {"mech": "Heurt Terrestre", "t": 11, "txt": "Tout le raid est projeté dans une direction aléatoire. À l'atterrissage vous êtes ralentis, de plus en plus, jusqu'à être <strong>pétrifiés sur place</strong>. C'est la fenêtre où tout se joue : <strong>éloignez-vous des autres immédiatement</strong>, ne cherchez pas votre place habituelle."}, {"mech": "Fracasser", "t": 11, "txt": "Chaque joueur pétrifié explose et blesse ses voisins. <strong>Collés, c'est 9 000 dégâts. À vingt mètres, une centaine.</strong> Tout le combat tient dans cet écart. Et la Croissance ajoute 15 % de dégâts toutes les trente secondes : au-delà de la quatorzième pile, plus aucun soigneur ne suit."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

// corps-à-corps : cercle large autour de Gruul
for(let n=0;n<5;n++){const a=Math.PI*2*n/5+0.7;pc(Math.cos(a)*140,Math.sin(a)*140,'mdps')}
// distants + soigneurs : pourtour, bien écartés
for(let n=0;n<12;n++){const a=Math.PI*2*n/12+0.25;pc(Math.cos(a)*352,Math.sin(a)*352,'rdps')}
for(let n=0;n<5;n++){const a=Math.PI*2*n/5+0.9;pc(Math.cos(a)*252,Math.sin(a)*252,'healer')}



};
