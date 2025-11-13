import { useEffect, useState } from 'react';
import { optimizeImagePerformance, preloadCriticalImages } from '@/utils/imageOptimization';

/**
 * Hook to optimize all images on the page
 */
export const useImageOptimization = () => {
  useEffect(() => {
    // Optimize image loading on mount
    optimizeImagePerformance();
    
    // Preload critical images
    preloadCriticalImages();
  }, []);
};

/**
 * Hook to preload specific images
 */
export const useImagePreload = (urls: string[]) => {
  useEffect(() => {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }, [urls]);
};

/**
 * Hook for progressive image loading with placeholder
 */
export const useProgressiveImage = (src: string) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);
  
  return currentSrc;
};
