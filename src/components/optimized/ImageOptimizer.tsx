import React, { useState, useCallback, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = memo<OptimizedImageProps>(({ 
  src, 
  alt, 
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'empty',
  sizes,
  onLoad,
  onError 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setImageError(true);
    onError?.();
  }, [onError]);

  // Generate responsive srcSet for better performance
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [480, 768, 1024, 1280, 1920];
    return sizes.map(size => {
      if (baseSrc.includes('lovable-uploads/')) {
        return `${baseSrc}?w=${size} ${size}w`;
      }
      return `${baseSrc} ${size}w`;
    }).join(', ');
  };

  const imageProps = {
    src,
    alt,
    className: `${className} transition-opacity duration-300 ${
      imageLoaded ? 'opacity-100' : 'opacity-0'
    }`,
    onLoad: handleLoad,
    onError: handleError,
    loading: priority ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const,
    ...(width && { width }),
    ...(height && { height }),
    ...(sizes && { sizes }),
    srcSet: generateSrcSet(src),
  };

  if (imageError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-500`}
        style={{ width, height }}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <>
      {placeholder === 'blur' && !imageLoaded && (
        <div 
          className={`${className} bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse`}
          style={{ width, height }}
        />
      )}
      <img {...imageProps} />
    </>
  );
});

OptimizedImage.displayName = 'OptimizedImage';