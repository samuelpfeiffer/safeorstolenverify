
import { useAuth } from '@/lib/auth';
import { logEnhancedSecurityEvent } from '@/utils/enhancedSecurityAudit';
import { useEffect } from 'react';

/**
 * Unified Auth Hook
 * Provides a consistent interface for authentication across the app
 */
export const useUnifiedAuth = () => {
  const { user, session, loading, initialized, signOut, signIn, signUp, resetPassword } = useAuth();
  
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
    initialized,
    isAuthenticated: initialized && user !== null,
    signOut: secureSignOut,
    signIn,
    signUp,
    resetPassword,
  };
};
