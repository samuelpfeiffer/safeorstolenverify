

## Problem

The `create-checkout` edge function checks for `STRIPE_SECRET_KEY` in the environment (line 110-117 of `supabase/functions/create-checkout/index.ts`). Since Stripe is not connected to the project, this key is missing, causing every checkout attempt to fail with a 500 error.

## Fix

1. **Connect Stripe** -- The Stripe connector must be linked to this project so the `STRIPE_SECRET_KEY` is available as an environment variable to the edge functions. This is a one-click action.

2. **No code changes needed** -- The `create-checkout` function already has correct logic. Once the secret key is available, it will work.

## Action Required

I need to connect Stripe to your project. Once connected, the checkout flow will work immediately -- no code changes required.

