
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/auth';
import { useSecureSignInForm, getMobileErrorMessage, SecureSignInFormData } from '@/hooks/useSecureFormValidation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { checkRateLimit } from '@/utils/rateLimiting';
import { validateEmailSecurity } from '@/utils/securityValidation';
import { logEnhancedSecurityEvent } from '@/utils/enhancedSecurityAudit';

interface SignInFormSecureProps {
  onSuccess?: () => void;
}

export const SignInFormSecure = ({ onSuccess }: SignInFormSecureProps) => {
  const { signIn, loading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitCheck, setRateLimitCheck] = useState(true);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const form = useSecureSignInForm({
    enableMobileOptimizations: isMobile,
    enableRealTimeValidation: true,
    enableSecurityChecks: true
  });

  const handleSignIn = async (data: SecureSignInFormData) => {
    setIsLoading(true);
    try {
      const { error } = await signIn(data.email.trim().toLowerCase(), data.password);
      
      if (error) {
        toast({
          title: "Sign in failed",
          description: (error as any)?.message || "Please check your email and password",
          variant: "destructive"
        });
      } else {
        form.reset();
        onSuccess?.();
      }
    } catch (error) {
      console.error('Sign in failed:', error);
      toast({
        title: "Sign in failed",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentlyLoading = isLoading || authLoading;

  return (
    <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-4">
      <div>
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input
          {...form.register('email')}
          type="email"
          placeholder="Enter your email"
          disabled={currentlyLoading}
          className="bg-gray-800 border-gray-600 text-white disabled:opacity-50"
        />
        {form.formState.errors.email && (
          <p className="text-red-400 text-sm mt-1">
            {getMobileErrorMessage(form.formState.errors.email.message || '', isMobile)}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="password" className="text-white">Password</Label>
        <Input
          {...form.register('password')}
          type="password"
          placeholder="Enter your password"
          disabled={currentlyLoading}
          className="bg-gray-800 border-gray-600 text-white disabled:opacity-50"
        />
        {form.formState.errors.password && (
          <p className="text-red-400 text-sm mt-1">
            {getMobileErrorMessage(form.formState.errors.password.message || '', isMobile)}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={currentlyLoading}
        className="w-full bg-sos-orange hover:bg-sos-orange/90 disabled:opacity-50"
      >
        {currentlyLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Signing In...</span>
          </div>
        ) : (
          'Sign In'
        )}
      </Button>
    </form>
  );
};
