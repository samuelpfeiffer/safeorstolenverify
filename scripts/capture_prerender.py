#!/usr/bin/env python3
"""
capture_prerender.py

Renders every public route in a real browser and captures that route's OWN
head metadata (title, description, canonical, og:*, twitter:*, JSON-LD) plus
its rendered body HTML into `prerender/`.

Those snapshots are committed to the repo and applied to `dist/` at build time
by `scripts/apply-prerender.mjs`, so every route ships its own static HTML for
crawlers that do not execute JavaScript (Bing, Copilot, social previews).

Usage (dev server must be running):
    python3 scripts/capture_prerender.py [--base http://localhost:8080] [--only /,/imei-checker]
"""
import argparse
import asyncio
import json
import os
import re
from pathlib import Path

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "prerender"
PAGES_DIR = OUT_DIR / "pages"
SITE = "https://safeorstolen.com"

EXTRACT_JS = """
() => {
  const metas = [];
  document.head.querySelectorAll('meta').forEach((el) => {
    const name = el.getAttribute('name');
    const property = el.getAttribute('property');
    const content = el.getAttribute('content');
    if (!content || (!name && !property)) return;
    if (name === 'viewport') return;
    metas.push({ name, property, content });
  });

  const links = [];
  document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach((el) => {
    links.push({
      rel: el.getAttribute('rel'),
      href: el.getAttribute('href'),
      hreflang: el.getAttribute('hreflang'),
      type: el.getAttribute('type'),
    });
  });

  const jsonld = [];
  document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
    const txt = (el.textContent || '').trim();
    if (txt) jsonld.push(txt);
  });

  const root = document.getElementById('root');
  let body = '';
  if (root) {
    const clone = root.cloneNode(true);
    clone.querySelectorAll('script, style, noscript, link, iframe, canvas, video, audio, svg').forEach((n) => n.remove());
    // Keep only crawler-relevant attributes so snapshots stay small and never
    // ship stale class names / inline styles from a previous build.
    const KEEP = new Set(['href', 'src', 'alt', 'title', 'lang', 'rel', 'id', 'datetime', 'aria-label']);
    clone.querySelectorAll('*').forEach((el) => {
      [...el.attributes].forEach((attr) => {
        if (!KEEP.has(attr.name)) el.removeAttribute(attr.name);
      });
    });
    body = clone.innerHTML.replace(/\s+/g, ' ').replace(/>\s+</g, '> <').trim();
  }


  // The static fallback <meta name="description"> in index.html comes FIRST in
  // the head; the per-route Helmet-managed one is appended later. Always take
  // the last (or an explicitly Helmet-managed) one, never the generic fallback.
  const descEls = [...document.head.querySelectorAll('meta[name="description"]')];
  const managed = descEls.find((el) => el.hasAttribute('data-rh') || el.hasAttribute('data-react-helmet'));
  const descEl = managed || descEls[descEls.length - 1];

  return {
    title: document.title,
    description: descEl?.getAttribute('content') || '',
    metas, links, jsonld, body,
  };
}

"""


def slug_for(route: str) -> str:
    return "index" if route == "/" else route.lstrip("/").replace("/", "__")


def routes_from_sitemap():
    xml = (ROOT / "public" / "sitemap.xml").read_text()
    locs = re.findall(r"<loc>([^<]+)</loc>", xml)
    out = []
    for loc in locs:
        p = loc.strip().replace(SITE, "") or "/"
        if not p.startswith("/"):
            continue
        if len(p) > 1 and p.endswith("/"):
            p = p[:-1]
        out.append(p)
    return sorted(set(out))


def normalize(entry: dict, route: str) -> dict:
    canonical = SITE + ("/" if route == "/" else route)
    by_key = {}
    for m in entry["metas"]:
        key = f"p:{m['property']}" if m.get("property") else f"n:{m['name']}"
        by_key[key] = m
    # These are the tags that were collapsing to the homepage — force per-route values.
    by_key["p:og:url"] = {"property": "og:url", "content": canonical}
    if "p:og:title" not in by_key:
        by_key["p:og:title"] = {"property": "og:title", "content": entry["title"]}
    # The per-route description lives in `metas` (last write wins above); the
    # top-level field must mirror it, never the generic index.html fallback.
    meta_desc = by_key.get("n:description", {}).get("content")
    if meta_desc:
        entry["description"] = meta_desc
    # og:/twitter: descriptions also mirror the per-route value.
    if "p:og:description" not in by_key and entry["description"]:
        by_key["p:og:description"] = {"property": "og:description", "content": entry["description"]}
    if "n:twitter:title" not in by_key:
        by_key["n:twitter:title"] = {"name": "twitter:title", "content": entry["title"]}
    if "n:twitter:description" not in by_key and entry["description"]:
        by_key["n:twitter:description"] = {"name": "twitter:description", "content": entry["description"]}


    entry["metas"] = list(by_key.values())
    entry["links"] = [{"rel": "canonical", "href": canonical}] + [
        l for l in entry["links"] if l.get("rel") != "canonical"
    ]
    entry["canonical"] = canonical
    return entry


async def capture(page, route, base):
    await page.goto(f"{base}{route}", wait_until="domcontentloaded", timeout=60000)
    try:
        await page.wait_for_selector("#root h1, #root main, #root header", timeout=30000)
    except Exception:
        pass
    await page.wait_for_timeout(1500)
    data = await page.evaluate(EXTRACT_JS)
    if not data.get("title"):
        raise RuntimeError("empty title")
    if data["title"].strip().startswith("404"):
        raise RuntimeError("route renders the 404 page — not prerendered")
    return normalize(data, route)


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default="http://localhost:8080")
    ap.add_argument("--only", default="")
    ap.add_argument("--concurrency", type=int, default=4)
    args = ap.parse_args()

    routes = [r.strip() for r in args.only.split(",") if r.strip()] if args.only else routes_from_sitemap()
    PAGES_DIR.mkdir(parents=True, exist_ok=True)

    results, failures = [], []
    queue = asyncio.Queue()
    for r in routes:
        queue.put_nowait(r)

    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)

        async def worker():
            ctx = await browser.new_context(viewport={"width": 1280, "height": 1400})
            page = await ctx.new_page()
            page.on("dialog", lambda d: asyncio.ensure_future(d.dismiss()))
            while not queue.empty():
                route = await queue.get()
                try:
                    entry = await capture(page, route, args.base)
                    slug = slug_for(route)
                    (PAGES_DIR / f"{slug}.html").write_text(entry.get("body") or "")
                    results.append({
                        "route": route,
                        "slug": slug,
                        "title": entry["title"],
                        "description": entry["description"],
                        "canonical": entry["canonical"],
                        "metas": entry["metas"],
                        "links": entry["links"],
                        "jsonld": entry["jsonld"],
                    })
                    print(f"OK  {route} — {entry['title'][:70]}", flush=True)
                except Exception as e:  # noqa: BLE001
                    failures.append({"route": route, "error": str(e)[:200]})
                    print(f"ERR {route} — {e}", flush=True)
            await ctx.close()

        await asyncio.gather(*[worker() for _ in range(min(args.concurrency, len(routes)))])
        await browser.close()

    manifest_path = OUT_DIR / "manifest.json"
    merged = {}
    if manifest_path.exists():
        try:
            for p in json.loads(manifest_path.read_text()).get("pages", []):
                full = PAGES_DIR / f"{p['slug']}.json"
                merged[p["route"]] = json.loads(full.read_text()) if full.exists() else p
        except Exception:  # noqa: BLE001
            pass
    for r in results:
        merged[r["route"]] = r

    # Full per-route payloads live in prerender/pages/<slug>.json so the
    # manifest stays a small index (repo file-size limits).
    index = []
    for key in sorted(merged):
        page = merged[key]
        (PAGES_DIR / f"{page['slug']}.json").write_text(json.dumps(page, separators=(",", ":")))
        index.append({
            "route": page["route"],
            "slug": page["slug"],
            "title": page["title"],
            "canonical": page["canonical"],
        })

    manifest_path.write_text(json.dumps({
        "generatedAt": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat(),
        "site": SITE,
        "pages": index,
    }, indent=2))

    print(f"\nCaptured {len(results)}/{len(routes)} routes → prerender/manifest.json")
    if failures:
        print("Failures:", json.dumps(failures, indent=2))


if __name__ == "__main__":
    asyncio.run(main())
