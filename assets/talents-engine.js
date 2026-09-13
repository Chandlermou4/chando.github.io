/* Moteur du calculateur de talents — logique pure, aucun DOM.
   Porté depuis WoW Forever FR (Next.js/TypeScript) vers ce site (statique,
   sans étape de build) : mêmes règles, mêmes données, en JS vanille.
   Nécessite data/talents-data.js chargé avant (window.TALENT_DATA / TALENT_FR). */
window.Talents = (function () {
  'use strict';
  var raw = window.TALENT_DATA;
  var talentGrid = raw.grid;
  var talentClasses = raw.classes;
  var talentSources = raw.sources;
  var talentOrigin = raw.origin;
  var talentsCheckedAt = raw.generatedAt;
  var MIN_LEVEL = talentGrid.firstTalentLevel;
  var MAX_LEVEL = talentGrid.totalPoints + talentGrid.firstTalentLevel - 1;

  function poolFor(level) { return Math.max(0, level - (MIN_LEVEL - 1)); }
  function talentClass(slug) { return talentClasses.find(function (c) { return c.slug === slug; }); }
  function talentSource(id) { return talentSources.find(function (s) { return s.id === id; }); }

  /** Compte les rangs relevés dans la démo face aux rangs extrapolés par un relevé. */
  function observationStats(c) {
    var observed = 0, estimated = 0, missing = 0;
    c.trees.forEach(function (tree) {
      tree.talents.forEach(function (t) {
        t.ranks.forEach(function (r) {
          if (r.text === null) missing++; else if (r.observed) observed++; else estimated++;
        });
      });
    });
    return { observed: observed, estimated: estimated, missing: missing, total: observed + estimated + missing };
  }

  /** Code de build : un chiffre par talent, arbre après arbre, zéros finaux retirés. */
  function encodeBuild(c, points) {
    return c.trees.map(function (tree) {
      return tree.talents.map(function (t) { return points[t.key] || 0; }).join('').replace(/0+$/, '');
    }).join('-').replace(/-+$/, '');
  }
  /** Un lien peut être tronqué ou modifié à la main : on replace les points un par un en
   *  respectant les règles plutôt que de faire confiance au code tel quel. */
  function decodeBuild(c, code, pool) {
    if (pool === undefined) pool = talentGrid.totalPoints;
    var wanted = {};
    var parts = code.split('-');
    c.trees.forEach(function (tree, i) {
      var digits = parts[i] || '';
      tree.talents.forEach(function (t, n) {
        var v = Number(digits[n] || 0);
        if (v > 0 && v <= t.maxRanks) wanted[t.key] = v;
      });
    });
    var points = {}, left = pool, moved = true;
    while (moved && left > 0) {
      moved = false;
      for (var ti = 0; ti < c.trees.length; ti++) {
        var tree = c.trees[ti];
        for (var ni = 0; ni < tree.talents.length; ni++) {
          var t = tree.talents[ni];
          while ((points[t.key] || 0) < (wanted[t.key] || 0) && left > 0 && !canAdd(tree, t, points, left)) {
            points[t.key] = (points[t.key] || 0) + 1; left--; moved = true;
          }
        }
      }
    }
    return points;
  }

  function treeTotals(c, points) { return c.trees.map(function (tree) { return treeSpent(tree, points); }); }
  function treeSpent(tree, points) {
    return tree.talents.reduce(function (n, t) { return n + (points[t.key] || 0); }, 0);
  }
  /** Points placés strictement au-dessus d'une ligne : c'est eux qui ouvrent la suivante. */
  function pointsAbove(tree, row, points) {
    return tree.talents.reduce(function (n, t) { return n + (t.row < row ? (points[t.key] || 0) : 0); }, 0);
  }
  /** Les deux verrous du jeu : 5 points au-dessus pour chaque ligne franchie dans le même
   *  arbre, et prérequis porté à son rang maximum. */
  function gate(tree, t, points) {
    if (pointsAbove(tree, t.row, points) < t.pointsRequired) return { reason: 'row', need: t.pointsRequired };
    if (t.prerequisite) {
      var dep = tree.talents.find(function (x) { return x.key === t.prerequisite; });
      if (dep && (points[dep.key] || 0) < dep.maxRanks) return { reason: 'prereq', talent: dep.name_en, ranks: dep.maxRanks };
    }
    return null;
  }
  function canAdd(tree, t, points, pointsLeft) {
    if ((points[t.key] || 0) >= t.maxRanks) return { reason: 'maxed' };
    var g = gate(tree, t, points);
    if (g) return g;
    if (pointsLeft <= 0) return { reason: 'no-points' };
    return null;
  }
  /** Retirer un point est refusé s'il laissait un talent déjà pris derrière un verrou. */
  function canRemove(tree, t, points) {
    if ((points[t.key] || 0) <= 0) return false;
    var after = Object.assign({}, points);
    after[t.key] = points[t.key] - 1;
    return !tree.talents.some(function (x) { return (after[x.key] || 0) > 0 && gate(tree, x, after); });
  }

  // ── Couche française ──────────────────────────────────────────────────────
  var NUM = /\d+(?:[.,]\d+)?/g;
  function numbers(s) { return s.match(NUM) || []; }

  /** Textes de rang en français : rang 1 traduit à la main, suivants dérivés quand ils ne
   *  diffèrent que par les nombres, sinon écrits un par un. null si non démontrable. */
  function frRanks(entry, ranks) {
    if (!entry) return ranks.map(function () { return null; });
    if (entry.ranks) return ranks.map(function (_, i) { return (entry.ranks[i] !== undefined ? entry.ranks[i] : null); });
    if (!entry.rank1) return ranks.map(function () { return null; });
    var en0 = ranks[0] && ranks[0].text;
    if (!en0) return ranks.map(function () { return null; });
    var a = numbers(en0), f = numbers(entry.rank1);
    return ranks.map(function (r, i) {
      if (i === 0) return entry.rank1 || null;
      if (!r.text) return null;
      var b = numbers(r.text);
      if (a.length !== f.length || a.length !== b.length) return null;
      var n = 0;
      return entry.rank1.replace(NUM, function () { return b[n++].replace('.', ','); });
    });
  }
  /** Coût, portée, incantation et recharge dans le vocabulaire du client français. */
  function frSkill(skill, g) {
    if (!skill) return null;
    var cost = skill.cost ? skill.cost.replace(/^([\d.]+)\s+(\w+)$/, function (_, n, unit) {
      return n.replace('.', ',') + ' ' + (g.resources[unit] || unit);
    }) : null;
    var range = skill.range == null ? null : (g.ranges[skill.range] || (/^\d+$/.test(skill.range) ? skill.range + ' m' : skill.range));
    var castTime = skill.castTime == null ? null : (g.castTimes[skill.castTime] || skill.castTime);
    var cooldown = skill.cooldown ? skill.cooldown.replace(/^([\d.]+)\s+(sec|min)$/, function (_, n, u) {
      return n.replace('.', ',') + ' ' + (g.cooldowns[u] || u);
    }) : null;
    return { cost: cost, range: range, castTime: castTime, cooldown: cooldown };
  }
  function frRequires(list, g) { return list.map(function (r) { return g.requires[r] || r; }); }
  function frTree(name, g) { return g.trees[name] || name; }

  var BRANCH_LABEL = { classic: 'Classic', tbc: 'Burning Crusade', wotlk: 'Wrath of the Lich King' };
  var TEXT_SOURCE_LABEL = {
    officiel: 'texte d’infobulle officiel',
    'officiel-chiffre': 'texte officiel, chiffres de Forever',
    editorial: 'texte traduit par nos soins'
  };
  var NAME_SOURCE_LABEL = {
    officiel: 'Nom officiel du client français',
    adapte: 'Traduction maison — aucun nom français officiel n’existe',
    'a-verifier': 'Traduction à vérifier'
  };

  /** Ne garde que les entrées d'une classe (clés `classe/talent` → `talent`). */
  function frenchPack(classSlug) {
    var all = window.TALENT_FR.talents;
    var glossary = window.TALENT_FR.glossary;
    var entries = {};
    var prefix = classSlug + '/';
    Object.keys(all).forEach(function (key) {
      if (key.indexOf(prefix) === 0) entries[key.slice(prefix.length)] = all[key];
    });
    return { glossary: glossary, entries: entries };
  }

  // ── Icônes et illustrations : CDN public de Wowhead, jamais copiées ici ────
  function monogram(name) {
    var w = name.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean);
    return (((w[0] || '')[0] || '?') + ((w[1] || '')[0] || (w[0] || '')[1] || '')).toUpperCase();
  }
  function iconUrl(icon) { return 'https://wow.zamimg.com/images/wow/icons/large/' + encodeURIComponent(icon) + '.jpg'; }
  function treeBackground(id) { return 'https://wow.zamimg.com/images/wow/talents/backgrounds/classic/' + id + '.jpg'; }

  return {
    talentGrid: talentGrid, talentClasses: talentClasses, talentSources: talentSources,
    talentOrigin: talentOrigin, talentsCheckedAt: talentsCheckedAt,
    MIN_LEVEL: MIN_LEVEL, MAX_LEVEL: MAX_LEVEL, poolFor: poolFor,
    talentClass: talentClass, talentSource: talentSource, observationStats: observationStats,
    encodeBuild: encodeBuild, decodeBuild: decodeBuild, treeTotals: treeTotals, treeSpent: treeSpent,
    gate: gate, canAdd: canAdd, canRemove: canRemove,
    frRanks: frRanks, frSkill: frSkill, frRequires: frRequires, frTree: frTree, frenchPack: frenchPack,
    BRANCH_LABEL: BRANCH_LABEL, TEXT_SOURCE_LABEL: TEXT_SOURCE_LABEL, NAME_SOURCE_LABEL: NAME_SOURCE_LABEL,
    monogram: monogram, iconUrl: iconUrl, treeBackground: treeBackground
  };
})();
