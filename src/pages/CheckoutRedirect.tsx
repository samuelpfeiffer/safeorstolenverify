import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { navigateOutOfIframe, isInIframe } from '@/utils/navigationUtils';

const CheckoutRedirect: React.FC = () => {
  const location = useLocation();
  const { session, loading } = useUnifiedAuth();
  const [error, setError] = useState<string | React.ReactNode | null>(null);
  const [redirecting, setRedirecting] = useState(false);
  const checkoutAttempted = useRef(false);

  useEffect(() => {
    // Only run once
    if (checkoutAttempted.current) {
      return;
    }

    const searchParams = new URLSearchParams(location.search);
    
    console.log('[CHECKOUT-REDIRECT] Initializing checkout:', { 
      hasSession: !!session, 
      loading,
      hasAccessToken: session?.access_token ? 'YES' : 'NO'
    });

    const createCheckout = async () => {
      const priceId = searchParams.get('priceId');
      const planName = searchParams.get('planName');
      const isSubscription = searchParams.get('isSubscription') === 'true';
      const serialNumber = searchParams.get('serialNumber');
      const itemType = searchParams.get('itemType');

      console.log('[CHECKOUT-REDIRECT] Parameters:', { priceId, planName, isSubscription, serialNumber, itemType });

      // Plan name is required
      if (!planName) {
        console.error('[CHECKOUT-REDIRECT] Missing planName');
        checkoutAttempted.current = true;
        setError('Missing plan information. Please try again from the pricing page.');
        return;
      }

      // Wait for auth to complete
      if (loading) {
        console.log('[CHECKOUT-REDIRECT] Waiting for auth...');
        return;
      }

      // Redirect to auth if no session
      if (!session || !session.access_token) {
        console.log('[CHECKOUT-REDIRECT] No session - redirecting to login');
        checkoutAttempted.current = true;
        const checkoutParams = new URLSearchParams(window.location.search).toString();
        window.location.href = `/auth?redirect=${encodeURIComponent(`/checkout-redirect?${checkoutParams}`)}`;
        return;
      }

      // Mark as attempted to prevent re-runs
      console.log('[CHECKOUT-REDIRECT] Session ready, creating checkout...');
      checkoutAttempted.current = true;
      setRedirecting(true);

      try {
        const body: any = {
          priceId: priceId || null,
          planName: planName,
          isSubscription,
          redirectUrl: window.location.origin,
        };

        if (serialNumber) body.serialNumber = serialNumber;
        if (itemType) body.itemType = itemType;

        console.log('[CHECKOUT-REDIRECT] Calling edge function...');

        const { data, error } = await supabase.functions.invoke('create-checkout', {
          body,
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (error) {
          console.error('[CHECKOUT-REDIRECT] Edge function error:', error);
          setError(error.message || 'Failed to create checkout session');
          setRedirecting(false);
          return;
        }

        if (data?.url) {
          console.log('[CHECKOUT-REDIRECT] SUCCESS! Redirecting to:', data.url);
          // Immediate redirect - no state updates after this
          window.location.href = data.url;
        } else {
          console.error('[CHECKOUT-REDIRECT] No URL in response');
          setError('No checkout URL received from Stripe');
          setRedirecting(false);
        }
      } catch (err: any) {
        console.error('[CHECKOUT-REDIRECT] Exception:', err);
        setError(err.message || 'Failed to create checkout session');
        setRedirecting(false);
      }
    };

    createCheckout();
  }, [location.search, session, loading]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Checkout Error</h1>
          <div className="text-gray-700 mb-6">{error}</div>
          <button
            onClick={() => window.location.href = '/pricing'}
            className="bg-sos-orange text-white px-6 py-2 rounded-lg hover:bg-sos-orange/90"
          >
            Return to Pricing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-16 h-16 text-sos-orange animate-spin mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">
          {redirecting ? 'Redirecting to Stripe...' : 'Preparing Checkout...'}
        </h1>
        <p className="text-gray-300">
          {redirecting ? 'Opening secure payment page...' : 'Please wait while we prepare your payment.'}
        </p>
      </div>
    </div>
  );
};

export default CheckoutRedirect;
