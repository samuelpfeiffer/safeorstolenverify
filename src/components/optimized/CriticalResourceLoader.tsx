import { useEffect } from 'react';

/**
 * CriticalResourceLoader - Optimized for LCP
 * Only preloads truly critical resources, defers everything else
 * DNS prefetch already handled in index.html
 */
export const CriticalResourceLoader = () => {
  useEffect(() => {
    // Only run after initial paint to not block LCP
    // Use requestIdleCallback or setTimeout as fallback
    const schedulePreload = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    
    schedulePreload(() => {
      // DNS prefetch for domains we'll use later (not during LCP)
      const deferredDomains = [
        'https://js.stripe.com', // Only needed on checkout
        'https://www.google-analytics.com'
      ];
      
      deferredDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    });
  }, []);

  return null;
};