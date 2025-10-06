import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/utils/pricing';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaywallModal = ({ isOpen, onClose }: PaywallModalProps) => {
  const plans = [
    {
      name: 'Personal',
      price: formatPrice(SUBSCRIPTION_TIERS.personal.price),
      period: '/month',
      features: SUBSCRIPTION_TIERS.personal.features || [],
      highlighted: false,
      stripePriceId: SUBSCRIPTION_TIERS.personal.stripePriceId!
    },
    {
      name: 'Business',
      price: formatPrice(SUBSCRIPTION_TIERS.business.price),
      period: '/month',
      features: SUBSCRIPTION_TIERS.business.features || [],
      highlighted: true,
      stripePriceId: SUBSCRIPTION_TIERS.business.stripePriceId!
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-center">
            <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-sos-orange/10">
              <Crown className="w-6 h-6 text-sos-orange" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              You've Used All Your Free Searches
            </DialogTitle>
            <DialogDescription className="text-lg mt-2">
              Upgrade to continue verifying items and protect yourself from stolen goods
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.highlighted ? 'border-sos-orange shadow-lg' : ''}`}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-sos-orange text-white px-3 py-1">
                    <Zap className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={`w-full ${plan.highlighted ? 'bg-sos-orange hover:bg-sos-orange/90' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  <Link to={`/subscriptions?plan=${plan.name.toLowerCase()}`}>
                    Choose {plan.name} Plan
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6 pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            All plans come with a 7-day free trial and can be cancelled anytime
          </p>
          <Button variant="ghost" onClick={onClose} className="mt-2">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};