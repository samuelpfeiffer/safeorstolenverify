
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SUBSCRIPTION_TIERS, formatPrice } from "@/utils/pricing";
import { useAuth } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

interface ConsumerPricingProps {
  onSubscribeClick: (tier: 'basic' | 'entryLevel') => void;
  isLoading: boolean;
}

export const ConsumerPricing = ({ onSubscribeClick, isLoading }: ConsumerPricingProps) => {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const navigate = useNavigate();

  const handleFreeStart = () => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-8" id="subscriptions">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Transparent, Fair Subscriptions</h2>
        <p className="text-xl mb-4">Get started with {SUBSCRIPTION_TIERS.free.searchLimit} free searches. No hidden fees, cancel anytime.</p>
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
        
        {/* Professional Plan */}
        <div className="bg-secondary/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 bg-gray-700/30 p-8 rounded-full"></div>
          <h3 className="text-2xl font-bold mb-2">Professional</h3>
          <div className="text-3xl font-bold mb-2">{formatPrice(SUBSCRIPTION_TIERS.entryLevel.price)}<span className="text-lg font-normal">/month</span></div>
          <p className="text-gray-400 mb-6">For businesses and frequent buyers</p>
          <ul className="space-y-3 mb-8">
            {SUBSCRIPTION_TIERS.entryLevel.features?.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-sos-orange mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            onClick={() => onSubscribeClick('entryLevel')}
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
        
        {/* Partnership Badge */}
        <div className="bg-gradient-to-r from-sos-orange/10 to-transparent rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src="/images/partners/fastercapital-logo.png" alt="FasterCapital" className="h-8" />
            <span className="text-sos-orange font-semibold">Backed by FasterCapital</span>
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            SafeOrStolen is supported by FasterCapital, a leading startup accelerator, 
            ensuring professional development and investor confidence in our platform.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/how-it-works-detailed">
            <Button variant="outline" className="border-sos-orange text-sos-orange hover:bg-sos-orange/10">
              How Our Verification Works
            </Button>
          </Link>
          <Link to="/data-sources">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Data Sources
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
