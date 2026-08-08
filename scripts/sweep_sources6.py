#!/usr/bin/env python3
"""Pass 6: apply the same scrubs to prerendered .html snapshots."""
import re, pathlib, sys
sys.path.insert(0, 'scripts')
from sweep_sources import EDITORIAL_SNAP, RULES as FIREARM_RULES
from sweep_sources4 import RULES as SRC_RULES, CLEAN
from sweep_sources5 import RULES as EXP_RULES

SENT = re.compile(r"\s?[^.<>]*?(?:\bNCIC\b|\bATF\b|HotGunz)[^.<>]*\.")
TRIG = re.compile(r"\bATF\b|\bNCIC\b|HotGunz|GSMA|NICB|NHTSA|BikeIndex|Bike Index|carrier blacklists|Device Registry|50 state DMV")

def fix(s):
    for p, r in FIREARM_RULES:
        s = re.sub(p, r, s)
    if re.search(r"\bATF\b|\bNCIC\b|HotGunz", s):
        s = SENT.sub('', s)
    for p, r in SRC_RULES + EXP_RULES + CLEAN:
        s = re.sub(p, r, s)
    return s

changed = []
for p in pathlib.Path('prerender/pages').glob('*.html'):
    if any(k in p.name for k in EDITORIAL_SNAP):
        continue
    raw = p.read_text(encoding='utf-8')
    if not TRIG.search(raw):
        continue
    new = fix(raw)
    if new != raw:
        p.write_text(new, encoding='utf-8')
        changed.append(p.name)
print("pass6 changed", len(changed))
