
Goal: eliminate the technical causes behind your GSC failures (especially “Excluded by ‘noindex’ tag”, “Page with redirect”, and “Duplicate without user-selected canonical”) by ensuring:
1) every “should-redirect” legacy URL returns a real server-side 301 before React loads,
2) every “missing dynamic content” URL returns a true 404 + noindex (not a 200 “Article Not Found” shell),
3) every indexable (200) page has exactly one canonical (https://safeorstolen.com/…) and consistent robots meta (index, follow).

What I verified in production (important)
- https://safeorstolen.com/arkansas-stolen-item-check currently renders the React NotFound UI (no 301), which means Google is seeing a 200-style SPA fallback + “noindex” meta from your NotFound SEO. This is exactly why GSC’s “Excluded by noindex” validation fails.
- https://safeorstolen.com/app/law-enforcement also renders NotFound (no 301), same root cause.
- https://safeorstolen.com/database renders NotFound (no 301), and it’s listed in your “Page with redirect” report but is not redirecting right now.
- https://safeorstolen.com/blog/imei-checker-guide-2025 returns “Article Not Found” from DynamicBlogPost. Critically, DynamicBlogPost does not emit SEO tags / status handling on the not-found branch, which can create canonical ambiguity + “currently not indexed / duplicate” behaviors.

Scope (kept tight)
- Only SEO/indexing mechanics: redirects, canonical consistency, missing SEO on not-found states, and removing/avoiding conflicting head tags.
- No new content writing, no design changes, no feature work outside indexing.

Plan of action

Phase 1 — Categorize every GSC example URL into one of 3 correct outcomes
I will take each URL in your screenshots and classify it into:
A) Must be a real page (200 + index, follow) → ensure route exists + has proper SEOHead/PageSEO.
B) Must be a legacy URL (per your URL preservation mandate) → must 301 to the closest canonical, indexable page.
C) Must be truly gone / invalid → must return a true 404 (and noindex) consistently.

Deliverable: a mapping table (URL → action → destination/expected status) used to implement the fixes and later included in the final “changes summary” table.

Phase 2 — Make legacy URLs return real server-side 301s (so Google never sees NotFound/noindex HTML)
Your repository already contains a comprehensive public/_redirects file, but production behavior shows those redirects are not being applied on safeorstolen.com right now.

2.1 Add equivalent 301 rules to public/.htaccess (Apache)
- Implement explicit RewriteRule 301 redirects for the exact URLs in your GSC “Excluded by noindex tag” list and “Page with redirect” list.
- Add a few safe pattern-based redirects to reduce future GSC churn without catching real routes:
  - ^/app/(.+)$ → /app (except the known real /app/* feature routes)
  - ^/(.+)-stolen-item-check$ → /verify
  - known check-* long-tail item URLs (dslr-camera, violin, rolex, instruments, etc.) → /serial-number-checker
  - /database → /stolen-database
  - /android-app, /ios-app, /mobile-app, /verification-app, /mobile-verification → /app or /download (matching your intended canonical)
  - /vin → /vin-checker
  - international VIN check variants like /uk-vehicle-check, /australia-vin-check → /vin-checker
- Ensure these 301 rules are placed before the SPA fallback rewrite in .htaccess.

2.2 Keep public/_redirects as well (dual-host compatibility)
- Retain and/or extend public/_redirects so if you ever serve through a platform that honors it, behavior matches Apache.

Success criteria after Phase 2
- For a sample set of URLs from each GSC list, safeorstolen.com returns a 301 (not a rendered NotFound page).
- In GSC, those URLs migrate from “Excluded by noindex” to “Page with redirect” (expected), and eventually stop being a recurring validation failure.

Phase 3 — Fix “Dynamic content not found” pages to return true 404 + noindex + stable canonical (prevents canonical/duplicate issues)
3.1 DynamicBlogPost not-found branch
Currently, when the post doesn’t exist:
- it renders “Article Not Found” UI
- it does NOT render PageSEO/SEOHead
- it does NOT set a 404 status hint (StatusCodeHandler)

Fix:
- In the (error || !post) branch add:
  - <StatusCodeHandler statusCode={404} noIndex />
  - <SEOHead title="Blog Post Not Found" description="…" noIndex canonical="/blog" />
This prevents Google from treating these as indexable duplicates and makes missing slugs behave like real 404s.

3.2 Apply the same pattern anywhere else we have “not found” UIs for dynamic routes
- Audit other dynamic routes (e.g., YouTube watch pages, item detail pages) for missing-entity behavior and ensure they emit:
  - StatusCodeHandler 404 + noIndex
  - SEOHead with canonical pointing to the parent index page (e.g., /youtube or /stolen-database)

Success criteria after Phase 3
- Missing dynamic URLs stop producing ambiguous “duplicate” indexing signals.
- These pages become clearly 404/noindex, which is the correct state.

Phase 4 — Eliminate canonical/robots conflicts by consolidating meta responsibilities
You have multiple Helmet-based components that can inject robots/canonical/meta in parallel with SEOHead/PageSEO (examples: StateVinPageTemplate, BusinessPageTemplate, some traffic landing components). This is a common cause of “Duplicate without user-selected canonical” because Google sees inconsistent or multiple canonicals.

4.1 Targeted consolidation (minimal changes, focused on URLs that appear in your GSC duplicate list)
- For state license plate pages (these show up in “Duplicate without user-selected canonical” examples), replace direct <Helmet> meta/canonical/robots usage with SEOHead (or PageSEO) so:
  - canonical always uses getCanonicalUrl and https://safeorstolen.com
  - robots always comes from robotsPolicy (index, follow for public pages)
- Keep Helmet usage only for JSON-LD scripts where needed (or pass schemaJson to SEOHead/PageSEO), but ensure canonical/robots/title/description are set in one place per page.

4.2 Enforce “single canonical tag” rule on rendered pages
- Remove any component that adds an extra <link rel="canonical"> unless it is the one canonical source (SEOHead/PageSEO).
- Remove extra <meta name="robots"> injections outside SEOHead/PageSEO/robotsPolicy unless they are for explicit 404/noindex states.

Success criteria after Phase 4
- For example URLs like /oklahoma-license-plate-lookup, Google can consistently detect a single canonical pointing to itself on https://safeorstolen.com/….
- “Duplicate without user-selected canonical” should trend downward after recrawl.

Phase 5 — Re-verify sitemap correctness (no redirects, no private routes, canonical domain consistency)
Even though sitemap.xml is already in good shape, after redirect/route changes we’ll re-check:
- Every sitemap URL exists as a real route and returns 200 with index, follow
- No redirecting URL appears in sitemap.xml
- Canonical for every sitemap URL uses https://safeorstolen.com (already enforced by canonicalUtils; we will re-audit any custom canonicals like the one in VerifyPawnshopsPage using a full absolute URL)

Phase 6 — Verification workflow (so we can honestly report “fixed”)
6.1 Automated spot checks (during implementation)
- Re-test a representative sample from each GSC category:
  - noindex-excluded set: /arkansas-stolen-item-check, /app/law-enforcement, /verification-app, /check-fender-guitar, /australia-vin-check
  - redirect set: /database, /android-app, /developer-portal (if still present), a few city/* routes, etc.
  - duplicates set: /oklahoma-license-plate-lookup, /alabama-license-plate-lookup
  - dynamic blog missing slug: /blog/imei-checker-guide-2025
- Confirm expected outcome: 301 vs 200 index vs 404.

6.2 GSC steps you’ll perform after deploy (required; Google-side)
- Re-run URL Inspection for a handful of the previously failing “noindex excluded” examples and confirm Googlebot now sees a redirect (or a proper 404 where appropriate).
- Click “Validate Fix” again only after the above checks show correct server behavior.

Final deliverables you’ll get from me after implementation (in Default mode)
1) A markdown summary table like:
   | URL group / example | What was wrong | Fix applied | Expected new GSC status |
2) A precise file-level change log (file → what changed → why).
3) A “post-change audit” checklist confirming:
   - redirects now occur server-side (not via NotFound),
   - dynamic not-found states are true 404/noindex,
   - canonical domain is consistently https://safeorstolen.com,
   - no sitemap URLs redirect.

Files I expect to modify (tight set)
- public/.htaccess (add/organize 301 rules before SPA fallback)
- public/_redirects (only if we need parity or missing mappings like /database → /stolen-database)
- src/pages/blog/DynamicBlogPost.tsx (add SEO + 404 handling on not-found)
- Potentially a small number of shared templates currently setting canonical/robots directly with Helmet (only those implicated by the GSC “duplicate canonical” examples)

Notes / constraints
- I can remove technical blockers, but Google’s “Crawled – currently not indexed” can still persist for non-technical reasons (content quality, perceived duplication, crawl budget). This plan focuses on removing the blockers that your screenshots clearly indicate (bad noindex exposure, missing redirects, missing canonical signals, and improper 404 handling).
