import { useState, useEffect } from 'react';
import { X, AlertCircle, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const navigate = useNavigate();
  const { user } = useUnifiedAuth();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        !hasShown && 
        e.clientY <= 0 && 
        !window.location.pathname.includes('/pricing') &&
        !window.location.pathname.includes('/checkout')
      ) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleContinue = () => {
    setIsVisible(false);
    navigate('/pricing');
  };

  const handleInstallApp = () => {
    setIsVisible(false);
    navigate('/app');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <Card className="relative max-w-lg mx-4 p-8 bg-card border-2 border-sos-orange/30 shadow-2xl animate-in zoom-in duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-sos-orange/20 to-sos-lime/20 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-sos-orange" />
          </div>

          <div>
            <h2 className="text-2xl font-black mb-2">Wait! Don't Leave Yet 👋</h2>
            <p className="text-muted-foreground">
              Don't risk buying stolen goods without verification!
            </p>
          </div>

          <div className="space-y-3 text-left bg-sos-orange/5 p-4 rounded-lg border border-sos-orange/20">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-sos-orange flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">$0.99/check or $10/mo unlimited</p>
                <p className="text-xs text-muted-foreground">All items, all databases, cancel anytime</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-sos-lime flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Or Install Free Mobile App</p>
                <p className="text-xs text-muted-foreground">Faster verification on-the-go</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={handleContinue}
              size="lg"
              className="w-full bg-gradient-to-r from-sos-orange to-sos-lime text-white font-bold"
            >
              View Plans — From $0.99
            </Button>
            
            <Button
              onClick={handleInstallApp}
              variant="outline"
              size="lg"
              className="w-full border-sos-orange/30"
            >
              Install Mobile App Instead
            </Button>

            <button
              onClick={() => setIsVisible(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              No thanks, I'll risk it
            </button>
          </div>

          <p className="text-xs text-muted-foreground">
            💡 <strong>Did you know?</strong> 1 in 7 used electronics sold online are stolen
          </p>
        </div>
      </Card>
    </div>
  );
};
