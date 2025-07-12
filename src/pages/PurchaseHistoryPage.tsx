
import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { PurchaseHistoryHeader } from '@/components/purchase-history/PurchaseHistoryHeader';
import { PurchaseHistoryFilters } from '@/components/purchase-history/PurchaseHistoryFilters';
import { PurchaseHistoryGrid } from '@/components/purchase-history/PurchaseHistoryGrid';
import { PurchaseHistoryEmpty } from '@/components/purchase-history/PurchaseHistoryEmpty';
import { PurchaseHistoryLoading } from '@/components/purchase-history/PurchaseHistoryLoading';

interface PurchaseItem {
  id: string;
  verification_id: string;
  serial_number: string;
  item_type: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
  stripe_session_id?: string;
}

const PurchaseHistoryPage = () => {
  const [purchases, setPurchases] = useState<PurchaseItem[]>([]);
  const [filteredPurchases, setFilteredPurchases] = useState<PurchaseItem[]>([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUnifiedAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchPurchases();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    const filtered = purchases.filter(item => 
      item.serial_number.toLowerCase().includes(filterTerm.toLowerCase()) ||
      item.item_type.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilteredPurchases(filtered);
  }, [purchases, filterTerm]);

  const fetchPurchases = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('purchases')
        .select(`
          *,
          verification_searches!inner (
            serial_number,
            item_type
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      const purchaseItems = data.map((purchase: any) => ({
        id: purchase.id,
        verification_id: purchase.verification_id,
        serial_number: purchase.verification_searches.serial_number,
        item_type: purchase.verification_searches.item_type,
        amount: purchase.amount,
        currency: purchase.currency,
        status: purchase.status,
        created_at: purchase.created_at,
        stripe_session_id: purchase.stripe_session_id
      }));

      setPurchases(purchaseItems);
    } catch (error) {
      console.error('Error fetching purchases:', error);
      toast({
        title: "Error loading purchases",
        description: "Unable to load your purchase history. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-sos text-white min-h-screen pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Purchase History</h1>
          <p className="text-lg text-gray-300 mb-8">
            Please sign in to view your purchase history.
          </p>
          <Button onClick={() => window.location.href = '/auth'} className="bg-sos-orange hover:bg-sos-orange/90">
            Sign In
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-sos text-white min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <PurchaseHistoryHeader />
        
        {isLoading ? (
          <PurchaseHistoryLoading />
        ) : (
          <>
            <PurchaseHistoryFilters 
              filterTerm={filterTerm}
              onFilterChange={setFilterTerm}
            />
            
            {filteredPurchases.length > 0 ? (
              <PurchaseHistoryGrid purchases={filteredPurchases} />
            ) : (
              <PurchaseHistoryEmpty />
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PurchaseHistoryPage;
