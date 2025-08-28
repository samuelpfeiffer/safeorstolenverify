import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SecurityStatus {
  isSecure: boolean;
  hasAdminRole: boolean;
  sessionValid: boolean;
  lastSecurityCheck: Date | null;
  securityWarnings: string[];
}

export const useEnhancedSecurity = () => {
  const { user, session } = useAuth();
  const { toast } = useToast();
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    isSecure: false,
    hasAdminRole: false,
    sessionValid: false,
    lastSecurityCheck: null,
    securityWarnings: []
  });
  const [isLoading, setIsLoading] = useState(true);

  const checkAdminRole = async (): Promise<boolean> => {
    if (!user) return false;
    
    try {
      const { data, error } = await supabase
        .rpc('is_admin_user');
      
      if (error) {
        console.error('Error checking admin role:', error);
        return false;
      }
      
      return data as boolean;
    } catch (error) {
      console.error('Admin role check failed:', error);
      return false;
    }
  };

  const validateSession = (): boolean => {
    if (!session || !session.expires_at) return false;
    
    const expiresAt = new Date(session.expires_at * 1000);
    const now = new Date();
    const timeUntilExpiry = expiresAt.getTime() - now.getTime();
    
    // Warn if session expires in less than 10 minutes
    if (timeUntilExpiry < 10 * 60 * 1000 && timeUntilExpiry > 0) {
      toast({
        title: "Session Expiring Soon",
        description: "Your session will expire soon. Please save your work.",
        variant: "destructive"
      });
    }
    
    return timeUntilExpiry > 0;
  };

  const checkSecureContext = (): boolean => {
    // Check if running in secure context (HTTPS)
    if (typeof window !== 'undefined') {
      return window.isSecureContext || 
             window.location.protocol === 'https:' || 
             window.location.hostname === 'localhost';
    }
    return true; // Assume secure in SSR
  };

  const performSecurityCheck = async () => {
    setIsLoading(true);
    const warnings: string[] = [];
    
    try {
      // Check secure context
      const isSecureContext = checkSecureContext();
      if (!isSecureContext) {
        warnings.push('Application not running in secure context (HTTPS required)');
      }
      
      // Check session validity
      const sessionValid = validateSession();
      if (!sessionValid && session) {
        warnings.push('Session expired or invalid');
      }
      
      // Check admin role if user is authenticated
      const hasAdminRole = user ? await checkAdminRole() : false;
      
      // Log security check
      if (user) {
        await supabase.from('audit_logs').insert({
          user_id: user.id,
          action: 'SECURITY_CHECK_PERFORMED',
          table_name: 'security',
          new_values: {
            secure_context: isSecureContext,
            session_valid: sessionValid,
            admin_role: hasAdminRole,
            warnings_count: warnings.length,
            timestamp: new Date().toISOString()
          }
        });
      }
      
      setSecurityStatus({
        isSecure: isSecureContext && (sessionValid || !session),
        hasAdminRole,
        sessionValid: sessionValid || !session,
        lastSecurityCheck: new Date(),
        securityWarnings: warnings
      });
      
    } catch (error) {
      console.error('Security check failed:', error);
      warnings.push('Security check failed - system may be compromised');
      
      setSecurityStatus(prev => ({
        ...prev,
        isSecure: false,
        securityWarnings: warnings,
        lastSecurityCheck: new Date()
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const logSecurityEvent = async (event: string, details?: Record<string, any>) => {
    if (!user) return;
    
    try {
      await supabase.from('audit_logs').insert({
        user_id: user.id,
        action: `SECURITY_EVENT_${event.toUpperCase()}`,
        table_name: 'security',
        new_values: {
          event_type: event,
          details: details || {},
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          ip_address: null // Would need server-side detection
        }
      });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  };

  // Perform security check on mount and when user changes
  useEffect(() => {
    performSecurityCheck();
  }, [user, session]);

  // Set up periodic security checks every 5 minutes
  useEffect(() => {
    const interval = setInterval(performSecurityCheck, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    securityStatus,
    isLoading,
    checkAdminRole,
    performSecurityCheck,
    logSecurityEvent,
    validateSession
  };
};