import React from 'react';
import { OptimizedImage } from '@/components/performance/OptimizedImage';
import { ViralAdWrapper } from './ViralAdWrapper';

interface ParanoiaAdProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  enableSharing?: boolean;
}

/**
 * Individual paranoia-inducing ad component
 * Designed to create urgency and psychological need for verification
 * Now with viral sharing capabilities and SEO optimization
 */
export const ParanoiaAd: React.FC<ParanoiaAdProps> = ({ 
  src, 
  alt,
  size = 'medium',
  enableSharing = true
}) => {
  const sizeClasses = {
    small: 'max-w-xs',
    medium: 'max-w-md',
    large: 'max-w-2xl'
  };

  const adContent = (
    <div className={`${sizeClasses[size]} mx-auto my-12 animate-fade-in`}>
      {/* SEO-optimized wrapper */}
      <article 
        className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:scale-105 cursor-pointer"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <OptimizedImage
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <meta itemProp="name" content={alt} />
        <meta itemProp="description" content="Warning about stolen goods - verify before you buy" />
        <meta itemProp="url" content={src} />
      </article>
      
      {/* Hidden SEO text for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h3>Don't Get Scammed - Verify Before You Buy</h3>
        <p>{alt}</p>
        <p>Protect yourself from stolen goods with SafeOrStolen.com verification service</p>
      </div>
    </div>
  );

  if (enableSharing) {
    return (
      <ViralAdWrapper
        imageUrl={src}
        shareTitle="⚠️ Don't Buy Stolen Goods!"
        shareText="Check if items are stolen before buying. I found this warning and thought you should see it to stay safe!"
      >
        {adContent}
      </ViralAdWrapper>
    );
  }

  return adContent;
};
