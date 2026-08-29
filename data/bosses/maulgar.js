window.GUIDE_STEPS=[{"mech": "Le pull", "t": 9, "txt": "Tout se décide en dix secondes. <strong>Œillaveugle et Olm</strong> sont tirés ensemble contre le mur, Maulgar est amené à l'entrée dos au mur. <strong>Krosh et Kiggler restent où ils sont</strong> : ce sont des casters, on ne les déplace pas.", "focus": ["tank"]}, {"mech": "Cinq tanks", "t": 10, "txt": "Un responsable par cible. Guerrier ou ours sur Maulgar, paladin et démoniste sur le duo Œillaveugle-Olm, <strong>druide équilibre sur Kiggler</strong> car il ignore la polymorphie, et <strong>un mage sur Krosh</strong> avec Vol de Sorts et Bouclier de Feu.", "focus": ["tank"]}, {"mech": "Œillaveugle en premier", "t": 10, "txt": "Il soigne tout le conseil. Sa <strong>Prière de Soins</strong> remet les cinq à pleine vie : elle ne doit jamais passer. Il se protège d'un bouclier avant de la lancer — <strong>cassez le bouclier</strong>, sinon l'interruption ne fonctionne pas. Rotation d'interrupts et d'étourdissements, et Héroïsme dès le pull.", "focus": ["mdps", "rdps"]}, {"mech": "Ordre de kill", "t": 9, "txt": "Œillaveugle, puis Olm. Les <strong>corps-à-corps passent sur Maulgar</strong> pendant que les distants enchaînent Krosh puis Kiggler. Ces deux-là sont interdits au corps-à-corps : vague de choc et explosion des arcanes.", "focus": ["mdps", "rdps"]}, {"mech": "Les 50 %", "t": 9, "txt": "Maulgar seul devient le vrai danger. Il gagne <strong>Frénésie</strong>, charge les distants et lance un <strong>rugissement de peur</strong>. Totems de Tremblement posés à l'avance, un second tank prêt à taunter après chaque charge, et toutes les défensives lâchées.", "focus": ["tank", "healer"]}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

// raid : distants en arc devant l'entrée, corps-à-corps près de Maulgar
for(let n=0;n<11;n++){const a=Math.PI*(0.2+n*0.06);pc(Math.cos(a)*265, 305-Math.sin(a)*265,'rdps')}
for(let n=0;n<5;n++)pc(-140+n*46, 232+(n%2)*40,'mdps');
for(let n=0;n<5;n++)pc(-135+n*44, 60+(n%2)*44,'healer');
pc(0,352,'tank');pc(-345,132,'tank');pc(392,-70,'tank');pc(70,-372,'tank');



};
