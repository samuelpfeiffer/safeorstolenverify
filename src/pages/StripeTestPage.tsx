import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

interface TestResult {
  name: string;
  status: 'pending' | 'success' | 'error';
  message?: string;
}

const StripeTestPage = () => {
  const { session, isAuthenticated } = useUnifiedAuth();
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);

  const updateResult = (name: string, status: 'success' | 'error', message?: string) => {
    setResults(prev => {
      const index = prev.findIndex(r => r.name === name);
      if (index >= 0) {
        const newResults = [...prev];
        newResults[index] = { name, status, message };
        return newResults;
      }
      return [...prev, { name, status, message }];
    });
  };

  const runTests = async () => {
    setTesting(true);
    setResults([
      { name: 'Authentication Check', status: 'pending' },
      { name: 'Stripe Secrets Check', status: 'pending' },
      { name: 'Database Tables Check', status: 'pending' },
      { name: 'Create Checkout Test', status: 'pending' },
    ]);

    // Test 1: Authentication
    if (!isAuthenticated || !session) {
      updateResult('Authentication Check', 'error', 'Not authenticated. Please sign in.');
      setTesting(false);
      return;
    }
    updateResult('Authentication Check', 'success', `Authenticated as: ${session.user.email}`);

    // Test 2: Check Stripe secrets (via edge function)
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;
      updateResult('Stripe Secrets Check', 'success', 'Stripe secrets configured correctly');
    } catch (error: any) {
      updateResult('Stripe Secrets Check', 'error', `Failed: ${error.message}`);
    }

    // Test 3: Check database tables
    try {
      const { data: purchases, error: purchasesError } = await supabase
        .from('purchases')
        .select('id')
        .limit(1);

      const { data: subscribers, error: subscribersError } = await supabase
        .from('subscribers')
        .select('id')
        .limit(1);

      const { data: webhookEvents, error: webhookError } = await supabase
        .from('stripe_webhook_events')
        .select('id')
        .limit(1);

      if (purchasesError || subscribersError || webhookError) {
        throw new Error('Database table check failed');
      }

      updateResult('Database Tables Check', 'success', 'All required tables exist');
    } catch (error: any) {
      updateResult('Database Tables Check', 'error', `Failed: ${error.message}`);
    }

    // Test 4: Create test checkout session
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          planName: 'Personal Plan',
          isSubscription: true,
          redirectUrl: window.location.origin,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        updateResult('Create Checkout Test', 'success', `Checkout URL created: ${data.url.substring(0, 50)}...`);
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error: any) {
      updateResult('Create Checkout Test', 'error', `Failed: ${error.message}`);
    }

    setTesting(false);
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="text-green-500" />;
      case 'error':
        return <XCircle className="text-red-500" />;
      case 'pending':
        return <Loader2 className="text-gray-400 animate-spin" />;
    }
  };

  return (
    <>
      <PageSEO
        title="Stripe Integration Test"
        description="Test Stripe payment integration"
        canonical="/stripe-test"
      />
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Stripe Integration Test</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isAuthenticated ? (
                <div className="text-center py-8">
                  <p className="text-lg mb-4">Please sign in to run the Stripe tests</p>
                  <Button onClick={() => window.location.href = '/auth'}>
                    Sign In
                  </Button>
                </div>
              ) : (
                <>
                  <Button 
                    onClick={runTests} 
                    disabled={testing}
                    size="lg"
                    className="w-full"
                  >
                    {testing ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" />
                        Running Tests...
                      </>
                    ) : (
                      'Run All Tests'
                    )}
                  </Button>

                  {results.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Test Results:</h3>
                      {results.map((result, index) => (
                        <Card key={index} className={
                          result.status === 'success' ? 'border-green-500' :
                          result.status === 'error' ? 'border-red-500' : ''
                        }>
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                              {getStatusIcon(result.status)}
                              <div className="flex-1">
                                <h4 className="font-semibold">{result.name}</h4>
                                {result.message && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {result.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {results.length > 0 && !testing && (
                    <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200">
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Next Steps:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Visit <a href="/pricing" className="text-blue-600 hover:underline">/pricing</a> to test the full checkout flow</li>
                          <li>Check webhook logs in Supabase dashboard</li>
                          <li>Verify Stripe dashboard for test payments</li>
                          <li>Test subscription cancellation in customer portal</li>
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StripeTestPage;
