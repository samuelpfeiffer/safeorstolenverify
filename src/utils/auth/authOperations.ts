
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuthErrorHandler } from "./authErrors";
import { AuthResponse } from "@/types/auth";

export const useAuthOperations = () => {
  const { toast } = useToast();
  const { handleSignInError, handleSignUpError, handleSignOutError } = useAuthErrorHandler();

  const signIn = async (email: string, password: string): Promise<AuthResponse> => {
    console.log('=== Sign In Attempt ===');
    console.log('Email:', email);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error);
      handleSignInError(error);
      return {
        data: {
          user: null,
          session: null,
        },
        error: {
          message: error.message,
          status: error.status,
        },
      };
    }
    
    console.log('Sign in successful');
    console.log('User ID:', data.user?.id);
    console.log('Session exists:', !!data.session);
    
    return {
      data: {
        user: data.user,
        session: data.session,
      },
    };
  };

  const signUp = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
    console.log('=== Sign Up Attempt ===');
    console.log('Email:', email);
    console.log('Full Name:', fullName);
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/auth?confirmed=true`,
      },
    });

    if (error) {
      console.error('Sign up error:', error);
      handleSignUpError(error);
      return {
        data: {
          user: null,
          session: null,
        },
        error: {
          message: error.message,
          status: error.status,
        },
      };
    }

    console.log('Sign up response:', data);

    if (data.user && !data.session) {
      console.log('Email confirmation required');
      toast({
        title: "Check your email",
        description: "We've sent you a confirmation link. Please check your email and click the link to verify your account.",
        duration: 10000,
      });
    } else if (data.session) {
      console.log('Account created with immediate session');
      toast({
        title: "Account created successfully!",
        description: "Please complete the terms acceptance to finish registration.",
      });
    }

    return {
      data: {
        user: data.user,
        session: data.session,
        weakPassword: data.user?.user_metadata?.weak_password,
      },
    };
  };

  const signOut = async () => {
    console.log('=== Sign Out Attempt ===');
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Sign out error:', error);
      handleSignOutError(error);
    } else {
      console.log('Sign out successful');
    }
  };

  return {
    signIn,
    signUp,
    signOut,
  };
};
