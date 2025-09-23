
export interface SubscriptionTier {
  name: string;
  price: number;
  interval: 'month' | 'year' | 'day';
  features?: string[];
  popular?: boolean;
  stripePriceId?: string;
  searchLimit?: number;
}

export const SUBSCRIPTION_TIERS: Record<string, SubscriptionTier> = {
  free: {
    name: 'Free',
    price: 0,
    interval: 'month',
    searchLimit: 4,
    features: [
      '4 free verifications',
      'Basic verification reports',
      'Search history',
      'Email support'
    ]
  },
  payPerCheck: {
    name: 'Pay Per Check',
    price: 500, // $5.00 in cents
    interval: 'month',
    features: [
      'Quick, on-demand access',
      'Instantly verify IMEI, VIN, or serial',
      'No subscription required',
      'Email support'
    ],
    stripePriceId: 'Pay Per Check' // Use product name for dynamic matching
  },
  basic: {
    name: 'Smart Buyer',
    price: 799, // $7.99 in cents
    interval: 'month',
    features: [
      '7-day free trial',
      '30 verifications/month',
      'Real-time database checks',
      'Basic verification reports',
      'Email support'
    ],
    stripePriceId: 'Smart Buyer' // Use product name for dynamic matching
  },
  entryLevel: {
    name: 'Entry Level (Individual)',
    price: 1000, // $10.00 in cents
    interval: 'month',
    features: [
      '7-day free trial',
      'Unlimited verifications',
      'Real-time database checks',
      'Enhanced verification reports',
      'Priority email support',
      'Early access to new features'
    ],
    stripePriceId: 'Entry Level (Individual)' // Use product name for dynamic matching
  },
  premium: {
    name: 'Savvy Shopper',
    price: 1900, // $19.00 in cents
    interval: 'month',
    popular: true,
    features: [
      '7-day free trial',
      'Everything in Entry Level',
      'Advanced verification reports',
      'Bulk checking tools (up to 50 items)',
      'Priority support',
      'Mobile app access'
    ],
    stripePriceId: 'Savvy Shopper' // Use product name for dynamic matching
  },
  enterprise: {
    name: 'Business Pro',
    price: 4995, // $49.95 in cents
    interval: 'month',
    features: [
      '7-day free trial',
      'Everything in Savvy Shopper',
      'Unlimited bulk checking',
      'API access (10,000 calls/month)',
      'White-label solution',
      'Custom integrations',
      'Dedicated account manager'
    ],
    stripePriceId: 'Business Pro' // Use product name for dynamic matching
  },
  report: {
    name: 'Certified Stolen/Legitimate Report',
    price: 1000, // $10.00 in cents
    interval: 'day',
    features: [
      'Single verification report',
      'Certified authenticity check',
      'Stolen item database search',
      'Official documentation'
    ],
    stripePriceId: 'Report' // Use product name for dynamic matching
  }
};

export const getSubscriptionPriceId = (tier: 'payPerCheck' | 'entryLevel' | 'basic' | 'premium' | 'enterprise'): string => {
  return SUBSCRIPTION_TIERS[tier].stripePriceId || '';
};

export const getSubscriptionTier = (tierName?: string): SubscriptionTier => {
  if (!tierName || !SUBSCRIPTION_TIERS[tierName]) {
    return SUBSCRIPTION_TIERS.free;
  }
  return SUBSCRIPTION_TIERS[tierName];
};

export const formatPrice = (price: number): string => {
  return `$${(price / 100).toFixed(2)}`;
};

export const calculateSavings = (monthlyPrice: number, yearlyPrice: number): number => {
  const monthlyCost = monthlyPrice * 12;
  return ((monthlyCost - yearlyPrice) / monthlyCost) * 100;
};
