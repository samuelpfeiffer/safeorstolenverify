# Victim reports and "My items": growing SafeOrStolen's own stolen-item database

Queued **after** the seller share and badge work. Nothing here is built until you approve it.

## What exists today (checked)
- `/report-stolen` uses a 478-line form that saves straight from the browser into the stolen-items table. That table has **no rule that allows visitors to add rows**, so new reports are probably failing right now. The table holds only 2 reports.
- Checks already look up our own reports. They match **any** status, so a recovered item would still show as stolen. The result just says "found in SafeOrStolen registry", with no date and no police/user label.
- The site already sends email (Resend) from the existing watchlist feature.

## What you'll get

### 1. Quick report form (`/report-stolen`)
- A short, phone-friendly form on one screen. You must be signed in (free account); signed-out visitors see the same sign-in prompt as checks, and their entries are kept for after sign-in.
- Fields:
  - item type (all six types plus boats)
  - identifier (the label changes with the type: IMEI, VIN, serial, or HIN)
  - make/model
  - date stolen
  - city and state
  - police report number (optional, with a clear "strongly recommended" note)
  - how you want to be contacted (email, on by default)
  - description and up to 4 photos (optional)
- A required checkbox: "This report is true. False reports are prohibited and may be removed and reported to police." The terms page gets a matching short section. Legal pages change only after you see the wording.
- After you submit: a confirmation screen with next steps (police report, carrier/insurer). It also says plainly that this does not file a police report.

### 2. "My items" (register before theft)
- A new private page, `/my-items`, hidden from search engines. For each item: type, identifier, make/model, photos, and an optional proof-of-purchase upload (receipts stay private and only you can see them).
- A one-tap **"Mark stolen"** button. It reuses the saved details and asks only for the date, city and police number.
- Linked from the dashboard, plus a "Register your items for free" invitation on the victim guides and in the menu.

### 3. Reports in check results, worded honestly
- An active report on the checked identifier shows: **"Reported stolen to SafeOrStolen on [date]."**
- It is labelled either **"Police report number provided"** or **"User report — not verified by police."** We never claim police confirmed anything.
- What to do next: don't confront the seller, don't buy, contact local police (an item may be recovered or reported in error).
- Never shown: the reporter's name, email, contact details, police number or photos. City/state appear only as general area.
- Only **active** reports count. Recovered, removed, under-review and cleared reports never produce a stolen result.

### 4. Owner alert
- When someone checks an identifier you reported, you get an email: "Your reported [item] was just checked on SafeOrStolen". It includes the date/time and the general area (city/region from the connection, if available).
- It never names, emails or identifies the person who ran the check.
- At most one alert per report per hour, so the owner isn't flooded.
- The privacy policy gets a plain-words paragraph about this. You'll see the wording before it goes live.

### 5. Recovered, mistakes and guardrails
- Owners can mark an item **Recovered** or **Remove report** from My items. It then stops showing in checks right away.
- Every stolen result gets a **"Report a problem with this report"** link. It sends a short form (reason plus optional email) to admin review, and the report is hidden from checks while it's reviewed.
- **Admin review queue** (admins only): approve, clear/remove, or ask for more info, with a history of every decision.
- Guardrails:
  - A new account can file at most 3 reports in its first 30 days and 10 per year (adjustable).
  - A report goes to **review first** (not shown in checks until approved) when the identifier already has a Proof of Clean Purchase record, when another account reported it, or when the account hits the limit.
  - Identifiers must match the format (a real VIN check digit; an IMEI with the correct check digit).

### 6. Bikes
After a bicycle report, the confirmation screen suggests also reporting on **Bike Index** and **529 Garage**, with their official links.

### 7. Honest counts
An admin-only stats card shows reports filed, items registered, recoveries marked and reports cleared as mistakes. These are real counts from the database. They won't appear on public pages unless you ask.

## Decisions I'm assuming (tell me if wrong)
- Reports without a police number still show in checks, labelled "not verified by police", unless a guardrail holds them for review.
- Photos and receipts are private. The public result page never shows report photos.
- The limits of 3 per 30 days and 10 per year are a starting point.
- The 2 existing reports stay as they are and are shown as "user report".

## Technical section
- Database (one migration, with grants, RLS and owner-read policies):
  - `stolen_items` gains `status` values (active, pending_review, recovered, removed, cleared), `police_report_provided`, `city`, `state`, `contact_pref`, `photo_paths`, `registered_item_id` and `terms_accepted_at`.
  - New `registered_items` table (owner-only).
  - New `report_disputes` table (anyone can submit; admins read).
  - New `report_review_log` table (admin only).
  - New `owner_alert_log` table (stores the report id, time and general area only; no checker identity).
  - New private storage buckets `item-photos` and `purchase-proofs`, with owner-folder policies.
- Writes go through signed-in server functions (`src/lib/reports.functions.ts`). These enforce the guardrails, the format checks and the Proof-of-Clean-Purchase hold, and they set the owner from the verified session. No browser inserts. This fixes the current insert failure.
- In `engine.server.ts`, the SafeOrStolen lookup filters to `status = 'active'`. It returns the report date and police label and nothing else personal, and triggers the owner alert (throttled) through Resend inside the server, using the existing `RESEND_API_KEY`. This follows the verdict rules: our own report is a real theft record, so it can set "stolen".
- No new Edge Functions (we're at the limit). The existing report form is rebuilt in place, and the URL is unchanged.
- New private routes: `/my-items` and `/admin/reports` (noindex, admin check via `is_admin_user()`).
