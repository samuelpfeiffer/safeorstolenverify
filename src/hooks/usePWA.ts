
import { useState, useEffect } from 'react';
import { pwaService } from '@/services/pwaService';

export interface PWAState {
  isInstallAvailable: boolean;
  isInstalled: boolean;
  isOnline: boolean;
  showInstallPrompt: () => Promise<boolean>;
  performanceMetrics: any;
}

export const usePWA = (): PWAState => {
  const [isInstallAvailable, setIsInstallAvailable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);

  useEffect(() => {
    // Initialize state
    setIsInstallAvailable(pwaService.isInstallAvailable());
    setIsInstalled(pwaService.isAppInstalled());
    setIsOnline(pwaService.isOnline());

    // Load performance metrics
    pwaService.getPerformanceMetrics().then(setPerformanceMetrics);

    // Event listeners
    const handleInstallAvailable = () => {
      setIsInstallAvailable(true);
    };

    const handleInstallSuccess = () => {
      setIsInstalled(true);
      setIsInstallAvailable(false);
    };

    const handleOnlineStatus = (event: CustomEvent) => {
      setIsOnline(event.detail.isOnline);
    };

    const handleUpdateAvailable = () => {
      console.log('PWA update available');
      // Could show a toast notification here
    };

    // Add event listeners
    window.addEventListener('pwa-install-available', handleInstallAvailable);
    window.addEventListener('pwa-install-success', handleInstallSuccess);
    window.addEventListener('pwa-online-status', handleOnlineStatus as EventListener);
    window.addEventListener('pwa-update-available', handleUpdateAvailable);

    return () => {
      // Cleanup event listeners
      window.removeEventListener('pwa-install-available', handleInstallAvailable);
      window.removeEventListener('pwa-install-success', handleInstallSuccess);
      window.removeEventListener('pwa-online-status', handleOnlineStatus as EventListener);
      window.removeEventListener('pwa-update-available', handleUpdateAvailable);
    };
  }, []);

  const showInstallPrompt = async (): Promise<boolean> => {
    return await pwaService.showInstallPrompt();
  };

  return {
    isInstallAvailable,
    isInstalled,
    isOnline,
    showInstallPrompt,
    performanceMetrics
  };
};
