import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CreditCard, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface QuickCheckoutButtonProps {
  planName: string;
  priceId?: string;
  isSubscription?: boolean;
  children?: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const QuickCheckoutButton = ({
  planName,
  priceId,
  isSubscription = true,
  children,
  variant = 'default',
  size = 'default',
  className = ''
}: QuickCheckoutButtonProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, session } = useUnifiedAuth();

  const handleClick = async () => {
    // If not authenticated, redirect to auth first
    if (!isAuthenticated || !session) {
      const params = new URLSearchParams({
        planName,
        isSubscription: String(isSubscription),
      });
      if (priceId) params.append('priceId', priceId);
      navigate(`/auth?tab=signup&redirect=${encodeURIComponent(`/checkout-redirect?${params.toString()}`)}`);
      return;
    }

    // Direct checkout
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId,
          planName,
          isSubscription,
          redirectUrl: 'https://safeorstolen.com'
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;
      if (!data?.url) throw new Error('No checkout URL');

      window.location.href = data.url;
    } catch (err: any) {
      console.error('Checkout error:', err);
      toast.error(err.message || 'Checkout failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      variant={variant}
      size={size}
      className={className}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children || (
          <>
            <CreditCard className="mr-2 h-4 w-4" />
            Subscribe Now
          </>
        )
      )}
    </Button>
  );
};
