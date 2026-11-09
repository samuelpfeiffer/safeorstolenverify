# Search Console connection

Admin-only routes: `/admin/gsc-connect`, `/admin/gsc-status`, and `/admin/gsc-callback`.
The connection uses Google's `webmasters.readonly` scope and the existing
`is_admin_user()` check. Google access and refresh tokens stay in the Edge Function.
Signed OAuth state expires after ten minutes and is bound to the signed-in admin;
the browser also checks the state stored before redirecting to Google.

## Deployment and Google setup

1. Deploy `gsc-api` with JWT verification enabled, including `handler.ts`, `oauth.ts`
   and `../_shared/cors.ts`. No database migration is required.
2. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` as Supabase Edge Function
   secrets. Legacy secret names remain supported, but new setups should use these
   standard names. Never put the client secret in frontend environment variables.
3. In the corresponding Google Cloud project, enable the Search Console API.
   Register this exact authorized redirect URI on the web OAuth client:
   `https://safeorstolen.com/admin/gsc-callback`.
4. Publish the frontend. Visit the connection route on `safeorstolen.com`, sign in
   as an admin, and approve Google access using an account that can read the
   `sc-domain:safeorstolen.com` property. Google consent/testing restrictions must
   allow that account.
5. Click **Fetch last 28 days**. The requested window ends three days before the
   current Pacific date to allow data to finalize. Confirm the saved row count
   and date range on the status screen.

Tokens upsert into the live schema's singular `scope` column, with a `user_id`
conflict target. Ranking results and URL inspections are saved in `gsc_checks`;
this replaces writes to cache/status tables absent from the live schema.

A status of connected means credentials are stored. Fetching rankings verifies
actual Google property access. A response that reaches the row limit is flagged
as potentially incomplete; the API supports `startRow` for follow-up pages.
Google also omits some query data, so absence of a #1 row is not proof that a
public page is safe to edit under the repository's protected-page rules.

The old `gsc-sync` scheduler is not part of this repair; use the admin page to
fetch rankings. Its service-role forwarding does not represent a signed-in user
and will be rejected by this handler.

## Validation

- `node --test supabase/functions/gsc-api/tests/handler.test.ts`
- `npx deno check supabase/functions/gsc-api/handler.ts supabase/functions/gsc-api/oauth.ts`
- `npx vite build`
- Targeted ESLint on the new frontend files and callback.

Google consent, project OAuth secrets, authorized redirect configuration and
property access require an authenticated live account and cannot be verified by
mock tests. The status page reports missing OAuth configuration without exposing
secret values. No public page copy or verification provider changes are included.
