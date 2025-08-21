import React, { useState, useEffect } from 'react';
import { Loader2, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface LoadingBoundaryProps {
  children: React.ReactNode;
  timeout?: number;
  fallback?: React.ReactNode;
  onTimeout?: () => void;
}

export const LoadingBoundary: React.FC<LoadingBoundaryProps> = ({
  children,
  timeout = 15000, // 15 seconds default
  fallback,
  onTimeout
}) => {
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasTimedOut(true);
      onTimeout?.();
    }, timeout);

    // Show children after a brief delay to prevent flash
    const showTimer = setTimeout(() => {
      setShowChildren(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(showTimer);
    };
  }, [timeout, onTimeout]);

  const handleRetry = () => {
    setHasTimedOut(false);
    setShowChildren(false);
    
    // Reset and try again
    setTimeout(() => {
      setShowChildren(true);
    }, 100);
  };

  if (hasTimedOut) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center space-y-4">
          <div className="flex items-center justify-center text-amber-600">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Page Loading Timeout</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The page is taking longer than expected to load.
            </p>
            <Button onClick={handleRetry} variant="outline">
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!showChildren) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-center space-y-4">
          <Loader2 className="h-6 w-6 animate-spin mx-auto text-primary" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};