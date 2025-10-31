import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OneTimePaymentTest from '@/components/testing/OneTimePaymentTest';
import { PaymentFlowTest } from '@/components/testing/PaymentFlowTest';
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
          
          {/* Comprehensive Test Suite */}
          <Card className="mt-8 bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="text-white">Payment Flow Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <PaymentFlowTest />
            </CardContent>
          </Card>

          {/* Stripe Webhook Configuration */}
          <Card className="mt-8 bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TestTube className="h-5 w-5" />
                Stripe Webhook Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="bg-green-900/30 border border-green-600/30 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-100 mb-2">✅ STRIPE_WEBHOOK_SECRET Added!</h4>
                <p className="text-green-200">
                  The webhook secret has been added to Supabase. Now configure it in Stripe Dashboard.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Configure Webhook in Stripe Dashboard:</h4>
                <ol className="list-decimal list-inside space-y-3">
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Go to Stripe Dashboard:</span>
                    <a 
                      href="https://dashboard.stripe.com/test/webhooks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-sos-orange hover:underline"
                    >
                      https://dashboard.stripe.com/test/webhooks
                    </a>
                  </li>
                  
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Click "Add endpoint"</span>
                  </li>
                  
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Endpoint URL:</span>
                    <code className="block mt-2 p-2 bg-black/40 rounded text-green-400 text-xs overflow-x-auto">
                      https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/stripe-webhook
                    </code>
                  </li>
                  
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Select events to listen to:</span>
                    <ul className="mt-2 ml-6 space-y-1 text-sm">
                      <li>✓ <code className="text-blue-400">checkout.session.completed</code></li>
                      <li>✓ <code className="text-blue-400">customer.subscription.created</code></li>
                      <li>✓ <code className="text-blue-400">customer.subscription.updated</code></li>
                      <li>✓ <code className="text-blue-400">customer.subscription.deleted</code></li>
                      <li>✓ <code className="text-blue-400">payment_intent.succeeded</code></li>
                      <li>✓ <code className="text-blue-400">payment_intent.payment_failed</code></li>
                    </ul>
                  </li>
                  
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Click "Add endpoint"</span>
                  </li>
                  
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Copy the "Signing secret"</span> (starts with whsec_...)
                  </li>
                  
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Update STRIPE_WEBHOOK_SECRET</span> in Supabase with the signing secret you just copied
                  </li>
                </ol>
              </div>

              <div className="bg-blue-900/30 border border-blue-600/30 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-100 mb-2">Testing with Stripe Test Cards:</h4>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li><strong>Success:</strong> <code>4242 4242 4242 4242</code></li>
                  <li><strong>Decline:</strong> <code>4000 0000 0000 0002</code></li>
                  <li><strong>3D Secure:</strong> <code>4000 0025 0000 3155</code></li>
                  <li><strong>Use any future expiry date and any 3-digit CVC</strong></li>
                </ul>
              </div>

              <div className="bg-amber-900/30 border border-amber-600/30 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-100 mb-2">Verify Webhook Processing:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-amber-200">
                  <li>Complete a test payment</li>
                  <li>Go to Stripe Dashboard → Developers → Webhooks</li>
                  <li>Click on your endpoint</li>
                  <li>Check "Events" tab to see if webhook was called</li>
                  <li>Look for "200" response code (success)</li>
                  <li>Check your database for the new purchase record</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestOneTimePaymentPage;