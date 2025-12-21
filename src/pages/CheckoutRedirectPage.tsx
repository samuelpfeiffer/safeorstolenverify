import { useEffect, useRef, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isInIframe, navigateOutOfIframe } from '@/utils/navigationUtils';

const CheckoutRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'redirecting' | 'error'>('loading');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [checkoutUrl, setCheckoutUrl] = useState<string>('');
  const [showManualRedirect, setShowManualRedirect] = useState(false);
  const manualTimerRef = useRef<number | null>(null);

  const planName = searchParams.get('planName');
  const isSubscription = searchParams.get('isSubscription') === 'true';
  const priceId = searchParams.get('priceId');

  useEffect(() => {
    const cleanup = () => {
      if (manualTimerRef.current) {
        window.clearTimeout(manualTimerRef.current);
        manualTimerRef.current = null;
      }
    };

    const createCheckout = async () => {
      // Check auth status directly without waiting for global provider
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Not logged in - redirect to auth
      if (!session) {
        const returnUrl = `/checkout-redirect?${searchParams.toString()}`;
        navigate(`/auth?redirect=${encodeURIComponent(returnUrl)}`);
        return;
      }

      // Need at least priceId OR planName
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

        console.log('[Checkout] Redirecting to Stripe:', data.url);
        setStatus('redirecting');
        setCheckoutUrl(data.url);

        // If the browser blocks navigation or something interrupts, show a manual CTA.
        manualTimerRef.current = window.setTimeout(() => {
          setShowManualRedirect(true);
        }, 2500);

        // IMPORTANT: Lovable preview runs inside an iframe and browsers will block
        // automatic popups/navigation to Stripe without a user gesture.
        // So in iframe: show the manual button immediately.
        if (isInIframe()) {
          setShowManualRedirect(true);
          return;
        }

        // Normal site: redirect immediately.
        window.location.assign(data.url);
      } catch (err: any) {
        console.error('Checkout error:', err);
        setErrorMsg(err.message || 'Failed to create checkout');
        setStatus('error');
        toast.error('Checkout failed. Please try again.');
        cleanup();
      }
    };

    cleanup();
    createCheckout();

    return cleanup;
  }, [priceId, planName, isSubscription, navigate, searchParams]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-border rounded-xl p-8 shadow-lg text-center">
        {/* Loading/Redirecting State */}
        {(status === 'loading' || status === 'redirecting') && (
          <div className="space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
            <h2 className="text-xl font-semibold text-foreground">
              {status === 'loading' ? 'Preparing checkout...' : 'Redirecting to Stripe...'}
            </h2>
            <p className="text-muted-foreground text-sm">
              You'll be redirected to secure payment in a moment
            </p>

            {showManualRedirect && checkoutUrl && (
              <div className="space-y-2 pt-2">
                <Button onClick={() => navigateOutOfIframe(checkoutUrl, true)} className="w-full">
                  Open secure Stripe checkout
                </Button>
                <Button onClick={() => navigate('/pricing')} variant="outline" className="w-full">
                  Return to Pricing
                </Button>
                <p className="text-xs text-muted-foreground">
                  If you’re in the Lovable preview, browsers block auto-redirects—clicking the button opens Stripe in a new tab.
                </p>
              </div>
            )}
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
  );
};

export default CheckoutRedirectPage;

