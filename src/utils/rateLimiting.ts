
interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

const rateLimitConfigs: Record<string, RateLimitConfig> = {
  verification: { maxAttempts: 10, windowMs: 60000 }, // 10 attempts per minute
  authentication: { maxAttempts: 5, windowMs: 300000 }, // 5 attempts per 5 minutes
};

export const checkRateLimit = async (action: string, userId?: string): Promise<boolean> => {
  try {
    const config = rateLimitConfigs[action];
    if (!config) return true; // No rate limit configured

    // Use database-based rate limiting for authenticated users
    if (userId) {
      try {
        const { supabase } = await import('@/integrations/supabase/client');
        const { data, error } = await supabase.rpc('check_secure_rate_limit', {
          user_identifier: userId,
          action_type: action,
          max_requests: config.maxAttempts,
          window_minutes: Math.ceil(config.windowMs / 60000)
        });
        
        if (error) {
          console.error('Database rate limit check failed:', error);
          // Fall back to localStorage
        } else if (data && typeof data === 'object' && 'allowed' in data) {
          return (data as any).allowed === true;
        }
      } catch (dbError) {
        console.error('Database rate limit error:', dbError);
        // Fall back to localStorage
      }
    }

    // Fallback to localStorage-based rate limiting
    const key = `rate_limit_${action}_${userId || 'anon'}`;
    const now = Date.now();
    
    const storedData = localStorage.getItem(key);
    let attempts: number[] = storedData ? JSON.parse(storedData) : [];
    
    // Filter out attempts outside the time window
    attempts = attempts.filter(timestamp => now - timestamp < config.windowMs);
    
    // Check if we've exceeded the limit
    if (attempts.length >= config.maxAttempts) {
      console.warn(`Rate limit exceeded for action: ${action}`);
      return false;
    }
    
    // Add current attempt
    attempts.push(now);
    localStorage.setItem(key, JSON.stringify(attempts));
    
    return true;
  } catch (error) {
    console.error('Rate limiting check failed:', error);
    return true; // Fail open - allow the request
  }
};
