import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
}

export const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images }) => {
  useEffect(() => {
    // Preload critical images
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }, [images]);

  return null;
};

// Hook for preloading images
export const useImagePreload = (images: string[]) => {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
};
