import { useEffect } from 'react';
import { MobileSetupManager } from '@/utils/mobile/MobileSetupManager';

/**
 * Safe mobile setup component that initializes mobile optimizations
 * without using React hooks in a way that could cause timing issues
 */
export const SafeMobileSetup = () => {
  useEffect(() => {
    // Use setTimeout to ensure this runs after React is fully mounted
    const timer = setTimeout(async () => {
      try {
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