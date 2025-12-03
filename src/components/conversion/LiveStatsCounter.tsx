import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { TrendingUp } from 'lucide-react';

export const LiveStatsCounter = () => {
  const [todayCount, setTodayCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodayStats = async () => {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const { count, error } = await supabase
          .from('verification_searches')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', today.toISOString());

        if (error) {
          // RLS may block anonymous users - show generic message instead
          setTodayCount(null);
          return;
        }
        
        setTodayCount(count || 0);
      } catch (error) {
        // Silently fail - don't spam console
        setTodayCount(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayStats();
    
    // Refresh every 60 seconds (reduced frequency)
    const interval = setInterval(fetchTodayStats, 60000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return null;

  // If we couldn't get stats, show generic trust message
  if (todayCount === null) {
    return (
      <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm animate-in fade-in">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="text-foreground font-semibold">
          Growing daily
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm animate-in fade-in">
      <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
      <span className="text-foreground font-semibold">
        <span className="text-primary">{todayCount}</span> items verified today
      </span>
    </div>
  );
};
