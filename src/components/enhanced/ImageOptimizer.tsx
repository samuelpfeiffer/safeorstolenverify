import React, { useEffect } from 'react';

interface ImageOptimizerProps {
  children: React.ReactNode;
}

export const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Lazy loading for images that don't have it
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });

    // Add appropriate sizes attribute for responsive images
    const responsiveImages = document.querySelectorAll('img[src*="verification"], img[src*="partners"], img[src*="logo"]');
    responsiveImages.forEach(img => {
      if (!img.hasAttribute('sizes')) {
        img.setAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');
      }
    });

    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
      '/images/verification/legitimate-verification-tech.webp'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Add fetchpriority="high" to above-the-fold images
    const heroImages = document.querySelectorAll('img[alt*="verification"], img[alt*="Safe or Stolen"]');
    heroImages.forEach((img, index) => {
      if (index < 2) { // Only first 2 images
        img.setAttribute('fetchpriority', 'high');
      }
    });

  }, []);

  return <>{children}</>;
};