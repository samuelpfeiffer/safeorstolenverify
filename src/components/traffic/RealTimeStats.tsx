import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

/**
 * RealTimeStats - Displays REAL stats from database
 * Database queries deferred by 3 seconds to improve LCP/FCP
 */
export const RealTimeStats = () => {
  const [stats, setStats] = useState({
    totalChecks: 0,
    totalUsers: 0,
    isLoading: true
  });

  useEffect(() => {
    // Defer database query by 3 seconds to not block initial render/LCP
    const timer = setTimeout(async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) { setStats(prev => ({ ...prev, isLoading: false })); return; }
        // Get REAL total verifications only
        const { count: totalChecks } = await supabase
          .from('verification_results')
          .select('*', { count: 'exact', head: true });
        
        // Get REAL user count
        const { count: totalUsers } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });
        
        setStats({
          totalChecks: totalChecks || 0,
          totalUsers: totalUsers || 0,
          isLoading: false
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats(prev => ({ ...prev, isLoading: false }));
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-bold text-center mb-2">
        Join Our Growing Community
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Real numbers. Real protection. Growing daily.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-4 text-center border">
          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
          <div className="text-2xl md:text-3xl font-bold text-foreground">
            {stats.isLoading ? '...' : stats.totalChecks.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">Verifications</div>
        </div>
        
        <div className="bg-card rounded-xl p-4 text-center border">
          <Users className="h-8 w-8 mx-auto mb-2 text-green-500" />
          <div className="text-2xl md:text-3xl font-bold text-foreground">
            {stats.isLoading ? '...' : stats.totalUsers.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">Users</div>
        </div>
        
        <div className="bg-card rounded-xl p-4 text-center border">
          <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
          <div className="text-2xl md:text-3xl font-bold text-foreground">
            3 sec
          </div>
          <div className="text-sm text-muted-foreground">Verification Speed</div>
        </div>
        
        <div className="bg-card rounded-xl p-4 text-center border">
          <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
          <div className="text-2xl md:text-3xl font-bold text-foreground">
            FREE
          </div>
          <div className="text-sm text-muted-foreground">2 Trial Checks</div>
        </div>
      </div>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        New platform, growing fast. Be an early adopter!
      </p>
    </div>
  );
};
