/**
 * Payment Success Page
 * Clear confirmation after successful payment
 */

import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from '@/lib/router-compat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, ArrowRight, Download, Loader2, PartyPopper } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { supabase } from '@/integrations/supabase/client';
import confetti from 'canvas-confetti';
import { takePendingCheck, clearPendingCheck, pendingCheckUrl, type PendingCheck } from '@/lib/pendingCheck';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState<{
    amount?: string;
    planName?: string;
    verificationId?: string;
  }>({});

  const sessionId = searchParams.get('session_id');
  const verificationId = searchParams.get('verification_id');
  // Oct 5 2026: the item the visitor paid to check (saved before checkout), so we can run it now.
  const [pending, setPending] = useState<PendingCheck | null>(null);

  useEffect(() => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Oct 5 2026: the old copy always said "Unlimited Plan / $0.99", whatever was bought, and
    // the button sent guests to a dashboard they don't have. Give Stripe's webhook a few seconds
    // to record the purchase, then offer to run the check they paid for.
    setPending(takePendingCheck());
    if (verificationId) setPaymentDetails({ verificationId });
    const t = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(t);
  }, [sessionId, verificationId]);

  const handleContinue = () => {
    if (pending) {
      clearPendingCheck();
      navigate(pendingCheckUrl(pending));
    } else if (verificationId) {
      navigate(`/verify?verification_id=${verificationId}`);
    } else {
      navigate('/verify');
    }
  };

  return (
    <>
      <PageSEO
        title="Payment Successful | SafeOrStolen"
        description="Your payment was successful. Continue to your verification."
        canonical="/payment-success"
      />

      <div className="container mx-auto px-4 py-16 max-w-lg">
        <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-background to-primary/5">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <CardTitle className="text-2xl font-bold text-accent flex items-center justify-center gap-2">
              <PartyPopper className="w-6 h-6" />
              Payment Successful!
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <>
                {/* Payment summary */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Product</span>
                    <span className="font-medium">{pending ? `Full check for ${pending.q}` : 'SafeOrStolen purchase'}</span>
                  </div>
                  {sessionId && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Transaction ID</span>
                      <span className="font-mono text-xs">{sessionId.slice(-12)}</span>
                    </div>
                  )}
                </div>

                {/* What's next */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-center">What's Next?</h3>
                  
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{pending ? 'Your full check is ready to run' : 'Your purchase is active'}</p>
                      <p className="text-xs text-muted-foreground">
                        {pending
                          ? 'We saved the number you were checking. Run it now to get the full result, including every paid source.'
                          : 'Run your check now. Paid checks include every source, such as the phone blacklist for IMEIs.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={handleContinue}
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  {pending ? 'Run my full check now' : 'Start checking'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Receipt */}
                <p className="text-center text-xs text-muted-foreground">
                  A receipt has been sent to your email.
                  <br />
                  Need help? <a href="/contact" className="text-primary hover:underline">Contact support</a>
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PaymentSuccessPage;
