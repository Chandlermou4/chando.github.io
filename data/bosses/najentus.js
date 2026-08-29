window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Naj'entus reste <strong>adossé au fond de la salle</strong>, face au raid. <strong>Deux tanks</strong> le prennent dans l'axe ; personne d'autre devant lui, son coup de taille balaie le cône avant. Tout le reste s'ouvre en <strong>éventail vers le sud</strong>, l'axe central laissé aux tanks, <strong>jamais deux joueurs à moins de six mètres</strong>. Un chasseur ouvre avec un Détournement."}, {"mech": "Épine", "t": 9, "txt": "Salves d'épines sur des joueurs au hasard : dégâts sur la cible, puis un éclat qui touche <strong>tout le monde dans les six mètres</strong> autour d'elle. C'est ce qui rend l'écartement obligatoire, pas optionnel — en paquet, une seule salve fait fondre la moitié du raid."}, {"mech": "Épine de perforation", "t": 9, "txt": "Un joueur est <strong>transpercé et étourdi</strong>, avec des dégâts continus tant qu'il reste planté. On le libère en cliquant l'épine au sol ; le libérateur récupère alors une <strong>Épine dorsale de Naj'entus</strong>. <strong>Les DPS ramassent en priorité</strong> : il en faut plusieurs en réserve pour le bouclier.", "focus": ["rdps", "healer"]}, {"mech": "Bouclier de flots", "t": 9, "txt": "Naj'entus <strong>s'immunise et se soigne</strong> un peu chaque seconde. Réduction de soins en continu — Poison de Blessure, Frappe Mortelle — sinon il regagne tout ce que vous venez de lui infliger le temps que le bouclier tienne.", "focus": ["mdps"]}, {"mech": "Jaillissement de flots", "t": 10, "txt": "On relance les <strong>Épines dorsales</strong> sur lui pour briser le bouclier. La brisure déclenche aussitôt un Jaillissement de flots qui coûte <strong>environ 80 % de la vie à tout le raid</strong> : on ne donne l'ordre que <strong>raid à pleine vie</strong>, pierres de soin et potions prêtes, <strong>Furie sanguinaire</strong> et gros cooldowns de soin lâchés au même instant. Trop tôt, les plus fragiles tombent."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Naj'entus est adossé au fond de la salle et fait FACE au raid.
// Les 2 tanks le prennent dans l'axe ; personne d'autre devant lui
// (coup de taille). Tout le reste s'ouvre en éventail vers le sud,
// l'axe central laissé libre, six mètres entre chaque joueur.

// deux tanks, dans l'axe, au contact
pc(-34, 82, 'tank'); pc(34, 82, 'tank');

// corps-à-corps : sur les flancs du boss, juste au sud, hors de l'axe
[[-150,58],[-120,112],[120,112],[-96,156],[96,156]].forEach(p=>pc(p[0],p[1],'mdps'));

// soigneurs : deux ailes au sud, l'axe central laissé aux tanks
for(let n=0;n<6;n++){
  const s = n<3 ? -1 : 1, k = n%3;
  const a = Math.PI/2 + s*(0.45 + k*0.38);
  pc(Math.cos(a)*205, Math.sin(a)*205, 'healer');
}

// distants : deux ailes plus larges et plus loin (éventail vers le sud)
for(let n=0;n<12;n++){
  const s = n<6 ? -1 : 1, k = n%6;
  const a = Math.PI/2 + s*(0.38 + k*0.154);
  pc(Math.cos(a)*288, Math.sin(a)*288, 'rdps');
}



};
