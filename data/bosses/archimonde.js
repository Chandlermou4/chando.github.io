window.GUIDE_STEPS=[{"mech": "Placement", "t": 6, "txt": "Prenez les <strong>Larmes de la Déesse</strong> avant le pull. Tout le monde, sans exception. Puis espacez-vous : jamais deux joueurs collés."}, {"mech": "Poigne de la Légion", "t": 8, "txt": "Une malédiction est posée sur des joueurs au hasard, qui ronge la vie et se stack. Elle se decurse — mages et druides doivent l'enlever dans la seconde, sans attendre qu'on le demande.", "focus": ["healer", "rdps"]}, {"mech": "Jaillissement d'air", "t": 7, "txt": "Un joueur est projeté en l'air. <strong>Pendant la chute</strong>, il utilise les Larmes — sinon l'impact le tue."}, {"mech": "Feu funeste", "t": 9, "txt": "Des colonnes de flammes vous poursuivent. Elles coupent la ligne droite : <strong>contournez</strong>, ne fuyez jamais tout droit."}, {"mech": "Peur de masse", "t": 7, "txt": "Fear régulier. <strong>Gardien de peur</strong> sur les soigneurs, totems de séisme posés à l'avance — et surtout jamais à côté d'une traînée de Feu funeste, sinon le fear risque de vous envoyer dedans.", "focus": ["healer"]}, {"mech": "Doigt de la mort", "t": 9, "txt": "Deux règles qui tuent silencieusement. <strong>Ne dépassez jamais 50 mètres</strong> : au-delà, c'est instantané. Et surtout, <strong>il doit toujours y avoir quelqu'un au corps-à-corps</strong> — si personne, il se retourne et foudroie un distant au hasard.", "focus": ["mdps"]}, {"mech": "Charge d'âme", "t": 10, "txt": "À chaque mort, Archimonde gagne une <strong>Charge d'âme</strong> qu'il relâche plus tard sur le raid : ~4 500 dégâts, plus un effet selon la classe du mort — silence (prêtre, mage, démoniste), <strong>+50 % de dégâts subis</strong> (guerrier, voleur, paladin), ou dégâts de Nature sur la durée et vidage de mana (druide, chaman, chasseur). Ces dégâts en tuent d'autres, qui rechargent Archimonde : un mort, et le combat s'effondre. Sans mort, le DPS est une formalité."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

// On s'espace, mais pas sur 360° : le tiers nord reste vide.
const halo = g=>{const h=document.createElementNS(NS,'circle');
  h.setAttribute('r','36');h.setAttribute('class','spacing-halo');g.appendChild(h);};

// Tanks : au nord, au contact d'Archimonde.
pc(-58,-138,'tank'); pc(58,-138,'tank');

// Corps-à-corps : au sud, près du boss, groupe resserré — assez espacés
// pour le Feu funeste et le Jaillissement d'air, pas plus.
for(let n=0;n<6;n++){
  const a = Math.PI/2 - 0.85 + n*(1.7/5);      // ~41° -> ~139°, centré plein sud
  const r = 150 + (n%2)*24;
  halo(pc(Math.cos(a)*r, Math.sin(a)*r, 'mdps'));
}

// Soigneurs : à distance, répartis d'est en ouest sur tout l'arc (240°).
const A0 = -Math.PI/6 + 0.12, ARC = 4*Math.PI/3 - 0.24;
for(let n=0;n<6;n++){
  const a = A0 + n*(ARC/5);
  halo(pc(Math.cos(a)*338, Math.sin(a)*338, 'healer'));
}

// Distants : à distance eux aussi, intercalés entre les soigneurs.
for(let n=0;n<11;n++){
  const a = A0 + (n+0.5)*(ARC/11), r = 250 + (n%3)*40;
  halo(pc(Math.cos(a)*r, Math.sin(a)*r, 'rdps'));
}



};
