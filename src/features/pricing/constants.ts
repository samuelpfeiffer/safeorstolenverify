/**
 * Pricing Module - Constants & Configuration
 * Simplified pricing: Free (2 checks) + Unlimited ($4.99/month)
 */

import type { SubscriptionTier, SubscriptionTierKey } from './types';

/**
 * SIMPLIFIED PRICING MODEL:
 * 
 * Free Tier: 2 free verification checks, no credit card required
 * Unlimited Plan: $4.99/month - unlimited checks with 300/month fair-use cap
 * 
 * Stripe Price ID for Unlimited: price_1SHEOxGxnZLw8J7O2zzfPVBK (was Starter at $4.99)
 */

export const FREE_SEARCH_LIMIT = 2;
export const FAIR_USE_CAP = 300; // Monthly soft limit for Unlimited plan

export const SUBSCRIPTION_TIERS: Record<SubscriptionTierKey, SubscriptionTier> = {
  unlimited: {
    name: "Unlimited Plan",
    price: 499,
    priceDisplay: "$4.99",
    interval: "month",
    monthlyQuota: 'unlimited',
    fairUseCap: FAIR_USE_CAP,
    stripePriceId: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
    tier: "unlimited",
    popular: true,
    features: [
      "Unlimited verification checks",
      "All item types: phones, cars, laptops, tools, bikes & more",
      "IMEI, VIN, license plate & serial number lookups",
      "Priority processing & support",
      "PDF verification receipts",
      "Verification history",
      "Cancel anytime"
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
  // Legacy tiers kept for backward compatibility with existing subscribers
  starter: {
    name: "Starter Plan",
    price: 499,
    priceDisplay: "$4.99",
    interval: "month",
    monthlyQuota: 15,
    overageRate: 0.45,
    stripePriceId: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
    tier: "starter",
    features: [
      "15 verifications per month",
      "Email support",
      "60-day search history"
    ],
    receiptsIncluded: true,
    historyRetention: 60,
    trustBadges: true,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false
  },
  payPerUse: {
    name: "Single Verification",
    price: 299,
    priceDisplay: "$2.99",
    interval: "once",
    monthlyQuota: 1,
    stripePriceId: 'price_1SSVqkGxnZLw8J7O3GwCyKRn',
    tier: "payPerUse",
    features: [
      "One verification check",
      "Instant results"
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
  personal: {
    name: "Personal Plan",
    price: 999,
    priceDisplay: "$9.99",
    interval: "month",
    monthlyQuota: 50,
    overageRate: 0.40,
    stripePriceId: 'price_1SHEUQGxnZLw8J7OinyVqNMK',
    tier: "personal",
    features: [
      "50 verifications per month",
      "Priority support"
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
    price: 2999,
    priceDisplay: "$29.99",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: 'price_1SHEiuGxnZLw8J7OszscBBk7',
    tier: "professional",
    features: [
      "Unlimited verifications",
      "API access",
      "Priority support"
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
    price: 9900,
    priceDisplay: "$99",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: 'price_1SHEnFGxnZLw8J7Oq1PM96Eo',
    tier: "enterprise",
    features: [
      "Unlimited verifications",
      "Dedicated support",
      "Custom integrations"
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

// Legacy tier name mapping for backward compatibility
export const LEGACY_TIER_MAPPING: Record<string, SubscriptionTierKey> = {
  'Basic': 'unlimited',
  'Premium': 'unlimited',
  'Enterprise': 'professional',
  'business75': 'professional',
  'business300': 'professional',
  'individual': 'unlimited',
  'business': 'professional',
  'starter': 'unlimited',
  'personal': 'unlimited'
};
