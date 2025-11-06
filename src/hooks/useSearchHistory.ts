import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';

interface SearchHistoryItem {
  id: string;
  serial_number: string;
  item_type: string;
  created_at: string;
  result?: any;
}

export const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadSearchHistory();
    }
  }, [user]);

  const loadSearchHistory = async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('verification_searches')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error loading search history:', error);
        return;
      }

      setSearchHistory(data || []);
    } catch (error) {
      console.error('Error loading search history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToSearchHistory = async (serialNumber: string, itemType?: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('verification_searches')
        .insert({
          user_id: user.id,
          serial_number: serialNumber,
          item_type: itemType || 'unknown'
        });

      if (error) {
        console.error('Error adding to search history:', error);
        return;
      }

      // Refresh history
      await loadSearchHistory();
    } catch (error) {
      console.error('Error adding to search history:', error);
    }
  };

  return {
    searchHistory,
    isLoading,
    addToSearchHistory,
    refreshHistory: loadSearchHistory
  };
};
