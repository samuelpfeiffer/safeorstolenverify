import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck, ArrowRight, Download, Home } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const VerificationSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useUnifiedAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [verificationData, setVerificationData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const sessionId = searchParams.get('session_id');
  const verificationId = searchParams.get('verification_id');

  useEffect(() => {
    const fetchVerificationData = async () => {
      if (authLoading) return;

      if (!verificationId) {
        // No verification ID - just show generic success
        setIsLoading(false);
        return;
      }

      try {
        const { data, error: fetchError } = await supabase
          .from('verification_searches')
          .select('*, purchases(*)')
          .eq('id', verificationId)
          .maybeSingle();

        if (fetchError) {
          console.error('[VERIFICATION-SUCCESS] Error fetching data:', fetchError);
          setError('Unable to load verification details');
        } else {
          setVerificationData(data);
        }
      } catch (err: any) {
        console.error('[VERIFICATION-SUCCESS] Error:', err);
        setError(err.message || 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVerificationData();
  }, [verificationId, authLoading]);

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <AppLoadingScreen />
      </div>
    );
  }

  return (
    <>
      <PageSEO
        title="Payment Successful | SafeOrStolen"
        description="Your payment was successful. View your verification results."
        canonical="/verification-success"
        noIndex={true}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full p-8 text-center space-y-6">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-accent" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-foreground">
              Payment Successful!
            </h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your verification is ready.
            </p>
          </div>

          {/* Verification Details */}
          {verificationData && (
            <div className="bg-muted/50 rounded-lg p-4 text-left space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="font-medium">Verification Details</span>
              </div>
              {verificationData.serial_number && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Serial/IMEI:</span> {verificationData.serial_number}
                </p>
              )}
              {verificationData.item_type && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Item Type:</span> {verificationData.item_type}
                </p>
              )}
              {verificationData.status && (
                <p className="text-sm">
                  <span className="font-medium">Status:</span>{' '}
                  <span className={verificationData.status === 'safe' ? 'text-accent' : 'text-destructive'}>
                    {verificationData.status === 'safe' ? '✓ Safe' : '⚠ Flagged'}
                  </span>
                </p>
              )}
            </div>
          )}

          {/* Session ID */}
          {sessionId && (
            <p className="text-xs text-muted-foreground">
              Transaction ID: {sessionId.slice(0, 20)}...
            </p>
          )}

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-primary hover:bg-primary/90"
            >
              View Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {verificationData && (
              <Button
                variant="outline"
                onClick={() => navigate(`/verify?id=${verificationId}`)}
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                View Full Report
              </Button>
            )}

            <Link to="/" className="block">
              <Button variant="ghost" className="w-full text-muted-foreground">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
          </div>

          {/* Error State */}
          {error && (
            <p className="text-sm text-destructive">
              {error}
            </p>
          )}

          {/* Trust Badge */}
          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <ShieldCheck className="w-3 h-3" />
              Secure payment processed by Stripe
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default VerificationSuccessPage;
