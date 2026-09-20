# -*- coding: utf-8 -*-
"""
Reprend les noms et les textes français des talents depuis le client du jeu.

    python tools/import-client-fr.py [--build 1.60.1.69913] [--essai]

Forever est publié sous le produit `wow_classic_beta`. wago.tools en expose
les tables DB2 en CSV public, locale comprise : `SpellName` donne le nom
français de chaque sort, `Spell` sa description. C'est la meilleure source
possible — la chaîne que le client affiche — et elle remplace toute
traduction éditoriale.

Les descriptions arrivent avec leurs variables ($s1, $t, $d, $6150s1). On les
résout en alignant le gabarit ANGLAIS de la même table sur le texte anglais
déjà résolu que publie le calculateur de Wowhead, rang par rang : l'alignement
donne la valeur de chaque variable, qu'il suffit d'injecter dans le gabarit
français.

Rien n'est deviné. Un texte n'est repris que s'il se résout entièrement, que
tous les nombres de l'anglais s'y retrouvent, et que TOUS les rangs du talent
se résolvent — un tableau à trous mélangerait deux provenances dans la même
infobulle. Ce qui ne passe pas garde le texte existant.

À relancer quand Blizzard avance sa traduction : les entrées encore
éditoriales se combleront d'elles-mêmes.
"""
import argparse, csv, io, json, os, re, sys, tempfile, urllib.request

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD = '1.60.1.69913'
WAGO = 'https://wago.tools/db2/%s/csv?build=%s&locale=%s'
WOWHEAD = 'https://nether.wowhead.com/forever/data/talents-classic?dv=2&db=%d'
UA = {'User-Agent': 'Mozilla/5.0'}

A = '’'          # apostrophe typographique, convention du fichier
NB = ' '         # espace insécable avant %, comme l'écrit le client

# ── Résolution des variables ────────────────────────────────────────────────
# Un jeton : $s1, $t, $d, $6150s1, ${expression}, $/1000;s1. Le suffixe « .2 »
# qui suit parfois une expression en fixe les décimales et fait partie du
# jeton ; il exige un chiffre, donc un « $s1. » de fin de phrase reste intact.
JETON = re.compile(r'\$(?:\{[^}]*\}|/\d+;\w+\d*|\d*[a-zA-Z]+\d*)(?:\.\d)?')
PLURIEL = re.compile(r'\$l([^:;]*):([^;]*);')      # $lpoint:points;
GENRE = re.compile(r'\$g([^:;]*):([^;]*);')        # $gil:elle;
COULEUR = re.compile(r'\|c[0-9a-fA-F]{8}|\|r', re.I)   # Wowhead les retire
NOMBRE = re.compile(r'\d+(?:[.,]\d+)?')


def _propre(t):
    return re.sub(r'\s+', ' ', COULEUR.sub('', t or '')).strip()


def _jalonne(t):
    """Met les flexions de côté : « $lpoint… » commence par « $l », que le
    détecteur de variables prendrait sinon pour une variable."""
    gardes = []

    def _mettre(m):
        gardes.append(m)
        return '\x02%d\x02' % (len(gardes) - 1)

    return GENRE.sub(_mettre, PLURIEL.sub(_mettre, t)), gardes


def valeurs(gabarit_en, resolu_en):
    """{nom de variable: valeur}, lu dans le texte anglais résolu. None si échec."""
    if not gabarit_en or not resolu_en:
        return None
    t, _ = _jalonne(_propre(gabarit_en))
    noms, bouts, dernier, vus = [], [], 0, {}
    for m in JETON.finditer(t):
        bouts.append(re.escape(t[dernier:m.start()]))
        nom = m.group(0)
        if nom in vus:
            bouts.append(r'(?P=%s)' % vus[nom])     # même variable, même valeur
        else:
            vus[nom] = 'v%d' % len(vus)
            noms.append(nom)
            bouts.append(r'(?P<%s>-?[\d.,]+(?:\s*(?:sec|min|s|yd|m))?)' % vus[nom])
        dernier = m.end()
    if not noms:
        return {}
    bouts.append(re.escape(t[dernier:]))
    motif = re.sub(r'(\\ )+', r'\\s+',
                   re.sub(r'\\\x02\d+\\\x02', r'\\w*', ''.join(bouts)))
    cible = _propre(resolu_en)
    m = re.match(motif + r'\s*$', cible, re.S) or re.match(motif, cible, re.S)
    return {n: m.group(vus[n]) for n in noms} if m else None


def applique(gabarit_fr, vals):
    """Injecte les valeurs PAR NOM : le français réordonne souvent les phrases,
    et « $s2 … $s1 » y apparaît dans l'ordre inverse de l'anglais."""
    if gabarit_fr is None or vals is None:
        return None
    t, gardes = _jalonne(_propre(gabarit_fr))
    manque = []

    def _pose(m):
        if m.group(0) not in vals:
            manque.append(m.group(0))
            return m.group(0)
        return vals[m.group(0)]

    t = JETON.sub(_pose, t)
    if manque:
        return None

    def _flechit(m):
        g = gardes[int(m.group(1))]
        if g.re is GENRE:
            return g.group(1)               # le masculin, faute de savoir
        avant = NOMBRE.findall(t[:m.start()])
        return g.group(1) if (avant and avant[-1].replace(',', '.') in ('1', '1.0')) \
            else g.group(2)

    return re.sub(r'\s+', ' ', re.sub('\x02(\\d+)\x02', _flechit, t)).strip()


def resout(gabarit_en, gabarit_fr, resolu_en):
    v = valeurs(gabarit_en, resolu_en)
    if v is None:
        return None
    fr = applique(gabarit_fr, v)
    if fr is None or '$' in fr:
        return None
    if set(NOMBRE.findall(_propre(resolu_en))) - set(NOMBRE.findall(fr)):
        return None                          # un nombre anglais manque au français
    return fr


# ── Sources ─────────────────────────────────────────────────────────────────
def telecharge(url, cache):
    if os.path.exists(cache) and os.path.getsize(cache) > 1000:
        return cache
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=180) as r:
        io.open(cache, 'wb').write(r.read())
    return cache


def colonne(chemin, champ):
    d = {}
    with io.open(chemin, encoding='utf-8', newline='') as f:
        for r in csv.DictReader(f):
            d[int(r['ID'])] = r.get(champ, '')
    return d


def noeuds_wowhead(chemin, D):
    """Un nœud par talent, apparié ARBRE PAR ARBRE puis case par case.

    Indexer par nom seul serait faux — « Deflection », « Ferocity » et
    « Anticipation » existent dans plusieurs classes. Et la clé doit porter la
    classe : « protection-1-2 » désigne une case chez le guerrier ET chez le
    paladin, « restoration-… » chez le chaman ET chez le druide.
    """
    w = io.open(chemin, encoding='utf-8', errors='replace').read()
    m = re.search(r'WH\.setPageData\("wow\.talentCalcClassic\.classicplus\.data",\s*', w)
    WH = json.JSONDecoder().raw_decode(w[m.end():])[0]
    nom = lambda x: re.sub(r'\s+', ' ', x or '').strip().lower()
    out = {}
    for c in D['classes']:
        cand = [tid for tid, meta in WH['trees'].items()
                if meta['description'].startswith(c['name_en'])]
        pris = {}
        for tr in c['trees']:
            nos = set(nom(t['name_en']) for t in tr['talents'])
            best, sc = None, -1
            for tid in cand:
                if tid in pris.values():
                    continue
                n2 = set(nom(x['name']) for x in WH['talents'].get(tid, {}).values())
                if len(nos & n2) > sc:
                    best, sc = tid, len(nos & n2)
            pris[tr['key']] = best
        for tr in c['trees']:
            par_nom = {}
            for x in WH['talents'].get(pris[tr['key']], {}).values():
                par_nom.setdefault(nom(x['name']), []).append(x)
            for t in tr['talents']:
                cands = par_nom.get(nom(t['name_en']), [])
                if cands:
                    out[c['slug'] + '/' + t['key']] = min(
                        cands, key=lambda y: abs(y['row'] - (t['row'] - 1))
                                             + abs(y['col'] - (t['col'] - 1)))
    return out


nettoie = lambda s: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', s or '')).strip()


# ── Application ─────────────────────────────────────────────────────────────
def reprend(D, FR, noms_fr, noms_en, desc_fr, desc_en, noeuds):
    bilan = {'noms': 0, 'provenances': 0, 'textes': 0, 'talents': 0, 'rangs refusés': 0}
    faits = []
    for c in D['classes']:
        for tr in c['trees']:
            for t in tr['talents']:
                cle = c['slug'] + '/' + t['key']
                n = noeuds.get(cle)
                if not n:
                    continue
                e = FR['talents'][cle]
                sid0 = n['ranks'][0]

                nfr, nen = noms_fr.get(sid0), noms_en.get(sid0)
                if nfr and nfr != nen:
                    if e['name'] != nfr:
                        faits.append('  nom   %-28s « %s » -> « %s »'
                                     % (t['name_en'], e['name'], nfr))
                        e['name'] = nfr
                        bilan['noms'] += 1
                    elif e['nameSource'] == 'adapte':
                        # Notre traduction tombait juste : le nom est bon, mais il
                        # s'annonçait comme une invention. On corrige l'étiquette,
                        # pas le texte. Les entrées déjà données pour officielles
                        # d'une extension antérieure sont laissées telles quelles :
                        # leur étiquette est exacte, et dire d'où vient le nom a
                        # son intérêt.
                        faits.append('  source %-27s « %s » confirmé par la table'
                                     % (t['name_en'], e['name']))
                        bilan['provenances'] += 1
                    else:
                        # Nom déjà juste et bien étiqueté : on ne touche à rien,
                        # mais on continue vers les textes du même talent.
                        nfr = None
                    if nfr:
                        e.update(nameSource='officiel', nameBranch='forever', spell=sid0)
                        e.pop('doubt', None)

                rangs, refus = [], 0
                for i in range(t['maxRanks']):
                    sid = n['ranks'][i] if i < len(n['ranks']) else None
                    out = resout(desc_en.get(sid), desc_fr.get(sid),
                                 nettoie(n['descriptions'].get(str(i + 1))))
                    refus += out is None
                    rangs.append(out)
                if refus:
                    bilan['rangs refusés'] += t['maxRanks']
                    continue
                if (e.get('ranks') or [e.get('rank1')]) == rangs:
                    continue                      # déjà à jour
                if len(rangs) == 1:
                    e['rank1'] = rangs[0]
                    e.pop('ranks', None)
                else:
                    e['ranks'] = rangs
                    e['rank1'] = rangs[0]
                e['textSource'] = 'client-forever'
                e.setdefault('spell', sid0)
                faits.append('  texte %-28s %d rang(s)' % (t['name_en'], len(rangs)))
                bilan['talents'] += 1
                bilan['textes'] += len(rangs)
    return bilan, faits


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--build', default=BUILD)
    ap.add_argument('--essai', action='store_true', help="n'écrit rien")
    args = ap.parse_args()
    os.chdir(RACINE)
    tmp = os.path.join(tempfile.gettempdir(), 'chando-client-fr-' + args.build)
    os.makedirs(tmp, exist_ok=True)

    print('build %s — téléchargement des tables…' % args.build)
    fics = {}
    for table, loc in (('SpellName', 'frFR'), ('SpellName', 'enUS'),
                       ('Spell', 'frFR'), ('Spell', 'enUS')):
        fics[(table, loc)] = telecharge(WAGO % (table, args.build, loc),
                                        os.path.join(tmp, '%s-%s.csv' % (table, loc)))
    # `db` ne sert qu'à contourner le cache de Wowhead ; le fichier est ensuite
    # gardé en local, une valeur fixe suffit donc.
    wh = telecharge(WOWHEAD % 20260920,
                    os.path.join(tmp, 'wowhead-talents.txt'))

    chemin = os.path.join('data', 'talents-data.js')
    s = io.open(chemin, encoding='utf-8').read()
    dec = json.JSONDecoder()
    i1 = s.index('=', s.index('window.TALENT_DATA=')) + 1
    D, f1 = dec.raw_decode(s, i1)
    i2 = s.index('=', s.index('window.TALENT_FR=')) + 1
    FR, f2 = dec.raw_decode(s, i2)

    bilan, faits = reprend(
        D, FR,
        colonne(fics[('SpellName', 'frFR')], 'Name_lang'),
        colonne(fics[('SpellName', 'enUS')], 'Name_lang'),
        colonne(fics[('Spell', 'frFR')], 'Description_lang'),
        colonne(fics[('Spell', 'enUS')], 'Description_lang'),
        noeuds_wowhead(wh, D))

    for f in faits[:40]:
        print(f)
    if len(faits) > 40:
        print('  … et %d autres' % (len(faits) - 40))
    print()
    for k, v in bilan.items():
        print('  %-14s %d' % (k, v))

    if args.essai:
        print('\nessai : rien n’a été écrit')
        return
    if not (bilan['noms'] or bilan['textes'] or bilan['provenances']):
        print('\nrien à changer')
        return
    FR['updatedAt'] = __import__('datetime').date.today().isoformat()
    dump = lambda o: json.dumps(o, ensure_ascii=False, indent=1)
    io.open(chemin, 'w', encoding='utf-8', newline='').write(
        s[:i1] + dump(D) + s[f1:i2] + dump(FR) + s[f2:])
    print('\n%s mis à jour' % chemin)


if __name__ == '__main__':
    main()
