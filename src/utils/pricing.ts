
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
    name: 'Pay Per Lookup',
    price: 100, // $1.00 in cents
    interval: 'month',
    features: [
      'Quick, on-demand access',
      'Instantly verify IMEI, VIN, or serial',
      'No subscription required',
      'Email support'
    ],
    stripePriceId: 'Pay Per Lookup' // Use product name for dynamic matching
  },
  basic: {
    name: 'Personal Use - Instantly Check if an Item is Stolen',
    price: 799, // $7.99 in cents
    interval: 'month',
    features: [
      '7-day free trial',
      '30 verifications/month',
      'Real-time database checks',
      'Basic verification reports',
      'Email support'
    ],
    stripePriceId: 'Personal Use - Instantly Check if an Item is Stolen' // Use product name for dynamic matching
  },
  entryLevel: {
    name: 'Professional - Stolen Item Lookup',
    price: 1000, // $10.00 in cents
    interval: 'month',
    popular: true,
    features: [
      '7-day free trial',
      'Unlimited verifications',
      'Real-time database checks',
      'Enhanced verification reports',
      'Priority email support',
      'Early access to new features'
    ],
    stripePriceId: 'Professional - Stolen Item Lookup' // Use product name for dynamic matching
  }
};

export const getSubscriptionPriceId = (tier: 'payPerCheck' | 'entryLevel' | 'basic'): string => {
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
