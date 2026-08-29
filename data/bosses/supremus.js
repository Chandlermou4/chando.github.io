window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Deux tanks. Le principal tient Supremus, un second reste <strong>en permanence au corps-à-corps</strong>, bien soigné — c'est lui qui encaisse les coups les plus violents.", "focus": ["tank"]}, {"mech": "Coup de Poing de la Fournaise", "t": 8, "txt": "Une traînée de flammes part de lui vers un joueur au hasard. <strong>On en sort</strong>, tout simplement — ça ne se soigne pas à travers, ça se marche à côté."}, {"mech": "Frappe Haineuse", "t": 8, "txt": "Il frappe le corps-à-corps qui a le plus de vie actuelle, pour des dégâts énormes. Gardez le second tank au maximum : c'est lui la cible <strong>tant qu'il reste le plus haut en vie</strong>.", "focus": ["tank", "healer"]}, {"mech": "Fixer", "t": 9, "txt": "Après une minute, il se fixe sur un joueur au hasard et le poursuit lentement. <strong>Restez à distance moyenne</strong> : trop près, il vous repousse ; trop loin, il charge à pleine vitesse."}, {"mech": "Geysers volcaniques", "t": 8, "txt": "Des volcans apparaissent au hasard sous vos pieds pendant cette phase. Ne restez jamais groupés trop longtemps, et les soigneurs privilégient les <strong>soins instantanés</strong> — le mouvement ne s'arrête jamais.", "focus": ["healer"]}, {"mech": "Retour en phase 1", "t": 7, "txt": "Après soixante secondes, il revient taper au corps-à-corps et <strong>la menace repart à zéro</strong>. Une Diversion du chasseur permet au tank de la reprendre sans perdre de temps."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['healer','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','healer',
         'rdps','mdps','rdps','healer','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.8, r=n%2?255:335;
  pc(Math.cos(a)*r, Math.sin(a)*r, R[n]);
}



};
