window.GUIDE_STEPS=[{"mech": "Le principe", "t": 8, "txt": "Il n'a que quatre sorts et n'enrage jamais. Ce qui vous tue, c'est <strong>votre mana</strong>. Chaque porteur de mana s'écarte de ses voisins dès le pull — pas au moment où ça devient urgent."}, {"mech": "Marque de Kaz'rogal", "t": 9, "txt": "Elle draine le mana de tout le raid, et revient <strong>dix secondes plus tôt à chaque fois</strong>. C'est un enrage déguisé : la pression monte jusqu'à ce que plus personne ne suive."}, {"mech": "L'explosion", "t": 10, "txt": "Celui qui tombe à zéro explose en dégâts d'Ombre autour de lui. Isolé, ça ne coûte rien. Au milieu du raid, ça vide les voisins et déclenche la chaîne. <strong>Sous 3 000 de mana, annoncez-le et sortez.</strong>", "focus": ["healer", "rdps"]}, {"mech": "Les parades", "t": 10, "txt": "<strong>Bloc de glace et Bouclier divin retirent la Marque</strong> — la parade la plus propre du raid. Les druides passent en chat ou en ours. Jugement de sagesse reste sur lui en permanence, et les casters enchaînent potion de mana puis Rune sombre ou Rune démoniaque dès que la barre baisse, sans attendre l'urgence.", "focus": ["healer", "rdps"]}, {"mech": "Au corps-à-corps", "t": 8, "txt": "Choc Martial étourdit, Faiblesse ralentit les attaques. Une <strong>potion de libre action</strong> pendant vos temps forts évite de perdre dix secondes de dégâts au pire moment.", "focus": ["tank", "mdps"]}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

// très écartés : c'est toute la parade du combat
const R=['tank','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps',
         'rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','mdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.15, r=(R[n]==='mdps'||R[n]==='tank')?128:(n%2?250:335);
  pc(Math.cos(a)*r, Math.sin(a)*r, R[n]);
}



};
