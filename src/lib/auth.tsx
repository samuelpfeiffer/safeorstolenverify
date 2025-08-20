import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface AuthUser {
  id: string;
  email: string;
  fullName?: string;
  avatar?: string;
  emailVerified: boolean;
  createdAt: string;
}

export interface AuthState {
  user: AuthUser | null;
  session: Session | null;
  loading: boolean;
  initialized: boolean;
}

export interface AuthActions {
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
}

export type AuthContextType = AuthState & AuthActions;

const AuthContext = createContext<AuthContextType | null>(null);

const transformUser = (user: User | null): AuthUser | null => {
  if (!user) return null;
  
  return {
    id: user.id,
    email: user.email!,
    fullName: user.user_metadata?.full_name || user.user_metadata?.name,
    avatar: user.user_metadata?.avatar_url,
    emailVerified: user.email_confirmed_at !== null,
    createdAt: user.created_at,
  };
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    initialized: false,
  });
  
  const { toast } = useToast();

  useEffect(() => {
    let mounted = true;

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (mounted) {
          if (error) {
            console.error('Error getting session:', error);
          }
          
          setState({
            user: transformUser(session?.user || null),
            session,
            loading: false,
            initialized: true,
          });
        }
      } catch (error) {
        console.error('Session initialization error:', error);
        if (mounted) {
          setState(prev => ({ ...prev, loading: false, initialized: true }));
        }
      }
    };

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (mounted) {
          setState({
            user: transformUser(session?.user || null),
            session,
            loading: false,
            initialized: true,
          });

          // Handle auth events
          if (event === 'SIGNED_IN') {
            toast({
              title: 'Welcome back!',
              description: 'Successfully signed in.',
            });
          } else if (event === 'SIGNED_OUT') {
            toast({
              title: 'Signed out',
              description: 'Successfully signed out.',
            });
          } else if (event === 'TOKEN_REFRESHED') {
            console.log('Token refreshed');
          }
        }
      }
    );

    getInitialSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [toast]);

  const signIn = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        setState(prev => ({ ...prev, loading: false }));
        
        let errorMessage = 'Sign in failed';
        if (error.message.includes('Invalid login credentials')) {
          errorMessage = 'Invalid email or password';
        } else if (error.message.includes('Email not confirmed')) {
          errorMessage = 'Please check your email and click the verification link';
        } else {
          errorMessage = error.message;
        }

        toast({
          title: 'Sign in failed',
          description: errorMessage,
          variant: 'destructive',
        });

        return { success: false, error: errorMessage };
      }

      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = 'An unexpected error occurred';
      
      toast({
        title: 'Sign in failed',
        description: errorMessage,
        variant: 'destructive',
      });

      return { success: false, error: errorMessage };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
          emailRedirectTo: `${window.location.origin}/auth?verified=true`,
        },
      });

      setState(prev => ({ ...prev, loading: false }));

      if (error) {
        let errorMessage = 'Sign up failed';
        if (error.message.includes('already registered') || error.message.includes('User already registered')) {
          // Clear the form and suggest sign in instead
          toast({
            title: 'Account already exists',
            description: 'An account with this email already exists. Please sign in instead.',
            variant: 'destructive',
          });
          return { success: false, error: 'User already exists' };
        } else if (error.message.includes('Password')) {
          errorMessage = 'Password must be at least 6 characters';
        } else {
          errorMessage = error.message;
        }

        toast({
          title: 'Sign up failed',
          description: errorMessage,
          variant: 'destructive',
        });

        return { success: false, error: errorMessage };
      }

      if (data.user && !data.session) {
        toast({
          title: 'Check your email',
          description: 'We sent you a verification link. Please check your email and click the link to complete registration.',
          duration: 10000,
        });
      } else {
        toast({
          title: 'Thank you for signing up!',
          description: 'Welcome to Safe or Stolen! Redirecting to your dashboard...',
          duration: 5000,
        });
      }

      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = 'An unexpected error occurred';
      
      toast({
        title: 'Sign up failed',
        description: errorMessage,
        variant: 'destructive',
      });

      return { success: false, error: errorMessage };
    }
  };

  const signOut = async () => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Sign out error:', error);
      toast({
        title: 'Sign out failed',
        description: 'Please try again',
        variant: 'destructive',
      });
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth?reset=true`,
      });

      if (error) {
        toast({
          title: 'Reset failed',
          description: error.message,
          variant: 'destructive',
        });
        return { success: false, error: error.message };
      }

      toast({
        title: 'Reset email sent',
        description: 'Check your email for password reset instructions.',
      });

      return { success: true };
    } catch (error) {
      const errorMessage = 'Failed to send reset email';
      toast({
        title: 'Reset failed',
        description: errorMessage,
        variant: 'destructive',
      });
      return { success: false, error: errorMessage };
    }
  };

  const value: AuthContextType = {
    ...state,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useAuthState(): AuthState {
  const { user, session, loading, initialized } = useAuth();
  return { user, session, loading, initialized };
}

// Convenience hooks
export function useUser(): AuthUser | null {
  const { user } = useAuth();
  return user;
}

export function useSession(): Session | null {
  const { session } = useAuth();
  return session;
}

export function useIsAuthenticated(): boolean {
  const { user, initialized } = useAuth();
  return initialized && user !== null;
}