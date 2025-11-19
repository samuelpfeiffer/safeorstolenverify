# Allowed "Product" References

This document lists all intentional and unavoidable uses of the term "product" in the codebase. SafeOrStolen is a **SaaS verification platform** offering **services**, not selling products.

## Allowed References

### 1. Stripe Integration (Third-Party API Terminology)
Stripe's API uses "product" to refer to pricing plans/tiers. These references are required:

- `src/config/stripe.ts` - Stripe product/price configuration
- `src/features/pricing/constants.ts` - Comments explaining Stripe terminology
- `src/components/debug/ComprehensivePaymentDebug.tsx` - Stripe product testing
- `src/components/debug/PaymentSystemDebug.tsx` - Stripe product verification
- `src/hooks/useSubscription.ts` - Comments about Stripe's "product" terminology
- `src/hooks/useOptimizedSubscription.ts` - Stripe API field references

**Note:** All these files include clarifying comments that SafeOrStolen offers services, not products.

### 2. Natural Language Context (Item Identification)
References to "product" when describing physical items being verified:

- `src/pages/SerialNumberCheckerPage.tsx` - "product labels", "individual products" (referring to items being checked)
- `src/pages/RealTimeVerificationPage.tsx` - "product code" (industry-standard terminology)
- `src/pages/app/features/AppBarcodeScannerPage.tsx` - "product verification", "product lookup" (barcode scanning context)
- `src/components/seo/AIOptimizedContent.tsx` - "product label" (where serial numbers are found)
- `src/pages/FAQPage.tsx` - "international product identification systems" (industry terminology)
- `src/pages/blog/FacebookMarketplaceSafety.tsx` - "counterfeit products" (items being sold)
- `src/utils/seo/metadata.ts` - "verify the legitimacy of your products" (manufacturers' items)

### 3. External API Fields
- `src/hooks/useAIIntegration.ts` - `product: itemData` comment noting external API field name

### 4. Unavoidable Third-Party References
- Barcode scanning and item verification contexts where "product" is industry-standard terminology for physical items being checked

## All Other Uses Are Forbidden

Any "product" reference not listed above should be changed to:
- **Service** (for SafeOrStolen's offerings)
- **Platform** (for SafeOrStolen as a system)
- **Plan** (for pricing tiers)
- **Item** (for things being verified)

## Last Updated
2025-11-19 - Phase 1 Audit Complete
