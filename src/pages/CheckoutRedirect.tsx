import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';

const CheckoutRedirect: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, isAuthenticated } = useUnifiedAuth();
  const [error, setError] = useState<string>('');
  const [checkoutUrl, setCheckoutUrl] = useState<string>('');
  const hasRun = useRef(false);

  useEffect(() => {
    // Prevent multiple executions
    if (hasRun.current) return;
    hasRun.current = true;

    const params = new URLSearchParams(location.search);
    const priceId = params.get('priceId');
    const planName = params.get('planName');
    const isSubscription = params.get('isSubscription') === 'true';

    console.log('[CHECKOUT] Flow started:', { priceId, planName, isSubscription, isAuthenticated });

    if (!planName) {
      setError('Missing plan information');
      return;
    }

    if (!isAuthenticated || !session) {
      console.log('[CHECKOUT] Not authenticated, redirecting to auth');
      navigate(`/auth?redirect=${encodeURIComponent(location.pathname + location.search)}`);
      return;
    }

    const createCheckout = async () => {
      try {
        console.log('[CHECKOUT] Calling edge function');
        
        const response = await fetch('https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/create-checkout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            priceId,
            planName,
            isSubscription,
            redirectUrl: window.location.origin,
          }),
        });

        const data = await response.json();
        console.log('[CHECKOUT] Response:', { ok: response.ok, hasUrl: !!data.url });
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to create checkout');
        }

        if (data.url) {
          console.log('[CHECKOUT] Redirecting to Stripe:', data.url);
          
          // CRITICAL: Redirect IMMEDIATELY without any state updates
          // State updates can cause re-renders that interrupt the redirect
          window.location.replace(data.url);
          
          // This return prevents any further code execution
          return;
        } else {
          throw new Error('No checkout URL received');
        }
      } catch (err: any) {
        console.error('[CHECKOUT] Error:', err);
        setError(err.message || 'Failed to create checkout session');
      }
    };

    createCheckout();
  }, [isAuthenticated, session, location.search, navigate]);

  if (error) {
    return (
      <>
        <SEOHead 
          title="Checkout Error - Safe Or Stolen"
          robotsDirectives="noindex, nofollow"
        />
        <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700 mb-6">{error}</p>
            <Button onClick={() => navigate('/pricing')} className="w-full">
              Return to Pricing
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="Redirecting to Checkout - Safe Or Stolen"
        robotsDirectives="noindex, nofollow"
      />
      <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-sos-orange animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Redirecting to Stripe...</h1>
          <p className="text-gray-300 mb-6">Please wait while we redirect you...</p>
          {checkoutUrl && (
            <div className="mt-4 p-4 bg-white/10 rounded">
              <p className="text-sm text-gray-300 mb-3">If you're not redirected automatically:</p>
              <Button 
                onClick={() => window.location.href = checkoutUrl}
                className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold"
              >
                Click Here to Continue to Stripe
              </Button>
            </div>
          )}
          <Button 
            variant="outline" 
            onClick={() => navigate('/pricing')}
            className="mt-4 text-white border-white hover:bg-white hover:text-sos-orange"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutRedirect;
