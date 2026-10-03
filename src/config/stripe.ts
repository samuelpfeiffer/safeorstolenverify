/**
 * Stripe Configuration
 * 
 * Publishable keys are safe to expose in client-side code.
 * March 2026: Three-tier model — Free / $3.99 per check / $14.99/mo unlimited
 */

export const STRIPE_CONFIG = {
  // Live publishable key - safe for client-side use
  publishableKey: 'pk_live_51Rzb0CGxnZLw8J7OddndcfrCnEyqoABYqg9NAGMzRGh2q6oX17CS3vxOfk82cxdAjMjOvANUh7bd45XoKHLAinAv00jJMxWBYb',

  // ── Active prices ────────────────────────────────────────
  prices: {
    payPerCheck: 'price_1T8uNDGxnZLw8J7OrBKrbePR',   // $3.99 one-time
    unlimited:   'price_1T8uToGxnZLw8J7O6GcOuV1w',   // $14.99/mo recurring

    // Legacy price IDs kept for existing subscribers
    singleVerification: 'price_1T3nfCGxnZLw8J7OwqSRSPel', // $3.99 per verification (legacy)
    basic: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',               // $4.99/mo (legacy)
    pro: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',                 // $9.99/mo (legacy)
    business: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',            // $49.99/mo (legacy)
    legacyPrice: 'price_1SDRrMGxnZLw8J7ObJsUlp6k',         // $0.50 (archived)
    sellerListing: 'price_1T6fNGGxnZLw8J7OrKLSrnAx',       // $10 one-time (legacy)
    verifiedSeller: 'price_1T6fOWGxnZLw8J7O2njgDUgM',      // $19.99/mo (legacy)
    premiumSeller: 'price_1T6fQ0GxnZLw8J7Omxo2m8TS',       // $29.99/mo (legacy)
    businessPro: '',
  },

  products: {
    payPerCheck: 'prod_U78eaGwFkIA2Ic',
    unlimited:   'prod_U78lRFEHuOd01t',
  },
} as const;

// Helper to get the publishable key (with fallback to env var for flexibility)
export const getStripePublishableKey = (): string => {
  return import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || STRIPE_CONFIG.publishableKey;
};
