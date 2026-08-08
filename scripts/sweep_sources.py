#!/usr/bin/env python3
"""One-off sweep: remove named data-source claims from user-facing copy."""
import re, sys, json, pathlib

ROOT = pathlib.Path('.')

# Editorial pages whose entire topic is a third party — excluded by design.
EDITORIAL = {
    'src/pages/blog/ATFGunSerialNumberCheckGuide.tsx',
    'src/pages/blog/HotGunzDatabaseGuide.tsx',
    'src/pages/blog/StateStolenGunDatabaseGuide.tsx',
    'src/pages/comparisons/HotGunzAlternativePage.tsx',
    'src/pages/comparisons/VsFastBound.tsx',
    'src/pages/comparisons/VsBikeIndex.tsx',
    'src/pages/comparisons/NICBAlternativePage.tsx',
    'src/pages/comparisons/NICBVINCheckAlternative.tsx',
    'src/pages/comparisons/BestStolenItemCheckers2026.tsx',
    'src/pages/blog/TopStolenItemCheckers.tsx',
    'src/pages/blog/CarfaxVsFreeVinAlternatives.tsx',
    'public/_redirects', 'public/sitemap.xml',
    'src/config/sitemap-urls.ts', 'src/core/routing/AppRoutes.tsx',
    'src/pages/SitemapPage.tsx', 'src/components/layout/SOSFooter.tsx',
    'src/components/integrations/HotGunzWidget.tsx',
}
EDITORIAL_SNAP = ('blog__atf-gun-serial-number-check', 'blog__hotgunz-database-guide',
                  'blog__state-stolen-gun-database', 'hotgunz-alternative',
                  'blog__top-stolen-item-checkers', 'best-stolen-item-checkers',
                  'nicb-', 'vs-nicb', 'vs-bikeindex', 'vs-fastbound', 'sitemap',
                  'blog__carfax-vs')

EM = r"(?:\u2014|\\u2014|—|-)"

# Ordered explicit replacements. Applied to plain and JSON-escaped text alike.
RULES = [
    # --- firearm claim sentences -------------------------------------------
    (r"SafeOrStolen checks (?:the HotGunz national stolen-firearms registry|stolen firearm reports from all 50 states)\s*\(?~?[\d,]*\s*(?:victim-reported records|community-reported stolen firearms|user-reported stolen firearms)?\)?\s*and validates serial number integrity\.",
     "SafeOrStolen checks firearm serial numbers against stolen firearms databases and analyzes the serial for signs of alteration."),
    (r"the HotGunz national stolen-firearms registry", "stolen firearms databases"),
    (r"HotGunz Stolen Firearms Registry", "Stolen Firearms Database"),
    (r"the HotGunz stolen firearms database", "a stolen firearms database"),
    (r"HotGunz national stolen-firearms registry", "stolen firearms databases"),
    (r"National stolen-firearms registry of victim-reported guns", "Stolen firearms databases"),
    (r"stolen firearm reports from all 50 states \(~?[\d,]+\+? ?(?:victim-reported records|community-reported stolen firearms|user-reported stolen firearms)\)",
     "stolen firearms databases"),
    (r"stolen firearm reports from all 50 states", "stolen firearms databases"),
    (r"nationwide stolen firearm reports", "stolen firearms databases"),
    (r"the nationwide stolen firearm reports", "stolen firearms databases"),
    (r"50-State Firearm Reports", "Stolen Firearms Databases"),
    (r"ATF serial integrity check", "Serial number integrity analysis"),
    (r"ATF serial integrity checks", "serial number integrity analysis"),
    (r"an ATF-enforced federal violation", "a federal violation"),
    (r"avoid ATF violations and federal charges", "avoid federal charges"),
    # --- other item types ---------------------------------------------------
    (r"GSMA Device Registry, ", ""),
    (r"\bGSMA Device Registry\b", "carrier and theft databases"),
    (r"NICB, GSMA[^,)]*, ATF eTrace, carrier blacklists, BikeIndex, Stolen Firearms Databases",
     "carrier, vehicle, bicycle and stolen firearms databases"),
    (r"carrier and manufacturer blacklists IMEI database, carrier and manufacturer blacklists, BikeIndex, stolen firearms databases, ",
     "carrier and theft databases, vehicle theft and title databases, stolen bicycle databases, stolen firearms databases, "),
    (r"NICB vehicle data, BikeIndex, and stolen firearms databases", "vehicle theft databases, stolen bicycle databases, and stolen firearms databases"),
    (r"\bNICB, NHTSA vehicle records\b", "vehicle theft and title databases"),
    (r"FBI NCIC, NICB, NHTSA vehicle records", "vehicle theft and title databases"),
]

# Sentences that must disappear entirely (disclosure / limitation language).
KILL_SENTENCE = re.compile(
    r"(?:\bNCIC\b|\bATF\b|HotGunz|state police (?:systems|databases)|"
    r"50 state police|National Crime Information Center)", re.I)

SENT_SPLIT = re.compile(r"(?<=[.!?])\s+")
SAFE_SKIP = re.compile(r"(href|to=\"|/blog/|import |source:|Link |hotgunz-alternative|https?://)")


def scrub_sentences(text: str) -> str:
    out = []
    for part in SENT_SPLIT.split(text):
        if KILL_SENTENCE.search(part) and not SAFE_SKIP.search(part):
            continue
        out.append(part)
    res = " ".join(out)
    return re.sub(r"\s{2,}", " ", res)


def process(text: str) -> str:
    for pat, rep in RULES:
        text = re.sub(pat, rep, text)
    return text


def main():
    targets = []
    for pat in ('src/**/*.tsx', 'src/**/*.ts', 'public/*.txt', 'public/*.json',
                'public/.well-known/*.json', 'index.html', 'prerender/pages/*.json',
                'prerender/manifest.json'):
        targets += [p for p in ROOT.glob(pat) if p.is_file()]

    changed = []
    for p in targets:
        rel = str(p)
        if rel in EDITORIAL:
            continue
        if rel.startswith('prerender/pages/') and any(k in p.name for k in EDITORIAL_SNAP):
            continue
        orig = p.read_text(encoding='utf-8')
        if not re.search(r"\bATF\b|\bNCIC\b|HotGunz|GSMA|NICB|NHTSA|NMVTIS|Bike ?Index|50 state DMV|carrier blacklist", orig):
            continue
        new = process(orig)
        # sentence scrub, line by line to keep code intact
        lines = new.split('\n')
        for i, ln in enumerate(lines):
            if KILL_SENTENCE.search(ln) and not SAFE_SKIP.search(ln):
                cand = scrub_sentences(ln)
                # guard: never break quoting/bracket structure or empty a string
                if (cand.count('"') == ln.count('"') and cand.count("'") == ln.count("'")
                        and cand.count('{') == ln.count('{') and cand.count('}') == ln.count('}')
                        and re.search(r'[A-Za-z]{4}', cand)):
                    lines[i] = cand
        new = '\n'.join(lines)
        if new != orig:
            if rel.endswith('.json'):
                try:
                    json.loads(new)
                except Exception as e:
                    print(f"SKIP (invalid json) {rel}: {e}")
                    continue
            p.write_text(new, encoding='utf-8')
            changed.append(rel)
    print(f"changed {len(changed)} files")
    print(f"prerender files: {sum(1 for c in changed if c.startswith('prerender/'))}")
    for c in changed:
        if not c.startswith('prerender/'):
            print("  ", c)


if __name__ == '__main__':
    main()
