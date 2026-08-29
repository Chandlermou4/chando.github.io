window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Trois tanks, tous <strong>au nord</strong> et tournés vers le sud. Le tank principal tient Supremus ; les <strong>deux autres restent en mêlée</strong>, maintenus au maximum de vie — ce sont eux qui encaissent la Frappe haineuse. Derrière le boss, tout le raid s'étale largement : il y a de la place, on l'utilise.", "focus": ["tank"]}, {"mech": "Frappe haineuse", "t": 8, "txt": "Toutes les une à deux secondes, Supremus frappe très fort le joueur <strong>au corps-à-corps qui a le plus de vie</strong> sur le moment — hors tank principal, et sans aucun rapport avec la menace. D'où les deux tanks supplémentaires collés à lui. <strong>Aucun DPS mêlée ne doit avoir plus de vie que ces tanks.</strong>", "focus": ["tank", "healer"]}, {"mech": "Flamme de la fournaise", "t": 8, "txt": "Des <strong>lignes de flammes</strong> partent vers des joueurs au hasard et restent au sol une dizaine de secondes. On en sort tout de suite — ça ne se soigne pas à travers, ça se contourne."}, {"mech": "Phase de kite", "t": 9, "txt": "Supremus <strong>arrête de taper</strong> et se fixe sur un joueur au hasard, <strong>change de cible toutes les dix secondes</strong>. Le joueur visé le tient à <strong>mi-distance</strong> : trop près, le Punch de la fournaise le repousse et le tue ; trop loin, Supremus charge."}, {"mech": "Geyser volcanique", "t": 8, "txt": "Pendant le kite, des <strong>geysers</strong> éclatent au sol, grosse zone. Personne ne reste groupé, on bouge en continu et les soigneurs passent aux <strong>soins instantanés</strong>. Attention pendant les vocals — les boules de feu portent loin.", "focus": ["healer"]}, {"mech": "Retour en phase 1", "t": 7, "txt": "Le <strong>dernier joueur fixé ramène Supremus</strong> vers la zone de tank de la phase 1. La menace est <strong>remise à zéro</strong> : un Détournement de chasseur permet au tank principal de le reprendre aussitôt."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Phase 1 : les 3 tanks au NORD du boss, tournés vers le sud. Supremus
// leur fait face, dos au raid. Tout le raid s'étale largement au sud —
// il y a beaucoup de place.

// 3 tanks côte à côte, au nord
pc(-46, -72, 'tank'); pc(2, -86, 'tank'); pc(50, -72, 'tank');

// corps-à-corps : petit paquet dans le dos du boss (sud proche)
[[-44,84],[46,84],[-18,120],[24,120],[0,150]].forEach(p=>pc(p[0],p[1],'mdps'));

// soigneurs : arc sud, bien espacés
for(let n=0;n<6;n++){
  const a = Math.PI/2 - 1.25 + n*(2.5/5), r = 200 + (n%2)*26;
  pc(Math.cos(a)*r, Math.sin(a)*r, 'healer');
}

// distants : arc sud plus large et plus loin, très étalés
for(let n=0;n<11;n++){
  const a = Math.PI/2 - 1.45 + n*(2.9/10), r = 262 + (n%3)*26;
  pc(Math.cos(a)*r, Math.sin(a)*r, 'rdps');
}



};
