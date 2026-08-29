window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Trois tanks empilés sur elle, à une <strong>position fixe qu'on ne bouge plus</strong>. Tourner ou déplacer la boss pendant le combat peut vous coûter le raid entier.", "focus": ["tank"]}, {"mech": "Hurlement d'Interruption", "t": 7, "txt": "Elle interrompt tout ce qui se trouve à dix-huit mètres autour d'elle, pendant trois secondes. <strong>Soigneurs et lanceurs de sorts restent au-delà</strong> — ce n'est pas négociable."}, {"mech": "Liaison Fatale", "t": 10, "txt": "Trois joueurs sont téléportés ensemble et liés par un rayon qui blesse tout le monde autour. <strong>Chacun part dans une direction différente</strong>, jamais vers le reste du raid, jamais vers les tanks."}, {"mech": "Rayons", "t": 8, "txt": "Toutes les neuf secondes, dix joueurs au hasard encaissent un rayon d'Ombre. La <strong>résistance à l'Ombre</strong> sur tout le raid non-tank change complètement la difficulté de cette phase.", "focus": ["healer", "rdps"]}, {"mech": "Aura Prismatique", "t": 8, "txt": "Toutes les quinze secondes, une école de magie s'affaiblit pendant qu'une autre s'amplifie. <strong>Adaptez vos sorts</strong> à ce qui est boosté plutôt que de vous acharner sur ce qui est résisté."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['healer','healer','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps',
         'mdps','rdps','healer','rdps','rdps','mdps','rdps','rdps','mdps','rdps','rdps','mdps','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.15, r=n%2?270:345;
  pc(Math.cos(a)*r, -30+Math.sin(a)*r, R[n]);
}



};
