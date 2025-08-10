import React, { useEffect, createContext, useContext, useState } from 'react';
import { usePWA } from '@/hooks/usePWA';

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