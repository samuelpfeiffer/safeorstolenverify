import React, { useState, useEffect } from 'react';
import { X, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

export const UrgencyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [recentCount, setRecentCount] = useState(0);

  useEffect(() => {
    // Check if dismissed this session
    if (sessionStorage.getItem('urgencyBannerDismissed')) {
      setIsVisible(false);
      return;
    }

    // Fetch real recent verification count
    const fetchRecentCount = async () => {
      try {
        const oneHourAgo = new Date();
        oneHourAgo.setHours(oneHourAgo.getHours() - 1);
        
        const { count } = await supabase
          .from('verification_searches')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', oneHourAgo.toISOString());
        
        setRecentCount(count || 0);
      } catch (error) {
        console.error('Error fetching recent count:', error);
      }
    };

    fetchRecentCount();
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('urgencyBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <Zap className="h-4 w-4 animate-pulse" />
        <span className="font-medium">
          {recentCount > 0 
             ? `${recentCount} items verified in the last hour`
            : 'Unlimited verifications — just $10/month'
          }
        </span>
        <Link 
          to="/verify" 
          className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:no-underline"
        >
          Try Now <ArrowRight className="h-3 w-3" />
        </Link>
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 opacity-70 hover:opacity-100"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
