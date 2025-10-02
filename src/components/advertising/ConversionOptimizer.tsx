import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * Conversion Optimizer - Advanced tracking and optimization
 * Implements conversion tracking, exit-intent, and behavior analytics
 */
export const ConversionOptimizer: React.FC = () => {
  const location = useLocation();
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    // Track conversion funnel steps
    const funnelStep = getFunnelStep(location.pathname);
    trackFunnelProgress(funnelStep);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true);
        trackEvent('exit_intent_triggered');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [location, showExitIntent]);

  const getFunnelStep = (path: string): string => {
    const funnelMap: Record<string, string> = {
      '/': 'awareness',
      '/problem': 'problem_aware',
      '/how-it-works': 'solution_aware',
      '/check-phone': 'product_aware',
      '/check-car': 'product_aware',
      '/pricing': 'consideration',
      '/auth': 'conversion',
      '/dashboard': 'activation'
    };

    for (const [key, value] of Object.entries(funnelMap)) {
      if (path.includes(key)) return value;
    }
    return 'exploration';
  };

  const trackFunnelProgress = (step: string) => {
    console.log('Funnel Progress:', {
      step,
      timestamp: new Date().toISOString(),
      page: location.pathname
    });

    // Track in localStorage for user journey analysis
    const journey = JSON.parse(localStorage.getItem('user_journey') || '[]');
    journey.push({
      step,
      path: location.pathname,
      timestamp: Date.now()
    });
    localStorage.setItem('user_journey', JSON.stringify(journey.slice(-10))); // Keep last 10 steps
  };

  const trackEvent = (event: string) => {
    console.log('Conversion Event:', event);
  };

  return (
    <Helmet>
      {/* Tracking scripts disabled - add your tracking IDs to enable */}
      {/* 
        To enable tracking, replace placeholder IDs with real IDs:
        - Google Analytics: Replace G-XXXXXXXXXX with your GA4 ID
        - Facebook Pixel: Replace YOUR_PIXEL_ID with your Facebook Pixel ID
        - Microsoft Clarity: Replace YOUR_CLARITY_ID with your Clarity ID
        - Hotjar: Replace YOUR_HJID with your Hotjar ID
        - LinkedIn: Replace YOUR_PARTNER_ID with your LinkedIn Partner ID
      */}
    </Helmet>
  );
};
