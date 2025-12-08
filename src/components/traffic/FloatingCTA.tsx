import React, { useState, useEffect } from 'react';
import { Shield, X, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem('floatingCTA_dismissed')) {
      return;
    }

    // Show after 10 seconds of page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('floatingCTA_dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl shadow-2xl p-5 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-6 w-6" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">
                  🔥 Get the FREE App!
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  Scan barcodes instantly. Verify items in 3 seconds. Works offline!
                </p>
                
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <Link to="/app" className="flex items-center gap-1">
                      Download Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    <Link to="/verify">
                      Try Web Version
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
