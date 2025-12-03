import React, { createContext, useContext } from 'react';
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