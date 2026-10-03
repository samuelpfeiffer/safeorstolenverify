/**
 * Pricing Module - Constants & Configuration
 * 
 * THREE-TIER MODEL (March 2026):
 *   Free  — 2 checks, no credit card
 *   $3.99 — per check, one-time, free account required
 *   $14.99/month — unlimited everything + seller badges
 */

import type { SubscriptionTier, SubscriptionTierKey } from './types';

// ── Stripe IDs ──────────────────────────────────────────────
export const PAY_PER_CHECK_PRICE_ID  = 'price_1T8uNDGxnZLw8J7OrBKrbePR';
export const PAY_PER_CHECK_PRODUCT_ID = 'prod_U78eaGwFkIA2Ic';

export const UNLIMITED_PRICE_ID     = 'price_1T8uToGxnZLw8J7O6GcOuV1w';
export const UNLIMITED_PRODUCT_ID   = 'prod_U78lRFEHuOd01t';

// ── Limits ──────────────────────────────────────────────────
export const FREE_SEARCH_LIMIT = 2;   // lead-magnet free checks
export const FAIR_USE_CAP      = 1000; // monthly soft cap for abuse prevention

// ── Tier Definitions ────────────────────────────────────────
export const SUBSCRIPTION_TIERS: Record<SubscriptionTierKey, SubscriptionTier> = {
  // ─── Active tiers ──────────────────────────────────────
  free: {
    name: "Free",
    price: 0,
    priceDisplay: "Free",
    interval: "free",
    monthlyQuota: FREE_SEARCH_LIMIT,
    tier: "free",
    features: [
      "2 free verification checks",
      "All item types supported",
      "No credit card required",
    ],
    receiptsIncluded: false,
    historyRetention: 0,
    trustBadges: false,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false,
    sellerBadges: false,
  },

  payPerCheck: {
    name: "Pay Per Check",
    price: 399,
    priceDisplay: "$3.99",
    interval: "once",
    monthlyQuota: 1,
    stripePriceId: PAY_PER_CHECK_PRICE_ID,
    stripeProductId: PAY_PER_CHECK_PRODUCT_ID,
    tier: "payPerCheck",
    features: [
      "One-time verification",
      "Free account required",
      "Instant results",
      "PDF verification receipt",
    ],
    receiptsIncluded: true,
    historyRetention: 30,
    trustBadges: false,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false,
    sellerBadges: false,
  },

  unlimited: {
    name: "Unlimited",
    price: 1499,
    priceDisplay: "$14.99",
    interval: "month",
    monthlyQuota: 'unlimited',
    fairUseCap: FAIR_USE_CAP,
    stripePriceId: UNLIMITED_PRICE_ID,
    stripeProductId: UNLIMITED_PRODUCT_ID,
    tier: "unlimited",
    popular: true,
    features: [
      "Unlimited verification checks",
      "All item types: phones, cars, laptops, tools, bikes & more",
      "IMEI, VIN, license plate & serial number lookups",
      "Verified seller badges",
      "Priority processing & support",
      "PDF verification receipts",
      "Full verification history",
      "Cancel anytime",
    ],
    receiptsIncluded: true,
    historyRetention: 'unlimited',
    trustBadges: true,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false,
    sellerBadges: true,
  },

  // ─── Legacy tiers (kept for existing subscribers) ──────
  starter: {
    name: "Starter (Legacy)",
    price: 499,
    priceDisplay: "$4.99",
    interval: "month",
    monthlyQuota: 15,
    stripePriceId: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
    tier: "starter",
    features: ["Legacy plan — migrated to $14.99/mo unlimited"],
    receiptsIncluded: true,
    historyRetention: 60,
    trustBadges: true,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false,
  },
  payPerUse: {
    name: "Single Verification (Legacy)",
    price: 99,
    priceDisplay: "$3.99",
    interval: "once",
    monthlyQuota: 1,
    stripePriceId: 'price_1T3nfCGxnZLw8J7OwqSRSPel',
    tier: "payPerUse",
    features: ["Legacy — use new Pay Per Check instead"],
    receiptsIncluded: true,
    historyRetention: 30,
    trustBadges: false,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false,
  },
  personal: {
    name: "Personal (Legacy)",
    price: 999,
    priceDisplay: "$9.99",
    interval: "month",
    monthlyQuota: 50,
    stripePriceId: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',
    tier: "personal",
    features: ["Legacy plan — migrated to $14.99/mo unlimited"],
    receiptsIncluded: true,
    historyRetention: 'unlimited',
    trustBadges: true,
    apiAccess: false,
    bulkUpload: false,
    whiteLabel: false,
    phoneSupport: false,
    dedicatedManager: false,
  },
  professional: {
    name: "Professional (Legacy)",
    price: 2999,
    priceDisplay: "$29.99",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    tier: "professional",
    features: ["Legacy plan — migrated to $14.99/mo unlimited"],
    receiptsIncluded: true,
    historyRetention: 'unlimited',
    trustBadges: true,
    apiAccess: true,
    bulkUpload: true,
    whiteLabel: true,
    phoneSupport: true,
    dedicatedManager: false,
  },
  enterprise: {
    name: "Enterprise (Legacy)",
    price: 9900,
    priceDisplay: "$99",
    interval: "month",
    monthlyQuota: 'unlimited',
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    tier: "enterprise",
    features: ["Legacy plan — Enterprise"],
    receiptsIncluded: true,
    historyRetention: 'unlimited',
    trustBadges: true,
    apiAccess: true,
    bulkUpload: true,
    whiteLabel: true,
    phoneSupport: true,
    dedicatedManager: true,
  },
};

// Legacy tier name mapping for backward compatibility
export const LEGACY_TIER_MAPPING: Record<string, SubscriptionTierKey> = {
  'Basic': 'unlimited',
  'Premium': 'unlimited',
  'Enterprise': 'unlimited',
  'business75': 'unlimited',
  'business300': 'unlimited',
  'individual': 'unlimited',
  'business': 'unlimited',
  'starter': 'unlimited',
  'personal': 'unlimited',
  'professional': 'unlimited',
};
