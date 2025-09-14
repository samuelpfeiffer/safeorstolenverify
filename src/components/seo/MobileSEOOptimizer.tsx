import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface MobileSEOOptimizerProps {
  pageType?: 'homepage' | 'service' | 'verification';
  isNativeApp?: boolean;
}

export const MobileSEOOptimizer: React.FC<MobileSEOOptimizerProps> = ({ 
  pageType = 'homepage', 
  isNativeApp = false 
}) => {
  
  useEffect(() => {
    // Mobile-specific optimizations
    const optimizeForMobile = () => {
      // 1. Optimize touch targets
      const buttons = document.querySelectorAll('button, a');
      buttons.forEach((button: any) => {
        const computedStyle = window.getComputedStyle(button);
        const height = parseInt(computedStyle.height);
        if (height < 44) { // iOS minimum touch target
          button.style.minHeight = '44px';
          button.style.minWidth = '44px';
        }
      });

      // 2. Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach((img: HTMLImageElement) => {
        // Add mobile-specific loading attributes
        img.setAttribute('decoding', 'async');
        
        // Responsive image sizes
        if (!img.sizes) {
          img.sizes = '(max-width: 768px) 100vw, 50vw';
        }
      });

      // 3. Prevent zoom on form inputs (iOS)
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input: any) => {
        const fontSize = window.getComputedStyle(input).fontSize;
        if (parseInt(fontSize) < 16) {
          input.style.fontSize = '16px';
        }
      });

      // 4. Add touch feedback
      const touchElements = document.querySelectorAll('button, .touch-target');
      touchElements.forEach((element: any) => {
        element.style.webkitTapHighlightColor = 'rgba(234, 88, 12, 0.2)';
        element.style.transition = 'transform 0.1s ease';
        
        element.addEventListener('touchstart', () => {
          element.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', () => {
          element.style.transform = 'scale(1)';
        });
      });
    };

    // Run optimizations
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeForMobile);
    } else {
      optimizeForMobile();
    }

    // Mobile performance monitoring
    if ('performance' in window && 'observer' in window.PerformanceObserver.prototype) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Mobile Navigation Timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart
            });
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        // Fallback for older browsers
      }
    }

  }, []);

  const getMobileSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "SafeOrStolen",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": ["Android", "iOS"],
      "description": "Mobile app to verify IMEI, VIN, and serial numbers to prevent stolen goods fraud",
      "softwareVersion": "1.0.0",
      "datePublished": "2024-01-01",
      "author": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1000"
      },
      "screenshot": [
        "https://safeorstolen.com/images/app-screenshot-1.png",
        "https://safeorstolen.com/images/app-screenshot-2.png"
      ]
    };
  };

  return (
    <Helmet>
      {/* Mobile-Specific Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no, maximum-scale=1" />
      <meta name="format-detection" content="telephone=yes, address=yes, email=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-title" content="SafeOrStolen" />
      
      {/* iOS Specific Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
      <meta name="apple-touch-fullscreen" content="yes" />
      
      {/* Android Specific Meta Tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-navbutton-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      
      {/* Mobile Touch Icons */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      
      {/* Android Icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Mobile Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="//lxrdzbknktwlubbmlsqe.supabase.co" />
      
      {/* Mobile App Store Meta Tags */}
      <meta name="apple-itunes-app" content="app-id=pending-app-store-id" />
      <meta name="google-play-app" content="app-id=pending-play-store-id" />
      
      {/* Mobile Search Engine Tags */}
      <meta name="mobile-agent" content="format=xhtml; url=https://safeorstolen.com" />
      <meta name="mobile-agent" content="format=html5; url=https://safeorstolen.com" />
      
      {/* Mobile Social Meta Tags */}
      <meta property="al:ios:url" content="safeorstolen://open" />
      <meta property="al:ios:app_store_id" content="pending-app-store-id" />
      <meta property="al:ios:app_name" content="SafeOrStolen" />
      <meta property="al:android:url" content="safeorstolen://open" />
      <meta property="al:android:app_name" content="SafeOrStolen" />
      <meta property="al:android:package" content="app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b" />
      
      {/* Mobile Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Mobile Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(getMobileSchema(), null, 0)}
      </script>
      
      {/* Mobile Critical CSS */}
      <style>{`
        /* Mobile-First Critical Styles */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 100dvh; /* Dynamic viewport height for mobile */
            padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
          }
          
          .main-headline {
            font-size: clamp(1.75rem, 6vw, 2.5rem);
            line-height: 1.2;
          }
          
          /* Touch-friendly buttons */
          .btn, button {
            min-height: 44px;
            min-width: 44px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(234, 88, 12, 0.2);
          }
          
          /* Prevent zoom on inputs */
          input, textarea, select {
            font-size: 16px;
            transform: translateZ(0); /* Force hardware acceleration */
          }
          
          /* Smooth scrolling for mobile */
          * {
            -webkit-overflow-scrolling: touch;
          }
          
          /* Safe area handling */
          .safe-area-padding {
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
          }
        }
        
        /* iOS specific styles */
        @supports (-webkit-touch-callout: none) {
          .ios-specific {
            -webkit-appearance: none;
            -webkit-user-select: none;
          }
        }
        
        /* Android specific styles */
        @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
          .android-specific {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
      
      {/* Mobile Performance Hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="renderer" content="webkit" />
      
      {/* Mobile Security */}
      <meta httpEquiv="Content-Security-Policy" content="
        default-src 'self' 
        https://*.lovableproject.com 
        https://*.supabase.co 
        https://fonts.googleapis.com 
        https://fonts.gstatic.com;
        img-src 'self' data: blob: https:;
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
        style-src 'self' 'unsafe-inline' https:;
      " />
    </Helmet>
  );
};