import React, { useState, useEffect } from 'react';
import { usePWA } from '@/hooks/usePWA';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Download, Smartphone, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { mobileDetection } from '../utils/mobileDetection';

export const PWAInstallManager: React.FC = () => {
  const { isInstallAvailable, isInstalled, showInstallPrompt } = usePWA();
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    if (isInstalled) {
      setIsVisible(false);
      return;
    }

    const dismissed = localStorage.getItem('pwa-install-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);

    // Show after 5 seconds if not dismissed recently (7 days)
    if (isInstallAvailable && daysSinceDismissed > 7) {
      const timer = setTimeout(() => setIsVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [isInstallAvailable, isInstalled]);

  const handleInstall = async () => {
    if (mobileDetection.isIOS()) {
      setShowInstructions(true);
      return;
    }

    const success = await showInstallPrompt();
    if (success) {
      toast({
        title: '✅ App Installed!',
        description: 'SafeOrStolen has been added to your home screen.',
      });
      setIsVisible(false);
      localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    } else {
      toast({
        title: 'Installation Cancelled',
        description: 'You can install the app anytime from your browser menu.',
        variant: 'default'
      });
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    toast({
      title: 'Reminder Set',
      description: "We'll remind you to install the app in 7 days.",
    });
  };

  if (!isVisible || isInstalled) return null;

  // iOS Instructions Modal
  if (showInstructions) {
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold">Install SafeOrStolen App</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowInstructions(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                On iOS, follow these steps:
              </p>
              
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">1</span>
                  <span>Tap the <strong>Share</strong> button (square with arrow)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">2</span>
                  <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">3</span>
                  <span>Tap <strong>"Add"</strong> in the top right</span>
                </li>
              </ol>

              <Button
                onClick={() => setShowInstructions(false)}
                className="w-full"
              >
                Got It!
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Mobile Banner
  if (isMobile) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 animate-slideUp">
        <Card className="border-primary shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1">
                  Install SafeOrStolen App
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Get faster access & offline verification
                </p>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleInstall}
                    className="flex-1"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Install
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleDismiss}
                  >
                    Later
                  </Button>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0 h-8 w-8"
                onClick={handleDismiss}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Desktop Bot
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-slideUp">
      <Card className="border-primary shadow-xl">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Install Our App</h3>
                <p className="text-xs text-muted-foreground">Access offline</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismiss}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Install SafeOrStolen for instant access and offline verification capabilities.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              <span>Works offline</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              <span>Faster performance</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              <span>Push notifications</span>
            </div>
          </div>

          <Button onClick={handleInstall} className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Install Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
