import * as React from 'react';

/**
 * Safe MobileInputOptimizer placeholder to avoid runtime issues from stale chunks.
 */
export const MobileInputOptimizer: React.FC = () => {
  React.useEffect(() => {
    const fixViewport = () => {
      // iOS input zoom prevention could be added here if needed
    };
    fixViewport();
  }, []);

  return null;
};

export default MobileInputOptimizer;
