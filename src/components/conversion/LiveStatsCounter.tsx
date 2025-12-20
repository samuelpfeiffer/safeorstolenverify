import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

/**
 * Shows REAL stats from database - 100% honest, no fake numbers
 * Database query deferred by 3 seconds to improve LCP/FCP
 */
export const LiveStatsCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Defer database query by 3 seconds to not block initial render
    const timer = setTimeout(async () => {
      try {
        const { count: total } = await supabase
          .from('verification_results')
          .select('*', { count: 'exact', head: true });
        setCount(total || 0);
      } catch {
        setCount(null);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm animate-in fade-in">
      <TrendingUp className="w-4 h-4 text-primary" />
      <span className="text-foreground font-semibold">
        {count !== null ? `${count.toLocaleString()} Verified` : 'Free to Try'}
      </span>
    </div>
  );
};
