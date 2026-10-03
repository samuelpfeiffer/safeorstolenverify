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
    price: '$3.99',
    unit: 'per verification',
    tagline: '$3.99 per verification',
  },
  unlimited: {
    label: 'Unlimited',
    price: '$10',
    unit: '/month',
    tagline: '$14.99/month for unlimited verifications (mobile app included)',
  },
} as const;

export const PRICING_SUMMARY_SHORT =
  '2 free, then $3.99/check or $14.99/month unlimited';

export const PRICING_SUMMARY_LONG =
  'Free tier: 2 verifications, no credit card. Pay-per-check: $3.99. Unlimited: $14.99/month with mobile app.';
