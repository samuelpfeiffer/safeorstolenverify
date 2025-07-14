import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType } from "@/types/auth";
import { useAuthState } from "./useAuthState";
import { secureSignIn, secureSignUp, secureSignOut } from "@/utils/auth/secureAuthOperations";
import { useToast } from "@/hooks/use-toast";

const SecureAuthContext = createContext<AuthContextType | undefined>(undefined);

// Inner provider that safely uses hooks
const SecureAuthProviderInner = ({ children }: { children: React.ReactNode }) => {
  const authState = useAuthState();
  const { user, session, loading: authStateLoading, error: authError } = authState;
  const [operationLoading, setOperationLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // Handle auth state errors
  useEffect(() => {
    if (authError) {
      console.error('Auth state error:', authError);
      toast({
        title: "Authentication Error",
        description: authError,
        variant: "destructive"
      });
    }
  }, [authError, toast]);

  const signIn = async (email: string, password: string) => {
    try {
      setOperationLoading(true);
      const result = await secureSignIn(email, password);
      
      if (result.error) {
        toast({
          title: "Sign in failed",
          description: result.error.message,
          variant: "destructive"
        });
        throw new Error(result.error.message);
      }
      
      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully.",
      });
      
      return result;
    } catch (error: any) {
      throw error;
    } finally {
      setOperationLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setOperationLoading(true);
      const result = await secureSignUp(email, password, fullName);
      
      if (result.error) {
        toast({
          title: "Sign up failed",
          description: result.error.message,
          variant: "destructive"
        });
        throw new Error(result.error.message);
      }

      if (result.data?.user && !result.data?.session) {
        toast({
          title: "Check your email",
          description: "We've sent you a confirmation link. Please check your email and click the link to verify your account.",
          duration: 10000,
        });
      } else if (result.data?.session) {
        toast({
          title: "Account created successfully!",
          description: "Welcome to Safe or Stolen!",
        });
      }
      
      return result;
    } catch (error: any) {
      throw error;
    } finally {
      setOperationLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setOperationLoading(true);
      await secureSignOut();
      
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
    } catch (error: any) {
      console.error("Unexpected error during secure sign out:", error);
      toast({
        title: "Sign out failed",
        description: "Unable to sign out. Please try again.",
        variant: "destructive"
      });
    } finally {
      setOperationLoading(false);
    }
  };

  const loading = authStateLoading || operationLoading;

  const value = {
    user,
    session,
    signIn,
    signUp,
    signOut,
    loading,
    isAuthenticated: !!user,
  };

  return <SecureAuthContext.Provider value={value}>{children}</SecureAuthContext.Provider>;
};

// Main provider - simplified without error boundary nesting
export const SecureAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SecureAuthProviderInner>{children}</SecureAuthProviderInner>;
};

export const useSecureAuth = () => {
  const context = useContext(SecureAuthContext);
  if (context === undefined) {
    console.error("useSecureAuth must be used within a SecureAuthProvider");
    // Return a fallback auth state instead of throwing
    return {
      user: null,
      session: null,
      signIn: async () => ({ data: null, error: new Error("Auth not initialized") }),
      signUp: async () => ({ data: null, error: new Error("Auth not initialized") }),
      signOut: async () => {},
      loading: false,
      isAuthenticated: false,
    };
  }
  return context;
};