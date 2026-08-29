window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Naj'entus est <strong>tanké dos au raid</strong> : le tank le tient face au fond de la salle, entre lui et le mur. Personne d'autre devant — son <strong>cleave</strong> balaie le cône avant. Tout le reste passe <strong>dans son dos</strong>, au sud, en éventail, <strong>jamais deux joueurs à moins de six mètres</strong>. Un chasseur ouvre avec un Détournement."}, {"mech": "Épine", "t": 9, "txt": "Des <strong>Épines</strong> partent sur des joueurs au hasard, à répétition : dégâts sur la cible, puis une <strong>Explosion d'Épine</strong> de givre sur tout le monde à <strong>moins de six mètres</strong> d'elle. C'est ça qui rend l'écartement obligatoire — en paquet, une seule Épine fait fondre la moitié du raid."}, {"mech": "Épine de perforation", "t": 9, "txt": "Toutes les vingt secondes, un joueur est <strong>transpercé et étourdi</strong>, avec des dégâts continus tant qu'il reste planté. On le libère en cliquant l'épine au sol ; le libérateur récupère une <strong>Épine dorsale de Naj'entus</strong>. <strong>Une seule Épine dorsale suffit à briser le bouclier</strong> — les DPS en gardent toujours une prête.", "focus": ["rdps", "healer"]}, {"mech": "Bouclier de flots", "t": 9, "txt": "Naj'entus <strong>s'immunise et se soigne</strong> un peu chaque seconde. Réduction de soins en continu — Poison douloureux, Frappe mortelle — sinon il regagne tout ce que vous venez de lui infliger le temps que le bouclier tienne.", "focus": ["mdps"]}, {"mech": "Jaillissement de flots", "t": 10, "txt": "Un joueur relance une <strong>Épine dorsale</strong> sur lui pour briser le bouclier. La brisure déclenche aussitôt un Jaillissement de flots de <strong>8 500 points de givre sur tout le raid</strong> (environ 80 % de la vie) : on ne donne l'ordre que <strong>raid à pleine vie</strong>, pierres de soin et potions prêtes, <strong>Furie sanguinaire</strong> et gros cooldowns de soin lâchés au même instant. Trop tôt, les plus fragiles tombent."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Naj'entus est tanké DOS AU RAID : le tank le tient face au fond de la
// salle, entre lui et le mur, dans le cône avant. Tout le reste passe
// dans son dos (au sud), en éventail, six mètres entre chaque joueur.

// un seul tank, entre le boss et le mur du fond
pc(0, -66, 'tank');

// corps-à-corps : sur les flancs du boss, juste au sud, hors de l'axe
[[-140,50],[-108,98],[108,98],[-86,138],[86,138]].forEach(p=>pc(p[0],p[1],'mdps'));

// soigneurs : deux ailes serrées au sud, l'axe central laissé au tank
for(let n=0;n<6;n++){
  const s = n<3 ? -1 : 1, k = n%3;
  const a = Math.PI/2 + s*(0.42 + k*0.36);
  pc(Math.cos(a)*186, Math.sin(a)*186, 'healer');
}

// distants : deux ailes un peu plus larges, éventail compact vers le sud
for(let n=0;n<13;n++){
  const s = n<7 ? -1 : 1, k = n%7;
  const a = Math.PI/2 + s*(0.34 + k*0.13);
  pc(Math.cos(a)*252, Math.sin(a)*252, 'rdps');
}



};
