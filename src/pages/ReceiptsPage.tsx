
import { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { ReceiptsHeader } from '@/components/receipts/ReceiptsHeader';
import { ReceiptsFilters } from '@/components/receipts/ReceiptsFilters';
import { ReceiptsGrid } from '@/components/receipts/ReceiptsGrid';
import { ReceiptsEmpty } from '@/components/receipts/ReceiptsEmpty';
import { PurchaseHistoryLoading } from '@/components/purchase-history/PurchaseHistoryLoading';

interface ReceiptItem {
  id: string;
  user_id: string;
  purchase_id: string;
  created_at: string;
  purchase_details: {
    verification_id: string;
    serial_number: string;
    item_type: string;
    amount: number;
    currency: string;
    status: string;
  };
}

const ReceiptsPage = () => {
  const [receipts, setReceipts] = useState<ReceiptItem[]>([]);
  const [filteredReceipts, setFilteredReceipts] = useState<ReceiptItem[]>([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useUnifiedAuth();

  useEffect(() => {
    if (user) {
      fetchReceipts();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    const filtered = receipts.filter(item => 
      item.purchase_details.serial_number.toLowerCase().includes(filterTerm.toLowerCase()) ||
      item.purchase_details.item_type.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilteredReceipts(filtered);
  }, [receipts, filterTerm]);

  const fetchReceipts = async () => {
    if (!user) return;

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

      const receiptItems = data.map((receipt: any) => ({
        id: receipt.id,
        user_id: receipt.user_id,
        purchase_id: receipt.purchase_id,
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

      setReceipts(receiptItems);
    } catch (error) {
      console.error('Error fetching receipts:', error);
      toast({
        title: "Error loading receipts",
        description: "Unable to load your receipts. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearReceipts = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('receipts')
        .delete()
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      setReceipts([]);
      toast({
        title: "Receipts cleared",
        description: "Your saved receipts have been successfully cleared."
      });
    } catch (error) {
      console.error('Error clearing receipts:', error);
      toast({
        title: "Error clearing receipts",
        description: "Unable to clear your receipts. Please try again.",
        variant: "destructive"
      });
    }
  };

  const removeReceipt = async (id: string) => {
    try {
      const { error } = await supabase
        .from('receipts')
        .delete()
        .eq('id', id)
        .eq('user_id', user?.id);

      if (error) {
        throw error;
      }

      setReceipts(prev => prev.filter(item => item.id !== id));
      toast({
        title: "Receipt removed",
        description: "Receipt has been removed from your saved receipts."
      });
    } catch (error) {
      console.error('Error removing receipt:', error);
      toast({
        title: "Error removing receipt",
        description: "Unable to remove the receipt. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (!user) {
    return (
      <div className="bg-sos text-white min-h-screen pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Saved Receipts</h1>
          <p className="text-lg text-gray-300 mb-8">
            Please sign in to view your saved receipts.
          </p>
          <Button onClick={() => window.location.href = '/auth'} className="bg-sos-orange hover:bg-sos-orange/90">
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sos text-white min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <ReceiptsHeader />
        
        {isLoading ? (
          <PurchaseHistoryLoading />
        ) : (
          <>
            <ReceiptsFilters 
              filterTerm={filterTerm}
              onFilterChange={setFilterTerm}
              onClearAll={clearReceipts}
            />
            
            {filteredReceipts.length > 0 ? (
              <ReceiptsGrid 
                receipts={filteredReceipts}
                onRemoveReceipt={removeReceipt}
              />
            ) : (
              <ReceiptsEmpty />
            )}
          </>
        )}
      </div>
      
    </div>
  );
};

export default ReceiptsPage;
