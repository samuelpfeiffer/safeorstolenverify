import React, { useEffect } from 'react';

export const SEOMonitoring: React.FC = () => {
  useEffect(() => {
    // Monitor SEO performance and send data to analytics
    const monitorSEO = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        // Track page load time for SEO
        window.addEventListener('load', () => {
          const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
          
          window.gtag?.('event', 'page_performance', {
            event_category: 'SEO',
            event_action: 'Page Load Time',
            value: Math.round(loadTime),
            custom_parameter_1: window.location.pathname
          });
        });

        // Track scroll depth for engagement
        let maxScroll = 0;
        const trackScrollDepth = () => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          );
          
          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Track milestone scroll depths
            if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
              window.gtag?.('event', 'scroll_depth', {
                event_category: 'Engagement',
                event_action: 'Scroll Depth',
                value: scrollPercent,
                page_path: window.location.pathname
              });
            }
          }
        };

        window.addEventListener('scroll', trackScrollDepth, { passive: true });

        // Track time on page for SEO signals
        const startTime = Date.now();
        window.addEventListener('beforeunload', () => {
          const timeOnPage = Math.round((Date.now() - startTime) / 1000);
          
          window.gtag?.('event', 'time_on_page', {
            event_category: 'Engagement',
            event_action: 'Time on Page',
            value: timeOnPage,
            page_path: window.location.pathname
          });
        });

        // Track search queries if any
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q') || urlParams.get('search');
        
        if (searchQuery) {
          window.gtag('event', 'search', {
            search_term: searchQuery,
            event_category: 'Site Search',
            page_path: window.location.pathname
          });
        }
      }
    };

    // Initialize monitoring
    const timer = setTimeout(monitorSEO, 1000);
    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything visible
  return null;
};