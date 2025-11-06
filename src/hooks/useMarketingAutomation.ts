import React, { useCallback } from 'react';
import { useUnifiedAuth } from './useUnifiedAuth';
import { trackSignup, trackPurchase, trackVerification, trackEngagement } from '@/utils/marketingAutomation';

export const useMarketingAutomation = () => {
  const { user } = useUnifiedAuth();

  const trackUserSignup = useCallback((email: string, name?: string) => {
    trackSignup(email, name);
  }, []);

  const trackUserPurchase = useCallback((plan: string, amount?: number) => {
    if (user?.email) {
      trackPurchase(user.email, plan, amount);
    }
  }, [user?.email]);

  const trackItemVerification = useCallback((itemType?: string) => {
    trackVerification(user?.email, itemType);
  }, [user?.email]);

  const trackUserEngagement = useCallback((event: string, metadata?: Record<string, any>) => {
    trackEngagement(event, user?.email, metadata);
  }, [user?.email]);

  // Auto-track page views
  const trackPageView = useCallback((pagePath: string) => {
    trackUserEngagement('page_view', { 
      path: pagePath,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    });
  }, [trackUserEngagement]);

  return {
    trackUserSignup,
    trackUserPurchase,
    trackItemVerification,
    trackUserEngagement,
    trackPageView
  };
};