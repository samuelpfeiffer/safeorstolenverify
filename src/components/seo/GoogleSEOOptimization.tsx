import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleSEOOptimizationProps {
  pageType?: 'homepage' | 'product' | 'blog' | 'service' | 'legal';
  pageUrl?: string;
}

export const GoogleSEOOptimization: React.FC<GoogleSEOOptimizationProps> = ({ 
  pageType = 'homepage',
  pageUrl = '/'
}) => {
  const siteUrl = 'https://safeorstolen.com';
  const fullUrl = pageUrl.startsWith('http') ? pageUrl : `${siteUrl}${pageUrl}`;

  return (
    <Helmet>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="google29952b5cc1a6a4dd" />
      
      {/* Google Analytics 4 Enhanced */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            page_title: document.title,
            page_location: '${fullUrl}',
            content_group1: '${pageType}',
            send_page_view: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </script>

      {/* Core Web Vitals Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Enhanced Performance Hints */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Google-specific Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="google" content="nositelinksearchbox" />
      <meta name="google" content="notranslate" />
      
      {/* Rich Results Enhancement */}
      <meta name="author" content="Safe Or Stolen Team" />
      <meta name="publisher" content="Safe Or Stolen" />
      <meta name="copyright" content="© 2024 Safe Or Stolen. All rights reserved." />
      
      {/* Page Experience Signals */}
      <meta name="theme-color" content="#1a1625" />
      <meta name="color-scheme" content="dark" />
      
      {/* Enhanced Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              "name": "Safe Or Stolen",
              "url": siteUrl,
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png`,
                "width": 512,
                "height": 512
              },
              "description": "Global verification service for IMEI, serial numbers, and VIN to check if items are stolen or safe to buy",
              "sameAs": [
                "https://twitter.com/safeorstolen",
                "https://facebook.com/safeorstolen",
                "https://linkedin.com/company/safeorstolen"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "support@safeorstolen.com",
                "availableLanguage": "English"
              }
            },
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              "url": siteUrl,
              "name": "Safe Or Stolen",
              "description": "Verify IMEI, serial numbers, and VIN instantly. Check if phones, cars, bikes, electronics are stolen before buying.",
              "publisher": {
                "@id": `${siteUrl}/#organization`
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${siteUrl}/?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "Service",
              "@id": `${siteUrl}/#service`,
              "serviceType": "Stolen Goods Verification",
              "provider": {
                "@id": `${siteUrl}/#organization`
              },
              "areaServed": "Worldwide",
              "description": "Real-time verification service to check if IMEI, serial numbers, and VIN are reported as stolen",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free stolen goods verification"
              }
            }
          ]
        })}
      </script>

      {/* Performance Resource Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="modulepreload" href="/src/main.tsx" />
      
      {/* Enhanced Security for Google Crawler */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};