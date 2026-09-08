/**
 * Post Verification Upsell - Shows after free verification
 * Two options: $0.99/check or $10/mo unlimited
 */

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, AlertTriangle, Zap, Download, Crown, CreditCard, Loader2, Lock } from 'lucide-react';
import { useNavigate } from '@/lib/router-compat';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { PAY_PER_CHECK_PRICE_ID, UNLIMITED_PRICE_ID } from '@/features/pricing/constants';

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
  const [isCheckoutLoading, setIsCheckoutLoading] = useState<string | null>(null);

  if (isSubscribed) return null;

  const handleCheckout = async (priceId: string, planName: string, isSubscription: boolean) => {
    setIsCheckoutLoading(priceId);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId,
          planName,
          serialNumber: serialNumber || '',
          itemType: itemType || 'unknown',
          isSubscription,
        }
      });

      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsCheckoutLoading(null);
    }
  };

  const handleUpgrade = () => {
    if (onUpgrade) onUpgrade();
    else navigate('/pricing');
  };

  const getUpsellContent = () => {
    if (verificationStatus === 'safe') {
      return {
        icon: <CheckCircle className="w-6 h-6 text-accent" />,
        title: "Great news! This item appears safe",
        subtitle: "Want peace of mind on ALL your purchases?",
      };
    } else if (verificationStatus === 'stolen' || verificationStatus === 'lost') {
      return {
        icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
        title: "⚠️ Warning: This item may be stolen!",
        subtitle: "You just avoided a potential $800+ loss. Get unlimited protection:",
      };
    } else {
      return {
        icon: <Shield className="w-6 h-6 text-primary" />,
        title: "Verification Complete",
        subtitle: "Get unlimited searches for complete peace of mind:",
      };
    }
  };

  const content = getUpsellContent();

  // Show urgent checkout when out of free searches
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
                <h3 className="font-bold text-lg">Free checks used!</h3>
                <p className="text-muted-foreground">Continue for $0.99/check or go unlimited for $10/month.</p>
              </div>
            </div>

            {/* Unlimited option */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Unlimited Plan</span>
                <span className="text-2xl font-bold text-primary">$10/mo</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>Unlimited verifications</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>Seller badges included</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>PDF certificates</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => handleCheckout(UNLIMITED_PRICE_ID, 'Unlimited', true)}
              disabled={isCheckoutLoading === UNLIMITED_PRICE_ID}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 py-6 text-lg"
            >
              {isCheckoutLoading === UNLIMITED_PRICE_ID ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Go Unlimited — $10/mo
                </>
              )}
            </Button>

            <Button
              onClick={() => handleCheckout(PAY_PER_CHECK_PRICE_ID, 'Pay Per Check', false)}
              disabled={isCheckoutLoading === PAY_PER_CHECK_PRICE_ID}
              variant="outline"
              size="lg"
              className="w-full"
            >
              {isCheckoutLoading === PAY_PER_CHECK_PRICE_ID ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Buy This Check — $0.99
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
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              {content.icon}
              <h3 className="font-bold text-lg">{content.title}</h3>
            </div>
            <p className="text-muted-foreground">{content.subtitle}</p>
            
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {['Unlimited verifications', 'Seller badges', 'PDF certificates', 'Cancel anytime'].map((benefit, i) => (
                <li key={i} className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>

            {remainingSearches === 1 && (
              <div className="bg-destructive/10 text-destructive rounded-lg p-2 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Only 1 free check left!
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <Button 
              onClick={handleUpgrade}
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-2"
            >
              <Crown className="w-4 h-4" />
              Go Unlimited — $10/mo
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Or $0.99 per single check</p>
              <p className="text-xs text-accent font-medium">30-day money-back guarantee</p>
            </div>

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
