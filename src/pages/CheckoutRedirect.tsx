import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';

// Log immediately when module loads
console.log('[CHECKOUT-REDIRECT-MODULE] Module loaded');

const CheckoutRedirect: React.FC = () => {
  console.log('[CHECKOUT-REDIRECT-COMPONENT] Component rendering');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { session, isAuthenticated } = useUnifiedAuth();
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState('Preparing checkout...');
  const [checkoutUrl, setCheckoutUrl] = useState<string>('');
  const redirectAttempted = useRef(false);

  console.log('[CHECKOUT-REDIRECT] State:', { 
    isAuthenticated, 
    hasSession: !!session,
    location: location.pathname + location.search 
  });

  // Meta refresh as backup - will redirect after 3 seconds if JS fails
  useEffect(() => {
    if (checkoutUrl && !redirectAttempted.current) {
      console.log('[CHECKOUT] Setting up meta refresh fallback for:', checkoutUrl);
      const meta = document.createElement('meta');
      meta.httpEquiv = 'refresh';
      meta.content = `3;url=${checkoutUrl}`;
      document.head.appendChild(meta);
      
      return () => {
        document.head.removeChild(meta);
      };
    }
  }, [checkoutUrl]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const priceId = params.get('priceId');
    const planName = params.get('planName');
    const isSubscription = params.get('isSubscription') === 'true';

    console.log('[CHECKOUT] Starting checkout flow:', { priceId, planName, isSubscription });

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
      if (redirectAttempted.current) {
        console.log('[CHECKOUT] Redirect already attempted, skipping');
        return;
      }

      try {
        setStatus('Contacting Stripe...');
        console.log('[CHECKOUT] Calling create-checkout edge function');
        
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
        console.log('[CHECKOUT] Edge function response:', { ok: response.ok, hasUrl: !!data.url });
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to create checkout');
        }

        if (data.url) {
          redirectAttempted.current = true;
          setCheckoutUrl(data.url);
          setStatus('Redirecting to Stripe...');
          
          console.log('[CHECKOUT] Got checkout URL, attempting redirect:', data.url);
          
          // Try multiple redirect methods to ensure it works
          setTimeout(() => {
            console.log('[CHECKOUT] Executing window.location.replace');
            window.location.replace(data.url);
          }, 100);
          
          setTimeout(() => {
            console.log('[CHECKOUT] Fallback: Executing window.location.href');
            window.location.href = data.url;
          }, 500);
          
          setTimeout(() => {
            console.log('[CHECKOUT] Final fallback: Executing window.open');
            window.open(data.url, '_self');
          }, 1000);
        } else {
          throw new Error('No checkout URL received');
        }
      } catch (err: any) {
        console.error('[CHECKOUT] Error:', err);
        setError(err.message || 'Failed to create checkout session');
      }
    };

    createCheckout();
  }, [location, isAuthenticated, session, navigate]);

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
          <h1 className="text-2xl font-bold text-white mb-2">{status}</h1>
          <p className="text-gray-300 mb-6">Please wait...</p>
          {checkoutUrl && (
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Not redirecting automatically?</p>
              <Button 
                onClick={() => {
                  console.log('[CHECKOUT] Manual redirect button clicked');
                  window.location.href = checkoutUrl;
                }}
                className="bg-sos-orange hover:bg-sos-orange/90"
              >
                Click Here to Continue
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
