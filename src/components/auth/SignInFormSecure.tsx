
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { validateEmailSecurity } from '@/utils/simpleValidation';
import { z } from 'zod';

interface SignInFormSecureProps {
  onSuccess?: () => void;
}

// Simple form validation schema
const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const SignInFormSecure = ({ onSuccess }: SignInFormSecureProps) => {
  const { signIn, loading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation
    try {
      signInSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    setIsLoading(true);
    try {
      const result = await signIn(formData.email.trim().toLowerCase(), formData.password);
      
      if (result.success) {
        setFormData({ email: '', password: '' });
        onSuccess?.();
      } else {
        toast({
          title: "Sign in failed",
          description: result.error || "Please check your email and password",
          variant: "destructive"
        });
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="Enter your email"
          disabled={currentlyLoading}
          className="bg-gray-800 border-gray-600 text-white disabled:opacity-50"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password" className="text-white">Password</Label>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          placeholder="Enter your password"
          disabled={currentlyLoading}
          className="bg-gray-800 border-gray-600 text-white disabled:opacity-50"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password}</p>
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
