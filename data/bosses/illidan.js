window.GUIDE_STEPS=[{"mech": "Phase 1 : le tank principal", "t": 9, "txt": "Il est tenu dos tourné vers le raid, tout simplement. Son Cisaillement vise le tank en place et réduit sa vie maximale — ça se soigne en anticipation, pas en réaction.", "focus": ["tank"]}, {"mech": "Flammes d'Azzinoth", "t": 10, "txt": "À 65 %, il s'envole et libère deux Flammes. <strong>Un tank résistance au feu par flamme</strong>, et surtout : <strong>personne ne s'éloigne du centre</strong> — au-delà de 25 mètres d'une Flamme ou de sa lame, tout enrage et le raid meurt.", "focus": ["tank"]}, {"mech": "Flammes Déchirantes", "t": 8, "txt": "Une fois au sol, il inflige des dégâts de feu à un joueur et à ceux qui se trouvent juste à côté. <strong>Écartez-vous les uns des autres</strong>, sans sortir de portée de soin pour autant."}, {"mech": "Forme de Démon", "t": 9, "txt": "Il se transforme et son aura brûle tout ce qui reste proche. <strong>Un démoniste en résistance à l'Ombre</strong> le tient à distance ; le reste du corps-à-corps recule complètement pendant cette minute-là.", "focus": ["tank"]}, {"mech": "Les pièges de Maiev", "t": 8, "txt": "Sous 30 %, il entre en enrage temporaire. Maiev pose des pièges au sol — <strong>on l'y entraîne</strong> pour l'étourdir et casser l'enrage, avant de reprendre le cycle des phases précédentes jusqu'à sa mort."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['tank','tank','tank','healer','healer','mdps','rdps','healer','rdps','mdps','rdps','healer',
         'rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps','healer'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.3, r=n%2?255:335;
  pc(Math.cos(a)*r, 40+Math.sin(a)*r, R[n]);
}



};
