/**
 * Site-wide pricing copy — single source of truth for marketing surfaces.
 * Stripe price IDs and business logic stay in src/features/pricing.
 */
export const PRICING_COPY = {
  free: {
    label: 'Free',
    price: '1 free',
    unit: 'verifications',
    tagline: '1 free verification, no credit card required',
  },
  payPerCheck: {
    label: 'Pay Per Check',
    price: '$0.99',
    unit: 'for 2 checks',
    tagline: '$0.99 for 2 checks',
  },
  unlimited: {
    label: 'Unlimited',
    price: '$10',
    unit: '/month',
    tagline: '$10/month for unlimited verifications (mobile app included)',
  },
} as const;

export const PRICING_SUMMARY_SHORT =
  '1 free, then $0.99 for 2 checks or $10/month unlimited';

export const PRICING_SUMMARY_LONG =
  'Free tier: 1 verification, no account or credit card. Single: $0.99 for 2 checks. Unlimited: $10/month with mobile app.';
