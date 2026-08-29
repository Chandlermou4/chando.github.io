window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Écartés <strong>dans son dos</strong>, jamais devant : son Enchaînement balaie tout le cône devant lui. Les corps-à-corps se collent à l'arrière, distants et soigneurs se placent en éventail. La Pluie de feu tombe sans prévenir — on en sort immédiatement, sans attendre le deuxième tic."}, {"mech": "Destin funeste", "t": 9, "txt": "Toutes les 45 secondes, un joueur au hasard est condamné. <strong>Rien ne l'enlève</strong> : ni dissipation, ni immunité. Vingt secondes plus tard il meurt, et un Garde funeste naît sur son cadavre."}, {"mech": "La route du condamné", "t": 10, "txt": "C'est la seule vraie consigne du combat : le marqué <strong>rejoint le point convenu et meurt là-bas</strong>, jamais au milieu du raid. Un démoniste lui pose une Pierre d'âme avant l'échéance — la mort est programmée, la résurrection n'a pas à attendre."}, {"mech": "Les Gardes funestes", "t": 9, "txt": "Le second tank récupère le Garde funeste dès son apparition, les corps-à-corps le descendent sur place. Laissé libre, il piétine et enchaîne les soigneurs — c'est ce qui transforme une gêne en wipe.", "focus": ["tank", "mdps"]}, {"mech": "Hurlement d'Azgalor", "t": 9, "txt": "Cinq secondes de silence sur <strong>tout le raid</strong>, pas seulement la mêlée. On ne rattrape pas un silence : les soigneurs remontent les barres <strong>avant</strong> la fenêtre. L'Aura de concentration améliorée <strong>raccourcit</strong> le silence (environ 30 %), elle ne le bloque pas ; la résistance à l'Ombre, elle, donne une chance de le résister complètement.", "focus": ["healer"]}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

// Azgalor est tiré vers le NORD-OUEST et tenu face à cette direction :
// son Enchaînement balaie le cône au nord-ouest. Tout le raid se rassemble
// au SUD-EST, dans son dos ; personne devant.
const SE = Math.PI/4;          // rassemblement du raid
const NW = SE + Math.PI;       // dos du boss = cône frontal
// tank principal : au contact, dans le cône, côté nord-ouest
pc(Math.cos(NW)*150, Math.sin(NW)*150, 'tank');
// second tank : au point de Destin funeste (nord-est, à l'écart du raid), prêt à ramasser les Gardes
pc(250, -235, 'tank');
// corps-à-corps : arc serré collé à son dos, au sud-est
for(let n=0;n<5;n++){
  const a = SE - 0.55 + n*0.275;
  pc(Math.cos(a)*140, Math.sin(a)*140, 'mdps');
}
// soigneurs : couronne intermédiaire, à portée de la mêlée et des distants
for(let n=0;n<5;n++){
  const a = SE - 0.9 + n*0.45;
  pc(Math.cos(a)*250, Math.sin(a)*250, 'healer');
}
// distants : large éventail au sud-est, bien espacés (Pluie de feu, Hurlement)
for(let n=0;n<13;n++){
  const a = SE - 1.15 + n*(2.3/12), r = 320 + (n%2)*46;
  pc(Math.cos(a)*r, Math.sin(a)*r, 'rdps');
}



};
