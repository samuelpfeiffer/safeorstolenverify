/**
 * Centralized Analytics Configuration
 * 
 * ⚠️ ACTION REQUIRED: Replace the placeholder GA4_MEASUREMENT_ID with your real ID
 * 
 * How to get your GA4 ID:
 * 1. Go to https://analytics.google.com/
 * 2. Create a new GA4 property for safeorstolen.com
 * 3. Copy your Measurement ID (format: G-XXXXXXXXXX)
 * 4. Replace the value below
 * 5. Save and deploy
 * 
 * This is the ONLY file you need to edit to enable Google Analytics!
 */

export const ANALYTICS_CONFIG = {
  /**
   * Google Analytics 4 Measurement ID
   * Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
   */
  GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX', // TODO: Replace with your GA4 ID
  
  /**
   * Google Search Console Verification Code
   * Already configured - no need to change
   */
  GSC_VERIFICATION: 'google29952b5cc1a6a4dd',
  
  /**
   * Analytics Features
   */
  FEATURES: {
    ENHANCED_TRACKING: true,
    CORE_WEB_VITALS: true,
    ENGAGEMENT_METRICS: true,
    SCHEMA_VALIDATION: true,
    CONVERSION_TRACKING: true,
  }
} as const;

// Helper to check if analytics is configured
export const isAnalyticsConfigured = (): boolean => {
  return ANALYTICS_CONFIG.GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX';
};

// Export for easy access
export const GA4_MEASUREMENT_ID = ANALYTICS_CONFIG.GA4_MEASUREMENT_ID;
