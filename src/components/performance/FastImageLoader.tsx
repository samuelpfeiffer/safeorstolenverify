import React, { useState, useCallback } from 'react';

interface FastImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const FastImageLoader: React.FC<FastImageLoaderProps> = ({ 
  src, 
  alt, 
  className = '', 
  priority = false 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  if (error) {
    return (
      <div className={`bg-gray-200 animate-pulse ${className}`}>
        <div className="flex items-center justify-center h-full text-gray-400">
          Image failed to load
        </div>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className={`bg-gray-200 animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        {...(priority && { fetchpriority: 'high' })}
      />
    </>
  );
};