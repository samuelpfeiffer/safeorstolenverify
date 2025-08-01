import { useEffect, useState } from 'react';

/**
 * Hook to defer mobile optimization until React is fully loaded
 * Prevents the "Cannot read properties of null" error with useEffect
 */
export const useDeferredMobile = () => {
  const [isMobileReady, setIsMobileReady] = useState(false);

  useEffect(() => {
    // Check if React is properly loaded and available
    const checkReactAvailability = () => {
      try {
        // Verify React hooks are available
        if (typeof useEffect === 'function' && typeof useState === 'function') {
          setIsMobileReady(true);
          return true;
        }
      } catch (error) {
        console.warn('React hooks not available yet, retrying...', error);
      }
      return false;
    };

    // Immediate check
    if (checkReactAvailability()) {
      return;
    }

    // Fallback with slight delay to ensure React is fully initialized
    const timeout = setTimeout(() => {
      if (checkReactAvailability()) {
        setIsMobileReady(true);
      } else {
        console.error('React hooks still not available after delay');
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return isMobileReady;
};