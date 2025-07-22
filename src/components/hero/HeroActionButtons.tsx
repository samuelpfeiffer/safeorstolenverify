
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroActionButtons = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-wrap justify-center gap-6 animate-slideUp" style={{
      animationDelay: '0.4s'
    }}>
      <Button 
        size={isMobile ? "lg" : "xl"} 
        variant="gradient"
        className="group hover:scale-105 transition-all duration-300 shadow-xl" 
        onClick={() => navigate('/for-consumers')}
      >
        <Users className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
        For Buyers
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
      <Button 
        size={isMobile ? "lg" : "xl"} 
        variant="outline" 
        onClick={() => navigate('/for-brands')} 
        className="group border-2 border-sos-lime bg-black/20 hover:bg-sos-lime/10 text-sos-lime hover:text-sos-lime-light backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-sos-lime/20"
      >
        <Building2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
        For Sellers
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  );
};

export default HeroActionButtons;
