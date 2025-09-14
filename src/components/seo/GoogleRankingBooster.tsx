import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const GoogleRankingBooster: React.FC = () => {
  
  useEffect(() => {
    // Advanced performance optimizations for ranking
    const optimizeForRankings = () => {
      // 1. Optimize images for Core Web Vitals
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (index < 3) {
          // Above-the-fold images
          img.loading = 'eager';
          img.fetchPriority = 'high';
        } else {
          // Below-the-fold images
          img.loading = 'lazy';
          img.fetchPriority = 'low';
        }
        
        // Add missing dimensions to prevent CLS
        if (!img.width || !img.height) {
          img.style.aspectRatio = '16/9';
          img.style.objectFit = 'cover';
        }
      });

      // 2. Optimize fonts for better LCP
      const fontOptimizations = () => {
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'Inter';
            font-display: swap;
            src: url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          }
        `;
        document.head.appendChild(style);
      };

      // 3. Preload critical resources
      const preloadCriticalResources = () => {
        const criticalResources = [
          '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
          '/dashboard',
          '/check-phone',
          '/check-car'
        ];

        criticalResources.forEach(resource => {
          if (!document.querySelector(`link[href="${resource}"]`)) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
          }
        });
      };

      // 4. Optimize third-party scripts
      const optimizeThirdPartyScripts = () => {
        const scripts = document.querySelectorAll('script[src]') as NodeListOf<HTMLScriptElement>;
        scripts.forEach(script => {
          if (script.src.includes('google') || script.src.includes('gtag')) {
            if (!script.defer && !script.async) {
              script.defer = true;
            }
          }
        });
      };

      fontOptimizations();
      preloadCriticalResources();
      optimizeThirdPartyScripts();
    };

    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeForRankings);
    } else {
      optimizeForRankings();
    }

    // Monitor and report Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const vitalsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Track metrics for optimization
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
        }
      });

      try {
        vitalsObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      } catch (e) {
        // Fallback for unsupported browsers
      }
    }

  }, []);

  return (
    <Helmet>
      {/* Google Ranking Signals */}
      <meta name="google-site-verification" content="pending-verification-code" />
      <meta name="msvalidate.01" content="pending-bing-verification" />
      <meta name="yandex-verification" content="pending-yandex-verification" />
      
      {/* Enhanced Performance Signals */}
      <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no, address=no, email=no" />
      
      {/* Critical Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://lxrdzbknktwlubbmlsqe.supabase.co" crossOrigin="" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//js.stripe.com" />
      <link rel="dns-prefetch" href="//api.openai.com" />
      
      {/* Preload Hero Image for LCP */}
      <link 
        rel="preload" 
        href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" 
        as="image" 
        type="image/png"
        fetchPriority="high"
      />
      
      {/* Preload Critical Pages */}
      <link rel="prefetch" href="/dashboard" />
      <link rel="prefetch" href="/check-phone" />
      <link rel="prefetch" href="/check-car" />
      <link rel="prefetch" href="/pricing" />
      
      {/* Enhanced Security Headers for Trust Signals */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Mobile Excellence Signals */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
      
      {/* Theme Colors for Brand Recognition */}
      <meta name="theme-color" content="#ea580c" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
      <meta name="msapplication-navbutton-color" content="#ea580c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Enhanced Robots Instructions */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:160, max-video-preview:30, noimageindex" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:160" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      
      {/* Content Classification */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 day" />
      <meta name="expires" content="never" />
      
      {/* Geo-Location Hints */}
      <meta name="geo.region" content="US" />
      <meta name="geo.country" content="United States" />
      <meta name="geo.placename" content="Peoria, Arizona" />
      
      {/* Advanced Schema for E-A-T Signals */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://safeorstolen.com/#website",
              "url": "https://safeorstolen.com",
              "name": "SafeOrStolen",
              "description": "Leading platform for IMEI, VIN, and serial number verification to prevent stolen goods fraud",
              "inLanguage": "en-US",
              "isPartOf": {
                "@id": "https://safeorstolen.com/#organization"
              },
              "about": {
                "@id": "https://safeorstolen.com/#organization"
              },
              "publisher": {
                "@id": "https://safeorstolen.com/#organization"
              },
              "copyrightHolder": {
                "@id": "https://safeorstolen.com/#organization"
              },
              "copyrightYear": 2024,
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://safeorstolen.com/check-phone?imei={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              ]
            },
            {
              "@type": "Organization", 
              "@id": "https://safeorstolen.com/#organization",
              "name": "SafeOrStolen",
              "legalName": "SafeOrStolen LLC",
              "alternateName": ["Safe Or Stolen", "SOS Verification"],
              "url": "https://safeorstolen.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
                "width": 512,
                "height": 512
              },
              "description": "Trusted verification service protecting consumers from stolen goods fraud through comprehensive IMEI, VIN, and serial number checking",
              "foundingDate": "2024-01-01",
              "numberOfEmployees": "2-10",
              "knowsAbout": [
                "Device Verification", "Fraud Prevention", "IMEI Checking", "VIN Lookup", 
                "Stolen Goods Detection", "Marketplace Safety", "Consumer Protection"
              ],
              "hasCredential": "Fraud Prevention Certification",
              "memberOf": "Better Business Bureau",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Peoria",
                "addressRegion": "AZ", 
                "addressCountry": "US",
                "postalCode": "85345"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-SAFE-ORG",
                  "contactType": "customer service",
                  "email": "support@safeorstolen.com",
                  "availableLanguage": "English",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "email": "tech@safeorstolen.com",
                  "availableLanguage": "English"
                }
              ],
              "sameAs": [
                "https://twitter.com/safeorstolen",
                "https://linkedin.com/company/safeorstolen",
                "https://facebook.com/safeorstolen"
              ]
            }
          ]
        }, null, 0)}
      </script>
      
      {/* Critical CSS for Above-the-Fold */}
      <style>{`
        /* Critical styles for LCP optimization */
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background)/.95) 100%);
          contain: layout style paint;
        }
        
        .hero-image {
          content-visibility: auto;
          contain-intrinsic-size: 600px 400px;
          object-fit: contain;
          width: 100%;
          height: auto;
        }
        
        .main-headline {
          font-size: clamp(2rem, 8vw, 4rem);
          line-height: 1.1;
          font-weight: 800;
          color: hsl(var(--sos-orange));
          text-rendering: optimizeSpeed;
          font-display: swap;
        }
        
        /* Prevent layout shifts */
        .loading-skeleton {
          background: linear-gradient(90deg, hsl(var(--muted)) 25%, transparent 37%, hsl(var(--muted)) 63%);
          background-size: 400% 100%;
          animation: loading 1.4s ease infinite;
        }
        
        @keyframes loading {
          0% { background-position: 100% 50%; }
          100% { background-position: -100% 50%; }
        }
        
        /* Optimize rendering */
        * {
          box-sizing: border-box;
        }
        
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Critical fonts */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2') format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}</style>
    </Helmet>
  );
};