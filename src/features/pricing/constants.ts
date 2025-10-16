/**
 * Pricing Module - Constants & Configuration
 * Subscription tiers with real Stripe Product IDs
 */

import type { SubscriptionTier, SubscriptionTierKey } from './types';

export const SUBSCRIPTION_TIERS: Record<SubscriptionTierKey, SubscriptionTier> = {
  free: {
    name: "Free Trial",
    price: 0,
    priceDisplay: "Free",
    interval: "once",
    monthlyQuota: 999,
    tier: "free",
    features: [
      "Unlimited verifications for 14 days",
      "Full access to all features",
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
    price: 50,
    priceDisplay: "$0.50",
    interval: "once",
    monthlyQuota: 1,
    stripePriceId: "prod_T9lOGzQX72aTYu",
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
    price: 499,
    priceDisplay: "$4.99",
    interval: "month",
    monthlyQuota: 15,
    overageRate: 0.50,
    stripePriceId: "prod_TDfkVL8GE1dRt5",
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
    price: 999,
    priceDisplay: "$9.99",
    interval: "month",
    monthlyQuota: 50,
    overageRate: 0.40,
    stripePriceId: "prod_TDg5LsN4Fw5vtg",
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
    price: 2999,
    priceDisplay: "$29.99",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: "prod_TDg5LsN4Fw5vtg",
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
    price: 9900,
    priceDisplay: "Custom",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: "prod_TDg9BzuF9bPHAI",
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

// Legacy tier name mapping for backward compatibility
export const LEGACY_TIER_MAPPING: Record<string, SubscriptionTierKey> = {
  'Basic': 'starter',
  'Premium': 'personal',
  'Enterprise': 'professional',
  'business75': 'professional',
  'business300': 'professional',
  'individual': 'personal',
  'business': 'professional'
};
