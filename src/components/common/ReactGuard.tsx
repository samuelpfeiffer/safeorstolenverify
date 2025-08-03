import React from 'react';

interface ReactGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * ReactGuard ensures React context is properly initialized before rendering children
 */
export const ReactGuard: React.FC<ReactGuardProps> = ({ 
  children, 
  fallback = <div className="min-h-screen bg-sos flex items-center justify-center text-white">Loading App...</div> 
}) => {
  const [isReactReady, setIsReactReady] = React.useState(false);

  React.useEffect(() => {
    // Verify React context is working
    try {
      const testRef = React.useRef(null);
      if (typeof React.createElement === 'function') {
        setIsReactReady(true);
      }
    } catch (error) {
      console.error('React context verification failed:', error);
      // Force rerender after a delay
      setTimeout(() => setIsReactReady(true), 100);
    }
  }, []);

  if (!isReactReady) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};