import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Zap, ArrowRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

export const AggressiveConversionBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();

  if (dismissed) return null;

  const handleStartFree = () => {
    if (isAuthenticated) {
      navigate('/verify');
    } else {
      navigate('/auth?tab=signup&redirect=/verify');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-primary to-accent animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button 
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 md:relative md:top-0 md:right-0 md:order-last p-1 hover:bg-white/20 rounded"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          
          <div className="flex items-center gap-3 text-white">
            <Shield className="h-8 w-8" />
            <div>
              <p className="font-bold text-lg">Don't Buy Stolen Goods!</p>
              <p className="text-sm opacity-90">Get 2 FREE verification checks - No credit card required</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleStartFree}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg"
            >
              <Zap className="mr-2 h-5 w-5" />
              Start FREE Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
