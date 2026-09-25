# -*- coding: utf-8 -*-
"""
Compare nos talents à ceux que publie le calculateur de Wowhead.

    python tools/diff-talents.py [--db 20260925] [--json rapport.json]

À lancer après chaque patch de la bêta. L'outil ne modifie rien : il dit ce
qui a bougé, à charge de décider ensuite. C'est voulu — un patch peut
renommer, déplacer, ajouter ou retirer des talents, et appliquer ça à
l'aveugle écraserait les relevés faits en jeu.

L'appariement se fait PAR POSITION dans l'arbre, pas par nom. La case (arbre,
ligne, colonne) est l'identité stable d'un talent ; le nom, lui, est
justement ce qu'un patch peut changer. Comparer par nom ferait passer un
renommage pour une suppression suivie d'un ajout.

Ce que Wowhead donne : position, icône, nom, nombre de rangs et texte anglais
résolu. Ce qu'il ne donne PAS : les prérequis ni les flèches. Ceux-là ont été
relevés en jeu et l'outil ne peut pas les vérifier — il le rappelle en fin de
rapport plutôt que de laisser croire à un contrôle complet.
"""
import argparse, io, json, os, re, sys, urllib.request

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WOWHEAD = 'https://nether.wowhead.com/forever/data/talents-classic?dv=2&db=%s'
UA = {'User-Agent': 'Mozilla/5.0'}

nettoie = lambda s: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', s or '')).strip()


def charge_wowhead(db):
    req = urllib.request.Request(WOWHEAD % db, headers=UA)
    w = urllib.request.urlopen(req, timeout=60).read().decode('utf-8', 'replace')
    m = re.search(r'WH\.setPageData\("wow\.talentCalcClassic\.classicplus\.data",\s*', w)
    if not m:
        sys.exit('Réponse inattendue de Wowhead : le bloc de données est introuvable.')
    return json.JSONDecoder().raw_decode(w[m.end():])[0]


def charge_nos_donnees():
    chemin = os.path.join(RACINE, 'data', 'talents-data.js')
    s = io.open(chemin, encoding='utf-8').read()
    dec = json.JSONDecoder()
    D = dec.raw_decode(s, s.index('=', s.index('window.TALENT_DATA=')) + 1)[0]
    FR = dec.raw_decode(s, s.index('=', s.index('window.TALENT_FR=')) + 1)[0]
    return D, FR


def index_wowhead(WH, D):
    """Nos (slug, clé d'arbre) -> {(ligne, colonne): nœud}, en base 1.

    L'appariement se fait sur `backgroundId`, qui EST l'identifiant d'arbre de
    Wowhead — 382 pour le paladin sacré des deux côtés. Passer par le libellé
    serait un piège : Wowhead reprend les noms internes de Blizzard, où l'arbre
    Vindicte du paladin s'appelle « PaladinCombat », l'Affliction du démoniste
    « WarlockCurses » et la Démonologie « WarlockSummoning ». Ces quatre-là ne
    tombaient pas juste et se signalaient en faux « arbre disparu ».
    """
    out, perdus = {}, []
    for c in D['classes']:
        for tr in c['trees']:
            tid = str(tr.get('backgroundId'))
            if tid not in WH['trees']:
                perdus.append('%s/%s (backgroundId %s)' % (c['slug'], tr['key'], tid))
                continue
            out[(c['slug'], tr['key'])] = {
                (n['row'] + 1, n['col'] + 1): n
                for n in WH['talents'].get(tid, {}).values()}
    return out, perdus


def compare(D, WH_par_arbre):
    ecarts = []

    def note(genre, slug, arbre, case, **kw):
        d = {'genre': genre, 'classe': slug, 'arbre': arbre, 'case': case}
        d.update(kw)
        ecarts.append(d)

    for c in D['classes']:
        for tr in c['trees']:
            chez_wh = WH_par_arbre.get((c['slug'], tr['key']))
            if chez_wh is None:
                note('arbre introuvable', c['slug'], tr['key'], None)
                continue
            vus = set()
            for t in tr['talents']:
                case = (t['row'], t['col'])
                vus.add(case)
                n = chez_wh.get(case)
                if n is None:
                    note('talent disparu', c['slug'], tr['key'], case,
                         chez_nous=t['name_en'])
                    continue
                if nettoie(t['name_en']).lower() != nettoie(n['name']).lower():
                    note('nom changé', c['slug'], tr['key'], case,
                         chez_nous=t['name_en'], chez_wh=n['name'])
                if (t.get('icon') or '').lower() != (n.get('icon') or '').lower():
                    note('icône changée', c['slug'], tr['key'], case,
                         chez_nous=t.get('icon'), chez_wh=n.get('icon'))
                nb = len(n.get('descriptions') or {})
                if nb and t.get('maxRanks') != nb:
                    note('nombre de rangs changé', c['slug'], tr['key'], case,
                         nom=t['name_en'], chez_nous=t.get('maxRanks'), chez_wh=nb)
                for r in (t.get('ranks') or []):
                    neuf = (n.get('descriptions') or {}).get(str(r['rank']))
                    if neuf is None:
                        continue
                    if nettoie(r.get('text')) != nettoie(neuf):
                        note('texte anglais changé', c['slug'], tr['key'], case,
                             nom=t['name_en'], rang=r['rank'],
                             chez_nous=nettoie(r.get('text')),
                             chez_wh=nettoie(neuf))
            for case, n in sorted(chez_wh.items()):
                if case not in vus:
                    note('talent apparu', c['slug'], tr['key'], case,
                         chez_wh=n['name'], rangs=len(n.get('descriptions') or {}),
                         icone=n.get('icon'))
    return ecarts


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--db', default=None,
                    help='paramètre anti-cache de Wowhead, une date AAAAMMJJ ;'
                         ' aujourd’hui par défaut, sinon Wowhead peut resservir'
                         ' un jeu de données d’avant le dernier patch')
    ap.add_argument('--json', help='écrit le rapport complet dans ce fichier')
    a = ap.parse_args()

    D, _ = charge_nos_donnees()
    import datetime
    WH = charge_wowhead(a.db or datetime.date.today().strftime('%Y%m%d'))
    par_arbre, perdus = index_wowhead(WH, D)
    for p in perdus:
        print('ARBRE INTROUVABLE chez Wowhead :', p)

    ecarts = compare(D, par_arbre)
    nb_nous = sum(len(t['talents']) for c in D['classes'] for t in c['trees'])
    nb_wh = sum(len(v) for v in par_arbre.values())
    print('%d talents chez nous, %d chez Wowhead.' % (nb_nous, nb_wh))

    par_genre = {}
    for e in ecarts:
        par_genre.setdefault(e['genre'], []).append(e)
    if not ecarts:
        print('Aucun écart.')
    for genre in sorted(par_genre):
        lot = par_genre[genre]
        print('\n== %s : %d ==' % (genre, len(lot)))
        for e in lot:
            tete = '%s/%s r%sc%s' % (e['classe'], e['arbre'],
                                     e['case'][0], e['case'][1]) if e['case'] else e['classe']
            if genre == 'texte anglais changé':
                print('  %s — %s, rang %s' % (tete, e['nom'], e['rang']))
                print('      nous : %s' % e['chez_nous'][:200])
                print('      eux  : %s' % e['chez_wh'][:200])
            else:
                reste = {k: v for k, v in e.items()
                         if k not in ('genre', 'classe', 'arbre', 'case')}
                print('  %s — %s' % (tete, json.dumps(reste, ensure_ascii=False)))

    if a.json:
        io.open(a.json, 'w', encoding='utf-8').write(
            json.dumps(ecarts, ensure_ascii=False, indent=1))
        print('\nRapport complet : %s' % a.json)

    print('\nNon vérifié par cet outil : prérequis, flèches et textes français.'
          '\nLes prérequis viennent de relevés en jeu, que Wowhead ne publie pas ;'
          '\nle français se reprend avec tools/import-client-fr.py.')


if __name__ == '__main__':
    main()
