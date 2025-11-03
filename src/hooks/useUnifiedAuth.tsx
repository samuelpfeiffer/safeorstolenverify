import { useAuth } from '@/lib/auth';

/**
 * Unified Auth Hook
 * Provides a consistent interface for authentication across the app
 * NOTE: Does not include navigation to avoid circular dependencies
 */
export const useUnifiedAuth = () => {
  const { user, session, loading, initialized, signOut, signIn, signUp, resetPassword } = useAuth();
  
  return {
    user,
    session,
    loading,
    initialized,
    isAuthenticated: initialized && user !== null,
    signOut,
    signIn,
    signUp,
    resetPassword,
  };
};
