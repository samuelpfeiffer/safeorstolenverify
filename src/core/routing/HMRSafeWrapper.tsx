import React, { Component, ReactNode } from 'react';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

/**
 * HMR-Safe Wrapper Component
 * Catches React context errors during Hot Module Reload
 * and provides graceful fallback UI
 */
export class HMRSafeWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if this is a React HMR error
    if (
      error.message.includes('Cannot read properties of null') ||
      error.message.includes('reading \'useState\'') ||
      error.message.includes('reading \'useEffect\'') ||
      error.message.includes('reading \'useContext\'')
    ) {
      return {
        hasError: true,
        errorMessage: 'Loading...',
      };
    }

    return {
      hasError: true,
      errorMessage: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log HMR errors for debugging
    if (import.meta.env.DEV) {
      console.warn('HMR Error caught:', error.message);
      
      // Auto-recover from HMR errors after a short delay
      if (
        error.message.includes('Cannot read properties of null') ||
        error.message.includes('useState') ||
        error.message.includes('useEffect')
      ) {
        setTimeout(() => {
          this.setState({ hasError: false });
        }, 100);
      }
    } else {
      console.error('Component error:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // Show minimal loading screen for HMR errors
      if (
        this.state.errorMessage === 'Loading...' ||
        this.state.errorMessage.includes('Cannot read properties of null')
      ) {
        return <AppLoadingScreen />;
      }

      // Show error UI for other errors
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full bg-card rounded-lg border p-6 space-y-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Something went wrong</h2>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {this.state.errorMessage || 'An unexpected error occurred'}
            </p>
            
            <div className="flex gap-2">
              <Button onClick={this.handleReset} variant="outline" className="flex-1">
                Try Again
              </Button>
              <Button onClick={this.handleReload} className="flex-1">
                Reload Page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
