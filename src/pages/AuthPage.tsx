import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TermsAndConditions } from '@/components/auth/TermsAndConditions';
import { SignUpWelcome } from '@/components/auth/SignUpWelcome';
import { SignInWelcome } from '@/components/auth/SignInWelcome';
import { SignupSuccess } from '@/components/auth/SignupSuccess';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/lib/auth';
import { Shield, ArrowLeft } from 'lucide-react';

type AuthStep = 'auth' | 'terms' | 'welcome' | 'signup-success' | 'signin-welcome';

const AuthPage = () => {
  const [searchParams] = useSafeSearchParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const defaultTab = searchParams.get('tab') === 'signup' ? 'signup' : 'signin';
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>(defaultTab);
  const [step, setStep] = useState<AuthStep>('auth');

  // Sync active tab with URL parameter changes
  useEffect(() => {
    const tabParam = searchParams.get('tab') === 'signup' ? 'signup' : 'signin';
    setActiveTab(tabParam);
  }, [searchParams]);

  // Redirect authenticated users
  useEffect(() => {
    if (user && !loading) {
      const redirectPath = searchParams.get('redirect');
      if (redirectPath) {
        // Decode the redirect path (it might be URL encoded)
        const decodedPath = decodeURIComponent(redirectPath);
        navigate(decodedPath, { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [user, loading, navigate, searchParams]);

  const handleToggleMode = () => {
    const newTab = activeTab === 'signin' ? 'signup' : 'signin';
    setActiveTab(newTab);
    navigate(`/auth?tab=${newTab}`, { replace: true });
  };

  const handleWelcomeContinue = () => {
    const redirectPath = searchParams.get('redirect');
    if (redirectPath) {
      navigate(decodeURIComponent(redirectPath));
    } else {
      navigate('/');
    }
  };

  const handleSignInWelcomeContinue = () => {
    const redirectPath = searchParams.get('redirect');
    if (redirectPath) {
      navigate(decodeURIComponent(redirectPath));
    } else {
      navigate('/');
    }
  };

  const handleSignUpSuccessContinue = () => {
    setStep('welcome');
  };

  const handleTermsAccept = () => {
    setStep('signup-success');
  };

  const handleTermsDecline = () => {
    setStep('auth');
    setActiveTab('signup');
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sos-orange"></div>
      </div>
    );
  }

  // Show different steps based on current step
  if (step === 'signup-success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        <SignupSuccess onClose={handleSignUpSuccessContinue} />
      </div>
    );
  }

  if (step === 'terms') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        <TermsAndConditions 
          onAccept={handleTermsAccept}
          onDecline={handleTermsDecline}
        />
      </div>
    );
  }

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        <SignUpWelcome onContinue={handleWelcomeContinue} />
      </div>
    );
  }

  if (step === 'signin-welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        <SignInWelcome onContinue={handleSignInWelcomeContinue} />
      </div>
    );
  }

  // Main auth form
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Button 
          variant="ghost" 
          asChild
          className="text-white hover:bg-gray-800"
        >
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </Button>
      </div>

      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-sos-orange" />
          </div>
          <CardTitle className="text-2xl text-white">SafeOrStolen</CardTitle>
          <CardDescription className="text-gray-300">
            Secure your purchases, verify before you buy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm mode={activeTab} onToggleMode={handleToggleMode} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;