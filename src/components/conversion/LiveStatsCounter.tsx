import { TrendingUp } from 'lucide-react';

/**
 * Simple trust badge - no database calls to avoid 401 errors
 * Shows honest early-stage messaging
 */
export const LiveStatsCounter = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm animate-in fade-in">
      <TrendingUp className="w-4 h-4 text-primary" />
      <span className="text-foreground font-semibold">
        Verified & Growing
      </span>
    </div>
  );
};
