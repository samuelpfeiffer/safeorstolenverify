#!/usr/bin/env python3
"""Pass 2: delete sentences that name restricted databases / third-party sources."""
import re, json, pathlib, sys
sys.path.insert(0, 'scripts')
from sweep_sources import EDITORIAL, EDITORIAL_SNAP  # type: ignore

ROOT = pathlib.Path('.')
# A sentence = run of chars with no quote, backslash, angle bracket or period,
# ending in a period. Keeps us safely inside a single string literal.
SENT = re.compile(r"\s?[^.\"'\\<>{}]*?(?:\bNCIC\b|\bATF\b|HotGunz)[^.\"'\\<>{}]*\.")

targets = []
for pat in ('src/**/*.tsx', 'src/**/*.ts', 'public/*.txt', 'public/*.json',
            'public/.well-known/*.json', 'index.html', 'prerender/pages/*.json',
            'prerender/pages/*.html', 'prerender/manifest.json'):
    targets += [p for p in ROOT.glob(pat) if p.is_file()]

changed = []
for p in targets:
    rel = str(p)
    if rel in EDITORIAL:
        continue
    if rel.startswith('prerender/pages/') and any(k in p.name for k in EDITORIAL_SNAP):
        continue
    orig = p.read_text(encoding='utf-8')
    if not re.search(r"\bATF\b|\bNCIC\b|HotGunz", orig):
        continue
    new = SENT.sub('', orig)
    new = re.sub(r"  +", " ", new)
    if new == orig:
        continue
    if rel.endswith('.json'):
        try:
            json.loads(new)
        except Exception as e:
            print("SKIP invalid json", rel, e)
            continue
    p.write_text(new, encoding='utf-8')
    changed.append(rel)

print("pass2 changed", len(changed))
print("pass2 prerender", sum(1 for c in changed if c.startswith('prerender/')))
for c in changed:
    if not c.startswith('prerender/'):
        print("  ", c)
