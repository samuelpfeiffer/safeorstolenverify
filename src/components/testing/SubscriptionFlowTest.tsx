import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { navigateOutOfIframe } from '@/utils/navigationUtils';

interface TestResult {
  tier: string;
  priceId: string;
  status: 'idle' | 'testing' | 'success' | 'error';
  message?: string;
  checkoutUrl?: string;
}

export const SubscriptionFlowTest: React.FC = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([
    { tier: 'Basic', priceId: 'price_1Rz7rm2eGaMDLFHojH9Vch1Y', status: 'idle' },
    { tier: 'Premium', priceId: 'price_1Rz7xu2eGaMDLFHoqGT0Pyjk', status: 'idle' },
    { tier: 'Enterprise', priceId: 'price_1Rz80X2eGaMDLFHozeZyChte', status: 'idle' }
  ]);
  const { toast } = useToast();
  const { session } = useAuth();

  const testSubscriptionFlow = async (index: number) => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to test subscription flows.",
        variant: "destructive",
      });
      return;
    }

    const result = testResults[index];
    
    // Update status to testing
    setTestResults(prev => prev.map((r, i) => 
      i === index ? { ...r, status: 'testing' as const, message: undefined } : r
    ));

    try {
      console.log(`[Test] Testing ${result.tier} subscription with price ID: ${result.priceId}`);
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          priceId: result.priceId, 
          isSubscription: true, 
          planName: `${result.tier} Plan`,
          redirectUrl: window.location.origin 
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        throw error;
      }

      if (data?.url) {
        console.log(`[Test] ✅ ${result.tier} checkout URL created: ${data.url}`);
        setTestResults(prev => prev.map((r, i) => 
          i === index ? { 
            ...r, 
            status: 'success' as const, 
            message: 'Checkout URL created successfully',
            checkoutUrl: data.url 
          } : r
        ));
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error: any) {
      console.error(`[Test] ❌ ${result.tier} subscription failed:`, error);
      setTestResults(prev => prev.map((r, i) => 
        i === index ? { 
          ...r, 
          status: 'error' as const, 
          message: error.message || 'Unknown error occurred' 
        } : r
      ));
    }
  };

  const testAllFlows = async () => {
    for (let i = 0; i < testResults.length; i++) {
      await testSubscriptionFlow(i);
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  const openCheckout = (url: string) => {
    navigateOutOfIframe(url);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Subscription Flow Test Dashboard</CardTitle>
        <Button onClick={testAllFlows} className="w-fit">
          Test All Subscription Flows
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {testResults.map((result, index) => (
          <Card key={result.tier} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {result.status === 'testing' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {result.status === 'success' && <CheckCircle className="w-4 h-4 text-green-500" />}
                  {result.status === 'error' && <XCircle className="w-4 h-4 text-red-500" />}
                  <span className="font-medium">{result.tier} Plan</span>
                </div>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {result.priceId}
                </code>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => testSubscriptionFlow(index)}
                  disabled={result.status === 'testing'}
                  variant="outline"
                  size="sm"
                >
                  {result.status === 'testing' ? 'Testing...' : 'Test'}
                </Button>
                
                {result.checkoutUrl && (
                  <Button
                    onClick={() => openCheckout(result.checkoutUrl!)}
                    size="sm"
                  >
                    Open Checkout
                  </Button>
                )}
              </div>
            </div>
            
            {result.message && (
              <div className={`mt-2 text-sm ${
                result.status === 'error' ? 'text-red-600' : 'text-green-600'
              }`}>
                {result.message}
              </div>
            )}
            
            {result.checkoutUrl && (
              <div className="mt-2 text-xs text-gray-500 break-all">
                URL: {result.checkoutUrl}
              </div>
            )}
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};