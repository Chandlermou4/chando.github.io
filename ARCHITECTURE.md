# Architecture du site

Site statique, sans étape de build. Ce qui est dans le dépôt est ce qui est
publié.

## Fichiers

- `index.html` : page d'accueil, guides classés par phase.
- `<boss>.html` (racine) : une page par boss. Uniquement du markup + deux
  `<link>` de style + deux `<script src>`. Aucun script inline.
- `assets/guide.js` : moteur commun à tous les guides — navigation clavier,
  lecture auto, mode enregistrement (`R`), mode édition (`E`), export, et
  mise à l'échelle 1920x1080.
- `assets/guide.css` : **tronc commun de style** — mise en page, panneau de
  texte, primitives SVG, panneau d'édition, navigation, légende clavier.
  C'est ici qu'on modifie l'apparence de tous les guides d'un coup.
- `data/bosses/<boss>.js` : `window.GUIDE_STEPS` (les étapes : titre, texte,
  durée, rôles mis en avant) et `window.GUIDE_SETUP` (placement du raid sur
  le diagramme).
- `assets/styles/<boss>.css` : **uniquement le spécifique** — image de fond,
  `--h1` (taille du titre), couleurs de l'arène et animations du diagramme.
- `assets/media/` : images et icônes, mutualisées entre les pages.

L'ordre des `<link>` compte : `assets/guide.css` d'abord, la feuille du boss
ensuite (elle surcharge).

## Modifier un guide

- Étapes et placements : `data/bosses/<boss>.js`.
- Apparence du diagramme d'un boss : `assets/styles/<boss>.css`.
- Apparence de **tous** les guides : `assets/guide.css`.
- Comportement commun à tous les guides : `assets/guide.js`.
- Décor et repères du diagramme (cercle d'arène, zones, flèches, libellés) :
  le bloc `<svg id="field">` dans `<boss>.html`.

Le mode édition (`E`) sur une page permet de déplacer les éléments et de
réécrire les textes — c'est un brouillon local, rien n'est envoyé au site.
La modification durable se fait dans les fichiers ci-dessus.

## Publication

Le dépôt est relié à Cloudflare Pages (projet `chando`). Un `git push` sur
`main` redéploie automatiquement `chando.pages.dev`. Rien d'autre à faire.
