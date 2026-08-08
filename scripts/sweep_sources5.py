#!/usr/bin/env python3
"""Pass 5: scrub expanded agency names and de-duplicate adjacent generic labels."""
import re, pathlib, json, sys
sys.path.insert(0, 'scripts')
from sweep_sources import EDITORIAL_SNAP
from sweep_sources4 import SRC_SKIP, VEH, PHONE, BIKE

RULES = [
    (r"National Insurance Crime Bureau(?: \(NICB\))?", VEH),
    (r"National Motor Vehicle Title Information System(?: \(NMVTIS\))?", VEH),
    (r"National Highway Traffic Safety Administration(?: \(NHTSA\))?", VEH),
    (r"(vehicle theft and title databases)[ ,]+\1", r"\1"),
    (r"  +", " "),
]
TRIG = re.compile("|".join(p for p, _ in RULES[:3]))

def fix(s):
    for p, r in RULES:
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

targets = [p for p in pathlib.Path('.').glob('public/**/*') if p.is_file()]
targets += [p for p in pathlib.Path('.').glob('src/**/*') if p.is_file()]
targets += [pathlib.Path('index.html')]
targets += [p for p in pathlib.Path('prerender/pages').glob('*.json')
            if not any(k in p.name for k in EDITORIAL_SNAP)]

changed = []
for p in targets:
    sp = str(p)
    if sp.endswith(('.png', '.jpg', '.webp', '.ico', '.svg', '.mp4', '.woff', '.woff2')):
        continue
    if sp.startswith('public/') and ('sitemap' in p.name or p.name == 'robots.txt'):
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
        new = json.dumps(walk(json.loads(raw)), ensure_ascii=False,
                         separators=(',', ':') if one_line else None,
                         indent=None if one_line else 2)
    else:
        new = fix(raw)
    if new != raw:
        p.write_text(new, encoding='utf-8')
        changed.append(sp)
print("pass5 changed", len(changed), "| src:", sum(1 for c in changed if c.startswith('src/')),
      "| prerender:", sum(1 for c in changed if c.startswith('prerender/')),
      "| public:", [c for c in changed if c.startswith('public/')])
