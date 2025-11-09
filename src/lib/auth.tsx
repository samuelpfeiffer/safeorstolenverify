import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';

// Lazy import utilities to prevent initialization errors
let supabaseClient: any = null;
const getSupabase = async () => {
  if (!supabaseClient) {
    const { supabase } = await import('@/integrations/supabase/client');
    supabaseClient = supabase;
  }
  return supabaseClient;
};

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

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const MAX_RETRIES = 3;
    const MOBILE_TIMEOUT = 5000; // 5 second timeout for mobile

    // Mobile-optimized session initialization
    const getInitialSession = async () => {
      try {
        const supabase = await getSupabase();
        
        // Add timeout for mobile to prevent infinite loading
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Session timeout')), MOBILE_TIMEOUT)
        );
        
        const sessionPromise = supabase.auth.getSession();
        
        const result = await Promise.race([sessionPromise, timeoutPromise]) as any;
        const { data: { session }, error } = result;
        
        if (mounted) {
          if (error) {
            // Continue with no session rather than blocking
          }
          
          setState({
            user: transformUser(session?.user || null),
            session,
            loading: false,
            initialized: true,
          });
        }
      } catch (error) {
        if (mounted && retryCount < MAX_RETRIES) {
          retryCount++;
          setTimeout(() => getInitialSession(), 1000);
        } else if (mounted) {
          // Force initialization complete even if session failed
          setState({
            user: null,
            session: null,
            loading: false,
            initialized: true,
          });
        }
      }
    };

    // Listen for auth changes with error handling
    let subscription: any = null;
    
    const setupAuthListener = async () => {
      try {
        const supabase = await getSupabase();
        const { data } = supabase.auth.onAuthStateChange(
          (event, session) => {
            if (!mounted) return;

            setState({
              user: transformUser(session?.user || null),
              session,
              loading: false,
              initialized: true,
            });

            // Log auth events but don't show toasts to avoid dependencies
            if (event === 'SIGNED_IN') {
              console.log('[AUTH] User signed in successfully');
            } else if (event === 'SIGNED_OUT') {
              console.log('[AUTH] User signed out');
            }
          }
        );
        subscription = data.subscription;
      } catch (error) {
        console.error('[AUTH] Failed to setup listener:', error);
        // Force initialization even if listener fails
        if (mounted) {
          setState({
            user: null,
            session: null,
            loading: false,
            initialized: true,
          });
        }
      }
    };

    setupAuthListener();
    getInitialSession();

    return () => {
      mounted = false;
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      const supabase = await getSupabase();
      
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

        console.error('[AUTH] Sign in failed:', errorMessage);
        return { success: false, error: errorMessage };
      }

      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = 'An unexpected error occurred';
      console.error('[AUTH] Sign in exception:', errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      const supabase = await getSupabase();
      
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
          console.error('[AUTH] User already exists');
          return { success: false, error: 'User already exists' };
        } else if (error.message.includes('Password')) {
          errorMessage = 'Password must be at least 6 characters';
        } else {
          errorMessage = error.message;
        }

        console.error('[AUTH] Sign up failed:', errorMessage);
        return { success: false, error: errorMessage };
      }

      // Send welcome email for new users
      if (data.user && !error) {
        console.log("[AUTH] User created successfully, sending welcome email...");
        
        try {
          const supabase = await getSupabase();
          await supabase.functions.invoke('send-welcome-email', {
            body: {
              email: data.user.email,
              fullName: fullName,
              userId: data.user.id
            }
          });
        } catch (emailError) {
          if (process.env.NODE_ENV === 'development') {
            console.error("[AUTH] Error sending welcome email:", emailError);
          }
        }
      }

      console.log('[AUTH] Sign up successful');
      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = error instanceof Error ? error.message : 'Sign up failed';
      console.error('[AUTH] Sign up exception:', errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const signOut = async () => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      // Clear localStorage data before signing out
      localStorage.removeItem('user_journey');
      localStorage.removeItem('offline-queue');
      sessionStorage.clear();
      
      const supabase = await getSupabase();
      const { error } = await supabase.auth.signOut();
      
      if (error && process.env.NODE_ENV === 'development') {
        console.error('[AUTH] Sign out error:', error);
      }
      
      // Always clear local state regardless of API response
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
      
      console.log('[AUTH] Signed out successfully');
    } catch (error) {
      console.error('[AUTH] Sign out exception:', error);
      // Force clear state even if API fails
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const supabase = await getSupabase();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth?reset=true`,
      });

      if (error) {
        console.error('[AUTH] Reset failed:', error.message);
        return { success: false, error: error.message };
      }

      console.log('[AUTH] Reset email sent successfully');
      return { success: true };
    } catch (error) {
      const errorMessage = 'Failed to send reset email';
      console.error('[AUTH] Reset exception:', errorMessage);
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
    console.error('useAuth called outside AuthProvider - this should not happen in production');
    // Return a safe default instead of throwing to prevent entire app crash
    return {
      user: null,
      session: null,
      loading: false,
      initialized: false,
      signIn: async () => ({ success: false, error: 'Auth not initialized' }),
      signUp: async () => ({ success: false, error: 'Auth not initialized' }),
      signOut: async () => {},
      resetPassword: async () => ({ success: false, error: 'Auth not initialized' }),
    };
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