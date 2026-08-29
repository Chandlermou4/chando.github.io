window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Naj'entus regarde un mur, <strong>dos au raid</strong> : personne ne se place devant lui, son coup de taille balaie tout le cône avant. Le raid s'étale au sud — les corps-à-corps en <strong>plusieurs petits paquets</strong> plutôt qu'un seul, distants et soigneurs très espacés, <strong>jamais deux joueurs à moins de six mètres</strong>. Un chasseur ouvre avec un Détournement sur le tank."}, {"mech": "Épine", "t": 9, "txt": "Salves d'épines sur des joueurs au hasard : dégâts sur la cible, puis un éclat qui touche <strong>tout le monde dans les six mètres</strong> autour d'elle. C'est ce qui rend l'écartement obligatoire, pas optionnel — en paquet, une seule salve fait fondre la moitié du raid."}, {"mech": "Épine de perforation", "t": 9, "txt": "Un joueur est <strong>transpercé et étourdi</strong>, avec des dégâts continus tant qu'il reste planté. On le libère en cliquant l'épine au sol ; le libérateur récupère alors une <strong>Épine dorsale de Naj'entus</strong>. <strong>Les DPS ramassent en priorité</strong> : il en faut plusieurs en réserve pour le bouclier.", "focus": ["rdps", "healer"]}, {"mech": "Bouclier de flots", "t": 9, "txt": "Naj'entus <strong>s'immunise et se soigne</strong> un peu chaque seconde. Réduction de soins en continu — Poison de Blessure, Frappe Mortelle — sinon il regagne tout ce que vous venez de lui infliger le temps que le bouclier tienne.", "focus": ["mdps"]}, {"mech": "Jaillissement de flots", "t": 10, "txt": "On relance les <strong>Épines dorsales</strong> sur lui pour briser le bouclier. La brisure déclenche aussitôt un Jaillissement de flots qui coûte <strong>environ 80 % de la vie à tout le raid</strong> : on ne donne l'ordre que <strong>raid à pleine vie</strong>, pierres de soin et potions prêtes, <strong>Furie sanguinaire</strong> et gros cooldowns de soin lâchés au même instant. Trop tôt, les plus fragiles tombent."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Naj'entus regarde le nord (dos au raid). Personne devant : tout le
// monde au sud, et très espacé à cause de l'Épine.

// tank au contact, entre le boss et le mur nord
pc(0,-118,'tank');

// corps-à-corps : petits paquets dans le dos du boss, au sud proche
[[-72,140],[66,150],[-128,232],[122,236],[-6,250]].forEach(p=>pc(p[0],p[1],'mdps'));

// soigneurs : couronne intermédiaire, large éventail au sud
for(let n=0;n<6;n++){
  const a=Math.PI/2 - 1.15 + n*(2.3/5), r=248 + (n%2)*28;
  pc(Math.cos(a)*r, Math.sin(a)*r, 'healer');
}

// distants : arc extérieur au sud, bien étalés (Épine)
for(let n=0;n<13;n++){
  const a=Math.PI/2 - 1.4 + n*(2.8/12), r=332 + (n%2)*42;
  pc(Math.cos(a)*r, Math.sin(a)*r, 'rdps');
}



};
