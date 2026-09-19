# Move the account gate and verdict logic into the app's own backend

## Why this route

The two Supabase functions won't accept new code, and this project is not allowed to create new ones. The app framework has its own backend that ships with the website in the same publish that has been working reliably all along. Moving the gate and the verdict decision there takes them off the stuck pipeline entirely.

The six data sources stay exactly where they are. Each is a separate service that is already reachable over HTTP and is not affected by the stuck deployments — the new backend calls them the same way the old one did, in parallel, with the same request bodies. No verification source is rebuilt or changed.

## What gets built

**One new backend endpoint** that does the whole check in a single call:

1. Confirms the person is signed in. No account, no check — refused before anything else runs.
2. Applies the free-usage allowance (2 free checks, then paid plans), replacing today's separate gate service.
3. Looks up our own stolen-items records.
4. Calls the six sources in parallel: SafeOrStolen records, IMEI, vehicle, HotGunz, web scraper, AI analysis.
5. Decides the verdict with the strict three-state rule — Stolen only on strong evidence, Safe only when checks came back clean, otherwise Not Found. No middle "suspicious" state, and never by matching words in free text.
6. Records the check against the account.

## What the frontend does

Every place that runs a check is repointed to the new endpoint: the shared verification service, the verification engine, the AI verify page, the AI chat experiences, the homepage chat, the dashboard, bulk verification, and the enterprise demo. The four places that call the old gate service are folded into the same single call, since the new endpoint gates itself.

Screens and wording don't change. The response keeps the same shape the pages already read, so the results panel, the chat replies and the history all keep working.

## The old services

`verify-item` and `check-gate` stay deployed and untouched as rollback cover. After this change nothing in the app points at them. They are not deleted — if anything goes wrong we can point back at them in one edit.

The MCP developer tools also call the old gate; they are repointed too so no path keeps using it.

## One dependency to resolve first

The new backend needs its Supabase service credential, which is currently not present in this project's environment (`SUPABASE_SERVICE_ROLE_KEY` is missing). Our stolen-items records are readable only by their owner or an admin, so the lookup needs that credential. Step one is re-binding it with the built-in tool. If that fails, I stop and tell you — it needs a reconnect in project settings and I won't work around it by weakening data access rules.

## Two things I found while checking

- The tables `stolen_registry` and `external_verification_cache` do not exist in the database. The current check silently swallows the resulting errors, so the "mirrored stolen registries" and cached-result steps are doing nothing today. The new endpoint will not carry over these dead steps. Flagging rather than inventing: tell me if these were meant to exist.
- The AI step is the only source that produced the wrong Stolen verdicts. Its handling is the core of the fix.

## Technical detail

- New server route at `src/routes/api/verify.ts`, POST only, returning JSON. A server route (not a server function) so the call contract stays plain HTTP and the existing call sites change minimally.
- Auth: read the `Authorization` bearer from the request and validate with `supabase.auth.getUser(token)`; reject with 401 `{ code: 'AUTH_REQUIRED' }` when it resolves to no user. The anon/publishable key must not count as a session.
- Privileged reads/writes via `await import('@/integrations/supabase/client.server')` **inside** the handler, after the caller is authenticated — never at module scope.
- Source fan-out: `fetch` to `${SUPABASE_URL}/functions/v1/<slug>` for `verify-imei`, `verify-vehicle`, `verify-hotgunz`, `verify-bikeindex`, `web-scraper-verification`, `ai-safety-advisor`, wrapped in `Promise.allSettled` with a per-source timeout. All six have `verify_jwt = false` or are reachable with the service key, so routing by item type is preserved unchanged.
- Verdict switch lives in a new `src/lib/verification/verdict.server.ts`: `risk_level` `critical` → `stolen`, `low` → `safe`, everything else (`high`, `medium`, missing) → `unknown`. Any legacy `suspicious` from a child source normalizes to `unknown`. No keyword matching anywhere.
- Usage/plan logic ported from `check-gate`: subscriptions, legacy profile tiers, then account-scoped `usage_tracking` with fingerprint adoption. The per-isolate in-memory rate brake is dropped — server instances are stateless, so it would be unreliable; the database counter remains authoritative.
- Response body keeps the current field names: `finalStatus`, `confidence`, `riskLevel`, `message`, `providers`, `checkedSources`, `timestamp`, plus `checksRemaining`.
- Call sites updated: `src/services/VerificationService.ts`, `src/verification/VerificationEngine.ts`, `src/hooks/useVerifyGate.ts`, `src/hooks/useParallelVerification.ts`, `src/pages/AIVerifyPage.tsx`, `src/pages/VerifyChatPage.tsx`, `src/components/ai/AIFloatingChat.tsx`, `src/components/home/HomeAIHero.tsx`, `src/components/dashboard/VerificationSection.tsx`, `src/components/premium/BulkVerification.tsx`, `src/components/enhanced/EnterpriseDemo.tsx`, `src/lib/mcp/tools/{verify-imei,verify-vin,verify-serial}.ts`, and the bundled `supabase/functions/mcp/index.ts`.
- `/api/verify` is already covered by the no-cache personalized-path list in `src/server.ts`.
- No database schema changes, no RLS changes, no changes to the six verification services, no changes to the developer REST API at api.safeorstolen.com/v1.

## Proof before I call it done

1. Zero remaining executable references to the old two services (search must return nothing).
2. Signed out: the endpoint returns 401 `AUTH_REQUIRED` — verified against the running app.
3. Signed in: several repeat checks on the same identifier return the same verdict every time, with no `suspicious` anywhere in the response.
4. The three known test identifiers (IMEI, VIN, serial) each return a verdict consistent with their sources' actual answers.
5. Then the full publish, then the same checks repeated against the live site.

## Not in scope

The four known data-source problems you set aside for separate review: web scraper "Firecrawl Search (unavailable)", IMEI `blacklistChecked:false`, VIN `nicbChecked:false`, and the VIN year mismatch. Porting preserves current behaviour; it does not fix or hide these.
