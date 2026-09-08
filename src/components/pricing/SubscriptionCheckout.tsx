import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useNavigate } from '@/lib/router-compat';
import { supabase } from '@/integrations/supabase/client';
import { redirectToStripe } from '@/utils/stripeRedirect';

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
  const navigate = useNavigate();
  const { session, loading, isAuthenticated } = useUnifiedAuth();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubscribe = async () => {
    console.log('[SUBSCRIPTION] Subscribe clicked:', { planName, priceId, isAuthenticated, hasSession: !!session });

    if (!isAuthenticated || !session) {
      console.log('[SUBSCRIPTION] Not authenticated, redirecting to auth...');
      const params = new URLSearchParams({
        priceId,
        planName,
        isSubscription: 'true',
      });
      navigate(`/auth?redirect=${encodeURIComponent(`/checkout-redirect?${params.toString()}`)}`);
      return;
    }

    setIsProcessing(true);
    console.log('[SUBSCRIPTION] Calling Stripe...');

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId,
          planName,
          isSubscription: true,
          redirectUrl: 'https://safeorstolen.com',
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      console.log('[SUBSCRIPTION] Response:', { data, error });

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

      // Use safe redirect that works in iframes
      redirectToStripe(data.url);
    } catch (err: any) {
      console.error('[SUBSCRIPTION] Error:', err);
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
