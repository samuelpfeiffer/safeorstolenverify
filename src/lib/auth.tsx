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
  // React hooks MUST be called unconditionally at the top level
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    initialized: false,
  });
  
  const { toast } = useToast();

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const MAX_RETRIES = 3;

    // Get initial session with retry logic
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (mounted) {
          if (error) {
            console.error('Error getting session:', error);
            // Don't fail completely, just log and continue
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
        if (mounted && retryCount < MAX_RETRIES) {
          retryCount++;
          setTimeout(() => getInitialSession(), 1000 * retryCount);
        } else if (mounted) {
          setState(prev => ({ ...prev, loading: false, initialized: true }));
        }
      }
    };

    // Listen for auth changes with error handling
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!mounted) return;

        // Handle token refresh errors gracefully
        if (event === 'TOKEN_REFRESHED') {
          console.log('Auth token refreshed successfully');
        }
        
        setState({
          user: transformUser(session?.user || null),
          session,
          loading: false,
          initialized: true,
        });

        // Handle auth events with feedback
        if (event === 'SIGNED_IN') {
          const userName = session?.user?.user_metadata?.full_name || session?.user?.email?.split('@')[0] || 'there';
          toast({
            title: `🎉 Successfully Signed In!`,
            description: `Welcome back, ${userName}! You're ready to verify items.`,
            duration: 5000,
          });
        } else if (event === 'SIGNED_OUT') {
          toast({
            title: '👋 Signed Out',
            description: 'Successfully signed out of your account.',
            duration: 3000,
          });
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

      // Send welcome email for new users
      if (data.user && !error) {
        console.log("User created successfully, sending welcome email...");
        
        try {
          await supabase.functions.invoke('send-welcome-email', {
            body: {
              email: data.user.email,
              fullName: fullName,
              userId: data.user.id
            }
          });
          console.log("Welcome email sent successfully");
        } catch (emailError) {
          console.error("Error sending welcome email:", emailError);
          // Don't fail the signup if email fails
        }
      }

      if (data.user && !data.session) {
        toast({
          title: '🎉 Account Created Successfully!',
          description: 'Please check your email and click the verification link to unlock your 4 free searches!',
          duration: 12000,
        });
      } else {
        toast({
          title: '🎉 Welcome to SafeOrStolen!',
          description: 'Account created! You now have 4 free verification searches to stay protected from stolen goods.',
          duration: 10000,
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
      
      // Clear sensitive localStorage data before signing out
      localStorage.removeItem('searchHistory');
      localStorage.removeItem('savedReceipts');
      localStorage.removeItem('userJourney');
      sessionStorage.clear();
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Sign out error:', error);
      }
      
      // Always clear local state regardless of API response
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
      
      toast({
        title: 'Signed out',
        description: 'Successfully signed out.',
      });
    } catch (error) {
      console.error('Sign out error:', error);
      // Force clear state even if API fails
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
      
      toast({
        title: 'Signed out',
        description: 'You have been signed out.',
      });
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
    // During HMR, context can be temporarily null
    // Return safe fallback instead of throwing error
    if (import.meta.env.DEV) {
      console.warn('AuthContext not ready (HMR), returning fallback state');
      return {
        user: null,
        session: null,
        loading: true,
        initialized: false,
        signIn: async () => ({ success: false, error: 'Auth not ready' }),
        signUp: async () => ({ success: false, error: 'Auth not ready' }),
        signOut: async () => {},
        resetPassword: async () => ({ success: false, error: 'Auth not ready' }),
      };
    }
    
    // In production, still throw error (this should never happen)
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}

export function useAuthState(): AuthState {
  try {
    const { user, session, loading, initialized } = useAuth();
    return { user, session, loading, initialized };
  } catch {
    return { user: null, session: null, loading: true, initialized: false };
  }
}

// Convenience hooks
export function useUser(): AuthUser | null {
  try {
    const { user } = useAuth();
    return user;
  } catch {
    return null;
  }
}

export function useSession(): Session | null {
  try {
    const { session } = useAuth();
    return session;
  } catch {
    return null;
  }
}

export function useIsAuthenticated(): boolean {
  try {
    const { user, initialized } = useAuth();
    return initialized && user !== null;
  } catch {
    return false;
  }
}