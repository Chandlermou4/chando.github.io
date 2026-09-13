# Compte rendu — site de stratégies TBC

Date : 13 septembre 2026 · Site en ligne : <https://chando.pages.dev>

> Ce fichier remplace le compte rendu du 28 août 2026, qui décrivait une
> architecture depuis abandonnée. L'ancienne version reste dans l'historique
> git. Pour la structure des fichiers, voir `ARCHITECTURE.md`.

## Où en est le site

Dix-sept pages de boss, dont **quinze publiées**. Le Temple noir est complet.
La Caverne du sanctuaire du Serpent vient d'être ouverte avec son premier boss.

| Raid | Guides | Publié |
| --- | --- | --- |
| Repaire de Gruul | Haut-Roi Maulgar, Gruul le Tue-Dragon | non — `noindex`, délié |
| Caverne du sanctuaire du Serpent | Hydross l'Instable | oui (1 / 6 boss) |
| Bataille du mont Hyjal | les 5 boss | oui |
| Temple noir | les 9 boss | oui |

Karazhan, le Repaire de Magtheridon et le Donjon de la Tempête n'ont pas encore
de page ; ils figurent dans la navigation avec la mention « à venir ».

### Détail des guides publiés

`couches` = nombre de calques SVG révélés étape par étape. Une valeur à 0
signifie que le diagramme est **figé** : toutes les étapes montrent la même
image.

| Guide | Étapes | Couches | Jetons |
| --- | --: | --: | --: |
| Hydross l'Instable | 6 | 6 | 10 |
| Rage Froidhiver | 5 | 5 | 3 |
| Anetheron | 5 | 5 | 3 |
| Kaz'rogal | 5 | 5 | 4 |
| Azgalor | 6 | 5 | 8 |
| Archimonde | 7 | **0** | 5 |
| Grand seigneur de guerre Naj'entus | 5 | 5 | 4 |
| Supremus | 6 | **0** | 6 |
| Ombre d'Akama | 4 | **0** | 3 |
| Teron Fielsang | 5 | **0** | 2 |
| Gurtogg Fièvresang | 6 | 6 | 5 |
| Reliquaire des Perdus | 8 | 8 | 4 |
| Mère Shahraz | 7 | 7 | 4 |
| Conseil Illidari | 5 | 5 | 7 |
| Illidan Hurlorage | 8 | 8 | 7 |

## Ce qui a changé depuis le 29 août

Trente commits. L'essentiel :

**Le Temple noir est terminé.** Les quatre derniers boss — Reliquaire, Shahraz,
Conseil, Illidan — ont été refaits de zéro sur la stratégie de wowhead et sur
les plans raidplan qu'elle publie, puis rendus visibles. Les cinq premiers
l'avaient été juste avant.

**SSC est ouvert** avec Hydross l'Instable, premier guide d'un raid qui en
compte six.

**Quatre noms de boss étaient faux** et ont été corrigés d'après wowhead FR :

| Avant | Après | Source |
| --- | --- | --- |
| Reliquaire des Âmes | **Reliquaire des Perdus** | npc 22856 |
| Gathios le Fracasseur | **Gathios le Briseur** | npc 22949 |
| Veras l'Ombre-Sombre | **Veras Ombrenoir** | npc 22952 |
| Zerevor | **Grand néantomancien Zerevor** | npc 22950 |

**Deux contresens de stratégie** ont été corrigés, tous deux signalés par le
RL :

- *Reliquaire, Bouillant de rage* — j'avais écrit « le plus sûr est de ne pas
  provoquer du tout ». Le guide dit l'inverse : on provoque **exprès** une fois
  au début, pour que le main tank profite du +200 % de menace et prenne une
  grosse avance pendant que les autres attendent la fin du buff.
- *Shahraz, la statue de poisson* — j'avais suivi la légende du plan (« Line of
  Sight to avoid beams ») et écrit que la ligne de vue coupée empêchait le
  ciblage. En réalité se placer sous la statue empêche seulement d'être
  **projeté en l'air** par le rayon de recul. Les rayons touchent quand même.

**Une passe de cohérence** sur les seize guides a mis au jour, en plus des
écarts de style, deux bugs d'animation réels et dix-sept chevauchements dont
quatorze n'avaient jamais été vus. Voir la section suivante.

## Conventions à respecter

Ces règles ont été établies en corrigeant des erreurs ; s'en écarter les fait
revenir.

**Noms français.** Tout nom de sort, d'objet ou de PNJ vient de wowhead FR, en
casse de phrase française. Vérification obligatoire **avant** d'écrire :

```
curl -sL -A "Mozilla/5.0" "https://www.wowhead.com/tbc/fr/spell=41032" \
  | grep -oE '<title>[^<]*</title>'
```

`WebFetch` boucle sur les redirections des pages de sort ; `curl` fonctionne à
chaque fois. Plusieurs identifiants peuvent être groupés dans un seul appel.
Corriger **les deux endroits** : le texte dans `data/bosses/<boss>.js` **et**
les libellés du `<svg>` dans `<boss>.html` — l'oubli du second s'est produit
deux fois.

**Ne rien inventer.** Aucun chiffre de dégâts, aucun cooldown, aucune mécanique
qui ne vienne d'une source vérifiable. En cas de doute, décrire sans chiffrer et
le signaler.

**Libellés du diagramme, deux niveaux.** Libellé principal en MAJUSCULES avec
une couleur sémantique ; sous-libellé en minuscules avec `fill="var(--slate)"`.

**Jeton de boss, un seul gabarit** : socle `r=66`, anneau `r=60`, marqueur
`64×64`, icône `f2557fec60e56cd12215.webp`. Le nom du boss reprend la couleur
de son anneau.

**Pas de cercle d'arène réflexe.** On ne trace `.room` que si la formation est
réellement un cercle. Le boss se place là où il se tient vraiment, en décalant
le `viewBox` — pas au centre par défaut.

**Longueur des textes.** Sur 98 étapes : minimum 81, médiane 255, maximum 437
caractères. Au-delà de ~350, le panneau devient indigeste — c'est un reproche
qui a déjà été fait.

**Vérification automatique.** Avant de committer un diagramme, balayer chaque
étape avec les animations figées et contrôler quatre choses : texte sous les
boutons ‹ ›, texte sous le panneau, texte sur un jeton, élément hors cadre.
C'est ce balayage qui a trouvé les dix-sept chevauchements.

**Attention aux animations CSS sur `transform`.** Un `transform` animé en CSS
**écrase** le `transform="translate(...)"` d'un élément SVG. Deux bugs réels en
sont nés : les bulles « Z » du Sommeil s'effondraient sur Anetheron, les quatre
cartes de Kaz'rogal s'empilaient à l'origine. Correctif : sortir le
positionnement sur un `<g>` parent et n'animer que l'enfant.

## Fabriquer un fond à partir d'un plan raidplan

Méthode mise au point sur Shahraz, le Conseil et Illidan, réutilisable.

1. **Récupérer le plan.** Les images des guides wowhead sont chargées en
   JavaScript et absentes du HTML brut : il faut ouvrir la page dans un
   navigateur puis relever les `img` en `uploads/screenshots`. La version
   `normal/<id>.jpg` fait 1374 × 773 (ratio 16:9) ; il n'existe pas de `large/`.
2. **Effacer les repères** que les jetons du site ne pourront pas recouvrir. Ces
   salles sont symétriques gauche/droite : recopier la **zone miroir** donne un
   résultat propre là où un simple décalage laisse des rectangles visibles.
   Prévoir des boîtes larges — un masque trop adouci laisse un contour fantôme.
3. **Élargir le canevas si besoin.** Le panneau du guide recouvre les 31 % de
   droite de la scène. Quand le boss est au-delà (82 % pour Shahraz, 78 % pour
   Gathios), étendre le canevas vers la droite — et en haut/bas pour rester en
   16:9 — avec une copie floutée de la salle. Le plan reste net et le boss
   revient dans la zone visible. Élargir le canevas réduit aussi la taille des
   repères du plan par rapport aux jetons, ce qui permet de les recouvrir.
4. **Relever les coordonnées.** Avec le boss à l'origine du `viewBox` :
   `minx = -(fx · 1920 - 300)` et `miny = -(fy · 1080 - 40)`, où `fx` et `fy`
   sont les fractions de l'image. Le champ SVG couvre alors la scène de 300 à
   1300 en x et de 40 à 1040 en y.

## Ce qui reste à faire

**Hydross n'a pas de fond.** Le plan utilisé pour le placement a été fourni dans
la conversation, pas depuis wowhead — je n'ai pas le fichier. La page s'affiche
sur fond sombre. Il faut soit l'URL de l'image, soit la déposer dans
`assets/media/`.

**Quatre diagrammes sont figés** : Archimonde (7 étapes), Supremus (6), Ombre
d'Akama (4), Teron Fielsang (5). Toutes leurs étapes montrent la même image,
alors que les onze autres guides révèlent un calque par étape. C'est exactement
le reproche qui avait été fait sur Gurtogg avant sa refonte. Supremus est le
plus pauvre : un seul libellé sur tout le diagramme.

**Gruul et Maulgar restent masqués** et leurs guides n'ont pas été relus — ni
vérification des noms, ni audit de stratégie.

**Rage Froidhiver a des éléments rognés.** Son `viewBox` commence à `x = -180`,
mais son cercle de salle (rayon 280) et sa barre d'échelle « 10 mètres » sont à
`x = -405`. La barre d'échelle est donc totalement invisible.

**Deux classes pour le même rôle.** Les sous-libellés en minuscules utilisent
`.tag` 45 fois et `.note` 19 fois. Les deux diffèrent en taille et en graisse
(13 px normal contre 15 px gras). Unifier sur `.tag`, majoritaire et
sémantiquement juste, demande de reprendre 19 libellés dans les guides anciens
et de revérifier leur mise en page.

**Le référencement est en place mais inexploitable.** Rien ne bloque
l'indexation — aucun en-tête `X-Robots-Tag` sur la production, `noindex` retiré
des quinze guides publiés, toutes les pages accessibles depuis l'accueil. En
revanche :

- **Le contenu n'est pas dans le HTML.** Le texte des étapes vit dans
  `data/bosses/*.js` et n'est écrit dans la page que par JavaScript — et seule
  l'étape affichée est dans le DOM. Le HTML brut d'une page de boss ne contient
  qu'une poignée de mots. C'est de loin le point le plus lourd.
- **Aucune `meta description`, aucune balise Open Graph, aucune `canonical`.**
  Conséquence concrète : les liens partagés sur Discord n'affichent aucun
  aperçu.
- **Pas de `viewport` sur les pages de boss**, seulement sur l'accueil. Google
  indexe en mobile-first.
- **Pas de `robots.txt` ni de `sitemap.xml`.** L'URL `/robots.txt` renvoie
  actuellement la page d'accueil en HTTP 200.
- **Les liens internes passent par une redirection.** Cloudflare sert les pages
  sans extension : `illidan.html` renvoie un 308 vers `/illidan`.

**Le `README.md` est périmé** : il annonce « Guides disponibles aujourd'hui :
Repaire de Gruul, Bataille du mont Hyjal, Temple noir », ce qui est faux dans
les deux sens — Gruul est masqué, SSC n'est pas mentionné.
