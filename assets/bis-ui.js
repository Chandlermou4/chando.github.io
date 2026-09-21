/* Rendu des listes BiS — charpente seule, sans aucun objet.
 *
 * Nécessite data/bis-data.js chargé avant (window.BIS_DATA).
 *
 * Deux vues, dans la même page : le choix d'une spécialisation, puis ses
 * emplacements. La spécialisation choisie vit dans l'URL (?spec=druide-balance)
 * pour qu'un lien soit partageable et que le bouton Retour du navigateur
 * fonctionne, comme sur le calculateur de talents.
 */
(function () {
  'use strict';

  var D = window.BIS_DATA;
  var racine = document.getElementById('bis');
  if (!D || !racine) return;

  var ROLES = {
    'tank': 'Tank', 'soin': 'Soins',
    'dps-melee': 'Dégâts en mêlée', 'dps-distance': 'Dégâts à distance'
  };

  function icone(nom) {
    return 'https://wow.zamimg.com/images/wow/icons/large/' + encodeURIComponent(nom) + '.jpg';
  }

  function trouve(id) {
    if (!id) return null;
    for (var i = 0; i < D.classes.length; i++) {
      var c = D.classes[i];
      for (var j = 0; j < c.specs.length; j++) {
        if (c.slug + '-' + c.specs[j].key === id) return { classe: c, spec: c.specs[j] };
      }
    }
    return null;
  }

  /** Les emplacements d'une classe : le tronc commun, puis le sien. */
  function emplacements(classe) {
    var out = [];
    D.slots.forEach(function (s) {
      if (s.pair) { out.push({ key: s.key + '-1', fr: s.fr + ' 1' });
                    out.push({ key: s.key + '-2', fr: s.fr + ' 2' }); }
      else out.push({ key: s.key, fr: s.fr });
    });
    var r = D.rangedSlots[classe.rangedSlot];
    if (r) out.push({ key: classe.rangedSlot, fr: r.fr });
    return out;
  }

  var ech = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };

  // ── Vue 1 : choisir une spécialisation ────────────────────────────────────
  function grille() {
    return '<div class="bis-classes">' + D.classes.map(function (c) {
      return '<section class="bis-classe" style="--c:' + c.color + '">' +
        '<h2><img src="' + icone(c.icon) + '" alt="" width="28" height="28" loading="lazy">' +
        ech(c.name_fr) + '</h2><ul>' +
        c.specs.map(function (s) {
          return '<li><a href="?spec=' + c.slug + '-' + s.key + '">' +
            '<b>' + ech(s.fr) + '</b><span>' + ech(ROLES[s.role] || '') + '</span></a></li>';
        }).join('') + '</ul></section>';
    }).join('') + '</div>';
  }

  // ── Vue 2 : les emplacements d'une spécialisation ─────────────────────────
  function fiche(sel) {
    var c = sel.classe, s = sel.spec;
    var lignes = emplacements(c).map(function (e) {
      // `items` est vide partout : on affiche l'état, on n'invente rien.
      return '<tr><th scope="row">' + ech(e.fr) + '</th>' +
             '<td class="bis-vide">Aucun objet connu</td></tr>';
    }).join('');
    return '<p class="bis-fil"><a href="?">← Toutes les spécialisations</a></p>' +
      '<header class="bis-tete" style="--c:' + c.color + '">' +
      '<img src="' + icone(c.icon) + '" alt="" width="40" height="40">' +
      '<div><h2>' + ech(c.name_fr) + ' ' + ech(s.fr) + '</h2>' +
      '<p>' + ech(ROLES[s.role] || '') + ' · <span class="en">' + ech(s.en) + '</span></p></div></header>' +
      '<table class="bis-slots"><caption>Emplacements d’équipement</caption><tbody>' +
      lignes + '</tbody></table>';
  }

  function rendu() {
    var id = new URLSearchParams(location.search).get('spec');
    var sel = trouve(id);
    racine.innerHTML = sel ? fiche(sel) : grille();
    document.title = sel
      ? sel.classe.name_fr + ' ' + sel.spec.fr + ' — BiS WoW Forever'
      : 'Listes BiS — WoW Forever';
  }

  // Navigation interne sans rechargement, pour garder la page réactive.
  racine.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="?"]');
    if (!a) return;
    e.preventDefault();
    history.pushState(null, '', a.getAttribute('href'));
    rendu();
    window.scrollTo(0, 0);
  });
  window.addEventListener('popstate', rendu);
  rendu();
})();
