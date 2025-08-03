import { useState, useEffect } from 'react';

/**
 * Hook to ensure React is fully ready before component initialization
 * Prevents race conditions during app startup
 */
export const useReactReadiness = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkReadiness = () => {
      try {
        // Verify React dispatcher is available
        const React = require('react');
        const dispatcher = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentDispatcher?.current;
        
        if (dispatcher && typeof dispatcher.useState === 'function') {
          setIsReady(true);
          return true;
        }
        
        return false;
      } catch (error) {
        console.warn('React readiness check failed:', error);
        return false;
      }
    };

    if (!checkReadiness()) {
      const interval = setInterval(() => {
        if (checkReadiness()) {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, []);

  return isReady;
};