import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ErrorFallbackProps {
  error?: string;
  onRetry?: () => void;
  title?: string;
  description?: string;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  onRetry,
  title = "Something went wrong",
  description = "Please try again or contact support if the problem persists."
}) => {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6 text-center space-y-4">
        <AlertTriangle className="h-8 w-8 mx-auto text-destructive" />
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {error || description}
          </p>
          {onRetry && (
            <Button onClick={onRetry} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};