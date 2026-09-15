# -*- coding: utf-8 -*-
"""
Régénère sitemap.xml à partir des pages HTML présentes dans le dépôt.

    python tools/build-sitemap.py

Les pages portant `<meta name="robots" content="noindex…">` sont exclues :
c'est le cas des guides volontairement non publiés (Gruul, Maulgar), qu'il
serait contradictoire de soumettre à Google.
"""
import io, os, re, glob, datetime

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://chando.pages.dev'


def priorite(rel):
    if rel == 'index.html':
        return '1.0'
    if rel == 'forever/news.html':
        return '0.9'
    if rel.startswith('forever/actualites/'):
        return '0.7'
    if rel.startswith('forever/') or rel == 'tbc/strats.html':
        return '0.8'
    return '0.7'


def main():
    os.chdir(RACINE)
    jour = datetime.date.today().isoformat()
    motifs = ['*.html', os.path.join('*', '*.html'), os.path.join('*', '*', '*.html')]
    urls, exclus = [], []

    for motif in motifs:
        for p in sorted(glob.glob(motif)):
            rel = p.replace(os.sep, '/')
            s = io.open(rel, encoding='utf-8', errors='replace').read()
            m = re.search(r'<meta\s+name=["\']robots["\']\s+content=["\']([^"\']+)', s, re.I)
            if m and 'noindex' in m.group(1).lower():
                exclus.append(rel)
                continue
            loc = BASE + '/' if rel == 'index.html' else BASE + '/' + rel[:-5]
            urls.append((loc, priorite(rel)))

    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc, pr in urls:
        out += ['  <url>', '    <loc>%s</loc>' % loc,
                '    <lastmod>%s</lastmod>' % jour,
                '    <priority>%s</priority>' % pr, '  </url>']
    out.append('</urlset>')
    io.open('sitemap.xml', 'w', encoding='utf-8', newline='\n').write('\n'.join(out) + '\n')

    print('sitemap : %d URL' % len(urls))
    print('  dont actualités : %d' % sum(1 for l, _ in urls if '/actualites/' in l))
    for e in exclus:
        print('  exclue (noindex) : %s' % e)


if __name__ == '__main__':
    main()
