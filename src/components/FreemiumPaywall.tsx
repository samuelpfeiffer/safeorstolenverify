import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, Zap, Loader2, Lock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FreemiumPaywallProps {
  searchCount: number;
  maxFreeSearches: number;
  onUpgrade?: () => void;
}

export const FreemiumPaywall: React.FC<FreemiumPaywallProps> = ({
  searchCount,
  maxFreeSearches,
  onUpgrade
}) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<string | null>(null);
  
  const remainingSearches = maxFreeSearches - searchCount;
  const isLastSearch = remainingSearches === 1;
  const isOverLimit = remainingSearches <= 0;

  // Direct checkout without redirect page
  const handleDirectCheckout = async (planName: string, isSubscription: boolean) => {
    setIsLoading(planName);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        window.location.href = '/auth?redirect=/pricing';
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          planName,
          isSubscription,
          redirectUrl: 'https://safeorstolen.com'
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      if (error) throw error;
      if (!data?.url) throw new Error('No checkout URL returned');

      window.location.href = data.url;
      
    } catch (err: any) {
      console.error('Checkout error:', err);
      toast({
        title: 'Checkout Error',
        description: err.message || 'Failed to start checkout. Please try again.',
        variant: 'destructive'
      });
      setIsLoading(null);
    }
  };

  if (!isLastSearch && !isOverLimit) return null;

  return (
    <Card className="border-2 border-destructive/50 bg-gradient-to-br from-destructive/5 via-background to-primary/5 mb-6">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-2">
          {isOverLimit ? (
            <div className="p-3 bg-destructive/10 rounded-full animate-pulse">
              <Lock className="h-10 w-10 text-destructive" />
            </div>
          ) : (
            <div className="p-3 bg-orange-500/10 rounded-full">
              <AlertTriangle className="h-10 w-10 text-orange-500" />
            </div>
          )}
        </div>
        <CardTitle className="text-2xl">
          {isOverLimit ? (
            <span className="text-destructive">🔒 Don't Risk Buying Stolen Goods</span>
          ) : (
            <span className="text-orange-600">⚠️ Last Free Check!</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-5">
        {/* Warning Message */}
        <div className="space-y-2">
          <p className="text-base font-medium">
            {isOverLimit 
              ? "You've used all 2 free verifications. Continue protecting yourself from scams and legal trouble."
              : "You're about to use your final free verification. What happens when you need to check another item?"
            }
          </p>
          {/* Usage indicator */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: maxFreeSearches }, (_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full ${
                  i < searchCount 
                    ? 'bg-destructive' 
                    : i === searchCount && !isOverLimit
                    ? 'bg-orange-500 animate-pulse'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 flex items-center gap-2 justify-center">
          <TrendingUp className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">5,000+ items verified this week</span>
        </div>

        {/* Quick Checkout Options */}
        <div className="grid gap-3">
          {/* Best Value - Starter Plan */}
          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-auto py-3"
            onClick={() => handleDirectCheckout('Starter Plan', true)}
            disabled={!!isLoading}
          >
            {isLoading === 'Starter Plan' ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Shield className="mr-2 h-5 w-5" />
            )}
            <div className="flex flex-col items-start">
              <span className="font-bold">Start 7-Day FREE Trial</span>
              <span className="text-xs opacity-90">$4.99/mo after • 15 checks • Cancel anytime</span>
            </div>
          </Button>

          {/* Single Check */}
          <Button 
            variant="outline" 
            size="lg"
            className="w-full h-auto py-3"
            onClick={() => handleDirectCheckout('Single Verification', false)}
            disabled={!!isLoading}
          >
            {isLoading === 'Single Verification' ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Zap className="mr-2 h-5 w-5" />
            )}
            <div className="flex flex-col items-start">
              <span className="font-semibold">Just Need One Check?</span>
              <span className="text-xs text-muted-foreground">$2.99 one-time • No subscription</span>
            </div>
          </Button>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span>Theft Database Access</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span>Instant Results</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span>30-Day Guarantee</span>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
          <p className="text-sm text-destructive font-medium">
            ⚠️ <strong>Risk Warning:</strong> Buying stolen goods = losing the item AND your money. Police don't reimburse victims.
          </p>
        </div>

        {/* View All Plans Link */}
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
          <Link to="/pricing">
            Compare All Plans →
          </Link>
        </Button>

        {/* Trust Badges */}
        <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t">
          <p>🔒 Secure Stripe Payment • ⭐ 4.1★ Trustpilot • 💰 30-day money-back guarantee</p>
        </div>
      </CardContent>
    </Card>
  );
};
