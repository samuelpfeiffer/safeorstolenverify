import React, { useState, useEffect } from 'react';
import { X, Smartphone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';

export const StickyMobileAppCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed this session
    if (sessionStorage.getItem('appCtaDismissed')) {
      setIsDismissed(true);
      return;
    }

    // Show after scrolling 50% of page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 30 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('appCtaDismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="bg-primary text-primary-foreground p-4 shadow-lg">
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-2 p-1 opacity-70 hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Smartphone className="h-6 w-6" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-medium">Get the free app</p>
            <p className="text-xs opacity-80">Scan barcodes in 3 seconds</p>
          </div>
          
          <Button 
            asChild
            variant="secondary" 
            size="sm"
            className="shrink-0"
          >
            <Link to="/app">Install</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
