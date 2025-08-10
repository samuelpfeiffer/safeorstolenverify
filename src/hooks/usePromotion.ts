import { useState, useEffect } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';

interface PromotionData {
  isPromotionWinner: boolean;
  promotionSearchesRemaining: number;
  promotionExpiresAt: string | null;
  isPromotionActive: boolean;
}

export const usePromotion = () => {
  const { user, isAuthenticated } = useUnifiedAuth();
  const [promotionData, setPromotionData] = useState<PromotionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromotionData = async () => {
      if (!isAuthenticated || !user) {
        setPromotionData(null);
        setLoading(false);
        return;
      }

      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('is_promotion_winner, promotion_searches_remaining, promotion_expires_at')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching promotion data:', error);
          if (error.code === 'PGRST116') {
            // Profile not found, create it
            console.log('Creating missing profile...');
            await supabase
              .from('profiles')
              .insert({
                id: user.id,
                email: user.email,
                full_name: user.fullName || null,
              });
            
            // Set default promotion data
            setPromotionData({
              isPromotionWinner: false,
              promotionSearchesRemaining: 0,
              promotionExpiresAt: null,
              isPromotionActive: false
            });
          } else {
            setPromotionData(null);
          }
        } else if (profile) {
          const expiresAt = profile.promotion_expires_at;
          const isActive = profile.is_promotion_winner && 
                          expiresAt && 
                          new Date(expiresAt) > new Date() &&
                          (profile.promotion_searches_remaining || 0) > 0;

          setPromotionData({
            isPromotionWinner: profile.is_promotion_winner || false,
            promotionSearchesRemaining: profile.promotion_searches_remaining || 0,
            promotionExpiresAt: profile.promotion_expires_at,
            isPromotionActive: isActive || false
          });
        }
      } catch (error) {
        console.error('Error fetching promotion data:', error);
        setPromotionData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotionData();
  }, [user, isAuthenticated]);

  return { promotionData, loading };
};