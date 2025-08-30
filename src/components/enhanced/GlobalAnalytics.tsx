import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GlobalAnalytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4 setup - placeholder ID for development
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual production ID
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: 'SafeOrStolen.com - Production Ready',
      page_location: window.location.href,
      custom_map: {
        custom_parameter_1: 'marketplace_verification',
        custom_parameter_2: 'global_platform'
      }
    });

    // Enhanced E-commerce tracking for verification events
    const trackVerification = (itemType: string, result: string) => {
      gtag('event', 'verification_complete', {
        event_category: 'verification',
        event_label: itemType,
        custom_result: result,
        value: 1
      });
    };

    // Conversion tracking for enterprise leads
    const trackEnterpriseInterest = (source: string) => {
      gtag('event', 'enterprise_interest', {
        event_category: 'lead_generation',
        event_label: source,
        value: 100 // Estimated value of enterprise lead
      });
    };

    // Track high-value page visits
    const trackHighValuePage = (pageName: string) => {
      gtag('event', 'high_value_page_view', {
        event_category: 'engagement',
        event_label: pageName,
        value: 10
      });
    };

    // Enhanced user engagement tracking
    const trackEngagement = () => {
      let scrollDepth = 0;
      let timeOnPage = Date.now();

      // Scroll depth tracking
      const handleScroll = () => {
        const currentScrollDepth = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (currentScrollDepth > scrollDepth && currentScrollDepth % 25 === 0) {
          scrollDepth = currentScrollDepth;
          gtag('event', 'scroll', {
            event_category: 'engagement',
            value: scrollDepth
          });
        }
      };

      // Time on page tracking
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - timeOnPage) / 1000);
        if (timeSpent > 30) { // Only track if user spent more than 30 seconds
          gtag('event', 'time_on_page', {
            event_category: 'engagement',
            value: timeSpent
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('beforeunload', trackTimeOnPage);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    };

    // Initialize engagement tracking
    const cleanupEngagement = trackEngagement();

    // Track specific business goals
    gtag('event', 'page_view', {
      event_category: 'navigation',
      event_label: 'global_domination_platform',
      custom_dimension_1: 'marketplace_integration_focus',
      custom_dimension_2: 'enterprise_ready'
    });

    // Make tracking functions globally available
    (window as any).trackVerification = trackVerification;
    (window as any).trackEnterpriseInterest = trackEnterpriseInterest;
    (window as any).trackHighValuePage = trackHighValuePage;

    return cleanupEngagement;
  }, []);

  return null;
};