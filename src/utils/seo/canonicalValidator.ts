/**
 * Canonical URL Validator
 * 
 * Runtime validation system for canonical URLs to prevent:
 * - Duplicate canonical tags
 * - Wrong canonical URLs pointing to homepage
 * - Canonical mismatches causing GSC errors
 */

export interface CanonicalValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  canonicalUrl: string | null;
  currentUrl: string;
  pagePathname: string;
}

/**
 * Validate canonical URL on current page
 */
export const validateCanonical = (): CanonicalValidationResult => {
  const result: CanonicalValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    canonicalUrl: null,
    currentUrl: window.location.href,
    pagePathname: window.location.pathname,
  };

  // Find all canonical tags
  const canonicalTags = document.querySelectorAll('link[rel="canonical"]');
  
  // Error: No canonical tag
  if (canonicalTags.length === 0) {
    result.isValid = false;
    result.errors.push('No canonical tag found on page');
    return result;
  }

  // Error: Multiple canonical tags
  if (canonicalTags.length > 1) {
    result.isValid = false;
    result.errors.push(`Found ${canonicalTags.length} canonical tags. Only 1 allowed.`);
    result.warnings.push('Multiple canonicals confuse search engines');
  }

  // Get the canonical URL
  const canonicalElement = canonicalTags[0] as HTMLLinkElement;
  const canonicalUrl = canonicalElement.href;
  result.canonicalUrl = canonicalUrl;

  try {
    const canonical = new URL(canonicalUrl);
    const current = new URL(window.location.href);

    // Clean paths for comparison (remove trailing slashes)
    const canonicalPath = canonical.pathname === '/' ? '/' : canonical.pathname.replace(/\/+$/, '');
    const currentPath = current.pathname === '/' ? '/' : current.pathname.replace(/\/+$/, '');

    // Error: Canonical path doesn't match current path
    if (canonicalPath !== currentPath) {
      result.isValid = false;
      result.errors.push(
        `Canonical path mismatch:\n` +
        `  Expected: ${currentPath}\n` +
        `  Found: ${canonicalPath}`
      );
      
      // Special case: page pointing to homepage (common error)
      if (canonicalPath === '/' && currentPath !== '/') {
        result.warnings.push(
          '⚠️ CRITICAL: This page is pointing to homepage as canonical!\n' +
          'This causes "Duplicate without user-selected canonical" errors in GSC.'
        );
      }
    }

    // Warning: Protocol mismatch
    if (canonical.protocol !== 'https:') {
      result.warnings.push(`Canonical should use HTTPS, found: ${canonical.protocol}`);
    }

    // Warning: Wrong domain
    if (canonical.hostname !== 'safeorstolen.com') {
      result.warnings.push(
        `Canonical domain should be safeorstolen.com, found: ${canonical.hostname}`
      );
    }

    // Warning: Canonical has query parameters
    if (canonical.search) {
      result.warnings.push(
        `Canonical URL contains query parameters: ${canonical.search}\n` +
        'Canonicals should not include query params unless specifically needed.'
      );
    }

    // Warning: Canonical has hash
    if (canonical.hash) {
      result.warnings.push(
        `Canonical URL contains hash: ${canonical.hash}\n` +
        'Canonicals should not include hash fragments.'
      );
    }

  } catch (error) {
    result.isValid = false;
    result.errors.push(`Invalid canonical URL format: ${canonicalUrl}`);
  }

  return result;
};

/**
 * Format validation result for console output
 */
export const formatCanonicalReport = (result: CanonicalValidationResult): string => {
  const lines: string[] = [];
  
  lines.push('╔════════════════════════════════════════════════════════════╗');
  lines.push('║         CANONICAL URL VALIDATION REPORT                   ║');
  lines.push('╚════════════════════════════════════════════════════════════╝');
  lines.push('');
  
  lines.push(`Status: ${result.isValid ? '✅ VALID' : '❌ INVALID'}`);
  lines.push(`Current Page: ${result.pagePathname}`);
  lines.push(`Canonical URL: ${result.canonicalUrl || 'NOT FOUND'}`);
  lines.push('');

  if (result.errors.length > 0) {
    lines.push('🚨 ERRORS:');
    result.errors.forEach((error, i) => {
      lines.push(`  ${i + 1}. ${error}`);
    });
    lines.push('');
  }

  if (result.warnings.length > 0) {
    lines.push('⚠️  WARNINGS:');
    result.warnings.forEach((warning, i) => {
      lines.push(`  ${i + 1}. ${warning}`);
    });
    lines.push('');
  }

  if (result.isValid && result.errors.length === 0 && result.warnings.length === 0) {
    lines.push('✅ All canonical URL checks passed!');
    lines.push('');
  }

  lines.push('─────────────────────────────────────────────────────────────');
  
  return lines.join('\n');
};

/**
 * Log canonical validation to console (development only)
 */
export const logCanonicalValidation = (): void => {
  if (import.meta.env.DEV) {
    const result = validateCanonical();
    console.log(formatCanonicalReport(result));
    
    // Make result available globally for debugging
    (window as any).__canonicalValidation = result;
  }
};

/**
 * Continuous monitoring in development
 */
export const startCanonicalMonitoring = (): (() => void) => {
  if (!import.meta.env.DEV) {
    return () => {}; // No-op in production
  }

  // Check on page load
  setTimeout(() => {
    logCanonicalValidation();
  }, 2000);

  // Check on URL changes (for SPAs)
  let lastPathname = window.location.pathname;
  const interval = setInterval(() => {
    if (window.location.pathname !== lastPathname) {
      lastPathname = window.location.pathname;
      setTimeout(() => {
        logCanonicalValidation();
      }, 1000);
    }
  }, 1000);

  // Return cleanup function
  return () => clearInterval(interval);
};
