
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { detectItemType } from '@/utils/itemTypeDetector';
import { usePropertyVerification } from './usePropertyVerification';

interface VerificationResult {
  id: string;
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error' | 'suspicious';
  confidence: number;
  source: string;
  details?: any;
  message?: string;
}

export const useRealVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { verifyProperty, isLoading: isPropertyLoading } = usePropertyVerification();

  const verifyItem = async (serialNumber: string, itemType: string): Promise<VerificationResult | null> => {
    // Handle property verification separately
    if (itemType === 'property') {
      const result = await verifyProperty(serialNumber);
      return result;
    }

    setIsLoading(true);
    try {
      console.log('Starting verification for:', serialNumber, itemType);
      
      const { data, error } = await supabase.functions.invoke('verify-item', {
        body: {
          serialNumber: serialNumber.trim(),
          itemType: itemType
        }
      });

      if (error) {
        console.error('Verification error:', error);
        toast({
          title: "Verification Failed",
          description: error.message || "Unable to verify item at this time",
          variant: "destructive",
        });
        return null;
      }

      if (!data.success) {
        toast({
          title: "Verification Failed", 
          description: data.error || "Unable to verify item",
          variant: "destructive",
        });
        return null;
      }

      console.log('Verification successful:', data);
      return {
        id: data.id,
        status: data.result.status,
        confidence: data.result.confidence,
        source: data.result.source,
        details: data.result.details,
        message: data.result.message
      };

    } catch (error) {
      console.error('Verification request failed:', error);
      toast({
        title: "Network Error",
        description: "Unable to connect to verification service",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    verifyItem,
    isLoading: isLoading || isPropertyLoading
  };
};
