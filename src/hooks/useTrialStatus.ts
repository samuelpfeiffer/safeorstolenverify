import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';

export interface TrialStatus {
  isTrialActive: boolean;
  isTrialExpired: boolean;
  daysRemaining: number;
  hoursRemaining: number;
  checksRemaining: number;
  checksUsed: number;
  expiresAt: Date | null;
  createdAt: Date | null;
}

const TRIAL_DURATION_DAYS = 14;
const TRIAL_CHECK_LIMIT = 999; // Unlimited checks during trial

export const useTrialStatus = () => {
  const { user } = useAuth();
  const [trialStatus, setTrialStatus] = useState<TrialStatus>({
    isTrialActive: false,
    isTrialExpired: false,
    daysRemaining: 0,
    hoursRemaining: 0,
    checksRemaining: 0,
    checksUsed: 0,
    expiresAt: null,
    createdAt: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      checkTrialStatus();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const checkTrialStatus = async () => {
    if (!user) return;

    try {
      setIsLoading(true);

      // Check if user is subscribed
      const { data: subscription } = await supabase
        .from('subscribers')
        .select('subscribed')
        .eq('user_id', user.id)
        .single();

      if (subscription?.subscribed) {
        // No trial needed for subscribers
        setTrialStatus({
          isTrialActive: false,
          isTrialExpired: false,
          daysRemaining: 0,
          hoursRemaining: 0,
          checksRemaining: 999,
          checksUsed: 0,
          expiresAt: null,
          createdAt: null,
        });
        return;
      }

      // Get user profile with created_at
      const { data: profile } = await supabase
        .from('profiles')
        .select('created_at')
        .eq('id', user.id)
        .single();

      if (!profile?.created_at) {
        setTrialStatus({
          isTrialActive: false,
          isTrialExpired: false,
          daysRemaining: 0,
          hoursRemaining: 0,
          checksRemaining: 0,
          checksUsed: 0,
          expiresAt: null,
          createdAt: null,
        });
        return;
      }

      const createdAt = new Date(profile.created_at);
      const expiresAt = new Date(createdAt);
      expiresAt.setDate(expiresAt.getDate() + TRIAL_DURATION_DAYS);
      
      const now = new Date();
      const timeRemaining = expiresAt.getTime() - now.getTime();
      const isExpired = timeRemaining <= 0;
      
      const daysRemaining = Math.max(0, Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      const hoursRemaining = Math.max(0, Math.floor(timeRemaining / (1000 * 60 * 60)));

      // Get verification count
      const { count } = await supabase
        .from('verification_results')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);

      const checksUsed = count || 0;
      const checksRemaining = Math.max(0, TRIAL_CHECK_LIMIT - checksUsed);

      setTrialStatus({
    isTrialActive: !isExpired, // Trial only expires after 14 days, not when checks used
    isTrialExpired: isExpired, // Time-based only
        daysRemaining,
        hoursRemaining,
        checksRemaining,
        checksUsed,
        expiresAt,
        createdAt,
      });

    } catch (error) {
      console.error('Error checking trial status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    ...trialStatus,
    isLoading,
    refreshStatus: checkTrialStatus,
  };
};
