import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  containerClassName?: string;
  /** Explicit width for CLS prevention */
  width?: number | string;
  /** Explicit height for CLS prevention */
  height?: number | string;
}

/**
 * LazyImage - CLS-optimized lazy loading image
 * - Uses aspectRatio to reserve space before load
 * - Shows skeleton placeholder to prevent shift
 * - Supports explicit width/height
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  aspectRatio,
  containerClassName,
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Container style for CLS prevention
  const containerStyle: React.CSSProperties = {
    ...(aspectRatio ? { aspectRatio } : {}),
    // Minimum height ensures space is reserved even without aspectRatio
    minHeight: height || (aspectRatio ? '1px' : '100px'),
  };

  return (
    <div
      className={cn('relative overflow-hidden bg-muted', containerClassName)}
      style={containerStyle}
    >
      {/* Skeleton placeholder - reserves space and prevents CLS */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-muted">
          <div className="h-full w-full bg-gradient-to-r from-muted via-muted-foreground/10 to-muted" />
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm">
          Failed to load image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          width={width}
          height={height}
          style={aspectRatio ? { aspectRatio } : undefined}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};
