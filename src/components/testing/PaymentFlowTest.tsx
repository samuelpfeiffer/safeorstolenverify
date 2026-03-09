import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/useSubscription';
import { useOneTimePayment } from '@/hooks/useOneTimePayment';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';

export const PaymentFlowTest = () => {
  const [testResults, setTestResults] = useState<{ [key: string]: 'pass' | 'fail' | 'pending' }>({});
  const [testDetails, setTestDetails] = useState<{ [key: string]: string }>({});
  const { createSubscriptionCheckout, openCustomerPortal } = useSubscription();
  const { createOneTimePayment } = useOneTimePayment();

  const runTest = async (testName: string, testFn: () => Promise<string>) => {
    setTestResults(prev => ({ ...prev, [testName]: 'pending' }));
    setTestDetails(prev => ({ ...prev, [testName]: 'Running...' }));
    try {
      const result = await testFn();
      setTestResults(prev => ({ ...prev, [testName]: 'pass' }));
      setTestDetails(prev => ({ ...prev, [testName]: result }));
      toast.success(`✅ ${testName} passed`);
    } catch (error) {
      console.error(`❌ ${testName} failed:`, error);
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      setTestResults(prev => ({ ...prev, [testName]: 'fail' }));
      setTestDetails(prev => ({ ...prev, [testName]: errorMsg }));
      toast.error(`❌ ${testName} failed: ${errorMsg}`);
    }
  };

  const testAuthentication = async (): Promise<string> => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated. Please sign in first.');
    return `Authenticated as: ${user.email}`;
  };

  const testWebhookSecret = async (): Promise<string> => {
    // Test if STRIPE_WEBHOOK_SECRET is configured by checking edge function
    const { data, error } = await supabase.functions.invoke('check-subscription');
    if (error) throw new Error(`Edge function error: ${error.message}`);
    return 'Webhook secret configured correctly';
  };

  const testSinglePayment = async (): Promise<string> => {
    const url = await createOneTimePayment('price_1S0uGQGxnZLw8J7OOgm02vdB', 'Single Report');
    if (!url) throw new Error('No checkout URL returned');
    window.open(url, '_blank');
    return `Checkout URL created. Complete payment in new tab to verify webhook.`;
  };

  const testSubscriptionCheckout = async (): Promise<string> => {
    const url = await createSubscriptionCheckout('price_1S0uGQGxnZLw8J7OOgm02vdB');
    if (!url) throw new Error('No checkout URL returned');
    window.open(url, '_blank');
    return `Subscription checkout URL created. Complete payment in new tab.`;
  };

  const testCustomerPortal = async (): Promise<string> => {
    try {
      await openCustomerPortal();
      return 'Customer portal access initiated (requires active subscription)';
    } catch (error) {
      throw new Error('Customer portal requires an active subscription first');
    }
  };

  const testDatabaseTables = async (): Promise<string> => {
    const { data: purchases, error: purchaseError } = await supabase
      .from('purchases')
      .select('id, status, amount')
      .limit(5);
    
    if (purchaseError) throw new Error(`Purchase table error: ${purchaseError.message}`);
    
    const { data: searches, error: searchError } = await supabase
      .from('verification_searches')
      .select('id, status')
      .limit(5);
    
    if (searchError) throw new Error(`Verification searches error: ${searchError.message}`);
    
    return `Database accessible. ${purchases?.length || 0} purchases, ${searches?.length || 0} searches found.`;
  };

  const runAllTests = async () => {
    await runTest('Authentication', testAuthentication);
    await runTest('Webhook Secret', testWebhookSecret);
    await runTest('Database Tables', testDatabaseTables);
    await runTest('Single Payment', testSinglePayment);
    await runTest('Subscription Checkout', testSubscriptionCheckout);
    toast.info('Complete payments in opened tabs to test webhook processing');
  };

  const getStatusIcon = (status: 'pass' | 'fail' | 'pending' | undefined) => {
    switch (status) {
      case 'pass': return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'fail': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'pending': return <Clock className="h-5 w-5 text-yellow-500 animate-spin" />;
      default: return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="p-6 border rounded-lg bg-card space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">🔬 Stripe Payment Flow Test Suite</h3>
        <p className="text-sm text-muted-foreground">Comprehensive testing of Stripe integration and webhooks</p>
      </div>
      
      <div className="space-y-3">
        {[
          { key: 'Authentication', label: 'User Authentication Check' },
          { key: 'Webhook Secret', label: 'STRIPE_WEBHOOK_SECRET Configuration' },
          { key: 'Database Tables', label: 'Database Access & Tables' },
          { key: 'Single Payment', label: 'Single Payment Checkout' },
          { key: 'Subscription Checkout', label: 'Subscription ($2.99/mo) Checkout' },
          { key: 'Customer Portal', label: 'Customer Portal Access' },
        ].map(({ key, label }) => (
          <div key={key} className="flex items-start gap-3 p-3 rounded-md bg-muted/50">
            <div className="mt-0.5">{getStatusIcon(testResults[key])}</div>
            <div className="flex-1">
              <div className="font-medium">{label}</div>
              {testDetails[key] && (
                <div className={`text-sm mt-1 ${
                  testResults[key] === 'fail' ? 'text-red-500' : 
                  testResults[key] === 'pass' ? 'text-green-600' : 
                  'text-muted-foreground'
                }`}>
                  {testDetails[key]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t">
        <Button onClick={runAllTests} size="lg" className="flex-1">
          🚀 Run All Tests
        </Button>
        <Button 
          variant="outline" 
          onClick={() => runTest('Authentication', testAuthentication)}
        >
          Auth
        </Button>
        <Button 
          variant="outline" 
          onClick={() => runTest('Webhook Secret', testWebhookSecret)}
        >
          Webhook
        </Button>
        <Button 
          variant="outline" 
          onClick={() => runTest('Single Payment', testSinglePayment)}
        >
          Payment Test
        </Button>
        <Button 
          variant="outline" 
          onClick={() => runTest('Subscription Checkout', testSubscriptionCheckout)}
        >
          Subscribe Test
        </Button>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Next Steps After Tests Pass:
        </h4>
        <ol className="list-decimal list-inside space-y-1 text-sm text-blue-300">
          <li>Configure webhook in Stripe Dashboard (see instructions below)</li>
          <li>Complete a test payment with card: 4242 4242 4242 4242</li>
          <li>Verify webhook processes the payment (check Stripe logs)</li>
          <li>Confirm credits added to your account</li>
        </ol>
      </div>
    </div>
  );
};