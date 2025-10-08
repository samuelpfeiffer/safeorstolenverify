import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Shield, Star, Clock, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/utils/pricing';
import { useTrialStatus } from '@/hooks/useTrialStatus';

interface TrialUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: 'expiration' | 'checks_used' | 'manual';
}

export const TrialUpgradeModal = ({ isOpen, onClose, trigger = 'manual' }: TrialUpgradeModalProps) => {
  const navigate = useNavigate();
  const { daysRemaining, checksUsed } = useTrialStatus();

  const getHeadline = () => {
    switch (trigger) {
      case 'expiration':
        return '⏰ Your Trial is Expiring Soon!';
      case 'checks_used':
        return '🎯 You\'ve Used Your Free Checks';
      default:
        return '🚀 Unlock Unlimited Verifications';
    }
  };

  const getSubheadline = () => {
    switch (trigger) {
      case 'expiration':
        return `Only ${daysRemaining} days left! Don't lose access to stolen goods protection.`;
      case 'checks_used':
        return 'Upgrade now to continue protecting yourself from scams and stolen items.';
      default:
        return 'Join thousands of smart buyers who refuse to buy stolen goods.';
    }
  };

  const socialProof = [
    { icon: Users, text: '25,000+ Protected Buyers', color: 'text-blue-500' },
    { icon: Shield, text: '$2.3M in Scams Prevented', color: 'text-green-500' },
    { icon: TrendingUp, text: '127M+ Items Tracked', color: 'text-orange-500' },
  ];

  const urgencyReasons = [
    'Every day without protection puts you at risk',
    'Scammers target unverified buyers on marketplaces',
    'One stolen item could cost you thousands in legal fees',
    'Law enforcement reports show marketplace fraud is rising'
  ];

  const handleUpgrade = (tier: string) => {
    navigate(`/pricing?tier=${tier}&source=trial_modal`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-center space-y-3">
            <Badge className="bg-sos-orange text-white px-4 py-1 text-sm">
              <Clock className="h-3 w-3 mr-1" />
              {trigger === 'expiration' ? 'Expires Soon' : 'Limited Time Offer'}
            </Badge>
            <DialogTitle className="text-3xl font-bold">{getHeadline()}</DialogTitle>
            <p className="text-lg text-muted-foreground">{getSubheadline()}</p>
          </div>
        </DialogHeader>

        {/* Social Proof Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 py-4 border-y">
          {socialProof.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className={`h-5 w-5 ${item.color}`} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Individual Plan */}
          <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">For Individuals</p>
                <h3 className="text-2xl font-bold mt-1">{SUBSCRIPTION_TIERS.individual.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.individual.price)}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Save 20% with annual billing
                </p>
              </div>

              <ul className="space-y-2">
                {SUBSCRIPTION_TIERS.individual.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handleUpgrade('individual')}
                className="w-full"
                size="lg"
              >
                Start Individual Plan
              </Button>
            </CardContent>
          </Card>

          {/* Business Plan - Most Popular */}
          <Card className="border-2 border-sos-orange shadow-lg relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-sos-orange text-white px-4 py-1">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">For Businesses</p>
                <h3 className="text-2xl font-bold mt-1">{SUBSCRIPTION_TIERS.business.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.business.price)}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Save 20% with annual billing
                </p>
              </div>

              <ul className="space-y-2">
                {SUBSCRIPTION_TIERS.business.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handleUpgrade('business')}
                className="w-full bg-sos-orange hover:bg-sos-orange/90"
                size="lg"
              >
                Start Business Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Section */}
        <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
          <h4 className="font-bold text-sm mb-3 text-center">⚠️ Why You Can't Wait:</h4>
          <ul className="space-y-1.5">
            {urgencyReasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-destructive font-bold">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground pt-4 border-t">
          <span className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            30-day money-back guarantee
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            Cancel anytime
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            Instant activation
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            Secure payment by Stripe
          </span>
        </div>

        <div className="text-center">
          <Button variant="ghost" onClick={onClose} className="text-sm">
            I'll decide later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
