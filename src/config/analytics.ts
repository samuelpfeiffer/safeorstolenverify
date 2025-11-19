/**
 * Centralized Analytics Configuration
 * 
 * ⚠️ ACTION REQUIRED: Configure your GA4 Measurement ID
 * 
 * Option 1 - Hardcode (Quick, but less secure):
 * Replace 'NEEDS_CONFIGURATION' below with your GA4 ID (format: G-XXXXXXXXXX)
 * 
 * Option 2 - Use Environment Variable (Recommended):
 * 1. Create a .env file in your project root
 * 2. Add: VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
 * 3. The code will automatically use it
 * 
 * How to get your GA4 ID:
 * 1. Go to https://analytics.google.com/
 * 2. Create a new GA4 property for safeorstolen.com
 * 3. Copy your Measurement ID (format: G-XXXXXXXXXX)
 * 
 * This is the ONLY file you need to edit to enable Google Analytics!
 */

export const ANALYTICS_CONFIG = {
  /**
   * Google Analytics 4 Measurement ID
   * Priority: Environment Variable > Hardcoded Value
   * CRITICAL FIX: Using G-0T59FF9N6Z as primary GA4 property (consolidation)
   */
  GA4_MEASUREMENT_ID: import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-0T59FF9N6Z',
  
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
  return ANALYTICS_CONFIG.GA4_MEASUREMENT_ID !== 'NEEDS_CONFIGURATION' && 
         ANALYTICS_CONFIG.GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX';
};

// Export for easy access
export const GA4_MEASUREMENT_ID = ANALYTICS_CONFIG.GA4_MEASUREMENT_ID;
