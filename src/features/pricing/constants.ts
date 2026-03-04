/**
 * Pricing Module - Constants & Configuration
 * Simplified pricing: Unlimited ($1/month) — no free tier
 */

import type { SubscriptionTier, SubscriptionTierKey } from './types';

/**
 * SIMPLIFIED PRICING MODEL (March 2026):
 * 
 * Single plan: $1.00/month — unlimited everything
 * No free tier. No free searches. Subscribe to use.
 * 
 * Stripe Price ID: price_1T77b7GxnZLw8J7OYB4jBGRB ($1.00/month recurring)
 * Product ID: prod_TDfkVL8GE1dRt5
 */

export const FREE_SEARCH_LIMIT = 0; // No free searches
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
  starter: {
    name: "Starter Plan",
    price: 499,
    priceDisplay: "$4.99",
    interval: "month",
    monthlyQuota: 15,
    overageRate: 0.45,
    stripePriceId: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
    tier: "starter",
    features: ["Legacy plan - 15 verifications per month"],
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
    price: 99,
    priceDisplay: "$0.99",
    interval: "once",
    monthlyQuota: 1,
    stripePriceId: 'price_1T3nfCGxnZLw8J7OwqSRSPel',
    tier: "payPerUse",
    features: ["One verification check", "Instant results"],
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
    stripePriceId: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',
    tier: "personal",
    features: ["Legacy plan - 50 verifications per month"],
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
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    tier: "professional",
    features: ["Legacy plan - Unlimited verifications"],
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
