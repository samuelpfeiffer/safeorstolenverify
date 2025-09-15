import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Advanced SEO Optimizations for #1 Ranking
 * Includes technical SEO, mobile optimization, and AI-friendly features
 */
export const AdvancedSEOOptimizations: React.FC = () => {
  useEffect(() => {
    // Optimize for Core Web Vitals
    const optimizePerformance = () => {
      // Lazy load images below the fold
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (index > 3) { // Skip first 3 images (above fold)
          img.setAttribute('loading', 'lazy');
          img.setAttribute('decoding', 'async');
        }
      });

      // Optimize font display
      const fontLinks = document.querySelectorAll('link[rel="stylesheet"]');
      fontLinks.forEach(link => {
        if (link.getAttribute('href')?.includes('fonts.googleapis.com')) {
          link.setAttribute('rel', 'preload');
          link.setAttribute('as', 'style');
          link.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
        }
      });

      // Remove unused CSS (basic detection)
      setTimeout(() => {
        const unusedSelectors = ['.unused-class', '.legacy-style', '.deprecated'];
        unusedSelectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => el.remove());
        });
      }, 2000);
    };

    // Mobile optimization
    const optimizeForMobile = () => {
      // Add viewport meta if missing
      if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
        document.head.appendChild(viewport);
      }

      // Optimize touch targets
      const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
      touchTargets.forEach(target => {
        const element = target as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        const height = parseInt(computedStyle.height);
        const width = parseInt(computedStyle.width);
        
        // Ensure minimum touch target size (44px recommended)
        if (height < 44 || width < 44) {
          element.style.minHeight = '44px';
          element.style.minWidth = '44px';
          element.style.display = 'inline-flex';
          element.style.alignItems = 'center';
          element.style.justifyContent = 'center';
        }
      });
    };

    // AI optimization
    const optimizeForAI = () => {
      // Add semantic landmarks if missing
      const main = document.querySelector('main');
      if (!main) {
        const mainContent = document.querySelector('#root > div');
        if (mainContent) {
          mainContent.setAttribute('role', 'main');
        }
      }

      // Enhance heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let currentLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level === 1) currentLevel = 1;
        else if (level > currentLevel + 1) {
          // Fix heading hierarchy by adjusting level
          const newTag = `h${currentLevel + 1}`;
          const newHeading = document.createElement(newTag);
          newHeading.innerHTML = heading.innerHTML;
          newHeading.className = heading.className;
          heading.parentNode?.replaceChild(newHeading, heading);
        }
        currentLevel = level;
      });

      // Add alt text to images without it
      const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
      imagesWithoutAlt.forEach((img, index) => {
        const imgElement = img as HTMLImageElement;
        imgElement.alt = `SafeOrStolen verification platform image ${index + 1}`;
      });
    };

    // SEO content optimization
    const optimizeContent = () => {
      // Add structured data to key elements
      const verificationForms = document.querySelectorAll('form[data-verification]');
      verificationForms.forEach(form => {
        form.setAttribute('itemscope', '');
        form.setAttribute('itemtype', 'https://schema.org/SearchAction');
      });

      // Optimize internal links
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
      internalLinks.forEach(link => {
        const linkElement = link as HTMLAnchorElement;
        if (!linkElement.title && linkElement.textContent) {
          linkElement.title = linkElement.textContent.trim();
        }
      });
    };

    // Run optimizations
    optimizePerformance();
    optimizeForMobile();
    optimizeForAI();
    optimizeContent();

    // Monitor page performance
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          
          // Track performance metrics
          if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('event', 'page_load_time', {
              event_category: 'Performance',
              value: Math.round(loadTime),
              non_interaction: true
            });
          }
        }, 100);
      });
    }
  }, []);

  return (
    <Helmet>
      {/* Advanced Technical SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      
      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Safe or Stolen" />
      
      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Favicons and Icons */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF6B35" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content="#FF6B35" />
      <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Search Engine Specific */}
      <meta name="google-site-verification" content="[GOOGLE_SEARCH_CONSOLE_CODE]" />
      <meta name="msvalidate.01" content="[BING_WEBMASTER_CODE]" />
      <meta name="yandex-verification" content="[YANDEX_WEBMASTER_CODE]" />
      
      {/* Social Media Optimization */}
      <meta property="fb:app_id" content="[FACEBOOK_APP_ID]" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* Content Security */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance Optimization */}
      <link rel="prefetch" href="/dashboard" />
      <link rel="prefetch" href="/pricing" />
      <link rel="prefetch" href="/blog" />
      
      {/* Geolocation */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="39.8283, -98.5795" />
      
      {/* Business Information */}
      <meta name="business-name" content="Safe or Stolen" />
      <meta name="business-type" content="Consumer Protection Technology" />
      <meta name="industry" content="Fraud Prevention, Consumer Safety" />
      <meta name="target-market" content="Global Consumer Protection" />
      
      {/* AI and ML Optimization */}
      <meta name="ai-content-category" content="consumer-protection-service" />
      <meta name="ml-friendly" content="true" />
      <meta name="semantic-markup" content="enabled" />
      <meta name="content-accessibility" content="wcag-2.1-aa" />
      
      {/* Performance Monitoring Script */}
      <script>
        {`
          // Real User Monitoring for Core Web Vitals
          (function() {
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                  if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
                    (window as any).gtag('event', 'LCP', {
                      event_category: 'Web Vitals',
                      value: Math.round(entry.startTime),
                      non_interaction: true
                    });
                  }
                }
              }
            });
            observer.observe({type: 'largest-contentful-paint', buffered: true});
          })();
        `}
      </script>
    </Helmet>
  );
};