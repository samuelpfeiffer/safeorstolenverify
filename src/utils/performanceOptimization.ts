// Performance optimization utilities
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = '/fonts/inter-var.woff2';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
};

export const deferNonCriticalCSS = () => {
  // Defer non-critical CSS
  const deferredStyles = document.querySelectorAll('link[rel="preload"][as="style"]') as NodeListOf<HTMLLinkElement>;
  deferredStyles.forEach((link) => {
    link.addEventListener('load', () => {
      link.rel = 'stylesheet';
    });
  });
};

export const optimizeImages = () => {
  // Lazy load images with Intersection Observer
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

export const setupServiceWorker = async () => {
  if ('serviceWorker' in navigator && 'caches' in window) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registered:', registration);
    } catch (error) {
      console.log('ServiceWorker registration failed:', error);
    }
  }
};

// Cache critical resources
export const cacheResources = () => {
  if ('caches' in window) {
    caches.open('v1').then(cache => {
      cache.addAll([
        '/',
        '/main.css',
        '/main.js',
        '/fonts/inter-var.woff2'
      ]);
    });
  }
};

// Resource hints for better performance
export const addResourceHints = () => {
  // DNS prefetch for external domains
  const dnsPrefetchLinks = [
    'https://fonts.googleapis.com',
    'https://lxrdzbknktwlubbmlsqe.supabase.co'
  ];

  dnsPrefetchLinks.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });

  // Preconnect for critical external resources
  const preconnectLink = document.createElement('link');
  preconnectLink.rel = 'preconnect';
  preconnectLink.href = 'https://lxrdzbknktwlubbmlsqe.supabase.co';
  document.head.appendChild(preconnectLink);
};