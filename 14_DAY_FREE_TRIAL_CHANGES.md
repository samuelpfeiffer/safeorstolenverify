# Pricing Model — March 2026 Update

## Overview
**2 free checks as lead magnet, then $0.99/check or $2.99/month unlimited.**

## Current Model
- **Free Tier**: 2 free verifications, no credit card required (`FREE_SEARCH_LIMIT = 2`)
- **Pay Per Check**: $0.99 one-time, no account needed
  - Stripe Price ID: `price_1T8uNDGxnZLw8J7OrBKrbePR`
  - Stripe Product ID: `prod_U78eaGwFkIA2Ic`
- **Unlimited Plan**: $2.99/month — unlimited verifications, all item types, seller badges
  - Stripe Price ID: `price_1T8uToGxnZLw8J7O6GcOuV1w`
  - Stripe Product ID: `prod_U78lRFEHuOd01t`

Source of truth: `src/features/pricing/constants.ts`.

## User Flow
1. User visits site → sees "2 free checks, then $0.99/check or $2.99/month unlimited"
2. Signs up → gets 2 free verifications (no credit card required)
3. After 2 checks → paywall offers $0.99 single check or $2.99/mo unlimited
4. Subscribes via Stripe → unlimited verifications immediately
5. Cancel anytime from dashboard

## Enforcement Layers
The `FREE_SEARCH_LIMIT = 2` cap is enforced in 4 places:
1. UI/hook (`useSearchLimits`, `useFreemiumFlow`) — redirects to `/pricing`
2. Edge function `check-gate` — `FREE_LIMIT = 2` (DB fingerprint check)
3. Edge function `check-gate` — `IP_FREE_LIMIT = 2` (in-memory IP cap, 24h window)
4. Database `profiles.search_count` — incremented atomically per check

## Legacy Subscribers
Existing subscribers on legacy plans ($4.99 starter, $9.99 personal, $29.99 professional)
continue on their current plan. New subscribers only see Pay Per Check or Unlimited.
