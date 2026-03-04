import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SUBSCRIPTION_TIERS } from "@/features/pricing";
import { useAuth } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { redirectToStripe } from "@/utils/stripeRedirect";

interface ConsumerPricingProps {
  onSubscribeClick?: (tier: 'personal' | 'professional') => void;
  isLoading?: boolean;
}

export const ConsumerPricing = ({ onSubscribeClick, isLoading: externalLoading }: ConsumerPricingProps) => {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleFreeStart = () => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/verify');
    }
  };

  const handleUnlimitedCheckout = async () => {
    setIsLoading(true);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth?redirect=/pricing');
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          planName: 'Unlimited Plan',
          isSubscription: true,
          redirectUrl: 'https://safeorstolen.com'
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      if (error) throw error;
      if (!data?.url) throw new Error('No checkout URL returned');

      redirectToStripe(data.url);
      
    } catch (err: any) {
      console.error('Checkout error:', err);
      toast({
        title: 'Checkout Error',
        description: err.message || 'Failed to start checkout. Please try again.',
        variant: 'destructive'
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-8" id="subscriptions">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl mb-4">Unlimited verifications — just $1/month</p>
        <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Law Enforcement Verified</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-lg mx-auto">
        
        {/* Unlimited Plan */}
        <div className="bg-secondary/50 backdrop-blur-lg rounded-xl p-8 border border-sos-orange relative overflow-hidden transform scale-105 shadow-lg shadow-sos-orange/20">
          <div className="absolute -right-6 -top-6 bg-sos-orange/20 p-10 rounded-full"></div>
          <div className="bg-sos-orange text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">Best Value</div>
          <h3 className="text-2xl font-bold mb-2">{SUBSCRIPTION_TIERS.unlimited.name}</h3>
          <div className="text-3xl font-bold mb-2">{SUBSCRIPTION_TIERS.unlimited.priceDisplay}<span className="text-lg font-normal">/month</span></div>
          <p className="text-gray-300 mb-6">Unlimited verifications for peace of mind</p>
          <ul className="space-y-3 mb-8">
            {SUBSCRIPTION_TIERS.unlimited.features.slice(0, 5).map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-sos-orange mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            onClick={handleUnlimitedCheckout}
            className="w-full bg-sos-orange hover:bg-sos-orange/90"
            disabled={isLoading || externalLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Unlock Unlimited"
            )}
          </Button>
        </div>
      </div>
      
      {/* Trust & Transparency Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-8">Why Trust SafeOrStolen?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-secondary/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-sos-orange font-bold">✓</span>
            </div>
            <h4 className="font-semibold mb-2">Law Enforcement Data</h4>
            <p className="text-gray-400 text-sm">Direct access to official stolen goods databases and law enforcement reports</p>
          </div>
          <div className="bg-secondary/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-sos-orange font-bold">⚡</span>
            </div>
            <h4 className="font-semibold mb-2">Real-Time Verification</h4>
            <p className="text-gray-400 text-sm">Instant checks across multiple databases with AI-powered risk assessment</p>
          </div>
          <div className="bg-secondary/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-sos-orange font-bold">🛡️</span>
            </div>
            <h4 className="font-semibold mb-2">Enterprise Security</h4>
            <p className="text-gray-400 text-sm">Bank-level encryption and GDPR-compliant data handling practices</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/how-it-works">
            <Button variant="outline" className="border-sos-orange text-sos-orange hover:bg-sos-orange/10">
              How Our Verification Works
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Data Sources
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
