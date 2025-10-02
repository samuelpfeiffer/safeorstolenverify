import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Bot, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  aiAnalysis: string | null;
  isAnalyzing: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      aiAnalysis: null,
      isAnalyzing: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });
    this.getAIAnalysis(error, errorInfo);
  }

  async getAIAnalysis(error: Error, errorInfo: ErrorInfo) {
    this.setState({ isAnalyzing: true });

    try {
      const { data } = await supabase.functions.invoke('ai-error-handler', {
        body: {
          error: {
            message: error.message,
            stack: error.stack,
            name: error.name,
          },
          context: {
            componentStack: errorInfo.componentStack,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
          },
        },
      });

      if (data?.analysis) {
        this.setState({ aiAnalysis: data.analysis });
      }
    } catch (err) {
      console.error('Failed to get AI analysis:', err);
    } finally {
      this.setState({ isAnalyzing: false });
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      aiAnalysis: null,
      isAnalyzing: false,
    });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
          <Card className="max-w-2xl w-full p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h1 className="text-2xl font-bold">Something went wrong</h1>
            </div>

            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-mono text-sm text-destructive">
                  {this.state.error?.message}
                </p>
              </div>

              {this.state.isAnalyzing && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bot className="h-5 w-5 animate-pulse" />
                  <p>AI is analyzing this error...</p>
                </div>
              )}

              {this.state.aiAnalysis && (
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Bot className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">AI Analysis</h3>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <p className="whitespace-pre-wrap text-sm">{this.state.aiAnalysis}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button onClick={this.handleReset} className="flex-1">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reload Page
                </Button>
              </div>

              <details className="text-xs">
                <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                  Technical Details
                </summary>
                <pre className="mt-2 p-3 bg-muted rounded overflow-auto text-xs">
                  {this.state.error?.stack}
                </pre>
              </details>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
