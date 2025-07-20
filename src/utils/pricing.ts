
export interface SubscriptionTier {
  name: string;
  price: number;
  interval: 'month' | 'year';
  features?: string[];
  popular?: boolean;
  stripePriceId?: string;
}

export const SUBSCRIPTION_TIERS: Record<string, SubscriptionTier> = {
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
    stripePriceId: 'price_basic_monthly'
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
    stripePriceId: 'price_premium_monthly'
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
    stripePriceId: 'price_enterprise_monthly'
  }
};

export const formatPrice = (price: number): string => {
  return `$${(price / 100).toFixed(2)}`;
};

export const calculateSavings = (monthlyPrice: number, yearlyPrice: number): number => {
  const monthlyCost = monthlyPrice * 12;
  return ((monthlyCost - yearlyPrice) / monthlyCost) * 100;
};
