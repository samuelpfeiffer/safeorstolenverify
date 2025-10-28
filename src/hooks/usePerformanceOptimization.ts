import { useEffect, useState } from 'react';
import { useSafeLocation } from '@/hooks/useSafeLocation';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

/**
 * Advanced Performance Optimization Hook
 * Monitors page performance and automatically optimizes
 */
export const usePerformanceOptimization = () => {
  const location = useSafeLocation();
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Collect performance metrics
    const collectMetrics = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation?.loadEventEnd - navigation?.loadEventStart || 0,
        renderTime: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart || 0,
        domContentLoaded: navigation?.domContentLoadedEventEnd || 0,
        firstContentfulPaint: fcp?.startTime || 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      };

      // Observe LCP
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            metrics.largestContentfulPaint = lastEntry?.startTime || 0;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Observe CLS
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as any[]) {
              if (!entry.hadRecentInput) {
                metrics.cumulativeLayoutShift += entry.value;
              }
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // Observe FID
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as any[]) {
              metrics.firstInputDelay = entry.processingStart - entry.startTime;
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.error('Performance observer error:', e);
        }
      }

      setMetrics(metrics);

      // Send to AI for analysis if performance is poor
      if (
        metrics.loadTime > 3000 || 
        metrics.firstContentfulPaint > 2000 ||
        metrics.largestContentfulPaint > 2500
      ) {
        analyzePerformanceWithAI(metrics);
      }
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      setTimeout(collectMetrics, 1000);
    } else {
      window.addEventListener('load', () => setTimeout(collectMetrics, 1000));
    }

    // Implement performance optimizations
    optimizeImages();
    lazyLoadComponents();
    prefetchCriticalResources();

  }, [location?.pathname]);

  const analyzePerformanceWithAI = async (metrics: PerformanceMetrics) => {
    if (isOptimizing) return;
    
    setIsOptimizing(true);
    
    try {
      // Send to AI performance analyzer (background task)
      fetch('https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/ai-performance-analyzer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          performanceMetrics: metrics,
          pageUrl: window.location.href
        })
      }).then(res => res.json())
        .then(data => {
          console.log('AI Performance Report:', data.performanceReport);
          // Store recommendations for future optimization
          localStorage.setItem('perf_recommendations', JSON.stringify(data.performanceReport));
        })
        .catch(err => console.error('AI analysis error:', err));
    } catch (error) {
      console.error('Performance analysis error:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  const optimizeImages = () => {
    // Lazy load images below the fold
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  };

  const lazyLoadComponents = () => {
    // Components below fold should load on demand
    const lazyComponents = document.querySelectorAll('[data-lazy-load]');
    if ('IntersectionObserver' in window) {
      const componentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const component = entry.target as HTMLElement;
            component.style.display = 'block';
            componentObserver.unobserve(component);
          }
        });
      }, { rootMargin: '100px' });

      lazyComponents.forEach(component => componentObserver.observe(component));
    }
  };

  const prefetchCriticalResources = () => {
    // Prefetch next likely pages
    const criticalPages = ['/pricing', '/check-phone', '/check-car', '/auth'];
    criticalPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  };

  return {
    metrics,
    isOptimizing,
    analyzePerformanceWithAI
  };
};
