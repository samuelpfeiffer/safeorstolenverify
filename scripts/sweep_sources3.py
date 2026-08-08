#!/usr/bin/env python3
"""Pass 3: JSON-aware scrub of remaining named-source sentences in snapshots."""
import re, json, pathlib, sys
sys.path.insert(0, 'scripts')
from sweep_sources import EDITORIAL_SNAP, RULES

SENT = re.compile(r"\s?[^.<>]*?(?:\bNCIC\b|\bATF\b|HotGunz)[^.<>]*\.")
TRIG = re.compile(r"\bATF\b|\bNCIC\b|HotGunz")

def fix(s):
    for pat, rep in RULES:
        s = re.sub(pat, rep, s)
    if TRIG.search(s):
        s = SENT.sub('', s)
    return re.sub(r"  +", " ", s)

def walk(o):
    if isinstance(o, str):
        return fix(o) if TRIG.search(o) else o
    if isinstance(o, list):
        return [walk(x) for x in o]
    if isinstance(o, dict):
        return {k: walk(v) for k, v in o.items()}
    return o

changed = []
for p in list(pathlib.Path('prerender/pages').glob('*.json')) + list(pathlib.Path('public').rglob('*.json')):
    if any(k in p.name for k in EDITORIAL_SNAP):
        continue
    raw = p.read_text(encoding='utf-8')
    if not TRIG.search(raw):
        continue
    data = json.loads(raw)
    new = json.dumps(walk(data), ensure_ascii=False, separators=(',', ':') if len(raw.split('\n')) == 1 else None, indent=None if len(raw.split('\n')) == 1 else 2)
    if new != raw:
        p.write_text(new, encoding='utf-8')
        changed.append(str(p))
print("pass3 changed", len(changed))
for c in changed:
    print("  ", c)
