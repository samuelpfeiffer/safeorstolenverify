/**
 * Meta Description Audit Utility
 * Ensures all pages have unique, optimized meta descriptions (150-160 characters)
 */

export interface MetaDescriptionIssue {
  page: string;
  issue: 'missing' | 'duplicate' | 'too_short' | 'too_long';
  current?: string;
  length?: number;
  recommendation: string;
}

export const OPTIMAL_META_LENGTH = { min: 150, max: 160 };

export const PAGE_META_DESCRIPTIONS: Record<string, string> = {
  '/': 'ONLY verification mobile app for iOS & Android. Check phones, cars, guns & items. 4 FREE verifications. Download now!',
  '/how-it-works': 'Learn how SafeOrStolen verifies phones, vehicles, electronics, and firearms in 30 seconds. Check IMEI, VIN, serial numbers across global databases.',
  '/pricing': 'Simple pricing: 2 free searches, $0.50 per check, or unlimited plans from $4.99/month. No hidden fees. Cancel anytime.',
  '/imei-check': 'Free IMEI checker. Verify if a phone is stolen, blacklisted, or clean before buying. Works for iPhone, Samsung, Android devices.',
  '/vin-verification': 'Free VIN checker. Verify vehicle history, theft records, and title status before buying a used car. Instant results from NICB database.',
  '/serial-number-checker': 'Check serial numbers for electronics, bikes, laptops, and power tools. Verify if items are stolen before purchasing on marketplaces.',
  '/firearms-check': 'Verify firearm serial numbers against ATF stolen gun database. Instant background check for gun buyers, sellers, and FFL dealers.',
  '/dashboard': 'SafeOrStolen verification dashboard. Track your searches, view history, manage alerts, and access premium features. Secure account portal.',
  '/for-consumers': 'Protect yourself from buying stolen goods on Facebook Marketplace, OfferUp, Craigslist. Verify before you buy. 2 free checks.',
  '/for-brands': 'API solutions for businesses, pawn shops, resellers. Bulk verification, compliance tools, and enterprise features. Protect your inventory.',
  '/about-problem': 'Over $15 billion in stolen goods sold annually on marketplaces. Learn how SafeOrStolen stops theft and protects consumers and businesses.',
  '/our-story': 'Founded in 2024 to solve the stolen goods crisis. Backed by FasterCapital, serving 100K+ users. Real-time database access to 50+ sources.',
  '/contact': 'Contact SafeOrStolen support team. Get help with verification, API integration, enterprise solutions, or report stolen items. 24/7 support.',
  '/privacy-policy': 'SafeOrStolen privacy policy. Learn how we protect your data, handle verification searches, and comply with GDPR, SOC 2 Type II standards.',
  '/terms-of-service': 'Terms of service for SafeOrStolen verification platform. User agreements, refund policy, acceptable use, and legal disclaimers.',
  '/report-stolen': 'Report stolen phones, vehicles, electronics, or firearms to SafeOrStolen database. Help prevent resale of stolen goods on marketplaces.',
  '/resource-center': 'Guides, tutorials, and resources for buyers, sellers, and businesses. Learn about IMEI verification, VIN checks, and fraud prevention.',
  '/database': 'Access 50+ global stolen goods databases. Real-time checks across NICB, GSMA, CheckMEND, ATF, and police databases worldwide.',
};

/**
 * Audit meta descriptions across the application
 */
export function auditMetaDescriptions(): MetaDescriptionIssue[] {
  const issues: MetaDescriptionIssue[] = [];
  const seenDescriptions = new Map<string, string[]>();

  Object.entries(PAGE_META_DESCRIPTIONS).forEach(([page, description]) => {
    // Check length
    if (description.length < OPTIMAL_META_LENGTH.min) {
      issues.push({
        page,
        issue: 'too_short',
        current: description,
        length: description.length,
        recommendation: `Expand to ${OPTIMAL_META_LENGTH.min}-${OPTIMAL_META_LENGTH.max} characters. Current: ${description.length}`,
      });
    } else if (description.length > OPTIMAL_META_LENGTH.max) {
      issues.push({
        page,
        issue: 'too_long',
        current: description,
        length: description.length,
        recommendation: `Shorten to ${OPTIMAL_META_LENGTH.min}-${OPTIMAL_META_LENGTH.max} characters. Current: ${description.length}`,
      });
    }

    // Check for duplicates
    if (seenDescriptions.has(description)) {
      const pages = seenDescriptions.get(description)!;
      issues.push({
        page,
        issue: 'duplicate',
        current: description,
        recommendation: `Duplicate of: ${pages.join(', ')}. Write unique description.`,
      });
    } else {
      seenDescriptions.set(description, [page]);
    }
  });

  return issues;
}

/**
 * Get optimized meta description for a given path
 */
export function getMetaDescription(path: string): string {
  // Remove trailing slash
  const cleanPath = path.replace(/\/$/, '') || '/';
  
  return PAGE_META_DESCRIPTIONS[cleanPath] || 
    'SafeOrStolen - Verify IMEI, VIN, serial numbers. Check if phones, cars, electronics are stolen before buying. 2 free searches.';
}

/**
 * Validate a meta description
 */
export function validateMetaDescription(description: string): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  if (description.length < OPTIMAL_META_LENGTH.min) {
    issues.push(`Too short: ${description.length} chars (min: ${OPTIMAL_META_LENGTH.min})`);
  }

  if (description.length > OPTIMAL_META_LENGTH.max) {
    issues.push(`Too long: ${description.length} chars (max: ${OPTIMAL_META_LENGTH.max})`);
  }

  if (!description.includes('SafeOrStolen') && !description.includes('verify') && !description.includes('check')) {
    issues.push('Missing key branding or action words');
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}
