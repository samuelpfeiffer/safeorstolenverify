# Project rules

## Owner rule clarification (Samuel, Nov 25 2026)
- Samuel: "only time i dont want you to edit something is if the URL is in top 3." Every other page should be improved (titles, content, links, schema). The lock follows current Search Console rankings (28 days, query + page): a page that leaves the top 3 is editable again.
- Nov 26 2026: Samuel approved additive sections on `/firearms-check` (title, H1, meta description and URL unchanged). Brand gun pages `/<brand>-serial-number-lookup` (data in `src/data/gunBrandStats.ts`) were added the same day.
- Open question for Samuel: whether a top-3 ranking for our own name ("safeorstolen") still locks a page (rule below). `/app` and `/download` were edited Nov 25 (screenshots, item types) before this was raised.
- Paid phone checks do search the lost/stolen phone blacklist again (verify-imei v95, Nov 23 2026); free checks don't. Check the deployed function before calling a source broken.

## Owner rule (Samuel, Nov 23 2026): top three is off limits
- If a page ranks in the top three on Google for any search, don't touch it. Leave it alone. This widens the #1 lock below to positions 1–3. Shared components and site-wide files that render on such a page count as editing it (example: `LimitPayOffer` renders on the homepage, `/firearms-check` and `/license-plate-lookup`, so it is locked).
- Until Samuel says otherwise, apply it to searches for our own name too (a page at position 1–3 for "safeorstolen" or "safe or stolen" is locked). This currently locks `/for-businesses`, `/imei-checker`, `/vin-checker`, `/app`, `/how-it-works`, `/news`, `/download` and `/for-law-enforcement` on top of the lists below.
- Check Search Console (query + page, last 28 days) before editing any page.

## Owner update (Samuel, Nov 9 2026)
- Proactively improve search visibility, LLM/GEO/AI-answer citations, Bing discovery, speed and monetization using verified evidence and measured results.
- Preserve every verified #1 ranking. This protection applies to Google and Bing, and to the page assets and shared dependencies that affect the winning page. Do not remove an existing protection just because a later data export omits that query.
- Tell Samuel about each newly verified #1 result, naming the exact query, platform, URL, observation date, and evidence. Historical entries below are historical evidence, not a fresh ranking check.
- Record AI-answer citations separately from search rankings; a citation is not proof of a #1 ranking or a permanent recommendation.
- Continue the existing requirement to check Search Console before editing public pages. Missing ranking data is not permission to edit a potentially protected page.

## Additional ranking protection (observed Nov 10, 2026 UTC)
Search Console through Windsor.ai, property `sc-domain:safeorstolen.com`, finalized October 10–November 6, 2026, query + page dimensions, returned average position exactly 1 for the customer searches below. These are low-volume observations (mostly 1–6 impressions), not a guarantee of current, nationwide or permanent #1 placement. Preserve the pages under the owner's rule nonetheless; do not remove historical locks above or below.
- `/firearms-check` — "how to run a gun serial number for free", "run gun serial number free", "free gun serial number lookup", "texas gun serial number lookup", "gun vin check free".
- `/check-ps5` — "how to verify ps5 serial number", "check my ps5 serial number", "can i track my ps5 if it was stolen", "how to check if ps5 is console banned".
- `/check-bike` — "bike serial number lookup free", "stolen bike serial number check free", "e bike vin lookup".
- `/arizona-license-plate-lookup` — "free license plate lookup", "license plate look up free", "stolen plate lookup", "vehicle license plate search". Owner-identity lookup queries are not claims that the product provides owner identities.
- `/stolen-database` — "gun serial number lookup free texas".
- `/how-to-check-if-boat-stolen` — "how to check if a boat motor is stolen".
- `/for-law-enforcement` — "police stolen property database".
- `/check-if-stolen` — "how to check if something is stolen".
- `/how-to-check-if-tools-stolen` — "stolen equipment lookup", "is this stolen", "probably stolen plasma cutter".
- `/check-gaming-console-stolen` — "probably stolen console", "probably stolen game console".
- `/blog/ps5-stolen-check-guide` — "how to check if ps5 is stolen".
- `/california-license-plate-lookup` — "license plate lookup san diego", "license plate".
- `/texas-license-plate-lookup` — "license plate lookup motorcycle".
- `/illinois-license-plate-lookup` — "plate number search".
- `/pennsylvania-license-plate-lookup` — "search car license plate", "is it stolen?".
- `/check-xbox` — "serial number".
- `/how-to-check-if-laptop-stolen`, `/serial-number-checker`, `/license-plate-lookup` also returned position-1 customer queries; their historical protections remain in force.
- `/pricing` returned only the branded query "safe or stolen" in this export; no customer-search position-1 row was present. This permits the isolated pricing-copy correction, not changes to shared components or locked pages.

## Owner rules (Samuel, Oct 30 2026) — follow these before anything else
- Never guess anything. Guessing is lying. Check the code, the live site, Search Console data or past work before stating something. If it can't be verified, say so.
- Once a page ranks #1 on Google for a search, do not edit that page. Say that no further work is needed because it already ranks #1.
- Once something is at its best (top ranking, best click rate, working feature), protect it. Don't change what is already working. Before editing any page, check its Search Console rankings first; if it holds #1 for any search, leave it alone.

- No pages or copy comparing SafeOrStolen with other services or data sources (we rely on some of them). Never criticize, rank against, or name partners or suppliers.
- Never publish anything that could hurt SafeOrStolen if it were investigated: no claims we can't prove, no implied police or FBI access, no legal advice.

### Protected pages — rank #1 on Google for customer searches, DO NOT EDIT (checked Oct 31 2026)
Rule: a page is locked when it ranks #1 for a search a customer types to find a check. Searches for our own name ("safeorstolen", "safe or stolen") don't count, because people searching our name find us anyway. Re-check Search Console (last 28 days) before editing any page.
- / (homepage) — #1 for "free serial number search"
- /serial-number-checker — #1 for "serial number search by serial number", "product serial number check online free", "free serial number check", "model lookup by serial number free"
- /how-to-check-if-laptop-stolen — #1 for "check if laptop is stolen", "how to check if laptop is stolen"
- /license-plate-lookup — #1 for "stolen license plate lookup"
If asked to edit one of these, reply that no further work is needed because the page already ranks #1. Shared components and site-wide files that change these pages also count as editing them.

### Owner rule (Nov 7 2026): preserve and protect what helps and what ranks #1
Samuel's rule: we preserve and protect the pages, content and URLs that help us and those that rank #1.

What is protected:
1. **Pages that rank #1** for a customer search (list above, plus any new one found later).
2. **Pages that help**: any page that brings clicks, ranks in the top 10 for a customer search, or earns sign-ups or payments. Check Search Console (last 28 days) and payments before calling a page "not helping."
3. **URLs other sites point to**: every safeorstolen.com address used in press releases (PRLog), Trustpilot, Crunchbase, YouTube descriptions, outreach emails (Gunvera, Gun Tradition) and AI guide files (llms.txt, llms-full.txt, ai.txt).
4. **Content that works**: the titles, headings, answers and FAQs on those pages, and the shared parts that render them (header, footer, page templates, SEOHead, structured data).

How to protect it:
- **Never change, rename or delete a protected URL.** Never redirect it somewhere else. If a URL must move, ask Samuel first and use a single 301 to the closest matching page.
- **Don't rewrite protected content.** Only fix things that are false, broken or risky (wrong prices, banned claims, dead links, display bugs), keep wording changes as small as possible, and tell Samuel what changed and why.
- **Check before editing:** pull Search Console for the page first. If it ranks #1, leave it alone (see above). If it ranks in the top 10 or brings clicks, change it only with a clear reason and say so.
- **Additions over replacements:** to target a new search, add a new page or a new section instead of rewriting a page that already works.
- **Watch shared changes:** a change to the header, footer, link component, templates or redirect map touches every page, so test protected pages after it and confirm their titles, wording and links are unchanged.
- **After any change,** re-check the protected pages are live (200), with the same title and canonical, and tell Bing (IndexNow).

Pages that help right now (Search Console Oct 10 – Nov 6 2026), in addition to the #1 list above:
- /firearms-check — biggest traffic page; top 3–5 for gun serial lookups in GA, AZ, IN, TX, TN; #1 for "how to run a gun serial number for free"
- /check-ps5 — top 5–7 for PS5 serial number checks; second-biggest traffic
- /app — top 8 for "app to check gun serial number"; page in press releases
- /how-to-check-if-tools-stolen — top 3–5 for stolen tool serial lookups
- /check-xbox, /check-if-stolen, /imei-checker, /vin-checker, /check-bike, /stolen-database
- /blog/ps5-stolen-check-guide — #1 for "how to check if ps5 is stolen"
- /how-to-check-if-boat-stolen — #1 for "how to check if a boat motor is stolen"
- /arizona-license-plate-lookup, /gun-serial-number-lookup/georgia, /gun-serial-number-lookup/tennessee
- /blog/ncic-gun-serial-number-check, /how-to-track-a-serial-number (new, answer specific searches)


- Keep public police-search links in a shared presentation-only component; copy identifiers locally and never fetch linked search pages. This keeps external manual checks separate from verification providers.
- Share the exact manual-search URL list with the outbound-link guard and allow only those URLs, not whole agency domains, so unrelated outbound restrictions remain intact.

- Keep the plate-owner request kit isolated in `src/features/plate-owner`; generate requester name/address/VIN PDFs locally and persist only the approved purchase fields, so sensitive identity details never enter storage or Stripe metadata.
- Kit checkout must fail closed until its dedicated Stripe price and webhook isolation are configured; an unknown one-time price can otherwise alter verification entitlements through the legacy webhook.
- Resolve numbered retired blog series before database lookup and exclude retired slugs from discovery lists; this prevents duplicate records from overriding permanent redirects.

- Nov 19 2026 data moat: every victim report needs a police report number plus an uploaded photo/PDF of the report (private `item-photos/<user>/police-*`), and waits in admin review; approving sets `police_report_verified`. Never show the upload or the number publicly.
- Every check through /verify-api is logged to `search_events` with the identifier, IP and browser SHA-256 hashed (never raw). It powers the "checked from many places" notice (5+ connections in 7 days = watch, 15+ = high), the admin hotlist, and burst limits (120/min, 300/hour, 1000/day per account or connection). Keep limits above one 100-row bulk run.

## AI-answer citations (recorded separately from rankings)
- Nov 21 2026, Google AI Overview, query "how to check if tools are stolen" (Samuel's own search, personalized, Peoria AZ): the overview names SafeOrStolen ("Check serial numbers against theft reports using SafeOrStolen (safeorstolen.com), which notes its first check is free") and the organic results list /how-to-check-if-tools-stolen. Evidence: Samuel's pasted results page. A citation is not proof of a ranking and may change. Protect /how-to-check-if-tools-stolen (already on the "pages that help" list).
- Nov 23 2026, Google AI Overview, query "how to check if tools are stolen" (Samuel's search, personalized, Peoria AZ): the overview's first sentence names SafeOrStolen ("registries like Power Tool Safe or SafeOrStolen"), lists it again under community registries, cites /how-to-check-if-tools-stolen, and the page is in the organic results. Evidence: Samuel's pasted results page. Same day, not cited: "how to check if gun is stolen", "how to check if a car is stolen", "how to check if a cell phone is stolen". The tools page's guide format (short answer, steps, FAQ) is the model for the new /how-to-check-if-a-gun-is-stolen.
- Same day, not cited: "how to check if a car is stolen" (overview cites NICB, TheftAZ, iSeeCars, U.S. News; our car pages sit at positions 30–55) and "how to check if something is stolen" (overview cites StolenRegister, Secure Asset Register, NICB, Quora; /check-if-stolen's "#1" lock rests on a single impression).
