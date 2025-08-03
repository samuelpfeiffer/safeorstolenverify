import React, { createContext, useContext, useEffect } from 'react';
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

  // Initialize mobile optimizations and PWA features
  React.useEffect(() => {
    let cleanupFunction: (() => void) | undefined;

    const initializeMobileOptimizations = async () => {
      try {
        // Initialize mobile optimizations after React context is established
        if (isMobile) {
          const { MobileSetupManager } = await import('@/utils/mobile/MobileSetupManager');
          const mobileManager = MobileSetupManager.getInstance();
          await mobileManager.initialize();
        }

        // Show install prompt after a delay on mobile
        if (isMobile && isInstallAvailable) {
          const timer = setTimeout(() => {
            console.log('PWA install available for mobile device');
          }, 3000);
          cleanupFunction = () => clearTimeout(timer);
        }
      } catch (error) {
        console.warn('Mobile optimization initialization failed:', error);
      }
    };

    // Delay initialization to ensure React providers are ready
    const timer = setTimeout(initializeMobileOptimizations, 500);
    
    return () => {
      clearTimeout(timer);
      cleanupFunction?.();
    };
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