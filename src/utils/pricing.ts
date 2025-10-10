export interface SubscriptionTier {
  name: string;
  price: number;
  interval: 'month' | 'once';
  features?: string[];
  popular?: boolean;
  stripePriceId?: string;
  checksIncluded?: number;
  tier: 'pay_per_check' | 'bulk_50' | 'bulk_250' | 'business_75' | 'business_300' | 'enterprise_api';
  pricePerCheck?: number;
  hasAPI?: boolean;
  badge?: boolean;
}

export const SUBSCRIPTION_TIERS: Record<string, SubscriptionTier> = {
  // Pay-Per-Check (Casuals - No Account Required)
  payPerCheck: {
    name: 'Single Check',
    price: 99, // $0.99
    interval: 'once',
    tier: 'pay_per_check',
    checksIncluded: 1,
    pricePerCheck: 0.99,
    badge: false,
    features: [
      '1 instant device check',
      'No account required',
      'Instant verification report',
      'Mobile & web access',
      'Undercuts competition at $0.99'
    ],
    stripePriceId: 'Single Check'
  },
  
  // Bulk Packages
  bulk50: {
    name: '50 Checks Bundle',
    price: 3000, // $30.00
    interval: 'once',
    tier: 'bulk_50',
    checksIncluded: 50,
    pricePerCheck: 0.60,
    badge: true,
    features: [
      '50 device checks ($0.60 each)',
      'Credits never expire',
      'Verification history',
      'Downloadable trust badges',
      'Priority email support'
    ],
    stripePriceId: '50 Check Bundle'
  },
  
  bulk250: {
    name: '250 Checks Bundle',
    price: 10000, // $100.00
    interval: 'once',
    tier: 'bulk_250',
    checksIncluded: 250,
    pricePerCheck: 0.40,
    badge: true,
    popular: true,
    features: [
      '250 device checks ($0.40 each)',
      'Credits never expire',
      'Verification history & exports',
      'Embeddable trust badges',
      'Priority support',
      'Bulk upload tool'
    ],
    stripePriceId: '250 Check Bundle'
  },
  
  // Business Subscriptions
  business75: {
    name: 'Starter Business',
    price: 2500, // $25/month
    interval: 'month',
    tier: 'business_75',
    checksIncluded: 75,
    pricePerCheck: 0.33,
    hasAPI: false,
    badge: true,
    features: [
      '75 checks per month ($0.33 each)',
      'Auto-renews monthly',
      'Verification dashboard',
      'Embeddable trust badges',
      'Team management (up to 3 users)',
      'Priority support'
    ],
    stripePriceId: 'Starter Business'
  },
  
  business300: {
    name: 'Pro Business',
    price: 7500, // $75/month
    interval: 'month',
    tier: 'business_300',
    checksIncluded: 300,
    pricePerCheck: 0.25,
    hasAPI: true,
    badge: true,
    popular: true,
    features: [
      '300 checks per month ($0.25 each)',
      'Full API access',
      'Automated verification workflows',
      'White-label trust badges',
      'Advanced reporting & analytics',
      'Team management (unlimited users)',
      'Dedicated phone support'
    ],
    stripePriceId: 'Pro Business'
  },
  
  // Enterprise API
  enterpriseAPI: {
    name: 'Enterprise API',
    price: 10000, // $100/month minimum
    interval: 'month',
    tier: 'enterprise_api',
    checksIncluded: 500, // 500 checks at $0.20 = $100
    pricePerCheck: 0.20,
    hasAPI: true,
    badge: true,
    features: [
      'Volume pricing: $0.20 per check',
      '$100 monthly minimum (500 checks)',
      'Unlimited API calls',
      'Custom SLA agreements',
      'White-label solutions',
      'Dedicated account manager',
      'Custom integrations',
      '24/7 premium support'
    ],
    stripePriceId: 'Enterprise API'
  }
};

export const getSubscriptionPriceId = (tier: 'payPerCheck' | 'bulk50' | 'bulk250' | 'business75' | 'business300' | 'enterpriseAPI'): string => {
  return SUBSCRIPTION_TIERS[tier].stripePriceId || '';
};

export const getSubscriptionTier = (tierName?: string): SubscriptionTier => {
  if (!tierName || !SUBSCRIPTION_TIERS[tierName]) {
    return SUBSCRIPTION_TIERS.payPerCheck;
  }
  return SUBSCRIPTION_TIERS[tierName];
};

export const formatPrice = (price: number): string => {
  return `$${(price / 100).toFixed(2)}`;
};

export const calculatePricePerCheck = (tier: SubscriptionTier): number => {
  if (!tier.checksIncluded || tier.checksIncluded === 0) return 0;
  return tier.price / tier.checksIncluded / 100; // Convert cents to dollars
};

export const formatSavingsVsPayPerCheck = (tier: SubscriptionTier): string => {
  const payPerCheckPrice = SUBSCRIPTION_TIERS.payPerCheck.price / 100;
  const thisTierPricePerCheck = calculatePricePerCheck(tier);
  const savings = ((payPerCheckPrice - thisTierPricePerCheck) / payPerCheckPrice) * 100;
  return `Save ${Math.round(savings)}% vs. single checks`;
};
