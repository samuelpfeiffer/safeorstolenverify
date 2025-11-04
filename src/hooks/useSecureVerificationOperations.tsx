import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { validateSerialNumberSecurity, sanitizeInputSecurity } from '@/utils/securityValidation';
import { SecureLogger } from '@/utils/secureLogging';

interface VerificationData {
  serial_number: string;
  item_type: string;
  verification_status: string;
  confidence_score?: number;
  api_source: string;
  api_response?: any;
}

export const useSecureVerificationOperations = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const createSecureVerification = async (verificationData: VerificationData) => {
    try {
      setLoading(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      // Validate and sanitize inputs
      const serialValidation = await validateSerialNumberSecurity(verificationData.serial_number);
      if (!serialValidation.isValid) {
        throw new Error(serialValidation.errors[0]);
      }

      const sanitizedItemType = sanitizeInputSecurity(verificationData.item_type);
      if (!sanitizedItemType || sanitizedItemType.length < 1 || sanitizedItemType.length > 50) {
        throw new Error('Item type must be between 1 and 50 characters');
      }

      const { data, error } = await supabase
        .from('verification_results')
        .insert({
          user_id: user.id,
          serial_number: serialValidation.sanitizedValue!,
          item_type: sanitizedItemType,
          verification_status: verificationData.verification_status,
          confidence_score: verificationData.confidence_score || 0,
          api_source: verificationData.api_source,
          api_response: verificationData.api_response,
        })
        .select()
        .single();

      if (error) {
        await SecureLogger.auditLog('error', 'Verification creation error', {
          component: 'verification_operations',
          action: 'create_verification'
        });
        throw error;
      }

      return data;
    } catch (error) {
      await SecureLogger.auditLog('error', 'Verification creation failed', {
        component: 'verification_operations',
        action: 'create_verification'
      });
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create verification",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getSecureVerificationResults = async () => {
    try {
      setLoading(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      const { data, error } = await supabase
        .from('verification_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        await SecureLogger.auditLog('error', 'Verification results fetch error', {
          component: 'verification_operations',
          action: 'get_verification_results'
        });
        throw error;
      }

      return data || [];
    } catch (error) {
      await SecureLogger.auditLog('error', 'Verification results fetch failed', {
        component: 'verification_operations',
        action: 'get_verification_results'
      });
      toast({
        title: "Error",
        description: "Failed to load verification results",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    createSecureVerification,
    getSecureVerificationResults,
    loading
  };
};
