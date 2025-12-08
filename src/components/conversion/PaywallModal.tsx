import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Zap, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  freeSearchesUsed: number;
  maxFreeSearches: number;
}

export const PaywallModal = ({ isOpen, onClose, freeSearchesUsed, maxFreeSearches }: PaywallModalProps) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleUpgrade = (plan: string) => {
    setSelectedPlan(plan);
    onClose();
    navigate(`/checkout-redirect?planName=${encodeURIComponent(plan)}&isSubscription=true`);
  };

  const handleSingleCheck = () => {
    onClose();
    navigate(`/checkout-redirect?planName=Single%20Verification&isSubscription=false`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-destructive/10 rounded-full">
              <Lock className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            Free Searches Used Up
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You've used all {maxFreeSearches} free verification checks. 
            Upgrade now to continue protecting yourself from stolen goods.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Best Value Option */}
          <div 
            className="p-4 border-2 border-primary rounded-lg bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors"
            onClick={() => handleUpgrade('Starter Plan')}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">Starter Plan</span>
                  <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">BEST VALUE</span>
                </div>
                <p className="text-sm text-muted-foreground">15 checks/month • Only $0.33 each</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$4.99</div>
                <div className="text-xs text-muted-foreground">/month</div>
              </div>
            </div>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                15 verifications per month
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                7-day free trial included
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Cancel anytime
              </li>
            </ul>
          </div>

          {/* Single Check Option */}
          <div 
            className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={handleSingleCheck}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold">Just Need One Check?</span>
                <p className="text-sm text-muted-foreground">Single verification - no subscription</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">$2.99</div>
                <div className="text-xs text-muted-foreground">one-time</div>
              </div>
            </div>
          </div>

          {/* View All Plans */}
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => {
              onClose();
              navigate('/pricing');
            }}
          >
            View All Plans
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          🔒 Secure payment via Stripe • Cancel anytime • 30-day money-back guarantee
        </p>
      </DialogContent>
    </Dialog>
  );
};
