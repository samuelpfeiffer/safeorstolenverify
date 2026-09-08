
import { supabase } from '@/integrations/supabase/client';

interface SecurityAuditEvent {
  action: string;
  table_name: string;
  record_id?: string;
  old_values?: any;
  new_values?: any;
  ip_address?: string;
  user_agent?: string;
}

export const logSecurityEvent = async (event: SecurityAuditEvent) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    // Get client info for audit trail
    const userAgent = navigator.userAgent;
    const ipAddress = await fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => data.ip)
      .catch(() => 'unknown');

    await supabase
      .from('audit_logs')
      .insert({
        user_id: user?.id || null,
        action: event.action,
        table_name: event.table_name,
        record_id: event.record_id,
        old_values: event.old_values,
        new_values: event.new_values,
        ip_address: ipAddress,
        user_agent: userAgent,
      });

    console.log('Security event logged:', event.action);
  } catch (error) {
    console.error('Failed to log security event:', error);
    // Don't throw - audit logging shouldn't break user experience
  }
};

export const validateSecureContext = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  const isSecure = window.location.protocol === 'https:' || 
                  window.location.hostname === 'localhost' ||
                  window.location.hostname.includes('lovableproject.com') ||
                  window.isSecureContext;

  if (!isSecure) {
    console.warn('Security Warning: Application not running in secure context');
  }

  return isSecure;
};

export const checkRateLimiting = async (action: string): Promise<boolean> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { data, error } = await supabase
      .from('rate_limits')
      .select('count, window_start')
      .eq('user_id', user.id)
      .eq('action', action)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Rate limit check error:', error);
      return false;
    }

    if (!data) return true; // No previous limits, allow

    const windowStart = new Date(data.window_start ?? 0);
    const now = new Date();
    const hoursSinceWindow = (now.getTime() - windowStart.getTime()) / (1000 * 60 * 60);

    // Reset window if more than 1 hour old
    if (hoursSinceWindow >= 1) {
      await supabase
        .from('rate_limits')
        .update({
          count: 1,
          window_start: now.toISOString(),
        })
        .eq('user_id', user.id)
        .eq('action', action);
      return true;
    }

    // Check if under limit (example: 10 requests per hour for verifications)
    const limit = action === 'verification' ? 10 : 50;
    if (data.count >= limit) {
      console.warn(`Rate limit exceeded for action: ${action}`);
      return false;
    }

    // Increment counter
    await supabase
      .from('rate_limits')
      .update({ count: data.count + 1 })
      .eq('user_id', user.id)
      .eq('action', action);

    return true;
  } catch (error) {
    console.error('Rate limiting error:', error);
    return true; // Allow on error to prevent blocking users
  }
};
