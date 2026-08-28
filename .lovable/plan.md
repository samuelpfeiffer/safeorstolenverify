# Mobile LCP fix plan — prioritized (no code changes yet)

Baseline (live, Lighthouse mobile, simulated 4G + 4x CPU): `/` LCP **10.3 s**, state pages **8.6–8.8 s**,
`/verify` **9.1 s**, `/imei-checker` **8.7 s**. LCP element is a text paragraph on every page;
100% of non-TTFB LCP time is **element render delay**. So every fix below targets *time to first paint*.

Ordered by impact-to-risk ratio (best ratio first).

---

## 1. Drop the unconditional `/sos-logo.png` preload  — highest ratio, lowest risk

**Facts checked:** `public/sos-logo.png` is **271,605 bytes**. `index.html:27` preloads it as an image on
every page. It is also `rel="icon"` (line 29), `apple-touch-icon` (124), `apple-touch-startup-image` (125),
and the og:image / schema logo. The only place it renders as a visible `<img>` in the app is
`src/pages/AffiliateRedirectPage.tsx:50`. The home trace shows it fetched **twice** (266 KiB at 188–331 ms
as the preload, 266 KiB again at 1211–1247 ms as the icon).

**Change:** remove the `rel="preload"` line, and generate a small dedicated favicon/apple-touch asset
(e.g. 180×180 and 512×512 PNG, ~10–20 KiB each) instead of pointing icons at the 265 KiB og:image file.
Keep the full-size file at its current URL untouched for og:image and JSON-LD `logo` (social scrapers and
schema validators reference it; changing that URL is out of scope).

**Expected LCP impact:** frees ~265–530 KiB of high-priority bandwidth in the exact window where the
render-blocking CSS is downloading. On a simulated 4G link that is roughly **0.7–1.5 s off first paint**.
This is the single biggest cheap win.

**Risk:** very low. The logo is not the LCP element, so removing the preload cannot delay LCP.
No SEO/social impact as long as the og:image URL and byte content stay as-is.

---

## 2. Inline critical CSS / unblock `index.CrPR73mR.css`

**Facts checked:** it is the **only** render-blocking resource — 25 KiB, Lighthouse attributes
**778 ms** blocking on `/` and **621 ms** on `/texas-vin-lookup`. `vite.config.ts:85` already has
`cssCodeSplit: true`, so this is the Tailwind base bundle, not a per-page file.

**Change:** two options, in preference order.
- **2a (preferred):** inline above-the-fold critical CSS into `<head>` at build time in
  `scripts/apply-prerender.mjs` (which already post-processes every prerendered page), and load the full
  stylesheet non-blocking (`media="print"` + `onload`, same technique already used for the Google Fonts
  links at index.html:111/114), with a `<noscript>` fallback.
- **2b (fallback if 2a proves fragile):** keep the stylesheet blocking but shrink it — audit Tailwind
  `content` globs and safelists so unused utilities stop shipping.

**Expected LCP impact:** removes most of the 621–778 ms of blocking → **~0.5–0.8 s off first paint**,
site-wide, on top of fix 1.

**Risk:** medium, and **I am not confident of 2a without live testing.** Getting critical CSS wrong causes
a visible unstyled flash or a layout shift (current CLS is a clean 0 on all six pages — protecting that is
a hard requirement). This one must be measured live before and after, per page type, and reverted if CLS
moves off 0. I would ship fixes 1 and 3 first, re-measure, then attempt this one on its own commit.

---

## 3. Trim the first JS wave — code-split `scanner`, defer GTM slightly

**Facts checked:** first wave on `/` starts ~190 ms: `vendor` 129 KiB, `scanner` **113 KiB**, `index`
58 KiB, `framer` 37 KiB, `supabase` 31 KiB. Bootup 2.1 s, main-thread work 4.3 s, unused JS ≈ 289 KiB.
GTM (171 KiB) is **already deferred** — `src/components/seo/GA4Provider.tsx` injects it from a `useEffect`,
so it starts at ~580–844 ms, after DOMContentLoaded. It does not block paint.

**Change:**
- **3a:** lazy-load the 113 KiB `scanner` chunk (camera/barcode OCR). It cannot be needed at first paint on
  any page — it is only reachable after a user opts into scanning. Import it dynamically at the point of use.
- **3b:** confirm `framer` (37 KiB) is only pulled by below-the-fold animated sections and split it the same
  way if so.
- **3c:** delay the GTM injection until after the first paint settles (e.g. `requestIdleCallback`, or on
  first interaction) so its 171 KiB stops competing with fonts and images during the LCP window.

**Expected LCP impact:** 3a alone removes ~113 KiB from the critical wave → **~0.3–0.6 s**. 3c is smaller
for LCP (it lands post-DCL) but helps TBT (currently 350–680 ms) and Speed Index.

**Risk:**
- 3a: low-to-medium. Risk is a regression in the scan flow, not in SEO — needs a live click-through test of
  the camera/scan path on `/verify` after the change.
- 3c: **needs your call on the business side.** Deferring GTM by ~1–2 s can lose attribution for users who
  bounce immediately, and it delays any conversion tag that fires on landing. If Stripe conversion tracking
  or an ad platform tag depends on early firing, I would leave GTM exactly where it is — the LCP payoff is
  small and it is currently not on the paint path anyway. Tell me whether anything business-critical rides
  on GTM firing within the first second.

---

## 4. The 131 KiB `cdn.gpteng.co` font — lowest ratio, external dependency

**Facts checked:** `CameraPlainVariable.woff2` (131 KiB — larger than the Inter subset at 47 KiB) is pulled
by `https://cdn.gpteng.co/gptengineer.js`, loaded at **index.html:367**. It is the Lovable editor/badge
script, not our own asset. We do not control its font URL, and it cannot be subset or self-hosted by us.

**Change options:**
- **4a:** if the Lovable badge is not wanted on production, turn it off through publish/badge settings —
  that is the clean way to stop the script and its font on the live domain.
- **4b:** if the badge stays, leave the script tag alone. Do **not** hand-edit or conditionally strip it in
  `index.html` — it is platform-managed and stripping it can break in-editor select/preview tooling.

**Expected LCP impact:** modest. The font starts at ~394–704 ms, after the CSS is already in flight, so it
mostly steals bandwidth rather than blocking paint — call it **0.1–0.3 s**, and only if the script is
removed entirely.

**Risk:** removing the script affects the Lovable editing experience, not the site's users. This is a
product decision for you, not a technical one. I would not touch it until fixes 1–3 are measured.

---

## Suggested sequence

1. Ship **fix 1** on its own → re-measure the same six URLs live → expect `/` LCP ~8.8–9.6 s.
2. Ship **fix 3a** (+3b if confirmed) → re-measure → expect `/` LCP ~8.2–9.0 s.
3. Attempt **fix 2a** on its own commit, with a CLS check on every page type → this is the one that should
   push the templated state pages under or near the 2.5 s field threshold over time.
4. Revisit **3c** and **4** only after seeing where 1–3 land.

## Honest caveats

- Lab LCP and CrUX field LCP are different numbers. Even a large lab improvement takes ~28 days to move the
  GSC "Page experience" report, since CrUX is a trailing 28-day p75 of real users.
- These simulated numbers are pessimistic relative to typical real-world mobile; the *relative* deltas
  between before and after are the trustworthy signal, not the absolute values.
- I am confident on fixes 1, 3a and 3b. I am **not** confident on fix 2a landing cleanly without live
  iteration, and 3c/4 are decisions I need from you rather than engineering judgment.
