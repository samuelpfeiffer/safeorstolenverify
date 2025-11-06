import React, { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

/**
 * Fallback auth state hook with minimal dependencies
 * This serves as a backup when the main useAuthState fails
 */
export const useFallbackAuthState = () => {
  console.log('🔄 Using fallback auth state hook');
  
  // Initialize with safe defaults
  let user: User | null = null;
  let session: Session | null = null;
  let loading = true;
  let error: string | null = null;

  try {
    // Try to use React hooks
    const [userState, setUser] = useState<User | null>(null);
    const [sessionState, setSession] = useState<Session | null>(null);
    const [loadingState, setLoading] = useState(true);
    const [errorState, setError] = useState<string | null>(null);

    useEffect(() => {
      let isMounted = true;
      
      const initAuth = async () => {
        try {
          const { data: { session }, error } = await supabase.auth.getSession();
          
          if (!isMounted) return;
          
          if (error) {
            console.error('Fallback auth error:', error);
            setError(error.message);
          } else {
            setSession(session);
            setUser(session?.user ?? null);
            setError(null);
          }
          
          setLoading(false);
        } catch (err) {
          console.error('Fallback auth init error:', err);
          if (isMounted) {
            setError(err instanceof Error ? err.message : 'Auth failed');
            setLoading(false);
          }
        }
      };

      // Set up listener
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (event, session) => {
          if (!isMounted) return;
          
          console.log('Fallback auth change:', event, session?.user?.id);
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
          setError(null);
        }
      );

      initAuth();

      return () => {
        isMounted = false;
        subscription.unsubscribe();
      };
    }, []);

    return {
      user: userState,
      session: sessionState,
      loading: loadingState,
      error: errorState,
    };
  } catch (err) {
    console.error('🚨 Fallback auth hook failed, returning static values:', err);
    
    // Return static values if hooks fail completely
    return {
      user,
      session,
      loading,
      error: 'React hooks unavailable',
    };
  }
};