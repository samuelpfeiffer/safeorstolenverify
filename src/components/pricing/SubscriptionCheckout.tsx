import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { escapeIframeAndNavigate } from '@/utils/navigationUtils';

interface SubscriptionCheckoutProps {
  priceId: string;
  planName: string;
  disabled?: boolean;
}

export const SubscriptionCheckout: React.FC<SubscriptionCheckoutProps> = ({
  priceId,
  planName,
  disabled = false,
}) => {
  const { toast } = useToast();
  const { session, isAuthenticated, loading } = useUnifiedAuth();

  const handleSubscribe = () => {
    console.log('[SUBSCRIPTION] Subscribe clicked:', { planName, priceId, isAuthenticated, hasSession: !!session });

    // If not authenticated, redirect to auth first
    if (!isAuthenticated || !session) {
      console.log('[SUBSCRIPTION] Not authenticated, redirecting to auth...');
      const params = new URLSearchParams({
        priceId,
        planName,
        isSubscription: 'true',
      });
      escapeIframeAndNavigate(`/auth?redirect=${encodeURIComponent(`/checkout-redirect?${params.toString()}`)}`);
      return;
    }

    // User is authenticated, proceed to checkout
    console.log('[SUBSCRIPTION] Authenticated, redirecting to checkout...');
    const params = new URLSearchParams({
      priceId,
      planName,
      isSubscription: 'true',
    });
    
    escapeIframeAndNavigate(`/checkout-redirect?${params.toString()}`);
  };

  return (
    <Button
      onClick={handleSubscribe}
      disabled={disabled || loading}
      className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white"
    >
      {loading ? 'Loading...' : `Subscribe to ${planName}`}
    </Button>
  );
};