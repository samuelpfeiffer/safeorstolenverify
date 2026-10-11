# Agency-published stolen items: monitor, records upload, city stats

Queued after the report-stolen work, which is still unfinished. Nothing here gets built until you approve, and Phase 1 ends with a report to you before any monitoring code is written.

## Phase 1 — Research report (no code)

For each agency (Phoenix, Mesa, Tempe, Glendale, Peoria, Scottsdale, Chandler, Gilbert PD, Maricopa County Sheriff's Office, Arizona DPS), I check its official website, newsroom, RSS feeds and open-data portal (for example the Phoenix, Mesa, Tempe, Scottsdale and Chandler open-data sites) and report:
- Does it publish stolen vehicle or stolen property details? Where, in what format (web page, RSS, CSV/API), and how often?
- Which identifiers it actually includes (plate, VIN, serial, make/model).
- What its robots.txt says for that path, and what its terms or data license say about reuse.
- My verdict: OK to ingest, OK with limits, or skip.

Skipped no matter what: Facebook, X, Instagram, Nextdoor, scanner and radio archives, and any page whose robots.txt or terms forbid automated access. You approve the source list before Phase 2.

Expectation: many agencies only post stolen items on social media, or post crime stats without identifiers. The research may find only a few usable sources. If so, the records upload (Part B) becomes the main way data comes in.

## Phase 2 — One shared review queue (needed for A and B)

- A new private list, "agency stolen records", holds: item type, plate + state, VIN, serial, year/make/model/color, agency, report or case number, date posted or reported, link to the original, source type (agency post or public records), status, and expiry date.
- No name, address, phone, email or free-text victim fields exist anywhere in it. Text from posts is also scanned for phone numbers and street addresses, and those are removed before saving.
- Statuses: pending review → approved (live) / rejected. Approved records can be marked recovered, or they expire.
- Expiry: 90 days after approval unless an admin re-confirms it (re-confirming adds another 90 days). Expired and recovered records never match a check.
- Admin-only: only admins can see it. Nothing shows in checks until an admin approves it.
- A new "Agency records" tab on the existing admin review page: approve, reject, mark recovered, re-confirm, and bulk-approve an upload batch.

## Phase 3 — Results in checks

When a check matches an approved, unexpired record, the result shows a separate notice, labelled "Agency-published", that is visually distinct from SafeOrStolen user reports:
- Agency post: "Posted as stolen by [agency] on [date]. Do not buy. Contact [agency]." plus the link to the original post.
- Records upload: "From [agency] records, report dated [date]. Do not buy. Contact [agency]."

It counts as a real theft database match under the existing verdict rules, so the result is STOLEN. If you'd rather it show as a strong warning without the STOLEN verdict, say so. Identifiers stay partly hidden as they are now.

## Phase 4 — Records upload (Part B)

Admin page at /admin/agency-records/upload:
1. Upload a CSV or Excel file and pick the agency.
2. Match the file's columns to our fields (report number, date, plate/state, VIN, serial, make/model, status, agency). The site guesses the matches and you confirm them.
3. Any column not matched to one of our fields is dropped, never saved. Columns that look like personal info (name, address, phone, DOB, email, owner, victim) are flagged and can't be matched to anything.
4. Preview: row count, invalid VINs, duplicates, and rows already marked recovered in the file.
5. Import puts everything into the review queue as one batch, under the same labelling, expiry and approval rules.

## Phase 5 — Police-post monitor (Part A, approved sources only)

- A scheduled job runs once or twice a day, only against the sources you approved.
- It respects robots.txt on every run, identifies itself honestly, and keeps requests slow.
- It reads RSS feeds, open-data files or official pages using fixed rules for each source. It doesn't use AI, since the AI notes credits are out.
- It saves only the identifier fields above, skips posts it has already seen, and sends everything to the review queue.
- If a source fails, the job pauses that source and shows the problem on the admin page.

## Phase 6 — Optional: cited city theft numbers (Part C)

This happens only where a city's open-data license allows reuse. It adds a small "Vehicle thefts in [city], [period]: N" line on that city's page (for example /stolen-check-phoenix), naming the source and the data date. The number comes from the open-data file, is refreshed monthly, and is hidden if the data is stale or missing. No numbers get added for any city without a confirmed source.

## Privacy, terms, honesty

- Privacy policy: a plain-words line saying we show stolen-item details published by police agencies or obtained through public records, and never personal information. I'll show you the wording before it goes live.
- llms.txt, ai.txt and the data-sources page get updated only for sources that actually go live, naming each agency.
- No "nationwide" or "police database" claims beyond the named agencies.

## Questions to settle at approval

1. Should agency matches give a STOLEN verdict (default) or a warning only?
2. Is 90-day expiry OK for public-records uploads too, or should those use the report date plus a longer window?

## Technical details

- New table `agency_stolen_records`, admin-only through `has_role`, with the server writing to it. Each table gets its own grants and RLS. The existing `theft_records` table gets checked first: if it fits, I extend it instead.
- Matching runs in `engine.server.ts` as a new source, `Agency_Records`, checked in parallel with the SafeOrStolen reports.
- The scheduler is a TanStack server route under `/api/public/agency-monitor`, protected by a shared secret and called by pg_cron. No new Edge Functions, since we're at the limit. It uses a database lock and a cap on how much work each run does.
- The upload is parsed in the browser (CSV, and the xlsx library for Excel files — a new dependency), then sent to `reports-api` with new admin actions.
- City stats are stored in a small `city_theft_stats` table with source URL, license and date, and rendered on the server.
