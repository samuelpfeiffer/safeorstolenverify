# Seller share and badge

Goal: after a clean check, sharing the result is the obvious next step. Buyers who open a shared link get an honest result page and a clear way to try SafeOrStolen themselves.

## 1. "Share this result" panel (clean results only)
- A large panel under a CLEAR verdict. It does not appear for STOLEN or NOT FOUND results.
- **Copy for your listing** button, which copies: "Checked on SafeOrStolen: [item], no theft reports found as of [date]. See the check: [link]". The item is the type and model (for example "iPhone 13"), never the full identifier.
- Also: Copy link, and share to Facebook, X, text message, and email, using standard share links that don't need logins or keys.
- Uses the existing shareUrl (/verification/shared/<token>).

## 2. Public shared-result page as a landing page
- It shows: the verdict, item type, partly hidden identifier (as now), check date, and the sources actually checked (SafeOrStolen reports, public web results, AI analysis, plus Bike Index or HotGunz where they apply).
- A plain notice: "This is a record of one check on that date. It is not a guarantee, title, or proof of ownership."
- A prominent **Check any item for free** button that goes to sign-up/verify and remembers it came from a shared link.
- No owner name, email, account details, or full identifier. Kept out of search results (noindex), as now.

## 3. Badge image (simple version)
- A downloadable "Checked on SafeOrStolen" image showing the date and partly hidden identifier, for listing photos. It's generated in the browser, so there's no new server work.
- It links back to nothing (it's an image), so the listing text carries the link.

## 4. Invite a friend (dashboard)
- A plain share link to the homepage with an invite tag, plus copy and share buttons.
- No credits or extra free checks. The free allowance stays 2 checks total.

## 5. Tracking
- Count shares (copy for listing, copy link, and each share button) and visits to shared pages.
- Count sign-ups that came from a shared-result link or an invite link.
- A small admin view with totals by week.

## Needs your OK
- This adds one new database table (`share_events`: event type, share token, time, and the signed-in user when there is one; no personal info from visitors). Only admins can read it.

## Technical details
- Panel: new `ShareResultPanel` component rendered in the existing result view when verdict === CLEAR.
- Shared page: update the existing `/verification/shared/$token` route UI; keep the current masked-data query.
- Events: an insert-only server function with rate limiting; the `?ref=share|invite` source is saved at sign-up in the profile's first-touch field or in the event table.
- Badge: canvas → PNG download in the browser.
- Publish after each part, then check the live pages.
