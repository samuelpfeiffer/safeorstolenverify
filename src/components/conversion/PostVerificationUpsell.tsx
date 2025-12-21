/**
 * Post Verification Upsell - Shows after free verification
 * Now includes inline checkout for immediate conversion
 */

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, AlertTriangle, Zap, Download, Crown, CreditCard, Loader2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { STRIPE_CONFIG } from '@/config/stripe';

interface PostVerificationUpsellProps {
  verificationStatus: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  remainingSearches: number;
  isSubscribed: boolean;
  onUpgrade?: () => void;
  serialNumber?: string;
  itemType?: string;
}

export const PostVerificationUpsell: React.FC<PostVerificationUpsellProps> = ({
  verificationStatus,
  remainingSearches,
  isSubscribed,
  onUpgrade,
  serialNumber,
  itemType
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  // Don't show upsell to subscribers
  if (isSubscribed) return null;

  const handleDirectCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: STRIPE_CONFIG.prices.singleVerification,
          serialNumber: serialNumber || '',
          itemType: itemType || 'unknown',
          isSubscription: false,
          planName: 'Single Verification',
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  const handleUpgrade = () => {
    if (onUpgrade) {
      onUpgrade();
    } else {
      navigate('/pricing');
    }
  };

  // Different messaging based on result
  const getUpsellContent = () => {
    if (verificationStatus === 'safe') {
      return {
        icon: <CheckCircle className="w-6 h-6 text-accent" />,
        title: "Great news! This item appears safe",
        subtitle: "Want peace of mind on ALL your purchases?",
        urgency: null
      };
    } else if (verificationStatus === 'stolen' || verificationStatus === 'lost') {
      return {
        icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
        title: "⚠️ Warning: This item may be stolen!",
        subtitle: "You just avoided a potential $800+ loss. Get unlimited protection:",
        urgency: "You narrowly avoided buying stolen goods!"
      };
    } else {
      return {
        icon: <Shield className="w-6 h-6 text-primary" />,
        title: "Verification Complete",
        subtitle: "Get unlimited searches for complete peace of mind:",
        urgency: null
      };
    }
  };

  const content = getUpsellContent();

  // Show urgent inline checkout when out of free searches
  if (remainingSearches <= 0) {
    return (
      <Card className="mt-6 border-2 border-destructive/30 bg-gradient-to-r from-destructive/10 via-background to-primary/5">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-lg">You've used all free searches!</h3>
                <p className="text-muted-foreground">Don't risk buying stolen goods. Unlock verification now.</p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Single Verification</span>
                <span className="text-2xl font-bold text-primary">$2.99</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>50+ database check</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>Instant results</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>PDF report</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>30-day guarantee</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleDirectCheckout}
              disabled={isCheckoutLoading}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 py-6 text-lg"
            >
              {isCheckoutLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay $2.99 & Verify Now
                </>
              )}
            </Button>

            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                <span>Instant access</span>
              </div>
            </div>

            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleUpgrade}
              className="w-full text-xs"
            >
              Or view subscription plans for unlimited checks →
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Standard upsell for users with remaining searches
  return (
    <Card className="mt-6 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Left side - Message */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              {content.icon}
              <h3 className="font-bold text-lg">{content.title}</h3>
            </div>
            <p className="text-muted-foreground">{content.subtitle}</p>
            
            {/* Benefits */}
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {['Unlimited verifications', 'Priority support', 'Detailed reports', 'Money-back guarantee'].map((benefit, i) => (
                <li key={i} className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Remaining searches warning */}
            {remainingSearches === 1 && (
              <div className="bg-destructive/10 text-destructive rounded-lg p-2 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Only 1 free search left!
              </div>
            )}
          </div>

          {/* Right side - CTA */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <Button 
              onClick={handleUpgrade}
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-2"
            >
              <Crown className="w-4 h-4" />
              Upgrade for Unlimited
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Starting at just $4.99/month</p>
              <p className="text-xs text-accent font-medium">30-day money-back guarantee</p>
            </div>

            {/* App download alternative */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/app')}
              className="text-xs"
            >
              <Download className="w-3 h-3 mr-1" />
              Or download the free app
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostVerificationUpsell;
