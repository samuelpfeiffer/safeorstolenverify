# Pricing Model — March 2026 Update

## Overview
**No more free tier.** Single plan: **$1.00/month unlimited everything.**

## Current Model
- **Unlimited Plan**: $1.00/month — unlimited verifications, all item types, all features
- **No free searches** — subscribe to use
- **Stripe Price ID**: `price_1T77b7GxnZLw8J7OYB4jBGRB`
- **Stripe Product ID**: `prod_TDfkVL8GE1dRt5`

## What Changed (March 4, 2026)
- Removed free tier (was 2 free checks)
- Removed $4.99/mo, $9.99/mo, $29.99/mo, $99/mo tiers
- Single $1.00/month unlimited plan
- Updated all UI, pricing pages, paywalls, edge functions, and constants

## User Flow
1. User visits site → sees $1/month unlimited offer
2. Clicks subscribe → auth required → Stripe checkout
3. After payment → unlimited verifications immediately
4. Cancel anytime from dashboard

## Legacy Subscribers
Existing subscribers on old plans ($4.99, $9.99, etc.) continue on their current plan.
New subscribers only see the $1/month option.
