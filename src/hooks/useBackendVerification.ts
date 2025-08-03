import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';

interface VerificationResult {
  id: string;
  status: 'safe' | 'stolen' | 'unknown';
  confidence: number;
  source: string;
  details?: string;
  message?: string;
  serial_number: string;
  item_type: string;
  verified_at: string;
}

export const useBackendVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResults, setVerificationResults] = useState<VerificationResult[]>([]);
  const { user } = useAuth();
  const { toast } = useToast();

  const verifyItem = async (serialNumber: string, itemType: string): Promise<VerificationResult | null> => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to verify items.",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    try {
      console.log('🔍 Starting backend verification for:', { serialNumber, itemType });
      
      // Use the verify-item edge function for verification
      const { data, error } = await supabase.functions.invoke('verify-item', {
        body: {
          serial_number: serialNumber,
          item_type: itemType,
        }
      });

      if (error) {
        console.error('❌ Verification error:', error);
        toast({
          title: "Verification Failed",
          description: error.message || "Unable to verify item. Please try again.",
          variant: "destructive",
        });
        return null;
      }

      console.log('✅ Verification successful:', data);
      
      const result: VerificationResult = {
        id: data.id || `ver-${Date.now()}`,
        status: data.status === 'verified' ? 'safe' : data.status === 'stolen' ? 'stolen' : 'unknown',
        confidence: data.confidence || 85,
        source: data.source || 'API',
        details: typeof data.details === 'string' ? data.details : JSON.stringify(data.details),
        message: typeof data.message === 'string' ? data.message : '',
        serial_number: serialNumber,
        item_type: itemType,
        verified_at: data.verified_at || new Date().toISOString(),
      };

      setVerificationResults(prev => [result, ...prev]);

      toast({
        title: "Verification Complete",
        description: `Item status: ${result.status}`,
        variant: result.status === 'safe' ? "default" : "destructive",
      });

      return result;
    } catch (error) {
      console.error('❌ Verification failed:', error);
      toast({
        title: "Verification Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getVerificationHistory = async (): Promise<VerificationResult[]> => {
    if (!user) {
      return [];
    }

    try {
      const { data, error } = await supabase
        .from('verification_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('❌ Failed to fetch verification history:', error);
        return [];
      }

      const results: VerificationResult[] = data.map(item => ({
        id: item.id,
        status: item.verification_status as 'safe' | 'stolen' | 'unknown',
        confidence: item.confidence_score || 0,
        source: item.api_source || 'Unknown',
        details: typeof item.api_response === 'object' && item.api_response && typeof item.api_response === 'object' ? (item.api_response as any).details || '' : '',
        message: typeof item.api_response === 'object' && item.api_response && typeof item.api_response === 'object' ? (item.api_response as any).message || '' : '',
        serial_number: item.serial_number,
        item_type: item.item_type,
        verified_at: item.verified_at,
      }));

      setVerificationResults(results);
      return results;
    } catch (error) {
      console.error('❌ Error fetching verification history:', error);
      return [];
    }
  };

  return {
    verifyItem,
    getVerificationHistory,
    verificationResults,
    isLoading,
  };
};