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
  const redirectAttempted = useRef(false);

  useEffect(() => {
    // Only run once - EMPTY DEPENDENCIES
    if (redirectAttempted.current) return;
    redirectAttempted.current = true;

    const params = new URLSearchParams(location.search);
    const priceId = params.get('priceId');
    const planName = params.get('planName');
    const isSubscription = params.get('isSubscription') === 'true';

    console.log('[CHECKOUT] Starting checkout flow');

    if (!planName) {
      setError('Missing plan information');
      return;
    }

    if (!isAuthenticated || !session) {
      console.log('[CHECKOUT] Not authenticated, redirecting to auth');
      navigate(`/auth?redirect=${encodeURIComponent(location.pathname + location.search)}`);
      return;
    }

    // Create checkout and redirect
    (async () => {
      try {
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
        
        if (data.url) {
          console.log('[CHECKOUT] Got URL:', data.url);
          
          // Set URL for button
          setCheckoutUrl(data.url);
          
          // Try multiple redirect methods
          console.log('[CHECKOUT] Attempting redirect...');
          
          // Method 1: Direct assignment
          window.location.href = data.url;
          
          // Method 2: Replace (backup)
          setTimeout(() => {
            window.location.replace(data.url);
          }, 100);
          
          // Method 3: Top window (for iframe)
          setTimeout(() => {
            if (window.top && window.top !== window) {
              window.top.location.href = data.url;
            }
          }, 200);
        } else {
          setError('No checkout URL received');
        }
      } catch (err: any) {
        console.error('[CHECKOUT] Error:', err);
        setError(err.message || 'Failed to create checkout');
      }
    })();
  }, []); // EMPTY ARRAY - RUN ONCE ONLY

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
      {checkoutUrl && (
        <meta httpEquiv="refresh" content={`0;url=${checkoutUrl}`} />
      )}
      <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Loader2 className="w-16 h-16 text-sos-orange animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Redirecting to Stripe...</h1>
          <p className="text-gray-300 mb-6">Please wait while we set up your checkout...</p>
          
          {checkoutUrl && (
            <div className="mt-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-white mb-4 font-medium">If you're not redirected automatically:</p>
              <Button 
                onClick={() => window.open(checkoutUrl, '_blank')}
                className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white font-semibold py-3"
              >
                Click Here to Open Stripe Checkout
              </Button>
            </div>
          )}
          
          <Button 
            variant="outline" 
            onClick={() => navigate('/pricing')}
            className="mt-4 text-white border-white/50 hover:bg-white hover:text-sos-dark"
          >
            Return to Pricing
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutRedirect;
