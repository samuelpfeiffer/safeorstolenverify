/**
 * Site-wide pricing copy — single source of truth for marketing surfaces.
 * Stripe price IDs and business logic stay in src/features/pricing.
 */
export const PRICING_COPY = {
  free: {
    label: 'Free',
    price: '2 free',
    unit: 'verifications',
    tagline: '2 free verifications, no credit card required',
  },
  payPerCheck: {
    label: 'Pay Per Check',
    price: '$0.99',
    unit: 'per verification',
    tagline: '$0.99 per verification',
  },
  unlimited: {
    label: 'Unlimited',
    price: '$10',
    unit: '/month',
    tagline: '$10/month for unlimited verifications (mobile app included)',
  },
} as const;

export const PRICING_SUMMARY_SHORT =
  '2 free, then $0.99/check or $10/month unlimited';

export const PRICING_SUMMARY_LONG =
  'Free tier: 2 verifications, no credit card. Pay-per-check: $0.99. Unlimited: $10/month with mobile app.';
