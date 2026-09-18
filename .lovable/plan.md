# Require an Account Before Running a Check

## Starting point (answer to your question first)

Sign-in is **already built and live**, not dormant:

- A working sign-in / sign-up page exists at `/auth` (email + password), including email confirmation handling and a `?redirect=` parameter that sends people back where they came from.
- **Google sign-in already exists** as a button component wired to Supabase — so that's a quick add, not new work.
- The dashboard, history, subscriptions and the Proof of Clean Purchase feature already run on signed-in accounts.

So nothing is built from scratch. What's missing is only the rule that a check requires an account: today the check flow deliberately allows anonymous people through, counted by browser fingerprint.

## What changes

1. **Verify requires an account.** On `/verify` (classic) and `/ai-chat`, submitting an identifier while signed out no longer runs a check. Instead an inline prompt appears: create a free account or sign in to run this check.
2. **Their entry is preserved.** The typed IMEI/VIN/serial is saved before they leave, and after signing in they land back on the same page with it refilled and the check running automatically.
3. **Google sign-in added to the prompt and the sign-in page**, alongside email + password. Signup stays minimal: email, password, optional first name.
4. **Checks are tied to the account.** Signed-in checks are already recorded against the user; the fingerprint stays only as a secondary anti-abuse signal. Verification history therefore follows the account.
5. **Backend enforcement.** The check service currently has an explicit anonymous path; it gets removed so an unauthenticated request is refused even if someone calls it directly.
6. **Copy cleanup.** The "no signup required" style wording is replaced with "2 free checks with a free account". This wording appears in roughly 24 source files plus 14 prerendered snapshot files (homepage, /pricing, free tools, IMEI/VIN pages, several blog posts, comparison pages). Snapshots must be regenerated or crawlers keep serving the old promise.
7. **Out of scope, untouched:** the developer REST API at api.safeorstolen.com/v1.

## Known risk you should decide on

Backend deploys for this project have been stuck for a while — the earlier false-STOLEN fix still hasn't gone live. The **frontend gate (items 1-4, 6) will ship normally**, but item 5 (the server-side refusal) will sit in the code unapplied until deploys work again. Practical effect in the meantime: the site requires an account everywhere a real user can reach, but a technically-minded person calling the service directly could still bypass it. I'll flag it plainly rather than claim it's enforced.

## Technical detail

- Gate at the call site: `src/hooks/useParallelVerification.ts`, `src/hooks/useVerifyGate.ts` consumers, `src/verification/VerificationEngine.ts`, and the chat submit path — return an `auth_required` outcome before invoking `check-gate`/`verify-item` when `useUnifiedAuth().user` is null.
- Reuse `src/pages/AuthPage.tsx` + `src/components/auth/GoogleSignInButton.tsx`; pass `?redirect=/verify` and stash the pending identifier via the existing `usePendingVerification` hook / localStorage so nothing is lost.
- Backend: drop the anonymous fingerprint branch in `supabase/functions/verify-item/index.ts` (returns 401 `AUTH_REQUIRED`), and make `check-gate` require a JWT.
- Copy: update the 24 source files and regenerate affected `prerender/pages/*.json`. No metadata, canonical, or schema changes.
