# chando

Guides de raid interactifs pour TBC Anniversary, organisés par phases de contenu.

- **Phase 1** : Karazhan, Repaire de Gruul, Repaire de Magtheridon
- **Phase 2** : Caverne du sanctuaire du Serpent, Donjon de la Tempête : L'Œil
- **Phase 3** : Bataille du mont Hyjal, Temple noir

Guides disponibles aujourd'hui : Repaire de Gruul, Bataille du mont Hyjal,
Temple noir. Les autres raids sont dans la navigation et seront complétés.

## Publication

Site en ligne : <https://chando.pages.dev>

Le dépôt `Chandlermou4/chando.github.io` est relié à Cloudflare Pages (projet
`chando`, branche `main`). **Chaque `git push` sur `main` redéploie
automatiquement.** Aucune commande de build.

```
git add <fichiers modifiés>
git commit -m "…"
git push
```

## Structure

Voir `ARCHITECTURE.md`. En résumé :

- `index.html` : porte d'entrée sobre, deux liens (TBC / Forever).
- `tbc/` : tout le contenu TBC — `strats.html` (liste des guides) et un
  `<boss>.html` par boss. `chando.pages.dev/tbc/…`
- `forever/` : tout le contenu Forever — `talents.html` (calculateur),
  `legacy.html` (résumé des Points Legacy), `races.html` (raciaux) et
  `news.html` (actualités, rédaction originale — voir ARCHITECTURE.md) pour
  l'instant. `chando.pages.dev/forever/…`
- `assets/`, `data/` : partagés entre les deux sections, restent à la racine.
  Toutes les pages y font référence par chemin **absolu** (`/assets/…`,
  `/data/…`), jamais relatif — une page à n'importe quelle profondeur
  continue de les trouver sans rien recalculer.
- `assets/guide.js` : moteur partagé par tous les guides de boss.
- `assets/guide.css` : tronc commun de style, partagé par tous les guides.
- `data/bosses/<boss>.js` : étapes et placement de chaque boss.
- `assets/styles/<boss>.css` : ce qui change d'un boss à l'autre (fond, titre,
  couleurs de l'arène, animations) — ses propres `url(...)` restent relatifs
  au fichier CSS, pas à la page qui le charge.
- `assets/media/` : images et icônes mutualisées.

Ajouter une page à une section : la déposer dans `tbc/` ou `forever/`, avec
des chemins `/assets/…` et `/data/…` absolus vers la racine.

## Modifier un guide

- Étapes / placements : `data/bosses/<boss>.js`
- Apparence d'un boss : `assets/styles/<boss>.css`
- Apparence de tous les guides : `assets/guide.css`
- Fonction commune : `assets/guide.js`
- Décor du diagramme : le `<svg id="field">` dans `<boss>.html`

Chaque page a un mode édition (touche **E**) pour déplacer les éléments et
réécrire les textes, avec un export HTML pour tester. Pour une modification
durable, éditer les fichiers ci-dessus.
