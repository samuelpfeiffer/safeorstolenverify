import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Sparkles, Star, Gift, Shield, Zap, CreditCard, ArrowRight } from 'lucide-react';
import { useAuth } from '@/lib/auth';

interface SignUpWelcomeProps {
  onContinue: () => void;
  isLoading?: boolean;
}

export const SignUpWelcome = ({ onContinue, isLoading = false }: SignUpWelcomeProps) => {
  const navigate = useNavigate();

  const handleStartVerification = () => {
    navigate('/dashboard');
  };

  const nextSteps = [
    {
      icon: Shield,
      title: "Start Verifying Items",
      description: "You get 2 free verifications to check any serial number, IMEI, or VIN. Valid for 14 days.",
      action: "Try Your First Check",
      onClick: handleStartVerification
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get verification results in seconds from multiple databases including police reports.",
      action: "Learn How It Works",
      onClick: () => window.open('/how-it-works', '_blank')
    },
    {
      icon: CreditCard,
      title: "Upgrade Anytime",
      description: "Need more searches? Upgrade to unlimited verifications for just $4.99/month.",
      action: "View Subscriptions",
      onClick: () => navigate('/pricing')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border border-border bg-card shadow-xl">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Shield className="h-16 w-16 text-sos-lime" />
                <CheckCircle className="h-8 w-8 text-green-500 absolute -top-2 -right-2 bg-background rounded-full p-1" />
              </div>
            </div>
            <CardTitle className="text-3xl text-card-foreground mb-2">
              🎉 Thank You for Signing Up!
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              Welcome to Safe or Stolen - Your protection against stolen goods starts now!
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* What's Next Section */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                What's Next? Here's How to Get Started:
              </h3>
              
              <div className="space-y-4">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/20 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={step.onClick}
                        className="gap-2"
                      >
                        {step.action}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Free Benefits */}
            <div className="bg-sos-lime/10 border border-sos-lime/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <Zap className="h-5 w-5 text-sos-lime" />
                Your Free Account Includes:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  2 free verifications (14-day trial)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Access to multiple stolen goods databases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  IMEI, VIN, and serial number checking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Firearms database search (HotGunz)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Instant verification results
                </li>
              </ul>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col gap-3 pt-4">
              <Button 
                onClick={handleStartVerification} 
                size="lg" 
                className="w-full bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Start My First Verification'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={onContinue}
                disabled={isLoading}
                className="w-full"
              >
                Continue to Dashboard
              </Button>
            </div>

            {/* Help Text */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Need help getting started? 
                <Button variant="link" className="p-0 ml-1 h-auto text-sm" asChild>
                  <Link to="/faq">Contact our support team</Link>
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};