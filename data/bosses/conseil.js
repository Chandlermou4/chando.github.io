window.GUIDE_STEPS=[{"mech": "Placement", "t": 9, "txt": "Quatre boss en même temps, <strong>une seule barre de vie commune</strong> : ils tombent tous ensemble. Gathios est emmené <strong>loin des trois autres</strong> — ses auras renforcent tout le conseil autour de lui. Les corps-à-corps le suivent ; soigneurs et distants restent groupés au centre."}, {"mech": "Gathios le Briseur", "t": 9, "focus": ["tank", "mdps"], "txt": "Cible principale du raid. Il alterne <strong>Aura de dévotion</strong> et <strong>Aura de résistance chromatique</strong> toutes les trente secondes — d'où la mise à l'écart. Sa <strong>Consécration</strong> oblige à le déplacer sans arrêt. Un guerrier est idéal : son <strong>Renvoi de sort</strong> annule le Jugement d'autorité."}, {"mech": "Dame Malande", "t": 10, "txt": "<strong>Cercle de soins rend 95 000 points de vie à tout le conseil</strong> : sur une barre commune, c'est le combat qui repart en arrière. Chaque incantation se coupe, et il faut <strong>une interruption physique et une magique</strong>, Gathios la protégeant en alternance. Son <strong>Bouclier réflecteur</strong> renvoie la moitié des dégâts absorbés."}, {"mech": "Veras Ombrenoir", "t": 9, "focus": ["tank", "healer"], "txt": "Environ toutes les minutes il <strong>disparaît trente secondes</strong> et applique <strong>Poison mortel</strong> à des joueurs au hasard — 1 000 par seconde pendant quatre secondes, puis <strong>Envenimer</strong> pour 4 250 d'un coup. À sa réapparition, <strong>on le reprend immédiatement</strong> : paladin ou druide, qui ont physique et magique."}, {"mech": "Grand néantomancien Zerevor", "t": 9, "txt": "Il ne se tank pas normalement : <strong>un mage lui vole son Atténuation de la magie</strong> (−75 % de dégâts magiques subis) et le tient à distance. <strong>Personne à moins de dix mètres</strong>, sinon Explosion des arcanes pour 8 500. Ses <strong>Choc de flammes</strong> et <strong>Blizzard</strong> tombent au sol un peu partout : on en sort tout de suite."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Positions relevees sur le plan raidplan du guide wowhead (Gathios a l'origine).
// Gathios est tire a l'ecart, a droite : ses auras renforcent le conseil autour de
// lui. Les corps-a-corps le suivent, soigneurs et distants restent groupes au centre.
pc(  36,   55, 'tank');   // tank Gathios  (guerrier : Renvoi de sort)
pc(-279, -262, 'tank');   // tank Veras    (paladin ou druide)
pc(-755, -307, 'tank');   // tank Malande  (guerrier : interruption)
pc(-630,  200, 'rdps');   // mage sur Zerevor, tenu HORS des 10 m

[[-147,3],[-141,26],[-128,40]].forEach(p=>pc(p[0],p[1],'mdps'));
[[-456,-106],[-434,-80]].forEach(p=>pc(p[0],p[1],'healer'));
[[-406,-105],[-360,-106],[-382,-61]].forEach(p=>pc(p[0],p[1],'rdps'));
};
