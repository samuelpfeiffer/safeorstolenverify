import * as React from 'react';

/**
 * Safe mobile setup component that initializes mobile optimizations
 * using direct DOM manipulation instead of React hooks to avoid timing issues
 */
export const SafeMobileSetup = () => {
  // Use React.useEffect instead of destructured useEffect to ensure React context is available
  React.useEffect(() => {
    // Use setTimeout to ensure this runs after React is fully mounted
    const timer = setTimeout(async () => {
      try {
        // Dynamic import to ensure the class is loaded safely
        const { MobileSetupManager } = await import('@/utils/mobile/MobileSetupManager');
        const mobileManager = MobileSetupManager.getInstance();
        await mobileManager.initialize();
      } catch (error) {
        console.warn('Mobile setup failed:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
};