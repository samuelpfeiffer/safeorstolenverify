#!/usr/bin/env python3
"""Pass 4: replace named third-party data sources in user-facing copy with generic language."""
import re, pathlib, json, sys
sys.path.insert(0, 'scripts')
from sweep_sources import EDITORIAL_SNAP

# editorial / comparison files keep provider names (page topic is the provider)
SRC_SKIP = re.compile(r"src/pages/(blog|comparisons|alternatives)/|Alternative|Vs[A-Z]|_shared|integrations/|src/data/|src/config/sitemap|src/core/routing")

PHONE = "carrier and theft databases"
VEH = "vehicle theft and title databases"
BIKE = "stolen bicycle databases"

RULES = [
    (r"BikeIndex \(700K\+ bikes\)", BIKE),
    (r"BikeIndex \(1\.4M\+ bikes cataloged\)", BIKE),
    (r"BikeIndex\.org \(1\.4M\+ bikes\)", BIKE),
    (r"BikeIndex\.org", BIKE),
    (r"\bBikeIndex\b", BIKE),
    (r"\bBike Index\b", BIKE),
    (r"NICB \(National Insurance Crime Bureau\)", VEH),
    (r"NHTSA \(National Highway Traffic Safety Administration\)", VEH),
    (r"NICB VINCheck", VEH),
    (r"NICB, NHTSA, NHTSA vehicle records", VEH),
    (r"NICB and NHTSA", VEH),
    (r"NHTSA vehicle records", VEH),
    (r"\bNMVTIS\b", VEH),
    (r"\bNICB\b", VEH),
    (r"\bNHTSA\b", VEH),
    (r"GSMA Device Registry", PHONE),
    (r"\bGSMA\b", PHONE),
    (r"\bDevice Registry\b", PHONE),
    (r"(all )?50 state DMV records", VEH),
    (r"carrier and manufacturer blacklists", PHONE),
    (r"carrier blacklists", PHONE),
]
CLEAN = [
    (r"(vehicle theft and title databases)(, \1)+", r"\1"),
    (r"(carrier and theft databases)(, \1)+", r"\1"),
    (r"(stolen bicycle databases)(, \1)+", r"\1"),
    (r"\b(vehicle theft and title databases) and \1\b", r"\1"),
    (r"\b(carrier and theft databases) and \1\b", r"\1"),
    (r",\s*,", ","),
    (r"  +", " "),
]
TRIG = re.compile("|".join(p for p, _ in RULES))

def fix(s):
    for p, r in RULES:
        s = re.sub(p, r, s)
    for p, r in CLEAN:
        s = re.sub(p, r, s)
    return s

def walk(o):
    if isinstance(o, str):
        return fix(o) if TRIG.search(o) else o
    if isinstance(o, list):
        return [walk(x) for x in o]
    if isinstance(o, dict):
        return {k: walk(v) for k, v in o.items()}
    return o

targets = []
for pat in ('public/**/*', 'src/**/*'):
    targets += [p for p in pathlib.Path('.').glob(pat) if p.is_file()]
targets += [pathlib.Path('index.html')]
targets += [p for p in pathlib.Path('prerender/pages').glob('*.json')
            if not any(k in p.name for k in EDITORIAL_SNAP)]

changed = []
for p in targets:
    sp = str(p)
    if sp.endswith(('.png', '.jpg', '.webp', '.ico', '.svg', '.mp4', '.woff', '.woff2')):
        continue
    if sp.startswith('public/') and (p.name in ('sitemap.xml', 'robots.txt') or 'sitemap' in p.name):
        continue
    if sp.startswith('src/') and SRC_SKIP.search(sp):
        continue
    try:
        raw = p.read_text(encoding='utf-8')
    except Exception:
        continue
    if not TRIG.search(raw):
        continue
    if p.suffix == '.json':
        one_line = '\n' not in raw.strip()
        data = json.loads(raw)
        new = json.dumps(walk(data), ensure_ascii=False,
                         separators=(',', ':') if one_line else None,
                         indent=None if one_line else 2)
    else:
        new = fix(raw)
    if new != raw:
        p.write_text(new, encoding='utf-8')
        changed.append(sp)

print("pass4 changed", len(changed))
print("src:", sum(1 for c in changed if c.startswith('src/')))
print("public:", [c for c in changed if c.startswith('public/')])
print("prerender:", sum(1 for c in changed if c.startswith('prerender/')))
