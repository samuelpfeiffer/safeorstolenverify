/**
 * Authentication Health Check System
 * Validates auth configuration and prevents login failures
 */

import { supabase } from '@/integrations/supabase/client';

export interface AuthHealthIssue {
  severity: 'critical' | 'warning' | 'info';
  component: string;
  message: string;
  fix?: string;
}

export interface AuthHealthResult {
  healthy: boolean;
  issues: AuthHealthIssue[];
  sessionValid: boolean;
  timestamp: number;
}

/**
 * Validates authentication system health
 */
export const checkAuthHealth = async (): Promise<AuthHealthResult> => {
  const issues: AuthHealthIssue[] = [];
  let sessionValid = false;

  // Check 1: Verify Supabase client is initialized
  if (!supabase) {
    issues.push({
      severity: 'critical',
      component: 'Initialization',
      message: 'Supabase client not initialized',
      fix: 'Check supabase/client.ts configuration'
    });
    return { healthy: false, issues, sessionValid: false, timestamp: Date.now() };
  }

  // Check 2: Test session retrieval
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      issues.push({
        severity: 'critical',
        component: 'Session',
        message: `Session check failed: ${error.message}`,
        fix: 'Check Supabase connection and auth configuration'
      });
    } else {
      sessionValid = !!session;
    }
  } catch (error) {
    issues.push({
      severity: 'critical',
      component: 'Network',
      message: 'Cannot connect to Supabase auth service',
      fix: 'Check network connectivity and Supabase status'
    });
  }

  // Check 3: Verify auth state listener
  const hasAuthListener = typeof window !== 'undefined' && 
    (window as any).__authListenerActive === true;
  
  if (!hasAuthListener && import.meta.env.DEV) {
    issues.push({
      severity: 'warning',
      component: 'Listener',
      message: 'Auth state listener may not be active',
      fix: 'Ensure onAuthStateChange is properly set up'
    });
  }

  // Check 4: Validate redirect URLs
  const currentOrigin = window.location.origin;
  const isLocalhost = currentOrigin.includes('localhost');
  
  if (isLocalhost) {
    issues.push({
      severity: 'info',
      component: 'Redirect URLs',
      message: 'Running on localhost - ensure Supabase redirect URLs include localhost',
      fix: 'Add http://localhost:8080 to Supabase Auth > URL Configuration'
    });
  }

  // Check 5: Verify profiles table access (if user is logged in)
  if (sessionValid) {
    try {
      const { error } = await supabase.from('profiles').select('id').limit(1);
      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows, which is ok
        issues.push({
          severity: 'warning',
          component: 'Database',
          message: 'Cannot access profiles table',
          fix: 'Check RLS policies on profiles table'
        });
      }
    } catch (error) {
      // Non-critical, might not have profiles table
    }
  }

  return {
    healthy: issues.filter(i => i.severity === 'critical').length === 0,
    issues,
    sessionValid,
    timestamp: Date.now()
  };
};

/**
 * Monitor authentication events
 */
export const monitorAuthEvents = () => {
  const events: Array<{ type: string; timestamp: number; data?: any }> = [];
  
  return {
    trackLogin: (method: string) => events.push({ 
      type: 'login', 
      timestamp: Date.now(),
      data: { method }
    }),
    trackLogout: () => events.push({ 
      type: 'logout', 
      timestamp: Date.now() 
    }),
    trackSignup: (method: string) => events.push({ 
      type: 'signup', 
      timestamp: Date.now(),
      data: { method }
    }),
    trackAuthError: (error: string) => events.push({ 
      type: 'error', 
      timestamp: Date.now(),
      data: { error }
    }),
    getEvents: () => [...events],
    clear: () => events.length = 0
  };
};

/**
 * Validate auth configuration
 */
export const validateAuthConfig = (): AuthHealthIssue[] => {
  const issues: AuthHealthIssue[] = [];
  
  // Check for common misconfigurations
  const hasSupabaseUrl = !!import.meta.env.VITE_SUPABASE_URL;
  const hasSupabaseKey = !!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  
  if (!hasSupabaseUrl) {
    issues.push({
      severity: 'critical',
      component: 'Configuration',
      message: 'VITE_SUPABASE_URL is missing',
      fix: 'Add Supabase URL to environment variables'
    });
  }
  
  if (!hasSupabaseKey) {
    issues.push({
      severity: 'critical',
      component: 'Configuration',
      message: 'VITE_SUPABASE_ANON_KEY is missing',
      fix: 'Add Supabase anon key to environment variables'
    });
  }
  
  return issues;
};

/**
 * Log auth errors for debugging
 */
export const logAuthError = (error: any, context: string) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    context,
    error: error?.message || String(error),
    code: error?.code,
    status: error?.status
  };
  
  console.error('[Auth Error]', errorLog);
  
  // Store in sessionStorage for debugging
  try {
    const logs = JSON.parse(sessionStorage.getItem('auth_errors') || '[]');
    logs.push(errorLog);
    sessionStorage.setItem('auth_errors', JSON.stringify(logs.slice(-10)));
  } catch (e) {
    // Storage error, ignore
  }
  
  return errorLog;
};

/**
 * Mark auth listener as active (call from AuthProvider)
 */
export const markAuthListenerActive = () => {
  if (typeof window !== 'undefined') {
    (window as any).__authListenerActive = true;
  }
};
