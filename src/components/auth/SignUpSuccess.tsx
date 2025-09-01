import React from 'react';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SignUpSuccessProps {
  onContinue: () => void;
  emailVerificationRequired?: boolean;
  email?: string;
}

export const SignUpSuccess: React.FC<SignUpSuccessProps> = ({ 
  onContinue, 
  emailVerificationRequired = false,
  email 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <Card className="max-w-md w-full border border-border bg-card">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-card-foreground">
            {emailVerificationRequired ? 'Check Your Email!' : 'Welcome to SafeOrStolen!'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {emailVerificationRequired ? (
            <>
              <div className="text-center space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <Mail className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-card-foreground">
                    We've sent a verification link to:
                  </p>
                  <p className="font-semibold text-blue-700 break-words">
                    {email}
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Please:</p>
                  <ol className="text-left space-y-1 ml-4">
                    <li>1. Check your email inbox</li>
                    <li>2. Click the verification link</li>
                    <li>3. Return here to sign in</li>
                  </ol>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <p className="text-xs text-yellow-800">
                    💡 Check your spam folder if you don't see the email within 5 minutes
                  </p>
                </div>
              </div>
              <Button 
                onClick={onContinue}
                className="w-full"
                variant="outline"
              >
                Continue to Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <div className="text-center space-y-4">
                <p className="text-card-foreground">
                  🎉 Your account has been created successfully!
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">What's next?</h3>
                  <ul className="text-sm text-green-700 space-y-1 text-left">
                    <li>✓ Start with 5 free verifications</li>
                    <li>✓ Access your personalized dashboard</li>
                    <li>✓ Upgrade anytime for unlimited checks</li>
                  </ul>
                </div>
              </div>
              <Button 
                onClick={onContinue}
                className="w-full bg-sos-lime text-sos-dark hover:bg-sos-lime/90"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};