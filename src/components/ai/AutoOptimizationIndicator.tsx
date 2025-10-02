import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Loader2 } from 'lucide-react';
import { useAutoOptimization } from '@/hooks/useAutoOptimization';

interface AutoOptimizationIndicatorProps {
  enabled?: boolean;
}

/**
 * Small indicator showing when AI is optimizing the site
 */
export const AutoOptimizationIndicator: React.FC<AutoOptimizationIndicatorProps> = ({ 
  enabled = false 
}) => {
  const { isOptimizing, lastOptimized } = useAutoOptimization({ enabled });

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Badge 
        variant={isOptimizing ? "default" : "secondary"}
        className="flex items-center gap-2 px-3 py-2 shadow-lg"
      >
        {isOptimizing ? (
          <>
            <Loader2 className="h-3 w-3 animate-spin" />
            <span className="text-xs">AI Optimizing...</span>
          </>
        ) : (
          <>
            <Sparkles className="h-3 w-3" />
            <span className="text-xs">AI Active</span>
          </>
        )}
      </Badge>
      
      {lastOptimized && !isOptimizing && (
        <p className="text-xs text-muted-foreground mt-1 text-right">
          Last: {lastOptimized.toLocaleTimeString()}
        </p>
      )}
    </div>
  );
};