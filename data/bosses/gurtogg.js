window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Gurtogg est tenu <strong>à droite</strong> par <strong>trois tanks</strong> qui se relaient. Les corps-à-corps sont au contact ; soigneurs et distants s'étalent <strong>à gauche</strong>, à distance. Au pull en revanche, <strong>tout le monde part de la gauche</strong>, corps-à-corps compris."}, {"mech": "Fièvresang", "t": 9, "txt": "Toutes les dix secondes, les <strong>cinq joueurs les plus éloignés</strong> prennent 600 par seconde pendant vingt-quatre secondes. Les <strong>corps-à-corps encaissent la première</strong>, puis <strong>rentrent au contact</strong> du boss. Ensuite, il faut <strong>au moins trois groupes</strong> qui se relaient à la position la plus éloignée — jamais deux salves de suite sur les mêmes.", "focus": ["healer"]}, {"mech": "La rotation des tanks", "t": 10, "txt": "Chaque coup empile une <strong>Blessure acide</strong> : &minus;500 d'armure, une minute de durée. À <strong>huit stacks</strong>, le tank principal arrête de générer de la menace et un autre le reprend. Gurtogg n'est <strong>pas provocable</strong> en phase 1, donc le <strong>Détournement du chasseur</strong> est posé sur le tank qui doit récupérer. Attention aussi à la <strong>Frappe stupéfiante</strong> : elle désoriente le tank cinq secondes et le sort de la table de menace.", "focus": ["tank"]}, {"mech": "Gangrerage", "t": 11, "txt": "À la dernière rotation de Fièvresang, <strong>tout le monde s'écarte sans passer devant le boss</strong> (Enchaînement). Un joueur au hasard est pris pour trente secondes : Gurtogg <strong>ne tape plus que lui</strong>, et un jet de poison part dessus immédiatement. <strong>S'il meurt, c'est le wipe</strong> — la Bénédiction de protection est utilisable, elle ne remet pas la menace à zéro.", "focus": ["healer"]}, {"mech": "Les soins pendant la phase 2", "t": 9, "txt": "Les soigneurs assignés <strong>terminent d'abord</strong> la rotation de Fièvresang en cours et les tanks encore chargés de Blessure acide. Ensuite seulement, tout bascule <strong>sur le Gangrerage</strong>.", "focus": ["healer"]}, {"mech": "Retour en phase 1", "t": 8, "txt": "Après trente secondes, on repasse en phase 1 : <strong>replacement des tanks</strong>, puis on relance la rotation Fièvresang jusqu'au Gangrerage suivant."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// État stable : 3 tanks + corps-à-corps sur le boss, à droite. Soigneurs
// et distants étalés à gauche (Fièvresang frappe les 5 plus éloignés).
// Au pull, les CàC partent aussi de la gauche puis rentrent.

pc(-18, -62, 'tank'); pc(36, -46, 'tank'); pc(58, 26, 'tank');

// corps-à-corps : au contact du boss
[[-74,54],[-40,92],[14,96],[52,72],[74,4]].forEach(p=>pc(p[0],p[1],'mdps'));

// soigneurs + distants : étalés à gauche, à distance
const R=['healer','rdps','rdps','healer','rdps','healer','rdps','rdps','healer','rdps','rdps',
         'healer','rdps','rdps','rdps','healer','rdps'];
const CX=-448, CY=120;
for(let n=0;n<R.length;n++){
  const a = n*2.399, r = 34 + 22*Math.sqrt(n);
  pc(CX + Math.cos(a)*r*1.15, CY + Math.sin(a)*r*0.82, R[n]);
}



};
