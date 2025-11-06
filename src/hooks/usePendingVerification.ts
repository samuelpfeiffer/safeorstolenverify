import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PendingVerification {
  id: string;
  session_id: string;
  serial_number: string;
  item_type?: string;
  user_intent?: 'buyer' | 'seller' | null;
  created_at: string;
  expires_at: string;
}

export const usePendingVerification = () => {
  const [pendingVerification, setPendingVerification] = useState<PendingVerification | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Generate session ID for anonymous users
  const getSessionId = () => {
    let sessionId = sessionStorage.getItem('verification_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('verification_session_id', sessionId);
    }
    return sessionId;
  };

  // Save verification data before redirecting to auth
  const savePendingVerification = async (
    serialNumber: string, 
    itemType?: string, 
    userIntent?: 'buyer' | 'seller'
  ): Promise<boolean> => {
    try {
      setIsLoading(true);
      const sessionId = getSessionId();

      const { error } = await supabase
        .from('pending_verifications')
        .insert({
          session_id: sessionId,
          serial_number: serialNumber,
          item_type: itemType,
          user_intent: userIntent
        });

      if (error) {
        console.error('Error saving pending verification:', error);
        toast({
          title: "Error",
          description: "Failed to save verification data. Please try again.",
          variant: "destructive"
        });
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in savePendingVerification:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Retrieve pending verification after auth
  const retrievePendingVerification = async (): Promise<PendingVerification | null> => {
    try {
      const sessionId = getSessionId();
      
      const { data, error } = await supabase
        .from('pending_verifications')
        .select('*')
        .eq('session_id', sessionId)
        .gt('expires_at', new Date().toISOString())
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('Error retrieving pending verification:', error);
        return null;
      }

      if (data) {
        // Type-safe casting of user_intent
        const typedData: PendingVerification = {
          ...data,
          user_intent: data.user_intent as 'buyer' | 'seller' | null
        };
        setPendingVerification(typedData);
        // Clean up the pending verification after retrieval
        await supabase
          .from('pending_verifications')
          .delete()
          .eq('id', data.id);
      }

      return data ? {
        ...data,
        user_intent: data.user_intent as 'buyer' | 'seller' | null
      } : null;
    } catch (error) {
      console.error('Error in retrievePendingVerification:', error);
      return null;
    }
  };

  // Clear pending verification
  const clearPendingVerification = () => {
    setPendingVerification(null);
    sessionStorage.removeItem('verification_session_id');
  };

  // Auto-retrieve on mount
  useEffect(() => {
    retrievePendingVerification();
  }, []);

  return {
    pendingVerification,
    isLoading,
    savePendingVerification,
    retrievePendingVerification,
    clearPendingVerification
  };
};