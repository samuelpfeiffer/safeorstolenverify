
# Plan: Update All Pricing Components to New Simplified Model

## Problem Identified

The pricing page in the **preview** shows the correct new pricing (Free + $4.99/month Unlimited), but:

1. The **production site** (safeorstolen.com) hasn't been published yet - still showing old pricing
2. **6 legacy components** still reference the old multi-tier pricing structure and will cause inconsistencies across the app

## Files to Update

### 1. FreemiumPaywall.tsx
**Current:** Shows "Starter Plan" ($4.99/mo, 15 checks) + "Single Verification" ($2.99)
**Updated:** Show "Unlimited Plan" ($4.99/mo, unlimited) as primary CTA

Changes:
- Replace "Starter Plan" references with "Unlimited Plan"
- Update messaging from "15 checks/month" to "Unlimited checks"
- Remove "Single Verification" option (no longer in pricing model)
- Update copy to match new value proposition

### 2. PaywallModal.tsx
**Current:** Shows "Starter Plan" ($4.99/mo, 15 checks) + "Single Verification" ($2.99)
**Updated:** Single-option modal promoting "Unlimited Plan" ($4.99/mo)

Changes:
- Replace "Starter Plan" with "Unlimited Plan"
- Update features list (unlimited checks, all item types, priority support)
- Remove "Single Verification" option entirely
- Simplify modal to single compelling CTA

### 3. TrialUpgradeModal.tsx
**Current:** Shows Personal ($9.99) and Professional ($29.99) plans
**Updated:** Single "Unlimited Plan" ($4.99/mo) option

Changes:
- Remove two-card layout
- Show single "Unlimited Plan" with compelling features
- Update copy to reflect new simpler pricing

### 4. ConsumerPricing.tsx
**Current:** Shows Starter/Personal/Professional tiers + Pay Per Use
**Updated:** Free + Unlimited two-tier layout matching main pricing page

Changes:
- Simplify to two-tier layout (Free + Unlimited)
- Remove legacy tier references
- Match styling with ConversionOptimizedPricing component

### 5. PricingGrid.tsx
**Current:** Shows 4-tier grid (Starter/Personal/Professional/Enterprise)
**Updated:** Can be deprecated or simplified to Free + Unlimited

Changes:
- This component is not currently imported anywhere
- Mark as deprecated or update to match new model for future use

### 6. FAQPage.tsx
**Current:** States "Single verifications cost $2.99 each... unlimited monthly subscriptions starting at $29.99"
**Updated:** Accurate FAQ answers for new pricing model

Changes:
- Update FAQ answer to: "We offer 2 free verification checks for new users, no credit card required. For unlimited verifications, subscribe to our Unlimited Plan at $4.99/month. Cancel anytime."

## Technical Details

### New Pricing Model Reference
```text
Free Tier:
- Price: $0
- Checks: 2 free verifications
- No credit card required

Unlimited Plan:
- Price: $4.99/month
- Checks: Unlimited (300/month fair-use cap)
- Stripe Price ID: price_1SHEOxGxnZLw8J7O2zzfPVBK
- Features: All item types, priority support, PDF receipts, cancel anytime
```

### Checkout Integration
All components will use:
- `planName: 'Unlimited Plan'`
- `isSubscription: true`
- The `create-checkout` edge function handles the mapping

## Implementation Order

1. Update `FreemiumPaywall.tsx` (most visible to users at paywall)
2. Update `PaywallModal.tsx` (modal version of paywall)
3. Update `TrialUpgradeModal.tsx` (trial expiration prompts)
4. Update `FAQPage.tsx` (FAQ accuracy)
5. Update/deprecate `ConsumerPricing.tsx` (if used)
6. Mark `PricingGrid.tsx` as deprecated (not imported)

## Expected Outcome

After implementation:
- All pricing references across the app will be consistent
- Users will see "2 free checks" + "Unlimited @ $4.99/month" everywhere
- No more confusion from mixed pricing models
- When you publish, production will match preview

## Post-Implementation

After code changes are complete, you'll need to **publish** the project to push changes to production (safeorstolen.com).
