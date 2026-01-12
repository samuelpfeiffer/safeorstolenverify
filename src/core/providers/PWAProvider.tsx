import React, { createContext, useContext, useEffect } from 'react';
import { usePWA } from '@/hooks/usePWA';
import { useAppInstallTracking } from '@/hooks/useAppInstallTracking';

interface PWAContextType {
  isInstallAvailable: boolean;
  isInstalled: boolean;
  isOnline: boolean;
  showInstallPrompt: () => Promise<boolean>;
  installOutcome: 'accepted' | 'dismissed' | null;
  isIOS: boolean;
  isAndroid: boolean;
  isSafari: boolean;
  needsManualInstall: boolean;
}

const PWAContext = createContext<PWAContextType | undefined>(undefined);

export const usePWAContext = () => {
  const context = useContext(PWAContext);
  if (!context) {
    throw new Error('usePWAContext must be used within PWAProvider');
  }
  return context;
};

interface PWAProviderProps {
  children: React.ReactNode;
}

export const PWAProvider: React.FC<PWAProviderProps> = ({ children }) => {
  const pwa = usePWA();
  
  // Initialize app install tracking
  useAppInstallTracking();

  // Force SW update check on every page load and auto-reload on new version
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    const checkForUpdates = async () => {
      try {
        const registration = await navigator.serviceWorker.ready;
        
        // Force update check
        await registration.update();
        console.log('[PWA] Checked for SW updates');

        // Listen for new service worker activation
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              console.log('[PWA] New SW activated, reloading for fresh content');
              window.location.reload();
            }
          });
        });

        // Listen for messages from service worker
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data?.type === 'SW_ACTIVATED') {
            console.log(`[PWA] SW v${event.data.version} activated, reloading...`);
            window.location.reload();
          }
        });
      } catch (error) {
        console.error('[PWA] Error checking for SW updates:', error);
      }
    };

    checkForUpdates();
  }, []);

  const value: PWAContextType = {
    isInstallAvailable: pwa.isInstallAvailable,
    isInstalled: pwa.isInstalled,
    isOnline: pwa.isOnline,
    showInstallPrompt: pwa.showInstallPrompt,
    installOutcome: pwa.installOutcome,
    isIOS: pwa.isIOS,
    isAndroid: pwa.isAndroid,
    isSafari: pwa.isSafari,
    needsManualInstall: pwa.needsManualInstall,
  };

  return (
    <PWAContext.Provider value={value}>
      {children}
    </PWAContext.Provider>
  );
};