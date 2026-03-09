/**
 * Inline Checkout Component
 * Subscribe for $2.99/month unlimited — directly in the verification flow
 */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, CreditCard, CheckCircle, Loader2, AlertTriangle, Zap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { STRIPE_CONFIG } from '@/config/stripe';
import { redirectToStripe } from '@/utils/stripeRedirect';

interface InlineCheckoutProps {
  serialNumber?: string;
  itemType?: string;
  onSuccess?: () => void;
  variant?: 'compact' | 'full';
}

export const InlineCheckout: React.FC<InlineCheckoutProps> = ({
  serialNumber,
  itemType,
  onSuccess,
  variant = 'full'
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated, session } = useUnifiedAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckout = async () => {
    setIsLoading(true);

    if (!isAuthenticated || !session) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to subscribe.',
        variant: 'destructive',
      });
      const returnTo = `${location.pathname}${location.search}`;
      navigate(`/auth?redirect=${encodeURIComponent(returnTo)}`);
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: STRIPE_CONFIG.prices.unlimited,
          serialNumber: serialNumber || '',
          itemType: itemType || 'unknown',
          isSubscription: true,
          planName: 'Unlimited Plan',
          redirectUrl: 'https://safeorstolen.com',
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        redirectToStripe(data.url);
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: error.message || "Unable to start checkout. Please try again.",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };
  if (variant === 'compact') {
    return (
      <Button
        onClick={handleCheckout}
        disabled={isLoading}
        size="lg"
        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold py-6 text-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Shield className="w-5 h-5 mr-2" />
            Subscribe — $2.99/month Unlimited
          </>
        )}
      </Button>
    );
  }

  return (
    <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Unlimited Verifications</h3>
                <p className="text-sm text-muted-foreground">All item types, all databases</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">$2.99</div>
              <div className="text-xs text-muted-foreground">/month</div>
            </div>
          </div>

          {/* What you get */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>100+ databases</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Instant results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>PDF reports</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Risk warning */}
          <div className="flex items-start gap-2 p-3 bg-destructive/10 rounded-lg text-sm">
            <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Avoid $500+ loss.</span>
              <span className="text-muted-foreground"> Buying stolen goods = losing money + legal trouble.</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleCheckout}
            disabled={isLoading}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold py-6 text-lg shadow-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Subscribe — $2.99/mo Unlimited
              </>
            )}
          </Button>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>Instant access</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              <span>30-day guarantee</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InlineCheckout;
