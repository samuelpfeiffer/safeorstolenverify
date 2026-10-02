import React, { useEffect } from 'react';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

interface ConversionEvent {
  event: string;
  page: string;
  user_id?: string;
  timestamp: string;
  properties?: Record<string, any>;
}

export const ConversionTracker: React.FC = () => {
  const location = useSafeLocation();
  const { user, isAuthenticated } = useUnifiedAuth();
  

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    const conversionEvent: ConversionEvent = {
      event,
      page: location.pathname,
      user_id: user?.id,
      timestamp: new Date().toISOString(),
      properties: {
        ...properties,
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        is_authenticated: isAuthenticated
      }
    };

    // Log to console only in development
    if (process.env.NODE_ENV === 'development') {
      // Development tracking only
    }

    // In production, send to analytics service
    // Example: analytics.track(conversionEvent);
  };

  useEffect(() => {
    if (!location) return; // Oct 2 2026: hooks must always run; guard inside instead
    // Track page views
    trackEvent('page_view', {
      title: document.title,
      url: window.location.href
    });
  }, [location.pathname]);

  useEffect(() => {
    if (!location) return; // Oct 2 2026: hooks must always run; guard inside instead
    // Track conversion funnel stages
    const path = location.pathname;
    
    if (path === '/') {
      trackEvent('landing_page_view');
    } else if (path === '/verify') {
      trackEvent('verification_page_view');
    } else if (path === '/pricing') {
      trackEvent('pricing_page_view');
    } else if (path === '/auth') {
      trackEvent('signup_page_view');
    } else if (path === '/for-businesses') {
      trackEvent('b2b_page_view');
    } else if (path === '/enterprise-demo') {
      trackEvent('demo_page_view');
    }
  }, [location.pathname]);

  if (!location) return null;
  return null; // This component only tracks, doesn't render
};

// Hook for manual conversion tracking
export const useConversionTracking = () => {
  const location = useSafeLocation();
  const { user, isAuthenticated } = useUnifiedAuth();

  const trackConversion = (event: string, properties?: Record<string, any>) => {
    const conversionEvent: ConversionEvent = {
      event,
      page: location?.pathname || '/',
      user_id: user?.id,
      timestamp: new Date().toISOString(),
      properties: {
        ...properties,
        is_authenticated: isAuthenticated
      }
    };

    if (process.env.NODE_ENV === 'development') {
      // Development tracking only
    }

    // Send to analytics in production
  };

  return { trackConversion };
};