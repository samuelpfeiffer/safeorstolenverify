
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
    stripePriceId: 'price_1S9CuPGxnZLw8J7OyBKr6134'
  },
  entryLevel: {
    name: 'Entry Level (Individual)',
    price: 1000, // $10.00 in cents
    interval: 'month',
    features: [
      '7-day free trial',
      '20 verifications/month',
      'Real-time database checks',
      'Basic verification reports',
      'Email support'
    ],
    stripePriceId: 'price_1S9CrOGxnZLw8J7OAWHGY2P9'
  },
  basic: {
    name: 'Smart Buyer',
    price: 799, // $7.99 in cents
    interval: 'month',
    features: [
      '7-day free trial',
      'Unlimited verifications',
      'Real-time database checks',
      'Basic verification reports',
      'Email support'
    ],
    stripePriceId: 'price_1S0uGQGxnZLw8J7OOgm02vdB'
  },
  premium: {
    name: 'Savvy Shopper',
    price: 1900, // $19.00 in cents
    interval: 'month',
    popular: true,
    features: [
      '7-day free trial',
      'Everything in Smart Buyer',
      'Advanced verification reports',
      'Bulk checking tools',
      'Priority support'
    ],
    stripePriceId: 'price_1S0uGiGxnZLw8J7OQEwssbK7'
  },
  enterprise: {
    name: 'Business Pro',
    price: 4995, // $49.95 in cents
    interval: 'month',
    features: [
      '7-day free trial',
      'Everything in Savvy Shopper',
      'Unlimited API access',
      'White-label solution',
      'Custom integrations',
      'Dedicated account manager'
    ],
    stripePriceId: 'price_1S0uJsGxnZLw8J7OfU7XKMhV'
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
    stripePriceId: 'price_1Rz83i2eGaMDLFHonAmu86lS'
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
