import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProductHuntBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Message */}
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl animate-bounce">🚀</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-semibold text-sm sm:text-base">
                We're LIVE on Product Hunt!
              </span>
              <span className="text-xs sm:text-sm opacity-90">
                Help us reach #1 Product of the Day
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            variant="secondary"
            className="flex items-center gap-2 whitespace-nowrap"
            onClick={() => window.open('https://www.producthunt.com/posts/safeorstolen', '_blank')}
          >
            Support Us
            <ExternalLink className="w-4 h-4" />
          </Button>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-primary-foreground/20 rounded transition-colors ml-2"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
