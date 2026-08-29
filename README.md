# chando.github.io

Guides de raid interactifs pour TBC Anniversary, organisés par phases de contenu.

- **Phase 1** : Karazhan, Repaire de Gruul, Repaire de Magtheridon
- **Phase 2** : Caverne du sanctuaire du Serpent, Donjon de la Tempête : L’Œil
- **Phase 3** : Bataille du mont Hyjal, Temple noir

Les guides actuellement disponibles couvrent le Repaire de Gruul, la Bataille du mont Hyjal et le Temple noir. Les autres raids sont déjà présents dans la navigation et seront complétés progressivement.

## Publier ce site

1. Crée un dépôt public nommé exactement `chando.github.io` sur ton compte GitHub.
2. Dans ce dépôt, mets tous les fichiers de ce dossier à la racine. Il faut bien
   publier également les dossiers `assets/` et `data/` : les pages de boss les
   utilisent désormais.
   - Via l'interface web : bouton **Add file → Upload files**, glisse tout le contenu, puis **Commit changes**.
   - Via Git en ligne de commande, depuis ce dossier :
     ```
     git init
     git add .
     git commit -m "Guides de raid"
     git branch -M main
     git remote add origin https://github.com/<ton-pseudo>/chando.github.io.git
     git push -u origin main
     ```
3. Dans les paramètres du dépôt (**Settings → Pages**), vérifie que la source est bien la branche `main`, dossier `/ (root)`.
4. Le site est disponible sous quelques minutes à l'adresse `https://<ton-pseudo>.github.io`.

### Cloudflare Pages

Pour le projet déjà en ligne, envoie le contenu complet de ce dossier (sans
`src/` ni `tools/`, qui servent uniquement à fabriquer le site) avec un
déploiement direct. Le répertoire de sortie est la racine du dossier :
`index.html` doit rester au même niveau que `assets/` et `data/`.

## Structure

- `src/pages/` — sauvegarde des anciennes pages autonomes ;
- `tools/build_site.py` — régénère l'architecture extraite depuis cette sauvegarde ;
- `assets/guide.js` — moteur partagé par tous les guides ;
- `data/bosses/` — étapes et placement de chaque boss ;
- `assets/media/` — images et icônes dédupliquées ;
- `index.html` et les pages de boss à la racine — version générée à publier.

## Mettre à jour un guide plus tard

Chaque page a un mode édition (touche **E**). L'export reste utile pour tester
un ajustement rapidement. Pour une modification durable, édite plutôt le
fichier correspondant dans `data/bosses/` (étapes/placements),
`assets/styles/` (apparence) ou `assets/guide.js` (fonction commune).

La commande suivante sert uniquement à refaire l'extraction complète depuis
la sauvegarde historique de `src/pages/` :

```
C:\Python314\python.exe tools\build_site.py
```

Elle remplace les fichiers générés à la racine, sans toucher à la sauvegarde.
