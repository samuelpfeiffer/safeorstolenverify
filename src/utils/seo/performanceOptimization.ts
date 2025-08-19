// Performance optimization utilities for SEO and Core Web Vitals

export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ];

  fontPreloads.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
};

export const lazyLoadImages = () => {
  // Implement intersection observer for image lazy loading
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
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
};

export const optimizeCorWebVitals = () => {
  // Largest Contentful Paint optimization
  const criticalImages = document.querySelectorAll('img[data-critical]');
  criticalImages.forEach(img => {
    const imgElement = img as HTMLImageElement;
    imgElement.loading = 'eager';
    imgElement.fetchPriority = 'high';
  });

  // Cumulative Layout Shift prevention
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    if (!img.width || !img.height) {
      img.style.aspectRatio = '16 / 9';
    }
  });
};

export const deferNonCriticalScripts = () => {
  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {
    script.setAttribute('defer', '');
  });
};