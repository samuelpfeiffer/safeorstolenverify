import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Download, Smartphone, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const AppInstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let timer: number | undefined;

    // Always attach listeners FIRST so we don't miss the event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const bip = e as BeforeInstallPromptEvent;
      setDeferredPrompt(bip);
      // When eligible, reveal the banner immediately
      const bannerDismissed = localStorage.getItem('pwa-banner-dismissed');
      const dismissedTime = bannerDismissed ? parseInt(bannerDismissed) : 0;
      const daysSinceDismiss = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      if (!bannerDismissed || daysSinceDismiss > 7) {
        setShowBanner(true);
      }
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
      toast({
        title: "App Installed Successfully!",
        description: "SafeOrStolen is now available on your home screen.",
      });
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Detect already installed (standalone) but still keep listeners for completeness
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Show the banner after a small delay even if beforeinstallprompt hasn't fired yet (e.g. iOS)
    const bannerDismissed = localStorage.getItem('pwa-banner-dismissed');
    const dismissedTime = bannerDismissed ? parseInt(bannerDismissed) : 0;
    const daysSinceDismiss = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
    if (!bannerDismissed || daysSinceDismiss > 7) {
      timer = window.setTimeout(() => setShowBanner(true), 3000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      if (timer) window.clearTimeout(timer);
    };
  }, [toast]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback for browsers that don't support beforeinstallprompt
      toast({
        title: "Install App",
        description: "To install this app, use your browser's menu and look for 'Add to Home Screen' or 'Install App'.",
      });
      return;
    }

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        toast({
          title: "Installing App...",
          description: "SafeOrStolen will be added to your home screen shortly.",
        });
      }
      
      setDeferredPrompt(null);
      setShowBanner(false);
    } catch (error) {
      console.error('Error during installation:', error);
      toast({
        title: "Installation Error",
        description: "Please try installing from your browser's menu.",
        variant: "destructive",
      });
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('pwa-banner-dismissed', Date.now().toString());
  };

  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  };

  const isStandalone = () => {
    return window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
  };

  const isEmbedded = () => {
    try {
      return window.top !== window.self;
    } catch {
      return true; // cross-origin iframe
    }
  };

  // Don't show if already installed or in standalone mode
  if (isInstalled || isStandalone() || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-sm animate-fade-in">
      <Card className="border-sos-orange shadow-2xl bg-gradient-to-r from-sos-dark to-sos">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-sos-orange rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm mb-1">
                Install SafeOrStolen App
              </h3>
              <p className="text-xs text-gray-200 mb-3 leading-relaxed">
                Get instant access to verify items on-the-go. Fast, secure, and always available.
              </p>
              
              <div className="flex flex-col gap-2">
                {(deferredPrompt || isIOS()) ? (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleInstallClick}
                      size="sm"
                      className="bg-sos-orange hover:bg-sos-orange/90 text-white text-xs px-3 py-1.5 h-auto"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Install
                    </Button>
                    {isIOS() && (
                      <div className="text-xs text-gray-300 flex items-center">
                        <Smartphone className="w-3 h-3 mr-1" />
                        Tap Share → Add to Home Screen
                      </div>
                    )}
                  </div>
                ) : isEmbedded() ? (
                  <div className="flex gap-2">
                    <Button
                      onClick={() => window.open(window.location.href, '_blank', 'noopener')}
                      size="sm"
                      className="bg-sos-orange hover:bg-sos-orange/90 text-white text-xs px-3 py-1.5 h-auto"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Open in new tab to install
                    </Button>
                    <div className="text-xs text-gray-300 flex items-center">
                      Installation is disabled in preview. Open in a new tab.
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      disabled
                      aria-disabled
                      className="bg-sos-orange text-white text-xs px-3 py-1.5 h-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Install
                    </Button>
                    <div className="text-xs text-gray-300 flex items-center">
                      Your browser may not support install here. Try menu → Install App.
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <Button
              onClick={handleDismiss}
              variant="ghost"
              size="sm"
              className="flex-shrink-0 h-6 w-6 p-0 text-gray-300 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};