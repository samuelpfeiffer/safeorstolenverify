export type SubscriptionTierKey = 'free' | 'payPerUse' | 'starter' | 'personal' | 'professional' | 'enterprise';

export interface SubscriptionTier {
  name: string;
  price: number; // cents
  priceDisplay: string;
  interval: 'month' | 'once';
  monthlyQuota: number | 'unlimited';
  overageRate?: number; // dollars per check
  features: string[];
  popular?: boolean;
  stripePriceId?: string;
  tier: SubscriptionTierKey;
  
  // Feature flags
  receiptsIncluded: boolean;
  historyRetention: number | 'unlimited'; // days
  trustBadges: boolean;
  apiAccess: boolean;
  bulkUpload: boolean;
  whiteLabel: boolean;
  phoneSupport: boolean;
  dedicatedManager: boolean;
}

export const SUBSCRIPTION_TIERS: Record<SubscriptionTierKey, SubscriptionTier> = {
  free: {
    name: "Free IMEI Verification",
    price: 0,
    priceDisplay: "Free",
    interval: "once",
    monthlyQuota: 2,
    tier: "free",
    features: [
      "2 free verifications",
      "Valid for 14 days",
      "Basic Safe/Stolen results",
      "No credit card required"
    ],
    receiptsIncluded: false,
    historyRetention: 0,
    trustBadges: false,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false
  },
  payPerUse: {
    name: "Single Verification",
    price: 50, // $0.50
    priceDisplay: "$0.50",
    interval: "once",
    monthlyQuota: 1,
    tier: "payPerUse",
    features: [
      "$0.50 per verification",
      "No monthly commitment",
      "Instant verification",
      "PDF receipt generation",
      "30-day result history"
    ],
    receiptsIncluded: true,
    historyRetention: 30,
    trustBadges: false,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false
  },
  starter: {
    name: "Starter Plan",
    price: 499, // $4.99
    priceDisplay: "$4.99",
    interval: "month",
    monthlyQuota: 15,
    overageRate: 0.50,
    stripePriceId: "price_starter_monthly_499",
    tier: "starter",
    features: [
      "15 verifications per month",
      "PDF receipt generator",
      "90-day search history",
      "Email sharing of receipts",
      "Basic customer support",
      "$0.50 per additional check"
    ],
    receiptsIncluded: true,
    historyRetention: 90,
    trustBadges: false,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false
  },
  personal: {
    name: "Personal Plan",
    price: 999, // $9.99
    priceDisplay: "$9.99",
    interval: "month",
    monthlyQuota: 50,
    overageRate: 0.40,
    stripePriceId: "price_personal_monthly_999",
    tier: "personal",
    popular: true,
    features: [
      "50 verifications per month",
      "Trust badges & certificates",
      "Unlimited search history",
      "Priority email support",
      "Social media sharing",
      "Downloadable verification badges",
      "$0.40 per additional check"
    ],
    receiptsIncluded: true,
    historyRetention: 'unlimited',
    trustBadges: true,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false
  },
  professional: {
    name: "Professional Plan",
    price: 2999, // $29.99
    priceDisplay: "$29.99",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: "price_professional_monthly_2999",
    tier: "professional",
    features: [
      "Unlimited verifications",
      "Bulk verification tools (CSV upload)",
      "Advanced reporting & analytics",
      "API access (10,000 calls/month)",
      "White-label certificates",
      "Priority phone support",
      "Team management (up to 5 users)"
    ],
    receiptsIncluded: true,
    historyRetention: 'unlimited',
    trustBadges: true,
    apiAccess: true,
    bulkUpload: true,
    whiteLabel: true,
    phoneSupport: true,
    dedicatedManager: false
  },
  enterprise: {
    name: "Enterprise Plan",
    price: 9900, // $99.00 starting
    priceDisplay: "Custom",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: "price_enterprise_custom",
    tier: "enterprise",
    features: [
      "Unlimited verifications",
      "Unlimited API calls",
      "Custom integrations",
      "Dedicated account manager",
      "99.9% SLA guarantees",
      "Custom branding & white-label",
      "Advanced compliance reporting",
      "Multi-location support"
    ],
    receiptsIncluded: true,
    historyRetention: 'unlimited',
    trustBadges: true,
    apiAccess: true,
    bulkUpload: true,
    whiteLabel: true,
    phoneSupport: true,
    dedicatedManager: true
  }
};

export const getTierFeatures = (tier: SubscriptionTierKey): string[] => {
  return SUBSCRIPTION_TIERS[tier].features;
};

export const getTierQuota = (tier: SubscriptionTierKey): number | 'unlimited' => {
  return SUBSCRIPTION_TIERS[tier].monthlyQuota;
};

export const getOverageRate = (tier: SubscriptionTierKey): number | undefined => {
  return SUBSCRIPTION_TIERS[tier].overageRate;
};

export const formatPrice = (price: number): string => {
  return `$${(price / 100).toFixed(2)}`;
};

// Backward compatibility helpers
export const getSubscriptionPriceId = (tier: string): string => {
  const tierKey = tier as SubscriptionTierKey;
  return SUBSCRIPTION_TIERS[tierKey]?.stripePriceId || '';
};

export const getSubscriptionTier = (tierName?: string): SubscriptionTier => {
  if (!tierName) return SUBSCRIPTION_TIERS.free;
  
  // Try direct match
  const tierKey = tierName as SubscriptionTierKey;
  if (SUBSCRIPTION_TIERS[tierKey]) {
    return SUBSCRIPTION_TIERS[tierKey];
  }
  
  // Legacy tier name mapping
  const legacyMapping: Record<string, SubscriptionTierKey> = {
    'Basic': 'starter',
    'Premium': 'personal',
    'Enterprise': 'professional',
    'business75': 'professional',
    'business300': 'professional',
    'individual': 'personal',
    'business': 'professional'
  };
  
  const mappedKey = legacyMapping[tierName];
  return SUBSCRIPTION_TIERS[mappedKey] || SUBSCRIPTION_TIERS.free;
};
