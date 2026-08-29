window.GUIDE_STEPS=[{"mech": "Le principe", "t": 8, "txt": "Il n'a que quatre sorts et n'enrage jamais. Ce qui vous tue, c'est <strong>votre mana</strong>. Chaque porteur de mana s'écarte de ses voisins dès le pull — pas au moment où ça devient urgent."}, {"mech": "Marque de Kaz'rogal", "t": 9, "txt": "Elle draine le mana de tout le raid, et revient <strong>dix secondes plus tôt à chaque fois</strong>. C'est un enrage déguisé : la pression monte jusqu'à ce que plus personne ne suive."}, {"mech": "L'explosion", "t": 10, "txt": "Celui qui tombe à zéro explose en dégâts d'Ombre autour de lui. Isolé, ça ne coûte rien. Au milieu du raid, ça vide les voisins et déclenche la chaîne. <strong>Sous 3 000 de mana, annoncez-le et sortez.</strong>", "focus": ["healer", "rdps"]}, {"mech": "Les parades", "t": 10, "txt": "<strong>Bloc de glace et Bouclier divin retirent la Marque</strong> — la parade la plus propre du raid. Les druides passent en chat ou en ours. Jugement de sagesse reste sur lui en permanence, et les casters enchaînent potion de mana puis Rune ténébreuse ou Rune démoniaque dès que la barre baisse, sans attendre l'urgence.", "focus": ["healer", "rdps"]}, {"mech": "Au corps-à-corps", "t": 8, "txt": "Choc martial étourdit, Faiblesse ralentit les attaques. Une <strong>potion de libre action</strong> évite de perdre dix secondes de dégâts au pire moment.", "focus": ["tank", "mdps"]}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

// Le raid se tient DERRIÈRE le boss, sur ~120° (le boss fait face au sud) :
// ni collés, ni éparpillés à 360°.
const N = -Math.PI/2, ARC = 2*Math.PI/3;      // nord, 120°

// Tank + corps-à-corps : au contact, juste derrière le boss, groupe resserré.
pc(0, -118, 'tank');
for(let n=0;n<7;n++){
  const a = N - 0.65 + n*(1.3/6), r = 132 + (n%2)*22;
  pc(Math.cos(a)*r, Math.sin(a)*r, 'mdps');
}
// Soigneurs : à distance, répartis sur tout l'arc pour couvrir tout le monde.
for(let n=0;n<6;n++){
  const a = N - ARC/2 + 0.10 + n*((ARC-0.20)/5);
  pc(Math.cos(a)*300, Math.sin(a)*300, 'healer');
}
// Distants : à distance eux aussi, intercalés entre les soigneurs.
for(let n=0;n<11;n++){
  const a = N - ARC/2 + 0.10 + (n+0.5)*((ARC-0.20)/11), r = 235 + (n%3)*42;
  pc(Math.cos(a)*r, Math.sin(a)*r, 'rdps');
}



};
