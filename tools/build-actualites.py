# -*- coding: utf-8 -*-
"""
Génère les pages de la section Actualités à partir du dossier éditorial.

    python tools/build-actualites.py <dossier-editorial>

Produit `forever/actualites/<slug>.html` (une page par article) et
réécrit `forever/news.html` en index de la section.

Ce script n'est PAS une étape de build : le site sert le HTML déjà
présent dans le dépôt. Il sert à regénérer ces pages quand le dossier
éditorial change, puis on commite le résultat. Le site reste servable
sans lui.
"""
import json, io, os, re, sys, html, datetime

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://chando.pages.dev'
MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
        'août', 'septembre', 'octobre', 'novembre', 'décembre']

# nom du fichier source du dossier éditorial -> nom publié dans /assets/media/forever/
IMAGES = {
    '3.png': 'foret-arbres-geants', '7.png': 'ile-zephras', '0.webp': 'offres-editions',
    '26.png': 'nain-foret-enneigee', '25.png': 'campement-communaute', '43.png': 'statue-collector',
    '4.jpg': 'tour-pierre-riviere', '5.png': 'architecture-elfique', '8.png': 'eolides-presentation',
    '18.png': 'ruines-enneigees', '20.png': 'iles-sombrelances', '35.png': 'interface-legacy',
    '32.png': 'campement-metiers', '37.png': 'menu-langue', '9.png': 'armures-personnages',
    '22.png': 'reprouve-armure', '23.png': 'talents-paladin', '6.png': 'ruines-brumeuses',
    '27.png': 'modele-nain-hd', '50.png': 'warcraft3-forsaken',
}

# liens vers les outils du site, ajoutés sous l'article quand le sujet s'y prête
OUTILS = {
    'heritage-legacy-wow-forever': ('/forever/legacy.html', 'Le calculateur de Points Legacy'),
    'eolides-wow-forever':         ('/forever/races.html', 'Raciaux et combinaisons race-classe'),
    'races-classes-wow-forever':   ('/forever/races.html', 'Le tableau complet des combinaisons'),
    'talents-paladin-wow-forever': ('/forever/talents.html', 'Le calculateur de talents'),
}

e = lambda s: html.escape(s or '', quote=True)


def dimensions(chemin_absolu):
    """Dimensions réelles de l'image publiée, lues sur le fichier."""
    from PIL import Image
    with Image.open(os.path.join(RACINE, chemin_absolu.lstrip('/'))) as im:
        return im.size


def date_fr(iso):
    d = datetime.date(*map(int, iso.split('-')))
    return '%d %s %d' % (d.day, MOIS[d.month - 1], d.year)


def markdown(txt):
    """Le corps n'utilise que `## titre` et `**gras**`."""
    out = []
    for bloc in re.split(r'\n\s*\n', txt.strip()):
        bloc = bloc.strip()
        if not bloc:
            continue
        if bloc.startswith('## '):
            out.append('<h2>%s</h2>' % gras(bloc[3:].strip()))
        else:
            out.append('<p>%s</p>' % gras(bloc))
    return '\n'.join(out)


def gras(t):
    return re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', e(t))


def tete(titre, desc, url, image, og_type, extra_css=''):
    return '''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%(titre)s</title>
<meta name="description" content="%(desc)s">
<link rel="canonical" href="%(url)s">
<meta property="og:type" content="%(ogt)s">
<meta property="og:site_name" content="Chando">
<meta property="og:locale" content="fr_FR">
<meta property="og:title" content="%(titre)s">
<meta property="og:description" content="%(desc)s">
<meta property="og:url" content="%(url)s">
<meta property="og:image" content="%(img)s">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/media/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/media/favicon-180.png">
<script>
  try{var t=localStorage.getItem('guide-theme');
    if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">
%(css)s
</head>
<body>

<nav class="site-switch">
  <a href="/tbc/strats.html" class="tbc">TBC</a>
  <a href="/forever/talents.html" class="forever is-here">Forever</a>
</nav>
''' % {'titre': e(titre), 'desc': e(desc), 'url': e(url), 'img': e(image),
       'ogt': og_type, 'css': extra_css}


PIED = '''
<footer>
  <a class="feedback" href="https://discord.gg/rz5PxxMgnv" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.213.386-.46.905-.63 1.319a18.27 18.27 0 0 0-5.51 0C9.575 3.905 9.322 3.386 9.11 3a19.7 19.7 0 0 0-4.432 1.369C1.869 8.59 1.106 12.705 1.488 16.76a19.9 19.9 0 0 0 6.073 3.08 14.6 14.6 0 0 0 1.307-2.136c-.72-.271-1.41-.606-2.06-1 .173-.128.342-.261.505-.398a14.2 14.2 0 0 0 12.171 0c.165.14.334.273.506.398-.652.394-1.343.73-2.064 1.001.377.75.815 1.463 1.307 2.135a19.85 19.85 0 0 0 6.076-3.08c.448-4.7-.766-8.777-3.209-12.39ZM8.02 14.331c-1.183 0-2.157-1.085-2.157-2.419s.955-2.418 2.157-2.418c1.21 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.96 0c-1.183 0-2.157-1.085-2.157-2.419s.955-2.418 2.157-2.418c1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z"/></svg>Pour signaler une erreur ou proposer une modification</a>
</footer>

<button id="themetoggle" type="button" aria-label="Basculer le thème clair ou sombre"></button>

<script>
(function(){
  var KEY='guide-theme', root=document.documentElement, btn=document.getElementById('themetoggle');
  function sync(){ btn.textContent=(root.dataset.theme==='light')?'Sombre':'Clair'; }
  btn.addEventListener('click',function(){
    var toLight=root.dataset.theme!=='light';
    root.dataset.theme=toLight?'light':'dark';
    try{localStorage.setItem(KEY,toLight?'light':'dark')}catch(e){}
    sync();
  });
  sync();
})();
</script>

<!-- Cloudflare Web Analytics -->
<script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "cda3a81db83047a5a191c0d75d1db09c"}'></script>
<!-- End Cloudflare Web Analytics -->
</body>
</html>
'''


def nav(ici):
    lien = lambda h, t: '  <a href="%s"%s>%s</a>' % (h, ' class="is-here"' if t == ici else '', t)
    return ('\n<nav class="section-nav">\n'
            + '\n'.join([lien('/forever/talents.html', 'Calculateur de talents'),
                         lien('/forever/legacy.html', 'Points Legacy'),
                         lien('/forever/races.html', 'Raciaux'),
                         lien('/forever/news.html', 'Actualités')])
            + '\n</nav>\n')


def page_article(a, sources, par_slug):
    img = a['image']
    fichier = IMAGES[os.path.basename(img['path'])]
    chemin = '/assets/media/forever/%s.webp' % fichier
    url = '%s/forever/actualites/%s' % (BASE, a['slug'])
    corps = a['body'].strip()

    # le premier paragraphe sert de chapô
    blocs = re.split(r'\n\s*\n', corps)
    chapo, reste = blocs[0], '\n\n'.join(blocs[1:])

    s = tete(a.get('seo_title') or a['title'], a['description'], url,
             BASE + chemin, 'article',
             '<link rel="stylesheet" href="/assets/article.css">')

    s += '''
<header>
  <span class="eyebrow">Actualités WoW Forever</span>
  <h1>%s</h1>
</header>
''' % e(a['title'])
    s += nav('Actualités')
    s += '\n<main>\n\n'
    s += '<a class="crumb" href="/forever/news.html">&larr; Toutes les actualités</a>\n\n'
    s += '<article>\n'
    s += '  <div class="a-meta"><span class="a-cat">%s</span><time class="a-date" datetime="%s">%s</time></div>\n' % (
        e(a.get('category', '')), a['verified_at'], date_fr(a['verified_at']))
    s += '  <p class="a-standfirst">%s</p>\n\n' % gras(chapo)
    # image principale : au-dessus de la ligne de flottaison, donc chargée
    # tout de suite ; width/height réservent la place et évitent le saut de page
    w, h = dimensions(chemin)
    s += '  <figure class="a-figure">\n'
    s += '    <img src="%s" alt="%s" width="%d" height="%d" decoding="async">\n' % (
        chemin, e(img['alt']), w, h)
    s += '    <figcaption>%s<span class="a-credit">%s &middot; <a href="%s" target="_blank" rel="noopener">Voir la publication d\'origine</a></span></figcaption>\n' % (
        e(img['caption']), e(img['credit']), e(img['source_url']))
    s += '  </figure>\n\n'
    s += '  <div class="a-body">\n' + re.sub(r'^', '    ', markdown(reste), flags=re.M) + '\n  </div>\n'

    # sources
    s += '\n  <div class="a-sources">\n    <strong>Sources</strong>\n    <ul>\n'
    for sid in a.get('source_ids', []):
        src = sources.get(sid)
        if not src or not src['url'].startswith('http') or 'chando.pages.dev' in src['url']:
            continue
        s += '      <li><a href="%s" target="_blank" rel="noopener">%s</a></li>\n' % (e(src['url']), e(src['title']))
    s += '    </ul>\n  </div>\n'

    # à lire aussi
    liens = [(('/forever/actualites/%s.html' % r), par_slug[r]['title'])
             for r in a.get('related', []) if r in par_slug]
    if a['slug'] in OUTILS:
        liens.append(OUTILS[a['slug']])
    if liens:
        s += '\n  <div class="a-related">\n    <strong>À lire aussi</strong>\n'
        for h, t in liens:
            s += '    <a href="%s">%s</a>\n' % (e(h), e(t))
        s += '  </div>\n'

    s += '</article>\n\n</main>\n' + PIED
    return s


CSS_INDEX = '''<style>
main{flex:1;width:100%;max-width:820px;margin:0 auto;padding:36px 48px 64px}

.n-list{display:flex;flex-direction:column}
.n-card{display:grid;grid-template-columns:172px 1fr;gap:20px;padding:22px 0;
  border-top:1px solid var(--hair);text-decoration:none;color:inherit;transition:opacity .15s}
.n-card:first-child{border-top:none;padding-top:10px}
.n-card:hover{opacity:.82}
.n-card:hover .n-title{color:#1d8dcd}
.n-card img{width:100%;height:97px;object-fit:cover;border-radius:8px;border:1px solid var(--hair);display:block}
.n-meta{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-bottom:6px}
.n-cat{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
  color:#1d8dcd;border:1px solid currentColor;border-radius:999px;padding:2px 8px}
.n-date{font-size:10.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--dim)}
.n-title{font-family:'Newsreader',Georgia,serif;font-weight:500;font-size:18.5px;
  line-height:1.3;margin-bottom:5px;transition:color .15s}
.n-desc{font-size:13.6px;line-height:1.55;color:var(--dim);max-width:62ch}

@media(max-width:760px){
  main{padding:28px 24px 48px}
  .n-card{grid-template-columns:1fr;gap:12px}
  .n-card img{height:auto;aspect-ratio:16/9}
}
</style>'''


def page_index(arts):
    url = BASE + '/forever/news'
    desc = ("Toute l'actualité de World of Warcraft: Forever en français : date de sortie, "
            "bêta, éditions, zones, Éolides, donjons, Legacy et Hardcore, d'après les "
            "annonces officielles de Blizzard.")
    s = tete('Actualités — WoW Forever', desc, url,
             BASE + '/assets/media/og-forever.jpg', 'website', CSS_INDEX)
    s += '''
<header>
  <span class="eyebrow">WoW Forever</span>
  <h1>Actualités</h1>
</header>
'''
    s += nav('Actualités')
    s += '\n<main>\n\n'
    s += '<div class="n-list">\n'
    for a in arts:
        fichier = IMAGES[os.path.basename(a['image']['path'])]
        s += '''<a class="n-card" href="/forever/actualites/%s.html">
  <img src="/assets/media/forever/%s.webp" alt="%s" loading="lazy" decoding="async" width="172" height="97">
  <div>
    <div class="n-meta"><span class="n-cat">%s</span><time class="n-date" datetime="%s">%s</time></div>
    <div class="n-title">%s</div>
    <p class="n-desc">%s</p>
  </div>
</a>
''' % (a['slug'], fichier, e(a['image']['alt']), e(a.get('category', '')),
       a['verified_at'], date_fr(a['verified_at']), e(a['title']), e(a['description']))
    s += '</div>\n\n</main>\n' + PIED
    return s


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = sys.argv[1]
    arts = json.load(io.open(os.path.join(src, 'articles.json'), encoding='utf-8'))
    sources = json.load(io.open(os.path.join(src, 'sources', 'sources.json'), encoding='utf-8'))
    par_slug = {a['slug']: a for a in arts}

    dossier = os.path.join(RACINE, 'forever', 'actualites')
    if not os.path.isdir(dossier):
        os.makedirs(dossier)

    for a in arts:
        p = os.path.join(dossier, a['slug'] + '.html')
        io.open(p, 'w', encoding='utf-8', newline='\n').write(page_article(a, sources, par_slug))
    io.open(os.path.join(RACINE, 'forever', 'news.html'), 'w',
            encoding='utf-8', newline='\n').write(page_index(arts))

    print('%d pages d\'article + l\'index' % len(arts))


if __name__ == '__main__':
    main()
