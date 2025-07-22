import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PropertyVerificationResult {
  id: string;
  status: 'safe' | 'stolen' | 'lost' | 'suspicious' | 'unknown' | 'error';
  confidence: number;
  source: string;
  details?: any;
  message?: string;
  report_id?: string;
}

export const usePropertyVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const verifyProperty = async (propertyAddress: string, verificationType = 'basic'): Promise<PropertyVerificationResult | null> => {
    setIsLoading(true);
    try {
      console.log('Starting property verification for:', propertyAddress);
      
      const { data, error } = await supabase.functions.invoke('recipero-verify', {
        body: {
          property_address: propertyAddress.trim(),
          verification_type: verificationType
        }
      });

      if (error) {
        console.error('Property verification error:', error);
        toast({
          title: "Property Verification Failed",
          description: error.message || "Unable to verify property at this time",
          variant: "destructive",
        });
        return null;
      }

      if (!data.success) {
        toast({
          title: "Property Verification Failed", 
          description: data.error || "Unable to verify property",
          variant: "destructive",
        });
        return null;
      }

      console.log('Property verification successful:', data);
      return {
        id: data.id,
        status: data.result.status,
        confidence: data.result.confidence,
        source: data.result.source,
        details: data.result.details,
        message: data.result.message,
        report_id: data.result.report_id
      };

    } catch (error) {
      console.error('Property verification request failed:', error);
      toast({
        title: "Network Error",
        description: "Unable to connect to property verification service",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    verifyProperty,
    isLoading
  };
};