import { SecureLogger } from './secureLogging';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

const rateLimitConfigs: Record<string, RateLimitConfig> = {
  verification: { maxAttempts: 10, windowMs: 60000 }, // 10 attempts per minute
  authentication: { maxAttempts: 5, windowMs: 300000 }, // 5 attempts per 5 minutes
};

// Critical operations that must fail closed (deny on error)
const CRITICAL_OPERATIONS = ['verification', 'authentication', 'payment'];

export const checkRateLimit = async (
  action: string, 
  userId?: string, 
  ipAddress?: string
): Promise<{ allowed: boolean; reason?: string }> => {
  try {
    const config = rateLimitConfigs[action];
    if (!config) return { allowed: true };

    const { supabase } = await import('@/integrations/supabase/client');
    const identifier = userId || `ip_${ipAddress || 'unknown'}`;
    
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
      
      // FAIL CLOSED for critical operations
      if (CRITICAL_OPERATIONS.includes(action)) {
        return { 
          allowed: false, 
          reason: 'Service temporarily unavailable. Please try again in a moment.' 
        };
      }
      
      // Fail open for non-critical operations
      return { allowed: true };
    }
    
    if (data && typeof data === 'object' && 'allowed' in data) {
      const result = data as any;
      
      if (!result.allowed && result.limit_exceeded) {
        await SecureLogger.auditLog('warn', 'Rate limit exceeded', {
          component: 'rate_limiting',
          action: action
        });
        
        return {
          allowed: false,
          reason: 'Too many requests. Please wait a moment and try again.'
        };
      }
      
      return { allowed: result.allowed === true };
    }
    
    // If data structure is unexpected, fail closed for critical operations
    if (CRITICAL_OPERATIONS.includes(action)) {
      return { 
        allowed: false, 
        reason: 'Unable to verify rate limit. Please try again.' 
      };
    }
    
    return { allowed: true };
  } catch (error) {
    await SecureLogger.auditLog('error', 'Rate limiting check exception', {
      component: 'rate_limiting',
      action: action
    });
    
    // FAIL CLOSED for critical operations
    if (CRITICAL_OPERATIONS.includes(action)) {
      return { 
        allowed: false, 
        reason: 'Service temporarily unavailable. Please try again later.' 
      };
    }
    
    // Fail open for non-critical operations
    return { allowed: true };
  }
};
