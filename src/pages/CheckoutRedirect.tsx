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
        console.log('[CHECKOUT-REDIRECT] Redirecting to:', data.url);
        
        // Attempt automatic redirect
        setTimeout(() => {
          window.location.href = data.url;
        }, 500);
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
      <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          {loading ? (
            <>
              <Loader2 className="w-16 h-16 text-[#FF8C00] animate-spin mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Setting up checkout...</h1>
              <p className="text-gray-300 mb-6">Connecting to Stripe...</p>
            </>
          ) : redirecting ? (
            <>
              <Loader2 className="w-16 h-16 text-[#FF8C00] animate-spin mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Redirecting to Stripe...</h1>
              <p className="text-gray-300 mb-6">You'll be redirected automatically</p>
              {checkoutUrl && (
                <div className="mt-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <p className="text-white mb-4 text-sm">If you're not redirected automatically:</p>
                  <Button 
                    onClick={() => window.location.href = checkoutUrl}
                    className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white font-bold py-3 text-base"
                  >
                    Continue to Stripe Checkout →
                  </Button>
                </div>
              )}
            </>
          ) : null}
          
          <Button 
            variant="outline" 
            onClick={() => navigate('/pricing')}
            className="mt-6 text-white border-white/50 hover:bg-white hover:text-[#1a1a2e]"
          >
            ← Return to Pricing
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutRedirect;
