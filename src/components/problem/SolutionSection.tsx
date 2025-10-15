
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const SolutionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-sos-orange/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Mobile-First Protection No Competitor Offers</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Unlike other services, SafeOrStolen delivers mobile verification at the point of sale. Protect yourself 
            as a buyer from financial loss and legal trouble. Protect yourself as a seller by documenting legitimacy. 
            Check phones, cars, electronics, tools instantly. Together we reduce crime and make secondhand markets safer for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-sos-orange hover:bg-sos-orange/90 text-white"
              onClick={() => navigate('/how-it-works')}
            >
              See How It Works
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/our-story')}
            >
              Read Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
