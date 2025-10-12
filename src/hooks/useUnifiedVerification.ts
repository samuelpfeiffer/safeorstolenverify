import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { detectItemType } from '@/utils/itemTypeDetector';

interface UnifiedVerificationResult {
  status: 'stolen' | 'lost' | 'safe' | 'error' | 'blacklisted' | 'salvage';
  message: string;
  details?: any;
  source: string;
  providers: string[];
  timestamp: string;
}

export const useUnifiedVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<UnifiedVerificationResult | null>(null);

  const verifyItem = async (input: string): Promise<UnifiedVerificationResult | null> => {
    setIsLoading(true);
    setResult(null);

    try {
      const sanitizedInput = input.trim().toUpperCase();
      const detectedType = detectItemType(sanitizedInput);
      
      console.log(`[UNIFIED-VERIFICATION] Detected type: ${detectedType} for input: ${sanitizedInput}`);

      let providers: Array<{name: string; result: any}> = [];
      
      // Route to appropriate providers based on detected type
      if (detectedType === 'vehicle' || /^[A-HJ-NPR-Z0-9]{17}$/i.test(sanitizedInput)) {
        // VIN detected - check multiple vehicle databases
        const [nicbResult, arizonaResult] = await Promise.allSettled([
          supabase.functions.invoke('nicb-vincheck', { body: { vin: sanitizedInput } }),
          supabase.functions.invoke('arizona-theft-lookup', { body: { type: 'vin', value: sanitizedInput } })
        ]);

        if (nicbResult.status === 'fulfilled' && nicbResult.value.data) {
          providers.push({ name: 'NICB VINCheck', result: nicbResult.value.data });
        }
        if (arizonaResult.status === 'fulfilled' && arizonaResult.value.data) {
          providers.push({ name: 'Arizona TheftAZ', result: arizonaResult.value.data });
        }
      } 
      else if (detectedType === 'smartphone' || /^\d{14,15}$/.test(sanitizedInput)) {
        // IMEI detected - check phone databases
        const [gsmaResult, checkmendResult] = await Promise.allSettled([
          supabase.functions.invoke('gsma-device-check', { body: { imei: sanitizedInput } }),
          supabase.functions.invoke('verify-checkmend', { body: { serialNumber: sanitizedInput, itemType: 'smartphone' } })
        ]);

        if (gsmaResult.status === 'fulfilled' && gsmaResult.value.data) {
          providers.push({ name: 'GSMA Device Check', result: gsmaResult.value.data });
        }
        if (checkmendResult.status === 'fulfilled' && checkmendResult.value.data) {
          providers.push({ name: 'CheckMEND', result: checkmendResult.value.data });
        }
      }
      else {
        // Generic serial number - check multiple databases
        const [immobilizeResult, checkmendResult, bikeResult] = await Promise.allSettled([
          supabase.functions.invoke('immobilize-lookup', { body: { serialNumber: sanitizedInput, itemType: detectedType } }),
          supabase.functions.invoke('verify-checkmend', { body: { serialNumber: sanitizedInput, itemType: detectedType } }),
          supabase.functions.invoke('verify-item', { body: { serialNumber: sanitizedInput, itemType: 'bike' } })
        ]);

        if (immobilizeResult.status === 'fulfilled' && immobilizeResult.value.data) {
          providers.push({ name: 'Immobilize Registry', result: immobilizeResult.value.data });
        }
        if (checkmendResult.status === 'fulfilled' && checkmendResult.value.data) {
          providers.push({ name: 'CheckMEND', result: checkmendResult.value.data });
        }
        if (bikeResult.status === 'fulfilled' && bikeResult.value.data?.result) {
          providers.push({ name: 'Bike Index', result: bikeResult.value.data.result });
        }
      }

      if (providers.length === 0) {
        throw new Error('No verification providers responded successfully');
      }

      // Aggregate results - if ANY provider reports stolen/lost, overall status is stolen/lost
      const hasStolenReport = providers.some(p => 
        p.result.status === 'stolen' || p.result.status === 'lost'
      );

      const aggregatedResult: UnifiedVerificationResult = {
        status: hasStolenReport ? 'stolen' : 'safe',
        message: hasStolenReport 
          ? `⚠️ This item has been reported as stolen or lost in ${providers.filter(p => p.result.status === 'stolen' || p.result.status === 'lost').length} database(s)`
          : `✓ No theft records found across ${providers.length} database(s)`,
        details: providers.map(p => ({
          provider: p.name,
          status: p.result.status,
          message: p.result.message,
          details: p.result.details
        })),
        source: 'unified_multi_provider',
        providers: providers.map(p => p.name),
        timestamp: new Date().toISOString()
      };

      setResult(aggregatedResult);

      // Show appropriate toast
      if (hasStolenReport) {
        toast.error('⚠️ STOLEN/LOST ITEM DETECTED', {
          description: aggregatedResult.message
        });
      } else {
        toast.success('✓ Item appears safe', {
          description: aggregatedResult.message
        });
      }

      return aggregatedResult;

    } catch (error: any) {
      console.error('[UNIFIED-VERIFICATION] Error:', error);
      toast.error('Verification failed', {
        description: error.message || 'Unable to complete verification'
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    verifyItem,
    isLoading,
    result
  };
};
