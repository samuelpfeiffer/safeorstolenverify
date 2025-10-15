import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorCount: number;
}

/**
 * Route Error Recovery Component
 * Handles React context errors and HMR-related failures
 */
export class RouteErrorRecovery extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('RouteErrorRecovery caught an error:', error, errorInfo);
    
    const isContextError = error.message?.includes('useContext') || 
                          error.message?.includes('Cannot read properties of null') ||
                          error.message?.includes('reading \'useContext\'');
    
    // Auto-reload on first context error in development
    if (isContextError && this.state.errorCount === 0 && import.meta.env.DEV) {
      console.warn('React context error detected - triggering automatic reload...');
      this.setState({ errorCount: 1 });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  handleManualReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const isContextError = this.state.error?.message?.includes('useContext') || 
                            this.state.error?.message?.includes('Cannot read properties of null');

      // Show loading state briefly before auto-reload
      if (isContextError && this.state.errorCount === 0 && import.meta.env.DEV) {
        return (
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
              <p className="text-muted-foreground">Recovering from error...</p>
            </div>
          </div>
        );
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-6 text-center">
            <div className="flex justify-center">
              <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                {isContextError ? 'Page Loading Issue' : 'Something Went Wrong'}
              </h1>
              <p className="text-muted-foreground">
                {isContextError 
                  ? 'The page encountered a temporary issue during development. A quick reload should fix it.'
                  : 'An unexpected error occurred while loading this page.'}
              </p>
            </div>

            {this.state.error && import.meta.env.DEV && (
              <div className="bg-muted p-3 rounded-md text-left">
                <p className="text-xs font-mono text-muted-foreground break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={this.handleManualReload}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Reload Page
              </Button>
              <Button 
                onClick={this.handleGoHome}
                variant="outline"
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                Go to Home
              </Button>
            </div>

            {import.meta.env.DEV && (
              <p className="text-xs text-muted-foreground">
                Development mode: Clear cache (Ctrl+Shift+R) if the issue persists
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
