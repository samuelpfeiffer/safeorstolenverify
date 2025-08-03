import React from 'react';

interface SafeProviderWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Safe wrapper for providers that might fail during initialization
 * Provides graceful fallback and error recovery
 */
export const SafeProviderWrapper: React.FC<SafeProviderWrapperProps> = ({ 
  children, 
  fallback 
}) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    // Reset error state on successful renders
    if (hasError) {
      setHasError(false);
    }
  }, [children]);

  if (hasError) {
    return fallback || (
      <div className="min-h-screen bg-sos flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Provider Error</h2>
          <p className="text-gray-300 mb-6">Attempting to recover...</p>
          <button 
            onClick={() => setHasError(false)}
            className="px-6 py-3 bg-sos-orange hover:bg-sos-orange/90 text-white rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  try {
    return <>{children}</>;
  } catch (error) {
    console.error('Provider wrapper caught error:', error);
    setHasError(true);
    return null;
  }
};