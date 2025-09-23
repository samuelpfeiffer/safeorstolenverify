import React, { useEffect } from 'react';
import { 
  initEnhancedAnalytics,
  trackEngagementMetrics,
  trackSchemaMarkup,
  trackReferralSources,
  trackEnhancedWebVitals
} from '@/utils/seo/analyticsOptimizer';

export const EnhancedAnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize enhanced SEO analytics
    initEnhancedAnalytics();
    
    console.log('Enhanced SEO Analytics initialized with:');
    console.log('- Advanced metadata tracking');
    console.log('- Schema markup validation');
    console.log('- Enhanced engagement metrics');
    console.log('- Core Web Vitals monitoring');
    console.log('- Referral source tracking');
    console.log('- A/B testing capabilities');
  }, []);

  return <>{children}</>;
};