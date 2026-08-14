/**
 * Image Alt Tag Audit Utility
 * Ensures all images have descriptive, SEO-optimized alt attributes
 */

export interface ImageAltIssue {
  src: string;
  element: string;
  issue: 'missing' | 'generic' | 'too_short' | 'keyword_stuffed';
  currentAlt?: string;
  recommendation: string;
}

const GENERIC_ALT_TAGS = [
  'logo',
  'image',
  'photo',
  'picture',
  'icon',
  'safeorstolen',
  'verification',
  'img',
];

const OPTIMAL_ALT_LENGTH = { min: 10, max: 125 };

/**
 * Audit images on current page for alt tag issues
 */
export function auditImageAltTags(): ImageAltIssue[] {
  const issues: ImageAltIssue[] = [];
  const images = document.querySelectorAll('img');

  images.forEach((img) => {
    const src = img.getAttribute('src') || img.getAttribute('data-src') || 'unknown';
    const alt = img.getAttribute('alt') || '';

    // Missing alt tag
    if (!img.hasAttribute('alt')) {
      issues.push({
        src,
        element: img.outerHTML.substring(0, 100),
        issue: 'missing',
        recommendation: 'Add descriptive alt text. Use alt="" for decorative images.',
      });
      return;
    }

    // Decorative images should have alt=""
    if (img.getAttribute('role') === 'presentation' && alt !== '') {
      issues.push({
        src,
        element: img.outerHTML.substring(0, 100),
        issue: 'generic',
        currentAlt: alt,
        recommendation: 'Decorative image should have alt=""',
      });
      return;
    }

    // Skip if explicitly decorative
    if (alt === '') {
      return;
    }

    // Generic alt text
    if (GENERIC_ALT_TAGS.some(generic => alt.toLowerCase() === generic)) {
      issues.push({
        src,
        element: img.outerHTML.substring(0, 100),
        issue: 'generic',
        currentAlt: alt,
        recommendation: `Replace generic "${alt}" with descriptive text including context.`,
      });
    }

    // Too short
    if (alt.length < OPTIMAL_ALT_LENGTH.min) {
      issues.push({
        src,
        element: img.outerHTML.substring(0, 100),
        issue: 'too_short',
        currentAlt: alt,
        recommendation: `Expand to ${OPTIMAL_ALT_LENGTH.min}-${OPTIMAL_ALT_LENGTH.max} characters. Add more context.`,
      });
    }

    // Keyword stuffing detection
    const words = alt.toLowerCase().split(/\s+/);
    const uniqueWords = new Set(words);
    if (words.length - uniqueWords.size > 2) {
      issues.push({
        src,
        element: img.outerHTML.substring(0, 100),
        issue: 'keyword_stuffed',
        currentAlt: alt,
        recommendation: 'Remove repetitive keywords. Write naturally for accessibility.',
      });
    }
  });

  return issues;
}

/**
 * Suggested alt text patterns by image type
 */
export const ALT_TEXT_PATTERNS = {
  logo: 'SafeOrStolen - Stolen goods verification platform logo',
  heroImage: 'SafeOrStolen mobile app and web dashboard showing real-time verification results for phones, cars, and electronics',
  deviceScreenshot: (device: string, status: string) => 
    `${device} verification screen showing ${status} status with detailed database check results`,
  socialProof: (stat: string) => 
    `Trust indicator showing ${stat} for SafeOrStolen verification service`,
  featureIcon: (feature: string) => 
    `${feature} feature icon for SafeOrStolen stolen goods verification`,
  verificationBadge: (itemType: string) => 
    `Verified ${itemType} badge indicating item passed SafeOrStolen security checks`,
};

/**
 * Generate optimized alt text for common image types
 */
export function generateAltText(imageContext: {
  type: 'logo' | 'hero' | 'device' | 'social' | 'feature' | 'badge';
  context?: string;
}): string {
  switch (imageContext.type) {
    case 'logo':
      return ALT_TEXT_PATTERNS.logo;
    case 'hero':
      return ALT_TEXT_PATTERNS.heroImage;
    case 'device':
      return ALT_TEXT_PATTERNS.deviceScreenshot(
        imageContext.context || 'device',
        'clean'
      );
    case 'social':
      return ALT_TEXT_PATTERNS.socialProof(imageContext.context || 'buyers and sellers');
    case 'feature':
      return ALT_TEXT_PATTERNS.featureIcon(imageContext.context || 'verification');
    case 'badge':
      return ALT_TEXT_PATTERNS.verificationBadge(imageContext.context || 'item');
    default:
      return 'SafeOrStolen verification platform image';
  }
}
