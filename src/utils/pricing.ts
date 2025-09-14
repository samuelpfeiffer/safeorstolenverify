
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
      'IMEI, VIN & Serial checks',
      'Basic verification reports',
      'Avoid stolen devices',
      'Legal protection'
    ]
  },
  unlimited: {
    name: 'Unlimited Verifications',
    price: 999, // $9.99 in cents
    interval: 'month',
    popular: true,
    features: [
      '7-day free trial',
      'Unlimited verifications',
      'All device types (IMEI/VIN/Serial)',
      'Advanced verification reports',
      'Verified Safe badge for sellers',
      'Priority support',
      'Prevent chargebacks',
      'Boost buyer confidence'
    ],
    stripePriceId: 'price_1S0uGQGxnZLw8J7OOgm02vdB'
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

export const getSubscriptionPriceId = (tier: 'unlimited' | 'report'): string => {
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
