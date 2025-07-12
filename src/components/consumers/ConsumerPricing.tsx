
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SUBSCRIPTION_TIERS, formatPrice } from "@/utils/pricing";
import { useSecureAuth } from "@/hooks/useSecureAuth";
import { useNavigate } from "react-router-dom";

interface ConsumerPricingProps {
  onSubscribeClick: (tier: 'basic' | 'premium') => void;
  isLoading: boolean;
}

export const ConsumerPricing = ({ onSubscribeClick, isLoading }: ConsumerPricingProps) => {
  const { isAuthenticated } = useSecureAuth();
  const navigate = useNavigate();

  const handleFreeStart = () => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-8" id="pricing">
      <h2 className="text-3xl font-bold mb-8 text-center">Subscription Plans</h2>
      <p className="text-center text-xl mb-10">Get started with {SUBSCRIPTION_TIERS.free.searchLimit} free searches. Choose the plan that best fits your needs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="bg-secondary/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 bg-gray-700/30 p-8 rounded-full"></div>
          <h3 className="text-2xl font-bold mb-2">Free</h3>
          <div className="text-3xl font-bold mb-2">$0</div>
          <p className="text-gray-400 mb-6">Get started with basic verification</p>
          <ul className="space-y-3 mb-8">
            {SUBSCRIPTION_TIERS.free.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-sos-orange mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            onClick={handleFreeStart}
            className="w-full bg-secondary hover:bg-secondary/80"
          >
            {isAuthenticated ? 'Current Plan' : 'Start Free'}
          </Button>
        </div>
        
        {/* Basic Plan */}
        <div className="bg-secondary/50 backdrop-blur-lg rounded-xl p-8 border border-sos-orange relative overflow-hidden transform scale-105 shadow-lg shadow-sos-orange/20">
          <div className="absolute -right-6 -top-6 bg-sos-orange/20 p-10 rounded-full"></div>
          <div className="bg-sos-orange text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">Most Popular</div>
          <h3 className="text-2xl font-bold mb-2">Basic</h3>
          <div className="text-3xl font-bold mb-2">{formatPrice(SUBSCRIPTION_TIERS.basic.price)}<span className="text-lg font-normal">/month</span></div>
          <p className="text-gray-300 mb-6">Unlimited searches for casual buyers</p>
          <ul className="space-y-3 mb-8">
            {SUBSCRIPTION_TIERS.basic.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-sos-orange mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            onClick={() => onSubscribeClick('basic')}
            className="w-full bg-sos-orange hover:bg-sos-orange/90"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Subscribe Now"}
          </Button>
        </div>
        
        {/* Premium Plan */}
        <div className="bg-secondary/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 bg-gray-700/30 p-8 rounded-full"></div>
          <h3 className="text-2xl font-bold mb-2">Premium</h3>
          <div className="text-3xl font-bold mb-2">{formatPrice(SUBSCRIPTION_TIERS.premium.price)}<span className="text-lg font-normal">/month</span></div>
          <p className="text-gray-400 mb-6">For businesses and frequent buyers</p>
          <ul className="space-y-3 mb-8">
            {SUBSCRIPTION_TIERS.premium.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-sos-orange mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            onClick={() => onSubscribeClick('premium')}
            className="w-full bg-secondary hover:bg-secondary/80"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Subscribe Now"}
          </Button>
        </div>
      </div>
      
      {/* Pay Per Search Option */}
      <div className="mt-12 bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 text-center border border-gray-700">
        <h3 className="text-2xl font-bold mb-4">Pay Per Search</h3>
        <p className="text-xl mb-6">Need just a few more searches? No problem!</p>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <div className="text-center bg-gray-900/50 rounded-lg p-4 w-28">
            <div className="text-2xl font-bold mb-2">$1.99</div>
            <p className="text-gray-400">1 Search</p>
          </div>
          <div className="text-center bg-gray-900/50 rounded-lg p-4 w-28">
            <div className="text-2xl font-bold mb-2">$4.99</div>
            <p className="text-gray-400">3 Searches</p>
          </div>
          <div className="text-center bg-gray-900/50 rounded-lg p-4 w-28">
            <div className="text-2xl font-bold mb-2">$7.99</div>
            <p className="text-gray-400">5 Searches</p>
          </div>
        </div>
        <Link to="/contact" className="inline-block">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Buy Credits
          </Button>
        </Link>
      </div>
    </div>
  );
};
