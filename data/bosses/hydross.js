window.GUIDE_STEPS=[{"mech": "Avant le pull", "t": 10, "focus": ["tank"], "txt": "Deux tanks spécialisés : un en <strong>résistance au Givre</strong>, un en <strong>résistance à la Nature</strong>. On engage <strong>par la droite</strong>, du côté des rejetons souillés : le tank Nature les ramasse et on les tue vite, pendant que le tank Givre part chercher le boss. Surtout ne pas réveiller ceux de gauche, ils disparaissent tout seuls."}, {"mech": "Forme Givre", "t": 10, "txt": "Hydross est tenu <strong>sur sa position de départ, dans les faisceaux</strong>. La <strong>Tombe aquatique</strong> tombe sur un joueur au hasard et étourdit tout le monde à moins de huit mètres : <strong>le raid s'étale</strong>. La <strong>Marque d'Hydross</strong> monte toutes les quinze secondes — 10, 25, 50, 100, 250 puis 500 % de dégâts de Givre subis."}, {"mech": "La transition", "t": 10, "txt": "À 100 % de marque, on traîne le boss <strong>hors des faisceaux</strong> — ou dedans pour revenir. <strong>Toute la menace est remise à zéro</strong> : plus un seul dégât, pets, dots et totems compris. Le tank de l'autre résistance récupère le boss, un chasseur peut aider au <strong>Détournement</strong>."}, {"mech": "Les quatre rejetons", "t": 9, "focus": ["mdps", "rdps"], "txt": "Chaque bascule invoque <strong>quatre élémentaires</strong> — <strong>Pur rejeton d'Hydross</strong> côté Givre, <strong>Rejeton d'Hydross souillé</strong> côté Nature. On les <strong>tue avant de retoucher au boss</strong> : ça laisse au tank le temps de monter sa menace. Si ça déborde, un démoniste en <strong>Bannit</strong> un ou deux."}, {"mech": "Forme Nature", "t": 9, "txt": "Hydross est tenu <strong>en contrebas des marches</strong>, hors des faisceaux. La <strong>Vase abominable</strong> inflige des dégâts de Nature sur la durée et coupe de moitié les dégâts infligés et les soins reçus — mais <strong>elle ne se propage pas</strong> : inutile de s'étaler ici. La <strong>Marque de corruption</strong> monte de la même façon."}, {"mech": "Le rythme", "t": 8, "txt": "On alterne ainsi jusqu'au bout : chaque forme est tenue <strong>jusqu'à 100 % de marque</strong>, puis on rebascule. Les soigneurs gardent leurs cooldowns pour les transitions, où les tanks encaissent le boss et quatre élémentaires d'un coup."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Positions relevees sur le plan fourni. Hydross a deux postes : en FORME GIVRE
// sur sa position de depart dans les faisceaux (origine), et en FORME NATURE en
// contrebas des marches (y = 466). Le raid descend d'un poste a l'autre.
pc(  48,   0, 'tank');    // tank resistance Givre
pc( -39,  18, 'mdps');
pc(  48, 466, 'tank');    // tank resistance Nature
pc( -39, 447, 'mdps');

pc(-190, 247, 'rdps');
pc( 249, 247, 'rdps');
pc(-190, 517, 'rdps');
pc( 184, 517, 'rdps');
pc(-273, 334, 'healer');
pc( 334, 334, 'healer');
};
