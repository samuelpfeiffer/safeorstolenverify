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
  const { session, isAuthenticated } = useUnifiedAuth();

  const handleSubscribe = () => {
    if (!session || !isAuthenticated) {
      toast({
        title: "Authentication Required", 
        description: "Please sign in to subscribe to a plan.",
        variant: "destructive",
      });
      return;
    }

    // CRITICAL FIX: Redirect to checkout page OUTSIDE iframe
    // This page will then create the Stripe session and redirect to Stripe
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
      disabled={disabled}
      className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white"
    >
      Subscribe to {planName}
    </Button>
  );
};