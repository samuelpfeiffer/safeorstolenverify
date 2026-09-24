# Next phase: victim guides and more buyer guides

Every guide uses the same format as the existing item guides: a direct answer at the top, where to find the identifier, real steps with their cost and purpose, official links, red flags or mistakes to avoid, an honest description of what SafeOrStolen does, FAQs, HowTo and FAQPage schema that match the visible text, Samuel Pfeiffer as author, and today's date as the last-updated date. Each official fact gets checked on the official site before it goes in. If I can't confirm it, it stays out.

## A. Victim guides (6 new pages)

Each one ends with "Log it at /report-stolen." That page lets you add your item to SafeOrStolen's reports, so buyers who check that identifier see it.

| # | New URL | Main content |
|---|---|---|
| 1 | /what-to-do-if-your-phone-is-stolen | Apple Find My and Google Find My Device (mark as lost, erase), ask your carrier to suspend the line and blacklist the IMEI, how to find your IMEI without the phone (box, carrier account, Apple/Google account pages), police report, insurance claim, change passwords |
| 2 | /what-to-do-if-your-car-is-stolen | Confirm it wasn't towed or repossessed, call police with the VIN and plate, notify your insurer and lender, connected-car app or tracker, toll and plate notifications only where confirmed |
| 3 | /what-to-do-if-your-bike-is-stolen | Police report with serial number, mark it stolen on Bike Index and 529 Garage, watch marketplaces |
| 4 | /what-to-do-if-your-gun-is-stolen | Report to local police right away with make, model, and serial. Federal licensees report to ATF (links to the official ATF page). State reporting deadlines appear only for states whose official statute I can confirm; every other state gets "check your state law" |
| 5 | /how-to-find-stolen-item-for-sale-online | Search marketplaces by model, area, and photos, save alerts, keep evidence. Never confront the seller or set up a meetup yourself. Give the police the listing |
| 6 | /how-to-report-a-stolen-item | Hub: police report first, then carrier/insurer/registry for each item type, then /report-stolen. Links to guides 1–5 |

No existing page covers the victim side. /what-to-do-if-you-bought-something-stolen and /blog/bought-stolen-phone-what-to-do cover buyers, so they stay as they are and get cross-links.

## B. Buyer guides (upgrade existing pages where they exist)

| # | Question | URL | Action |
|---|---|---|---|
| 7 | Motorcycle | /check-motorcycle-stolen-vin | Upgrade in place to guide standard, keep URL |
| 8 | Trailer, ATV, dirt bike | /how-to-check-if-trailer-atv-stolen | New (no existing page). Covers VIN/PIN locations, title status, and state off-highway registration as general guidance only |
| 9 | Watch | /check-watch-stolen | Upgrade in place, keep URL |
| 10 | Camera or lens | /check-camera-stolen | Upgrade in place, keep URL |
| 11 | AirPods, Apple Watch, iPad | /how-to-check-if-apple-device-stolen | New. Apple's own guidance on Activation Lock, pairing, and serial checks. /check-tablet-stolen stays as it is and links here |
| 12 | Is buying stolen property illegal if you didn't know? | /is-it-illegal-to-buy-stolen-property | New. General legal information with a clear "not legal advice" notice. Knowledge/intent concept explained generally, with the federal statute only if confirmed on the official source (uscode.house.gov). No state-specific claims unless confirmed |

The upgraded pages keep their URLs and canonicals. Content on them is replaced, not duplicated. I found no redirects that currently point away from these URLs.

## Linking and discovery
- /how-to-check-if-item-stolen hub: add the new buyer guides, plus a new "Had something stolen?" section linking guides 1–6.
- Footer resources: add "How to report a stolen item" and the victim-guide links.
- llms.txt (and llms-full.txt): add a victim-guides section and the new buyer guides.
- Sitemap: add the 8 new URLs (the 3 upgraded pages are already listed).
- Cross-links between related guides (for example, phone buyer guide and stolen-phone victim guide).

## Honesty rules applied
- Where it's relevant, each guide states plainly that SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis, plus Bike Index for bikes and HotGunz for firearms. It does not check police, carrier, insurance, NCIC, NICB, or DMV systems.
- No statistics or recovery rates unless they come from a named official source.
- /report-stolen is described accurately: it adds your item to SafeOrStolen's reports and does not file a police report.

## Delivery
1. Finish the current task first. The site-wide free-resource audit from the last request (item 3) is still open, so I'll ask whether to do it before this phase.
2. Build the 6 victim guides, then the 6 buyer guides, then the linking updates.
3. Refresh the search-engine copies of every new or changed page.
4. Publish, check each URL live (loads, canonical, schema, date), and send you the list of new URLs.

## Technical details
- Reuse `DefinitiveItemGuide` and add entries to `src/data/definitiveGuides.ts`. Victim guides use the same renderer with "Steps to take now" wording and a /report-stolen call to action (small optional prop).
- New route files under `src/routes/`, each with its own unique head metadata and self-canonical.
- The upgraded routes switch their component to the guide renderer. The old page components stay in the codebase unless they're unused.
- Run the capture script on every new or changed route.
