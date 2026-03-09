

## Problem

Line 111 of `supabase/functions/create-checkout/index.ts` has a strict key prefix check:
```
if (!stripeKey || (!stripeKey.startsWith("sk_live_") && !stripeKey.startsWith("sk_test_")))
```

The Stripe connector provides a **restricted key** (prefix `rk_live_` or `rk_test_`), which this validation rejects, causing the `STRIPE_CONFIG` error on every checkout attempt.

## Fix

Update line 111 to also accept restricted keys (`rk_live_`, `rk_test_`). This is a one-line change in the edge function, then redeploy.

Search all other edge functions for the same pattern and fix them too if present.

## Files to Change

1. `supabase/functions/create-checkout/index.ts` — line 111: add `rk_live_` and `rk_test_` to the prefix check
2. Any other edge functions with the same Stripe key validation pattern

