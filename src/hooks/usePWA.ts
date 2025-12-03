import { useState, useEffect, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const usePWA = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [installOutcome, setInstallOutcome] = useState<'accepted' | 'dismissed' | null>(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      
      // Track prompt availability
      console.log('PWA install prompt ready');
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pwa_prompt_available', {
          event_category: 'PWA',
          event_label: 'Install Prompt Available'
        });
      }
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
      setInstallOutcome('accepted');
      
      // Track successful installation
      console.log('PWA installed successfully');
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pwa_installed', {
          event_category: 'PWA',
          event_label: 'App Successfully Installed',
          value: 1
        });
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Enhanced installation detection
    const checkIfInstalled = () => {
      // Check for PWA display mode (desktop/mobile)
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      
      // iOS Safari specific check
      const isIOSStandalone = (window.navigator as any).standalone === true;
      
      // Check for window-controls-overlay (advanced PWA mode)
      const hasWindowControls = window.matchMedia('(display-mode: window-controls-overlay)').matches;
      
      // Check if running in PWA context
      if (isStandalone || isIOSStandalone || hasWindowControls) {
        setIsInstalled(true);
        return true;
      }
      
      return false;
    };

    checkIfInstalled();

    // Listen for display mode changes
    const displayModeQuery = window.matchMedia('(display-mode: standalone)');
    const handleDisplayModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsInstalled(true);
      }
    };
    displayModeQuery.addEventListener('change', handleDisplayModeChange);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      displayModeQuery.removeEventListener('change', handleDisplayModeChange);
    };
  }, []);

  const installApp = useCallback(async () => {
    if (!installPrompt) {
      console.log('No install prompt available');
      return false;
    }

    try {
      // Track prompt shown
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pwa_prompt_shown', {
          event_category: 'PWA',
          event_label: 'Install Prompt Displayed'
        });
      }

      // The prompt can only be called once
      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      
      // Track user choice
      setInstallOutcome(choice.outcome);
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pwa_prompt_response', {
          event_category: 'PWA',
          event_label: choice.outcome === 'accepted' ? 'Accepted' : 'Dismissed',
          value: choice.outcome === 'accepted' ? 1 : 0
        });
      }

      // Reset the stored event after use regardless of outcome
      setInstallPrompt(null);
      return choice.outcome === 'accepted';
    } catch (e) {
      console.error('Error during PWA install:', e);
      setInstallPrompt(null);
      return false;
    }
  }, [installPrompt]);

  // Check if iOS (requires different install instructions)
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return {
    isOnline,
    installPrompt,
    isInstalled,
    installApp,
    installOutcome,
    canInstall: !!installPrompt,
    isInstallAvailable: !!installPrompt,
    showInstallPrompt: installApp,
    // Platform detection for custom install instructions
    isIOS,
    isAndroid,
    isSafari,
    needsManualInstall: isIOS && isSafari && !isInstalled
  };
};
