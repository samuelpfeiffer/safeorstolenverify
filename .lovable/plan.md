# Verification results + PDF certificate — live investigation findings

Investigated live (Playwright against production `https://safeorstolen.com/verify` and the dev preview, plus curl against the Edge Function). No code changed.

## Short answer

The verification engine and the PDF generator both work. What's broken is the path a normal visitor takes: **an anonymous search never produces a Safe/Stolen result at all** — it stops at a sign-in wall before any database is checked, so there is also nothing to download. A second real bug makes the dashboard verifier never show Safe/Stolen even when signed in.

## Evidence

**1. Anonymous search on the live site returns no verdict**

Typed `1HGBH41JXMN109186` into `/verify` on production. Actual reply:

> "I detected this looks like a VIN (99% confidence). To run a full verification across 100+ databases, sign in free — you get 2 free checks."

The results pane stayed on "Ready when you are". No Safe, no Stolen, no PDF button.
Cause: `src/pages/VerifyChatPage.tsx:259-266` returns early when `!user`, before `checkGate()` and before `verify-item` is ever called.

**2. The backend also refuses anonymous checks**

```
curl -X POST .../functions/v1/verify-item -d '{"identifier":"1HGBH41JXMN109186","itemType":"vin"}'
-> 401
```
`supabase/functions/verify-item/index.ts:23-34` requires an `Authorization` header.

**3. The free-check gate already supports anonymous users — nothing uses it that way**

`supabase/functions/check-gate/index.ts:165-235` grants 2 free checks against a localStorage fingerprint with no user account, plus an IP limit. The UI never reaches it for signed-out visitors, so the advertised "2 free checks / ANONYMOUS" copy on the page is currently untrue.

**4. Dashboard verifier reads the wrong field — always falls through to "unknown"**

`src/components/dashboard/VerificationSection.tsx:104-125` checks `data.status`, but `verify-item` returns `finalStatus` (index.ts:310-320). `data.status` is always `undefined`, so every signed-in dashboard check shows the "contact us" fallback instead of Safe or Stolen.

**5. A third entry point hard-blocks free users**

`src/hooks/useParallelVerification.ts:51-62` (used by `VerifyPage.tsx` and `VoiceSearchTool`) redirects anyone without a paid tier to `/pricing` — it never honours the 2 free checks.

**6. PDF certificate generation works, but the layout is defective**

Executed `generateVerificationPDF` live in the browser for safe / stolen / unknown. All three produced real downloads (14.6 KB, 14.5 KB, 14.5 KB). Rendering the stolen one to an image shows:
- the circular "SOS" seal and the "Digitally verified…" watermark print **on top of** the "DATABASES VERIFIED" list;
- checkmark glyphs render as stray `'` characters (unsupported Unicode in the built-in jsPDF font);
- the Certificate ID / date footer block sits **outside** the inner decorative border, clipped at the page edge.

**7. Unrelated but prohibited:** the `/verify` header badge renders a public AI vendor/model name, which project rules forbid on public surfaces (`src/pages/VerifyChatPage.tsx`).

## Proposed fixes (for your approval — nothing implemented)

**A. Let anonymous visitors get a real Safe/Stolen verdict (the actual ask)**
1. Remove the `!user` early return in `VerifyChatPage.tsx`; call `checkGate()` first for everyone. Signed out + gate allows → run the verification; gate blocked → show the existing upgrade message.
2. Allow anonymous calls in `verify-item`: when there is no valid JWT, require a `fingerprint` and re-validate it against `check-gate` server-side before running the check, log the search with `user_id: null`. Keeps the abuse limits (2/fingerprint, IP cap) — does not open the function up.
3. Keep sign-in required only for saving history and share links.

**B. Fix the dashboard verdict bug** — read `finalStatus` (with `status` fallback) in `VerificationSection.tsx`.

**C. Align the third entry point** — replace the paid-tier hard block in `useParallelVerification.ts` with the same `checkGate` logic so all three surfaces behave identically.

**D. PDF certificate for every result**
1. Fix the layout defects above: move the seal/watermark below the sources list, replace Unicode checkmarks with drawn vector marks, pull the footer inside the border.
2. Offer the download to anonymous users too (currently `ResultsPane.tsx:79-84` blocks it on `isAuthenticated`) — the certificate is the deliverable of a free check.
3. Verify visually by rendering the output to images for safe / stolen / lost / unknown before calling it done.

**E. Remove the AI vendor name** from the `/verify` badge.

## Open questions

- Should anonymous free checks include the PDF, or should the PDF stay behind sign-in as the conversion moment? (A affects revenue; my recommendation is anonymous gets the verdict, PDF requires a free account — say the word either way.)
- Confirm the 2-free-checks-without-account rule is still the intended business rule before I loosen `verify-item`.

## Verification I'll run after implementation

Live Playwright run against production, signed out: search a VIN → screenshot the Safe verdict and the sources list; search a known-stolen registry entry → screenshot the Stolen verdict; download the PDF and render it to an image for visual QA; re-run the dashboard path; paste all raw output.
