/**
 * Pricing Module - Type Definitions
 * Centralized TypeScript interfaces for subscription and pricing
 */

export type SubscriptionTierKey = 'free' | 'starter' | 'payPerUse' | 'personal' | 'professional' | 'enterprise';

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

export interface PricingFeature {
  tier: SubscriptionTierKey;
  features: string[];
}
