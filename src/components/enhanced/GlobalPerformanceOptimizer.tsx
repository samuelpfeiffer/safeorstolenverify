import React, { useEffect } from 'react';

export const GlobalPerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const criticalImages = [
      '/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png',
      '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://api.safeorstolen.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Lazy load non-critical resources
    const lazyLoadImages = () => {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    };

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Silent fail
      });
    }

    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        // Send performance data to analytics (optional)
        const perfData = {
          loadTime: navigation.loadEventEnd - navigation.fetchStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
        };

        // Could send to analytics service
        console.log('Performance Metrics:', perfData);
      }
    };

    // Defer performance measurement
    setTimeout(measurePerformance, 1000);
    setTimeout(lazyLoadImages, 100);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component only runs effects
};