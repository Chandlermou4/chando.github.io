/* Bandeau « en ligne · visites » — s'insère dans le <footer> de la page.
 *
 * Se tait tant que l'API ne répond pas : si la liaison D1 manque, si la requête
 * échoue ou si les chiffres sont absurdes, rien n'apparaît. Une page sans
 * compteur vaut mieux qu'un compteur cassé.
 *
 * L'identifiant est tiré au hasard et vit dans sessionStorage : il disparaît à
 * la fermeture de l'onglet, ne traverse pas les onglets et n'identifie
 * personne. Aucun cookie n'est posé.
 */
(function () {
  'use strict';

  var CLE_ID = 'chando-presence-id';
  var CLE_VU = 'chando-online';
  var BATTEMENT = 120000;   // 2 min entre deux annonces de présence
  var PEINTURE = 300000;    // on ose réafficher une valeur vieille de 5 min max

  var pied = document.querySelector('footer');
  if (!pied || !window.fetch) return;

  // ── identité éphémère ─────────────────────────────────────────────────────
  // `nouveau` vaut true quand l'identifiant vient d'être créé : c'est ce qui
  // fait compter une visite, une seule fois par onglet.
  var nouveau = false;
  function identifiant() {
    try {
      var v = sessionStorage.getItem(CLE_ID);
      if (v) return v;
      v = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2))
          .replace(/-/g, '');
      sessionStorage.setItem(CLE_ID, v);
      nouveau = true;
      return v;
    } catch (e) {
      // Navigation privée ou stockage refusé : on reste anonyme et on ne
      // compte pas de visite, plutôt que d'en compter une à chaque page.
      return null;
    }
  }

  // ── le bandeau, créé seulement quand il y a un chiffre ───────────────────
  var bloc = null;
  function affiche(n, visites) {
    var bouts = [];
    if (n >= 1) {
      bouts.push(n === 1 ? '1 personne en ligne'
                         : n.toLocaleString('fr-FR') + ' personnes en ligne');
    }
    if (visites >= 1) {
      bouts.push(visites === 1 ? '1 visite'
                               : visites.toLocaleString('fr-FR') + ' visites');
    }
    if (!bouts.length) return;
    if (!bloc) {
      bloc = document.createElement('p');
      bloc.className = 'online-now';
      pied.insertBefore(bloc, pied.firstChild);
    }
    bloc.textContent = bouts.join(' · ');
  }

  // Valeurs récentes déjà connues : on peint tout de suite pour éviter un
  // trou, puis la requête corrige.
  try {
    var cache = JSON.parse(sessionStorage.getItem(CLE_VU) || 'null');
    if (cache && Date.now() - cache.at < PEINTURE) affiche(cache.n, cache.v);
  } catch (e) {}

  // ── battement ─────────────────────────────────────────────────────────────
  var minuteur = null, enCours = false, arrete = false;

  function battre() {
    clearTimeout(minuteur);
    // Un onglet en arrière-plan ne compte pas : le chiffre annonce les gens
    // qui regardent, pas les onglets oubliés.
    if (arrete || enCours || document.hidden) return;
    enCours = true;
    var id = identifiant(), premier = nouveau;
    nouveau = false;
    fetch('/api/online', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: id, nouveau: premier }),
    })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (arrete || !d || !isFinite(d.online)) return;
        affiche(d.online, d.visites);
        try {
          sessionStorage.setItem(CLE_VU,
            JSON.stringify({ n: d.online, v: d.visites, at: Date.now() }));
        } catch (e) {}
      })
      .catch(function () { /* hors ligne ou API absente : on ne montre rien */ })
      .then(function () {
        enCours = false;
        // Décalage aléatoire pour ne pas synchroniser tous les visiteurs sur
        // la même seconde.
        minuteur = setTimeout(battre, BATTEMENT + Math.random() * 15000);
      });
  }

  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) battre();
  });
  battre();
})();
