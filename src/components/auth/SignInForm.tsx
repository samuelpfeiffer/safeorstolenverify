
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/auth';
import { useSignInForm, SignInFormData } from '@/hooks/useFormValidation';

interface SignInFormProps {
  onSuccess?: () => void;
}

export const SignInForm = ({ onSuccess }: SignInFormProps) => {
  const { signIn, loading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const form = useSignInForm();

  const handleSignIn = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      await signIn(data.email, data.password);
      // Reset form on success
      form.reset();
      onSuccess?.();
    } catch (error) {
      // Error is handled in the signIn function
      console.error('Sign in failed:', error);
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
            {form.formState.errors.email.message}
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
            {form.formState.errors.password.message}
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
