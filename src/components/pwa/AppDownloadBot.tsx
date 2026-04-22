import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Smartphone, MessageCircle, Sparkles } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';
import { useToast } from '@/hooks/use-toast';

export const AppDownloadBot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const { isInstallAvailable, isInstalled, showInstallPrompt } = usePWA();
  const { toast } = useToast();

  // Hide on the AI chat experience — the chat IS the primary conversion surface here.
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const hiddenOn = ['/verify', '/ai-verify', '/ai-chat', '/auth', '/checkout', '/admin'];
  if (hiddenOn.some((p) => pathname.startsWith(p))) return null;


  useEffect(() => {
    const dismissed = localStorage.getItem('app-download-bot-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const daysPassed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      
      // Show again after 3 days
      if (daysPassed < 3) {
        setIsDismissed(true);
        return;
      }
    }

    if (!isInstalled && !isDismissed) {
      // Show bot after 3 seconds with typing animation
      const timer = setTimeout(() => {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setIsVisible(true);
        }, 2000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isInstalled, isDismissed]);

  const handleInstall = async () => {
    if (isInstallAvailable) {
      try {
        const success = await showInstallPrompt();
        
        if (success) {
          toast({
            title: "App Installing! 🎉",
            description: "SafeOrStolen is being installed on your device for faster access!",
          });
          setIsVisible(false);
          setIsDismissed(true);
          localStorage.setItem('app-download-bot-dismissed', Date.now().toString());
        }
      } catch (error) {
        console.error('Error installing PWA:', error);
        toast({
          title: "Installation Error",
          description: "Unable to install the app. Please try again later.",
          variant: "destructive",
        });
      }
    } else {
      // Fallback for browsers that don't support PWA install
      toast({
        title: "App Available! 📱",
        description: "Add SafeOrStolen to your home screen for quick access. Look for 'Add to Home Screen' in your browser menu.",
      });
      setIsVisible(false);
      setIsDismissed(true);
      localStorage.setItem('app-download-bot-dismissed', Date.now().toString());
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('app-download-bot-dismissed', Date.now().toString());
  };

  if (isInstalled || (!isVisible && !showTyping)) {
    return null;
  }

  // Typing indicator
  if (showTyping) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-sos-orange to-orange-500 p-2 rounded-full">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-r from-sos-orange to-orange-500 p-3 rounded-full flex-shrink-0">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">
                Hi there! 👋
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                I'm your SafeOrStolen assistant! Want <strong>instant access</strong> to verify items? 
                Install our app for lightning-fast checks! ⚡
              </p>
            </div>
            
            <div className="space-y-3">
              <Button
                onClick={handleInstall}
                className="w-full bg-gradient-to-r from-sos-orange to-orange-500 hover:from-sos-orange/90 hover:to-orange-500/90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Download className="h-5 w-5 mr-2" />
                {isInstallAvailable ? 'Install App Now' : 'Add to Home Screen'}
              </Button>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Smartphone className="h-3 w-3 mr-1" />
                  Works offline too!
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleDismiss}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs px-3"
                >
                  Maybe later
                </Button>
              </div>
            </div>
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 h-auto flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};