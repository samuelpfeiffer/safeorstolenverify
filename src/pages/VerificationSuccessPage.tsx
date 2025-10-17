import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { useSecureStripe } from '@/utils/stripe/secureStripeOperations';

const VerificationSuccessPage = () => {
  const [searchParams] = useSafeSearchParams();
  const sessionId = searchParams.get('session_id');
  const verificationId = searchParams.get('verification_id');
  const [loading, setLoading] = useState(true);
  const [verificationData, setVerificationData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  
  const { secureProcessVerification } = useSecureStripe();

  useEffect(() => {
    const processVerification = async () => {
      if (!sessionId) {
        setError('No session ID found');
        setLoading(false);
        return;
      }

      try {
        if (verificationId) {
          // Process specific verification
          const data = await secureProcessVerification(verificationId);
          if (data) {
            setVerificationData(data);
          } else {
            setError('Failed to retrieve verification data');
          }
        }
      } catch (err) {
        console.error('Verification processing error:', err);
        setError('Failed to process verification');
      } finally {
        setLoading(false);
      }
    };

    processVerification();
  }, [sessionId, verificationId, secureProcessVerification]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange mx-auto mb-4"></div>
              <p>Processing your verification...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-red-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <CardTitle className="text-red-700">Payment Processing Error</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-red-600 mb-4">{error}</p>
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <Link to="/">Return Home</Link>
                </Button>
                <Button asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="border-green-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <CardTitle className="text-green-700">Payment Successful!</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-green-600">
              Your payment has been processed successfully.
            </p>
            
            {verificationData ? (
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Verification Details:</h3>
                <p><strong>Item:</strong> {verificationData.item_type}</p>
                <p><strong>Serial Number:</strong> {verificationData.serial_number}</p>
                <p><strong>Status:</strong> Verified</p>
              </div>
            ) : (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>Your subscription is now active. You can start using all premium features.</p>
              </div>
            )}
            
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link to="/" className="flex items-center gap-2">
                  Continue <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              {verificationId && (
                <Button asChild variant="outline">
                  <Link to={`/verification-results/${verificationId}`}>
                    View Results
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerificationSuccessPage;
