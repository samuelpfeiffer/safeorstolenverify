import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Calendar, CreditCard, ArrowUpRight } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';

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
        .select('subscription_tier, created_at, trial_end_date')
        .eq('id', user.id)
        .single();

      const { data: subscriber } = await supabase
        .from('subscribers')
        .select('subscribed, subscription_end')
        .eq('user_id', user.id)
        .single();

      const trialDaysRemaining = profile?.created_at
        ? Math.max(0, 14 - Math.floor((Date.now() - new Date(profile.created_at).getTime()) / (1000 * 60 * 60 * 24)))
        : 0;

      return {
        tier: profile?.subscription_tier || 'starter',
        isSubscribed: subscriber?.subscribed || false,
        subscriptionEndDate: subscriber?.subscription_end,
        trialDaysRemaining,
        createdAt: profile?.created_at
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
            <div className="h-6 bg-muted rounded w-1/2"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-10 bg-muted rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getTierDisplay = (tier: string) => {
    const tierMap: Record<string, { name: string; color: string }> = {
      starter: { name: 'Free Trial', color: 'bg-gray-500/10 text-gray-500 border-gray-500/20' },
      personal: { name: 'Personal', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
      professional: { name: 'Professional', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
      enterprise: { name: 'Enterprise', color: 'bg-sos-lime/10 text-sos-lime border-sos-lime/20' },
    };
    return tierMap[tier] || tierMap.starter;
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
                <span className="text-muted-foreground">Trial Status</span>
                <span className="font-medium">
                  {subscription.trialDaysRemaining > 0 ? 'Active' : 'Expired'}
                </span>
              </div>
              {subscription.trialDaysRemaining > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Days Remaining
                  </span>
                  <span className="font-medium text-sos-lime">
                    {subscription.trialDaysRemaining} days
                  </span>
                </div>
              )}
            </div>
            <CardDescription className="text-sm">
              {subscription.trialDaysRemaining > 0
                ? '2 free verifications available during your trial period'
                : 'Your free trial has ended. Upgrade to continue verifying items.'}
            </CardDescription>
            <Button
              onClick={() => navigate('/pricing')}
              className="w-full"
            >
              <ArrowUpRight className="w-4 h-4 mr-2" />
              {subscription.trialDaysRemaining > 0 ? 'Upgrade Now' : 'View Plans'}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};
