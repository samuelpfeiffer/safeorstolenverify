
import { useAuth } from '@/lib/auth';
import { useEffect } from 'react';

/**
 * Unified Auth Hook
 * Provides a consistent interface for authentication across the app
 */
export const useUnifiedAuth = () => {
  const { user, session, loading, initialized, signOut, signIn, signUp, resetPassword } = useAuth();
  
  // Simple, reliable sign out without complex logging
  const secureSignOut = async () => {
    try {
      return await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      // Force clear local session state
      window.location.href = '/';
    }
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
