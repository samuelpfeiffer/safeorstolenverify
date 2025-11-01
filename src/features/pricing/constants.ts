/**
 * Pricing Module - Constants & Configuration
 * Subscription tiers with real Stripe Product IDs
 */

import type { SubscriptionTier, SubscriptionTierKey } from './types';

/**
 * STRIPE CONFIGURATION INSTRUCTIONS:
 * 
 * Option 1 (Recommended): Use Product Name Matching
 * - Create products in Stripe Dashboard with these EXACT names
 * - The system will auto-match by name, no Price IDs needed
 * - Set stripePriceId to undefined for auto-matching
 * 
 * Option 2: Use Price IDs
 * - Get Price IDs from Stripe Dashboard → Products → [Product] → Pricing
 * - Update stripePriceId values below with your actual Price IDs
 * 
 * Products in Stripe:
 * 1. "Starter Plan" - $4.99/month recurring (Price: price_1SHEOxGxnZLw8J7O2zzfPVBK)
 * 2. "Personal Plan" - $9.99/month recurring
 * 3. "Professional Plan" - $29.99/month recurring  
 * 4. "Enterprise Plan" - $99/month recurring
 * 5. "Single Verification" - $0.50 one-time payment
 */

export const SUBSCRIPTION_TIERS: Record<SubscriptionTierKey, SubscriptionTier> = {
  free: {
    name: "Free IMEI Verification",
    price: 0,
    priceDisplay: "Free",
    interval: "month",
    monthlyQuota: 4,
    stripePriceId: undefined, // No Stripe product needed for free tier
    tier: "free",
    features: [
      "4 free verifications per month",
      "Lookup any device",
      "Phones, tablets & more",
      "Instant verification results",
      "PDF receipt generation",
      "No credit card required"
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
    overageRate: 0.45,
    stripePriceId: undefined, // Will auto-match by product name "Starter Plan"
    tier: "starter",
    features: [
      "15 verifications per month",
      "Email support",
      "60-day search history",
      "PDF receipt generation",
      "Basic verification badges",
      "$0.45 per additional check"
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
    price: 50,
    priceDisplay: "$0.50",
    interval: "once",
    monthlyQuota: 1,
    stripePriceId: undefined, // Will auto-match by product name "Single Verification"
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
  personal: {
    name: "Personal Plan",
    price: 999,
    priceDisplay: "$9.99",
    interval: "month",
    monthlyQuota: 50,
    overageRate: 0.40,
    stripePriceId: undefined, // Will auto-match by product name "Personal Plan"
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
    stripePriceId: undefined, // Will auto-match by product name "Professional Plan"
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
    stripePriceId: undefined, // Will auto-match by product name "Enterprise Plan"
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
  'Basic': 'personal',
  'Premium': 'personal',
  'Enterprise': 'professional',
  'business75': 'professional',
  'business300': 'professional',
  'individual': 'personal',
  'business': 'professional',
  'starter': 'starter'
};
