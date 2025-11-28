import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { TrendingUp } from 'lucide-react';

export const LiveStatsCounter = () => {
  const [todayCount, setTodayCount] = useState(0);
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

        if (error) throw error;
        
        setTodayCount(count || 0);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setTodayCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayStats();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchTodayStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-sos-lime/10 backdrop-blur-sm border border-sos-lime/30 rounded-full px-4 py-2 text-sm animate-in fade-in">
      <TrendingUp className="w-4 h-4 text-sos-lime animate-pulse" />
      <span className="text-sos-light font-semibold">
        <span className="text-sos-lime">{todayCount}</span> items verified today
      </span>
    </div>
  );
};
