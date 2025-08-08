
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { detectItemType } from '@/utils/itemTypeDetector';

export const useSearchHistory = () => {
  const { user } = useUnifiedAuth();

  const addToSearchHistory = async (serialNumber: string) => {
    if (!user) {
      console.warn('User not authenticated, cannot save search history');
      return { itemType: detectItemType(serialNumber), newSearch: null };
    }

    const itemType = detectItemType(serialNumber);
    
    try {
      const { data, error } = await supabase
        .from('verification_searches')
        .insert({
          user_id: user.id,
          serial_number: serialNumber.trim(),
          item_type: itemType,
        })
        .select()
        .single();

      if (error) {
        console.error('Error saving search history:', error);
        return { itemType, newSearch: null };
      }

      return { itemType, newSearch: data };
    } catch (error) {
      console.error('Error saving search history:', error);
      return { itemType, newSearch: null };
    }
  };

  const getSearchHistory = async () => {
    if (!user) return [];

    try {
      const { data, error } = await supabase
        .from('verification_searches')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error fetching search history:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching search history:', error);
      return [];
    }
  };

  return { addToSearchHistory, getSearchHistory };
};
