import { supabase } from '@/integrations/supabase/client';

interface SecurityEvent {
  action: string;
  details?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

export const logEnhancedSecurityEvent = async (event: SecurityEvent): Promise<void> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    // Get user agent and attempt to detect environment
    const userAgent = navigator.userAgent;
    
    // Enhanced logging with more context
    await supabase.from('audit_logs').insert({
      user_id: user?.id || null,
      action: `ENHANCED_${event.action}`,
      table_name: 'security_audit',
      new_values: {
        ...event.details,
        userAgent,
        timestamp: new Date().toISOString(),
        sessionId: crypto.randomUUID(),
        securityContext: {
          isSecure: window.isSecureContext,
          protocol: window.location.protocol,
          origin: window.location.origin
        }
      }
    });
  } catch (error) {
    console.error('Failed to log security event:', error);
  }
};

export const detectSuspiciousActivity = (input: string): boolean => {
  const suspiciousPatterns = [
    /script[^>]*>/i,
    /<\s*iframe/i,
    /javascript:/i,
    /vbscript:/i,
    /data:text\/html/i,
    /on\w+\s*=/i,
    /eval\s*\(/i,
    /document\.write/i,
    /window\.location/i
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(input));
};

export const enhancedInputSanitization = (input: string): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  // Remove potentially harmful characters
  return input
    .trim()
    .replace(/[<>\"'&]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

export const validateSecureContext = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  return (
    window.isSecureContext ||
    window.location.protocol === 'https:' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname.includes('lovableproject.com')
  );
};