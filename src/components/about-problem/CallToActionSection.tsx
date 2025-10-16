
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-sos-orange/20 to-sos-lime/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Fight Against Stolen Goods</h2>
          <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
            Every verification makes the marketplace safer. Every protected purchase weakens criminal networks. 
            Together, we can eliminate the stolen goods crisis.
          </p>
          
          <div className="bg-gradient-to-r from-sos/50 to-sos-dark/50 rounded-lg p-8 mb-8 border border-sos-lime/30">
            <h3 className="text-lg font-semibold text-sos-lime mb-4">Ready to Get Started?</h3>
            <p className="text-foreground/90 mb-6">
              Join thousands of protected consumers who verify before they buy. 
              Your first verification could save you thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold"
                onClick={() => navigate('/')}
              >
                Start Verifying Now
              </Button>
              <Button 
                size="lg"
                className="bg-sos-lime hover:bg-sos-lime/90 text-sos font-semibold"
                onClick={() => navigate('/how-it-works')}
              >
                Learn How It Works
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/our-story')}
            >
              Read Our Story
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-sos-lime text-sos-lime hover:bg-sos-lime/10"
              onClick={() => navigate('/for-consumers')}
            >
              For Consumers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
