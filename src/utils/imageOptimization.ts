/**
 * Image Optimization Utilities
 * Provides functions for optimizing image loading and performance
 */

// Generate srcset for responsive images
export const generateSrcSet = (baseUrl: string, sizes: number[]): string => {
  return sizes.map(size => `${baseUrl}?w=${size} ${size}w`).join(', ');
};

// Get optimal image size based on viewport
export const getOptimalImageSize = (containerWidth: number): number => {
  const devicePixelRatio = window.devicePixelRatio || 1;
  const sizes = [640, 750, 828, 1080, 1200, 1920, 2048];
  const targetWidth = containerWidth * devicePixelRatio;
  
  return sizes.find(size => size >= targetWidth) || sizes[sizes.length - 1];
};

// Preload critical images
export const preloadImages = (urls: string[]) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
};

// Create a low-quality placeholder for blur effect
export const createPlaceholder = (width: number = 40, height: number = 40): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Create a simple gradient placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.05)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

// Lazy load images with Intersection Observer
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px'
  });
  
  images.forEach(img => imageObserver.observe(img));
};

// Convert images to WebP if supported
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Get WebP version of image if supported
export const getOptimalImageFormat = async (url: string): Promise<string> => {
  const isWebPSupported = await supportsWebP();
  
  if (isWebPSupported && !url.endsWith('.svg')) {
    return url.replace(/\.(jpg|jpeg|png)$/, '.webp');
  }
  
  return url;
};

// Optimize image loading performance
export const optimizeImagePerformance = () => {
  // Enable native lazy loading
  if ('loading' in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.loading = 'lazy';
      }
    });
  }
  
  // Add decoding async for better performance
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    if (img instanceof HTMLImageElement && !img.hasAttribute('decoding')) {
      img.decoding = 'async';
    }
  });
};

// Preload hero/critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/generated-assets/hero-background.jpg',
    '/assets/sos-man-billboard.jpg',
    '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png'
  ];
  
  preloadImages(criticalImages);
};
