import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

export const ConversionTracking: React.FC = () => {
  const location = useLocation();
  const { user } = useUnifiedAuth();

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        user_id: user?.id || 'anonymous',
      });
    }
  }, [location, user]);

  return null;
};

// Helper functions to track specific conversion events
export const trackTrialStart = (userId: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'trial_start', {
      event_category: 'engagement',
      event_label: 'trial_started',
      user_id: userId,
      value: 0,
    });
  }
  
  console.log('📊 Conversion Event: Trial Started', { userId });
};

export const trackCheckUsed = (userId: string, checksRemaining: number, itemType: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'check_used', {
      event_category: 'engagement',
      event_label: 'verification_check',
      user_id: userId,
      checks_remaining: checksRemaining,
      item_type: itemType,
    });
  }
  
  console.log('📊 Conversion Event: Check Used', { userId, checksRemaining, itemType });
};

export const trackUpgradeClick = (userId: string, source: string, tier: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'upgrade_click', {
      event_category: 'conversion',
      event_label: 'upgrade_intent',
      user_id: userId,
      source: source,
      tier: tier,
    });
  }
  
  console.log('📊 Conversion Event: Upgrade Click', { userId, source, tier });
};

export const trackSubscriptionComplete = (userId: string, tier: string, price: number, interval: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'purchase', {
      event_category: 'conversion',
      transaction_id: `sub_${Date.now()}`,
      value: price / 100,
      currency: 'USD',
      user_id: userId,
      items: [{
        item_name: `${tier}_subscription`,
        item_category: 'subscription',
        price: price / 100,
        quantity: 1,
      }],
      subscription_tier: tier,
      billing_interval: interval,
    });
  }
  
  console.log('📊 Conversion Event: Subscription Complete', { userId, tier, price, interval });
};

export const trackTrialExpiring = (userId: string, daysRemaining: number, checksRemaining: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'trial_expiring', {
      event_category: 'engagement',
      event_label: 'trial_urgency',
      user_id: userId,
      days_remaining: daysRemaining,
      checks_remaining: checksRemaining,
    });
  }
  
  console.log('📊 Conversion Event: Trial Expiring', { userId, daysRemaining, checksRemaining });
};

export const trackPaywallView = (userId: string, trigger: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'paywall_view', {
      event_category: 'engagement',
      event_label: 'paywall_shown',
      user_id: userId,
      trigger: trigger,
    });
  }
  
  console.log('📊 Conversion Event: Paywall Viewed', { userId, trigger });
};
