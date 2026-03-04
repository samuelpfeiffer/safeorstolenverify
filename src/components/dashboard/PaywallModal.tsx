import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Crown, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/features/pricing';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaywallModal = ({ isOpen, onClose }: PaywallModalProps) => {
  const unlimited = SUBSCRIPTION_TIERS.unlimited;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-center">
            <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              Subscribe to Verify Items
            </DialogTitle>
            <DialogDescription className="text-lg mt-2">
              Unlimited verifications for just {formatPrice(unlimited.price)}/month
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-6 p-6 border-2 border-primary rounded-xl bg-primary/5">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">Unlimited Plan</span>
          </div>
          
          <div className="mb-4">
            <span className="text-4xl font-black">{formatPrice(unlimited.price)}</span>
            <span className="text-muted-foreground">/month</span>
          </div>

          <ul className="space-y-2 mb-6">
            {unlimited.features.slice(0, 5).map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            asChild 
            className="w-full bg-primary hover:bg-primary/90"
          >
            <Link to="/pricing">
              Get Unlimited — {formatPrice(unlimited.price)}/month
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="text-center mt-4 pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            30-day money-back guarantee · Cancel anytime · Secured by Stripe
          </p>
          <Button variant="ghost" onClick={onClose} className="mt-2">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
