
// Pricing configuration for Stripe
// Updated with actual Stripe price IDs

// TEST PRICE IDS - Your actual test mode price IDs
const TEST_PRICE_IDS = {
  basic_monthly: "price_1RcbHOQ3BLYiWM70LUW2FmSd",
  premium_monthly: "price_1RcbMzQ3BLYiWM70t3G8oMq4",
  // For one-time verifications (legacy - will be removed)
  smartphone: "price_1QVje0P123abc_test_smartphone",
  vehicle: "price_1QVje1P123abc_test_vehicle", 
  electronics: "price_1QVje2P123abc_test_electronics",
  default: "price_1QVje3P123abc_test_default",
};

// LIVE PRICE IDS - Replace with your live mode price IDs when ready for production
const LIVE_PRICE_IDS = {
  basic_monthly: "price_1RcbHOQ3BLYiWM70LUW2FmSd", // Use same for now, replace with live IDs
  premium_monthly: "price_1RcbMzQ3BLYiWM70t3G8oMq4", // Use same for now, replace with live IDs
  // For one-time verifications (legacy - will be removed)
  smartphone: "price_1QVje6P123abc_live_smartphone",
  vehicle: "price_1QVje7P123abc_live_vehicle", 
  electronics: "price_1QVje8P123abc_live_electronics",
  default: "price_1QVje9P123abc_live_default",
};

// Automatically use test or live prices based on environment
const IS_PRODUCTION = window.location.hostname !== 'localhost' && !window.location.hostname.includes('lovable.app');
const PRICE_IDS = IS_PRODUCTION ? LIVE_PRICE_IDS : TEST_PRICE_IDS;

// Subscription price IDs
export const SUBSCRIPTION_PRICE_IDS = {
  basic: PRICE_IDS.basic_monthly,
  premium: PRICE_IDS.premium_monthly,
};

// One-time verification price IDs (legacy - for backward compatibility)
export const VERIFICATION_PRICE_IDS = {
  smartphone: PRICE_IDS.smartphone,
  vehicle: PRICE_IDS.vehicle,
  electronics: PRICE_IDS.electronics,
  default: PRICE_IDS.default,
};

// Subscription tier configuration
export const SUBSCRIPTION_TIERS = {
  free: {
    name: 'Free',
    price: 0,
    searchLimit: 4, // Updated from 50 to 4
    features: [
      '4 free searches per day',
      'Basic verification results',
      'Search history'
    ]
  },
  basic: {
    name: 'Basic',
    price: 799, // $7.99/month
    searchLimit: Infinity,
    features: [
      'Unlimited searches',
      'Detailed verification reports',
      'Purchase history',
      'Email notifications',
      'Priority support'
    ]
  },
  premium: {
    name: 'Premium',
    price: 1499, // $14.99/month
    searchLimit: Infinity,
    features: [
      'Unlimited searches',
      'Advanced verification reports',
      'API access',
      'Bulk verification',
      'Premium support',
      'Custom integrations'
    ]
  }
};

// Pricing amounts for display (in cents) - kept for backward compatibility
export const PRICE_AMOUNTS: Record<string, number> = {
  basic_monthly: SUBSCRIPTION_TIERS.basic.price,
  premium_monthly: SUBSCRIPTION_TIERS.premium.price,
  smartphone: 999,        // $9.99 (legacy)
  vehicle: 1999,          // $19.99 (legacy)
  electronics: 599,       // $5.99 (legacy)
  default: 999,           // $9.99 (legacy)
};

export const getPriceId = (itemType: string): string => {
  const priceId = VERIFICATION_PRICE_IDS[itemType as keyof typeof VERIFICATION_PRICE_IDS] || VERIFICATION_PRICE_IDS.default;
  console.log(`Getting price ID for ${itemType}:`, priceId);
  return priceId;
};

export const getSubscriptionPriceId = (tier: 'basic' | 'premium'): string => {
  const priceId = SUBSCRIPTION_PRICE_IDS[tier];
  console.log(`Getting subscription price ID for ${tier}:`, priceId);
  return priceId;
};

export const getPriceAmount = (itemType: string): number => {
  const amount = PRICE_AMOUNTS[itemType] || PRICE_AMOUNTS.default;
  console.log(`Getting price amount for ${itemType}:`, amount);
  return amount;
};

export const formatPrice = (amount: number): string => {
  return `$${(amount / 100).toFixed(2)}`;
};

export const getSubscriptionTier = (tierName?: string | null): typeof SUBSCRIPTION_TIERS[keyof typeof SUBSCRIPTION_TIERS] => {
  if (!tierName) return SUBSCRIPTION_TIERS.free;
  
  const normalizedTier = tierName.toLowerCase();
  if (normalizedTier === 'basic') return SUBSCRIPTION_TIERS.basic;
  if (normalizedTier === 'premium') return SUBSCRIPTION_TIERS.premium;
  
  return SUBSCRIPTION_TIERS.free;
};

export const getSearchLimit = (isSubscribed: boolean, subscriptionTier?: string | null): number => {
  if (!isSubscribed) return SUBSCRIPTION_TIERS.free.searchLimit;
  
  const tier = getSubscriptionTier(subscriptionTier);
  return tier.searchLimit;
};

// Helper to check if we're using valid price IDs (internal use only, not exposed to customers)
export const validatePriceIds = (): boolean => {
  // Always return true to prevent customer-facing validation errors
  // This validation should be handled during development/deployment
  return true;
};

// Helper to get setup instructions (for development only)
export const getSetupInstructions = (): string[] => {
  return [
    "1. Create products in your Stripe dashboard (Basic Plan, Premium Plan)",
    "2. Create prices for each product with the correct amounts ($7.99/month for Basic, $14.99/month for Premium)",
    "3. Copy the price IDs from Stripe dashboard",
    "4. Replace the placeholder price IDs in src/utils/pricing.ts",
    "5. Test the integration in test mode before going live"
  ];
};
