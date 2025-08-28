import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Settings, CreditCard } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { navigateOutOfIframe } from '@/utils/navigationUtils';

const SubscriptionSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { session } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Refresh subscription status after successful checkout
    if (session) {
      supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });
    }
  }, [session]);

  const handleManageBilling = async () => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to manage your billing.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        navigateOutOfIframe(data.url);
      }
    } catch (error) {
      console.error('Error opening customer portal:', error);
      toast({
        title: "Error",
        description: "Failed to open billing portal. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Subscription Successful!
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Welcome to SafeOrStolen Premium! Your account has been upgraded.
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <CheckCircle className="w-4 h-4 mr-2" />
              Premium Plan Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">What's Included:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Unlimited verifications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Advanced fraud detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Detailed reports
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">Next Steps:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                  Start verifying items now
                </li>
                <li className="flex items-center">
                  <Settings className="w-4 h-4 mr-2 text-primary" />
                  Set up your preferences
                </li>
                <li className="flex items-center">
                  <CreditCard className="w-4 h-4 mr-2 text-primary" />
                  Manage your billing
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={() => navigate('/dashboard')}
              className="flex-1"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleManageBilling}
              disabled={isLoading}
              className="flex-1"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              {isLoading ? 'Loading...' : 'Manage Billing'}
            </Button>
          </div>

          {sessionId && (
            <div className="text-center pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Session ID: {sessionId.slice(0, 20)}...
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionSuccessPage;