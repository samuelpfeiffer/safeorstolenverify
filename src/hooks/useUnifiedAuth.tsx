
import React from 'react';
import { useAuth } from '@/lib/auth';

/**
 * Unified Auth Hook
 * Provides a consistent interface for authentication across the app
 */
export const useUnifiedAuth = () => {
  const { user, session, loading, signOut, signIn, signUp } = useAuth();
  
  return {
    user,
    session,
    loading,
    isAuthenticated: !!user,
    signOut,
    signIn,
    signUp,
  };
};
