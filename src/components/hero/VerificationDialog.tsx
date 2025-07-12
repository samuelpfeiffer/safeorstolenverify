
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/utils/pricing';
import { Crown, Star, UserPlus } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

type VerificationDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  hasReachedLimit: boolean;
  onFreeVerification: () => void;
};

export const VerificationDialog = ({ 
  isOpen, 
  onOpenChange, 
  hasReachedLimit, 
  onFreeVerification 
}: VerificationDialogProps) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUnifiedAuth();

  const handleFreeVerification = () => {
    console.log("Starting free verification...");
    onFreeVerification();
    onOpenChange(false);
  };

  const handleSignIn = () => {
    console.log("Redirecting to auth...");
    onOpenChange(false);
    navigate("/auth");
  };

  const handlePremiumSignIn = () => {
    console.log("Redirecting to auth for premium...");
    onOpenChange(false);
    navigate("/auth");
  };

  // Show sign-in prompt for non-authenticated users
  if (!isAuthenticated) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-sos-orange" />
              Sign In Required
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Create a free account to get 4 free verifications and protect yourself from stolen goods.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="bg-sos-orange/10 border border-sos-orange/30 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-sos-orange mb-2">What you'll get:</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 4 free verifications (one-time)</li>
                <li>• Search history tracking</li>
                <li>• Basic verification reports</li>
                <li>• Option to upgrade for unlimited access</li>
              </ul>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              onClick={handleSignIn}
              className="bg-sos-orange hover:bg-sos-orange/90 text-white border-none w-full"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up / Sign In
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">
            {hasReachedLimit ? "Upgrade Required" : "Choose Your Plan"}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {hasReachedLimit 
              ? "You've used all your free searches. Upgrade for unlimited access!"
              : "Select a plan to continue with unlimited verifications"
            }
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            {!hasReachedLimit && (
              <div className="border border-gray-800 rounded-lg p-4 hover:border-gray-600 cursor-pointer transition-colors">
                <h3 className="font-bold flex items-center gap-2 text-white">
                  Free Verification <span className="bg-gray-800 px-2 py-1 text-xs rounded-full text-gray-300">Current Plan</span>
                </h3>
                <p className="text-sm text-gray-400 mt-1">Basic verification with limited information</p>
                <p className="text-xs text-gray-500 mt-2">4 searches total per account</p>
              </div>
            )}
            
            <div className="border border-sos-orange rounded-lg p-4 bg-sos-orange/10 hover:bg-sos-orange/20 cursor-pointer transition-colors">
              <h3 className="font-bold flex items-center gap-2 text-white">
                <Crown className="h-4 w-4 text-sos-orange" />
                Basic Plan 
                <span className="bg-sos-orange px-2 py-1 text-xs rounded-full text-white">
                  {formatPrice(SUBSCRIPTION_TIERS.basic.price)}/month
                </span>
              </h3>
              <p className="text-sm text-gray-400 mt-1">Unlimited verifications with detailed reports</p>
              <div className="mt-2 text-xs text-gray-500 space-y-1">
                {SUBSCRIPTION_TIERS.basic.features?.slice(0, 3).map((feature, index) => (
                  <div key={index}>• {feature}</div>
                ))}
              </div>
            </div>

            <div className="border border-yellow-500 rounded-lg p-4 bg-yellow-500/10 hover:bg-yellow-500/20 cursor-pointer transition-colors">
              <h3 className="font-bold flex items-center gap-2 text-white">
                <Star className="h-4 w-4 text-yellow-500" />
                Premium Plan 
                <span className="bg-yellow-500 px-2 py-1 text-xs rounded-full text-black">
                  {formatPrice(SUBSCRIPTION_TIERS.premium.price)}/month
                </span>
              </h3>
              <p className="text-sm text-gray-400 mt-1">Everything in Basic plus API access and premium support</p>
              <div className="mt-2 text-xs text-gray-500 space-y-1">
                {SUBSCRIPTION_TIERS.premium.features?.slice(0, 3).map((feature, index) => (
                  <div key={index}>• {feature}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          {!hasReachedLimit && (
            <Button 
              onClick={handleFreeVerification}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 bg-gray-900 hover:text-white focus:text-white"
            >
              Continue with Free
            </Button>
          )}
          
          <Button 
            onClick={handlePremiumSignIn}
            className="bg-sos-orange hover:bg-sos-orange/90 text-white border-none"
          >
            {hasReachedLimit ? "Upgrade Now" : "Subscribe for Unlimited"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
