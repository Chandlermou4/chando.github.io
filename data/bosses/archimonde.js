window.GUIDE_STEPS=[{"mech": "Placement", "t": 6, "txt": "Prenez les <strong>Larmes de la Déesse</strong> avant le pull. Tout le monde, sans exception. Puis espacez-vous : jamais deux joueurs collés."}, {"mech": "Poigne de la Légion", "t": 8, "txt": "Une malédiction est posée sur des joueurs au hasard, qui ronge la vie et se stack. Elle se decurse — mages et druides doivent l'enlever dans la seconde, sans attendre qu'on le demande.", "focus": ["healer", "rdps"]}, {"mech": "Jaillissement d'Air", "t": 7, "txt": "Un joueur est projeté en l'air. <strong>Pendant la chute</strong>, il utilise les Larmes — sinon l'impact le tue."}, {"mech": "Feu Funeste", "t": 9, "txt": "Des colonnes de flammes vous poursuivent. Elles coupent la ligne droite : <strong>contournez</strong>, ne fuyez jamais tout droit."}, {"mech": "Peur de masse", "t": 7, "txt": "Fear régulier. <strong>Garde contre la Peur</strong> sur les soigneurs, totems de Séisme posés à l'avance — et surtout jamais à côté d'une traînée de Feu Funeste, sinon la peur vous y jette.", "focus": ["healer"]}, {"mech": "Doigt de la Mort", "t": 9, "txt": "Deux règles qui tuent silencieusement. <strong>Ne dépassez jamais 50 mètres</strong> : au-delà, c'est instantané. Et surtout, <strong>il doit toujours y avoir quelqu'un au corps-à-corps</strong> — si personne, il se retourne et foudroie un distant au hasard.", "focus": ["mdps"]}, {"mech": "Charge d'Âme", "t": 10, "txt": "À chaque mort, Archimonde gagne une <strong>Charge d'Âme</strong> qu'il relâche plus tard sur le raid : ~4 500 dégâts, plus un effet selon la classe du mort — silence (prêtre, mage, démoniste), <strong>+50 % de dégâts subis</strong> (guerrier, voleur, paladin), ou dégâts de Nature sur la durée et vidage de mana (druide, chaman, chasseur). Ces dégâts en tuent d'autres, qui rechargent Archimonde : un mort, et le combat s'effondre. Sans mort, le DPS est une formalité."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const ROLES=['tank','tank','healer','healer','healer','healer','healer','healer',
             'mdps','mdps','mdps','mdps','mdps','mdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.3, r=205+(n%3)*74;
  const g=pc(Math.cos(a)*r, Math.sin(a)*r, ROLES[n]||'rdps');
  const h=document.createElementNS(NS,'circle');
  h.setAttribute('r','36');h.setAttribute('class','spacing-halo');g.appendChild(h);
}



};
