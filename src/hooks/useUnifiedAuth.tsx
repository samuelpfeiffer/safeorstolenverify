import { useAuth } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';

/**
 * Unified Auth Hook
 * Provides a consistent interface for authentication across the app
 */
export const useUnifiedAuth = () => {
  const { user, session, loading, initialized, signOut, signIn, signUp, resetPassword } = useAuth();
  const navigate = useNavigate();
  
  // Simple, reliable sign out without complex logging
  const secureSignOut = async () => {
    try {
      return await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      // Force clear local session state and navigate home
      navigate('/');
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
