import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedTechnicalSEOProps {
  pageType?: 'homepage' | 'service' | 'pricing' | 'blog' | 'landing';
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string[];
  noindex?: boolean;
  structuredData?: any[];
}

export const AdvancedTechnicalSEO: React.FC<AdvancedTechnicalSEOProps> = ({
  pageType = 'homepage',
  customTitle,
  customDescription,
  customKeywords = [],
  noindex = false,
  structuredData = []
}) => {
  
  useEffect(() => {
    // Optimize images with lazy loading and WebP support
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            // WebP support detection and fallback
            const supportsWebP = () => {
              const canvas = document.createElement('canvas');
              return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            };
            
            if (img.dataset.src) {
              if (supportsWebP() && img.dataset.webp) {
                img.src = img.dataset.webp;
              } else {
                img.src = img.dataset.src;
              }
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Preload critical resources based on page type
    const preloadCriticalResources = () => {
      const criticalResources = {
        homepage: [
          '/lovable-uploads/45491b3e-261f-4838-95f8-a95ae95bd6ea.png',
          '/images/partners/fastercapital-logo.png'
        ],
        service: [
          '/api/data/verification-stats',
          '/images/verification-flow.webp'
        ],
        pricing: [
          '/api/data/pricing-plans',
          '/images/pricing-comparison.webp'
        ]
      };

      const resources = criticalResources[pageType] || [];
      resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        
        if (resource.match(/\.(png|jpg|jpeg|webp)$/)) {
          link.as = 'image';
        } else if (resource.startsWith('/api/')) {
          link.as = 'fetch';
          link.crossOrigin = 'anonymous';
        }
        
        link.href = resource;
        document.head.appendChild(link);
      });
    };

    // Enhanced Service Worker registration
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered:', registration);
        } catch (error) {
          console.warn('SW registration failed:', error);
        }
      }
    };

    // Run optimizations
    optimizeImages();
    preloadCriticalResources();
    registerServiceWorker();

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Web Vitals monitoring
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }).catch(() => {
        // Fallback if web-vitals is not available
      });
    }
  }, [pageType]);

  // Generate enhanced schema markup
  const getEnhancedSchemaMarkup = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "legalName": "SafeOrStolen LLC",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "description": "Leading platform for verifying IMEI, VIN, and Serial Numbers to protect against stolen goods",
      "foundingDate": "2024",
      "numberOfEmployees": "2-10",
      "slogan": "Verify Before You Buy - Protect Yourself from Stolen Goods",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "TBD",
        "addressLocality": "Peoria",
        "addressRegion": "AZ",
        "postalCode": "85345",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5806",
        "longitude": "-112.2374"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-SAFE-ORG",
          "contactType": "customer service",
          "email": "support@safeorstolen.com",
          "availableLanguage": ["English"],
          "areaServed": "Worldwide",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00",
            "validFrom": "2024-01-01",
            "validThrough": "2025-12-31"
          }
        }
      ],
      "sameAs": [
        "https://twitter.com/safeorstolen",
        "https://linkedin.com/company/safeorstolen",
        "https://facebook.com/safeorstolen"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Verification Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IMEI Phone Verification",
              "description": "Comprehensive smartphone stolen status verification"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "VIN Vehicle Verification",
              "description": "Complete automobile theft status verification"
            }
          }
        ]
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://safeorstolen.com"
        }
      ]
    };

    const webSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen",
      "alternateName": "Safe Or Stolen",
      "url": "https://safeorstolen.com",
      "description": "Verify stolen status of phones, cars, electronics before buying secondhand",
      "inLanguage": "en-US",
      "copyrightYear": "2024",
      "copyrightHolder": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": "https://safeorstolen.com/check-phone?imei={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        {
          "@type": "SearchAction", 
          "target": "https://safeorstolen.com/check-car?vin={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I check if a phone is stolen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the phone's IMEI number in our verification tool. We'll instantly check multiple law enforcement and carrier databases to determine if the device is reported stolen, lost, or blacklisted."
          }
        },
        {
          "@type": "Question",
          "name": "Is the IMEI checker free?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Yes! We provide 4 free IMEI checks to get you started. After that, unlimited verifications are available for $9.99/month."
          }
        },
        {
          "@type": "Question",
          "name": "What databases do you check?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We check multiple law enforcement databases, carrier blacklists, and stolen goods registries to provide comprehensive verification results."
          }
        }
      ]
    };

    return [baseOrganization, breadcrumbSchema, webSiteSchema, faqSchema, ...structuredData];
  };

  const schemas = getEnhancedSchemaMarkup();

  // Enhanced meta tags based on page type
  const getPageSpecificMeta = () => {
    const meta = {
      homepage: {
        title: customTitle || "Free IMEI Check - Verify Stolen Phone & Device Status | SafeOrStolen",
        description: customDescription || "Instantly verify if phones, cars, electronics are stolen before buying secondhand. Free IMEI checker, VIN lookup, serial number verification. 4 free checks, $9.99/month unlimited.",
        keywords: [
          "free IMEI check", "stolen phone checker", "VIN lookup", "verify stolen device",
          "secondhand marketplace safety", "eBay fraud prevention", "Facebook marketplace protection",
          "Craigslist safety", "device verification service", "stolen goods checker",
          ...customKeywords
        ]
      },
      service: {
        title: customTitle || "Professional Device Verification Services | SafeOrStolen",
        description: customDescription || "Comprehensive stolen goods verification for businesses and individuals. API access, bulk verification, white-label solutions available.",
        keywords: [
          "device verification API", "bulk IMEI check", "business verification service",
          "white label verification", "stolen goods API", "fraud prevention service",
          ...customKeywords
        ]
      },
      pricing: {
        title: customTitle || "Verification Pricing Plans - Start Free | SafeOrStolen", 
        description: customDescription || "Flexible pricing for stolen goods verification. 4 free checks, then $9.99/month unlimited. Enterprise plans available.",
        keywords: [
          "verification pricing", "IMEI check cost", "stolen goods verification plans",
          "free device check", "enterprise verification", "API pricing",
          ...customKeywords
        ]
      }
    };

    return meta[pageType] || meta.homepage;
  };

  const pageMeta = getPageSpecificMeta();

  return (
    <Helmet>
      {/* Enhanced Title and Meta Description */}
      <title>{pageMeta.title}</title>
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords.join(', ')} />
      
      {/* Robots Directives */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:160, max-video-preview:30'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:160'} />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="SafeOrStolen" />
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMeta.title} />
      <meta name="twitter:description" content={pageMeta.description} />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* Advanced SEO Meta Tags */}
      <meta name="author" content="SafeOrStolen Team" />
      <meta name="copyright" content="© 2024 SafeOrStolen. All rights reserved." />
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-AZ" />
      <meta name="geo.placename" content="Peoria, Arizona" />
      <meta name="geo.position" content="33.5806;-112.2374" />
      <meta name="ICBM" content="33.5806, -112.2374" />
      
      {/* Business/Service Meta Tags */}
      <meta name="classification" content="Stolen Goods Verification Service" />
      <meta name="category" content="Security, Fraud Prevention, Consumer Protection" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="subject" content="Device Verification and Stolen Goods Protection" />
      
      {/* Performance and Technical Meta Tags */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Pragma" content="cache" />
      <meta name="format-detection" content="telephone=yes, address=yes, email=yes" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" />
      <link rel="preload" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" as="image" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//lxrdzbknktwlubbmlsqe.supabase.co" />
      <link rel="dns-prefetch" href="//js.stripe.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema, null, 0)}
        </script>
      ))}
      
      {/* Critical CSS for above-the-fold content */}
      <style>{`
        .hero-image { 
          content-visibility: auto; 
          contain-intrinsic-size: 1200px 600px; 
        }
        .main-headline { 
          font-display: swap; 
          text-rendering: optimizeSpeed; 
        }
        .lazy { 
          opacity: 0; 
          transition: opacity 0.3s; 
        }
        .lazy.loaded { 
          opacity: 1; 
        }
      `}</style>
    </Helmet>
  );
};