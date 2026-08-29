# Compte rendu — site de stratégies TBC

Date : 28 août 2026

## Contexte

Le projet est un site de guides de raid interactifs pour TBC Anniversary,
actuellement publié sur [chando.pages.dev](https://chando.pages.dev/).

Les fichiers de travail se trouvent dans ce dossier. Ils incluent les guides
créés précédemment, ainsi que `archimonde_6.html`, qui correspondait aux
dernières modifications demandées.

L'accès à la base de données et au compte Cloudflare n'a pas encore été
partagé ; aucune modification n'a donc été déployée sur le site en ligne.

## Changements d'interface demandés

- Le menu des boss est placé à gauche et reste visible.
- Les boutons « Précédent » et « Suivant » sont situés au-dessus du menu.
- La zone d'explications est réduite pour éviter que le menu chevauche le
  diagramme.
- La touche `R` masque toujours l'interface de navigation pour les
  enregistrements vidéo.

## Navigation par phases

Les noms français officiels utilisés sont :

| Phase | Raids |
| --- | --- |
| Phase 1 | Karazhan ; Repaire de Gruul ; Repaire de Magtheridon |
| Phase 2 | Caverne du sanctuaire du Serpent ; Donjon de la Tempête : L’Œil |
| Phase 3 | Bataille du mont Hyjal ; Temple noir |

Le menu de chaque boss comporte maintenant ces trois groupes. Les guides déjà
créés restent cliquables ; les autres sont indiqués comme « Guide(s) à venir ».
La page d'accueil est elle aussi organisée par phases.

## Optimisation pour réduire le coût des modifications

Le site contenait 17 pages de boss très lourdes, notamment parce que chaque
page embarquait ses propres images en base64, son style et son moteur
JavaScript. Une petite modification globale imposait donc de relire et de
réécrire beaucoup de contenu.

La structure a été refactorée :

- `assets/guide.js` contient le moteur commun : navigation, clavier, édition,
  export et mode enregistrement ;
- `data/bosses/<boss>.js` contient les étapes et positions propres à chaque
  boss ;
- `assets/styles/<boss>.css` contient le style et les animations propres à
  chaque diagramme ;
- `assets/media/` contient les 25 images et icônes uniques, partagées au lieu
  d'être répétées dans les pages ;
- les fichiers `.html` à la racine sont les fichiers statiques prêts à être
  publiés.

Résultat : les pages de boss publiées ne contiennent plus d’images encodées.
Leur poids cumulé est passé d’environ 3,8 Mo à environ 350 Ko ; les médias sont
servis séparément et mutualisés.

`archimonde_6.html` est conservé comme copie identique d’`archimonde.html`.

## Fichiers utiles

- `README.md` : instructions de publication et de mise à jour ;
- `ARCHITECTURE.md` : description de la nouvelle organisation ;
- `tools/build_site.py` : outil de régénération depuis la sauvegarde historique
  située dans `src/pages/`.

Pour modifier durablement un guide, privilégier :

- `data/bosses/` pour ses étapes et placements ;
- `assets/styles/` pour son apparence ;
- `assets/guide.js` pour une fonctionnalité commune à tous les guides.

## Publication Cloudflare Pages

Pour déployer la version actuelle, publier le contenu complet du dossier, en
incluant impérativement `assets/` et `data/` au même niveau que `index.html`.

L’accès au compte Cloudflare et à la base de données reste à fournir si des
modifications du site en ligne ou des données sont souhaitées.
