import { useState, useEffect } from 'react';
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

  // Save verification data via secure RPC (session_id scoped)
  const savePendingVerification = async (
    serialNumber: string, 
    itemType?: string, 
    userIntent?: 'buyer' | 'seller'
  ): Promise<boolean> => {
    try {
      setIsLoading(true);
      const sessionId = getSessionId();

      const { error } = await supabase.rpc('save_pending_verification', {
        p_session_id: sessionId,
        p_serial_number: serialNumber,
        p_item_type: itemType || null,
        p_user_intent: userIntent || null
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

  // Retrieve pending verification via secure RPC (session_id scoped)
  const retrievePendingVerification = async (): Promise<PendingVerification | null> => {
    try {
      const sessionId = getSessionId();
      
      const { data, error } = await supabase.rpc('retrieve_pending_verification', {
        p_session_id: sessionId
      });

      if (error) {
        console.error('Error retrieving pending verification:', error);
        return null;
      }

      if (data && typeof data === 'object' && 'id' in (data as Record<string, unknown>)) {
        const record = data as Record<string, string>;
        const typedData: PendingVerification = {
          id: record.id,
          session_id: record.session_id,
          serial_number: record.serial_number,
          item_type: record.item_type,
          user_intent: record.user_intent as 'buyer' | 'seller' | null,
          created_at: record.created_at,
          expires_at: record.expires_at
        };
        setPendingVerification(typedData);
        return typedData;
      }

      return null;
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
