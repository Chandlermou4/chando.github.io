window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "<strong>Aucun boss à tanker</strong> pour le raid : une fois libérée, l'Ombre fonce sur <strong>Akama</strong> — un PNJ allié — qui la tanke lui-même. Les deux tanks du raid ne gèrent que les <strong>adds</strong>, un à gauche, un à droite. Au départ, le raid monte <strong>tout au nord, au-delà des escaliers</strong>, sur les <strong>Canalistes cendrelangue</strong> — priorité absolue : chaque Canaliste ralentit l'Ombre de <strong>30 %</strong>, et l'effet se cumule. Tant qu'il y en a assez de vivants, elle ne bouge pas du tout."}, {"mech": "Vagues d'adds", "t": 9, "txt": "Des groupes déferlent des <strong>deux côtés</strong> pendant que vous tuez les Canalistes. Chaque tank encaisse son côté ; les DPS <strong>ne lâchent jamais un Canaliste</strong> — eux seuls font avancer le combat.", "focus": ["tank"]}, {"mech": "Ordre de kill", "t": 9, "txt": "Des <strong>Ensorceleurs cendrelangue</strong> apparaissent en phase 1 et <strong>remplacent les Canalistes tués</strong> : même priorité, sinon l'Ombre est bloquée pour rien. Derrière eux : les <strong>Élémentalistes</strong> (dégâts de zone), les <strong>Lieurs d'esprit</strong> (ils soignent), puis Défenseurs et Voleurs, laissés aux tanks."}, {"mech": "Phase 2 : l'Ombre libérée", "t": 9, "txt": "L'Ombre rejoint Akama, qui la tanke. On la descend, <strong>tous les CD offensifs</strong> dessus."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Aucun boss à tanker pour le raid : Akama (PNJ allié) encaisse l'Ombre
// lui-même une fois libérée. Les deux tanks ne gèrent que les adds, un
// À GAUCHE et un À DROITE.

pc(-300, -190, 'tank');   // tank gauche (plateforme gauche)
pc( 340, -190, 'tank');   // tank droite (plateforme droite)

// AU DÉPART : le raid monte tout au nord, au-delà des escaliers, sur
// les Canalistes. Paquet resserré, placement libre.
const R=['mdps','healer','rdps','mdps','rdps','healer','rdps','mdps','healer','rdps','mdps',
         'rdps','healer','rdps','mdps','rdps','healer','rdps','rdps','healer','rdps','rdps','healer'];
for(let n=0;n<R.length;n++){
  const a = (n/R.length)*Math.PI*2 + 0.6;
  const r = 42 + (n%4)*30;
  pc(Math.cos(a)*r*1.35 + 30, Math.sin(a)*r*0.68 - 315, R[n]);
}



};
