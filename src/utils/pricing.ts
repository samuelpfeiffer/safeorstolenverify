export interface SubscriptionTier {
  name: string;
  price: number;
  yearlyPrice?: number;
  interval: 'month' | 'year';
  features?: string[];
  popular?: boolean;
  stripePriceId?: string;
  stripeYearlyPriceId?: string;
  searchLimit?: number;
  tier: 'free' | 'personal' | 'business' | 'credit_pack';
  creditsIncluded?: number;
}

export const SUBSCRIPTION_TIERS: Record<string, SubscriptionTier> = {
  free: {
    name: 'Free',
    price: 0,
    interval: 'month',
    searchLimit: 2,
    tier: 'free',
    features: [
      '2 free verifications',
      'Basic verification reports',
      'Search history',
      'Email support'
    ]
  },
  
  personal: {
    name: 'Personal',
    price: 999, // $9.99/month
    yearlyPrice: 9588, // $95.88/year (20% discount)
    interval: 'month',
    tier: 'personal',
    popular: true,
    features: [
      '7-day free trial',
      'Unlimited verifications',
      'Real-time database checks',
      'Enhanced verification reports',
      'Priority email support',
      'Search history & exports',
      'Mobile app access'
    ],
    stripePriceId: 'Personal',
    stripeYearlyPriceId: 'Personal Annual'
  },
  
  business: {
    name: 'Business',
    price: 2999, // $29.99/month
    yearlyPrice: 28788, // $287.88/year (20% discount)
    interval: 'month',
    tier: 'business',
    features: [
      '7-day free trial',
      'Unlimited verifications',
      'API access (coming soon)',
      'Bulk upload tools',
      'Team management (up to 5 users)',
      'Downloadable PDF reports',
      'Priority phone & email support',
      'Advanced analytics dashboard',
      'Custom integration support'
    ],
    stripePriceId: 'Business',
    stripeYearlyPriceId: 'Business Annual'
  },
  
  creditPack5: {
    name: '5 Credit Pack',
    price: 475, // $4.75
    interval: 'month',
    tier: 'credit_pack',
    creditsIncluded: 5,
    features: [
      '5 verification credits',
      'Credits never expire',
      'Use anytime',
      'Basic verification reports'
    ],
    stripePriceId: '5 Credit Pack'
  },
  
  creditPack10: {
    name: '10 Credit Pack',
    price: 900, // $9.00
    interval: 'month',
    tier: 'credit_pack',
    creditsIncluded: 10,
    popular: true,
    features: [
      '10 verification credits',
      'Credits never expire',
      'Use anytime',
      'Enhanced verification reports'
    ],
    stripePriceId: '10 Credit Pack'
  },
  
  creditPack25: {
    name: '25 Credit Pack',
    price: 2000, // $20.00
    interval: 'month',
    tier: 'credit_pack',
    creditsIncluded: 25,
    features: [
      '25 verification credits',
      'Credits never expire',
      'Use anytime',
      'Enhanced verification reports',
      'Priority processing'
    ],
    stripePriceId: '25 Credit Pack'
  }
};

export const getSubscriptionPriceId = (tier: 'personal' | 'business' | 'creditPack5' | 'creditPack10' | 'creditPack25'): string => {
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

export const calculateAnnualSavings = (monthlyPrice: number): number => {
  const yearlyPrice = monthlyPrice * 12 * 0.8; // 20% discount
  return (monthlyPrice * 12) - yearlyPrice;
};

export const formatSavings = (savings: number): string => {
  return `Save $${(savings / 100).toFixed(2)}`;
};
