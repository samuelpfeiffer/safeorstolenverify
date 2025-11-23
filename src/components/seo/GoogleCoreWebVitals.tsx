import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// TypeScript interfaces for Web Vitals
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

// Extend global gtag interface
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const GoogleCoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Core Web Vitals tracking
    const trackWebVitals = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        // Track Largest Contentful Paint (LCP)
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              // Track LCP
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_action: 'LCP',
                  value: Math.round(entry.startTime),
                  non_interaction: true
                });
              }
            }
          }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        // Track First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const eventEntry = entry as PerformanceEventTiming;
            if (window.gtag && eventEntry.processingStart) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_action: 'FID',
                value: Math.round(eventEntry.processingStart - eventEntry.startTime),
                non_interaction: true
              });
            }
          }
        });

        fidObserver.observe({ entryTypes: ['first-input'] });

        // Track Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutEntry = entry as LayoutShiftEntry;
            if (!layoutEntry.hadRecentInput) {
              clsValue += layoutEntry.value;
            }
          }
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Send CLS when page is about to unload
        window.addEventListener('beforeunload', () => {
          if (window.gtag && clsValue > 0) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_action: 'CLS',
              value: Math.round(clsValue * 1000),
              non_interaction: true
            });
          }
        });
      }
    };

    // Initialize tracking after a short delay to ensure gtag is loaded
    const timer = setTimeout(trackWebVitals, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Helmet>
      {/* Performance Optimization Headers */}
      <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
      
      {/* Resource Hints for Core Web Vitals */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Preload critical fonts with font-display swap */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        as="style"
      />
      <noscript>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </noscript>
      
      {/* Critical CSS inline to improve LCP */}
      <style type="text/css">
        {`
          /* Critical above-the-fold styles */
          * { font-display: swap; }
          .hero-section { display: block; contain: layout style paint; }
          .navigation { position: fixed; top: 0; width: 100%; z-index: 50; will-change: transform; }
          img { loading: eager; content-visibility: auto; }
          img[data-below-fold] { loading: lazy; }
          /* Prevent layout shift */
          img, video, iframe { aspect-ratio: attr(width) / attr(height); }
        `}
      </style>

      {/* Preload critical hero image with high priority */}
      <link rel="preload" as="image" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" fetchPriority="high" />
      
      {/* Preload critical CSS */}
      <link rel="preload" as="style" href="/src/index.css" />
      
      {/* Script for optimizing images and LCP */}
      <script>
        {`
          // Critical performance optimizations
          (function() {
            // Optimize image loading for Core Web Vitals
            const optimizeImages = function() {
              const images = document.querySelectorAll('img');
              images.forEach((img, index) => {
                if (index > 2) {
                  img.setAttribute('loading', 'lazy');
                  img.setAttribute('data-below-fold', 'true');
                  img.setAttribute('decoding', 'async');
                } else {
                  img.setAttribute('loading', 'eager');
                  img.setAttribute('fetchpriority', 'high');
                  img.setAttribute('decoding', 'sync');
                }
                // Prevent layout shift
                if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
                  img.style.aspectRatio = '16/9';
                }
              });
            };
            
            // Run immediately for faster LCP
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', optimizeImages);
            } else {
              optimizeImages();
            }
            
            // Prefetch next likely pages
            setTimeout(function() {
              const links = ['/imei-checker', '/vin-checker', '/verify'];
              links.forEach(function(url) {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = url;
                document.head.appendChild(link);
              });
            }, 3000);
          })();
        `}
      </script>
    </Helmet>
  );
};