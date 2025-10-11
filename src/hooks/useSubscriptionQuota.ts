import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { SubscriptionTierKey } from '@/utils/pricing';

interface QuotaStatus {
  tier: SubscriptionTierKey;
  monthlyLimit: number | 'unlimited';
  used: number;
  remaining: number | 'unlimited';
  isUnlimited: boolean;
  overageRate: number | null;
  canPerformCheck: boolean;
  needsPayment: boolean;
}

export const useSubscriptionQuota = () => {
  const { user } = useAuth();
  const [quota, setQuota] = useState<QuotaStatus>({
    tier: 'free',
    monthlyLimit: 2,
    used: 0,
    remaining: 2,
    isUnlimited: false,
    overageRate: null,
    canPerformCheck: true,
    needsPayment: false
  });
  const [isLoading, setIsLoading] = useState(true);

  const checkQuotaStatus = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('subscription_tier, monthly_verification_limit, verifications_used_this_month, trial_end_date')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      const tier = (profile.subscription_tier || 'free') as SubscriptionTierKey;
      const limit = profile.monthly_verification_limit;
      const used = profile.verifications_used_this_month || 0;
      const isUnlimited = ['professional', 'enterprise'].includes(tier);

      let canPerformCheck = true;
      let needsPayment = false;

      // Check trial expiration for free tier
      if (tier === 'free') {
        const trialExpired = new Date() > new Date(profile.trial_end_date);
        const checksExhausted = used >= 2;
        canPerformCheck = !trialExpired && !checksExhausted;
      }

      // Check if over quota for limited tiers
      if (['starter', 'personal'].includes(tier) && used >= limit) {
        needsPayment = true; // Will need to pay overage
      }

      // Pay-per-use always needs payment
      if (tier === 'payPerUse') {
        needsPayment = true;
      }

      setQuota({
        tier,
        monthlyLimit: isUnlimited ? 'unlimited' : limit,
        used,
        remaining: isUnlimited ? 'unlimited' : Math.max(0, limit - used),
        isUnlimited,
        overageRate: tier === 'starter' ? 0.50 : tier === 'personal' ? 0.40 : null,
        canPerformCheck,
        needsPayment
      });
    } catch (error) {
      console.error('Error fetching quota status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkQuotaStatus();
  }, [user]);

  return { 
    quota, 
    isLoading,
    refreshQuota: checkQuotaStatus 
  };
};
