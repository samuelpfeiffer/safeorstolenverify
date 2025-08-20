
export interface SubscriptionTier {
  name: string;
  price: number;
  interval: 'month' | 'year';
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
  basic: {
    name: 'Basic',
    price: 999, // $9.99 in cents
    interval: 'month',
    features: [
      'Unlimited verifications',
      'Real-time database checks',
      'Basic verification reports',
      'Email support'
    ],
    stripePriceId: 'price_1RyGpLFzDDOvseYjOshm1xt1' // Basic monthly plan
  },
  premium: {
    name: 'Premium',
    price: 1999, // $19.99 in cents
    interval: 'month',
    popular: true,
    features: [
      'Everything in Basic',
      'Advanced verification reports',
      'API access (100 calls/month)',
      'Priority support',
      'Custom verification alerts'
    ],
    stripePriceId: 'price_1RyGqMFzDDOvseYjPiKWPInQ' // Premium monthly plan
  },
  enterprise: {
    name: 'Enterprise',
    price: 4999, // $49.99 in cents
    interval: 'month',
    features: [
      'Everything in Premium',
      'Unlimited API access',
      'White-label solution',
      'Custom integrations',
      'Dedicated account manager'
    ],
    stripePriceId: 'price_1QdcMgFzDDOvseYjHQRLVCzw' // Enterprise monthly plan
  }
};

export const getSubscriptionPriceId = (tier: 'basic' | 'premium' | 'enterprise'): string => {
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
