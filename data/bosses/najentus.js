window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Le tank tient Naj'entus <strong>dos au raid</strong> : personne devant lui, son coup de taille balaie tout le cône avant. Tout le monde se met dans son dos et s'étale — les corps-à-corps en <strong>deux petits groupes</strong> séparés, distants et soigneurs en large éventail, <strong>jamais deux joueurs à moins de six mètres</strong>. Un chasseur ouvre avec un Détournement sur le tank."}, {"mech": "Épine", "t": 9, "txt": "Salves d'épines sur des joueurs au hasard : dégâts sur la cible, puis un éclat qui touche <strong>tout le monde dans les six mètres</strong> autour d'elle. C'est ce qui rend l'écartement obligatoire, pas optionnel — en paquet, une seule salve fait fondre la moitié du raid."}, {"mech": "Épine de perforation", "t": 9, "txt": "Un joueur est <strong>transpercé et étourdi</strong>, avec des dégâts continus tant qu'il reste planté. On le libère en cliquant l'épine au sol ; le libérateur récupère alors une <strong>Épine dorsale de Naj'entus</strong>. <strong>Les DPS ramassent en priorité</strong> : il en faut plusieurs en réserve pour le bouclier.", "focus": ["rdps", "healer"]}, {"mech": "Bouclier de flots", "t": 9, "txt": "Naj'entus <strong>s'immunise et se soigne</strong> un peu chaque seconde. Réduction de soins en continu — Poison de Blessure, Frappe Mortelle — sinon il regagne tout ce que vous venez de lui infliger le temps que le bouclier tienne.", "focus": ["mdps"]}, {"mech": "Jaillissement de flots", "t": 10, "txt": "On relance les <strong>Épines dorsales</strong> sur lui pour briser le bouclier. La brisure déclenche aussitôt un Jaillissement de flots qui coûte <strong>environ 80 % de la vie à tout le raid</strong> : on ne donne l'ordre que <strong>raid à pleine vie</strong>, pierres de soin et potions prêtes, <strong>Furie sanguinaire</strong> et gros cooldowns de soin lâchés au même instant. Trop tôt, les plus fragiles tombent."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Naj'entus tenu dos au raid : il regarde le nord, personne dans le
// cône avant. Le tank est au contact côté nord ; tout le reste se met
// dans son dos (sud), en éventail large et peu profond — très espacé
// à cause de l'Épine.

// tank : collé au boss, côté avant (nord), il le tient face au mur
pc(0, -70, 'tank');

// corps-à-corps : petit paquet compact juste dans son dos (sud)
[[-46,118],[46,118],[-22,158],[22,158],[0,196]].forEach(p=>pc(p[0],p[1],'mdps'));

// soigneurs : anneau intérieur autour du boss, ouvert ~80° au nord
for(let n=0;n<6;n++){
  const a = Math.PI/2 - 2.44 + n*(4.88/5);
  pc(Math.cos(a)*200, Math.sin(a)*200, 'healer');
}

// distants : anneau extérieur, même ouverture au nord, bien étalés
for(let n=0;n<13;n++){
  const a = Math.PI/2 - 2.5 + n*(5.0/12);
  pc(Math.cos(a)*278, Math.sin(a)*278, 'rdps');
}



};
