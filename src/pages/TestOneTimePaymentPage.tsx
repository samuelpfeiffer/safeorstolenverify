import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OneTimePaymentTest from '@/components/testing/OneTimePaymentTest';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, TestTube } from 'lucide-react';

const TestOneTimePaymentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sos via-sos-dark to-sos-darker">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TestTube className="h-8 w-8 text-sos-orange" />
            <h1 className="text-4xl font-bold text-white">One-Time Payment Test</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Test the $10 single report purchase functionality. This should create a one-time payment, 
            not a subscription.
          </p>
        </div>

        {/* Test Component */}
        <div className="max-w-2xl mx-auto">
          <OneTimePaymentTest />
          
          {/* Test Instructions */}
          <Card className="mt-8 bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TestTube className="h-5 w-5" />
                Test Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Testing Steps:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Make sure you're signed in</li>
                  <li>Enter a test serial number (e.g., "TEST123456789")</li>
                  <li>Select an item type</li>
                  <li>Click "Purchase Report"</li>
                  <li>You should be redirected to Stripe Checkout</li>
                  <li>Use test card: 4242 4242 4242 4242</li>
                  <li>Use any future date and CVC</li>
                  <li>Complete the payment</li>
                  <li>You should be redirected back to the dashboard</li>
                </ol>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Expected Behavior:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>This creates a ONE-TIME payment (mode: "payment")</li>
                  <li>NOT a subscription (no recurring billing)</li>
                  <li>Webhook should update the verification_searches table</li>
                  <li>User should see the verification result after payment</li>
                </ul>
              </div>

              <div className="bg-amber-900/30 border border-amber-600/30 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-100 mb-2">Security Check Status:</h4>
                <p className="text-amber-200">
                  ✅ Stripe webhook is properly secured with signature verification using STRIPE_WEBHOOK_SECRET
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestOneTimePaymentPage;