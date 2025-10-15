import React, { useEffect, useRef } from 'react';

export const GlobalPerformanceOptimizer: React.FC = () => {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Preload critical resources
    const criticalImages = [
      '/images/sos-logo.png',
      '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png'
    ];

    // Use requestIdleCallback for better performance
    const scheduleWork = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback);
      } else {
        setTimeout(callback, 0);
      }
    };

    scheduleWork(() => {
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://lxrdzbknktwlubbmlsqe.supabase.co',
      'https://js.stripe.com'
    ];

    scheduleWork(() => {
      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    });

    // Enhanced lazy loading with better performance
    const lazyLoadImages = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('lazy');
                observer.unobserve(img);
              }
            }
            });
          },
          {
            rootMargin: '50px 0px',
            threshold: 0.01
          }
        );

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Optimized service worker registration
    if ('serviceWorker' in navigator && !navigator.serviceWorker.controller) {
      scheduleWork(() => {
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
          .catch(() => {
            // Silent fail for service worker
          });
      });
    }

    // Enhanced performance monitoring with Core Web Vitals
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const perfData = {
          loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
          firstContentfulPaint: Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0),
          largestContentfulPaint: Math.round(performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0),
          firstInputDelay: 0
        };

        // Only log significant performance issues
        if (perfData.loadTime > 3000) {
          // Log only critical performance issues in production
        }
      }
    };

    // Resource hints optimization
    const addResourceHints = () => {
      const preloadResources = [
        { href: '/favicon.ico', as: 'image' },
        { href: '/manifest.json', as: 'fetch', crossorigin: 'anonymous' }
      ];

      preloadResources.forEach(({ href, as, crossorigin }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (crossorigin) link.crossOrigin = crossorigin;
        document.head.appendChild(link);
      });
    };

    // Schedule all optimizations
    scheduleWork(lazyLoadImages);
    scheduleWork(addResourceHints);
    setTimeout(measurePerformance, 2000);

    return () => {
      // Cleanup performance observers if needed
    };
  }, []);

  return null; // This component only runs effects
};