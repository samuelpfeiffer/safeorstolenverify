
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { detectItemType } from '@/utils/itemTypeDetector';

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

  const verifyItem = async (serialNumber: string, itemType: string): Promise<VerificationResult | null> => {
    // Check if this should use Recipero ClaimsCheck for enhanced verification
    if (shouldUseRecipero(serialNumber, itemType)) {
      return await verifyWithRecipero(serialNumber, itemType);
    }

    // Fall back to existing verify-item function for other types
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

  const shouldUseRecipero = (serialNumber: string, itemType: string): boolean => {
    // Use Recipero for IMEI numbers and other serial numbers that benefit from ClaimsCheck
    return itemType === 'smartphone' || itemType === 'electronics' || itemType === 'laptop';
  };

  const verifyWithRecipero = async (serialNumber: string, itemType: string, useTestStore = false): Promise<VerificationResult | null> => {
    setIsLoading(true);
    try {
      console.log('Starting Recipero ClaimsCheck verification for:', serialNumber, itemType, 
                  'environment:', useTestStore ? 'TEST' : 'LIVE');
      
      const { data, error } = await supabase.functions.invoke('recipero-verify', {
        body: {
          serial_number: serialNumber.trim(),
          item_type: itemType,
          store_id: 1,
          use_test_store: useTestStore
        }
      });

      if (error) {
        console.error('Recipero verification error:', error);
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

      console.log('Recipero verification successful:', data);
      return {
        id: data.id,
        status: data.result.status,
        confidence: data.result.confidence,
        source: data.result.source,
        details: data.result.details,
        message: data.result.message
      };

    } catch (error) {
      console.error('Recipero verification request failed:', error);
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
    isLoading: isLoading
  };
};
