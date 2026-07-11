# SafeOrStolen — Topical Authority Build Plan

This is a large 5-prompt scope. I'll ship it in phases so you can review each phase before the next starts. Each phase is a real, working milestone — not a partial skeleton.

## Phase 1 — Pillar architecture (Lovable Prompt 1)
Build the four pillar pages using the exact copy you provided:
- `/check-phone` — "Check If a Phone Is Stolen Before You Buy"
- `/check-bike` — "Check If a Bike Is Stolen"
- `/check-gun` — "Check a Gun Serial Number Before You Buy"
- `/check-vin` — "Check a VIN for Theft and Title Problems"

Each page:
- Single H1 with the target phrase, unique title tag + meta description you supplied
- Existing verification tool component embedded directly under the H1, pre-configured to the item type (phone/IMEI, bike serial, gun serial, VIN)
- Body sections from your copy (how to find the identifier, what we check, honest limits, "already bought?" callout)
- "Related guides" card grid linking down to the cluster articles for that pillar
- Canonical URL, OG tags, mobile-first, lazy-load below the fold
- Added to sitemap and route validator
- Wired into TopNavigation "Resources" dropdown and Footer

Does not touch the home page or the check tool's logic.

## Phase 2 — Blog cluster system (Lovable Prompt 2)
Build a reusable article template and publish all 15 cluster routes as stubs wired to the pillar structure, then fill content:
- Template: H1, AuthorBio byline, "Last reviewed" date, pillar CTA banner after paragraph 2, FAQ accordion, "Related guides" footer linking parent pillar + 2 siblings, breadcrumbs
- 15 routes grouped under 4 pillars exactly as you specified
- Internal linking (pillar ↔ cluster ↔ siblings) generated from the grouping map — no manual link maintenance
- I'll write the full 800–1,200-word article bodies from the briefs you provided, starting with the 5 phone-cluster articles (highest search volume), then bikes, guns, vehicles

I'll do phone cluster in this phase; bikes/guns/vehicles clusters in a follow-up so you can review the template + first 5 articles before I generate the other 10.

## Phase 3 — E-E-A-T trust layer (Lovable Prompt 3)
- `/editorial-standards` page with the exact copy you provided
- `AuthorBio` component (Samuel Pfeiffer, founder bio, links to About)
- Per-page editable "Last reviewed" date field
- `Sources` component (styled "Sources & further reading" block with follow links)
- Footer links to `/editorial-standards` and `/about`

## Phase 4 — Schema + LLM SEO (Lovable Prompt 4)
- Organization schema on home
- WebApplication schema on the 4 pillars (SecurityApplication, free offer)
- Article schema on every blog post (author = Person: Samuel Pfeiffer, dates from Last-reviewed)
- FAQPage schema auto-generated from each article's FAQ accordion
- BreadcrumbList schema from breadcrumbs
- Update `public/llms.txt` with site description, 4 pillar URLs, hub URLs
- Regenerate `sitemap.xml`: pillars 0.9, hubs 0.8, articles 0.7
- Audit every new page for exactly one H1 and unique title/meta

Coordinates with your existing schema registry / SSR setup — no duplicate schemas (per your `HomeStructuredData` note).

## Phase 5 — Linkable assets (Lovable Prompt 5)
- `/stolen-property-statistics` — data-driven hub. Editable data array (`stat, label, source, sourceUrl, year`), category sections (Phones/Bikes/Firearms/Vehicles), 2–3 recharts charts, "Cite this page" box, Dataset schema. **I will not invent statistics** — I'll seed the array with placeholder entries clearly marked `TODO: verify source` and you (or your team) fill in real sourced numbers before publish.
- `/receiving-stolen-property-laws` — 50-state filterable/searchable table (state, statute, felony threshold, notes), per-state anchor IDs, "not legal advice" disclaimer, editable data array with TODOs for statute values.
- `/templates` — page with 3 download cards (used-phone receipt, bike bill of sale, firearm bill of sale). **You upload the PDFs** to `/public/templates/` — I'll wire the download buttons.
- Footer "Resources" section + relevant pillar-page links to both hubs.

## What I need from you along the way
- **Phase 5:** the 3 template PDFs, and the real sourced stats/statute values (I will not fabricate)
- **Phase 3:** confirm the founder bio one-liner (I'll draft from your Our Story page unless you paste a different one)
- Everything else: I have all the copy I need from your message.

## Execution order (matches yours)
1. Phase 1 now
2. Phase 2 (phone cluster) next
3. Phases 3 + 4 together
4. Phase 5 (with TODOs where real data is required)
5. Remaining cluster articles (bikes → guns → vehicles), 2–3 at a time

## Technical notes
- Reuses the existing verification tool component — I won't fork or duplicate it
- Uses your existing `SEOHead`, `BlogLayout`, `BlogPostTemplate`, `FAQSchema`, `BreadcrumbSchema`, `RelatedPagesSection`, and schema-registry patterns
- All new routes added to `sitemapRouteValidator.ts` and both sitemap files
- Follows your project memory: dark security-chic theme, orange primary, no blue, no "FREE" affiliate wording, no phone numbers, support@safeorstolen.com only, 800+ words per page, distinct indexable URLs, never delete URLs

Approve and I'll start Phase 1 immediately.
