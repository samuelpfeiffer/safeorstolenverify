import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { logAuditEvent } from '@/utils/auditLogging';
import { handleSecureError } from '@/utils/errorHandling';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

interface AuthActions {
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  refreshSession: () => Promise<void>;
}

interface AuthContextType extends AuthState, AuthActions {}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    isAuthenticated: false,
    error: null,
  });
  
  const { toast } = useToast();

  // Enhanced session initialization
  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (!mounted) return;

        if (error) {
          console.error('Session initialization error:', error);
          setState(prev => ({ 
            ...prev, 
            loading: false, 
            error: error.message 
          }));
          return;
        }

        setState(prev => ({
          ...prev,
          session,
          user: session?.user ?? null,
          isAuthenticated: !!session,
          loading: false,
          error: null,
        }));

        if (session) {
          await logAuditEvent({
            action: 'session_restored',
            tableName: 'auth',
            userId: session.user.id,
          });
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
        if (mounted) {
          setState(prev => ({ 
            ...prev, 
            loading: false, 
            error: 'Authentication initialization failed' 
          }));
        }
      }
    };

    // Auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        setState(prev => ({
          ...prev,
          session,
          user: session?.user ?? null,
          isAuthenticated: !!session,
          loading: false,
          error: null,
        }));

        // Log auth events
        if (session?.user) {
          await logAuditEvent({
            action: `auth_${event}`,
            tableName: 'auth',
            userId: session.user.id,
          });
        }

        // Handle specific auth events
        switch (event) {
          case 'SIGNED_IN':
            toast({
              title: "Welcome back!",
              description: "You have been signed in successfully.",
            });
            break;
          case 'SIGNED_OUT':
            toast({
              title: "Signed out",
              description: "You have been signed out successfully.",
            });
            break;
          case 'TOKEN_REFRESHED':
            console.log('Token refreshed successfully');
            break;
        }
      }
    );

    initializeAuth();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [toast]);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        setState(prev => ({ ...prev, loading: false, error: error.message }));
        handleSecureError({
          userMessage: 'Invalid email or password',
          logMessage: `Sign in failed: ${error.message}`,
          code: 'SIGN_IN_FAILED'
        }, toast);
        return { success: false, error: error.message };
      }

      await logAuditEvent({
        action: 'sign_in_success',
        tableName: 'auth',
        userId: data.user?.id,
      });

      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Sign in failed';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      handleSecureError({
        userMessage: 'Unable to sign in. Please try again.',
        logMessage: `Sign in error: ${errorMessage}`,
        code: 'SIGN_IN_ERROR'
      }, toast);
      return { success: false, error: errorMessage };
    }
  }, [toast]);

  const signUp = useCallback(async (email: string, password: string, fullName: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
          emailRedirectTo: `${window.location.origin}/auth?confirmed=true`,
        },
      });

      if (error) {
        setState(prev => ({ ...prev, loading: false, error: error.message }));
        handleSecureError({
          userMessage: 'Unable to create account. Please try again.',
          logMessage: `Sign up failed: ${error.message}`,
          code: 'SIGN_UP_FAILED'
        }, toast);
        return { success: false, error: error.message };
      }

      if (data.user && !data.session) {
        toast({
          title: "Check your email",
          description: "We've sent you a confirmation link to complete your registration.",
        });
      }

      await logAuditEvent({
        action: 'sign_up_success',
        tableName: 'auth',
        userId: data.user?.id,
      });

      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Sign up failed';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      handleSecureError({
        userMessage: 'Unable to create account. Please try again.',
        logMessage: `Sign up error: ${errorMessage}`,
        code: 'SIGN_UP_ERROR'
      }, toast);
      return { success: false, error: errorMessage };
    }
  }, [toast]);

  const signOut = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const currentUserId = state.user?.id;
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }

      if (currentUserId) {
        await logAuditEvent({
          action: 'sign_out_success',
          tableName: 'auth',
          userId: currentUserId,
        });
      }

      setState({
        user: null,
        session: null,
        loading: false,
        isAuthenticated: false,
        error: null,
      });
    } catch (error) {
      console.error('Sign out error:', error);
      setState(prev => ({ ...prev, loading: false }));
      toast({
        title: "Sign out failed",
        description: "There was an error signing out. Please try again.",
        variant: "destructive",
      });
    }
  }, [state.user?.id, toast]);

  const resetPassword = useCallback(async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth?reset=true`,
      });

      if (error) {
        handleSecureError({
          userMessage: 'Unable to send reset email. Please try again.',
          logMessage: `Password reset failed: ${error.message}`,
          code: 'PASSWORD_RESET_FAILED'
        }, toast);
        return { success: false, error: error.message };
      }

      toast({
        title: "Reset email sent",
        description: "Check your email for password reset instructions.",
      });

      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Password reset failed';
      handleSecureError({
        userMessage: 'Unable to send reset email. Please try again.',
        logMessage: `Password reset error: ${errorMessage}`,
        code: 'PASSWORD_RESET_ERROR'
      }, toast);
      return { success: false, error: errorMessage };
    }
  }, [toast]);

  const refreshSession = useCallback(async () => {
    try {
      const { data, error } = await supabase.auth.refreshSession();
      if (error) throw error;
      
      setState(prev => ({
        ...prev,
        session: data.session,
        user: data.session?.user ?? null,
        isAuthenticated: !!data.session,
      }));
    } catch (error) {
      console.error('Session refresh failed:', error);
    }
  }, []);

  const contextValue = useMemo(() => ({
    ...state,
    signIn,
    signUp,
    signOut,
    resetPassword,
    refreshSession,
  }), [state, signIn, signUp, signOut, resetPassword, refreshSession]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};