/**
 * Pricing Module - Utility Functions
 * Helper functions for pricing calculations and tier management
 */

import type { SubscriptionTier, SubscriptionTierKey } from './types';
import { SUBSCRIPTION_TIERS, LEGACY_TIER_MAPPING } from './constants';

/**
 * Get features list for a specific tier
 */
export const getTierFeatures = (tier: SubscriptionTierKey): string[] => {
  return SUBSCRIPTION_TIERS[tier]?.features || [];
};

/**
 * Get monthly quota for a specific tier
 */
export const getTierQuota = (tier: SubscriptionTierKey): number | 'unlimited' => {
  return SUBSCRIPTION_TIERS[tier]?.monthlyQuota || 0;
};

/**
 * Get overage rate for a specific tier
 */
export const getOverageRate = (tier: SubscriptionTierKey): number | undefined => {
  return SUBSCRIPTION_TIERS[tier]?.overageRate;
};

/**
 * Format price from cents to dollar string
 */
export const formatPrice = (priceInCents: number): string => {
  return `$${(priceInCents / 100).toFixed(2)}`;
};

/**
 * Get Stripe Price ID for a subscription tier
 */
export const getSubscriptionPriceId = (tier: string): string => {
  const tierData = getSubscriptionTier(tier);
  return tierData?.stripePriceId || '';
};

/**
 * Get subscription tier with legacy name support
 * Returns unlimited tier as default for new subscriptions
 */
export const getSubscriptionTier = (tierName?: string): SubscriptionTier => {
  if (!tierName) return SUBSCRIPTION_TIERS.unlimited;
  
  const normalized = tierName.toLowerCase();
  
  // Try direct key match
  const tierKey = tierName as SubscriptionTierKey;
  if (SUBSCRIPTION_TIERS[tierKey]) {
    return SUBSCRIPTION_TIERS[tierKey];
  }
  
  // Try matching by tier name (e.g., "Unlimited Plan" -> unlimited)
  for (const [key, tier] of Object.entries(SUBSCRIPTION_TIERS)) {
    if (tier.name.toLowerCase() === normalized) {
      return tier;
    }
  }
  
  // Try legacy mapping
  const mappedKey = LEGACY_TIER_MAPPING[tierName];
  return SUBSCRIPTION_TIERS[mappedKey] || SUBSCRIPTION_TIERS.unlimited;
};

/**
 * Check if tier has a specific feature
 */
export const tierHasFeature = (
  tier: SubscriptionTierKey,
  feature: keyof Pick<SubscriptionTier, 
    'receiptsIncluded' | 'trustBadges' | 'apiAccess' | 
    'bulkUpload' | 'whiteLabel' | 'phoneSupport' | 'dedicatedManager'>
): boolean => {
  return SUBSCRIPTION_TIERS[tier]?.[feature] || false;
};

/**
 * Get all tiers suitable for businesses
 */
export const getBusinessTiers = (): SubscriptionTier[] => {
  return [
    SUBSCRIPTION_TIERS.professional,
    SUBSCRIPTION_TIERS.enterprise
  ];
};

/**
 * Get all tiers suitable for individuals
 */
export const getPersonalTiers = (): SubscriptionTier[] => {
  return [
    SUBSCRIPTION_TIERS.free,
    SUBSCRIPTION_TIERS.payPerCheck,
    SUBSCRIPTION_TIERS.unlimited,
  ];
};

/**
 * Calculate total cost with overage
 */
export const calculateTotalCost = (
  tier: SubscriptionTierKey,
  verificationsUsed: number
): number => {
  const tierData = SUBSCRIPTION_TIERS[tier];
  if (!tierData) return 0;
  
  const baseCost = tierData.price;
  
  // Unlimited plans have no overage
  if (tierData.monthlyQuota === 'unlimited') {
    return baseCost;
  }
  
  // Calculate overage if applicable
  const overage = Math.max(0, verificationsUsed - tierData.monthlyQuota);
  const overageCost = overage * (tierData.overageRate || 0) * 100; // Convert to cents
  
  return baseCost + overageCost;
};
