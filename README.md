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

- `index.html` et les `<boss>.html` à la racine : pages statiques (markup seul).
- `assets/guide.js` : moteur partagé par tous les guides.
- `assets/guide.css` : tronc commun de style, partagé par tous les guides.
- `data/bosses/<boss>.js` : étapes et placement de chaque boss.
- `assets/styles/<boss>.css` : ce qui change d'un boss à l'autre (fond, titre,
  couleurs de l'arène, animations).
- `assets/media/` : images et icônes mutualisées.

## Modifier un guide

- Étapes / placements : `data/bosses/<boss>.js`
- Apparence d'un boss : `assets/styles/<boss>.css`
- Apparence de tous les guides : `assets/guide.css`
- Fonction commune : `assets/guide.js`
- Décor du diagramme : le `<svg id="field">` dans `<boss>.html`

Chaque page a un mode édition (touche **E**) pour déplacer les éléments et
réécrire les textes, avec un export HTML pour tester. Pour une modification
durable, éditer les fichiers ci-dessus.
