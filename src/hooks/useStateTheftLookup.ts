import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface StateLookupResult {
  status: 'safe' | 'stolen' | 'unknown';
  message: string;
  details?: any;
  source: string;
  timestamp: string;
}

export const useStateTheftLookup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<StateLookupResult | null>(null);
  const { toast } = useToast();

  const checkVIN = async (stateCode: string, vin: string): Promise<StateLookupResult> => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('universal-state-lookup', {
        body: {
          stateCode: stateCode.toUpperCase(),
          type: 'vin',
          value: vin
        }
      });

      if (error) throw error;

      setResult(data);
      return data;
    } catch (error) {
      console.error('State VIN lookup error:', error);
      toast({
        title: "Verification Error",
        description: "Unable to complete VIN verification. Please try again.",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const checkLicensePlate = async (stateCode: string, plate: string): Promise<StateLookupResult> => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('universal-state-lookup', {
        body: {
          stateCode: stateCode.toUpperCase(),
          type: 'license_plate',
          value: plate
        }
      });

      if (error) throw error;

      setResult(data);
      return data;
    } catch (error) {
      console.error('State license plate lookup error:', error);
      toast({
        title: "Verification Error",
        description: "Unable to complete license plate verification. Please try again.",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const checkStateSpecific = async (
    stateCode: string,
    type: 'vin' | 'license_plate',
    value: string
  ): Promise<StateLookupResult> => {
    const functionMap: Record<string, string> = {
      'AZ': 'arizona-theft-lookup',
      'FL': 'florida-theft-lookup',
      'TX': 'texas-theft-lookup',
      'CA': 'california-theft-lookup',
      'NY': 'new-york-theft-lookup'
    };

    const functionName = functionMap[stateCode.toUpperCase()];

    if (!functionName) {
      return checkVIN(stateCode, value);
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke(functionName, {
        body: { type, value, state: stateCode.toUpperCase() }
      });

      if (error) throw error;

      setResult(data);
      return data;
    } catch (error) {
      console.error(`State-specific lookup error (${stateCode}):`, error);
      toast({
        title: "Verification Error",
        description: `Unable to complete ${stateCode} verification. Please try again.`,
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    checkVIN,
    checkLicensePlate,
    checkStateSpecific,
    isLoading,
    result
  };
};