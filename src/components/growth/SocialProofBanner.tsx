import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export const SocialProofBanner: React.FC = () => {
  const [recentVerifications, setRecentVerifications] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fetch real verification count from last 24 hours
    const fetchStats = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return; // RLS blocks anon
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        const { count } = await supabase
          .from('verification_searches')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', yesterday.toISOString());
        
        setRecentVerifications(count || 0);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
    
    // Show banner after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || recentVerifications === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 animate-in slide-in-from-left duration-500">
      <div className="flex items-center gap-3 rounded-lg bg-background/95 backdrop-blur border border-border px-4 py-3 shadow-lg">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
          <TrendingUp className="h-5 w-5 text-emerald-500" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">
            {recentVerifications} items verified today
          </p>
          <p className="text-xs text-muted-foreground">
            Join buyers protecting themselves
          </p>
        </div>
      </div>
    </div>
  );
};
