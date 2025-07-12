
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useEffect } from 'react';

// Sign In Form Schema
const secureSignInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Sign Up Form Schema
const secureSignUpSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SecureSignInFormData = z.infer<typeof secureSignInSchema>;
export type SecureSignUpFormData = z.infer<typeof secureSignUpSchema>;

interface FormOptions {
  enableMobileOptimizations?: boolean;
  enableRealTimeValidation?: boolean;
  enableSecurityChecks?: boolean;
}

export const useSecureSignInForm = (options: FormOptions = {}) => {
  return useForm<SecureSignInFormData>({
    resolver: zodResolver(secureSignInSchema),
    mode: options.enableRealTimeValidation ? 'onChange' : 'onSubmit',
  });
};

export const useSecureSignUpForm = (options: FormOptions = {}) => {
  const form = useForm<SecureSignUpFormData>({
    resolver: zodResolver(secureSignUpSchema),
    mode: options.enableRealTimeValidation ? 'onChange' : 'onSubmit',
  });

  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    label: string;
    color: string;
  } | null>(null);

  const password = form.watch('password');

  useEffect(() => {
    if (password && password.length > 0) {
      let score = 0;
      let label = 'Weak';
      let color = 'text-red-400';

      // Basic scoring
      if (password.length >= 8) score += 25;
      if (password.match(/[A-Z]/)) score += 25;
      if (password.match(/[a-z]/)) score += 25;
      if (password.match(/[0-9]/)) score += 25;

      if (score >= 75) {
        label = 'Strong';
        color = 'text-green-400';
      } else if (score >= 50) {
        label = 'Medium';
        color = 'text-yellow-400';
      }

      setPasswordStrength({ score, label, color });
    } else {
      setPasswordStrength(null);
    }
  }, [password]);

  return {
    ...form,
    passwordStrength,
  };
};

export const getMobileErrorMessage = (message: string, isMobile: boolean): string => {
  if (!isMobile) return message;
  
  // Shorten error messages for mobile
  const mobileMessages: Record<string, string> = {
    'Please enter a valid email address': 'Invalid email',
    'Password must be at least 8 characters': 'Password too short',
    'Full name must be at least 2 characters': 'Name too short',
    "Passwords don't match": 'Passwords differ',
  };
  
  return mobileMessages[message] || message;
};
