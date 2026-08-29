window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Trois tanks tournent sur lui, toujours <strong>dos tourné vers le raid</strong>. Aucun cône, aucune frappe frontale ne doit jamais viser le groupe.", "focus": ["tank"]}, {"mech": "Fièvresang", "t": 8, "txt": "Toutes les dix secondes, les <strong>cinq joueurs les plus éloignés</strong> de lui encaissent un poison qui ronge la vie pendant plusieurs secondes. Restez à distance raisonnable plutôt que de vous replier tout au fond de la salle."}, {"mech": "Blessure Acide", "t": 8, "txt": "Chaque coup empile une réduction de soins sur le tank en place. Elle devient vite ingérable — <strong>la rotation des tanks existe pour ça</strong>, pas pour se relayer au hasard.", "focus": ["tank", "healer"]}, {"mech": "Gangrerage", "t": 10, "txt": "Un joueur au hasard devient l'unique cible pendant trente secondes, gagne une énorme réserve de vie et d'armure, et prend des dégâts massifs. <strong>Tout le monde s'écarte de lui</strong> pour ne pas prendre les éclaboussures, et tous les soins basculent dessus — c'est le moment de sortir ses propres défensives.", "focus": ["healer", "rdps"]}, {"mech": "Le cycle", "t": 9, "txt": "Après trente secondes, le Gangrerage retombe et le combat revient en phase une. Il est <strong>immunisé à la provocation</strong> — s'il perd sa cible, il passe directement au deuxième en menace, pas de rattrapage possible."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['healer','mdps','rdps','healer','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps',
         'mdps','rdps','healer','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps','healer','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.6, r=n%2?245:330;
  pc(Math.cos(a)*r, 40+Math.sin(a)*r, R[n]);
}



};
