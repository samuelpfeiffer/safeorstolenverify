# Mobile LCP diagnosis — real Lighthouse measurements (no fixes proposed yet)

Method: Lighthouse 12 (headless Chromium) run from this sandbox against the **live** safeorstolen.com,
mobile form factor, Moto-G-class screen emulation, simulated 4G throttling + 4x CPU slowdown —
the same configuration PSI/CrUX-equivalent lab runs use. Six pages, one run each.

## 1. Measured results (mobile, throttled)

| Page | Perf | FCP | **LCP** | TBT | CLS | Total bytes |
|---|---|---|---|---|---|---|
| `/` | 43 | 5.6 s | **10.3 s** | 680 ms | 0 | 1,812 KiB |
| `/verify` | 55 | 3.3 s | **9.1 s** | 510 ms | 0 | — |
| `/imei-checker` | 54 | 4.9 s | **8.7 s** | 380 ms | 0 | — |
| `/texas-vin-lookup` | 51 | 4.8 s | **8.8 s** | 490 ms | 0 | 1,404 KiB |
| `/california-license-plate-lookup` | 55 | 4.7 s | **8.6 s** | 350 ms | 0 | — |
| `/idaho-vin-lookup` (redirect stub) | 49 | 4.7 s | **10.7 s** | 540 ms | 0 | — |

Every page measured is well past 2.5 s. This is not a subset of 48 URLs — it is site-wide,
and the templated state pages behave identically to each other (8.6–8.8 s), which is consistent
with GSC grouping ~48 similar URLs together.

Note on the stub page: `/idaho-vin-lookup` client-redirected to `/vin-checker` during the run,
so its 10.7 s includes the redirect hop. The stub document itself is small; the cost is the
second full app boot, not the stub.

## 2. What the LCP element actually is

On **every** page measured, the LCP element is a **text paragraph**, not an image:

- `/` → `div.min-h-screen > section.relative > div.max-w-3xl > p.text-center`
  ("Paste any IMEI, VIN, serial number, license plate, or marketplace URL…")
- `/verify` → `p.text-base` ("AI-powered stolen-item check. Paste an IMEI, VIN…")
- `/imei-checker` → `section.pt-24 > div.max-w-6xl > div.text-center > p.text-xl`
- `/texas-vin-lookup` → `section.pt-24 > div.max-w-6xl > p.text-xl`
- `/california-license-plate-lookup` → same selector as above

Phase breakdown (Lighthouse `lcp-breakdown-insight`, unsimulated trace times):

| Page | TTFB | Load delay | Load time | **Element render delay** |
|---|---|---|---|---|
| `/` | 101 ms | n/a (text) | n/a | **2,261 ms** |
| `/texas-vin-lookup` | 197 ms | n/a | n/a | **1,178 ms** |
| `/verify` | 210 ms | n/a | n/a | **1,022 ms** |
| `/imei-checker` | 251 ms | n/a | n/a | **1,201 ms** |
| `/california-license-plate-lookup` | 232 ms | n/a | n/a | **1,176 ms** |

There is **no image load-delay/load-time component at all** — 100% of the non-TTFB LCP time is
render delay. Observed FCP and observed LCP are the *same* timestamp on every page
(e.g. home: both 2,362 ms), meaning the LCP text paints on the very first paint. So the problem
is purely "how long until the browser can paint anything", not "which element paints last".

## 3. What is delaying first paint

Confirmed from the traces:

- **Render-blocking stylesheet**: `/assets/index.CrPR73mR.css` (25 KiB) — Lighthouse attributes
  **778 ms** of blocking on `/` and **621 ms** on `/texas-vin-lookup`. It is the only
  render-blocking resource.
- **`/sos-logo.png` is 266 KiB and is fetched twice** — once as the unconditional
  `<link rel="preload" as="image">` and once again as the actual image (home trace shows a 266 KiB
  `Image` request at 188–331 ms and a second 266 KiB request at 1211–1247 ms). A high-priority
  266 KiB PNG preload is competing for the same throttled mobile bandwidth as the render-blocking
  CSS. This is ~532 KiB of transfer for a logo, on the critical path, on every page.
- **JS bulk before paint**: `vendor` 129 KiB + `scanner` 113 KiB + `index` 58 KiB + `framer` 37 KiB
  + `supabase` 31 KiB, all starting ~190–225 ms, plus GTM 171 KiB. Bootup time 2.1 s on home,
  main-thread work 4.3 s, unused JS ≈ 289 KiB. This does not block first paint directly but it
  saturates the link and the CPU during the window when CSS and fonts need to land.
- **Third-party font**: `cdn.gpteng.co/.../CameraPlainVariable.woff2` — **131 KiB**, larger than the
  Inter subset (47 KiB), fetched on both pages measured.
- Home carries six ~55–62 KiB card JPEGs (`/images/cards/*.jpg`) all fetched in the first wave.

## 4. Answering the index.html preload question directly

- The `media="(min-width: 640px)"` preload of `/images/hero-device.webp` is **not** the problem, and
  adding a mobile-width preload would **not** help: at 412 px viewport `hero-device.webp` is never
  requested at all, and no image is the LCP element on mobile. Confirmed — zero `hero` URLs in the
  mobile network log.
- The unconditional `/sos-logo.png` preload **is** actively harmful (see above): 266 KiB, duplicated,
  high priority, not the LCP element.
- The Inter `swap` technique is fine; `font-display` raised no failures and CLS is 0 everywhere.

So the "wrong preload for the real mobile LCP image" hypothesis is half-right: the preloads are
mismatched, but the fix direction is *removing/shrinking* a wasteful preload rather than adding one,
because the real mobile LCP is text gated on CSS + bandwidth contention.

## 5. Diagnosis summary

Site-wide mobile LCP failure is caused by **time-to-first-paint**, not by a slow hero image:
a single render-blocking stylesheet plus a saturated first request wave (266 KiB duplicated logo
preload, ~370 KiB of app JS, 171 KiB GTM, 131 KiB third-party font) pushes the first paint —
which is also the LCP paint — past 2.5 s on throttled mobile. Templated state pages are not
special; they inherit the same shell cost.

## Next step

No fixes proposed in this document, per your instruction. Say the word and I'll come back with a
prioritized fix plan (with predicted and then re-measured LCP for each change).
