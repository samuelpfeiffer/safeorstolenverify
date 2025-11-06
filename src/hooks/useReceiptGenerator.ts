import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';

interface ReceiptData {
  id: string;
  user_id: string;
  purchase_id?: string;
  receipt_url?: string;
  created_at: string;
  purchase_details?: {
    verification_id: string;
    serial_number: string;
    item_type: string;
    amount: number;
    currency: string;
    status: string;
  };
}

export const useReceiptGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { user } = useUnifiedAuth();
  const { toast } = useToast();

  const generateReceipt = async (verificationId: string, serialNumber: string, itemType: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to generate receipts.",
        variant: "destructive"
      });
      return null;
    }

    setIsGenerating(true);
    try {
      // First, try to find an existing purchase for this verification
      const { data: purchaseData, error: purchaseError } = await supabase
        .from('purchases')
        .select('*')
        .eq('verification_id', verificationId)
        .eq('user_id', user.id)
        .single();

      let purchaseId = purchaseData?.id;

      // If no purchase exists, create one
      if (!purchaseData) {
        const { data: newPurchase, error: createError } = await supabase
          .from('purchases')
          .insert({
            user_id: user.id,
            verification_id: verificationId,
            amount: 0, // Free verification
            currency: 'usd',
            status: 'completed'
          })
          .select()
          .single();

        if (createError) {
          throw createError;
        }
        purchaseId = newPurchase.id;
      }

      // Generate the receipt
      const { data: receiptData, error: receiptError } = await supabase
        .from('receipts')
        .insert({
          user_id: user.id,
          purchase_id: purchaseId
        })
        .select()
        .single();

      if (receiptError) {
        throw receiptError;
      }

      toast({
        title: "Receipt generated",
        description: "Your verification receipt has been saved successfully.",
      });

      return receiptData;
    } catch (error) {
      console.error('Error generating receipt:', error);
      toast({
        title: "Receipt generation failed",
        description: "Unable to generate receipt. Please try again.",
        variant: "destructive"
      });
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  const getReceipts = async (): Promise<ReceiptData[]> => {
    if (!user) return [];

    try {
      const { data, error } = await supabase
        .from('receipts')
        .select(`
          *,
          purchases!inner (
            id,
            verification_id,
            amount,
            currency,
            status,
            verification_searches!inner (
              serial_number,
              item_type
            )
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data.map((receipt: any) => ({
        id: receipt.id,
        user_id: receipt.user_id,
        purchase_id: receipt.purchase_id,
        receipt_url: receipt.receipt_url,
        created_at: receipt.created_at,
        purchase_details: {
          verification_id: receipt.purchases.verification_id,
          serial_number: receipt.purchases.verification_searches.serial_number,
          item_type: receipt.purchases.verification_searches.item_type,
          amount: receipt.purchases.amount,
          currency: receipt.purchases.currency,
          status: receipt.purchases.status
        }
      }));
    } catch (error) {
      console.error('Error fetching receipts:', error);
      return [];
    }
  };

  return {
    generateReceipt,
    getReceipts,
    isGenerating
  };
};
