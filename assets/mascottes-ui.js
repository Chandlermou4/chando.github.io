/* Collection de mascottes de WoW Forever.
 *
 * Nécessite data/mascottes-data.js chargé avant (window.MASCOTTES_DATA).
 *
 * Trois vues dans la même page, comme les listes BiS : la collection
 * (?vue=avant-niveau-30 | nouvelles | mysteres pour une sélection), et la fiche
 * d'une mascotte (?m=<slug>). La vue vit dans l'URL pour qu'un lien soit
 * partageable ; les filtres, eux, restent en mémoire le temps de la visite.
 *
 * « Ma collection » : les espèces cochées sont gardées dans le stockage local
 * du navigateur (numéros d'espèce uniquement). Sans stockage, la page marche
 * sans elle.
 */
(function () {
  'use strict';

  var D = window.MASCOTTES_DATA;
  var racine = document.getElementById('mascottes');
  if (!D || !racine) return;

  var CLE = 'chando-mascottes-collection';
  var M = D.mascottes.slice().sort(function (a, b) { return a.nom_fr.localeCompare(b.nom_fr, 'fr'); });

  // Le client range 104 espèces sur 113 en « Bestiole » : on regroupe par apparence.
  var GROUPES = [
    ['chats', 'Chats'], ['oiseaux', 'Oiseaux'], ['serpents', 'Serpents'], ['rongeurs-lapins', 'Rongeurs et lapins'],
    ['insectes-araignees', 'Insectes et araignées'], ['grenouilles-reptiles', 'Grenouilles et reptiles'],
    ['dragonnets', 'Dragonnets'], ['loups', 'Loups'], ['grosses-betes', 'Grosses bêtes'], ['murlocs', 'Murlocs'],
    ['mecaniques', 'Mécaniques'], ['gelees', 'Gelées'], ['esprits-feux', 'Esprits, lanternes et feux'],
    ['fetes-hiver', 'Fêtes saisonnières'], ['ents-furbolgs', 'Ents et Furbolgs'], ['clins-doeil', 'Clins d’œil Blizzard']
  ];
  var STATUTS = {
    obtenable: ['Obtenable', 'Méthode confirmée sur la bêta ou par les données de Wowhead Forever.'],
    a_decouvrir: ['À découvrir', 'Présente dans le client, mais personne n’a encore établi comment l’obtenir.'],
    inaccessible: ['Inaccessible', 'Dépend d’un événement, d’une promotion ou d’un système absent de la bêta.'],
    cachee: ['Cachée', 'Dans les fichiers du client, sans objet d’apprentissage ou encore chiffrée.']
  };
  var TRANCHES = [['1-10', 'Niveau 1–10'], ['11-20', 'Niveau 11–20'], ['21-29', 'Niveau 21–29'], ['30+', 'Niveau 30 et plus'],
    ['evenement', 'Événements'], ['boutique', 'Boutique'], ['', 'Sans tranche connue']];
  var SOURCES = ['Vendeur', 'Quête', 'Butin', 'Métier', 'Interaction', 'Événement', 'Boutique et promotions', 'Inconnue'];
  var VUES = {
    'avant-niveau-30': { titre: 'Avant le niveau 30', regroupe: 'tranche',
      texte: 'Toutes les mascottes qu’un personnage peut obtenir entre les niveaux 1 et 29, classées par tranche de niveau.',
      garde: function (p) { return ['1-10', '11-20', '21-29'].indexOf(p.tranche) >= 0; } },
    'nouvelles': { titre: 'Nouvelles dans Forever', regroupe: 'groupe',
      texte: 'Les 42 espèces absentes de Classic Era, des mascottes déjà trouvées sur la bêta aux données encore chiffrées.',
      garde: function (p) { return p.nouvelle_forever; } },
    'mysteres': { titre: 'Mystères', regroupe: 'statut',
      texte: 'Présentes dans le client, sans méthode d’obtention connue. Chaque fiche donne les indices que le client laisse : prix de base, liaison, objet.',
      garde: function (p) { return p.statut === 'a_decouvrir' || p.statut === 'cachee'; } }
  };
  var WH = { item: 'Objet', npc: 'PNJ', spell: 'Sort', quest: 'Quête', currency: 'Monnaie', faction: 'Faction' };

  var ech = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  var sansAccent = function (s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); };
  var groupeNom = function (g) { for (var i = 0; i < GROUPES.length; i++) if (GROUPES[i][0] === g) return GROUPES[i][1]; return g; };
  var parSlug = function (s) { for (var i = 0; i < M.length; i++) if (M[i].slug === s) return M[i]; return null; };

  function icone(nom) { return 'https://wow.zamimg.com/images/wow/icons/large/' + encodeURIComponent(nom) + '.jpg'; }
  /** Rendu 3D publié par le visualiseur de Wowhead ; absent pour la plupart des modèles propres à Forever. */
  function vignette(p) {
    var m = p.modele;
    return m.vignette ? 'https://wow.zamimg.com/modelviewer/' + m.vignette + '/webthumbs/npc/' + (m.affichage & 255) + '/' + m.affichage + '.webp' : null;
  }
  function factions(p) {
    var f = p.faction || '', out = [];
    if (/Alliance/.test(f)) out.push('Alliance');
    if (/Horde/.test(f)) out.push('Horde');
    if (/deux|indépendante/.test(f)) out.push('Alliance', 'Horde');
    return out;
  }
  function typeSource(p) {
    var s = (p.source || '').toLowerCase();
    if (s.indexOf('vendeur') === 0) return 'Vendeur';
    if (s.indexOf('quête') === 0) return 'Quête';
    if (s.indexOf('drop') === 0 || s.indexOf('conteneur') === 0) return 'Butin';
    if (s.indexOf('métier') === 0) return 'Métier';
    if (s.indexOf('événement') === 0) return 'Événement';
    if (s.indexOf('interaction') === 0) return 'Interaction';
    if (s.indexOf('boutique') === 0 || s.indexOf('promotion') === 0) return 'Boutique et promotions';
    return 'Inconnue';
  }
  function sousTitre(p) {
    if (p.statut === 'obtenable' || p.statut === 'inaccessible') {
      var t = [p.pnj, p.zone].filter(Boolean).join(' · ');
      if (t) return t;
    }
    return STATUTS[p.statut][0];
  }

  // ── Collection locale ────────────────────────────────────────────────────
  var possede = {};
  try {
    (JSON.parse(localStorage.getItem(CLE) || '[]') || []).forEach(function (id) { if (id === +id) possede[id] = true; });
  } catch (e) {}
  function enregistre() {
    try { localStorage.setItem(CLE, JSON.stringify(Object.keys(possede).map(Number))); } catch (e) {}
  }

  // ── Morceaux de rendu ────────────────────────────────────────────────────
  function badge(statut) { return '<span class="m-badge st-' + statut + '">' + STATUTS[statut][0] + '</span>'; }
  function petiteIcone(p, taille) {
    return '<span class="m-icone st-' + p.statut + '" style="width:' + taille + 'px;height:' + taille + 'px">' +
      '<img src="' + icone(p.icone) + '" alt="" width="' + taille + '" height="' + taille + '" loading="lazy" onerror="this.remove()"></span>';
  }
  function portrait(p, grand) {
    var url = vignette(p);
    return '<span class="m-portrait st-' + p.statut + (grand ? ' grand' : '') + '">' +
      (url ? '<img src="' + url + '" alt="Modèle : ' + ech(p.nom_fr) + '" loading="lazy" onerror="this.parentNode.classList.add(\'sans-rendu\');this.remove()">' : '') +
      petiteIcone(p, grand ? 72 : 52) + '</span>';
  }
  function carte(p) {
    var a = !!possede[p.espece_id];
    return '<li class="m-carte' + (a ? ' a-moi' : '') + '">' +
      '<a href="?m=' + p.slug + '">' + portrait(p) +
      '<span class="m-nom"><b>' + ech(p.nom_fr) + '</b><small>' + ech(sousTitre(p)) + '</small></span>' +
      (p.nouvelle_forever ? '<em class="m-nouv">Forever</em>' : '') + '</a>' +
      '<button type="button" class="m-coche" data-id="' + p.espece_id + '" aria-pressed="' + a + '" aria-label="' +
      (a ? 'Retirer de' : 'Ajouter à') + ' ma collection : ' + ech(p.nom_fr) + '"></button></li>';
  }
  function ligne(p) {
    var a = !!possede[p.espece_id];
    return '<li class="m-ligne' + (a ? ' a-moi' : '') + '"><a href="?m=' + p.slug + '">' + petiteIcone(p, 36) +
      '<span class="m-nom"><b>' + ech(p.nom_fr) + (p.nouvelle_forever ? ' <em class="m-nouv">Forever</em>' : '') + '</b><small>' + ech(sousTitre(p)) + '</small></span></a>' +
      '<button type="button" class="m-coche" data-id="' + p.espece_id + '" aria-pressed="' + a + '" aria-label="' +
      (a ? 'Retirer de' : 'Ajouter à') + ' ma collection : ' + ech(p.nom_fr) + '"></button></li>';
  }

  // ── Vue collection ───────────────────────────────────────────────────────
  var etat = { q: '', statut: '', tranche: '', faction: '', source: '', groupe: '', nouvelles: false, mienne: '', regroupe: 'groupe', vue: 'galerie' };

  function choix(cle, libelle, options) {
    return '<select data-f="' + cle + '" aria-label="' + libelle + '"><option value="">' + libelle + '</option>' +
      options.map(function (o) { return '<option value="' + ech(o[0]) + '"' + (etat[cle] === o[0] ? ' selected' : '') + '>' + ech(o[1]) + '</option>'; }).join('') + '</select>';
  }

  function collection(cleVue) {
    var vue = VUES[cleVue];
    var base = vue ? M.filter(vue.garde) : M;
    if (vue) etat.regroupe = vue.regroupe;
    var compte = function (f) { return M.filter(f).length; };
    var h = '';
    h += '<nav class="m-vues">' + [['', 'Toutes les mascottes', M.length]].concat(Object.keys(VUES).map(function (k) {
      return [k, VUES[k].titre, M.filter(VUES[k].garde).length];
    })).map(function (v) {
      return '<a href="' + (v[0] ? '?vue=' + v[0] : '?') + '"' + ((cleVue || '') === v[0] ? ' class="is-here"' : '') + '>' + v[1] + ' <span>' + v[2] + '</span></a>';
    }).join('') + '</nav>';
    if (vue) h += '<p class="lede">' + vue.texte + '</p>';
    else h += '<dl class="m-chiffres">' + [
      [M.length, 'espèces dans le client'], [compte(function (p) { return p.nouvelle_forever; }), 'nouvelles dans Forever'],
      [compte(function (p) { return p.statut === 'obtenable'; }), 'obtenables'],
      [compte(function (p) { return p.statut === 'a_decouvrir'; }), 'méthodes à découvrir'],
      [compte(function (p) { return p.statut === 'cachee'; }), 'cachées ou chiffrées']
    ].map(function (c) { return '<div><dt>' + c[1] + '</dt><dd>' + c[0] + '</dd></div>'; }).join('') + '</dl>';
    if (cleVue === 'avant-niveau-30') h += '<div class="notice m-amorce"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg><div><strong>Niveau d’objet n’est pas niveau requis.</strong> Dans le client, aucun objet de mascotte n’exige de niveau, sauf le Petit appât amer (niveau 1). Seuls deux sorts d’invocation en portent un : l’<a href="?m=ecureuil-mecanique">Écureuil mécanique</a> et le <a href="?m=petit-appat-amer">Petit appât amer</a>, niveau 15. Pour toutes les autres, la limite est l’accès à la source — la zone, le niveau du monstre, celui de la quête. Le « niveau 30 » des vendeurs de capitale est celui du PNJ, pas une condition d’achat.</div></div>';

    h += '<div class="m-outils"><label class="m-cherche"><span class="m-cache">Rechercher une mascotte</span>' +
      '<input type="search" data-f="q" value="' + ech(etat.q) + '" placeholder="Nom français ou anglais, PNJ, zone…"></label>' +
      '<div class="m-progres" id="m-progres"></div></div>';
    h += '<div class="m-filtres">' +
      (cleVue === 'mysteres' ? '' : choix('statut', 'Tous les statuts', Object.keys(STATUTS).map(function (s) { return [s, STATUTS[s][0]]; }))) +
      choix('tranche', 'Tous les niveaux', TRANCHES.slice(0, 6)) +
      choix('faction', 'Toutes les factions', [['Alliance', 'Alliance'], ['Horde', 'Horde']]) +
      choix('source', 'Toutes les sources', SOURCES.map(function (s) { return [s, s]; })) +
      choix('groupe', 'Toutes les apparences', GROUPES) +
      choix('mienne', 'Toute la collection', [['manque', 'Il me manque'], ['ai', 'Déjà obtenues']]) +
      (cleVue === 'nouvelles' ? '' : '<label class="m-case"><input type="checkbox" data-f="nouvelles"' + (etat.nouvelles ? ' checked' : '') + '> Nouvelles Forever</label>') +
      '<select data-f="regroupe" aria-label="Regrouper">' + [['groupe', 'Par apparence'], ['tranche', 'Par niveau'], ['statut', 'Par statut'], ['aucun', 'Sans regroupement']].map(function (o) {
        return '<option value="' + o[0] + '"' + (etat.regroupe === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select>' +
      '<span class="m-bascule" role="group" aria-label="Affichage"><button type="button" data-vue="galerie">Galerie</button><button type="button" data-vue="liste">Liste</button></span>' +
      '</div><p class="m-compte" id="m-compte"></p><div id="m-liste"></div>';
    if (!vue) h += decouvertes() + legende();
    racine.innerHTML = h;

    var liste = document.getElementById('m-liste'), compteur = document.getElementById('m-compte');
    function filtre() {
      var q = sansAccent(etat.q.trim());
      return base.filter(function (p) {
        return (!q || sansAccent(p.nom_fr + ' ' + p.nom_en + ' ' + (p.pnj || '') + ' ' + (p.zone || '')).indexOf(q) >= 0) &&
          (!etat.statut || p.statut === etat.statut) && (!etat.tranche || p.tranche === etat.tranche) &&
          (!etat.faction || factions(p).indexOf(etat.faction) >= 0) && (!etat.source || typeSource(p) === etat.source) &&
          (!etat.groupe || p.groupe === etat.groupe) && (!etat.nouvelles || p.nouvelle_forever) &&
          (!etat.mienne || (etat.mienne === 'ai') === !!possede[p.espece_id]);
      });
    }
    function progres() {
      var n = base.filter(function (p) { return possede[p.espece_id]; }).length;
      document.getElementById('m-progres').innerHTML = '<span><b>' + n + '</b> / ' + base.length + ' dans ma collection</span>' +
        '<span class="m-barre" aria-hidden="true"><i style="width:' + (n / base.length * 100) + '%"></i></span>';
    }
    function rend() {
      var vus = filtre();
      compteur.textContent = vus.length + ' mascotte' + (vus.length > 1 ? 's' : '') + ' affichée' + (vus.length > 1 ? 's' : '');
      var paquets;
      if (etat.regroupe === 'aucun') paquets = [['', vus]];
      else {
        var cles = etat.regroupe === 'groupe' ? GROUPES : etat.regroupe === 'tranche' ? TRANCHES
          : Object.keys(STATUTS).map(function (s) { return [s, STATUTS[s][0]]; });
        paquets = cles.map(function (c) {
          return [c[1], vus.filter(function (p) { return (etat.regroupe === 'tranche' ? (p.tranche || '') : p[etat.regroupe]) === c[0]; })];
        }).filter(function (x) { return x[1].length; });
      }
      var rendu = etat.vue === 'galerie' ? carte : ligne;
      liste.innerHTML = vus.length ? paquets.map(function (x) {
        return '<section class="m-paquet">' + (x[0] ? '<h2>' + x[0] + ' <span>' + x[1].length + '</span></h2>' : '') +
          '<ul class="' + (etat.vue === 'galerie' ? 'm-galerie' : 'm-lignes') + '">' + x[1].map(rendu).join('') + '</ul></section>';
      }).join('') : '<p class="m-vide">Aucune mascotte ne correspond à ces filtres.</p>';
      [].forEach.call(racine.querySelectorAll('[data-vue]'), function (b) { b.setAttribute('aria-pressed', b.dataset.vue === etat.vue); });
      progres();
    }
    racine.addEventListener('input', function (e) {
      var f = e.target.dataset.f; if (!f) return;
      etat[f] = e.target.type === 'checkbox' ? e.target.checked : e.target.value; rend();
    });
    racine.addEventListener('click', function (e) {
      var b = e.target.closest('[data-vue]');
      if (b) { etat.vue = b.dataset.vue; rend(); return; }
      var c = e.target.closest('.m-coche');
      if (c) {
        var id = +c.dataset.id;
        if (possede[id]) delete possede[id]; else possede[id] = true;
        enregistre(); rend();
      }
    });
    rend();
  }

  function decouvertes() {
    return '<section class="m-journal"><h2>Dernières découvertes de la bêta</h2><ol>' + D.decouvertes.map(function (d) {
      var p = parSlug(d.slug);
      var date = new Date(d.date + 'T12:00:00Z').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', timeZone: 'Europe/Paris' });
      return '<li><time datetime="' + d.date + '">' + date + '</time><a href="?m=' + p.slug + '">' + petiteIcone(p, 28) + ech(p.nom_fr) + '</a>' +
        '<p>' + ech(d.texte) + ' <a class="m-src" href="' + d.source + '" target="_blank" rel="noopener">Source</a></p></li>';
    }).join('') + '</ol></section>';
  }
  function legende() {
    return '<section class="m-legende"><h2>Les statuts</h2><div>' + Object.keys(STATUTS).map(function (s) {
      return '<p>' + badge(s) + ' ' + STATUTS[s][1] + '</p>';
    }).join('') + '</div></section>';
  }

  // ── Fiche d'une mascotte ─────────────────────────────────────────────────
  function fait(libelle, valeur) {
    return '<div><dt>' + libelle + '</dt><dd>' + (valeur == null || valeur === '' ? '<span class="m-inconnu">Inconnu</span>' : ech(valeur)) + '</dd></div>';
  }
  function mini(liste) {
    return '<ul class="m-lignes compact">' + liste.map(function (x) {
      return '<li class="m-ligne"><a href="?m=' + x.slug + '">' + petiteIcone(x, 32) + '<span class="m-nom"><b>' + ech(x.nom_fr) + '</b><small>' + STATUTS[x.statut][0] + '</small></span></a></li>';
    }).join('') + '</ul>';
  }
  function fiche(p) {
    document.title = p.nom_fr + ' — Mascottes WoW Forever';
    var tranche = p.tranche && /\d/.test(p.tranche) ? 'Niveau ' + p.tranche.replace('-', '–') : p.tranche === 'evenement' ? 'Événement' : p.tranche === 'boutique' ? 'Boutique' : '';
    var connue = p.statut === 'obtenable' || !!p.pnj;
    var memeSource = p.pnj ? M.filter(function (x) { return x.pnj === p.pnj && x.slug !== p.slug; }) : [];
    var memeLook = M.filter(function (x) { return x.groupe === p.groupe && x.slug !== p.slug; });
    var niv = p.niveau_min == null ? null : p.niveau_min <= 1 ? 'Aucun (niveau 1)' : 'Niveau ' + p.niveau_min;
    var h = '<div class="m-fil"><a href="?">← Toutes les mascottes</a></div>';
    h += '<div class="m-tete">' + petiteIcone(p, 56) + '<div><div class="m-badges">' + badge(p.statut) +
      (p.nouvelle_forever ? '<span class="m-badge st-nouv">Nouvelle dans Forever</span>' : '') +
      (tranche ? '<span class="m-badge">' + tranche + '</span>' : '') + '</div>' +
      '<h2>' + ech(p.nom_fr) + '</h2><p><span class="en">' + ech(p.nom_en) + '</span> · ' + groupeNom(p.groupe) + '</p></div></div>';
    h += '<div class="m-fiche"><div>';
    h += '<p class="lede">' + STATUTS[p.statut][1] + '</p>';
    h += '<h3>Comment l’obtenir</h3>' + (connue ? '<dl class="m-faits">' + fait('Source', p.source) + fait('PNJ / créature', p.pnj) +
      fait('Zone', p.zone) + fait('Coordonnées', p.coords) + fait('Faction', p.faction) + fait('Niveau minimum', niv) +
      (p.prix ? fait('Prix', p.prix) : '') + (p.drop ? fait('Taux de butin', p.drop) : '') + '</dl>'
      : '<p class="lede">Aucune méthode d’obtention n’est connue pour l’instant.' + (p.source && p.source !== 'Inconnue' ? ' Piste : ' + ech(p.source.toLowerCase()) + '.' : '') + '</p>');
    if (p.notes) h += '<div class="notice"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg><div><strong>À savoir.</strong> ' + ech(p.notes) + '</div></div>';
    h += '<h3>Ce que dit le client</h3><dl class="m-faits">' + fait('ID d’espèce', p.espece_id) + fait('Sort d’invocation', p.sort_id) +
      fait('Objet d’apprentissage', p.objet_ids.length ? p.objet_ids.join(', ') : 'Aucun objet lié') + fait('Créature', p.creature_id) +
      fait('Niveau d’objet', p.niveau_objet) + fait('Niveau requis (objet)', p.niveau_requis_objet) +
      fait('Niveau du sort', p.niveau_sort || 'Aucun') + fait('Prix de base', p.prix_base_client || '—') +
      fait('Journal', p.visibilite_journal) + fait('Nouvelle dans Forever', p.nouvelle_forever ? 'Oui' : 'Non, déjà dans Classic Era') + '</dl>';
    if (memeSource.length) h += '<h3>Chez le même ' + (/^Vendeur/.test(p.source || '') ? 'vendeur' : 'PNJ') + '</h3>' + mini(memeSource);
    if (memeLook.length) h += '<h3>Même apparence : ' + groupeNom(p.groupe).toLowerCase() + '</h3>' + mini(memeLook);
    h += '</div><aside>';
    h += '<figure class="m-cadre">' + portrait(p, true) + '<figcaption>' + (p.modele.vignette ? 'Rendu du modèle ' + p.modele.affichage + ' · visualiseur Wowhead' : 'Modèle ' + p.modele.affichage + ' propre à Forever : pas encore de rendu publié') + '</figcaption></figure>';
    var a = !!possede[p.espece_id];
    h += '<button type="button" class="m-ajout" aria-pressed="' + a + '">' + (a ? '✓ Dans ma collection' : 'Ajouter à ma collection') + '</button>';
    h += '<div class="m-boite"><span class="m-sur">Confirmé par</span><ul>' + p.confirmation.map(function (c) { return '<li>' + ech(c) + '</li>'; }).join('') + '</ul>' +
      '<span class="m-sur">Build</span><p>' + D.build + ', relevé du ' + new Date(D.genere_le + 'T12:00:00Z').toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris' }) + '</p></div>';
    h += '<div class="m-boite"><span class="m-sur">Wowhead Forever</span>' + p.wowhead.map(function (w) {
      return '<a href="https://www.wowhead.com/forever/' + w[0] + '=' + w[1] + '" target="_blank" rel="noopener">' + (WH[w[0]] || w[0]) + ' ' + w[1] + ' ↗</a>';
    }).join('') + '</div></aside></div>';
    racine.innerHTML = h;
    racine.querySelector('.m-ajout').addEventListener('click', function () {
      if (possede[p.espece_id]) delete possede[p.espece_id]; else possede[p.espece_id] = true;
      enregistre(); fiche(p);
    });
  }

  var url = new URLSearchParams(location.search);
  var p = parSlug(url.get('m'));
  if (p) fiche(p);
  else collection(VUES[url.get('vue')] ? url.get('vue') : '');
})();
