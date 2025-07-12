
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useRealVerification } from '@/hooks/useRealVerification';
import RealVerificationCard from '@/components/verification/RealVerificationCard';
import { Smartphone, Loader2, AlertTriangle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { normalizeVerificationStatus, type VerificationStatus } from '@/utils/typeGuards';

interface VerificationResult {
  id: string;
  status: VerificationStatus;
  confidence: number;
  source: string;
  details?: any;
  message?: string;
  verified_at: string;
  serial_number: string;
  item_type: string;
}

const VerifiedProduct = () => {
  const location = useLocation();
  const [searchParams] = useState<URLSearchParams>(() => {
    return new URLSearchParams(location.search);
  });
  
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVerificationResult = async () => {
      if (!verificationId && !serialNumber) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        if (verificationId) {
          // Fetch specific verification result by ID
          const { data, error } = await supabase
            .from('verification_results')
            .select('*')
            .eq('id', verificationId)
            .single();

          if (error) {
            console.error('Error fetching verification result:', error);
            setError('Verification result not found');
            return;
          }

          // Safely convert the database string to our strict type
          const normalizedStatus = normalizeVerificationStatus(data.verification_status);

          setVerificationResult({
            id: data.id,
            status: normalizedStatus,
            confidence: data.confidence_score,
            source: data.api_source,
            details: data.api_response,
            message: `Verified via ${data.api_source}`,
            verified_at: data.verified_at,
            serial_number: data.serial_number,
            item_type: data.item_type
          });
        } else if (serialNumber) {
          // For backward compatibility, show message to perform verification
          setError('Please perform a new verification for this item');
        }

      } catch (err) {
        console.error('Error fetching verification:', err);
        setError('Failed to load verification result');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVerificationResult();
  }, [verificationId, serialNumber]);

  // Display loading state when data is being fetched
  if (isLoading) {
    return (
      <section className="py-20" id="verification-results">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Verification Results</h2>
          <div className="flex justify-center items-center space-x-2">
            <Loader2 className="h-6 w-6 animate-spin text-sos-orange" />
            <p>Loading verification results...</p>
          </div>
        </div>
      </section>
    );
  }

  // Display error state
  if (error || !verificationResult) {
    return (
      <section className="py-20" id="verification-results">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Verification Results</h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            <p className="text-lg text-gray-300">
              {error || 'No verification data available'}
            </p>
          </div>
          <p className="text-gray-400 mb-8">
            {serialNumber ? 'Try performing a new verification for this item.' : 'Search for an item to see verification results.'}
          </p>
          <Button 
            className="bg-sos-orange hover:bg-sos-orange/90"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Start New Verification
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="verification-results">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Verification Results</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Verified against real stolen goods databases and manufacturer registries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <RealVerificationCard verificationResult={verificationResult} />
        </div>
      </div>
    </section>
  );
};

export default VerifiedProduct;
