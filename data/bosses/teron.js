window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Il est tenu à sa position de départ, et le raid recule tout entier à distance. Sans zone au sol dangereuse ici, <strong>rester groupé aide vraiment les soins</strong> — Chaîne de Guérison et Cercle de Guérison en profitent pleinement."}, {"mech": "Incinérer", "t": 8, "txt": "Dégâts directs suivis d'une brûlure sur trois secondes. <strong>Elle se dissipe</strong> — un prêtre ou un paladin réactif l'empêche de s'accumuler et de tuer par surprise.", "focus": ["healer"]}, {"mech": "Fleur du Destin", "t": 8, "txt": "Des nuages sombres apparaissent et bombardent le raid au hasard. Chaque tir est modeste, mais <strong>plusieurs nuages actifs en même temps</strong> font monter les dégâts de fond sur toute la durée du combat."}, {"mech": "Ombre de la Mort", "t": 10, "txt": "Un joueur est marqué toutes les trente secondes. Après <strong>cinquante-cinq secondes, il meurt</strong> — c'est certain, ça ne se dissipe pas. Direction un coin écarté du raid avant l'échéance, pour que la suite ne touche personne d'autre.", "focus": ["mdps", "rdps"]}, {"mech": "Assemblages Ténébreux", "t": 9, "txt": "À la mort du marqué, quatre Assemblages Ténébreux naissent sur son cadavre et le joueur revient en <strong>esprit vengeur</strong>, seul capable de les détruire. Le reste du raid ne s'en occupe pas — laisser le fantôme faire son travail est le seul plan qui fonctionne."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['tank','healer','healer','healer','mdps','mdps','rdps','rdps','healer','rdps','mdps','rdps',
         'healer','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2, r=110+(n%3)*36;
  pc(Math.cos(a)*r, 200+Math.sin(a)*r*0.6, R[n]);
}



};
