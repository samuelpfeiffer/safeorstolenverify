# Cut verification traffic to brand-new v2 functions

## Goal

Create and validate two new Supabase functions, then move all app traffic away from the stale `verify-item` and `check-gate` deployments. The old functions remain deployed but unused as rollback coverage; deleting them before the v2 production cutover is less safe.

## Implementation

1. **Create isolated new functions**
   - Add `verify-item-v2` from the disk-verified `verify-item` source, with a unique v2 build marker and the existing JWT-derived account requirement.
   - Give `verify-item-v2` its own copied verification coordinator so its verdict logic is bundled with the new slug rather than depending on the old function’s deployment history.
   - In that coordinator, use only the structured AI `risk_level`: `critical → stolen`, `low → safe`, and `high`/`medium`/missing/unrecognized → `unknown`.
   - Remove `suspicious` from the v2 coordinator’s result type and normalize any legacy child-provider `suspicious` response to neutral `unknown`. Never inspect free-text advice to determine status.
   - Add `check-gate-v2` from the disk-verified gate source, returning HTTP 401 with `code: "AUTH_REQUIRED"` when no signed-in user JWT resolves.
   - Register both new slugs in Supabase configuration with JWT verification enabled.

2. **Switch every executable caller**
   - Change all browser/app verification calls to `verify-item-v2`: the shared verification service and engine, AI verify/chat experiences, homepage chat, dashboard, bulk verification, and enterprise demo.
   - Change all browser/app gate calls to `check-gate-v2`: the shared gate hook and the three MCP tool sources.
   - Update the deployed MCP function’s bundled copy to `check-gate-v2` as well, so it cannot continue routing authenticated tool requests through the stale gate.
   - Do not change similarly named blog URLs, sitemap entries, `ai-verify-item`, or human-readable source labels because those are not calls to the old functions.

3. **Prove the source before deployment**
   - Search executable source for old `functions.invoke('verify-item')` / `functions.invoke('check-gate')` calls and require zero matches.
   - Quote the v2 build marker, both 401 `AUTH_REQUIRED` branches, and the exact `critical` / `low` / default switch from the files on disk.
   - Run focused Deno tests for the v2 auth rejection and deterministic risk mapping before touching production.

4. **Deploy once, then stop or proceed based on evidence**
   - Deploy only `verify-item-v2` and `check-gate-v2`, then wait at least 60 seconds.
   - Call each new slug directly while signed out with the anon key and verify HTTP 401 plus `AUTH_REQUIRED`.
   - Verify the risk mapping repeatedly with authenticated live calls when an authenticated preview session is available; otherwise report that live mapping could not be exercised without a user JWT and provide the focused test result without weakening authentication.
   - Inspect logs for the v2 build markers and function names.
   - **Failure gate:** if either new slug is missing, serves unexpected code, or lacks its marker, stop immediately. Do not redeploy, switch traffic, publish, or delete anything; report the project-wide deployment-pipeline failure for Supabase escalation.

5. **Cut over and publish only after v2 passes**
   - Once both new functions pass, publish the full project so all frontend callers use the v2 slugs.
   - Re-run representative live browser/direct checks against the published app and confirm no runtime request uses the old slugs and no result displays `suspicious`.
   - Leave the old functions deployed but unused for rollback. Their server-side account gate is known stale, so no code or configuration may reference them after publication.

## Files in scope

- New: `supabase/functions/verify-item-v2/index.ts`
- New: `supabase/functions/verify-item-v2/parallel-verification.ts`
- New: `supabase/functions/check-gate-v2/index.ts`
- New focused v2 test files if needed
- `supabase/config.toml`
- Runtime callers found under `src/services`, `src/verification`, `src/hooks`, `src/pages`, `src/components`, and `src/lib/mcp/tools`
- `supabase/functions/mcp/index.ts`
- `roadmap.md`

## Not changing

- No database schema or RLS changes.
- No developer REST API changes.
- No edits to the old function implementations.
- No deletion of old deployed functions during the initial cutover.
