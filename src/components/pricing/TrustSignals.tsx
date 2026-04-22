import { Shield, Lock, CreditCard, CheckCircle, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const TrustSignals = () => {
  const [stats, setStats] = useState({ users: 0, searches: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return; // RLS blocks anon for both tables
        // Get real user count
        const { count: userCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });
        
        // Get real search count
        const { data: searchData } = await supabase
          .from('verification_searches')
          .select('id', { count: 'exact', head: true });
        
        setStats({
          users: userCount || 0,
          searches: searchData?.length || 0
        });
      } catch (e) {
        // Silently fail, show nothing
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-6 px-4 bg-card/50 rounded-xl border border-border">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="w-4 h-4 text-sos-lime" />
        <span>256-bit SSL Encryption</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CreditCard className="w-4 h-4 text-sos-lime" />
        <span>Secure Stripe Payments</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-sos-lime" />
        <span>30-Day Money-Back Guarantee</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CheckCircle className="w-4 h-4 text-sos-lime" />
        <span>Cancel Anytime</span>
      </div>
      {stats.users > 10 && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4 text-sos-lime" />
          <span>{stats.users}+ Users</span>
        </div>
      )}
    </div>
  );
};
