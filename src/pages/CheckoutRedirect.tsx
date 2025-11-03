import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CheckoutRedirect: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, isAuthenticated } = useUnifiedAuth();
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState('Preparing checkout...');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const priceId = params.get('priceId');
    const planName = params.get('planName');
    const isSubscription = params.get('isSubscription') === 'true';

    if (!planName) {
      setError('Missing plan information');
      return;
    }

    if (!isAuthenticated || !session) {
      navigate(`/auth?redirect=${encodeURIComponent(location.pathname + location.search)}`);
      return;
    }

    const createCheckout = async () => {
      try {
        setStatus('Contacting Stripe...');
        
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
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to create checkout');
        }

        if (data.url) {
          // IMMEDIATE redirect - no state updates
          window.location.replace(data.url);
        } else {
          throw new Error('No checkout URL received');
        }
      } catch (err: any) {
        console.error('Checkout error:', err);
        setError(err.message || 'Failed to create checkout session');
      }
    };

    createCheckout();
  }, [location, isAuthenticated, session, navigate]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700 mb-6">{error}</p>
          <Button onClick={() => navigate('/pricing')} className="w-full">
            Return to Pricing
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className="w-16 h-16 text-sos-orange animate-spin mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">{status}</h1>
        <p className="text-gray-300 mb-6">Please wait...</p>
        <Button 
          variant="outline" 
          onClick={() => navigate('/pricing')}
          className="text-white border-white hover:bg-white hover:text-sos-orange"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CheckoutRedirect;
