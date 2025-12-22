import React from 'react';
import { ThumbnailQuickStart } from './ThumbnailQuickStart';
import { ThumbnailMarketplace } from './ThumbnailMarketplace';
import { ThumbnailVIN } from './ThumbnailVIN';
import { ThumbnailIMEI } from './ThumbnailIMEI';
import { ThumbnailMarketplaceProtection } from './ThumbnailMarketplaceProtection';

/**
 * Map video slugs to their custom thumbnail components
 */
const thumbnailMap: Record<string, React.FC<{ className?: string }>> = {
  'stolen-item-check': ThumbnailQuickStart,
  'marketplace-safety': ThumbnailMarketplace,
  'vin-check': ThumbnailVIN,
  'imei-check': ThumbnailIMEI,
  'marketplace-protection': ThumbnailMarketplaceProtection,
};

interface ThumbnailFactoryProps {
  slug: string;
  className?: string;
  fallback?: React.ReactNode;
}

/**
 * Factory component that renders the appropriate custom thumbnail based on video slug
 */
export const ThumbnailFactory: React.FC<ThumbnailFactoryProps> = ({ 
  slug, 
  className = '',
  fallback = null 
}) => {
  const ThumbnailComponent = thumbnailMap[slug];
  
  if (!ThumbnailComponent) {
    return <>{fallback}</>;
  }
  
  return <ThumbnailComponent className={className} />;
};

/**
 * Helper to check if a custom thumbnail exists for a given slug
 */
export const hasCustomThumbnail = (slug: string): boolean => {
  return slug in thumbnailMap;
};

/**
 * Get thumbnail component by slug
 */
export const getThumbnailComponent = (slug: string): React.FC<{ className?: string }> | null => {
  return thumbnailMap[slug] || null;
};

export default ThumbnailFactory;
