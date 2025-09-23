import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';

export const PaymentSystemDebug = () => {
  const { user, session, isAuthenticated } = useUnifiedAuth();
  const { subscriptionData, isLoading } = useSubscription();
  const [testResults, setTestResults] = useState<Record<string, 'pending' | 'success' | 'error' | 'testing'>>({});
  const [testDetails, setTestDetails] = useState<Record<string, string>>({});

  const runTest = async (testName: string, testFn: () => Promise<void>) => {
    setTestResults(prev => ({ ...prev, [testName]: 'testing' }));
    try {
      await testFn();
      setTestResults(prev => ({ ...prev, [testName]: 'success' }));
      setTestDetails(prev => ({ ...prev, [testName]: 'Test passed successfully' }));
    } catch (error: any) {
      setTestResults(prev => ({ ...prev, [testName]: 'error' }));
      setTestDetails(prev => ({ ...prev, [testName]: error.message || 'Unknown error' }));
    }
  };

  const testAuthentication = async () => {
    if (!isAuthenticated || !session) {
      throw new Error('User not authenticated');
    }
    if (!session.access_token) {
      throw new Error('No access token found');
    }
  };

  const testCheckSubscription = async () => {
    if (!session) throw new Error('No session available');
    
    const { data, error } = await supabase.functions.invoke('check-subscription', {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    if (error) throw error;
    if (!data) throw new Error('No data returned from subscription check');
  };

  const testCreateCheckout = async () => {
    if (!session) throw new Error('No session available');
    
    const { data, error } = await supabase.functions.invoke('create-checkout', {
      body: {
        priceId: 'price_1S0uGQGxnZLw8J7OOgm02vdB',
        planName: 'Smart Buyer',
        isSubscription: true,
        redirectUrl: window.location.origin,
      },
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    if (error) throw error;
    if (!data?.url) throw new Error('No checkout URL returned');
  };

  const testCustomerPortal = async () => {
    if (!session) throw new Error('No session available');
    
    const { data, error } = await supabase.functions.invoke('customer-portal', {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    if (error) throw error;
    if (!data?.url) throw new Error('No portal URL returned');
  };

  const runAllTests = async () => {
    const tests = [
      { name: 'Authentication', fn: testAuthentication },
      { name: 'Check Subscription', fn: testCheckSubscription },
      { name: 'Create Checkout', fn: testCreateCheckout },
      { name: 'Customer Portal', fn: testCustomerPortal },
    ];

    for (const test of tests) {
      await runTest(test.name, test.fn);
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'testing':
        return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-gray-300" />;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Payment System Debug
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Auth Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Authentication Status</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center justify-between">
                <span>Authenticated:</span>
                <Badge variant={isAuthenticated ? 'default' : 'destructive'}>
                  {isAuthenticated ? 'Yes' : 'No'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>User ID:</span>
                <span className="truncate max-w-24" title={user?.id}>
                  {user?.id ? user.id.substring(0, 8) + '...' : 'None'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Email:</span>
                <span className="truncate max-w-32" title={user?.email}>
                  {user?.email || 'None'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Subscription Status</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center justify-between">
                <span>Subscribed:</span>
                <Badge variant={subscriptionData?.subscribed ? 'default' : 'secondary'}>
                  {subscriptionData?.subscribed ? 'Yes' : 'No'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Tier:</span>
                <span>{subscriptionData?.subscription_tier || 'None'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Loading:</span>
                <Badge variant={isLoading ? 'destructive' : 'secondary'}>
                  {isLoading ? 'Yes' : 'No'}
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">System Tests</h3>
            <div className="space-y-2">
              <Button 
                onClick={runAllTests} 
                size="sm" 
                className="w-full"
                disabled={Object.values(testResults).some(status => status === 'testing')}
              >
                {Object.values(testResults).some(status => status === 'testing') ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Testing...
                  </>
                ) : (
                  'Run All Tests'
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Test Results */}
        {Object.keys(testResults).length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold">Test Results</h3>
            <div className="space-y-2">
              {Object.entries(testResults).map(([testName, status]) => (
                <div key={testName} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(status)}
                    <span className="font-medium">{testName}</span>
                  </div>
                  <div className="text-sm text-muted-foreground max-w-md truncate">
                    {testDetails[testName] || 'No details available'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Debug Info */}
        <div className="space-y-2">
          <h3 className="font-semibold">Environment Info</h3>
          <div className="text-xs font-mono bg-muted p-3 rounded-lg space-y-1">
            <div>Origin: {window.location.origin}</div>
            <div>Supabase URL: {process.env.NODE_ENV === 'development' ? 'Local' : 'Production'}</div>
            <div>Timestamp: {new Date().toISOString()}</div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>💡 <strong>Debug Tips:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Check browser console for detailed logs from edge functions</li>
            <li>Ensure Stripe live secret key is configured in Supabase secrets</li>
            <li>Verify Stripe products exist with correct names in live dashboard</li>
            <li>Test authentication flow before payment testing</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};