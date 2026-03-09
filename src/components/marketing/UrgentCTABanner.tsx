import React, { useState, useEffect } from 'react';
import { X, Clock, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const UrgentCTABanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Check if dismissed
    const dismissed = sessionStorage.getItem('urgentBannerDismissed');
    if (dismissed) {
      setIsVisible(false);
      return;
    }

    // Countdown timer
    const savedEndTime = localStorage.getItem('urgentBannerEndTime');
    let endTime: number;
    
    if (savedEndTime) {
      endTime = parseInt(savedEndTime);
    } else {
      endTime = Date.now() + 2 * 60 * 60 * 1000; // 2 hours from now
      localStorage.setItem('urgentBannerEndTime', endTime.toString());
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = endTime - now;
      
      if (diff <= 0) {
        // Reset timer
        endTime = Date.now() + 2 * 60 * 60 * 1000;
        localStorage.setItem('urgentBannerEndTime', endTime.toString());
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('urgentBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-destructive to-primary text-primary-foreground py-2 px-4 shadow-lg animate-pulse-subtle">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-center">
          <Zap className="h-5 w-5 animate-pulse hidden sm:block" />
          
          <div className="flex items-center gap-2 text-sm md:text-base font-semibold">
            <span className="hidden md:inline">🔥 LIMITED OFFER:</span>
            <span className="md:hidden">🔥</span>
            <span>Unlimited Verifications — $2.99/mo</span>
          </div>
          
          <div className="flex items-center gap-1 bg-background/20 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="font-mono font-bold">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          
          <Button asChild size="sm" variant="secondary" className="hidden sm:inline-flex">
            <Link to="/verify">
              Claim Now
            </Link>
          </Button>
        </div>
        
        <button 
          onClick={handleDismiss}
          className="p-1 hover:bg-background/20 rounded-full transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
