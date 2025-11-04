
import { useState, useEffect } from 'react';

export const usePWA = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
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
      
      // Check if running in PWA context
      if (isStandalone || isIOSStandalone) {
        setIsInstalled(true);
        return true;
      }
      
      return false;
    };

    checkIfInstalled();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installApp = async () => {
    if (!installPrompt) return false;

    try {
      // The prompt can only be called once
      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      // Reset the stored event after use regardless of outcome
      setInstallPrompt(null);
      return choice?.outcome === 'accepted';
    } catch (e) {
      setInstallPrompt(null);
      return false;
    }
  };
  return {
    isOnline,
    installPrompt,
    isInstalled,
    installApp,
    canInstall: !!installPrompt,
    isInstallAvailable: !!installPrompt,
    showInstallPrompt: installApp
  };
};
