import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Calendar, CreditCard, ArrowUpRight, Zap } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from '@/lib/router-compat';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';
import { FREE_SEARCH_LIMIT } from '@/features/pricing/constants';

export const SubscriptionStatusCard = () => {
  const { user, session } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: subscription, isLoading } = useQuery({
    queryKey: ['subscription-status', user?.id],
    queryFn: async () => {
      if (!user) return null;

      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_tier, subscription_end, search_count, verifications_used_this_month, created_at')
        .eq('id', user.id)
        .single();

      const paidTiers = ['unlimited', 'starter', 'personal', 'professional', 'enterprise'];
      const isPaid = profile?.subscription_tier && paidTiers.includes(profile.subscription_tier);
      const hasActiveSubscription = isPaid && 
        (!profile?.subscription_end || new Date(profile.subscription_end) > new Date());

      const searchesUsed = profile?.search_count || 0;
      const remainingFreeSearches = Math.max(0, FREE_SEARCH_LIMIT - searchesUsed);

      return {
        tier: hasActiveSubscription ? (profile?.subscription_tier || 'free') : 'free',
        isSubscribed: hasActiveSubscription || false,
        subscriptionEndDate: profile?.subscription_end,
        searchesUsed,
        remainingFreeSearches,
        monthlyUsage: profile?.verifications_used_this_month || 0
      };
    },
    enabled: !!user,
  });

  const handleManageBilling = async () => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to manage your billing.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error opening customer portal:', error);
      toast({
        title: "Error",
        description: "Failed to open billing portal. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading || !subscription) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Subscription Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-3">
            <div className="h-6 bg-muted rounded-[0.25rem] w-1/2"></div>
            <div className="h-4 bg-muted rounded-[0.25rem] w-3/4"></div>
            <div className="h-10 bg-muted rounded-[0.25rem]"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getTierDisplay = (tier: string) => {
    const tierMap: Record<string, { name: string; color: string }> = {
      free: { name: 'Free', color: 'bg-muted text-muted-foreground border-border' },
      unlimited: { name: 'Unlimited', color: 'bg-sos-lime/10 text-sos-lime border-sos-lime/20' },
      starter: { name: 'Starter', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
      personal: { name: 'Personal', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
      professional: { name: 'Professional', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
      enterprise: { name: 'Enterprise', color: 'bg-sos-orange/10 text-sos-orange border-sos-orange/20' },
    };
    return tierMap[tier] || tierMap.free;
  };

  const tierDisplay = getTierDisplay(subscription.tier);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Crown className="w-5 h-5 text-sos-lime" />
              Subscription Status
            </CardTitle>
          </div>
          <Badge className={tierDisplay.color}>
            {tierDisplay.name}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {subscription.isSubscribed ? (
          <>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-500">Active</span>
              </div>
              {subscription.tier === 'unlimited' && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    This Month
                  </span>
                  <span className="font-medium">
                    {subscription.monthlyUsage} checks used
                  </span>
                </div>
              )}
              {subscription.subscriptionEndDate && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Renews
                  </span>
                  <span className="font-medium">
                    {formatDistanceToNow(new Date(subscription.subscriptionEndDate), { addSuffix: true })}
                  </span>
                </div>
              )}
            </div>
            <CardDescription className="text-sm">
              {subscription.tier === 'unlimited' 
                ? 'Unlimited verifications for phones, cars, laptops, and more.'
                : 'Your subscription is active.'}
            </CardDescription>
            <div className="flex gap-2">
              <Button
                onClick={handleManageBilling}
                className="flex-1"
                variant="outline"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Manage Billing
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Free Checks</span>
                <span className="font-medium">
                  {subscription.remainingFreeSearches} of {FREE_SEARCH_LIMIT} remaining
                </span>
              </div>
            </div>
            <CardDescription className="text-sm">
              {subscription.remainingFreeSearches > 0
                ? `You have ${subscription.remainingFreeSearches} free verification${subscription.remainingFreeSearches > 1 ? 's' : ''} remaining.`
                : "You've used your 2 free checks. Upgrade for unlimited verifications."}
            </CardDescription>
            <Button
              onClick={() => navigate('/pricing')}
              className="w-full bg-gradient-to-r from-sos-lime to-sos-orange text-black hover:opacity-90"
            >
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Unlock Unlimited — $14.99/mo
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};
