/* Interface du calculateur de Points Legacy — rendu et interactions.
   Même architecture et mêmes classes CSS que talents-ui.js (assets/styles/talents.css) :
   c'est délibéré, pour que les deux calculateurs se ressemblent au pixel près.
   Nécessite legacy-engine.js chargé avant. */
(function () {
  'use strict';
  var L = window.Legacy;
  var root = document.getElementById('legacy-page');
  if (!root) return;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function qs(sel) { return root.querySelector(sel); }
  function qsa(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

  // ── État ─────────────────────────────────────────────────────────────────
  var params = new URLSearchParams(window.location.search);
  var S = {
    points: {},
    pool: L.CAP,          // points « possédés » — curseur, 0 par défaut serait décourageant
    tip: null,             // {key,x,y} — survol souris
    pinned: null,           // key — fiche épinglée (tactile)
    coarse: false,
    message: '',
    copied: false,
    messageTimer: null
  };
  (function restoreFromUrl() {
    var code = params.get('build');
    var pts = Number(params.get('points'));
    // params.get renvoie null quand absent, et Number(null) vaut 0 — un 0 valide en soi,
    // donc il faut params.has() pour distinguer « absent » de « explicitement 0 ».
    var start = (params.has('points') && pts >= 0 && pts <= L.CAP) ? pts : L.CAP;
    S.pool = start;
    if (code) S.points = L.decodeBuild(code, start);
  })();

  function spentTotal() { var n = 0; for (var k in S.points) n += S.points[k]; return n; }
  function perTreeCounts() { return L.treeTotals(S.points); }
  function buildCode() { return L.encodeBuild(S.points); }

  function syncUrl() {
    var q = new URLSearchParams();
    var b = buildCode();
    if (b) q.set('build', b);
    if (S.pool !== L.CAP) q.set('points', String(S.pool));
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
    for (var i = 0; i < L.trees.length; i++) {
      var tree = L.trees[i];
      var t = tree.talents.find(function (x) { return x.key === key; });
      if (t) return { tree: tree, talent: t };
    }
    return null;
  }

  function add(tree, t, label) {
    var left = S.pool - spentTotal();
    var blocked = L.canAdd(tree, t, S.points, left);
    if (!blocked) {
      S.points[t.key] = (S.points[t.key] || 0) + 1;
      afterPointsChange();
      return;
    }
    showMessage(
      blocked.reason === 'unrevealed' ? 'Cet emplacement n’a pas encore été révélé par Blizzard.' :
      blocked.reason === 'maxed' ? (label || t.name_en) + ' est déjà au rang maximum.' :
      blocked.reason === 'no-points' ? 'Plus de Point Legacy disponible avec ce réglage.' :
      'Demande ' + blocked.need + ' Points Legacy déjà dépensés dans ' + L.frTreeName(tree.key) + '.'
    );
  }
  function remove(tree, t) {
    if (L.canRemove(tree, t, S.points)) {
      S.points[t.key] = S.points[t.key] - 1;
      if (!S.points[t.key]) delete S.points[t.key];
      afterPointsChange();
      return;
    }
    if ((S.points[t.key] || 0) > 0) showMessage('D’autres perks dépendent de ces points dans cet arbre.');
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
  function iconHtml(icon, name, revealed) {
    if (!revealed) return '<span class="node-icon" aria-hidden="true">?</span>';
    if (!icon) return '<span class="node-icon" aria-hidden="true">' + esc(L.monogram(name)) + '</span>';
    return '<span class="node-icon" aria-hidden="true"><img src="' + esc(L.iconUrl(icon)) + '" alt="" loading="lazy" data-fallback="' + esc(L.monogram(name)) + '"></span>';
  }

  function renderLegend() {
    return '<div class="talent-legend">' +
      '<span><i class="open"></i> Disponible</span>' +
      '<span><i class="partial"></i> Rangs partiels</span>' +
      '<span><i class="maxed"></i> Rang maximum</span>' +
      '<span><i class="locked"></i> Verrouillé</span>' +
      '<span class="legend-note">6 emplacements (icône « ? ») ne sont pas encore révélés par Blizzard.</span>' +
      '</div>';
  }

  function renderBar() {
    var el = qs('#mount-bar'); if (!el) return;
    var perTree = perTreeCounts();
    var spent = spentTotal(), p = S.pool;
    el.innerHTML =
      '<div class="talent-bar">' +
        '<div class="talent-score">' +
          '<div class="points"><strong class="' + (spent > p ? 'over' : '') + '">' + (p - spent) + '</strong><span>points restants</span></div>' +
          '<div class="split"><strong>' + perTree.join(' / ') + '</strong><span>' + L.trees.map(function (t) { return esc(L.frTreeName(t.key)); }).join(' · ') + '</span></div>' +
          '<label class="level-picker" title="Combien de Points Legacy votre personnage a-t-il gagnés jusqu’ici ? 16 simule un compte qui a déjà tout ce qui est dépensable.">' +
          'Points possédés <output id="pool-value" for="pool-select">' + S.pool + '</output>' +
          '<input type="range" id="pool-select" min="0" max="' + L.CAP + '" step="1" value="' + S.pool + '" aria-label="Points Legacy possédés"></label>' +
        '</div>' +
        '<div class="talent-actions">' +
          '<button type="button" class="button outline" id="reset-all"' + (!spent ? ' disabled' : '') + '>↺ Tout réinitialiser</button>' +
          '<button type="button" class="button gold" id="copy-link">' + (S.copied ? '✓ Lien copié' : '⛓ Copier le lien') + '</button>' +
        '</div>' +
      '</div>';
  }

  function renderNode(tree, t) {
    var rank = S.points[t.key] || 0;
    var blocked = t.revealed && L.gate(tree, t, S.points) !== null;
    var state = !t.revealed ? 'locked' : rank >= t.maxRanks ? 'maxed' : rank > 0 ? 'partial' : blocked ? 'locked' : 'open';
    var shownKey = S.pinned || (S.tip && S.tip.key) || null;
    var active = shownKey === t.key;
    var opened = S.pinned === t.key;
    var label = t.revealed ? (L.frName(t.key) || t.name_en) : 'Emplacement non révélé';
    return '<div class="talent-cell" style="grid-row:' + t.row + ';grid-column:' + t.col + '">' +
      '<button type="button" class="talent-node ' + state + (active ? ' active' : '') + '"' +
      ' data-tree="' + esc(tree.key) + '" data-talent="' + esc(t.key) + '" data-opened="' + (opened ? '1' : '0') + '"' +
      ' aria-label="' + esc(label) + (t.revealed ? ' — rang ' + rank + ' sur ' + t.maxRanks : ' — non révélé') + '"' +
      (active ? ' aria-describedby="talent-detail"' : '') + '>' +
      iconHtml(t.icon, t.name_en, t.revealed) +
      (t.revealed ? '<span class="node-rank">' + rank + '/' + t.maxRanks + '</span>' : '') +
      '</button></div>';
  }

  function renderTrees() {
    var el = qs('#mount-trees'); if (!el) return;
    var perTree = perTreeCounts();
    el.innerHTML = '<div class="talent-trees">' + L.trees.map(function (tree, i) {
      var treeName = L.frTreeName(tree.key);
      return '<section class="talent-tree">' +
        '<header class="tree-head"><div><h2>' + esc(treeName) + '</h2><span class="tree-fr">' + esc(L.frBlurb(tree.key)) + '</span></div>' +
        '<div class="tree-count"><strong>' + perTree[i] + '</strong>' +
        '<button type="button" data-reset-tree="' + esc(tree.key) + '"' + (!perTree[i] ? ' disabled' : '') + ' aria-label="Réinitialiser ' + esc(treeName) + '">↺</button></div></header>' +
        '<div class="tree-grid" data-tree-grid="' + esc(tree.key) + '">' +
        tree.talents.map(function (t) { return renderNode(tree, t); }).join('') +
        '</div></section>';
    }).join('') + '</div>';
  }

  function renderDetailContent(tree, t) {
    var rank = S.points[t.key] || 0;
    var floating = !!S.tip && !S.pinned;
    if (!t.revealed) {
      var html0 = '<div class="detail-head"><div><h3>Emplacement non révélé</h3></div>' +
        (!floating ? '<button type="button" id="detail-close" aria-label="Fermer le détail">×</button>' : '') + '</div>' +
        '<p class="detail-text">Blizzard n’a pas encore montré ce que ce perk fait. Le calculateur de Wowhead réserve sa place dans la grille pour le jour où l’information sera publiée.</p>';
      return { html: html0, floating: floating, name: 'Emplacement non révélé' };
    }
    var shownRank = Math.max(1, rank);
    var name = L.frName(t.key) || t.name_en;
    var mainText = L.frRank(t.key, shownRank) || t.ranks[shownRank - 1].text;
    var next = (rank > 0 && rank < t.maxRanks) ? (L.frRank(t.key, rank + 1) || t.ranks[rank].text) : null;
    var gateInfo = L.gate(tree, t, S.points);
    var html = '<div class="detail-head"><div><h3>' + esc(name) + '</h3>' +
      '<span class="detail-original">' + esc(t.name_en) + '</span></div>' +
      (!floating ? '<button type="button" id="detail-close" aria-label="Fermer le détail">×</button>' : '') + '</div>';
    var skill = L.skillInfo(t);
    if (skill) {
      html += '<dl class="detail-skill">' +
        (skill.castTime ? '<div><dt>Incantation</dt><dd>' + esc(skill.castTime) + '</dd></div>' : '') +
        (skill.cooldown ? '<div><dt>Recharge</dt><dd>' + esc(skill.cooldown) + '</dd></div>' : '') +
        '</dl>';
    }
    html += '<p class="detail-text">' + esc(mainText) + '</p>';
    if (next) html += '<p class="detail-next"><strong>Rang suivant.</strong> ' + esc(next) + '</p>';
    if (gateInfo) html += '<p class="detail-req">Demande ' + gateInfo.need + ' Points Legacy dépensés dans ' + esc(L.frTreeName(tree.key)) + '.</p>';
    else if (t.requiredSpent) html += '<p class="detail-req">Débloqué : ' + t.requiredSpent + ' Points Legacy dépensés dans ' + esc(L.frTreeName(tree.key)) + '.</p>';
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
    var spent = spentTotal(), p = S.pool, b = buildCode();
    el.innerHTML = '<div class="talent-foot">' +
      '<span>' + spent + ' / ' + p + ' points alloués' + (b ? ' · code <code>' + esc(b) + '</code>' : '') + '</span>' +
      '<span>' + L.CAP + ' Points Legacy dépensables au total au lancement</span>' +
      '</div>';
  }

  function renderShell() {
    root.className = 'talent-tool legacy-tool';
    root.innerHTML =
      renderLegend() +
      '<div id="mount-bar"></div>' +
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
    var tree = L.treeByKey(treeKey);
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
      var resetAllBtn = e.target.closest('#reset-all'); if (resetAllBtn) { resetAll(); return; }
      var copyBtn = e.target.closest('#copy-link'); if (copyBtn) { copyLink(); return; }
      var resetTreeBtn = e.target.closest('[data-reset-tree]');
      if (resetTreeBtn) { var tr = L.treeByKey(resetTreeBtn.getAttribute('data-reset-tree')); if (tr) resetTree(tr); return; }
      var closeBtn = e.target.closest('#detail-close'); if (closeBtn) { S.pinned = null; S.tip = null; renderTrees(); renderDetail(); return; }
      var addBtn = e.target.closest('#detail-add'); if (addBtn) { var d1 = currentDetail(); if (d1) add(d1.tree, d1.talent, L.frName(d1.talent.key)); return; }
      var remBtn = e.target.closest('#detail-remove'); if (remBtn) { var d2 = currentDetail(); if (d2) remove(d2.tree, d2.talent); return; }
      var node = e.target.closest('.talent-node');
      if (node) {
        var found = findTreeTalent(node.getAttribute('data-tree'), node.getAttribute('data-talent'));
        if (!found) return;
        var opened = node.getAttribute('data-opened') === '1';
        if (S.coarse && !opened) { S.pinned = (S.pinned === found.talent.key) ? null : found.talent.key; renderTrees(); renderDetail(); return; }
        if (e.shiftKey) remove(found.tree, found.talent);
        else add(found.tree, found.talent, L.frName(found.talent.key));
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
    function patchPointsLive() {
      var ptsEl = qs('#mount-bar .points strong');
      if (ptsEl) { var spent = spentTotal(); ptsEl.textContent = S.pool - spent; ptsEl.className = spent > S.pool ? 'over' : ''; }
      renderFoot();
    }
    root.addEventListener('input', function (e) {
      if (e.target.id === 'pool-select') {
        S.pool = Number(e.target.value);
        var out = qs('#pool-value'); if (out) out.textContent = S.pool;
        patchPointsLive();
      }
    });
    root.addEventListener('change', function (e) {
      if (e.target.id === 'pool-select') { S.pool = Number(e.target.value); syncUrl(); renderBar(); renderTrees(); renderDetail(); renderFoot(); }
    });
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
  }

  function wireIconFallback() {
    root.addEventListener('error', function (e) {
      var img = e.target;
      if (img && img.tagName === 'IMG' && img.hasAttribute('data-fallback') && img.parentElement) {
        img.parentElement.textContent = img.getAttribute('data-fallback') || '?';
      }
    }, true);
  }

  function init() {
    wireIconFallback();
    renderShell();
    wireEvents();
    syncUrl();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
