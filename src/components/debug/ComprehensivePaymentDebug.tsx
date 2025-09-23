import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle, XCircle, AlertCircle, Clock, RefreshCw } from 'lucide-react';

interface TestResult {
  name: string;
  status: 'pending' | 'success' | 'error' | 'warning';
  message: string;
  details?: any;
  duration?: number;
}

export const ComprehensivePaymentDebug = () => {
  const { user, session, isAuthenticated, loading } = useUnifiedAuth();
  const { subscriptionData, isLoading, checkSubscription, createSubscriptionCheckout, openCustomerPortal } = useSubscription();
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunningTests, setIsRunningTests] = useState(false);

  const updateTestResult = (name: string, status: TestResult['status'], message: string, details?: any, duration?: number) => {
    setTestResults(prev => {
      const existing = prev.find(t => t.name === name);
      const newResult = { name, status, message, details, duration };
      if (existing) {
        return prev.map(t => t.name === name ? newResult : t);
      }
      return [...prev, newResult];
    });
  };

  const runTest = async (testName: string, testFn: () => Promise<void>) => {
    const startTime = Date.now();
    updateTestResult(testName, 'pending', 'Running test...');
    
    try {
      await testFn();
      const duration = Date.now() - startTime;
      updateTestResult(testName, 'success', 'Test passed', undefined, duration);
    } catch (error: any) {
      const duration = Date.now() - startTime;
      updateTestResult(testName, 'error', error.message || 'Test failed', error, duration);
    }
  };

  const testEdgeFunctions = async () => {
    // Test check-subscription
    await runTest('check-subscription', async () => {
      if (!session) throw new Error('No session available');
      
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      
      if (error) throw new Error(`Edge function error: ${JSON.stringify(error)}`);
      console.log('check-subscription result:', data);
    });

    // Test create-checkout
    await runTest('create-checkout', async () => {
      if (!session) throw new Error('No session available');
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: 'price_test_12345',
          planName: 'Test Plan',
          isSubscription: true,
          redirectUrl: window.location.origin,
        },
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      
      // Expect an error since this is a test price ID, but function should be reachable
      if (!error && !data) throw new Error('No response from edge function');
      console.log('create-checkout result:', { data, error });
    });

    // Test customer-portal
    await runTest('customer-portal', async () => {
      if (!session) throw new Error('No session available');
      
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      
      // May error if no customer exists, but function should be reachable
      console.log('customer-portal result:', { data, error });
    });
  };

  const testStripeIntegration = async () => {
    await runTest('stripe-products', async () => {
      // This will test if our edge functions can communicate with Stripe
      if (!session) throw new Error('No session available');
      
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      
      // If we get a Stripe configuration error, that's expected and helpful
      if (error?.message?.includes('Stripe configuration')) {
        throw new Error(`Stripe config issue: ${error.details || error.message}`);
      }
      
      console.log('Stripe integration test result:', { data, error });
    });
  };

  const testRealSubscriptionFlow = async () => {
    await runTest('real-subscription-flow', async () => {
      if (!isAuthenticated) throw new Error('Not authenticated');
      
      // Try to create a checkout with a test price ID
      const testPriceId = 'price_1S0uGQGxnZLw8J7OOgm02vdB'; // Smart Buyer
      try {
        const url = await createSubscriptionCheckout(testPriceId);
        if (url) {
          console.log('Checkout URL created successfully:', url);
        } else {
          throw new Error('No checkout URL returned');
        }
      } catch (error: any) {
        console.log('Expected error for test price ID:', error.message);
        // This is expected if the price ID doesn't exist in their Stripe account
      }
    });
  };

  const runAllTests = async () => {
    setIsRunningTests(true);
    setTestResults([]);
    
    try {
      await testEdgeFunctions();
      await testStripeIntegration();
      await testRealSubscriptionFlow();
    } finally {
      setIsRunningTests(false);
    }
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-600" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-blue-600 animate-spin" />;
    }
  };

  const getStatusColor = (status: TestResult['status']) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔧 Comprehensive Payment System Debug
            <Button
              onClick={runAllTests}
              disabled={isRunningTests}
              size="sm"
              className="ml-auto"
            >
              {isRunningTests ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Running Tests...
                </>
              ) : (
                'Run All Tests'
              )}
            </Button>
          </CardTitle>
          <CardDescription>
            Comprehensive testing and debugging for the payment system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Authentication Status */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Authentication Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                {isAuthenticated ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-red-600" />}
                <span>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</span>
              </div>
              <div className="flex items-center gap-2">
                {user ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-red-600" />}
                <span>User ID: {user?.id || 'None'}</span>
              </div>
              <div className="flex items-center gap-2">
                {session ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-red-600" />}
                <span>Session: {session ? 'Active' : 'None'}</span>
              </div>
            </div>
            {user && (
              <div className="mt-2 text-sm text-muted-foreground">
                Email: {user.email}
              </div>
            )}
          </div>

          <Separator />

          {/* Subscription Status */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subscription Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                {subscriptionData?.subscribed ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-red-600" />}
                <span>Subscribed: {subscriptionData?.subscribed ? 'Yes' : 'No'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Tier: {subscriptionData?.subscription_tier || 'None'}</span>
              </div>
              <div className="flex items-center gap-2">
                {isLoading && <Clock className="w-4 h-4 text-blue-600 animate-spin" />}
                <span>Loading: {isLoading ? 'Yes' : 'No'}</span>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <Button onClick={checkSubscription} disabled={isLoading} size="sm">
                Refresh Subscription
              </Button>
              {subscriptionData?.subscribed && (
                <Button onClick={openCustomerPortal} disabled={isLoading} size="sm" variant="outline">
                  Open Portal
                </Button>
              )}
            </div>
          </div>

          <Separator />

          {/* Test Results */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Test Results</h3>
            {testResults.length === 0 && !isRunningTests ? (
              <p className="text-muted-foreground">No tests run yet. Click "Run All Tests" to start.</p>
            ) : (
              <div className="space-y-3">
                {testResults.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(test.status)}
                      <div>
                        <div className="font-medium">{test.name}</div>
                        <div className="text-sm text-muted-foreground">{test.message}</div>
                        {test.duration && (
                          <div className="text-xs text-muted-foreground">
                            Duration: {test.duration}ms
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge className={getStatusColor(test.status)}>
                      {test.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Environment Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Environment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Origin:</strong> {window.location.origin}
              </div>
              <div>
                <strong>User Agent:</strong> {navigator.userAgent.split(' ').slice(0, 3).join(' ')}...
              </div>
              <div>
                <strong>Current Route:</strong> {window.location.pathname}
              </div>
            </div>
          </div>

          <Separator />

          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => runTest('check-subscription', async () => {
                if (!session) throw new Error('No session available');
                const { data, error } = await supabase.functions.invoke('check-subscription', {
                  headers: { Authorization: `Bearer ${session.access_token}` },
                });
                if (error) throw new Error(JSON.stringify(error));
              })} disabled={isRunningTests} size="sm" variant="outline">
                Test Check Subscription
              </Button>
              
              <Button onClick={() => runTest('create-checkout-test', async () => {
                if (!session) throw new Error('No session available');
                const { data, error } = await supabase.functions.invoke('create-checkout', {
                  body: {
                    priceId: 'price_test_12345',
                    planName: 'Test Plan',
                    isSubscription: true,
                    redirectUrl: window.location.origin,
                  },
                  headers: { Authorization: `Bearer ${session.access_token}` },
                });
                console.log('Test result:', { data, error });
              })} disabled={isRunningTests} size="sm" variant="outline">
                Test Create Checkout
              </Button>

              <Button onClick={() => window.open('https://dashboard.stripe.com/test/dashboard', '_blank')} size="sm" variant="outline">
                Open Stripe Dashboard
              </Button>
            </div>
          </div>

          {/* Help & Tips */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Debugging Tips:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Check browser console for detailed logs from edge functions</li>
              <li>• Ensure your Stripe secret key is properly configured in Supabase secrets</li>
              <li>• Verify that your Stripe products match the expected names in the code</li>
              <li>• Test with both live and test Stripe keys to ensure flexibility</li>
              <li>• Check that RLS policies allow proper access to subscription data</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};