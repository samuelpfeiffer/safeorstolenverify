import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ArizonaLookupResult {
  status: 'stolen' | 'safe' | 'error' | 'not_found';
  message: string;
  details?: {
    reportDate?: string;
    agency?: string;
    caseNumber?: string;
    vehicleInfo?: Record<string, string>;
  };
  source: string;
  timestamp: string;
}

export const useArizonaTheftLookup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ArizonaLookupResult | null>(null);

  const checkLicensePlate = async (plate: string, state: string = 'Arizona') => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('arizona-theft-lookup', {
        body: {
          type: 'license_plate',
          value: plate,
          state: state
        }
      });

      if (error) throw error;

      setResult(data);
      
      if (data.status === 'stolen') {
        toast.error('⚠️ This license plate is reported as stolen in Arizona!');
      } else if (data.status === 'safe') {
        toast.success('✓ No theft records found for this license plate');
      }

      return data;
    } catch (error: any) {
      console.error('Arizona license plate lookup error:', error);
      toast.error(error.message || 'Failed to complete Arizona database lookup');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const checkVIN = async (vin: string) => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('arizona-theft-lookup', {
        body: {
          type: 'vin',
          value: vin
        }
      });

      if (error) throw error;

      setResult(data);
      
      if (data.status === 'stolen') {
        toast.error('⚠️ This VIN is reported as stolen in Arizona!');
      } else if (data.status === 'safe') {
        toast.success('✓ No theft records found for this VIN in Arizona');
      }

      return data;
    } catch (error: any) {
      console.error('Arizona VIN lookup error:', error);
      toast.error(error.message || 'Failed to complete Arizona VIN database lookup');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    checkLicensePlate,
    checkVIN,
    isLoading,
    result
  };
};
