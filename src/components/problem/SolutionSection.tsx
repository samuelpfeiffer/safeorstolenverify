
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const SolutionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-sos-orange/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Golden Ticket: The Only Mobile App - Exclusive to SafeOrStolen.com</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Unlike CheckMEND, IMEI.info, Swappa, and others, SafeOrStolen offers the ONLY mobile app for stolen item verification - 
            and it's exclusively available from SafeOrStolen.com. We protect BOTH buyers AND sellers: buyers avoid financial loss 
            and legal nightmares, sellers prove legitimacy and build trust. Every search makes stolen items harder to sell, 
            helping reduce crime globally. Together we're building a safer secondhand ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-sos-orange hover:bg-sos-orange/90 text-white"
              onClick={() => navigate('/app')}
            >
              Download the App - Exclusive
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/about')}
            >
              Read Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
