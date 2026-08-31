window.GUIDE_STEPS=[{"mech": "Placement", "t": 9, "txt": "<strong>Trois tanks empilés</strong> sur elle, à une position fixe qu'on ne bouge plus, et les corps-à-corps au contact. Soigneurs et distants se regroupent <strong>sous la statue</strong> : l'obstacle au-dessus d'eux les empêche d'être <strong>projetés en l'air</strong> par le rayon qui repousse."}, {"mech": "Fouette-sabre", "t": 9, "focus": ["tank"], "txt": "Son coup de base frappe les <strong>trois cibles les plus proches devant elle</strong> et partage ses dégâts entre elles. À un ou deux tanks, il tue net — c'est toute la raison des trois tanks empilés. En échange, le debuff qu'il applique les rend <strong>insensibles à l'Ombre</strong> : eux seuls n'ont pas besoin de résistance."}, {"mech": "Résistance à l'Ombre", "t": 9, "txt": "Tout le raid sauf les tanks vise <strong>environ 174 de résistance à l'Ombre</strong> à l'équipement — Médaillon de Karabor, enchantement de cape, Flacon de merveille chromatique, Glyphe de sauvegarde — plus 70 de <strong>Prière de protection contre l'Ombre</strong>. C'est ce qui rend le combat confortable."}, {"mech": "Hurlement muselant", "t": 8, "txt": "Elle réduit au silence <strong>pendant dix secondes</strong> tout ce qui se trouve à moins de <strong>dix-huit mètres</strong>. Soigneurs et lanceurs de sorts restent au-delà en permanence — ce n'est pas négociable."}, {"mech": "Liaison fatale", "t": 10, "txt": "Trois joueurs hors tanks sont <strong>téléportés ensemble au même endroit</strong> et liés par un rayon qui leur inflige de l'Ombre en continu. Le lien <strong>se brise à vingt-cinq mètres</strong> : chacun part aussitôt dans une direction différente, jamais vers le raid.<span class=\"aside\">Recommandé : la WeakAura <a href=\"https://wago.io/7p-NQ6ZJu\" target=\"_blank\" rel=\"noopener\">Mother Shahraz Direction Announcer</a> — elle affiche une flèche et annonce la direction à prendre, en s’appuyant sur les marquages automatiques de DBM.</span>"}, {"mech": "Les rayons", "t": 9, "focus": ["healer", "rdps"], "txt": "Plusieurs rayons frappent un joueur au hasard hors tanks puis <strong>rebondissent sur ses voisins</strong>. L'un <strong>brûle le mana</strong>, un autre <strong>projette en l'air</strong>. Sous la statue ou collé à un mur, on n'est plus projeté : on continue de lancer et de soigner."}, {"mech": "Aura prismatique", "t": 9, "txt": "Six auras — Ombre, Arcanes, Feu, Nature, Givre, Sacré — <strong>tournent sur les joueurs</strong> pendant tout le combat. Chacune réduit les dégâts d'une école et amplifie les autres. Si vous en jouez plusieurs, <strong>arrêtez celle qui est réduite</strong> et tapez avec celle qui est amplifiée."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// Positions relevees sur les plans raidplan du guide wowhead (boss a l'origine) :
// les TROIS TANKS de l'autre cote du boss (Fouette-sabre partage ses degats entre
// les 3 cibles les plus proches devant elle), les CORPS-A-CORPS au contact, et
// soigneurs + distants GROUPES derriere la statue, hors de vue : ligne de vue
// coupee, les rayons ne les ciblent pas.  Echelle : 18 m = 155 unites.
pc(74,   0, 'tank');
pc(52, -32, 'tank');
pc(52,  32, 'tank');

[[-52,-26],[-44,22],[-20,-64],[-14,60]].forEach(p=>pc(p[0],p[1],'mdps'));

// un distant et un soigneur suffisent a marquer l'emplacement du groupe
pc(-360,  6, 'rdps');
pc(-336, 36, 'healer');
};
