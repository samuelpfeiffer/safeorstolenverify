
import React, { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { SearchHistoryHeader } from '@/components/search-history/SearchHistoryHeader';
import { SearchHistoryFilters } from '@/components/search-history/SearchHistoryFilters';
import { SearchHistoryTabs } from '@/components/search-history/SearchHistoryTabs';
import { PurchaseHistoryLoading } from '@/components/purchase-history/PurchaseHistoryLoading';

interface SearchItem {
  id: string;
  serial_number: string;
  item_type: string;
  created_at: string;
  verification_status?: string;
}

interface PurchaseItem {
  id: string;
  serial_number: string;
  item_type: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

const SearchHistoryPage = () => {
  const [searchHistory, setSearchHistory] = useState<SearchItem[]>([]);
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseItem[]>([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useUnifiedAuth();

  useEffect(() => {
    if (user) {
      fetchSearchHistory();
      fetchPurchaseHistory();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const fetchSearchHistory = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('verification_searches')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        throw error;
      }

      setSearchHistory(data || []);
    } catch (error) {
      console.error('Error fetching search history:', error);
      toast({
        title: "Error loading search history",
        description: "Unable to load your search history. Please try again.",
        variant: "destructive"
      });
    }
  };

  const fetchPurchaseHistory = async () => {
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
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        throw error;
      }

      const purchaseItems = data.map((purchase: any) => ({
        id: purchase.id,
        serial_number: purchase.verification_searches.serial_number,
        item_type: purchase.verification_searches.item_type,
        amount: purchase.amount,
        currency: purchase.currency,
        status: purchase.status,
        created_at: purchase.created_at
      }));

      setPurchaseHistory(purchaseItems);
    } catch (error) {
      console.error('Error fetching purchase history:', error);
      toast({
        title: "Error loading purchase history",
        description: "Unable to load your purchase history. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearchHistory = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('verification_searches')
        .delete()
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      setSearchHistory([]);
      toast({
        title: "Search history cleared",
        description: "Your search history has been successfully cleared."
      });
    } catch (error) {
      console.error('Error clearing search history:', error);
      toast({
        title: "Error clearing history",
        description: "Unable to clear your search history. Please try again.",
        variant: "destructive"
      });
    }
  };

  const removeSearchItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('verification_searches')
        .delete()
        .eq('id', id)
        .eq('user_id', user?.id);

      if (error) {
        throw error;
      }

      setSearchHistory(prev => prev.filter(item => item.id !== id));
      toast({
        title: "Search item removed",
        description: "The search item has been removed from your history."
      });
    } catch (error) {
      console.error('Error removing search item:', error);
      toast({
        title: "Error removing item",
        description: "Unable to remove the search item. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Filter search history based on filter term
  const filteredSearchHistory = searchHistory.filter(item => 
    item.serial_number.toLowerCase().includes(filterTerm.toLowerCase()) ||
    item.item_type.toLowerCase().includes(filterTerm.toLowerCase())
  );

  // Filter purchase history based on filter term
  const filteredPurchaseHistory = purchaseHistory.filter(item => 
    item.serial_number.toLowerCase().includes(filterTerm.toLowerCase()) ||
    item.item_type.toLowerCase().includes(filterTerm.toLowerCase())
  );

  if (!user) {
    return (
      <div className="bg-sos text-white min-h-screen pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Search History</h1>
          <p className="text-lg text-gray-300 mb-8">
            Please sign in to view your search history.
          </p>
          <Button onClick={() => navigate('/auth')} className="bg-sos-orange hover:bg-sos-orange/90">
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sos text-white min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <SearchHistoryHeader />
        
        {isLoading ? (
          <PurchaseHistoryLoading />
        ) : (
          <>
            <SearchHistoryFilters 
              filterTerm={filterTerm}
              onFilterChange={setFilterTerm}
              onClearHistory={clearSearchHistory}
            />
            
            <SearchHistoryTabs 
              filteredSearchHistory={filteredSearchHistory}
              filteredPurchaseHistory={filteredPurchaseHistory}
              onRemoveSearchItem={removeSearchItem}
            />
          </>
        )}
      </div>
      
    </div>
  );
};

export default SearchHistoryPage;
