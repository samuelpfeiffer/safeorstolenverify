import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { navigateOutOfIframe } from '@/utils/navigationUtils';

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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { session, isAuthenticated } = useUnifiedAuth();

  const handleSubscribe = async () => {
    if (!session || !isAuthenticated) {
      toast({
        title: "Authentication Required", 
        description: "Please sign in to subscribe to a plan.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // CRITICAL: Open window IMMEDIATELY before async call to prevent popup blocking
    const checkoutWindow = window.open('about:blank', '_blank', 'noopener,noreferrer');
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId, isSubscription: true, planName, redirectUrl: window.location.origin },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Checkout error:', error);
        checkoutWindow?.close();
        throw new Error(error.message || 'Failed to create checkout session');
      }

      if (data?.url) {
        // Navigate pre-opened window to Stripe checkout
        if (checkoutWindow) {
          checkoutWindow.location.href = data.url;
        } else {
          // Fallback: redirect current page if popup was blocked
          window.location.href = data.url;
        }
      } else {
        checkoutWindow?.close();
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      checkoutWindow?.close();
      toast({
        title: "Payment System Temporarily Unavailable",
        description: "Please try again in a few minutes or contact support if the issue persists.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSubscribe}
      disabled={disabled || isLoading}
      className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Starting checkout...
        </>
      ) : (
        `Subscribe to ${planName}`
      )}
    </Button>
  );
};