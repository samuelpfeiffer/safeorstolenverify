/**
 * Stripe Configuration
 * 
 * Publishable keys are safe to expose in client-side code.
 * They are used to tokenize payment information and create checkout sessions.
 */

export const STRIPE_CONFIG = {
  // Live publishable key - safe for client-side use
  publishableKey: 'pk_live_51Rzb0CGxnZLw8J7OddndcfrCnEyqoABYqg9NAGMzRGh2q6oX17CS3vxOfk82cxdAjMjOvANUh7bd45XoKHLAinAv00jJMxWBYb',
  
  // Price IDs for verification services
  prices: {
    singleVerification: 'price_1T3nfCGxnZLw8J7OwqSRSPel', // $0.99 per verification
    basic: 'price_1SHEOxGxnZLw8J7O2zzfPVBK', // $4.99/mo Basic
    pro: 'price_1T3nhDGxnZLw8J7OaK2fkVM1', // $9.99/mo Pro
    business: 'price_1T3niCGxnZLw8J7OO2aGfQ0R', // $49.99/mo Business
    legacyPrice: 'price_1SDRrMGxnZLw8J7ObJsUlp6k', // $0.50 (archived)
  },
} as const;

// Helper to get the publishable key (with fallback to env var for flexibility)
export const getStripePublishableKey = (): string => {
  return import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || STRIPE_CONFIG.publishableKey;
};
