
import React, { memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroActionButtons = memo(() => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleConsumerNavigation = useCallback(() => {
    navigate('/verify');
  }, [navigate]);

  const handleBrandNavigation = useCallback(() => {
    navigate('/for-businesses');
  }, [navigate]);

  return (
    <div 
      className="flex flex-wrap justify-center gap-4" 
    >
      <Button 
        size="lg"
        className="group" 
        onClick={handleConsumerNavigation}
        aria-label="Navigate to consumer services page"
      >
        <Users className="mr-2 h-5 w-5" aria-hidden="true" />
        For Buyers
        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
      </Button>
      <Button 
        size="lg"
        variant="outline" 
        onClick={handleBrandNavigation}
        aria-label="Navigate to business services page"
        className="group"
      >
        <Building2 className="mr-2 h-5 w-5" aria-hidden="true" />
        For Sellers
        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
});

HeroActionButtons.displayName = 'HeroActionButtons';

export default HeroActionButtons;
