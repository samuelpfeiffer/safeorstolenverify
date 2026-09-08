import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { FREE_SEARCH_LIMIT } from '@/features/pricing/constants';

export const QuickStatsCard = () => {
  const { user } = useAuth();

  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats', user?.id],
    queryFn: async () => {
      if (!user) return null;

      // Get verification count
      const { count: verificationCount } = await supabase
        .from('verification_searches')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);

      // Get profile data for searches and trial info
      const { data: profile } = await supabase
        .from('profiles')
        .select('search_count, created_at, subscription_tier')
        .eq('id', user.id)
        .single();

      // Calculate days since signup
      const daysSinceSignup = profile?.created_at
        ? Math.floor((Date.now() - new Date(profile.created_at).getTime()) / (1000 * 60 * 60 * 24))
        : 0;

      // Calculate remaining trial days (14-day trial)
      const trialDaysRemaining = Math.max(0, 14 - daysSinceSignup);

      return {
        totalVerifications: verificationCount || 0,
        searchesUsed: profile?.search_count || 0,
        daysSinceSignup,
        trialDaysRemaining,
        isSubscribed: !!profile?.subscription_tier && profile.subscription_tier !== 'starter'
      };
    },
    enabled: !!user,
  });

  if (isLoading || !stats) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded-[0.25rem] mb-2"></div>
                <div className="h-6 bg-muted rounded-[0.25rem]"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const statItems = [
    {
      label: 'Total Verifications',
      value: stats.totalVerifications,
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      label: 'Searches Used',
      value: stats.isSubscribed ? '∞' : `${stats.searchesUsed}/${FREE_SEARCH_LIMIT}`,
      icon: Shield,
      color: 'text-blue-500',
    },
    {
      label: 'Member Since',
      value: `${stats.daysSinceSignup} days`,
      icon: Clock,
      color: 'text-purple-500',
    },
    {
      label: stats.isSubscribed ? 'Status' : 'Trial Days Left',
      value: stats.isSubscribed ? 'Premium' : stats.trialDaysRemaining,
      icon: TrendingUp,
      color: 'text-sos-lime',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statItems.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
