import React from 'react';
import { OptimizedImage } from '@/components/performance/OptimizedImage';

interface ParanoiaAdProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Individual paranoia-inducing ad component
 * Designed to create urgency and psychological need for verification
 */
export const ParanoiaAd: React.FC<ParanoiaAdProps> = ({ 
  src, 
  alt,
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'max-w-xs',
    medium: 'max-w-md',
    large: 'max-w-2xl'
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto my-12 animate-fade-in`}>
      <div 
        className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:scale-105 cursor-pointer"
      >
        <OptimizedImage
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
