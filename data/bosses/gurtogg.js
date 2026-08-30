window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Gurtogg est tenu <strong>à droite</strong> par <strong>trois tanks</strong> qui se relaient ; tout le reste se tient <strong>à gauche</strong>, groupé mais <strong>à distance</strong> — corps-à-corps compris, ils ne passent jamais au contact du combat."}, {"mech": "Fièvresang", "t": 9, "txt": "Toutes les dix secondes, les <strong>cinq joueurs les plus éloignés</strong> de lui prennent un poison de 600 par seconde pendant vingt-quatre secondes. On ne veut pas être ce groupe : <strong>2, 4 et 5</strong> se relaient pour tenir la position la plus éloignée, chacun encaissant une salve à son tour. <strong>Deux rotations complètes</strong> avant la phase 2.", "focus": ["healer"]}, {"mech": "La rotation des tanks", "t": 10, "txt": "Chaque coup empile une <strong>Blessure acide</strong> : &minus;500 d'armure, une minute de durée. À <strong>huit stacks</strong>, le tank principal arrête de générer de la menace et un autre le reprend. Gurtogg n'est <strong>pas provocable</strong> en phase 1, donc le <strong>Détournement du chasseur</strong> est posé sur le tank qui doit récupérer. Attention aussi à la <strong>Frappe stupéfiante</strong> : elle désoriente le tank cinq secondes et le sort de la table de menace.", "focus": ["tank"]}, {"mech": "Gangrerage", "t": 11, "txt": "À la dernière rotation de Fièvresang, <strong>tout le monde s'écarte sans passer devant le boss</strong> (Enchaînement). Un joueur au hasard est pris pour trente secondes : Gurtogg <strong>ne tape plus que lui</strong>, et un jet de poison part dessus immédiatement. <strong>S'il meurt, c'est le wipe</strong> — la Bénédiction de protection est utilisable, elle ne remet pas la menace à zéro.", "focus": ["healer"]}, {"mech": "Les soins pendant la phase 2", "t": 9, "txt": "Les soigneurs assignés <strong>terminent d'abord</strong> la rotation de Fièvresang en cours et les tanks encore chargés de Blessure acide. Ensuite seulement, tout bascule en <strong>surcharge de soins sur le Gangrerage</strong>.", "focus": ["healer"]}, {"mech": "Retour en phase 1", "t": 8, "txt": "Après trente secondes, on repasse en phase 1 : <strong>replacement des tanks</strong>, puis on reprend la rotation de Fièvresang <strong>groupes 2, 4, 5 — deux fois</strong> avant le Gangrerage suivant."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Gurtogg est tenu À DROITE par 3 tanks. Tout le reste joue À DISTANCE
// à gauche, corps-à-corps compris (Fièvresang frappe les 5 plus loin).

// 3 tanks collés au boss
pc(-18, -62, 'tank'); pc(36, -46, 'tank'); pc(58, 26, 'tank');

// le raid : paquet lâche autour du repère « RAID », à gauche
const R=['mdps','healer','rdps','mdps','rdps','healer','rdps','mdps','healer','rdps','mdps',
         'rdps','healer','rdps','mdps','rdps','healer','rdps','rdps','healer','rdps','mdps'];
const CX=-437, CY=118;
for(let n=0;n<R.length;n++){
  const a = n*2.399, r = 20*Math.sqrt(n);
  pc(CX + Math.cos(a)*r*1.15, CY + Math.sin(a)*r*0.9, R[n]);
}



};
