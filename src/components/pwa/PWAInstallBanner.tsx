
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Smartphone } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';
import { useToast } from '@/hooks/use-toast';

export const PWAInstallBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { isInstallAvailable, isInstalled, showInstallPrompt } = usePWA();
  const { toast } = useToast();

  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const daysPassed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      
      // Show again after 7 days
      if (daysPassed < 7) {
        setIsDismissed(true);
        return;
      }
    }

    if (isInstallAvailable && !isInstalled && !isDismissed) {
      // Show banner after 30 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [isInstallAvailable, isInstalled, isDismissed]);

  const handleInstall = async () => {
    try {
      const success = await showInstallPrompt();
      
      if (success) {
        toast({
          title: "App Installing",
          description: "SafeOrStolen is being installed on your device!",
        });
        setIsVisible(false);
      }
    } catch (error) {
      console.error('Error installing PWA:', error);
      toast({
        title: "Installation Error",
        description: "Unable to install the app. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (!isVisible || isInstalled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slideUp">
      <div className="bg-sos border border-sos-orange/20 rounded-lg p-4 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-sos-orange/20 p-2 rounded-lg">
            <Smartphone className="h-5 w-5 text-sos-orange" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-semibold text-sm mb-1">
              Install SafeOrStolen
            </h3>
            <p className="text-gray-300 text-xs mb-3">
              Get faster access and work offline. Install our app for the best experience.
            </p>
            
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleInstall}
                className="bg-sos-orange hover:bg-sos-orange/90 text-white flex-1"
              >
                <Download className="h-4 w-4 mr-1" />
                Install
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleDismiss}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Later
              </Button>
            </div>
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white p-1 h-auto"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
