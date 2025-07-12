
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Shield } from "lucide-react";

export const FounderJourneySection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary/50 backdrop-blur-lg border-gray-700">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="h-8 w-8 text-sos-orange" />
                <h2 className="text-3xl font-bold text-sos-orange">The Spark: When Personal Experience Meets Market Need</h2>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Safe Or Stolen was born from a personal encounter with the $13 billion stolen goods crisis that affects millions worldwide. Our founder Samuel Pfeiffer experienced firsthand the anxiety and uncertainty that comes with purchasing secondhand items in today's marketplace.
                </p>
                
                <div className="bg-blue-950/30 p-6 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-300 mb-2">The Market Reality</h3>
                      <p>
                        Research revealed a staggering truth: 2.3 million Americans unknowingly purchase stolen goods annually, with $13 billion in stolen merchandise circulating through secondhand markets. The lack of verification infrastructure was leaving consumers, businesses, and law enforcement agencies vulnerable.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p>
                  What started as a personal need quickly evolved into a mission to protect millions of innocent people from financial loss, legal complications, and the emotional trauma of unknowingly purchasing stolen goods.
                </p>
                
                <div className="bg-sos-orange/10 p-6 rounded-lg border-l-4 border-sos-orange">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-sos-orange mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-sos-orange mb-2">The Vision</h3>
                      <p>
                        "We envisioned a world where anyone could verify the legitimacy of any item before purchase - where trust could be rebuilt in secondhand markets through technology and comprehensive data networks."
                      </p>
                      <p className="text-sm text-gray-400 mt-2">- Samuel Pfeiffer, Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
