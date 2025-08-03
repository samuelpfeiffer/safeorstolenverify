import React from 'react';
import { usePWA } from '@/hooks/usePWA';

interface PWAContextType {
  isInstallAvailable: boolean;
  isInstalled: boolean;
  isOnline: boolean;
  showInstallPrompt: () => Promise<boolean>;
}

const PWAContext = React.createContext<PWAContextType | undefined>(undefined);

export const usePWAContext = () => {
  const context = React.useContext(PWAContext);
  if (!context) {
    throw new Error('usePWAContext must be used within PWAProvider');
  }
  return context;
};

interface PWAProviderProps {
  children: React.ReactNode;
}

export const PWAProvider: React.FC<PWAProviderProps> = ({ children }) => {
  const pwaHook = usePWA();
  
  // Guard against null hook result
  if (!pwaHook) {
    console.warn('PWA hook returned null, using fallback values');
    const fallbackValue: PWAContextType = {
      isInstallAvailable: false,
      isInstalled: false,
      isOnline: navigator?.onLine ?? true,
      showInstallPrompt: async () => false,
    };
    
    return (
      <PWAContext.Provider value={fallbackValue}>
        {children}
      </PWAContext.Provider>
    );
  }

  const { isInstallAvailable, isInstalled, isOnline, showInstallPrompt } = pwaHook;

  // Simple mobile optimizations without dynamic imports
  React.useEffect(() => {
    const applyBasicMobileOptimizations = () => {
      try {
        // Basic mobile viewport optimization
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
          document.documentElement.style.setProperty('--mobile-optimized', '1');
          
          // Prevent zoom on double tap
          const preventZoom = (e: TouchEvent) => {
            if (e.touches.length > 1) {
              e.preventDefault();
            }
          };
          
          document.addEventListener('touchstart', preventZoom, { passive: false });
          
          return () => {
            document.removeEventListener('touchstart', preventZoom);
          };
        }
      } catch (error) {
        console.warn('Basic mobile optimization failed:', error);
      }
    };

    const cleanup = applyBasicMobileOptimizations();
    return cleanup;
  }, []);

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