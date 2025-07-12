
import { Card, CardContent } from "@/components/ui/card";
import { Target, Shield, Globe } from "lucide-react";

export const MissionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-sos-orange/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-sos-orange" />
            <h2 className="text-3xl font-bold">Our Mission: Protecting Millions Worldwide</h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            To eliminate the $13 billion stolen goods crisis by creating the world's most comprehensive 
            verification platform, protecting millions of innocent people from financial loss, legal 
            consequences, and emotional trauma caused by unknowingly purchasing stolen items.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-secondary/50 backdrop-blur-lg border-sos-orange/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Target className="h-7 w-7 text-sos-orange" />
                  <h3 className="text-xl font-semibold text-sos-orange">Vision 2025</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To become the global standard for item verification, partnering with law enforcement 
                  agencies worldwide and reducing fraud-related losses by 80% while protecting 
                  millions of consumers from marketplace deception.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 backdrop-blur-lg border-blue-400/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Globe className="h-7 w-7 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-400">Global Impact</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Building the world's largest verification network to protect consumers, 
                  businesses, and law enforcement agencies from the hidden dangers of the 
                  stolen goods marketplace.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-sos-dark/50 p-8 rounded-lg border border-sos-orange/20">
            <h3 className="text-2xl font-semibold text-sos-orange mb-4">Our Commitment</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every verification we process, every fraud we prevent, and every innocent person we protect 
              brings us closer to a world where trust is rebuilt in secondhand markets through technology, 
              transparency, and comprehensive data networks.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 bg-sos-orange/10 p-3 rounded-lg">
              <span className="w-2 h-2 bg-sos-lime rounded-full"></span>
              <span>Accelerated by</span>
              <a 
                href="https://fastercapital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sos-orange hover:text-sos-orange/80 transition-colors font-semibold"
              >
                FasterCapital
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
