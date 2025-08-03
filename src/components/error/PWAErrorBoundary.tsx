import React from 'react';

interface PWAErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface PWAErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

const DefaultFallback: React.FC<{ error?: Error; resetError: () => void }> = ({ error, resetError }) => (
  <div className="min-h-screen bg-sos flex items-center justify-center text-white p-4">
    <div className="text-center max-w-md">
      <h2 className="text-xl font-semibold mb-4">PWA Service Temporarily Unavailable</h2>
      <p className="text-gray-300 mb-6">
        The app is running in fallback mode. Some features may be limited.
      </p>
      <button 
        onClick={resetError}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
      >
        Retry PWA Services
      </button>
      {error && (
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-sm text-gray-400">Technical Details</summary>
          <pre className="mt-2 text-xs text-gray-500 overflow-auto">{error.message}</pre>
        </details>
      )}
    </div>
  </div>
);

export class PWAErrorBoundary extends React.Component<PWAErrorBoundaryProps, PWAErrorBoundaryState> {
  constructor(props: PWAErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): PWAErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('PWA Error Boundary caught error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}