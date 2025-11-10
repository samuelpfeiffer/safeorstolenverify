import React, { Component, ReactNode } from 'react';
import { Loader2, WifiOff, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  timeout?: number;
}

interface State {
  hasError: boolean;
  isLoading: boolean;
  timedOut: boolean;
  error: Error | null;
}

/**
 * AuthLoadingBoundary - Emergency fallback for auth initialization
 * Shows loading state and handles timeouts/errors gracefully
 */
export class AuthLoadingBoundary extends Component<Props, State> {
  private timeoutId?: NodeJS.Timeout;
  private mountTime: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      isLoading: true,
      timedOut: false,
      error: null
    };
    this.mountTime = Date.now();
    
    console.log('[AuthLoadingBoundary] Mounting - starting timeout timer');
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    console.error('[AuthLoadingBoundary] Error caught:', error);
    return { hasError: true, isLoading: false, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const elapsed = Date.now() - this.mountTime;
    console.error('[AuthLoadingBoundary] Error details:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      elapsed: `${elapsed}ms`
    });
  }

  componentDidMount() {
    console.log('[AuthLoadingBoundary] Mounted - setting timeout for auth initialization');
    
    // Emergency timeout - force render after 8 seconds
    const timeout = this.props.timeout || 8000;
    this.timeoutId = setTimeout(() => {
      if (this.state.isLoading) {
        const elapsed = Date.now() - this.mountTime;
        console.warn(`[AuthLoadingBoundary] Timeout after ${elapsed}ms - forcing render in offline mode`);
        this.setState({ timedOut: true, isLoading: false });
      }
    }, timeout);

    // Show slow connection warning after 3 seconds
    setTimeout(() => {
      if (this.state.isLoading) {
        console.warn('[AuthLoadingBoundary] Slow connection detected (3s+)');
      }
    }, 3000);

    // Allow auth to signal completion
    window.addEventListener('auth-ready', this.handleAuthReady);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    window.removeEventListener('auth-ready', this.handleAuthReady);
  }

  handleAuthReady = () => {
    const elapsed = Date.now() - this.mountTime;
    console.log(`[AuthLoadingBoundary] Auth ready signal received (${elapsed}ms)`);
    this.setState({ isLoading: false });
  };

  handleRetry = () => {
    console.log('[AuthLoadingBoundary] User requested retry - reloading page');
    window.location.reload();
  };

  render() {
    const { hasError, isLoading, timedOut, error } = this.state;
    const elapsed = Date.now() - this.mountTime;

    // Fatal error state
    if (hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="text-center max-w-md space-y-4">
            <AlertTriangle className="h-12 w-12 mx-auto text-destructive" />
            <h2 className="text-xl font-semibold text-foreground">
              Authentication Error
            </h2>
            <p className="text-muted-foreground">
              Unable to initialize authentication system. This may be a temporary issue.
            </p>
            {process.env.NODE_ENV === 'development' && error && (
              <details className="mt-4 text-left text-xs bg-muted p-3 rounded">
                <summary className="cursor-pointer font-medium">Error Details</summary>
                <pre className="mt-2 text-destructive whitespace-pre-wrap">
                  {error.message}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleRetry}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    // Timeout state - allow offline mode
    if (timedOut) {
      console.log('[AuthLoadingBoundary] Rendering timeout fallback - offline mode');
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="text-center max-w-md space-y-4">
            <WifiOff className="h-12 w-12 mx-auto text-muted-foreground" />
            <h2 className="text-xl font-semibold text-foreground">
              Connection Timeout
            </h2>
            <p className="text-muted-foreground">
              Unable to connect to authentication service. You can continue in limited mode or try again.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Try Again
              </button>
              <button
                onClick={() => {
                  console.log('[AuthLoadingBoundary] User chose offline mode');
                  this.setState({ timedOut: false, isLoading: false });
                }}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
              >
                Continue Offline
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Loading state with progress indicator
    if (isLoading && elapsed > 3000) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 mx-auto animate-spin text-primary" />
            <p className="text-muted-foreground">
              Connecting to authentication service...
            </p>
            <p className="text-sm text-muted-foreground">
              This is taking longer than usual. Please wait.
            </p>
          </div>
        </div>
      );
    }

    // Normal render - auth loaded successfully
    return this.props.children;
  }
}
