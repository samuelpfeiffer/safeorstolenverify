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
  const redirectAttempted = useRef(false);

  useEffect(() => {
    // Only run once
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
      if (data.url) {
        console.log('[CHECKOUT] Got URL, redirecting now');
        // Force redirect - this MUST work
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    })
    .catch(err => {
      console.error('[CHECKOUT] Error:', err);
      setError(err.message || 'Failed to create checkout');
    });
  }, [isAuthenticated, session, location, navigate]);

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
          <p className="text-gray-300">Please wait while we set up your checkout...</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutRedirect;
