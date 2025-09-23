
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface TermsAcceptanceResult {
  success: boolean;
  error?: string;
}

export const useTermsAcceptance = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const acceptTerms = async (userId: string): Promise<TermsAcceptanceResult> => {
    setIsProcessing(true);
    
    try {
      // Save terms acceptance to database
      const { error } = await supabase
        .from('profiles')
        .update({
          terms_accepted: true,
          terms_accepted_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (error) {
        throw error;
      }
      
      toast({
        title: "Welcome to SafeOrStolen!",
        description: "Your account has been created successfully. You can now start verifying items!",
        duration: 5000,
      });
      
      setIsProcessing(false);
      return { success: true };
    } catch (error: any) {
      console.error('Terms acceptance error:', error);
      
      toast({
        title: "Registration Failed",
        description: "Unable to complete registration. Please try again.",
        variant: "destructive",
      });
      
      setIsProcessing(false);
      return { success: false, error: error.message };
    }
  };

  return {
    acceptTerms,
    isProcessing,
  };
};
