import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { escapeIframeAndNavigate } from '@/utils/navigationUtils';
import { supabase } from '@/integrations/supabase/client';

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
  const { session, loading, isAuthenticated } = useUnifiedAuth();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubscribe = async () => {
    console.log('[SUBSCRIPTION-DIRECT] Subscribe clicked:', { planName, priceId, isAuthenticated, hasSession: !!session });

    // If not authenticated, redirect to auth first
    if (!isAuthenticated || !session) {
      console.log('[SUBSCRIPTION-DIRECT] Not authenticated, redirecting to auth...');
      const params = new URLSearchParams({
        priceId,
        planName,
        isSubscription: 'true',
      });
      escapeIframeAndNavigate(`/auth?redirect=${encodeURIComponent(`/checkout-redirect?${params.toString()}`)}`);
      return;
    }

    // DIRECT CHECKOUT - Skip redirect page
    setIsProcessing(true);
    console.log('[SUBSCRIPTION-DIRECT] Calling Stripe directly...');

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId,
          planName,
          isSubscription: true,
          redirectUrl: window.location.origin,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      console.log('[SUBSCRIPTION-DIRECT] Response:', { data, error });

      if (error) {
        toast({
          title: 'Error',
          description: error.message || 'Failed to create checkout session',
          variant: 'destructive',
        });
        setIsProcessing(false);
        return;
      }

      if (!data?.url) {
        toast({
          title: 'Error',
          description: 'No checkout URL received',
          variant: 'destructive',
        });
        setIsProcessing(false);
        return;
      }

      console.log('[SUBSCRIPTION-DIRECT] Redirecting to Stripe:', data.url);
      window.location.href = data.url;
    } catch (err: any) {
      console.error('[SUBSCRIPTION-DIRECT] Error:', err);
      toast({
        title: 'Error',
        description: err.message || 'An unexpected error occurred',
        variant: 'destructive',
      });
      setIsProcessing(false);
    }
  };

  return (
    <Button
      onClick={handleSubscribe}
      disabled={disabled || loading || isProcessing}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      {isProcessing ? 'Processing...' : loading ? 'Loading...' : `Subscribe to ${planName}`}
    </Button>
  );
};
