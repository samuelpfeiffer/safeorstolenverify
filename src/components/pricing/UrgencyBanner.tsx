import { Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

export const UrgencyBanner = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUnifiedAuth();

  const handleSubscribe = () => {
    if (isAuthenticated) {
      navigate('/pricing');
    } else {
      navigate('/auth?tab=signup');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-sos-lime/20 via-sos-orange/10 to-sos-lime/20 rounded-2xl p-8 border-2 border-sos-lime/30 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Unlimited Verifications — $1/Month
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check phones, cars, electronics, bikes, firearms & more. 
            All item types. All databases. Cancel anytime.
          </p>
          
          <Button 
            onClick={handleSubscribe}
            size="lg" 
            className="bg-gradient-to-r from-sos-lime to-sos-orange hover:opacity-90 text-black font-bold text-lg px-8 py-6"
          >
            {isAuthenticated ? 'Subscribe Now' : 'Get Started — $1/Month'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-sos-lime" /> Unlimited Checks
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Zap className="w-4 h-4 text-sos-lime" /> Instant Results
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Shield className="w-4 h-4 text-sos-lime" /> 30-Day Guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
