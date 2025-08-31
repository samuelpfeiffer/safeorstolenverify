import React, { useEffect, useRef } from 'react';

export const GlobalPerformanceOptimizer: React.FC = () => {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Enhanced critical resource preloading for LCP optimization
    const criticalResources = [
      { href: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png', as: 'image', fetchPriority: 'high' },
      { href: '/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png', as: 'image' },
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' }
    ];

    // Optimized scheduling for critical path
    const scheduleWork = (callback: () => void, priority: 'immediate' | 'idle' = 'idle') => {
      if (priority === 'immediate') {
        callback();
      } else if ('requestIdleCallback' in window) {
        requestIdleCallback(callback);
      } else {
        setTimeout(callback, 0);
      }
    };

    // Immediate loading for LCP-critical resources
    scheduleWork(() => {
      criticalResources.forEach(({ href, as, fetchPriority }) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = href;
          link.as = as;
          if (fetchPriority) link.setAttribute('fetchpriority', fetchPriority);
          if (as === 'style') link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    }, 'immediate');

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

    // Enhanced lazy loading with LCP optimization
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
                img.loading = 'eager';
                img.classList.remove('lazy');
                observer.unobserve(img);
              }
            }
            });
          },
          {
            rootMargin: '100px 0px', // Increased for mobile
            threshold: 0.01
          }
        );

        // Optimize above-the-fold images immediately
        document.querySelectorAll('img').forEach((img, index) => {
          if (index < 3) { // First 3 images are LCP candidates
            img.loading = 'eager';
            img.setAttribute('fetchpriority', 'high');
            img.setAttribute('decoding', 'sync');
          } else if (img.dataset.src) {
            imageObserver.observe(img);
          }
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