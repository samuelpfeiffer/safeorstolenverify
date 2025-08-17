import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TermsAndConditions } from '@/components/auth/TermsAndConditions';
import { useAuth } from '@/lib/auth';
import { Shield, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
});

type AuthStep = 'auth' | 'terms';

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signIn, signUp, loading, user } = useAuth();
  const { toast } = useToast();
  const defaultTab = searchParams.get('tab') === 'signup' ? 'signup' : 'signin';
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [step, setStep] = useState<AuthStep>('auth');
  const [pendingUser, setPendingUser] = useState<any>(null);

  const signInForm = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  const signUpForm = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: '', password: '', fullName: '' },
  });

  const onSignIn = async (values: z.infer<typeof signInSchema>) => {
    const result = await signIn(values.email, values.password);
    if (result.success) {
      navigate('/dashboard');
    }
  };

  const onSignUp = async (values: z.infer<typeof signUpSchema>) => {
    const result = await signUp(values.email, values.password, values.fullName);
    if (result.success) {
      // For signup, we need to get the user from auth context after successful signup
      if (user) {
        setPendingUser(user);
        setStep('terms');
      } else {
        // Handle case where user needs email verification
        toast({
          title: "Check your email",
          description: "Please check your email to verify your account.",
        });
      }
    } else if (result.error === 'User already exists') {
      setActiveTab('signin');
      setTimeout(() => {
        signInForm.setValue('email', values.email);
      }, 100);
    }
  };

  const handleTermsAccept = async () => {
    if (!pendingUser) return;

    try {
      // Record terms acceptance
      const { error } = await supabase
        .from('user_terms_acceptance')
        .insert({
          user_id: pendingUser.id,
          terms_version: '1.0',
          ip_address: null, // Would be filled by actual IP detection
          user_agent: navigator.userAgent,
        });

      if (error) {
        console.error('Terms acceptance error:', error);
        toast({
          title: "Error",
          description: "Failed to record terms acceptance. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Welcome!",
        description: "Your account has been created successfully!",
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Terms acceptance error:', error);
      toast({
        title: "Error",
        description: "Failed to complete registration. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleTermsDecline = () => {
    setStep('auth');
    setPendingUser(null);
    signUpForm.reset();
  };

  if (step === 'terms') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
        <TermsAndConditions
          onAccept={handleTermsAccept}
          onDecline={handleTermsDecline}
          isLoading={loading}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <Card className="border border-border bg-card">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl text-card-foreground">Safe or Stolen</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sign in to your account or create a new one
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="signin" className="space-y-4">
                <Form {...signInForm}>
                  <form onSubmit={signInForm.handleSubmit(onSignIn)} className="space-y-4">
                    <FormField
                      control={signInForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} className="bg-background border-border text-foreground" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signInForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} className="bg-background border-border text-foreground" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <Form {...signUpForm}>
                  <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="space-y-4">
                    <FormField
                      control={signUpForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} className="bg-background border-border text-foreground" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} className="bg-background border-border text-foreground" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Create a password" {...field} className="bg-background border-border text-foreground" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;