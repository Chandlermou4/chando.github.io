/* Présence et visites — /api/online
 *
 * Deux chiffres, deux mécaniques distinctes.
 *
 * La présence reprend le principe de foreverchanges.pro : la requête *est* le
 * signal. Chaque visiteur annonce « je suis là » toutes les deux minutes et
 * reçoit le nombre de personnes qui l'ont fait récemment. Aucune source
 * extérieure, le site se compte lui-même.
 *
 * Les visites sont un cumul. On incrémente une seule fois par session, au
 * premier battement d'un onglet, pas à chaque page ni à chaque battement :
 * le chiffre compte des visites, pas des requêtes.
 *
 * Ce qui n'est pas enregistré : ni adresse IP, ni cookie, ni empreinte. Le
 * client tire un identifiant au hasard par onglet ; nous ne gardons que cet
 * identifiant et un horodatage, effacés dès qu'ils sortent de la fenêtre.
 *
 * Le revers assumé : un identifiant tiré côté client se falsifie, donc les
 * deux chiffres se gonflent si quelqu'un s'en donne la peine. C'est une
 * indication d'ambiance sur un site de fans, pas une mesure opposable.
 *
 * Nécessite une liaison D1 nommée PRESENCE sur le projet Pages. Tant qu'elle
 * n'existe pas, la fonction répond 503 sans bruit et le bandeau reste absent.
 */

const FENETRE = 180;   // secondes : au-delà, un visiteur n'est plus « présent »
const PURGE = 0.05;    // une requête sur vingt nettoie les lignes périmées

const json = (corps, statut, cache) =>
  new Response(JSON.stringify(corps), {
    status: statut,
    headers: { 'content-type': 'application/json', 'cache-control': cache || 'no-store' },
  });

/** Un identifiant client valide : 8 à 64 caractères, alphabet restreint. */
const idValide = (v) => typeof v === 'string' && /^[A-Za-z0-9_-]{8,64}$/.test(v);

export async function onRequestPost({ request, env }) {
  const db = env.PRESENCE;
  if (!db) return json({ error: 'presence indisponible' }, 503);

  let id = null, nouvelleVisite = false;
  try {
    const corps = await request.json();
    id = corps?.id ?? null;
    nouvelleVisite = corps?.nouveau === true;
  } catch { /* corps absent ou illisible : on tire un identifiant nous-mêmes */ }
  if (!idValide(id)) id = crypto.randomUUID();

  const maintenant = Math.floor(Date.now() / 1000);
  const limite = maintenant - FENETRE;

  const requetes = [
    db.prepare('INSERT INTO presence (id, seen) VALUES (?, ?) ' +
               'ON CONFLICT(id) DO UPDATE SET seen = excluded.seen').bind(id, maintenant),
  ];
  // Une visite n'est comptée qu'au premier battement de l'onglet.
  if (nouvelleVisite) {
    requetes.push(db.prepare("UPDATE compteur SET valeur = valeur + 1 WHERE cle = 'visites'"));
  }
  const iPresents = requetes.length;
  requetes.push(db.prepare('SELECT COUNT(*) AS n FROM presence WHERE seen > ?').bind(limite));
  requetes.push(db.prepare("SELECT valeur FROM compteur WHERE cle = 'visites'"));
  // Purger à chaque appel doublerait les écritures pour rien : les lignes
  // périmées ne faussent pas le compte, qui filtre déjà sur l'horodatage.
  if (Math.random() < PURGE) {
    requetes.push(db.prepare('DELETE FROM presence WHERE seen < ?').bind(limite));
  }

  try {
    const res = await db.batch(requetes);
    const n = res[iPresents]?.results?.[0]?.n;
    const v = res[iPresents + 1]?.results?.[0]?.valeur;
    return json({
      online: Number.isFinite(n) ? n : 1,
      visites: Number.isFinite(v) ? v : null,
    }, 200);
  } catch {
    return json({ error: 'presence en erreur' }, 503);
  }
}

/** Lecture seule, sans annoncer sa présence ni compter de visite. */
export async function onRequestGet({ env }) {
  const db = env.PRESENCE;
  if (!db) return json({ error: 'presence indisponible' }, 503);
  try {
    const limite = Math.floor(Date.now() / 1000) - FENETRE;
    const res = await db.batch([
      db.prepare('SELECT COUNT(*) AS n FROM presence WHERE seen > ?').bind(limite),
      db.prepare("SELECT valeur FROM compteur WHERE cle = 'visites'"),
    ]);
    return json({
      online: res[0]?.results?.[0]?.n ?? 0,
      visites: res[1]?.results?.[0]?.valeur ?? null,
    }, 200, 'public, max-age=30');
  } catch {
    return json({ error: 'presence en erreur' }, 503);
  }
}
