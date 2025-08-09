import * as React from 'react';

export interface MobilePerformanceMetrics {
  isMobile: boolean;
  online: boolean;
}

/**
 * Safe no-op mobile performance hook to avoid runtime crashes from stale bundles.
 */
export function useMobilePerformance(): MobilePerformanceMetrics {
  const [online, setOnline] = React.useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    const onOnline = () => setOnline(true);
    const onOffline = () => setOnline(false);

    onResize();
    window.addEventListener('resize', onResize);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  return { isMobile, online };
}
