import { supabase } from '@/integrations/supabase/client';
import { logEnhancedSecurityEvent } from './enhancedSecurityAudit';

interface SecurityAlert {
  type: 'suspicious_activity' | 'rate_limit_exceeded' | 'invalid_input' | 'authentication_failure';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  metadata?: Record<string, any>;
}

export const triggerSecurityAlert = async (alert: SecurityAlert): Promise<void> => {
  try {
    // Log to audit system
    await logEnhancedSecurityEvent({
      action: 'SECURITY_ALERT',
      details: {
        alertType: alert.type,
        severity: alert.severity,
        message: alert.message,
        metadata: alert.metadata,
        timestamp: new Date().toISOString()
      }
    });

    // For high/critical alerts, also log to real-time alerts table
    if (alert.severity === 'high' || alert.severity === 'critical') {
      const { data: { user } } = await supabase.auth.getUser();
      
      await supabase.from('real_time_alerts').insert({
        user_id: user?.id,
        alert_type: alert.type,
        criteria: {
          severity: alert.severity,
          message: alert.message,
          metadata: alert.metadata
        }
      });
    }

    // In production, you might want to send notifications here
    if (alert.severity === 'critical') {
      console.error('CRITICAL SECURITY ALERT:', alert);
    }
  } catch (error) {
    console.error('Failed to trigger security alert:', error);
  }
};

export const monitorAuthenticationAttempts = (() => {
  const attempts = new Map<string, number>();
  const lastAttempt = new Map<string, number>();

  return async (identifier: string, success: boolean): Promise<void> => {
    const now = Date.now();
    const key = identifier.toLowerCase();
    
    if (!success) {
      const currentAttempts = attempts.get(key) || 0;
      const lastTime = lastAttempt.get(key) || 0;
      
      // Reset counter if more than 15 minutes have passed
      if (now - lastTime > 15 * 60 * 1000) {
        attempts.set(key, 1);
      } else {
        attempts.set(key, currentAttempts + 1);
      }
      
      lastAttempt.set(key, now);
      
      const totalAttempts = attempts.get(key) || 0;
      
      if (totalAttempts >= 5) {
        await triggerSecurityAlert({
          type: 'authentication_failure',
          severity: 'high',
          message: `Multiple failed authentication attempts detected for ${identifier}`,
          metadata: {
            identifier: key,
            attempts: totalAttempts,
            timeWindow: '15 minutes'
          }
        });
      }
    } else {
      // Clear failed attempts on successful login
      attempts.delete(key);
      lastAttempt.delete(key);
    }
  };
})();

export const validateInputPatterns = async (input: string, fieldName: string): Promise<boolean> => {
  const suspiciousPatterns = [
    /(<script|javascript:|data:text\/html|vbscript:|on\w+\s*=)/i,
    /(union\s+select|drop\s+table|delete\s+from|insert\s+into)/i,
    /(\bor\b.*=.*\bor\b|\band\b.*=.*\band\b)/i
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(input)) {
      await triggerSecurityAlert({
        type: 'suspicious_activity',
        severity: 'medium',
        message: `Suspicious input pattern detected in ${fieldName}`,
        metadata: {
          fieldName,
          inputLength: input.length,
          pattern: pattern.source
        }
      });
      return false;
    }
  }

  return true;
};

// Enhanced session monitoring
export const monitorSessionActivity = (() => {
  let lastActivity = Date.now();
  let warningShown = false;

  return {
    updateActivity: () => {
      lastActivity = Date.now();
      warningShown = false;
    },
    
    checkSessionTimeout: async (timeoutMinutes: number = 60): Promise<boolean> => {
      const now = Date.now();
      const timeSinceActivity = now - lastActivity;
      const timeoutMs = timeoutMinutes * 60 * 1000;
      
      // Warn at 5 minutes before timeout
      if (timeSinceActivity > timeoutMs - 5 * 60 * 1000 && !warningShown) {
        warningShown = true;
        await triggerSecurityAlert({
          type: 'suspicious_activity',
          severity: 'low',
          message: 'Session will expire soon due to inactivity',
          metadata: {
            minutesRemaining: 5,
            timeoutMinutes
          }
        });
        return false;
      }
      
      // Timeout reached
      if (timeSinceActivity > timeoutMs) {
        await triggerSecurityAlert({
          type: 'suspicious_activity',
          severity: 'medium',
          message: 'Session expired due to inactivity',
          metadata: {
            timeoutMinutes,
            lastActivity: new Date(lastActivity).toISOString()
          }
        });
        return true;
      }
      
      return false;
    }
  };
})();