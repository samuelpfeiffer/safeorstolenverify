import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { isInIframe } from '@/utils/navigationUtils';

const CheckoutRedirect: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { session, isAuthenticated, loading } = useUnifiedAuth();
  const [error, setError] = useState<string | null>(null);
  const [sessionWaitCount, setSessionWaitCount] = useState(0);

  useEffect(() => {
    console.log('[CHECKOUT-REDIRECT] Session status:', { 
      hasSession: !!session, 
      isAuthenticated,
      loading,
      sessionWaitCount,
      sessionAccessToken: session?.access_token ? 'present' : 'missing' 
    });

    const createCheckout = async () => {
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

      // Wait for session to be ready
      if (loading || !session || !session.access_token) {
        console.log('[CHECKOUT-REDIRECT] Waiting for session...', { loading, hasSession: !!session, waitCount: sessionWaitCount });
        
        // Timeout after 20 attempts (~10 seconds)
        if (sessionWaitCount > 20) {
          console.error('[CHECKOUT-REDIRECT] Session timeout');
          setError('Session timeout. Please sign in again to continue with checkout.');
          setTimeout(() => {
            window.location.href = '/auth?redirect=pricing';
          }, 2000);
          return;
        }
        
        setSessionWaitCount(prev => prev + 1);
        return;
      }

      console.log('[CHECKOUT-REDIRECT] Session ready, creating checkout...');

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
          console.log('Redirecting to Stripe checkout:', data.url);
          
          // Try multiple redirect methods for maximum compatibility
          try {
            // Method 1: Try to redirect at top level (escapes iframes)
            if (window.top && window.top !== window.self) {
              console.log('[CHECKOUT-REDIRECT] Inside iframe, redirecting at top level');
              window.top.location.href = data.url;
            } else {
              // Method 2: Direct redirect with replace (more reliable)
              console.log('[CHECKOUT-REDIRECT] Direct redirect');
              window.location.replace(data.url);
            }
          } catch (e) {
            console.error('[CHECKOUT-REDIRECT] Redirect failed, trying fallback:', e);
            // Fallback: Show clickable link
            setError(`Redirect failed. Click here to continue: ${data.url}`);
          }
        } else {
          setError('No checkout URL received');
        }
      } catch (err: any) {
        console.error('Error creating checkout:', err);
        setError(err.message || 'Failed to create checkout session');
      }
    };

    createCheckout();
  }, [searchParams, session, loading, sessionWaitCount]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Checkout Error</h1>
          <p className="text-gray-700 mb-6">{error}</p>
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
