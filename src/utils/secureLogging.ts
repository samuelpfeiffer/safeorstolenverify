type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  component?: string;
  action?: string;
  userId?: string;
}

/**
 * Secure logging that doesn't expose sensitive data in browser console
 */
export class SecureLogger {
  private static isDevelopment = import.meta.env.DEV;
  
  /**
   * Log to server-side audit system (safe)
   */
  static async auditLog(
    level: LogLevel,
    message: string,
    context?: LogContext
  ): Promise<void> {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      await supabase.from('audit_logs').insert([{
        action: `LOG_${level.toUpperCase()}`,
        table_name: context?.component || 'system',
        new_values: {
          message: message,
          level: level,
          component: context?.component,
          action_context: context?.action,
          timestamp: new Date().toISOString()
        } as any
      }]);
    } catch (error) {
      // Fail silently - don't log logging errors
    }
  }
  
  /**
   * Safe client-side logging (development only, sanitized in production)
   */
  static clientLog(
    level: LogLevel,
    message: string,
    data?: any
  ): void {
    if (this.isDevelopment) {
      const consoleFn = console[level] || console.log;
      consoleFn(`[${level.toUpperCase()}] ${message}`, data);
    } else {
      // In production, only log generic error messages
      if (level === 'error') {
        console.error('An error occurred. Please contact support if this persists.');
      }
    }
  }
  
  /**
   * Sanitize sensitive data from objects
   */
  static sanitize(data: any): any {
    if (typeof data !== 'object' || data === null) {
      return data;
    }
    
    const sensitiveKeys = [
      'password', 'token', 'api_key', 'secret', 'user_id',
      'email', 'serial_number', 'imei', 'ssn', 'credit_card'
    ];
    
    const sanitized = Array.isArray(data) ? [...data] : { ...data };
    
    for (const key in sanitized) {
      if (sensitiveKeys.some(sk => key.toLowerCase().includes(sk))) {
        sanitized[key] = '[REDACTED]';
      } else if (typeof sanitized[key] === 'object') {
        sanitized[key] = this.sanitize(sanitized[key]);
      }
    }
    
    return sanitized;
  }
}

// Convenience exports
export const logError = (message: string, context?: LogContext) => 
  SecureLogger.auditLog('error', message, context);

export const logWarning = (message: string, context?: LogContext) => 
  SecureLogger.auditLog('warn', message, context);

export const logInfo = (message: string, context?: LogContext) => 
  SecureLogger.auditLog('info', message, context);
