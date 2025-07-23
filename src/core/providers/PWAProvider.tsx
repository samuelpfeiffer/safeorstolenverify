import React, { useEffect, createContext, useContext, useState } from 'react';
import { usePWA } from '@/hooks/usePWA';
import { useIsMobile } from '@/hooks/use-mobile';

interface PWAContextType {
  isInstallAvailable: boolean;
  isInstalled: boolean;
  isOnline: boolean;
  showInstallPrompt: () => Promise<boolean>;
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
  const { isInstallAvailable, isInstalled, isOnline, showInstallPrompt } = usePWA();
  const isMobile = useIsMobile();

  // Enhanced mobile PWA experience
  useEffect(() => {
    if (isMobile && isInstallAvailable) {
      // Show install prompt after a delay on mobile
      const timer = setTimeout(() => {
        console.log('PWA install available for mobile device');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isInstallAvailable]);

  const value: PWAContextType = {
    isInstallAvailable,
    isInstalled,
    isOnline,
    showInstallPrompt,
  };

  return (
    <PWAContext.Provider value={value}>
      {children}
    </PWAContext.Provider>
  );
};