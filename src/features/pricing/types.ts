/**
 * Pricing Module - Type Definitions
 * Three-tier model: Free, Pay-per-check, Unlimited
 */

export type SubscriptionTierKey = 'free' | 'payPerCheck' | 'unlimited' | 'starter' | 'payPerUse' | 'personal' | 'professional' | 'enterprise';

export interface SubscriptionTier {
  name: string;
  price: number; // cents
  priceDisplay: string;
  interval: 'month' | 'once' | 'free';
  monthlyQuota: number | 'unlimited';
  fairUseCap?: number; // soft limit for unlimited plans
  overageRate?: number; // dollars per check
  features: string[];
  popular?: boolean;
  stripePriceId?: string;
  stripeProductId?: string;
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
  sellerBadges?: boolean;
}

export interface PricingFeature {
  tier: SubscriptionTierKey;
  features: string[];
}
