import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class SafeComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('SafeComponent caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 text-center">
          <div className="text-destructive">Something went wrong</div>
          <button 
            onClick={() => this.setState({ hasError: false, error: undefined })}
            className="mt-2 text-sm text-muted-foreground hover:text-foreground underline"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export const withSafeComponent = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  return (props: P) => (
    <SafeComponent fallback={fallback}>
      <WrappedComponent {...props} />
    </SafeComponent>
  );
};