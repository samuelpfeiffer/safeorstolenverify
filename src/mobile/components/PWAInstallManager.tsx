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

  // Mobile: slim one-line bar (Oct 2 2026: was a tall card)
  if (isMobile) {
    return (
      <div className="fixed bottom-3 left-3 right-3 z-50 animate-slideUp">
        <div className="flex items-center gap-2 rounded-xl border border-primary/70 bg-card px-3 py-2 shadow-lg">
          <Download className="h-4 w-4 shrink-0 text-primary" />
          <span className="flex-1 truncate text-xs font-medium">Install the SafeOrStolen app</span>
          <Button onClick={handleInstall} size="sm" className="h-7 px-2.5 text-xs">Install</Button>
          <button onClick={handleDismiss} aria-label="Close" className="p-1 text-muted-foreground"><X className="h-3.5 w-3.5" /></button>
        </div>
      </div>
    );
  }

  // Desktop: small, compact card (Oct 2 2026: was a large panel covering the chat)
  return (
    <div className="fixed bottom-4 right-4 z-50 w-72 animate-slideUp">
      <Card className="border-primary/70 shadow-lg">
        <CardContent className="p-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <Download className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold leading-tight">Install the app</h3>
              <p className="text-[11px] text-muted-foreground leading-tight">Faster checks, works offline</p>
            </div>
            <Button onClick={handleInstall} size="sm" className="h-7 px-2.5 text-xs">
              Install
            </Button>
            <button onClick={handleDismiss} aria-label="Close" className="p-1 text-muted-foreground hover:text-foreground">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
