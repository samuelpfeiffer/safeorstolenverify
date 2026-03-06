/**
 * Pricing Module - Constants & Configuration
 * 2 free checks lead magnet, then $1/month unlimited
 */

import type { SubscriptionTier, SubscriptionTierKey } from './types';

/**
 * SIMPLIFIED PRICING MODEL (March 2026):
 * 
 * 2 free checks as lead magnet (no credit card required)
 * Then $1.00/month — unlimited everything
 * 
 * Stripe Price ID: price_1T77b7GxnZLw8J7OYB4jBGRB ($1.00/month recurring)
 * Product ID: prod_TDfkVL8GE1dRt5
 */

export const FREE_SEARCH_LIMIT = 2; // 2 free verifications as lead magnet
export const FAIR_USE_CAP = 1000; // Monthly soft limit for abuse prevention

export const UNLIMITED_PRICE_ID = 'price_1T77b7GxnZLw8J7OYB4jBGRB';
export const UNLIMITED_PRODUCT_ID = 'prod_TDfkVL8GE1dRt5';

export const SUBSCRIPTION_TIERS: Record<SubscriptionTierKey, SubscriptionTier> = {
  unlimited: {
    name: "Unlimited Plan",
    price: 100,
    priceDisplay: "$1.00",
    interval: "month",
    monthlyQuota: 'unlimited',
    fairUseCap: FAIR_USE_CAP,
    stripePriceId: UNLIMITED_PRICE_ID,
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
  // All new users should use the 'unlimited' plan at $1/mo
  starter: {
    name: "Starter Plan (Legacy)",
    price: 499,
    priceDisplay: "$4.99",
    interval: "month",
    monthlyQuota: 15,
    overageRate: 0.45,
    stripePriceId: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
    tier: "starter",
    features: ["Legacy plan - migrated to $1/mo unlimited"],
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
    name: "Single Verification (Legacy)",
    price: 99,
    priceDisplay: "$0.99",
    interval: "once",
    monthlyQuota: 1,
    stripePriceId: 'price_1T3nfCGxnZLw8J7OwqSRSPel',
    tier: "payPerUse",
    features: ["Legacy - use $1/mo unlimited instead"],
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
    name: "Personal Plan (Legacy)",
    price: 999,
    priceDisplay: "$9.99",
    interval: "month",
    monthlyQuota: 50,
    overageRate: 0.40,
    stripePriceId: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',
    tier: "personal",
    features: ["Legacy plan - migrated to $1/mo unlimited"],
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
    name: "Professional Plan (Legacy)",
    price: 2999,
    priceDisplay: "$29.99",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    tier: "professional",
    features: ["Legacy plan - migrated to $1/mo unlimited"],
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
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    tier: "enterprise",
    features: ["Legacy plan - Enterprise"],
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
