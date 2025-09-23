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
          title: customTitle || `Verify Stolen Goods Instantly - IMEI, VIN & Serial Check${locationSuffix}`,
          description: customDescription || `Instantly check if phones, cars, electronics are stolen before buying${locationSuffix}. Enter IMEI, VIN or serial number - $2.3M in scams prevented.`
        };
      
      case 'check-phone':
        return {
          title: customTitle || `Check if Phone is Stolen - Free IMEI Verification${locationSuffix}`,
          description: customDescription || `Free IMEI checker${locationSuffix}. Verify iPhone, Samsung, Android phones against stolen device databases. Check phone IMEI in 30 seconds.`
        };
      
      case 'check-car':
        return {
          title: customTitle || `Check if Car is Stolen - Free VIN Verification${locationSuffix}`,
          description: customDescription || `Free VIN checker${locationSuffix}. Verify cars, trucks, motorcycles against stolen vehicle databases. Check car VIN before buying.`
        };
      
      case 'imei':
        return {
          title: customTitle || `IMEI Check - Verify Phone Not Stolen in 30 Seconds${locationSuffix}`,
          description: customDescription || `Free IMEI verification tool${locationSuffix}. Check iPhone, Android IMEI against stolen phone databases. Protect yourself from stolen devices.`
        };
      
      case 'vin':
        return {
          title: customTitle || `VIN Check - Verify Car Not Stolen Before Buying${locationSuffix}`,
          description: customDescription || `Free VIN verification${locationSuffix}. Check vehicle identification numbers against stolen car databases. Verify before purchase.`
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
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </Helmet>
  );
};