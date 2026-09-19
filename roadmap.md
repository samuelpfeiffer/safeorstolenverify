# Account required before verification

- [x] Gate /verify and /ai-chat behind a signed-in account
- [x] Preserve entered identifier through signup/login and resume the check
- [x] Google sign-in on the prompt and auth page
- [x] Tie checks to the account (fingerprint secondary)
- [x] Backend enforcement — now in the app's own /verify-api server route
- [x] Copy cleanup: "no signup" wording in source + prerender snapshots
- [ ] Finish with a full project publish (not edge-function-only deploy)

# Stale verification deploys — move off the stuck Edge Functions

- [x] Audit every runtime caller of verify-item / check-gate
- [x] Build /verify-api in-app: account gate (401 AUTH_REQUIRED), free-tier
      limit (402 LIMIT_REACHED), six-source fan-out, strict three-state verdict
- [x] Repoint every caller (pages, dashboard, bulk, enterprise, MCP tools);
      zero executable references to verify-item / check-gate remain
- [x] Local proof: signed-out 401 x3, stolen/safe/unknown all correct,
      6 repeat rounds deterministic, no "suspicious" status anywhere
- [ ] Publish, then repeat the live checks against the published site
- [ ] Old verify-item / check-gate left deployed but unused (rollback only)

# Indexing cleanup

- [x] Audit all 110 reported URLs against the live site
- [x] Preserve intentional noindex on authentication, reporting, and verification workspace pages
- [x] Repair the Pennsylvania VIN page's server-rendered metadata
- [x] Redirect missing marketplace aliases and retired article URLs
- [x] Consolidate numbered duplicate blog imports to their earliest canonical article
- [x] Remove retired app/video URLs from sitemap sources
- [x] Validate locally and publish
- [x] Verify representative live URLs after publishing
