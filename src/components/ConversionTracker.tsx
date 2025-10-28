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
  
  if (!location) return null;

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
    // Track page views
    trackEvent('page_view', {
      title: document.title,
      url: window.location.href
    });
  }, [location.pathname]);

  useEffect(() => {
    // Track conversion funnel stages
    const path = location.pathname;
    
    if (path === '/') {
      trackEvent('landing_page_view');
    } else if (path === '/verification-hub') {
      trackEvent('verification_page_view');
    } else if (path === '/subscriptions') {
      trackEvent('subscriptions_page_view');
    } else if (path === '/auth') {
      trackEvent('signup_page_view');
    } else if (path === '/for-brands') {
      trackEvent('b2b_page_view');
    } else if (path === '/enterprise-demo') {
      trackEvent('demo_page_view');
    }
  }, [location.pathname]);

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