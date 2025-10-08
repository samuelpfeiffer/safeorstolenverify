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
  tier: 'free' | 'individual' | 'business' | 'enterprise' | 'personal' | 'credit_pack';
  creditsIncluded?: number;
}

export const SUBSCRIPTION_TIERS: Record<string, SubscriptionTier> = {
  free: {
    name: 'Free Trial',
    price: 0,
    interval: 'month',
    searchLimit: 2,
    tier: 'free',
    features: [
      '2 free checks (expires in 14 days)',
      'Basic item verification',
      'Instant results',
      'Mobile app access',
      'No credit card required'
    ]
  },
  
  individual: {
    name: 'Individual',
    price: 499, // $4.99/month
    yearlyPrice: 4788, // $47.88/year (20% discount)
    interval: 'month',
    tier: 'individual',
    popular: true,
    features: [
      'Unlimited checks',
      'Full search history',
      'Mobile app access',
      'Priority email support',
      'Export reports'
    ],
    stripePriceId: 'Individual',
    stripeYearlyPriceId: 'Individual Annual'
  },
  
  business: {
    name: 'Business',
    price: 1999, // $19.99/month
    yearlyPrice: 19188, // $191.88/year (20% discount)
    interval: 'month',
    tier: 'business',
    features: [
      'Everything in Individual',
      'API access (1,000 calls/month)',
      'Bulk upload & verification',
      'Advanced reporting dashboard',
      'Priority phone support',
      'Team management (up to 5 users)',
      'Custom integrations'
    ],
    stripePriceId: 'Business',
    stripeYearlyPriceId: 'Business Annual'
  },
  
  enterprise: {
    name: 'Enterprise',
    price: 9900, // $99/month (starting price)
    yearlyPrice: 95040, // $950.40/year (20% discount)
    interval: 'month',
    tier: 'enterprise',
    features: [
      'Everything in Business',
      'White-label solutions',
      'Unlimited API calls',
      'Custom SLA agreements',
      'Dedicated account manager',
      'Custom integrations & development',
      'Unlimited team members',
      '24/7 premium support'
    ],
    stripePriceId: 'Enterprise',
    stripeYearlyPriceId: 'Enterprise Annual'
  },
  
  // Legacy tier for existing subscribers
  personal: {
    name: 'Personal (Legacy)',
    price: 999, // $9.99/month
    yearlyPrice: 9588, // $95.88/year (20% discount)
    interval: 'month',
    tier: 'personal',
    popular: false,
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

export const getSubscriptionPriceId = (tier: 'individual' | 'business' | 'enterprise' | 'personal' | 'creditPack5' | 'creditPack10' | 'creditPack25'): string => {
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
