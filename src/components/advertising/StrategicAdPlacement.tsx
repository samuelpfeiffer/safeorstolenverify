import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContextualAdPlacement } from './ContextualAdPlacement';

interface StrategicAdPlacementProps {
  placement?: 'sidebar' | 'inline' | 'banner';
}

/**
 * Strategic Ad Placement Component
 * Maps specific ads to pages based on user journey and content relevance
 */
export const StrategicAdPlacement: React.FC<StrategicAdPlacementProps> = ({ 
  placement = 'inline' 
}) => {
  const location = useLocation();
  const path = location.pathname;

  // Define strategic ad mapping based on page context and user intent
  const getAdContext = (): 'pricing' | 'verification' | 'smartphone' | 'vehicle' | 'firearm' | 'general' => {
    // Pricing & Conversion Pages - Show deals and offers
    if (path.includes('pricing') || path.includes('subscription')) {
      return 'pricing';
    }

    // Phone/Mobile/IMEI Pages - Show smartphone ad
    if (
      path.includes('phone') || 
      path.includes('mobile') || 
      path.includes('imei') ||
      path.includes('check-phone') ||
      path.includes('buy-used-electronics')
    ) {
      return 'smartphone';
    }

    // Vehicle/Car/VIN Pages - Show vehicle verification ad
    if (
      path.includes('car') || 
      path.includes('vehicle') || 
      path.includes('vin') ||
      path.includes('check-car') ||
      path.includes('motorcycle') ||
      path.includes('bike')
    ) {
      return 'vehicle';
    }

    // Firearm/Gun Pages - Show firearm verification ad
    if (
      path.includes('firearm') || 
      path.includes('gun') ||
      path.includes('weapon')
    ) {
      return 'firearm';
    }

    // Verification/Check Pages - Show trust/confidence ad
    if (
      path.includes('verification') || 
      path.includes('check') ||
      path.includes('real-time') ||
      path.includes('how-it-works')
    ) {
      return 'verification';
    }

    // Consumer/Buyer Pages - Show trust/confidence ad
    if (
      path.includes('consumer') ||
      path.includes('buyer') ||
      path.includes('for-consumers')
    ) {
      return 'verification';
    }

    // Services/About/Info Pages - Show general trust ad
    if (
      path.includes('services') ||
      path.includes('about') ||
      path.includes('faq')
    ) {
      return 'verification';
    }

    // Blog Posts - Context-aware based on keywords
    if (path.includes('blog')) {
      if (path.includes('phone') || path.includes('smartphone')) return 'smartphone';
      if (path.includes('car') || path.includes('vehicle')) return 'vehicle';
      if (path.includes('gun') || path.includes('firearm')) return 'firearm';
      return 'verification';
    }

    // Default - Show trust/confidence ad
    return 'verification';
  };

  const context = getAdContext();

  return <ContextualAdPlacement context={context} placement={placement} />;
};
