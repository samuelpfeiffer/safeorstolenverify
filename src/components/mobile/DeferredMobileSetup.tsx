import React, { lazy, Suspense } from 'react';
import { useDeferredMobile } from '@/hooks/useDeferredMobile';

// Lazy load mobile components to prevent early initialization issues
const MobileOptimizer = lazy(() => 
  import('./MobileOptimizer').then(module => ({ default: module.MobileOptimizer }))
);

const MobileInputOptimizer = lazy(() => 
  import('./MobileInputOptimizer').then(module => ({ default: module.MobileInputOptimizer }))
);

/**
 * Deferred mobile setup component that only loads after React is fully available
 */
export const DeferredMobileSetup: React.FC = () => {
  const isMobileReady = useDeferredMobile();

  if (!isMobileReady) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <MobileOptimizer />
      <MobileInputOptimizer />
    </Suspense>
  );
};