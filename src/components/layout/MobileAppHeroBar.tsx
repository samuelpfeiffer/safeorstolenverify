import { Smartphone, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/**
 * Persistent Mobile App Hero Bar - Sticky at top of page
 * Highlights SafeOrStolen's unique competitive advantage: the mobile app
 * Shows on all pages to maximize app discovery and downloads
 */
export const MobileAppHeroBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed
    const dismissed = localStorage.getItem('mobileAppBarDismissed');
    if (dismissed) {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('mobileAppBarDismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground py-3 px-4 sticky top-0 z-50 shadow-lg border-b border-primary-foreground/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Icon + Message */}
          <div className="flex items-center gap-3 flex-1">
            <div className="hidden sm:flex w-10 h-10 bg-primary-foreground/20 rounded-lg items-center justify-center">
              <Smartphone className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded font-bold">
                  NEW
                </span>
                <p className="text-sm md:text-base font-semibold">
                  <span className="hidden md:inline">Download SafeOrStolen Mobile App - </span>
                  <span className="md:hidden">Get Our App - </span>
                  The ONLY stolen item verification app
                </p>
              </div>
              <p className="text-xs text-primary-foreground/80 hidden sm:block">
                ✓ Free Download • ✓ Barcode Scanning • ✓ Works Offline • ✓ No competitor has this
              </p>
            </div>
          </div>

          {/* Right: CTA + Close */}
          <div className="flex items-center gap-2">
            <Link to="/mobile-app">
              <Button 
                size="sm" 
                variant="secondary"
                className="font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Download Now</span>
                <span className="sm:hidden">Get App</span>
              </Button>
            </Link>
            <Button
              size="sm"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={handleDismiss}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
