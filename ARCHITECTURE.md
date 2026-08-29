# Architecture du site

Les pages à la racine sont la version statique prête à publier. Les éléments
qui changent le plus souvent se modifient directement dans les fichiers
extraits ci-dessous ; il n'est pas nécessaire de toucher aux 17 pages.

- `assets/guide.js` : moteur commun des guides (navigation, édition, export et
  raccourcis clavier) ;
- `data/bosses/<boss>.js` : étapes et positionnement propres à un boss ;
- `assets/styles/<boss>.css` : le thème et les animations propres au diagramme ;
- `assets/media/` : images et icônes dédupliquées, au lieu d'être encodées dans
  chaque page.

`src/pages/` contient les anciennes pages autonomes, conservées comme source de
secours. `tools/build_site.py` permet de régénérer l'architecture extraite à
partir de ces sources si nécessaire.

Pour reconstruire le site après une modification des sources :

```powershell
C:\Python314\python.exe tools\build_site.py
```

`archimonde_6.html` est conservé comme copie de sauvegarde du guide Archimonde.
