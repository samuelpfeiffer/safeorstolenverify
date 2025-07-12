
import { supabase } from "@/integrations/supabase/client";
import { AuthResponse } from "@/types/auth";
import { validatePasswordSecurity, validateEmailSecurity, validateNameSecurity } from "@/utils/securityValidation";
import { logAuditEvent, AUDIT_ACTIONS } from "@/utils/auditLogging";
import { checkRateLimit } from "@/utils/rateLimiting";

// Remove the useToast hook call at module level - this was causing the error
// Toast notifications will be handled by the components that call these functions

export const secureSignIn = async (email: string, password: string): Promise<AuthResponse> => {
    console.log('=== Secure Sign In Attempt ===');
    
    // Rate limiting check
    const canProceed = await checkRateLimit('verification');
    if (!canProceed) {
      return {
        data: { user: null, session: null },
        error: { message: "Rate limit exceeded", status: 429 }
      };
    }

    // Input validation
    const emailValidation = validateEmailSecurity(email);
    if (!emailValidation.isValid) {
      return {
        data: { user: null, session: null },
        error: { message: emailValidation.errors[0], status: 400 }
      };
    }

    // Password presence check (don't validate complexity for sign-in)
    if (!password || password.length === 0) {
      return {
        data: { user: null, session: null },
        error: { message: "Password required", status: 400 }
      };
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailValidation.sanitizedValue!,
        password,
      });

      if (error) {
        console.error('Sign in error:', error);
        
        // Log failed attempt
        await logAuditEvent({
          action: AUDIT_ACTIONS.SIGN_IN_FAILED,
          tableName: 'auth_attempts',
          newValues: { email: emailValidation.sanitizedValue, error: error.message }
        });

        return {
          data: { user: null, session: null },
          error: { message: "Invalid credentials", status: 401 }
        };
      }

      console.log('Sign in successful');
      
      // Log successful attempt
      await logAuditEvent({
        action: AUDIT_ACTIONS.SIGN_IN_SUCCESS,
        tableName: 'auth_attempts',
        newValues: { email: emailValidation.sanitizedValue, userId: data.user?.id }
      });

      return {
        data: {
          user: data.user,
          session: data.session,
        },
      };
    } catch (error: any) {
      console.error('Unexpected sign in error:', error);
      return {
        data: { user: null, session: null },
        error: { message: "Unexpected error", status: 500 }
      };
    }
};

export const secureSignUp = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
    console.log('=== Secure Sign Up Attempt ===');
    
    // Rate limiting check
    const canProceed = await checkRateLimit('verification');
    if (!canProceed) {
      return {
        data: { user: null, session: null },
        error: { message: "Rate limit exceeded", status: 429 }
      };
    }

    // Comprehensive input validation
    const emailValidation = validateEmailSecurity(email);
    if (!emailValidation.isValid) {
      return {
        data: { user: null, session: null },
        error: { message: emailValidation.errors[0], status: 400 }
      };
    }

    const passwordValidation = validatePasswordSecurity(password);
    if (!passwordValidation.isValid) {
      return {
        data: { user: null, session: null },
        error: { message: passwordValidation.errors[0], status: 400 }
      };
    }

    const nameValidation = validateNameSecurity(fullName, 'Full name');
    if (!nameValidation.isValid) {
      return {
        data: { user: null, session: null },
        error: { message: nameValidation.errors[0], status: 400 }
      };
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: emailValidation.sanitizedValue!,
        password: passwordValidation.sanitizedValue!,
        options: {
          data: {
            full_name: nameValidation.sanitizedValue!,
          },
          emailRedirectTo: `${window.location.origin}/auth?confirmed=true`,
        },
      });

      if (error) {
        console.error('Sign up error:', error);
        
        // Log failed attempt
        await logAuditEvent({
          action: AUDIT_ACTIONS.SIGN_UP_FAILED,
          tableName: 'auth_attempts',
          newValues: { email: emailValidation.sanitizedValue, error: error.message }
        });

        return {
          data: { user: null, session: null },
          error: { message: error.message, status: 400 }
        };
      }

      console.log('Sign up successful');
      
      // Log successful attempt
      await logAuditEvent({
        action: AUDIT_ACTIONS.SIGN_UP_SUCCESS,
        tableName: 'auth_attempts',
        newValues: { email: emailValidation.sanitizedValue, userId: data.user?.id }
      });

      return {
        data: {
          user: data.user,
          session: data.session,
        },
      };
    } catch (error: any) {
      console.error('Unexpected sign up error:', error);
      return {
        data: { user: null, session: null },
        error: { message: "Unexpected error", status: 500 }
      };
    }
};

export const secureSignOut = async () => {
    console.log('=== Secure Sign Out Attempt ===');
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Sign out error:', error);
        throw error;
      } else {
        console.log('Sign out successful');
        
        // Log sign out
        if (user) {
          await logAuditEvent({
            action: AUDIT_ACTIONS.SIGN_OUT,
            tableName: 'auth_attempts',
            newValues: { userId: user.id }
          });
        }
      }
    } catch (error: any) {
      console.error('Unexpected sign out error:', error);
      throw error;
    }
};
