import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { isInIframe } from '@/utils/navigationUtils';

const CheckoutRedirect: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { session } = useUnifiedAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // CRITICAL: If we're still in iframe, force escape AGAIN
    if (isInIframe()) {
      console.log('[CHECKOUT-REDIRECT] Still in iframe, escaping to top window');
      const fullUrl = window.location.href;
      try {
        if (window.top) {
          (window.top as Window).location.href = fullUrl;
        }
      } catch {
        window.open(fullUrl, '_top');
      }
      return; // Stop execution in iframe context
    }

    const createCheckout = async () => {
      const priceId = searchParams.get('priceId');
      const planName = searchParams.get('planName');
      const isSubscription = searchParams.get('isSubscription') === 'true';
      const serialNumber = searchParams.get('serialNumber');
      const itemType = searchParams.get('itemType');

      if (!priceId || !session) {
        setError('Missing required parameters or not authenticated');
        return;
      }

      try {
        console.log('Creating checkout outside iframe:', { priceId, planName, isSubscription });

        const body: any = {
          priceId,
          planName: planName || 'Subscription',
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
          window.location.href = data.url;
        } else {
          setError('No checkout URL received');
        }
      } catch (err: any) {
        console.error('Error creating checkout:', err);
        setError(err.message || 'Failed to create checkout session');
      }
    };

    createCheckout();
  }, [searchParams, session]);

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
