# Architecture du site

Site statique, sans étape de build. Ce qui est dans le dépôt est ce qui est
publié.

## Fichiers

- `index.html` : page d'accueil, guides classés par phase.
- `<boss>.html` (racine) : une page par boss. Uniquement du markup + le
  `<link>` de style + deux `<script src>`. Aucun script inline.
- `assets/guide.js` : moteur commun à tous les guides — navigation clavier,
  lecture auto, mode enregistrement (`R`), mode édition (`E`), export, et
  mise à l'échelle 1920x1080.
- `data/bosses/<boss>.js` : `window.GUIDE_STEPS` (les étapes : titre, texte,
  durée, rôles mis en avant) et `window.GUIDE_SETUP` (placement du raid sur
  le diagramme).
- `assets/styles/<boss>.css` : thème et animations propres au diagramme du
  boss.
- `assets/media/` : images et icônes, mutualisées entre les pages.

`archimonde_6.html` est une copie de secours d'Archimonde ; elle charge le
même `data/bosses/archimonde.js`.

## Modifier un guide

- Étapes et placements : `data/bosses/<boss>.js`.
- Apparence du diagramme : `assets/styles/<boss>.css`.
- Comportement commun à tous les guides : `assets/guide.js`.
- Décor et repères du diagramme (cercle d'arène, zones, flèches, libellés) :
  le bloc `<svg id="field">` dans `<boss>.html`.

Le mode édition (`E`) sur une page permet de déplacer les éléments et de
réécrire les textes, puis d'exporter un HTML pour tester rapidement — mais la
modification durable se fait dans les fichiers ci-dessus.

## Publication

Le dépôt est relié à Cloudflare Pages (projet `chando`). Un `git push` sur
`main` redéploie automatiquement `chando.pages.dev`. Rien d'autre à faire.
