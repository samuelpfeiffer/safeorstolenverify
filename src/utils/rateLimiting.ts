import { SecureLogger } from './secureLogging';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

const rateLimitConfigs: Record<string, RateLimitConfig> = {
  verification: { maxAttempts: 10, windowMs: 60000 }, // 10 attempts per minute
  authentication: { maxAttempts: 5, windowMs: 300000 }, // 5 attempts per 5 minutes
};

export const checkRateLimit = async (action: string, userId?: string, ipAddress?: string): Promise<boolean> => {
  try {
    const config = rateLimitConfigs[action];
    if (!config) return true; // No rate limit configured

    // Always try database-based rate limiting first
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const identifier = userId || `anon_${ipAddress || 'unknown'}`;
      
      const { data, error } = await supabase.rpc('check_enhanced_rate_limit', {
        user_identifier: identifier,
        action_type: action,
        max_requests: config.maxAttempts,
        window_minutes: Math.ceil(config.windowMs / 60000),
        ip_address: ipAddress
      });
      
      if (error) {
        await SecureLogger.auditLog('error', 'Rate limit check failed', {
          component: 'rate_limiting',
          action: action
        });
        // Fall back to localStorage
      } else if (data && typeof data === 'object' && 'allowed' in data) {
        const result = data as any;
        if (!result.allowed && result.limit_exceeded) {
          await SecureLogger.auditLog('warn', 'Rate limit exceeded', {
            component: 'rate_limiting',
            action: action
          });
        }
        return result.allowed === true;
      }
    } catch (dbError) {
      await SecureLogger.auditLog('error', 'Database rate limit error', {
        component: 'rate_limiting',
        action: action
      });
      // Fall back to localStorage
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
      await SecureLogger.auditLog('warn', 'Rate limit exceeded (localStorage fallback)', {
        component: 'rate_limiting',
        action: action
      });
      return false;
    }
    
    // Add current attempt
    attempts.push(now);
    localStorage.setItem(key, JSON.stringify(attempts));
    
    return true;
  } catch (error) {
    SecureLogger.clientLog('error', 'Rate limiting check failed');
    return true; // Fail open - allow the request
  }
};
