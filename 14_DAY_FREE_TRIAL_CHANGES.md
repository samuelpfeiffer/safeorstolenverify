# Pricing Model — March 2026 Update

## Overview
**2 free checks as lead magnet, then $1.00/month unlimited.**

## Current Model
- **Free Tier**: 2 free verifications, no credit card required
- **Unlimited Plan**: $1.00/month — unlimited verifications, all item types, all features
- **Stripe Price ID**: `price_1T77b7GxnZLw8J7OYB4jBGRB`
- **Stripe Product ID**: `prod_TDfkVL8GE1dRt5`

## What Changed (March 6, 2026)
- Restored 2 free checks as lead magnet
- Single $1.00/month unlimited plan after free checks used
- Updated all UI, pricing pages, paywalls, edge functions, AI assistants, SEO files, and constants

## User Flow
1. User visits site → sees "2 free checks, then $1/month unlimited"
2. Signs up → gets 2 free verifications (no credit card)
3. After 2 checks → paywall prompts $1/month subscription
4. Subscribes via Stripe → unlimited verifications immediately
5. Cancel anytime from dashboard

## Legacy Subscribers
Existing subscribers on old plans ($4.99, $9.99, etc.) continue on their current plan.
New subscribers only see the $1/month option.
