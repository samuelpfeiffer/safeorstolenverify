import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowRight, Search, History, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SignInWelcomeProps {
  userName?: string;
  onContinue: () => void;
  isLoading?: boolean;
}

export const SignInWelcome = ({ userName, onContinue, isLoading = false }: SignInWelcomeProps) => {
  const navigate = useNavigate();

  const handleStartVerification = () => {
    navigate('/dashboard');
  };

  const handleViewHistory = () => {
    navigate('/dashboard?tab=history');
  };

  const quickActions = [
    {
      icon: Search,
      title: "Start New Verification",
      description: "Check a serial number, IMEI, or VIN right away",
      action: "Start Checking",
      onClick: handleStartVerification,
      primary: true
    },
    {
      icon: History,
      title: "View Search History",
      description: "See your previous verifications and results",
      action: "View History",
      onClick: handleViewHistory
    },
    {
      icon: Zap,
      title: "Upgrade Account",
      description: "Get unlimited searches for $10/month",
      action: "View Plans",
      onClick: () => navigate('/pricing')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border border-border bg-card shadow-xl">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-sos-lime" />
            </div>
            <CardTitle className="text-3xl text-card-foreground mb-2">
              Welcome Back{userName ? `, ${userName}!` : '!'}
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              Ready to verify items and protect yourself from stolen goods?
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center text-foreground">
                What would you like to do?
              </h3>
              
              {quickActions.map((action, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 p-4 rounded-lg border transition-colors ${
                    action.primary 
                      ? 'bg-primary/5 border-primary/20 hover:border-primary/40' 
                      : 'bg-background border-border hover:border-primary/20'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-full ${
                      action.primary ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <action.icon className={`h-6 w-6 ${
                        action.primary ? 'text-primary' : 'text-primary'
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{action.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                    <Button 
                      variant={action.primary ? "default" : "outline"}
                      size="sm" 
                      onClick={action.onClick}
                      className="gap-2"
                    >
                      {action.action}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats or Recent Activity could go here in the future */}
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Tip:</strong> You can access all your search history and account settings from the dashboard.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col gap-3 pt-4">
              <Button 
                onClick={handleStartVerification} 
                size="lg" 
                className="w-full bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Go to Dashboard'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={onContinue}
                disabled={isLoading}
                className="w-full text-sm"
              >
                Skip Welcome
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};