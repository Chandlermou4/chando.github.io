/* Moteur du calculateur de Points Legacy — logique pure, aucun DOM.
   Même architecture que talents-engine.js, simplifiée : Legacy n'a ni ligne à 5 points
   fixes, ni chaîne de prérequis — chaque perk se déverrouille dès qu'assez de points sont
   dépensés dans son propre arbre (0, 5 ou 10 selon la donnée du client).
   Nécessite data/legacy-data.js chargé avant (window.LEGACY_DATA / LEGACY_FR). */
window.Legacy = (function () {
  'use strict';
  var raw = window.LEGACY_DATA;
  var trees = raw.trees;
  var CAP = raw.cap;

  function treeByKey(key) { return trees.find(function (t) { return t.key === key; }); }
  function treeSpent(tree, points) {
    return tree.talents.reduce(function (n, t) { return n + (points[t.key] || 0); }, 0);
  }
  function treeTotals(points) { return trees.map(function (t) { return treeSpent(t, points); }); }

  /** Seul verrou du système : assez de points déjà dépensés dans le même arbre. */
  function gate(tree, t, points) {
    var spent = treeSpent(tree, points);
    if (spent < t.requiredSpent) return { reason: 'tier', need: t.requiredSpent };
    return null;
  }
  function canAdd(tree, t, points, pointsLeft) {
    if (!t.revealed) return { reason: 'unrevealed' };
    if ((points[t.key] || 0) >= t.maxRanks) return { reason: 'maxed' };
    var g = gate(tree, t, points);
    if (g) return g;
    if (pointsLeft <= 0) return { reason: 'no-points' };
    return null;
  }
  /** Retirer un point est refusé s'il repasse l'arbre sous le seuil d'un autre perk déjà pris. */
  function canRemove(tree, t, points) {
    if ((points[t.key] || 0) <= 0) return false;
    var after = Object.assign({}, points);
    after[t.key] = points[t.key] - 1;
    var spentAfter = treeSpent(tree, after);
    return !tree.talents.some(function (x) { return (after[x.key] || 0) > 0 && spentAfter < x.requiredSpent; });
  }

  /** Code de build : un chiffre par perk, arbre après arbre, zéros finaux retirés —
   *  même format que le calculateur de talents. */
  function encodeBuild(points) {
    return trees.map(function (tree) {
      return tree.talents.map(function (t) { return points[t.key] || 0; }).join('').replace(/0+$/, '');
    }).join('-').replace(/-+$/, '');
  }
  function decodeBuild(code, pool) {
    var wanted = {};
    var parts = code.split('-');
    trees.forEach(function (tree, i) {
      var digits = parts[i] || '';
      tree.talents.forEach(function (t, n) {
        var v = Number(digits[n] || 0);
        if (v > 0 && v <= t.maxRanks) wanted[t.key] = v;
      });
    });
    var points = {}, left = pool, moved = true;
    while (moved && left > 0) {
      moved = false;
      trees.forEach(function (tree) {
        tree.talents.forEach(function (t) {
          while ((points[t.key] || 0) < (wanted[t.key] || 0) && left > 0 && !canAdd(tree, t, points, left)) {
            points[t.key] = (points[t.key] || 0) + 1; left--; moved = true;
          }
        });
      });
    }
    return points;
  }

  /** Millisecondes -> texte français, à la plus grosse unité ronde (23 h plutôt que
   *  1380 min). Sert l'incantation et la recharge de Dedicated Study, seul perk connu
   *  qui ait l'un ou l'autre — les 26 autres sont instantanés, sans recharge. */
  function formatMs(ms) {
    if (!ms) return null;
    if (ms % 3600000 === 0) return (ms / 3600000) + ' h';
    if (ms % 60000 === 0) return (ms / 60000) + ' min';
    if (ms % 1000 === 0) return (ms / 1000) + ' s';
    return String(ms / 1000).replace('.', ',') + ' s';
  }
  function skillInfo(t) {
    var castTime = t.castMs ? formatMs(t.castMs) : null;
    var cooldown = t.cdMs ? formatMs(t.cdMs) : null;
    if (!castTime && !cooldown) return null;
    return { castTime: castTime, cooldown: cooldown };
  }

  // ── Couche française — aucun texte officiel n'existe, tout est éditorial ───
  function frEntry(key) { return (window.LEGACY_FR.entries || {})[key]; }
  function frName(key) { var e = frEntry(key); return e && e.name; }
  function frRank(key, rank) { var e = frEntry(key); return e && e.ranks && e.ranks[rank - 1]; }
  function frTreeName(key) { return (window.LEGACY_FR.trees || {})[key] || key; }
  function frBlurb(key) { return (window.LEGACY_FR.blurbs || {})[key] || ''; }

  // ── Icônes : CDN public de Wowhead, jamais copiées ici ──────────────────────
  function monogram(name) {
    var w = name.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean);
    return (((w[0] || '')[0] || '?') + ((w[1] || '')[0] || (w[0] || '')[1] || '')).toUpperCase();
  }
  function iconUrl(icon) { return 'https://wow.zamimg.com/images/wow/icons/large/' + encodeURIComponent(icon) + '.jpg'; }

  return {
    trees: trees, CAP: CAP, sources: raw.sources, origin: raw.origin,
    treeByKey: treeByKey, treeSpent: treeSpent, treeTotals: treeTotals,
    gate: gate, canAdd: canAdd, canRemove: canRemove,
    encodeBuild: encodeBuild, decodeBuild: decodeBuild, skillInfo: skillInfo,
    frName: frName, frRank: frRank, frTreeName: frTreeName, frBlurb: frBlurb,
    monogram: monogram, iconUrl: iconUrl
  };
})();
