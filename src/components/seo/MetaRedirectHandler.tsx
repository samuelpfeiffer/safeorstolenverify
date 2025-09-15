import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Handles meta-level redirects and ensures search engines understand
 * the canonical domain structure (non-www preferred)
 */
export const MetaRedirectHandler: React.FC = () => {
  useEffect(() => {
    // Handle client-side redirect for www to non-www
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      
      // If we're on www, immediately redirect to non-www
      if (currentUrl.includes('://www.safeorstolen.com')) {
        const nonWwwUrl = currentUrl.replace('://www.safeorstolen.com', '://safeorstolen.com');
        
        // Use replace to avoid creating a history entry
        window.location.replace(nonWwwUrl);
        return;
      }

      // Also handle any http redirects to https
      if (currentUrl.startsWith('http://')) {
        const httpsUrl = currentUrl.replace('http://', 'https://');
        window.location.replace(httpsUrl);
        return;
      }
    }
  }, []);

  return (
    <Helmet>
      {/* Meta refresh as backup for server redirects */}
      {typeof window !== 'undefined' && window.location.hostname.startsWith('www.') && (
        <meta 
          httpEquiv="refresh" 
          content={`0; url=https://safeorstolen.com${window.location.pathname}${window.location.search}`} 
        />
      )}
      
      {/* Explicit canonical domain preference */}
      <meta name="preferred-domain" content="safeorstolen.com" />
      <meta name="canonical-domain" content="https://safeorstolen.com" />
      
      {/* Additional signals to search engines */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:160" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};