
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ConsumerCTAProps {
  onScrollToSubscriptions: () => void;
}

export const ConsumerCTA = ({ onScrollToSubscriptions }: ConsumerCTAProps) => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <Link to="/auth">
        <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 text-white">
          Create A Free Account
        </Button>
      </Link>
      <Button 
        onClick={onScrollToSubscriptions} 
        variant="outline" 
        size="lg" 
        className="border-white text-white hover:bg-white/10"
      >
        View Subscription Plans
      </Button>
    </div>
  );
};
