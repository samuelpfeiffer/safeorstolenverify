
import { useAuth } from '@/lib/auth';
import { logEnhancedSecurityEvent } from '@/utils/enhancedSecurityAudit';
import { useEffect } from 'react';

/**
 * Unified Auth Hook
 * Provides a consistent interface for authentication across the app
 */
export const useUnifiedAuth = () => {
  const { user, session, loading, signOut, signIn, signUp } = useAuth();
  
  // Enhanced security logging
  useEffect(() => {
    if (user && !loading) {
      logEnhancedSecurityEvent({
        action: 'USER_SESSION_ACTIVE',
        details: {
          userId: user.id,
          sessionValid: !!session,
          email: user.email
        }
      });
    }
  }, [user, session, loading]);
  
  const secureSignOut = async () => {
    if (user) {
      await logEnhancedSecurityEvent({
        action: 'USER_LOGOUT',
        details: { userId: user.id }
      });
    }
    return signOut();
  };
  
  return {
    user,
    session,
    loading,
    isAuthenticated: !!user,
    signOut: secureSignOut,
    signIn,
    signUp,
  };
};
