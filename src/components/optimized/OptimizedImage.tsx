import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: string;
  blurDataURL?: string;
  /** Explicit width for CLS prevention */
  width?: number | string;
  /** Explicit height for CLS prevention */
  height?: number | string;
}

/**
 * OptimizedImage - CLS-optimized image component
 * - Uses aspectRatio to reserve space before load
 * - Supports explicit width/height for intrinsic sizing
 * - Lazy loads non-priority images with IntersectionObserver
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  priority = false,
  aspectRatio,
  blurDataURL,
  loading,
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Container style for CLS prevention
  const containerStyle: React.CSSProperties = {
    ...(aspectRatio ? { aspectRatio } : {}),
    // Ensure minimum dimensions to prevent CLS
    minHeight: height ? undefined : (aspectRatio ? '1px' : undefined),
  };

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={containerStyle}
    >
      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />
      )}
      
      {/* Main image with explicit dimensions for CLS prevention */}
      <img
        ref={imgRef}
        src={isInView || priority ? src : undefined}
        alt={alt}
        loading={priority ? 'eager' : loading || 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleLoad}
        width={width}
        height={height}
        style={aspectRatio ? { aspectRatio } : undefined}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        {...props}
      />
    </div>
  );
};

// Preload critical images
export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};
