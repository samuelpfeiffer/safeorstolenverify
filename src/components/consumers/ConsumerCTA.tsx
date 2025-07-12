
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ConsumerCTAProps {
  onScrollToPricing: () => void;
}

export const ConsumerCTA = ({ onScrollToPricing }: ConsumerCTAProps) => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <Link to="/contact">
        <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 text-white">
          Create A Free Account
        </Button>
      </Link>
      <Button 
        onClick={onScrollToPricing} 
        variant="outline" 
        size="lg" 
        className="border-white text-white hover:bg-white/10"
      >
        View Pricing & Plans
      </Button>
    </div>
  );
};
