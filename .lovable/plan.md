# Definitive Item Guides and Content Consolidation

## Goal
Create one authoritative answer page and one clear verification tool per item type, remove unsupported claims and reviews, retire CheckMEND content, and preserve every retired URL with a permanent redirect.

## Confirmed current state
- The site has active duplicate routes across phone, firearm, bicycle, laptop/electronics, tools, boat, plate, and marketplace topics.
- Permanent redirects are maintained in the existing redirect map and generated deployment/prerender flow; the sitemap and AI-facing text files also list many duplicate pages.
- Multiple hard-coded testimonial collections have no review URL or other provenance. These include the homepage quotes, seller quotes, item-page quotes, testimonial carousels, and success stories.
- `/blog/top-10-stolen-item-checkers`, `/best-stolen-item-checkers-2026`, and `/blog/best-stolen-item-checkers-2026` are primarily competitor/ranking content with unsupported prices, ratings, or comparative claims.

## 1. Remove the remaining unsupported copy
- Rewrite the homepage FAQ to say SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis.
- Replace seller speed, price, offer, lowball, and haggling statistics with plain benefits: a shareable verification record gives buyers something concrete to review and helps sellers answer legitimacy questions upfront.
- Rewrite the PS5 guide to describe SafeOrStolen reports, public web results, and AI analysis only.
- Remove every customer quote, star rating, subscriber badge, “verified customer” label, recovery story, and numerical customer outcome that lacks a real source URL or stored provenance.
- Replace removed testimonial sections with factual product benefits or the four verified press releases. Keep the Trustpilot profile link without a rating or quoted review.
- Keep founder/press quotations only when they are clearly attributed as company statements, not customer reviews.

## 2. Retire CheckMEND and unsupported ranking content
- Remove CheckMEND from pricing, FAQs, phone/app pages, shared comparison components, navigation, schemas, metadata, blog indexes, sitemap sources, and all AI-facing text files.
- Remove unsupported competitor prices, rankings, ratings, app-availability claims, and “better/faster/only” language.
- Retire the three broad “best checker” pages because their main purpose is unsupported competitor ranking; redirect them to the general item guide hub.
- Preserve unrelated, factual pages only when they answer a distinct question without unsupported comparisons.

## 3. Build or upgrade the definitive guides
Each guide will include a 2–3 sentence direct answer, identifier locations, step-by-step options with confirmed cost and purpose, red flags, what to do after a stolen result, an honest SafeOrStolen section for buyers and sellers, Proof of Clean Purchase positioning, visible FAQs, matching HowTo and FAQPage schema, Samuel Pfeiffer as author, and `2026-09-24` as the modification date.

Canonical guide/tool pairs:

| Topic | Definitive guide | Tool |
|---|---|---|
| Phone / IMEI | `/how-to-check-if-phone-stolen` | `/imei-checker` |
| iPhone | `/blog/how-to-check-if-iphone-stolen` | `/imei-checker` |
| Firearm | `/how-to-check-if-gun-is-stolen` | `/firearms-check` |
| Bicycle / e-bike | `/how-to-check-if-bike-stolen` | `/check-bike` |
| Laptop / electronics | `/how-to-check-if-laptop-stolen` | `/serial-number-checker` |
| Power tools | `/how-to-check-if-tools-stolen` | `/serial-number-checker` |
| Boat | `/how-to-check-if-boat-stolen` | No separate marine lookup claim; direct readers to identifier and official-record checks |
| License plate | `/how-to-check-if-license-plate-stolen` | `/license-plate-lookup` |
| Marketplace listing | `/how-to-tell-if-marketplace-item-is-stolen` | `/marketplace-url-checker` |
| Bought stolen item | `/what-to-do-if-you-bought-something-stolen` | `/verify` where an identifier is available |
| All item types | `/how-to-check-if-item-stolen` | Links to every guide and matching tool |

The existing car guide and VIN tool remain unchanged except for new cross-links.

## 4. Full proposed redirect map
These are the new consolidation redirects. Existing unrelated legacy redirects remain in place.

### CheckMEND and ranking pages
```text
/vs-checkmend                              → /imei-checker
/blog/checkmend-has-no-app                 → /imei-checker
/vs/checkmend                              → /imei-checker
/comparison-checkmend                      → /imei-checker
/app/vs-checkmend                          → /imei-checker
/blog/top-10-stolen-item-checkers          → /how-to-check-if-item-stolen
/best-stolen-item-checkers-2026            → /how-to-check-if-item-stolen
/blog/best-stolen-item-checkers-2026       → /how-to-check-if-item-stolen
```

### Phone and IMEI
```text
/blog/how-to-check-if-phone-stolen         → /how-to-check-if-phone-stolen
/blog/check-if-phone-stolen-guide          → /how-to-check-if-phone-stolen
/blog/phone-verification-guide             → /how-to-check-if-phone-stolen
/blog/complete-imei-guide-protect-yourself → /how-to-check-if-phone-stolen
/blog/buying-used-phone-checklist          → /how-to-check-if-phone-stolen
/is-my-phone-stolen                        → /how-to-check-if-phone-stolen
/check-stolen-phone                        → /how-to-check-if-phone-stolen
/stolen-phone-checker                      → /how-to-check-if-phone-stolen
/check-android-phone-stolen                → /how-to-check-if-phone-stolen
/check-imei-stolen                         → /imei-checker
/check-phone                               → /imei-checker
/imei-check                                → /imei-checker
/phone-blacklist-check                     → /imei-checker
/imei-checker-app                          → /imei-checker
/blog/like-carfax-for-phones               → /imei-checker
/comparisons/best-free-imei-checkers-2025  → /imei-checker
/comparisons/safeorstolen-vs-imei-info     → /imei-checker
/vs-imeiinfo                               → /imei-checker
/vs-stolenphonechecker                     → /imei-checker
/app/stolen-phone-checker                  → /imei-checker
/blog/imei-checker-app-download            → /app
```

### iPhone
```text
/check-iphone-stolen                       → /blog/how-to-check-if-iphone-stolen
/is-my-iphone-stolen                       → /blog/how-to-check-if-iphone-stolen
```

Keep as distinct questions: `/blog/what-is-a-blacklisted-imei`, `/blog/icloud-locked-phone-meaning`, `/blog/how-to-find-imei-number`, and `/blog/bought-stolen-phone-what-to-do`.

### Firearms
```text
/blog/how-to-check-if-gun-is-stolen        → /how-to-check-if-gun-is-stolen
/is-this-gun-stolen                        → /how-to-check-if-gun-is-stolen
/blog/firearm-serial-number-verification   → /how-to-check-if-gun-is-stolen
/check-gun                                 → /firearms-check
/check-firearm                             → /firearms-check
/check-firearm-serial                      → /firearms-check
/firearms-serial-number-check              → /firearms-check
/gun-serial-number-lookup                  → /firearms-check
/stolen-gun-database                       → /firearms-check
```

Keep and fact-check as distinct questions: `/blog/atf-gun-serial-number-check`, `/blog/gun-show-serial-number-check`, `/blog/hotgunz-database-guide`, `/blog/state-stolen-gun-database-guide`, and `/state-firearm-transfer-laws`.

### Bikes and e-bikes
```text
/blog/bicycle-stolen-serial-number-check   → /how-to-check-if-bike-stolen
/is-this-bike-stolen                       → /how-to-check-if-bike-stolen
/check-bicycle-stolen                      → /check-bike
/check-ebike                               → /check-bike
/vs-bikeindex                              → /how-to-check-if-bike-stolen
```

### Laptops, electronics, and tools
```text
/is-this-laptop-stolen                     → /how-to-check-if-laptop-stolen
/check-laptop-stolen                       → /how-to-check-if-laptop-stolen
/blog/protect-yourself-buying-used-electronics → /how-to-check-if-laptop-stolen
/check-laptop                              → /serial-number-checker
/check-electronics                         → /serial-number-checker
/check-tools                               → /how-to-check-if-tools-stolen
/check-power-tools-stolen                  → /how-to-check-if-tools-stolen
```

Product-specific PS5, Xbox, camera, tablet, appliance, watch, and jewelry pages remain because they answer distinct item questions; their unsupported testimonials and source claims will be removed.

### Boat and license plate
```text
/check-boat                                → /how-to-check-if-boat-stolen
```

All state license-plate pages remain. `/license-plate-lookup` remains the tool; the new plate guide explains public-access limits and links to every state page.

### Marketplace safety
```text
/facebook-marketplace-safety               → /how-to-tell-if-marketplace-item-is-stolen
/facebook-marketplace-stolen-check         → /how-to-tell-if-marketplace-item-is-stolen
/blog/facebook-marketplace-scams-guide     → /how-to-tell-if-marketplace-item-is-stolen
/blog/facebook-marketplace-scams           → /how-to-tell-if-marketplace-item-is-stolen
/blog/ultimate-marketplace-buyers-guide    → /how-to-tell-if-marketplace-item-is-stolen
/offerup-safety                            → /how-to-tell-if-marketplace-item-is-stolen
/craigslist-safety-verification            → /how-to-tell-if-marketplace-item-is-stolen
/guides/offerup-scam-protection            → /how-to-tell-if-marketplace-item-is-stolen
/guides/verify-craigslist-items            → /how-to-tell-if-marketplace-item-is-stolen
/offerup-verify-not-stolen                 → /marketplace-url-checker
/ebay-stolen-item-check                    → /marketplace-url-checker
/mercari-stolen-check                      → /marketplace-url-checker
/poshmark-stolen-check                     → /marketplace-url-checker
/letgo-stolen-check                        → /marketplace-url-checker
```

Keep `/scam-checker` and `/marketplace-advisor` because they are distinct shipped AI workflows.

## 5. Research and honesty controls
- Research outside resources from official pages only and link those pages directly.
- State costs only when the official source confirms them; otherwise omit the price.
- SafeOrStolen coverage remains limited to its own stolen-item reports, public web results, AI analysis, BikeIndex for bicycles, HotGunz for firearms, and IMEI.info device details.
- Outside resources are clearly presented as checks the reader performs themselves.
- Firearm guidance will explain that private buyers cannot query NCIC; police may run a serial within their authorized process. State online lookup references will appear only after confirmation from the state’s official site.
- Boat guidance will cover HIN, official Coast Guard documentation tools when applicable, and state registration/title resources without claiming SafeOrStolen queries them.
- Proof of Clean Purchase remains a timestamped verification record, never a guarantee, title, ownership proof, or legal document.

## 6. Search, navigation, and technical cleanup
- Give every surviving/new guide unique metadata, self-canonical, social metadata, visible schema-matching text, internal links, and the required author/date.
- Update the hub, breadcrumbs, related links, homepage links, footer resources, blog index, and all in-page links so nothing points through a redirect.
- Remove retired URLs from sitemap sources and all `llms.txt` variants; add only the surviving canonical guides/tools.
- Update prerendered crawler copies for every changed and retired route.
- Preserve permanent redirects through the project’s existing redirect and prerender mechanisms; do not delete historical redirect entries.

## 7. Verification and delivery
- Validate every new/changed guide on desktop and mobile, including schemas, canonicals, links, and visible FAQ parity.
- Search rendered pages and crawler copies for CheckMEND, unsupported seller statistics, unsupported testimonials, and prohibited source claims; expected count is zero outside historical code comments that are not served.
- Verify every redirect above returns HTTP 301 and lands directly on its final URL without chains.
- Confirm retired URLs are absent from sitemap and AI-facing text files.
- Publish once the complete set passes locally, then repeat the redirect/page/schema checks on `safeorstolen.com`.
- Deliver the final list of new and materially changed guide URLs for Google and Bing submission, plus exact live redirect results.

## Scope note
This consolidation does not alter verification logic, authentication, payments, databases, legal pages, or the six supported item categories.
