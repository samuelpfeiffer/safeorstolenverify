# Fix: unmatched URLs serve the homepage's baked HTML

## (a) What is actually being served

Verified live with curl against the custom domain (not the editor preview):

```text
curl -A Googlebot https://safeorstolen.com/idaho-vin-lookup
HTTP/2 200 · server: cloudflare · x-deployment-id: 89d95a3e-…
<title>SafeOrStolen — AI-Powered Stolen Item Verification</title>
<link rel="canonical" href="https://safeorstolen.com/">
```

Same result for `/qwertyzzz`, `/vs-nicb`, and `/verification-app` — including
`/verification-app`, which has an explicit `301!` rule in `public/_redirects`.
That rule not firing is direct proof that `_redirects` is inert here.

What *does* work:

- `/imei-checker` → its own title and self-canonical (a committed static file exists at that path).
- `/404.html` → returns the real 404 document, but with **HTTP 200** (it is only reachable by direct request).
- `/nonexistent.html` → HTTP 404 (paths that look like files are not SPA-fallen-back).
- `/ai-imei-check` → `noindex, follow` + `canonical https://safeorstolen.com/imei-checker`. This path is in `REDIRECT_STUB_ROUTES` in `scripts/apply-prerender.mjs`, so the build writes a static stub file for it. **This is the only redirect mechanism that is actually effective in production.**

The fallback for any extensionless unmatched path is `dist/index.html`, served by
Lovable hosting's built-in SPA fallback.

## (b) Why it is the homepage's content

`scripts/apply-prerender.mjs` (`main()`) writes each route's baked document to
`dist/<route>/index.html` — except the homepage:

```js
if (page.route === '/') {
  fs.writeFileSync(indexPath, html);   // dist/index.html
}
```

`dist/index.html` is simultaneously the homepage document *and* the SPA fallback
file. So every unmatched path receives the homepage's title, H1, JSON-LD and
`rel="canonical" href="https://safeorstolen.com/"`. `dist/404.html` is written
correctly but nothing routes to it, because the `/* /404.html 404` catch-all
lives in `public/_redirects`, which this host does not read. Same for
`netlify.toml`, `public/_headers` and `public/web.config` — all inert files.

`RedirectHandler.tsx` / `REDIRECT_MAP` do run, but only after the JS bundle
boots. Googlebot reads the raw HTML it was served first, and that HTML is
already a self-consistent homepage.

## (c) Proposed fix

The only layer that can change the raw bytes at a given path on this host is a
committed static file produced at build time. So the fix extends the mechanism
that is already proven to work (`REDIRECT_STUB_ROUTES`).

1. **Add every reported legacy slug to `REDIRECT_STUB_ROUTES`** in
   `scripts/apply-prerender.mjs`, mirroring the destinations already declared in
   `public/_redirects`:
   - `/idaho-vin-lookup`, `/utah-vin-lookup`, `/nevada-vin-lookup`, `/kansas-vin-lookup` → `/vin-checker`
   - `/wisconsin-…`, `/maine-…`, `/washington-dc-…`, `/virginia-…`, `/ohio-…`, `/alabama-…`, `/memphis-…`, `/minneapolis-…` `-stolen-item-check` → `/verify`
   - `/miami-stolen-item-check` → `/stolen-check-miami` (a real page exists)
   - `/vs-nicb` → `/nicb-alternative`
   - `/statistics/stolen-goods`, `/blog/safeorstolen-app-guide`, `/blog/imei-checker-app-comparison`, `/blog/avoid-buying-stolen-items` → nearest real page (confirmed against the router before writing; if no good match exists the slug goes to the 404 stub list instead of an arbitrary target)

   Each gets a static file carrying `noindex, follow`, a canonical to the real
   destination, and a `meta refresh` — the exact shape that already works for
   `/ai-imei-check`. Google resolves these as redirects and drops the 404 report.

2. **Mirror the same slugs into `REDIRECT_MAP`** (`src/core/routing/RedirectRoutes.tsx`)
   so in-app navigation and hydration land on the same destination and no route
   falls through to `NotFound`.

3. **Build-time assertion**: every stub destination must be a real route in
   `AppRoutes.tsx` (via `scripts/route-manifest.mjs`), otherwise the build fails.
   This prevents redirecting to another 404.

4. **Wildcard note**: `/*-stolen-item-check` in `_redirects` can never work here —
   static hosting has no pattern matching. The slug list must be explicit. I will
   also cross-check the `_redirects` 301 table against the router and port any
   *other* orphan slug it lists, so this class of bug is closed, not just the 20
   Google happened to report.

### On the hard-404 requirement

Honest constraint: I cannot make an arbitrary unknown path return HTTP 404 on
this host. The SPA fallback is Lovable-platform behaviour and is not
configurable from the repo — `_redirects`, `netlify.toml`, `_headers` and
`web.config` are all ignored, which the curl evidence above confirms. Known
slugs get a working redirect (fully solves the GSC report). For genuinely
unknown paths the realistic options are:

- **A (recommended, default):** leave `dist/index.html` as the homepage document, so unknown paths keep returning 200 with the homepage's *self*-canonical to `/`. Google treats them as duplicates of the homepage rather than indexing them under the wrong URL. No SEO risk to `/`.
- **B:** make `dist/index.html` the 404 document (noindex, no canonical) so unknown paths signal "not a page" — but this strips the homepage's own baked title, H1 and JSON-LD, since `/` and the fallback are the same file. That is a real SEO downgrade to the most important URL.

I will implement A unless you tell me otherwise.

## Verification before anything is called done

After the change is published I will re-run, against `https://safeorstolen.com`
with `-A Googlebot`, and paste raw output for:

- each fixed slug: expect `200` + `robots: noindex, follow` + `canonical` pointing at the real destination
- `/imei-checker`, `/vin-checker`, `/`: expect unchanged self-canonicals and their own titles
- a random unknown path: current behaviour recorded as-is

Nothing is reported as fixed on editor-preview evidence.
