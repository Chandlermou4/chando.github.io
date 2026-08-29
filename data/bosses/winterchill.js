window.GUIDE_STEPS=[{"mech": "Placement", "t": 7, "txt": "Un seul tank, aucun soigneur supplémentaire. Il arrive une minute après la huitième vague : le tank le pose <strong>au centre et n'en bouge plus</strong>, le raid s'écarte tout autour."}, {"mech": "Éclair de Glace", "t": 11, "txt": "C'est lui qui fait perdre le combat. Un joueur au hasard encaisse près de 5 000 dégâts, puis se retrouve <strong>enfermé quatre secondes</strong> en prenant 2 500 par seconde. Pendant le gel, potions, pierres de soin et Protection Divine ne fonctionnent pas — seuls le <strong>bijou PvP</strong>, le Bloc de Glace, le Bouclier Divin et la Téléportation vous sortent de là."}, {"mech": "Mort & décomposition", "t": 10, "txt": "Une flaque de vingt mètres posée sur un joueur au hasard : <strong>15 % de votre vie maximale par seconde</strong>, pendant dix secondes. Tout le monde en sort. Sauf le tank, qui reste dedans pour garder sa menace — et que les soigneurs ne lâchent surtout pas.", "focus": ["tank", "healer"]}, {"mech": "Nova de Givre", "t": 9, "txt": "Immobilisation de six à dix secondes autour de lui. En soi ce n'est rien. Combinée à une Mort & décomposition posée au même endroit, c'est mortel. <strong>Elle se dissipe</strong> : prêtres et paladins libèrent les corps-à-corps en priorité.", "focus": ["healer", "mdps"]}, {"mech": "La course", "t": 8, "txt": "Lâchez l'Héroïsme sur la <strong>première Mort & décomposition</strong> : pendant qu'il canalise, il n'esquive ni ne pare. L'enrage n'arrive qu'à dix minutes, vous avez le temps. Ce qui vous tue, c'est un soigneur perdu à l'Éclair de Glace."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['tank','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps',
         'rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.5, r=(R[n]==='mdps'||R[n]==='tank')?125:(n%2?255:330);
  pc(Math.cos(a)*r, Math.sin(a)*r, R[n]);
}



};
