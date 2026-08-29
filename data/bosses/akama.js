window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Six Canalistes Cendrelangue le maintiennent enchaîné. <strong>Tuez-les en priorité absolue</strong> — chaque mort le ralentit un peu moins, jusqu'à ce qu'il puisse enfin avancer vers Akama."}, {"mech": "Vagues d'adds", "t": 9, "txt": "Des groupes arrivent par les deux portes latérales pendant que vous tuez les Canalistes. <strong>Un tank par porte</strong>, et les DPS n'y touchent pas — seuls les Canalistes comptent pour faire avancer le combat.", "focus": ["tank"]}, {"mech": "Sorciers Cendrelangue", "t": 8, "txt": "Des Sorciers Cendrelangue remplacent les Canalistes tués, avec exactement le même effet de ralentissement. <strong>Même priorité absolue</strong> : tant qu'il en reste trois vivants en même temps, il ne bouge pas du tout."}, {"mech": "Phase 2 : la course", "t": 9, "txt": "Dès qu'il atteint Akama, vous avez <strong>soixante secondes</strong> pour l'achever. Toutes les sauvegardes offensives sortent dès le début de cette phase — un timer aussi court ne pardonne pas d'attendre."}, {"mech": "Ombre de la Mort", "t": 8, "txt": "Toutes les trente secondes, un joueur est marqué. <strong>Il rejoint un coin écarté du raid</strong> avant la fin du décompte, pour que l'explosion ne touche personne d'autre.", "focus": ["rdps"]}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['tank','tank','tank','healer','healer','mdps','mdps','rdps','rdps','mdps','healer','rdps',
         'mdps','rdps','healer','mdps','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.2, r=n%2?300:365;
  pc(Math.cos(a)*r, Math.sin(a)*r, R[n]);
}



};
