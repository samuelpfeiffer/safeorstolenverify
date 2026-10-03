import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OptimizedTitlesProps {
  pageType: 'home' | 'verification' | 'guide' | 'service' | 'check-phone' | 'check-car' | 'imei' | 'vin';
  customTitle?: string;
  customDescription?: string;
  location?: string; // For local SEO
}

export const OptimizedTitles: React.FC<OptimizedTitlesProps> = ({
  pageType,
  customTitle,
  customDescription,
  location
}) => {
  const getTitleAndDescription = () => {
    const locationSuffix = location ? ` in ${location}` : '';
    
    switch (pageType) {
      case 'home':
        return {
          title: customTitle || `Free IMEI VIN Check - Verify & Search Stolen Items Database${locationSuffix}`,
          description: customDescription || `Stolen item verification from $3.99/check. Check & verify phones, cars, electronics before buying${locationSuffix}. Search our database: IMEI, VIN, serial numbers.`
        };
      
      case 'check-phone':
        return {
          title: customTitle || `Free IMEI Check - Verify Phone Not Stolen Before Buying${locationSuffix}`,
          description: customDescription || `Free IMEI verification tool${locationSuffix}. Check & verify iPhone, Samsung, Android against stolen phone database. Search IMEI numbers instantly.`
        };
      
      case 'check-car':
        return {
          title: customTitle || `Free VIN Check - Verify Car Not Stolen Before Buying${locationSuffix}`,
          description: customDescription || `Free VIN verification tool${locationSuffix}. Check & verify cars, trucks, motorcycles in stolen vehicle database. Search VIN numbers instantly.`
        };
      
      case 'imei':
        return {
          title: customTitle || `Free IMEI Check - Verify & Search Stolen Phone Database${locationSuffix}`,
          description: customDescription || `Free IMEI verification${locationSuffix}. Check & verify iPhone, Android IMEI numbers in stolen phone database. Search before buying.`
        };
      
      case 'vin':
        return {
          title: customTitle || `Free VIN Check - Verify & Search Stolen Car Database${locationSuffix}`,
          description: customDescription || `Free VIN verification${locationSuffix}. Check & verify vehicle numbers in stolen car database. Search VIN before buying.`
        };
      
      case 'verification':
        return {
          title: customTitle || `Stolen Item Verification - Check IMEI, VIN, Serial Numbers${locationSuffix}`,
          description: customDescription || `Professional stolen item verification service${locationSuffix}. Check phones, cars, electronics against comprehensive theft databases.`
        };
      
      case 'guide':
        return {
          title: customTitle || `How to Check if Items are Stolen - Complete Guide${locationSuffix}`,
          description: customDescription || `Learn how to verify IMEI, VIN, serial numbers${locationSuffix}. Complete guide to avoid buying stolen goods from marketplaces.`
        };
      
      case 'service':
        return {
          title: customTitle || `Stolen Goods Verification Service - Enterprise Solutions${locationSuffix}`,
          description: customDescription || `Professional stolen goods verification for businesses${locationSuffix}. Bulk checks, API access, marketplace integration.`
        };
      
      default:
        return {
          title: customTitle || `SafeOrStolen - Verify Before You Buy${locationSuffix}`,
          description: customDescription || `Comprehensive stolen goods verification service${locationSuffix}. Check IMEI, VIN, serial numbers instantly.`
        };
    }
  };

  const { title, description } = getTitleAndDescription();

  // Ensure title is under 60 characters for optimal SEO
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  
  // Ensure description is under 160 characters for optimal SEO
  const optimizedDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

  return (
    <Helmet>
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      
      {/* Twitter tags */}
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      
      {/* Additional SEO meta tags - max-video-preview:0 to prevent video indexing on non-watch pages */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:0" />
    </Helmet>
  );
};