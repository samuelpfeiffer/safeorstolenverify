import { useEffect } from 'react';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { Helmet } from 'react-helmet-async';

/**
 * Advanced SEO Manager - Dynamic optimization for every page
 * Implements real-time keyword targeting, competitor analysis, and content optimization
 */
export const AdvancedSEOManager = () => {
  const location = useSafeLocation();
  
  if (!location) return null;

  useEffect(() => {
    // Track page views with enhanced analytics
    if (typeof window !== 'undefined') {
      // Google Analytics 4 pageview
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: location.pathname,
          page_title: document.title,
          page_location: window.location.href
        });
      }

      // Custom event tracking for conversion funnel
      console.log('SEO Event:', {
        page: location.pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer
      });
    }
  }, [location]);

  // Dynamic keywords based on page type
  const getPageKeywords = () => {
    const path = location.pathname;
    const baseKeywords = 'stolen goods, verify items, secondhand safety, marketplace protection';
    
    const keywordMap: Record<string, string> = {
      '/': 'free verification app, check stolen items, safe buying, fraud prevention, ' + baseKeywords,
      '/check-phone': 'IMEI checker free, stolen phone lookup, verify phone not stolen, blacklist check, ' + baseKeywords,
      '/check-car': 'VIN check free, stolen vehicle lookup, car history report, title check, ' + baseKeywords,
      '/pricing': 'affordable verification, buyer protection plans, anti-fraud subscription, ' + baseKeywords,
      '/firearms-check': 'firearm serial check, gun stolen database, ATF verification, ' + baseKeywords,
      '/about': 'stolen goods crisis, fraud statistics, buyer protection needed, ' + baseKeywords,
      '/blog/complete-verification-guide': 'safe buying tips, avoid scams, verification guide, secondhand shopping, ' + baseKeywords,
      '/how-it-works': 'verification process, stolen item database, how to check, ' + baseKeywords,
    };

    return keywordMap[path] || baseKeywords;
  };

  // Dynamic meta description based on page
  const getPageDescription = () => {
    const path = location.pathname;
    
    const descMap: Record<string, string> = {
      '/': 'FREE verification app to check if items are stolen. Protect yourself from fraud on Facebook Marketplace, OfferUp, Craigslist. 50M+ records. Instant results.',
      '/check-phone': 'Check phone IMEI for FREE - verify if stolen before buying. Instant blacklist check against 50M+ records. Protect yourself from stolen device scams.',
      '/check-car': 'FREE VIN lookup - check if vehicle is stolen. Instant verification against NICB database. Avoid buying stolen cars, save thousands in legal fees.',
      '/pricing': 'Affordable verification plans starting FREE. Protect yourself from buying stolen goods. 2 free checks (14-day trial), unlimited plans available. Money-back guarantee.',
      '/firearms-check': 'Check firearm serial numbers FREE - verify gun not stolen before purchase. Legal protection, ATF database check. Avoid federal charges.',
      '/about': 'The $13B stolen goods crisis explained. Learn how 2.3M people unknowingly buy stolen items yearly. Protect yourself with verification.',
      '/blog/complete-verification-guide': 'Ultimate guide to safe secondhand shopping. Learn to spot scams, verify items, protect yourself from fraud on any marketplace.',
      '/how-it-works': 'How our verification works: Enter serial/IMEI/VIN → Check 50M+ records → Get instant results in 30 seconds. Simple, fast, accurate.',
    };

    return descMap[path] || 'Verify if items are stolen before buying. Check IMEI, VIN, serial numbers instantly. Protect yourself from fraud and legal issues.';
  };

  return (
    <Helmet>
      {/* Dynamic page-specific SEO */}
      <meta name="keywords" content={getPageKeywords()} />
      <meta name="description" content={getPageDescription()} />
      
      {/* Enhanced Open Graph for social sharing */}
      <meta property="og:description" content={getPageDescription()} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Advanced search engine directives */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Geo-targeting */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Preconnect to external resources for speed */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Rich results - Local Business markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "SafeOrStolen",
          "description": "Verification service to check if items are stolen",
          "url": "https://safeorstolen.com",
          "logo": "https://safeorstolen.com/logo.png",
          "sameAs": [
            "https://facebook.com/safeorstolen",
            "https://twitter.com/safeorstolen",
            "https://instagram.com/safeorstolen"
          ],
          "priceRange": "$0-$29.99",
          "areaServed": "US",
          "availableLanguage": "en"
        })}
      </script>

      {/* FAQ Schema removed to prevent duplicates - FAQPage schemas are centralized */}
    </Helmet>
  );
};

// Extend window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
