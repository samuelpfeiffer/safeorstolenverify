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
  const [loading, setLoading] = useState<boolean>(true);
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const redirectAttempted = useRef(false);

  useEffect(() => {
    if (redirectAttempted.current) return;
    redirectAttempted.current = true;

    const params = new URLSearchParams(location.search);
    const priceId = params.get('priceId');
    const planName = params.get('planName');
    const isSubscription = params.get('isSubscription') === 'true';

    if (!planName) {
      setError('Missing plan information');
      setLoading(false);
      return;
    }

    if (!isAuthenticated || !session) {
      navigate(`/auth?redirect=${encodeURIComponent(location.pathname + location.search)}`);
      return;
    }

    // Get checkout URL - NO REDIRECTS
    fetch('https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/create-checkout', {
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
    })
    .then(response => response.json())
    .then(data => {
      console.log('[CHECKOUT-REDIRECT] Received response:', data);
      if (data.url) {
        setCheckoutUrl(data.url);
        setLoading(false);
        setRedirecting(true);
        console.log('[CHECKOUT-REDIRECT] Checkout URL ready:', data.url);
      } else {
        console.error('[CHECKOUT-REDIRECT] No URL in response:', data);
        setError('No checkout URL received');
        setLoading(false);
      }
    })
    .catch(err => {
      setError(err.message || 'Failed to create checkout');
      setLoading(false);
    });
  }, []);

  if (error) {
    return (
      <>
        <SEOHead 
          title="Checkout Error - Safe Or Stolen"
          robotsDirectives="noindex, nofollow"
        />
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border-2 border-orange-200">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-800 mb-6">{error}</p>
            <Button onClick={() => navigate('/pricing')} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
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
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
          <div className="text-center max-w-md w-full">
            {loading ? (
              <>
                <Loader2 className="w-16 h-16 text-orange-500 animate-spin mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Setting up checkout...</h1>
                <p className="text-gray-600 mb-6">Connecting to Stripe...</p>
              </>
            ) : redirecting ? (
              <>
                <div className="mb-8">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Ready to Checkout!</h1>
                  <p className="text-gray-700 mb-6">Click the button below to complete your purchase</p>
                </div>
                {checkoutUrl && (
                  <div className="space-y-4">
                    <Button 
                      onClick={() => {
                        window.open(checkoutUrl, '_blank');
                      }}
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
                    >
                      Continue to Stripe Checkout →
                    </Button>
                    <p className="text-gray-700 text-sm font-medium">
                      ✓ Secure payment powered by Stripe<br/>
                      ✓ Your payment will open in a new window<br/>
                      ✓ Return here after completing payment
                    </p>
                  </div>
                )}
              </>
            ) : null}
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/pricing')}
              className="mt-6 border-orange-300 text-gray-700 hover:bg-orange-50"
            >
              ← Return to Pricing
            </Button>
          </div>
        </div>
      </>
  );
};

export default CheckoutRedirect;
