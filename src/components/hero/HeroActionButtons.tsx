
import React, { memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroActionButtons = memo(() => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleConsumerNavigation = useCallback(() => {
    navigate('/for-consumers');
  }, [navigate]);

  const handleBrandNavigation = useCallback(() => {
    navigate('/for-brands');
  }, [navigate]);

  return (
    <div 
      className="flex flex-wrap justify-center gap-6 animate-slideUp" 
      style={{ '--animation-delay': '0.4s' } as React.CSSProperties}
    >
      <Button 
        size={isMobile ? "lg" : "xl"} 
        variant="gradient"
        className="group hover:scale-105 transition-all duration-300 shadow-xl" 
        onClick={handleConsumerNavigation}
        aria-label="Navigate to consumer services page"
      >
        <Users className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
        For Buyers
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
      </Button>
      <Button 
        size={isMobile ? "lg" : "xl"} 
        variant="outline" 
        onClick={handleBrandNavigation}
        aria-label="Navigate to business services page"
        className="group border-2 border-sos-lime bg-black/20 hover:bg-sos-lime/10 text-sos-lime hover:text-sos-lime-light backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-sos-lime/20"
      >
        <Building2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
        For Sellers
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
      </Button>
    </div>
  );
});

HeroActionButtons.displayName = 'HeroActionButtons';

export default HeroActionButtons;
