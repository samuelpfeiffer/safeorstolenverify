import React, { useState, useEffect } from 'react';
import { Shield, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 30 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-4 z-40 animate-in slide-in-from-right duration-300">
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-4 rounded-2xl shadow-2xl max-w-xs">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-background text-foreground p-1 rounded-full shadow-md hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="bg-background/20 p-2 rounded-lg">
            <Shield className="h-6 w-6" />
          </div>
          
          <div>
            <p className="font-semibold mb-1">Verify Before Buying</p>
            <p className="text-sm opacity-90 mb-3">From $3.99/check or $14.99/mo unlimited.</p>
            
            <Button asChild size="sm" variant="secondary">
              <Link to="/verify">
                Check Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
