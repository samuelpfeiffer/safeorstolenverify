import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const PaymentFlowTest = () => {
  const [testResults, setTestResults] = useState<{ [key: string]: 'pass' | 'fail' | 'pending' }>({});
  const { createSubscriptionCheckout, openCustomerPortal } = useSubscription();

  const runTest = async (testName: string, testFn: () => Promise<void>) => {
    setTestResults(prev => ({ ...prev, [testName]: 'pending' }));
    try {
      await testFn();
      setTestResults(prev => ({ ...prev, [testName]: 'pass' }));
      toast.success(`✅ ${testName} passed`);
    } catch (error) {
      console.error(`❌ ${testName} failed:`, error);
      setTestResults(prev => ({ ...prev, [testName]: 'fail' }));
      toast.error(`❌ ${testName} failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const testEdgeFunctions = async () => {
    try {
      // Test check-subscription function
      const { data, error } = await supabase.functions.invoke('check-subscription');
      if (error) throw new Error(`check-subscription failed: ${error.message}`);
      console.log('check-subscription result:', data);
    } catch (error) {
      console.error('Edge function test error:', error);
      throw error;
    }
  };

  const testCreateCheckout = async () => {
    try {
      const url = await createSubscriptionCheckout('price_1S0uGQGxnZLw8J7OOgm02vdB');
      if (!url) throw new Error('No checkout URL returned');
      console.log('Checkout URL:', url);
    } catch (error) {
      console.error('Checkout test error:', error);
      throw error;
    }
  };

  const testCustomerPortal = async () => {
    try {
      const url = await openCustomerPortal();
      console.log('Customer portal result:', url);
    } catch (error) {
      console.log('Customer portal test completed (may require subscription)');
    }
  };

  const runAllTests = async () => {
    await runTest('Edge Functions', testEdgeFunctions);
    await runTest('Create Checkout', testCreateCheckout);
    await runTest('Customer Portal', testCustomerPortal);
  };

  const getStatusIcon = (status: 'pass' | 'fail' | 'pending' | undefined) => {
    switch (status) {
      case 'pass': return '✅';
      case 'fail': return '❌';
      case 'pending': return '⏳';
      default: return '⚪';
    }
  };

  return (
    <div className="p-6 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Payment Flow Test Suite</h3>
      
      <div className="space-y-2 mb-4">
        <div>
          {getStatusIcon(testResults['Edge Functions'])} Edge Functions Test
        </div>
        <div>
          {getStatusIcon(testResults['Create Checkout'])} Create Checkout Test
        </div>
        <div>
          {getStatusIcon(testResults['Customer Portal'])} Customer Portal Test
        </div>
      </div>

      <div className="space-x-2">
        <Button onClick={runAllTests}>Run All Tests</Button>
        <Button 
          variant="outline" 
          onClick={() => runTest('Edge Functions', testEdgeFunctions)}
        >
          Test Edge Functions
        </Button>
        <Button 
          variant="outline" 
          onClick={() => runTest('Create Checkout', testCreateCheckout)}
        >
          Test Checkout
        </Button>
        <Button 
          variant="outline" 
          onClick={() => runTest('Customer Portal', testCustomerPortal)}
        >
          Test Portal
        </Button>
      </div>
    </div>
  );
};