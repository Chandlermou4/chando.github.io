window.GUIDE_STEPS=[{"mech": "Placement", "t": 7, "txt": "Un seul tank. Il arrive une minute après la huitième vague : le tank l'engage sur place et ne le bouge plus. Les corps-à-corps restent au contact ; <strong>distants et soigneurs s'étalent largement à l'écart</strong>, jamais en paquet serré."}, {"mech": "Éclair de glace", "t": 11, "txt": "C'est lui qui fait perdre le combat. Un joueur au hasard encaisse près de 5 000 dégâts, puis se retrouve <strong>enfermé quatre secondes</strong> en prenant 2 500 par seconde. Pendant le gel, potions, pierres de soin et Protection divine ne fonctionnent pas — seuls le <strong>bijou PvP</strong>, le Bloc de glace, le Bouclier divin et le Transfert vous sortent de là."}, {"mech": "Mort et décomposition", "t": 10, "txt": "Une flaque de <strong>30 mètres</strong>, lancée aléatoirement sur un joueur et la zone autour de lui : <strong>1 313 à 1 687 dégâts d'Ombre toutes les deux secondes</strong>, pendant vingt secondes. Tout le monde en sort. Sauf le tank, qui reste dedans pour garder sa menace — et que les soigneurs ne lâchent surtout pas.", "focus": ["tank", "healer"]}, {"mech": "Nova de givre", "t": 9, "txt": "Immobilisation de six à dix secondes autour de lui. En soi ce n'est rien. Combinée à une Mort et décomposition posée au même endroit, c'est mortel. <strong>Elle se dissipe</strong> : prêtres et paladins libèrent les corps-à-corps en priorité.", "focus": ["healer", "mdps"]}, {"mech": "La course", "t": 8, "txt": "Lâchez la Furie sanguinaire sur la <strong>première Mort et décomposition</strong> : pendant qu'il canalise, il n'esquive ni ne pare. L'enrage n'arrive qu'à dix minutes, vous avez le temps."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

// Placement calqué sur les repères : tank + boss + corps-à-corps groupés,
// distants et soigneurs mélangés, étirés en ligne vers le nord-est.

pc(-70, 82, 'tank');

// Corps-à-corps : petit paquet au contact, au nord-est du boss.
const M=[[40,-52],[72,-70],[52,-96],[92,-46],[104,-80],[64,-116]];
for(const [x,y] of M) pc(x, y, 'mdps');

// Distants + soigneurs mélangés : deux rangs étalés le long de la ligne NE.
const S=[-175,-298], E=[328,62];
const dx=E[0]-S[0], dy=E[1]-S[1], L=Math.hypot(dx,dy);
const px=-dy/L, py=dx/L;                 // perpendiculaire unitaire
const MIX=['healer','rdps','rdps','healer','rdps','rdps','healer','rdps','rdps',
           'rdps','healer','rdps','rdps','healer','rdps','rdps','healer','rdps'];
for(let row=0;row<2;row++){
  for(let i=0;i<9;i++){
    const t=i/8, off=row?46:-46, k=row*9+i;
    pc(S[0]+t*dx+off*px, S[1]+t*dy+off*py, MIX[k]);
  }
}



};
