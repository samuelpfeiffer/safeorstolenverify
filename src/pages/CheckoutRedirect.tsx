import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { navigateOutOfIframe, isInIframe } from '@/utils/navigationUtils';

const CheckoutRedirect: React.FC = () => {
  const location = useLocation();
  const { session, isAuthenticated, loading } = useUnifiedAuth();
  const [error, setError] = useState<string | React.ReactNode | null>(null);
  const checkoutInProgress = useRef(false);

  useEffect(() => {
    // Get params fresh from location on every render
    const searchParams = new URLSearchParams(location.search);
    
    console.log('[CHECKOUT-REDIRECT] Effect running:', { 
      hasSession: !!session, 
      isAuthenticated,
      loading,
      hasAccessToken: session?.access_token ? 'YES' : 'NO',
      searchParams: searchParams.toString()
    });

    const createCheckout = async () => {
      // Prevent duplicate checkout creation
      if (checkoutInProgress.current) {
        console.log('[CHECKOUT-REDIRECT] Checkout already in progress, skipping');
        return;
      }

      const priceId = searchParams.get('priceId');
      const planName = searchParams.get('planName');
      const isSubscription = searchParams.get('isSubscription') === 'true';
      const serialNumber = searchParams.get('serialNumber');
      const itemType = searchParams.get('itemType');

      console.log('[CHECKOUT-REDIRECT] Parameters:', { priceId, planName, isSubscription, serialNumber, itemType });

      // Plan name is required for product matching (price ID is optional)
      if (!planName) {
        console.error('[CHECKOUT-REDIRECT] Missing planName');
        setError('Missing plan information. Please try again from the pricing page.');
        return;
      }

      // Check if still loading auth - wait max 3 seconds
      if (loading) {
        console.log('[CHECKOUT-REDIRECT] Auth still loading, waiting...');
        setTimeout(() => {
          // If still loading after 3 seconds, redirect to auth
          if (loading) {
            console.log('[CHECKOUT-REDIRECT] Auth timeout - redirecting to login');
            const checkoutParams = new URLSearchParams(window.location.search).toString();
            window.location.href = `/auth?redirect=${encodeURIComponent(`/checkout-redirect?${checkoutParams}`)}`;
          }
        }, 3000);
        return;
      }

      // If not loading but no session, redirect to login immediately
      if (!session || !session.access_token) {
        console.log('[CHECKOUT-REDIRECT] No session - redirecting to login');
        const checkoutParams = new URLSearchParams(window.location.search).toString();
        window.location.href = `/auth?redirect=${encodeURIComponent(`/checkout-redirect?${checkoutParams}`)}`;
        return;
      }

      console.log('[CHECKOUT-REDIRECT] Session ready, creating checkout...');
      checkoutInProgress.current = true;

      try {
        console.log('Creating checkout outside iframe:', { priceId: priceId || 'none (using planName)', planName, isSubscription });

        const body: any = {
          priceId: priceId || null, // null if not provided - edge function will use planName
          planName: planName,
          isSubscription,
          redirectUrl: window.location.origin,
        };

        if (serialNumber) body.serialNumber = serialNumber;
        if (itemType) body.itemType = itemType;

        const { data, error } = await supabase.functions.invoke('create-checkout', {
          body,
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (error) {
          console.error('Checkout error:', error);
          setError(error.message || 'Failed to create checkout session');
          return;
        }

        if (data?.url) {
          console.log('[CHECKOUT-REDIRECT] Redirecting to Stripe:', data.url);
          
          // Always redirect to Stripe checkout URL
          console.log('[CHECKOUT-REDIRECT] Redirecting to:', data.url);
          window.location.href = data.url;
        } else {
          setError('No checkout URL received from Stripe');
        }
      } catch (err: any) {
        console.error('Error creating checkout:', err);
        setError(err.message || 'Failed to create checkout session');
        checkoutInProgress.current = false;
      }
    };

    createCheckout();
  }, [location.search, session, loading, isAuthenticated]);

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
        <h1 className="text-2xl font-bold text-white mb-2">Redirecting to Checkout...</h1>
        <p className="text-gray-300">Please wait while we prepare your secure payment.</p>
      </div>
    </div>
  );
};

export default CheckoutRedirect;
