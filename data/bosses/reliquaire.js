window.GUIDE_STEPS=[{"mech": "Essence de la souffrance", "t": 9, "txt": "Premier des trois visages. <strong>L'Aura de la souffrance coupe tous les soins et toute régénération</strong>, et réduit l'armure à néant — le tank encaisse à cru, c'est un check de dégâts bruts. Le boss <strong>Fixe le joueur le plus proche toutes les 5 secondes</strong> : pas de menace classique, les tanks se relaient en jouant sur la distance."}, {"mech": "Enrager", "t": 8, "txt": "Environ <strong>toutes les 45 secondes</strong>, l'Essence enrage : vitesse d'attaque et dégâts fortement augmentés pendant 15 secondes. Sur cette fenêtre, <strong>le tank fixé utilise ses cooldowns défensifs</strong> ; sinon, un <strong>voleur sous Évasion</strong> ou un <strong>chasseur sous Dissuasion</strong> peut aussi tanker l’Enrager.", "focus": ["tank"]}, {"mech": "Drain d'âme", "t": 8, "txt": "<strong>Trois joueurs au hasard</strong> : un debuff dissipable de 30 secondes qui inflige des dégâts et draine autant de mana toutes les 3 secondes. <strong>Dissipation immédiate</strong>, dissipeurs assignés — c'est relancé sans arrêt tant que l'Essence est en vie.", "focus": ["healer"]}, {"mech": "Interlude", "t": 8, "txt": "Entre chaque visage, <strong>une cinquantaine de secondes de répit</strong>. Des Âmes asservies apparaissent : on les tue <strong>au contact du raid regroupé</strong>, chaque mort rend 30 % de vie et de mana à tout le monde dans les 10 mètres. Seule pause du combat — on remonte vie et mana à fond avant le visage suivant."}, {"mech": "Essence du désir", "t": 9, "txt": "Deuxième visage. <strong>La moitié de vos dégâts vous revient dessus</strong> — les soins sont doublés, mais un gros coup peut vous tuer : on dose. <strong>Choc spirituel se kick</strong> (voleurs, guerriers), <strong>Malédiction des langages</strong> maintenue dessus pour aider. Le <strong>Bouclier runique</strong> bloque les interruptions : les <strong>mages le volent en permanence</strong>."}, {"mech": "Essence de la colère", "t": 8, "txt": "Dernier visage, et vraie course. <strong>L'Aura de la colère inflige des dégâts d'Ombre à tout le raid, de plus en plus fort à chaque tic</strong> — mais elle fait aussi <strong>monter vos propres dégâts</strong> en continu : plus la phase dure, plus vous tapez, et plus vous encaissez. <strong>Cri de l'âme</strong> est un cône frontal : le boss reste <strong>tourné dos au raid</strong>, personne devant lui."}, {"mech": "Bouillant de rage", "t": 9, "txt": "À chaque provocation, le boss frappe 100 % plus vite et <strong>tout le raid, sauf le tank qui a taunt, gagne +200 % de menace</strong> pendant 10 secondes. On s'en sert : un <strong>second tank taunt au tout début</strong>, le main tank profite du bonus pour prendre une grosse avance pendant que les autres attendent la fin du buff avant de taper."}, {"mech": "Dépit", "t": 8, "txt": "<strong>Dépit</strong> touche des joueurs au hasard : invulnérables 6 secondes, puis <strong>~7 500 points de dégâts de la Nature d'un coup</strong>. Une <strong>potion de protection contre la Nature majeure</strong> prise en début de phase amortit le pic."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Le boss est tenu au NORD par les tanks : il est donc tourne dos au raid
// (cone frontal du Cri de l'ame vers le nord, personne devant lui).
pc(-24, -96, 'tank');
pc( 24, -96, 'tank');

// Corps-a-corps DERRIERE le boss, au contact.
[[-104,104],[-62,134],[-20,150],[20,150],[62,134],[104,104]]
  .forEach(p=>pc(p[0],p[1],'mdps'));

// Distants et soigneurs plus au sud, regroupes : c'est la que tout le raid
// se rassemble pendant l'interlude, pour les Ames asservies.
const R=['healer','rdps','healer','rdps','rdps','healer','rdps','rdps','healer',
         'rdps','rdps','rdps','rdps','rdps','rdps','rdps','rdps'];
const CX=-30, CY=336;
for(let n=0;n<R.length;n++){
  const a=n*2.399, rr=16+13*Math.sqrt(n);
  pc(CX+Math.cos(a)*rr*1.25, CY+Math.sin(a)*rr*0.70, R[n]);
}
};
