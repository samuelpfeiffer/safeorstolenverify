import { useEffect, useRef, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isInIframe, redirectToStripe } from '@/utils/stripeRedirect';
import { Helmet } from 'react-helmet-async';

const CheckoutRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [checkoutUrl, setCheckoutUrl] = useState<string>('');

  const planName = searchParams.get('planName');
  const isSubscription = searchParams.get('isSubscription') === 'true';
  const priceId = searchParams.get('priceId');

  useEffect(() => {
    const createCheckout = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        const returnUrl = `/checkout-redirect?${searchParams.toString()}`;
        navigate(`/auth?redirect=${encodeURIComponent(returnUrl)}`);
        return;
      }

      if (!priceId && !planName) {
        setErrorMsg('Missing price information');
        setStatus('error');
        return;
      }

      try {
        console.log('[Checkout] Creating checkout session...');

        const { data, error } = await supabase.functions.invoke('create-checkout', {
          body: {
            priceId,
            planName: planName || 'Subscription',
            isSubscription,
            redirectUrl: 'https://safeorstolen.com',
          },
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (error) throw error;
        if (!data?.url) throw new Error('No checkout URL returned');

        console.log('[Checkout] Got URL:', data.url);
        setCheckoutUrl(data.url);

        // In iframe: show button immediately for user to click
        if (isInIframe()) {
          setStatus('ready');
          return;
        }

        // Normal site: redirect immediately
        window.location.assign(data.url);
      } catch (err: any) {
        console.error('Checkout error:', err);
        setErrorMsg(err.message || 'Failed to create checkout');
        setStatus('error');
        toast.error('Checkout failed. Please try again.');
      }
    };

    createCheckout();
  }, [priceId, planName, isSubscription, navigate, searchParams]);

  const handleOpenCheckout = () => {
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Checkout | SafeOrStolen</title>
      </Helmet>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border border-border rounded-xl p-8 shadow-lg text-center">
        {/* Loading State */}
        {status === 'loading' && (
          <div className="space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
            <h2 className="text-xl font-semibold text-foreground">
              Preparing checkout...
            </h2>
            <p className="text-muted-foreground text-sm">
              Setting up secure payment
            </p>
          </div>
        )}

        {/* Ready State - Show button for iframe users */}
        {status === 'ready' && checkoutUrl && (
          <div className="space-y-4">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <ExternalLink className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              Ready to checkout
            </h2>
            <p className="text-muted-foreground text-sm">
              Click below to open Stripe payment in a new tab
            </p>
            <Button onClick={handleOpenCheckout} size="lg" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open Stripe Checkout
            </Button>
            <Button onClick={() => navigate('/pricing')} variant="outline" className="w-full">
              Return to Pricing
            </Button>
          </div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <div className="space-y-4">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
            <h2 className="text-xl font-semibold text-foreground">Something went wrong</h2>
            <p className="text-muted-foreground">{errorMsg}</p>
            <div className="space-y-2">
              <Button onClick={() => window.location.reload()} className="w-full">
                Try Again
              </Button>
              <Button onClick={() => navigate('/pricing')} variant="outline" className="w-full">
                Return to Pricing
              </Button>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default CheckoutRedirectPage;

