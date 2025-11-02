import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { navigateOutOfIframe, isInIframe } from '@/utils/navigationUtils';

const CheckoutRedirect: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { session, isAuthenticated, loading } = useUnifiedAuth();
  const [error, setError] = useState<string | React.ReactNode | null>(null);
  const [sessionWaitCount, setSessionWaitCount] = useState(0);
  const checkoutInProgress = useRef(false);

  useEffect(() => {
    console.log('[CHECKOUT-REDIRECT] Session status:', { 
      hasSession: !!session, 
      isAuthenticated,
      loading,
      sessionWaitCount,
      sessionAccessToken: session?.access_token ? 'present' : 'missing' 
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

      // Check if still loading auth
      if (loading) {
        console.log('[CHECKOUT-REDIRECT] Auth still loading...', { waitCount: sessionWaitCount });
        
        // Only wait 5 seconds for initial auth check
        if (sessionWaitCount > 10) {
          console.error('[CHECKOUT-REDIRECT] Auth loading timeout - redirecting to login');
          const checkoutParams = new URLSearchParams(window.location.search).toString();
          window.location.href = `/auth?redirect=${encodeURIComponent(`/checkout-redirect?${checkoutParams}`)}`;
          return;
        }
        
        setSessionWaitCount(prev => prev + 1);
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
          
          // Check if we're in Lovable's preview (iframe with cross-origin restrictions)
          const isLovablePreview = window.location.hostname.includes('lovableproject.com') && isInIframe();
          
          if (isLovablePreview) {
            // In Lovable preview: Open in new tab immediately (bypasses iframe restrictions)
            navigateOutOfIframe(data.url, true);
            setError(
              <div className="space-y-4">
                <p>Opening Stripe checkout in a new tab...</p>
                <p className="text-sm text-gray-600">If the tab didn't open, click below:</p>
                <a 
                  href={data.url} 
                  className="inline-block bg-sos-orange text-white px-6 py-3 rounded-lg hover:bg-sos-orange/90 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateOutOfIframe(data.url, true);
                  }}
                >
                  Open Stripe Checkout →
                </a>
              </div>
            );
          } else {
            // Production: Use normal redirect
            navigateOutOfIframe(data.url, false);
            
            // Fallback: Show clickable link if redirect doesn't happen in 3 seconds
            setTimeout(() => {
              setError(
                <div className="space-y-4">
                  <p>Redirect taking longer than expected.</p>
                  <a 
                    href={data.url} 
                    className="inline-block bg-sos-orange text-white px-6 py-3 rounded-lg hover:bg-sos-orange/90 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateOutOfIframe(data.url, true);
                    }}
                  >
                    Click here to continue to checkout →
                  </a>
                </div>
              );
            }, 3000);
          }
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
  }, [searchParams, session, loading, sessionWaitCount]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Checkout Error</h1>
          <div className="text-gray-700 mb-6">{error}</div>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-sos-orange text-white px-6 py-2 rounded-lg hover:bg-sos-orange/90"
          >
            Return to Home
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
