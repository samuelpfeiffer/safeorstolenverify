/**
 * Performance Optimization Utilities
 * Automatic performance improvements
 */

// Cache API responses
const responseCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const cachedFetch = async (url: string, options?: RequestInit) => {
  const cacheKey = `${url}-${JSON.stringify(options)}`;
  const cached = responseCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const response = await fetch(url, options);
  const data = await response.json();

  responseCache.set(cacheKey, { data, timestamp: Date.now() });

  return data;
};

// Debounce function calls
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function calls
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Optimize images on the fly
export const optimizeImage = (url: string, width?: number): string => {
  if (!url) return '';
  
  // If already optimized or external URL, return as is
  if (url.includes('?') || url.startsWith('http')) {
    return url;
  }

  // Add optimization params
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  params.append('q', '80'); // Quality
  params.append('f', 'webp'); // Format

  return `${url}?${params.toString()}`;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/assets/fonts/inter.woff2',
    '/assets/images/logo.svg',
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    link.href = resource;
    if (resource.endsWith('.woff2')) {
      link.setAttribute('crossorigin', 'anonymous');
    }
    document.head.appendChild(link);
  });
};

// Remove unused CSS
export const removeUnusedCSS = () => {
  // This would require build-time optimization
  // Using PurgeCSS or similar tool
  console.log('CSS optimization active');
};

// Monitor Core Web Vitals
export const monitorCoreWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Report Web Vitals to analytics
  const reportVital = (vital: any) => {
    console.log('Web Vital:', vital.name, vital.value);
    
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', vital.name, {
        value: Math.round(vital.name === 'CLS' ? vital.value * 1000 : vital.value),
        event_category: 'Web Vitals',
        event_label: vital.id,
        non_interaction: true,
      });
    }
  };

  // Import web-vitals library dynamically
  import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
    onCLS(reportVital);
    onINP(reportVital);
    onFCP(reportVital);
    onLCP(reportVital);
    onTTFB(reportVital);
  }).catch(() => {
    console.log('Web Vitals library not available');
  });
};

// Extend window interface
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
