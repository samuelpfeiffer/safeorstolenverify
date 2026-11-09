# Private growth dashboard

`/admin/growth` shows rolling 7-, 30- and 90-day metrics from existing purchase
and verification records. It is protected by the existing AdminRoute guard and
the server independently verifies the signed-in user's admin role.

Deploy the `admin_growth_summary` migration before deploying the updated
`gsc-api` function. The new `growth-summary` action does not need Google OAuth.
It calls an aggregate-only, SECURITY INVOKER RPC that grants EXECUTE only to
service_role. Browser clients, including ordinary authenticated users, cannot
call that RPC directly. No identifiers or customer details are returned.

Dashboard measures:

- Recorded searches and rows containing a result; neither proves a successful check.
- Distinct account/browser identities and identities with repeat records; these
  are not verified humans, cross-device deduplication or cohort retention.
- Completed positive-value USD payments and recorded gross amount. This is not
  reconciled Stripe revenue, net profit, or a complete refund ledger.
- Recorded expired/pending checkouts, category activity and paid amount mix.

No visitor conversion rate is displayed because backend records and external
visitor analytics are different measurement systems. The 500,000-user goal is
shown separately from operational identity counts. The $2,000 monthly target
uses a labeled rolling 30-day comparison, not an invented monthly forecast.

Validation includes authenticated/admin denial tests, invalid window checks,
database error handling, live total reconciliation, explicit anon/authenticated
RPC denial checks, targeted frontend lint, and a production build. Public page
copy, pricing, verification results and existing ranking locks are unchanged.
