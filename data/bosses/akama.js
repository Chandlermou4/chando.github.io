window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Pas de boss à tanker au début : <strong>un tank à gauche, un tank à droite</strong> ramassent les adds à leur point d'apparition. Le raid se regroupe <strong>entre les deux</strong> et burst — le placement exact n'a pas d'importance. Priorité absolue aux <strong>Canalistes Cendrelangue</strong> : chaque mort libère un peu plus l'Ombre vers Akama."}, {"mech": "Vagues d'adds", "t": 9, "txt": "Des groupes déferlent des <strong>deux côtés</strong> pendant que vous tuez les Canalistes. Chaque tank encaisse son côté ; les DPS bursten la plateforme mais ne laissent jamais un Canaliste en vie — eux seuls font avancer le combat.", "focus": ["tank"]}, {"mech": "Sorciers Cendrelangue", "t": 8, "txt": "Des Sorciers Cendrelangue remplacent les Canalistes tués, avec exactement le même effet de ralentissement. <strong>Même priorité absolue</strong> : tant qu'il en reste trois vivants en même temps, il ne bouge pas du tout."}, {"mech": "Phase 2 : la course", "t": 9, "txt": "Dès qu'il atteint Akama, vous avez <strong>soixante secondes</strong> pour l'achever. Toutes les sauvegardes offensives sortent dès le début de cette phase — un timer aussi court ne pardonne pas d'attendre."}, {"mech": "Ombre de la Mort", "t": 8, "txt": "Toutes les trente secondes, un joueur est marqué. <strong>Il rejoint un coin écarté du raid</strong> avant la fin du décompte, pour que l'explosion ne touche personne d'autre.", "focus": ["rdps"]}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Pas de boss à tanker en P1 : deux tanks tiennent les adds, un À GAUCHE
// et un À DROITE. Le raid se regroupe entre les deux et burst — le
// placement exact n'a pas d'importance.

pc(-300, -190, 'tank');   // tank gauche (plateforme gauche)
pc( 340, -190, 'tank');   // tank droite (plateforme droite)

// raid : paquet lâche entre les deux tanks
const R=['mdps','healer','rdps','mdps','rdps','healer','rdps','mdps','healer','rdps','mdps',
         'rdps','healer','rdps','mdps','rdps','healer','rdps','rdps','healer','rdps','rdps','healer'];
for(let n=0;n<R.length;n++){
  const a = (n/R.length)*Math.PI*2 + 0.6;
  const r = 55 + (n%4)*40;
  pc(Math.cos(a)*r*1.5, Math.sin(a)*r*0.8 + 45, R[n]);
}



};
