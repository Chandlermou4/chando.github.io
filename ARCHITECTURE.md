# Architecture du site

Site statique, sans étape de build. Ce qui est dans le dépôt est ce qui est
publié.

## Fichiers

- `index.html` : porte d'entrée, deux liens vers `/tbc/strats.html` et
  `/forever/talents.html`.
- `tbc/` : section TBC. `strats.html` liste les guides par phase ; un
  `<boss>.html` par boss. Chaque nouvelle page TBC se dépose ici.
- `forever/` : section Forever. `talents.html` (calculateur de talents),
  `legacy.html` (calculateur de Points Legacy), `races.html` (combinaisons
  race-classe et changements de raciaux) et `news.html` — toute future page
  Forever se dépose ici. Chaque page de la section porte le même petit
  `.section-nav` pour naviguer entre elles.
- **Les deux calculateurs** (`talents.html`, `legacy.html`) partagent une
  architecture à trois couches, volontairement identique des deux côtés :
  - `data/<nom>-data.js` : deux objets globaux, `window.<NOM>_DATA` (grille,
    rangs, textes anglais — la donnée mécanique, sourcée) et
    `window.<NOM>_FR` (noms et textes français, avec leur provenance :
    officiel, adapté ou éditorial).
  - `assets/<nom>-engine.js` : logique pure sans DOM — verrous de palier,
    encodage/décodage du lien de partage, dérivation du français. Rien n'y
    touche l'affichage.
  - `assets/<nom>-ui.js` : rendu et interactions, branché sur un
    `<div id="…-page">` dans la page HTML.
  Le calculateur de Points Legacy réutilise directement les classes CSS du
  calculateur de talents (`assets/styles/talents.css`) plutôt que de les
  dupliquer : `assets/styles/legacy.css`, chargée juste après, ne contient
  que les écarts (4 lignes de grille au lieu de 7, icône « ? » des
  emplacements non révélés). C'est délibéré — les deux outils doivent se
  ressembler au pixel près, un seul jeu de règles à modifier pour les deux.
- `forever/news.html` : **index** de la section Actualités. Ne contient plus
  d'article, seulement la liste des 21 articles avec vignette, rubrique, date
  et description. Son URL `/forever/news` ne change pas.
- `forever/actualites/<slug>.html` : **une page par article**, servie en
  `/forever/actualites/<slug>`. C'est ce découpage qui rend chaque sujet
  trouvable isolément sur Google, là où une page unique ne pouvait se
  positionner que sur un seul intitulé. Le chemin est en `actualites` et non
  `news` parce que c'est le mot que cherche un lecteur francophone.
- `assets/article.css` : style commun aux 21 pages d'article (chapô, figure
  créditée, corps, sources, « à lire aussi »). Mutualisé parce que les pages
  sont identiques de structure : une seule feuille à reprendre pour les
  modifier toutes.
- `<boss>.html` (dans `tbc/`) : une page par boss. Uniquement du markup + deux
  `<link>` de style + deux `<script src>`. Aucun script inline.
- `assets/`, `data/` : **restent à la racine**, partagés entre `tbc/` et
  `forever/`. Toute référence depuis une page de section est un chemin
  **absolu** (`/assets/…`, `/data/…`), jamais `assets/…` ni `../assets/…` —
  un chemin relatif se casserait dès que la page change de profondeur.
  `assets/guide.js` applique la même règle pour ses propres chemins codés en
  dur (icônes de rôle) : c'est le bug qui s'est produit en déplaçant les
  pages de boss dans `tbc/`, corrigé une fois pour toutes en le rendant
  absolu là aussi.
- `assets/site.css` : **chrome commun aux pages de contenu** (accueil de section,
  pages Forever) — jetons de couleur, en-tête, bascule TBC/Forever, navigation
  de section, bandeau de provenance, pied de page, bascule clair/sombre. Les
  guides de boss n'y touchent pas : ils ont leur propre tronc commun dans
  `assets/guide.css`. Chaque page ne garde en ligne que ce qui lui est propre
  (largeur de son `<main>`, ses composants). Deux variables absorbent des écarts
  historiques, conservés tels quels pour ne rien déplacer : `--body-lh` (1.45 sur
  les pages outil, plus denses ; 1.55 ailleurs) et `--header-pb`.
  **Ce qui n'y a délibérément pas sa place** : les styles de prose
  (`main p`, `main h2`, `.lede`). Ils ressemblent à du tronc commun mais
  débordent sur les pages dont le contenu n'est pas de la prose — mis en commun,
  ils coloraient en bleu les titres de la page Actualités et bridaient les
  paragraphes du calculateur.
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
  Ses `url(...)` restent relatifs au fichier CSS lui-même (`assets/styles/`),
  donc inchangés quelle que soit la page qui le charge.
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

## Actualités Forever (`forever/actualites/`)

Chaque article est une **rédaction originale** des faits (annonces
officielles, dates, fonctionnalités) — jamais une traduction d'un article
existant. Les CGU de Wowhead (corp.fanbyte.com/legal/terms, section 8)
interdisent explicitement de « translate... any content contained within
the Service » ; ça s'applique que l'accès se fasse par le site, leur flux
RSS ou un scraping. Sourcer en lien (comme le font ces pages) reste
autorisé, traduire leur texte ne l'est pas. Source privilégiée : les
annonces officielles de Blizzard plutôt que la mise en forme journalistique
d'un site tiers. Chaque article porte ses sources en lien en bas de page.

### Images officielles (`assets/media/forever/`)

Les visuels viennent des annonces Blizzard, via leur propre CDN
(`bnetcmsus-a.akamaihd.net`). `data/forever-images-sources.json` conserve
pour chacun l'URL d'origine, l'empreinte SHA-256 du fichier téléchargé, la
légende, le texte alternatif, le crédit et la page source — c'est la pièce
justificative, à garder à jour si on ajoute une image.

Conditions retenues : la FAQ juridique de Blizzard autorise l'emploi de ses
visuels sur un site de fans **non commercial**, sans modification et avec
les mentions conservées. Ce que ça impose concrètement ici :

- **Aucune retouche** : pas de recadrage, pas d'effacement de logo, pas
  d'ajout sur l'image. La seule transformation appliquée est une réduction
  proportionnelle (1400 px de large au plus) et un passage en WebP, qui ne
  changent pas le contenu de l'image. Le ratio est vérifié à la génération.
- **Crédit visible** sous chaque image, avec un lien vers la publication
  d'origine.
- **Pas de monétisation** du site. Si ça devait changer un jour, ces
  conditions seraient à relire avant toute publicité ou affiliation :
  le crédit ne remplace pas une autorisation commerciale.

## Outils (`tools/`)

`build-actualites.py` régénère les pages d'article et l'index à partir du
dossier éditorial ; `build-sitemap.py` régénère `sitemap.xml` en excluant
les pages en `noindex`.

**Ce ne sont pas des étapes de build.** Le site sert le HTML présent dans le
dépôt ; ces scripts produisent ce HTML une fois, on commite le résultat, et
le site reste servable sans eux. On les relance quand la source change.

## Publication

Le dépôt est relié à Cloudflare Pages (projet `chando`). Un `git push` sur
`main` redéploie automatiquement `chando.pages.dev`. Rien d'autre à faire.
