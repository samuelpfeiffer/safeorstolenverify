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
  // Oct 2 2026 CRASH FIX: this used to `return null` here, BEFORE the hooks below. React requires the
  // same hooks every render, so moving between a hidden page (/verify, /auth) and any other page crashed
  // the whole site (React errors #300 / #310). Now every hook always runs, and we hide at the end.
  const hiddenHere = hiddenOn.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (hiddenHere) return;
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
  }, [isInstalled, isDismissed, hiddenHere]);

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

  if (hiddenHere || isInstalled || (!isVisible && !showTyping)) {
    return null;
  }

  // Oct 2 2026: slim bar instead of a big chat bubble.
  if (showTyping) return null;
  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:w-72 z-50 animate-slideUp">
      <div className="flex items-center gap-2 rounded-xl border border-primary/70 bg-card px-3 py-2 shadow-lg">
        <Download className="h-4 w-4 shrink-0 text-primary" />
        <span className="flex-1 truncate text-xs font-medium text-foreground">Install the SafeOrStolen app</span>
        <Button onClick={handleInstall} size="sm" className="h-7 px-2.5 text-xs">Install</Button>
        <button onClick={handleDismiss} aria-label="Close" className="p-1 text-muted-foreground"><X className="h-3.5 w-3.5" /></button>
      </div>
    </div>
  );
};