import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';

const CheckoutRedirect: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, loading } = useUnifiedAuth();
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('Initializing...');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const priceId = searchParams.get('priceId');
    const planName = searchParams.get('planName');
    const isSubscription = searchParams.get('isSubscription') === 'true';
    const serialNumber = searchParams.get('serialNumber');
    const itemType = searchParams.get('itemType');

    console.log('[CHECKOUT] Starting with params:', { priceId, planName, isSubscription, serialNumber, itemType });

    // Validate required params
    if (!planName) {
      console.error('[CHECKOUT] Missing planName');
      setError('Missing plan information. Please try again from the pricing page.');
      return;
    }

    // Wait for auth to complete
    if (loading) {
      console.log('[CHECKOUT] Waiting for auth to complete...');
      setStatus('Checking authentication...');
      return;
    }

    // Check if user is authenticated
    if (!session?.access_token) {
      console.log('[CHECKOUT] No session, redirecting to auth...');
      const params = new URLSearchParams(location.search).toString();
      navigate(`/auth?redirect=${encodeURIComponent(`/checkout-redirect?${params}`)}`);
      return;
    }

    // Create checkout session
    const createCheckout = async () => {
      console.log('[CHECKOUT] Creating checkout session...');
      setStatus('Creating checkout session...');

      try {
        const body: any = {
          priceId: priceId || null,
          planName,
          isSubscription,
          redirectUrl: window.location.origin,
        };

        if (serialNumber) body.serialNumber = serialNumber;
        if (itemType) body.itemType = itemType;

        console.log('[CHECKOUT] Invoking create-checkout function...');

        const { data, error: invokeError } = await supabase.functions.invoke('create-checkout', {
          body,
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (invokeError) {
          console.error('[CHECKOUT] Error:', invokeError);
          setError(invokeError.message || 'Failed to create checkout session');
          return;
        }

        if (!data?.url) {
          console.error('[CHECKOUT] No URL in response:', data);
          setError('No checkout URL received from Stripe');
          return;
        }

        console.log('[CHECKOUT] Success! Redirecting to Stripe:', data.url);
        setStatus('Redirecting to Stripe...');
        
        // Redirect to Stripe
        window.location.href = data.url;
      } catch (err: any) {
        console.error('[CHECKOUT] Exception:', err);
        setError(err.message || 'An unexpected error occurred');
      }
    };

    createCheckout();
  }, [location.search, session, loading, navigate]);

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
          {status}
        </h1>
        <p className="text-gray-300">
          Please wait while we prepare your payment.
        </p>
      </div>
    </div>
  );
};

export default CheckoutRedirect;
