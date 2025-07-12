
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroActionButtons = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-wrap justify-center gap-4 animate-slideUp" style={{
      animationDelay: '0.4s'
    }}>
      <Button 
        size={isMobile ? "default" : "lg"} 
        className="bg-sos-orange hover:bg-sos-orange/90 text-white border border-sos-lime/20 hover:border-sos-lime/40 transition-all duration-300" 
        onClick={() => navigate('/for-consumers')}
      >
        For Buyers
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button 
        size={isMobile ? "default" : "lg"} 
        variant="outline" 
        onClick={() => navigate('/for-brands')} 
        className="border-sos-lime bg-black/30 hover:bg-sos-lime/20 text-sos-lime hover:text-sos-lime-light transition-all duration-300"
      >
        For Sellers
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default HeroActionButtons;
