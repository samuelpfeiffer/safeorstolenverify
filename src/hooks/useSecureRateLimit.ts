import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

interface RateLimitResult {
  allowed: boolean;
  remaining?: number;
  resetTime?: Date;
  limitExceeded?: boolean;
}

export const useSecureRateLimit = () => {
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();
  const { user } = useUnifiedAuth();

  const checkRateLimit = useCallback(async (
    actionType: string,
    maxRequests: number = 10,
    windowMinutes: number = 60
  ): Promise<RateLimitResult> => {
    if (!user) {
      return { allowed: false, limitExceeded: true };
    }

    setIsChecking(true);
    
    try {
      const { data, error } = await supabase.rpc('check_secure_rate_limit', {
        user_identifier: user.id,
        action_type: actionType,
        max_requests: maxRequests,
        window_minutes: windowMinutes
      });

      if (error) {
        console.error('Rate limit check failed:', error);
        // Fail open - allow the request but log the error
        return { allowed: true };
      }

      const result = (data as any) as RateLimitResult;
      
      if (result.limitExceeded) {
        toast({
          title: "Rate Limit Exceeded",
          description: `Too many requests. Please wait before trying again.`,
          variant: "destructive",
        });
      }

      return result;
    } catch (error) {
      console.error('Rate limiting error:', error);
      // Fail open for user experience
      return { allowed: true };
    } finally {
      setIsChecking(false);
    }
  }, [user, toast]);

  const checkVerificationLimit = useCallback(() => 
    checkRateLimit('verification', 10, 60), [checkRateLimit]);
    
  const checkSearchLimit = useCallback(() => 
    checkRateLimit('search_history', 50, 60), [checkRateLimit]);
    
  const checkProfileUpdateLimit = useCallback(() => 
    checkRateLimit('profile_update', 5, 60), [checkRateLimit]);

  return {
    checkRateLimit,
    checkVerificationLimit,
    checkSearchLimit,
    checkProfileUpdateLimit,
    isChecking
  };
};