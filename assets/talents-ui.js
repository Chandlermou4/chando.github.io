/* Interface du calculateur de talents — rendu et interactions.
   Porté depuis WoW Forever FR (composant React) vers ce site (JS vanille,
   sans étape de build). Nécessite talents-engine.js chargé avant. */
(function () {
  'use strict';
  var T = window.Talents;
  var root = document.getElementById('talent-page');

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function qs(sel) { return root.querySelector(sel); }
  function qsa(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

  // ── État ─────────────────────────────────────────────────────────────────
  var params = new URLSearchParams(window.location.search);
  var slug = params.get('classe');
  if (!T.talentClass(slug)) slug = T.talentClasses[0].slug;

  var S = {
    slug: slug,
    data: T.talentClass(slug),
    fr: T.frenchPack(slug),
    points: {},
    level: T.MAX_LEVEL,
    tip: null,           // {key,x,y} — survol souris
    pinned: null,         // key — fiche épinglée (tactile)
    coarse: false,
    showClassic: false,
    message: '',
    copied: false,
    messageTimer: null
  };
  (function restoreFromUrl() {
    var code = params.get('build');
    var lvl = Number(params.get('niveau'));
    var start = (lvl >= T.MIN_LEVEL && lvl <= T.MAX_LEVEL) ? lvl : T.MAX_LEVEL;
    S.level = start;
    if (code) S.points = T.decodeBuild(S.data, code, T.poolFor(start));
  })();

  function pool() { return T.poolFor(S.level); }
  function spentTotal() { var n = 0; for (var k in S.points) n += S.points[k]; return n; }
  function perTreeCounts() { return S.data.trees.map(function (tree) { return T.treeSpent(tree, S.points); }); }
  function buildCode() { return T.encodeBuild(S.data, S.points); }

  function syncUrl() {
    var q = new URLSearchParams();
    q.set('classe', S.slug);
    var b = buildCode();
    if (b) q.set('build', b);
    if (S.level !== T.MAX_LEVEL) q.set('niveau', String(S.level));
    var s = q.toString();
    window.history.replaceState(null, '', window.location.pathname + (s ? '?' + s : ''));
  }

  function showMessage(msg) {
    S.message = msg;
    renderStatus();
    if (S.messageTimer) clearTimeout(S.messageTimer);
    S.messageTimer = setTimeout(function () { S.message = ''; renderStatus(); }, 2600);
  }

  function currentDetail() {
    var key = S.pinned || (S.tip && S.tip.key) || null;
    if (!key) return null;
    for (var i = 0; i < S.data.trees.length; i++) {
      var tree = S.data.trees[i];
      var t = tree.talents.find(function (x) { return x.key === key; });
      if (t) return { tree: tree, talent: t };
    }
    return null;
  }

  function add(tree, t, label) {
    var left = pool() - spentTotal();
    var blocked = T.canAdd(tree, t, S.points, left);
    if (!blocked) {
      S.points[t.key] = (S.points[t.key] || 0) + 1;
      afterPointsChange();
      return;
    }
    showMessage(
      blocked.reason === 'maxed' ? (label || t.name_en) + ' est déjà au rang maximum.' :
      blocked.reason === 'no-points' ? 'Plus de point disponible au niveau ' + S.level + '.' :
      blocked.reason === 'row' ? 'Demande ' + blocked.need + ' points placés plus haut dans ' + T.frTree(tree.name_en, S.fr.glossary) + '.' :
      'Demande ' + blocked.ranks + ' point' + (blocked.ranks > 1 ? 's' : '') + ' dans ' + blocked.talent + '.'
    );
  }
  function remove(tree, t) {
    if (T.canRemove(tree, t, S.points)) {
      S.points[t.key] = S.points[t.key] - 1;
      if (!S.points[t.key]) delete S.points[t.key];
      afterPointsChange();
      return;
    }
    if ((S.points[t.key] || 0) > 0) showMessage('D’autres talents dépendent de ce point.');
  }
  function resetTree(tree) {
    tree.talents.forEach(function (t) { delete S.points[t.key]; });
    afterPointsChange();
  }
  function resetAll() { S.points = {}; afterPointsChange(); }
  function afterPointsChange() { syncUrl(); renderBar(); renderTrees(); renderDetail(); renderFoot(); }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(function () {
      S.copied = true; renderBar();
      setTimeout(function () { S.copied = false; renderBar(); }, 1800);
    }, function () {
      showMessage('Copie refusée par le navigateur. Le lien de la page contient déjà la sélection.');
    });
  }

  // ── Rendu ────────────────────────────────────────────────────────────────
  function iconHtml(icon, name) {
    if (!icon) return '<span class="node-icon" aria-hidden="true">' + esc(T.monogram(name)) + '</span>';
    return '<span class="node-icon" aria-hidden="true"><img src="' + esc(T.iconUrl(icon)) + '" alt="" loading="lazy" data-fallback="' + esc(T.monogram(name)) + '"></span>';
  }

  function renderClassTabs() {
    return '<nav class="class-tabs">' + T.talentClasses.map(function (c) {
      var active = c.slug === S.slug;
      return '<a href="talents.html?classe=' + encodeURIComponent(c.slug) + '" title="' + esc(c.name_fr) + '" aria-label="' + esc(c.name_fr) + '"' +
        (active ? ' class="is-active" aria-current="page"' : '') + '>' +
        (c.icon ? '<img src="' + esc(T.iconUrl(c.icon)) + '" alt="" loading="lazy" data-fallback="' + esc(T.monogram(c.name_en)) + '">' : esc(T.monogram(c.name_en))) +
        '</a>';
    }).join('') + '</nav>';
  }

  function renderProvenance() {
    var stats = T.observationStats(S.data);
    var pct = Math.round(stats.observed / stats.total * 100);
    return '<div class="talent-provenance">' +
      '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>' +
      '<div><strong>Relevés communautaires, pas des données du jeu.</strong> ' +
      esc(T.talentOrigin) + ' Icônes et illustrations d’arbre viennent du CDN public de Wowhead ; aucun de ces fichiers n’est copié dans le dépôt. ' +
      'Pour cette classe, <strong>' + pct + ' %</strong> des textes de rang ont été lus dans la démonstration ; les autres sont extrapolés à partir du rang 1 et signalés par le repère ≈.</div></div>';
  }

  function renderLegend() {
    return '<div class="talent-legend">' +
      '<span><i class="open"></i> Disponible</span>' +
      '<span><i class="partial"></i> Rangs partiels</span>' +
      '<span><i class="maxed"></i> Rang maximum</span>' +
      '<span><i class="locked"></i> Verrouillé</span>' +
      '<span><i class="new"></i> Nouveau dans Forever</span>' +
      '<span class="legend-note">Les rangs estimés sont signalés dans l’infobulle du talent.</span>' +
      '</div>';
  }

  function renderBar() {
    var el = qs('#mount-bar'); if (!el) return;
    var perTree = perTreeCounts();
    var spent = spentTotal(), p = pool();
    var levelOptions = [];
    for (var l = T.MAX_LEVEL; l >= T.MIN_LEVEL; l--) levelOptions.push('<option value="' + l + '"' + (l === S.level ? ' selected' : '') + '>' + l + '</option>');
    el.innerHTML =
      '<div class="talent-bar">' +
        '<div class="talent-score">' +
          '<div class="points"><strong class="' + (spent > p ? 'over' : '') + '">' + (p - spent) + '</strong><span>points restants</span></div>' +
          '<div class="split"><strong>' + perTree.join(' / ') + '</strong><span>' + S.data.trees.map(function (t) { return esc(t.name_en); }).join(' · ') + '</span></div>' +
          '<label class="level-picker">Niveau <select id="level-select" aria-label="Niveau du personnage">' + levelOptions.join('') + '</select></label>' +
        '</div>' +
        '<div class="talent-actions">' +
          '<label class="classic-toggle' + (S.showClassic ? ' is-on' : '') + '">' +
            '<input type="checkbox" id="classic-toggle-input"' + (S.showClassic ? ' checked' : '') + '>' +
            '<span class="classic-toggle-track" aria-hidden="true"></span>Comparaison talents Classic' +
          '</label>' +
          '<button type="button" class="button outline" id="reset-all"' + (!spent ? ' disabled' : '') + '>↺ Tout réinitialiser</button>' +
          '<button type="button" class="button gold" id="copy-link">' + (S.copied ? '✓ Lien copié' : '⛓ Copier le lien') + '</button>' +
        '</div>' +
      '</div>';
  }

  function renderHelp() {
    return '<p class="talent-help">' +
      'Clic pour ajouter un point, clic droit ou <kbd>Maj</kbd>+clic pour en retirer. ' +
      'Une ligne s’ouvre tous les ' + T.talentGrid.pointsPerRow + ' points placés au-dessus d’elle, dans le même arbre. ' +
      'Une flèche signale un talent à monter au maximum d’abord.</p>';
  }

  function renderNode(tree, t) {
    var dep = t.prerequisite ? tree.talents.find(function (x) { return x.key === t.prerequisite; }) : null;
    var span = dep ? t.row - dep.row : 0;
    var side = /--left$/.test(t.arrow || '') ? 'left' : (/--right$/.test(t.arrow || '') ? 'right' : null);
    var rank = S.points[t.key] || 0;
    var blocked = T.gate(tree, t, S.points) !== null;
    var state = rank >= t.maxRanks ? 'maxed' : rank > 0 ? 'partial' : blocked ? 'locked' : 'open';
    var shownKey = S.pinned || (S.tip && S.tip.key) || null;
    var active = shownKey === t.key;
    var opened = S.pinned === t.key;
    var label = (S.fr.entries[t.key] && S.fr.entries[t.key].name) || t.name_en;
    var arrowHtml = dep ? (side
      ? '<span class="talent-arrow side ' + side + '" aria-hidden="true"></span>'
      : '<span class="talent-arrow" style="--span:' + span + '" aria-hidden="true"></span>') : '';
    return '<div class="talent-cell" style="grid-row:' + t.row + ';grid-column:' + t.col + '">' + arrowHtml +
      '<button type="button" class="talent-node ' + state + (active ? ' active' : '') + (t.kind === 'actif' ? ' spell' : '') + '"' +
      ' data-tree="' + esc(tree.key) + '" data-talent="' + esc(t.key) + '" data-opened="' + (opened ? '1' : '0') + '"' +
      ' aria-label="' + esc(label) + ' — rang ' + rank + ' sur ' + t.maxRanks + '"' +
      (active ? ' aria-describedby="talent-detail"' : '') + '>' +
      iconHtml(t.icon, t.name_en) +
      '<span class="node-rank">' + rank + '/' + t.maxRanks + '</span>' +
      (t.changeFromClassic === 'new' ? '<span class="node-flag new" title="Nouveau dans Forever">N</span>' : '') +
      '</button></div>';
  }

  function renderTreeNotes(tree) {
    if (!tree.removedFromClassic.length && !tree.disputed.length) return '';
    var html = '<div class="tree-notes">';
    tree.disputed.forEach(function (d) {
      html += '<details class="disputed" open><summary>' + esc(d.name_en) + ' — présence contestée</summary>' +
        '<p>Signalé en ligne ' + d.row + ', colonne ' + d.col + ' par wowtbc.gg (' + d.maxRanks + ' rangs). ' + esc(d.counterClaim) + ' Le talent n’est donc pas placé dans la grille.</p>' +
        (d.text ? '<p class="small muted">' + esc(d.text) + '</p>' : '') + '</details>';
    });
    if (tree.removedFromClassic.length > 0) {
      html += '<details><summary>' + tree.removedFromClassic.length + ' talent' + (tree.removedFromClassic.length > 1 ? 's' : '') +
        ' Classic absent' + (tree.removedFromClassic.length > 1 ? 's' : '') + ' de cet arbre</summary><ul>' +
        tree.removedFromClassic.map(function (r) { return '<li><strong>' + esc(r.name_en) + '</strong> (' + r.maxRanks + ' rangs) — ' + esc(r.text) + '</li>'; }).join('') +
        '</ul></details>';
    }
    return html + '</div>';
  }

  function renderTrees() {
    var el = qs('#mount-trees'); if (!el) return;
    var perTree = perTreeCounts();
    el.innerHTML = '<div class="talent-trees">' + S.data.trees.map(function (tree, i) {
      var treeName = T.frTree(tree.name_en, S.fr.glossary);
      var bgStyle = tree.backgroundId ? ' style="--tree-bg:url(' + T.treeBackground(tree.backgroundId) + ')"' : '';
      return '<section class="talent-tree">' +
        '<header class="tree-head"><div><h2>' + esc(treeName) + '</h2><span class="tree-fr">' + esc(tree.name_en) + '</span></div>' +
        '<div class="tree-count"><strong>' + perTree[i] + '</strong>' +
        '<button type="button" data-reset-tree="' + esc(tree.key) + '"' + (!perTree[i] ? ' disabled' : '') + ' aria-label="Réinitialiser ' + esc(treeName) + '">↺</button></div></header>' +
        '<div class="tree-grid" data-tree-grid="' + esc(tree.key) + '"' + bgStyle + '>' +
        tree.talents.map(function (t) { return renderNode(tree, t); }).join('') +
        '</div>' + renderTreeNotes(tree) + '</section>';
    }).join('') + '</div>';
  }

  function renderDetailContent(tree, t) {
    var rank = S.points[t.key] || 0;
    var shownRank = Math.max(1, rank);
    var current = t.ranks[shownRank - 1];
    var next = (rank > 0 && rank < t.maxRanks) ? t.ranks[rank] : null;
    var dep = t.prerequisite ? tree.talents.find(function (x) { return x.key === t.prerequisite; }) : null;
    var e = S.fr.entries[t.key];
    var depFr = dep ? S.fr.entries[dep.key] : undefined;
    var texts = T.frRanks(e, t.ranks);
    var skill = T.frSkill(t.skill, S.fr.glossary) || t.skill;
    var floating = !!S.tip && !S.pinned;
    var name = (e && e.name) || t.name_en;
    var html = '<div class="detail-head"><div><h3>' + esc(name) + '</h3>' +
      (e ? '<span class="detail-original">' + esc(t.name_en) + '</span>' : '') + '</div>' +
      (!floating ? '<button type="button" id="detail-close" aria-label="Fermer le détail">×</button>' : '') + '</div>';
    if (skill) {
      html += '<dl class="detail-skill">' +
        (skill.cost ? '<div><dt>Coût</dt><dd>' + esc(skill.cost) + '</dd></div>' : '') +
        (skill.range ? '<div><dt>Portée</dt><dd>' + esc(skill.range) + '</dd></div>' : '') +
        (skill.castTime ? '<div><dt>Incantation</dt><dd>' + esc(skill.castTime) + '</dd></div>' : '') +
        (skill.cooldown ? '<div><dt>Recharge</dt><dd>' + esc(skill.cooldown) + '</dd></div>' : '') +
        '</dl>';
    } else if (t.costLine) { html += '<p class="detail-cost">' + esc(t.costLine) + '</p>'; }
    var mainText = texts[shownRank - 1] || (current && current.text) || 'Texte de ce rang non relevé dans la démonstration.';
    html += '<p class="detail-text">' + esc(mainText) +
      ((current && !current.observed) ? '<em class="detail-guess"> — rang estimé à partir du rang 1, non lu dans la démonstration.</em>' : '') + '</p>';
    if (next) {
      var nextText = texts[rank] || next.text || 'Texte non relevé.';
      html += '<p class="detail-next"><strong>Rang suivant.</strong> ' + esc(nextText) + (next.text && !next.observed ? '<em class="detail-guess"> (estimé)</em>' : '') + '</p>';
    }
    if (t.requires.length > 0) html += '<p class="detail-req">' + esc(T.frRequires(t.requires, S.fr.glossary).join(' · ')) + '</p>';
    if (dep) html += '<p class="detail-req">🔒 Demande ' + dep.maxRanks + ' point' + (dep.maxRanks > 1 ? 's' : '') + ' dans ' + esc((depFr && depFr.name) || dep.name_en) + '.</p>';
    if (t.extra) html += '<ul class="detail-extra">' + t.extra.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (t.rankNote) html += '<p class="detail-note">❓ ' + esc(t.rankNote) + '</p>';
    if (e && e.note) html += '<p class="detail-note">❓ ' + esc(e.note) + '</p>';
    var classicText = (e && e.classic) || t.classicText;
    if (S.showClassic && classicText) html += '<p class="detail-classic"><span>Texte Classic — rang 1</span> ' + esc(classicText) + '</p>';
    if (t.divergences.length > 0) {
      html += '<div class="detail-divergence"><strong>Les deux relevés ne disent pas la même chose</strong><ul>' +
        t.divergences.map(function (d) {
          var field = d.field === 'name' ? 'Nom' : d.field === 'maxRanks' ? 'Rangs' : d.field === 'position' ? 'Position' : 'Prérequis';
          return '<li>' + field + ' : « ' + esc(d.foreverTalents) + ' » côté relevé image par image, « ' + esc(d.wowtbc) + ' » côté wowtbc.gg.</li>';
        }).join('') + '</ul></div>';
    }
    if (!floating) {
      html += '<div class="detail-controls">' +
        '<button type="button" id="detail-remove"' + (rank === 0 ? ' disabled' : '') + ' aria-label="Retirer un point de ' + esc(name) + '">− Retirer</button>' +
        '<strong>' + rank + ' / ' + t.maxRanks + '</strong>' +
        '<button type="button" id="detail-add"' + (rank >= t.maxRanks ? ' disabled' : '') + ' aria-label="Ajouter un point à ' + esc(name) + '">+ Ajouter</button>' +
        '</div>';
    }
    return { html: html, floating: floating, name: name };
  }

  function renderDetail() {
    var el = qs('#mount-detail'); if (!el) return;
    var d = currentDetail();
    if (!d) { el.innerHTML = ''; return; }
    var built = renderDetailContent(d.tree, d.talent);
    var style = '';
    if (built.floating && S.tip) {
      var left = Math.min(S.tip.x + 12, Math.max(12, window.innerWidth - 352));
      var top = Math.max(12, S.tip.y);
      style = ' style="position:fixed;left:' + left + 'px;top:' + top + 'px"';
    }
    el.innerHTML = '<div id="talent-detail" class="talent-detail ' + (built.floating ? 'floating' : 'sheet') + '"' + style +
      ' role="' + (built.floating ? 'tooltip' : 'dialog') + '" aria-label="' + esc(built.name) + '">' + built.html + '</div>';
  }

  function renderStatus() {
    var el = qs('#mount-status'); if (!el) return;
    el.innerHTML = '<p class="talent-status" role="status" aria-live="polite">' + esc(S.message) + '</p>';
  }

  function renderFoot() {
    var el = qs('#mount-foot'); if (!el) return;
    var spent = spentTotal(), p = pool(), b = buildCode();
    el.innerHTML = '<div class="talent-foot">' +
      '<span>' + spent + ' / ' + p + ' points alloués' + (b ? ' · code <code>' + esc(b) + '</code>' : '') + '</span>' +
      '<span>Niveau ' + S.level + ' · ' + p + ' point' + (p > 1 ? 's' : '') + ' disponibles</span>' +
      '</div>';
  }

  function renderShell() {
    root.className = 'talent-tool';
    root.innerHTML =
      renderClassTabs() + renderProvenance() + renderLegend() +
      '<div id="mount-bar"></div>' + renderHelp() +
      '<div id="mount-trees"></div><div id="mount-detail"></div>' +
      '<div id="mount-status"></div><div id="mount-foot"></div>';
    renderBar(); renderTrees(); renderDetail(); renderStatus(); renderFoot();
  }

  // ── Évènements (délégation, la grille est reconstruite à chaque clic) ─────
  function peekFromNode(btn) {
    var r = btn.getBoundingClientRect();
    S.tip = { key: btn.getAttribute('data-talent'), x: r.right, y: r.top };
    renderDetail();
    qsa('.talent-node[data-talent]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-talent') === S.tip.key);
    });
  }
  function leavePeek() {
    if (!S.tip) return;
    S.tip = null;
    renderDetail();
    qsa('.talent-node.active').forEach(function (b) { b.classList.remove('active'); });
  }
  function findTreeTalent(treeKey, talentKey) {
    var tree = S.data.trees.find(function (x) { return x.key === treeKey; });
    if (!tree) return null;
    var t = tree.talents.find(function (x) { return x.key === talentKey; });
    return t ? { tree: tree, talent: t } : null;
  }

  function wireEvents() {
    var mq = window.matchMedia('(hover: none)');
    var syncCoarse = function () { S.coarse = mq.matches; };
    syncCoarse();
    mq.addEventListener('change', function () { syncCoarse(); renderTrees(); renderDetail(); });

    root.addEventListener('click', function (e) {
      var toggleEl = e.target.closest('#classic-toggle-input');
      if (toggleEl) { S.showClassic = toggleEl.checked; qs('.classic-toggle').classList.toggle('is-on', S.showClassic); renderDetail(); return; }
      var resetAllBtn = e.target.closest('#reset-all'); if (resetAllBtn) { resetAll(); return; }
      var copyBtn = e.target.closest('#copy-link'); if (copyBtn) { copyLink(); return; }
      var resetTreeBtn = e.target.closest('[data-reset-tree]');
      if (resetTreeBtn) { var tr = S.data.trees.find(function (x) { return x.key === resetTreeBtn.getAttribute('data-reset-tree'); }); if (tr) resetTree(tr); return; }
      var closeBtn = e.target.closest('#detail-close'); if (closeBtn) { S.pinned = null; S.tip = null; renderTrees(); renderDetail(); return; }
      var addBtn = e.target.closest('#detail-add'); if (addBtn) { var d1 = currentDetail(); if (d1) add(d1.tree, d1.talent, (S.fr.entries[d1.talent.key] || {}).name); return; }
      var remBtn = e.target.closest('#detail-remove'); if (remBtn) { var d2 = currentDetail(); if (d2) remove(d2.tree, d2.talent); return; }
      var node = e.target.closest('.talent-node');
      if (node) {
        var found = findTreeTalent(node.getAttribute('data-tree'), node.getAttribute('data-talent'));
        if (!found) return;
        var opened = node.getAttribute('data-opened') === '1';
        if (S.coarse && !opened) { S.pinned = (S.pinned === found.talent.key) ? null : found.talent.key; renderTrees(); renderDetail(); return; }
        if (e.shiftKey) remove(found.tree, found.talent);
        else add(found.tree, found.talent, (S.fr.entries[found.talent.key] || {}).name);
      }
    });
    root.addEventListener('contextmenu', function (e) {
      var node = e.target.closest('.talent-node');
      if (!node) return;
      e.preventDefault();
      var found = findTreeTalent(node.getAttribute('data-tree'), node.getAttribute('data-talent'));
      if (found) remove(found.tree, found.talent);
    });
    root.addEventListener('keydown', function (e) {
      if (e.key !== 'Backspace' && e.key !== 'Delete') return;
      var node = e.target.closest('.talent-node');
      if (!node) return;
      e.preventDefault();
      var found = findTreeTalent(node.getAttribute('data-tree'), node.getAttribute('data-talent'));
      if (found) remove(found.tree, found.talent);
    });
    root.addEventListener('change', function (e) {
      if (e.target.id === 'level-select') { S.level = Number(e.target.value); afterPointsChange(); }
    });
    // survol (desktop uniquement) : mouseover/mouseout bubblent, contrairement à
    // mouseenter/mouseleave — on filtre nous-mêmes les entrées/sorties du bouton.
    root.addEventListener('mouseover', function (e) {
      if (S.coarse) return;
      var node = e.target.closest('.talent-node');
      if (!node || (e.relatedTarget && node.contains(e.relatedTarget))) return;
      peekFromNode(node);
    });
    root.addEventListener('mouseout', function (e) {
      if (S.coarse) return;
      var node = e.target.closest('.talent-node');
      if (!node || (e.relatedTarget && node.contains(e.relatedTarget))) return;
      leavePeek();
    });
    root.addEventListener('focusin', function (e) {
      if (S.coarse) return;
      var node = e.target.closest('.talent-node');
      if (node) peekFromNode(node);
    });
    root.addEventListener('focusout', function (e) {
      if (S.coarse) return;
      var node = e.target.closest('.talent-node');
      if (node) leavePeek();
    });
    // repli monogramme si une icône Wowhead ne répond pas (capture : error/load
    // ne bullent pas, la phase de capture les intercepte quand même) — vaut pour
    // les icônes de talent (span.node-icon) et les icônes de classe (a.class-tabs)
    root.addEventListener('error', function (e) {
      var img = e.target;
      if (img && img.tagName === 'IMG' && img.hasAttribute('data-fallback') && img.parentElement) {
        img.parentElement.textContent = img.getAttribute('data-fallback') || '?';
      }
    }, true);
  }

  function init() {
    if (!root) return;
    renderShell();
    wireEvents();
    syncUrl();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
