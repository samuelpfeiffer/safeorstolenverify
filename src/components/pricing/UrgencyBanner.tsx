import { Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

export const UrgencyBanner = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUnifiedAuth();

  const handleStartFree = () => {
    if (isAuthenticated) {
      navigate('/verify');
    } else {
      navigate('/auth?tab=signup');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Banner */}
        <div className="bg-gradient-to-r from-sos-lime/20 via-sos-orange/10 to-sos-lime/20 rounded-2xl p-8 border-2 border-sos-lime/30 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Start Free Today
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get 2 free verifications instantly. No credit card required. 
            Protect yourself from buying stolen goods.
          </p>
          
          <Button 
            onClick={handleStartFree}
            size="lg" 
            className="bg-gradient-to-r from-sos-lime to-sos-orange hover:opacity-90 text-black font-bold text-lg px-8 py-6"
          >
            {isAuthenticated ? 'Verify Now' : 'Start Free Trial'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-sos-lime" /> 2 Free Checks
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