import * as React from 'react';
import { useMobilePerformance } from '@/hooks/useMobilePerformance';

/**
 * Safe MobileOptimizer placeholder – renders nothing but initializes listeners.
 */
export const MobileOptimizer: React.FC = () => {
  const { isMobile, online } = useMobilePerformance();

  React.useEffect(() => {
    // Diagnostic log to confirm safe component mounted
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.log('[MobileOptimizer] active', { isMobile, online });
    }
  }, [isMobile, online]);

  return null;
};

export default MobileOptimizer;
