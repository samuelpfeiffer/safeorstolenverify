import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";
export const AcknowledgmentsSection = () => {
  return <section className="py-16 bg-gradient-to-r from-sos-orange/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-sos-orange" />
              <h2 className="text-3xl font-bold">Special Thanks</h2>
            </div>
            <p className="text-lg text-gray-300">
              To those who believed in our mission from the very beginning
            </p>
          </div>
          
          <Card className="bg-secondary/50 backdrop-blur-lg border-sos-orange/30">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <img src="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" alt="Doug Sittler and his dog Max" className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover border-2 border-sos-orange/50" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-sos-orange mb-2">Doug Sittler & Max</h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-400">Olympia, WA</span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">Doug's generous contribution of $1,500 helped us take our first crucial steps toward building Safe Or Stolen. His early belief in our mission to protect innocent people like Glen gave us the foundation we needed to begin this journey.</p>
                  
                  <p className="text-sos-orange font-semibold">
                    Thank you, Doug and Max, for being part of Glen's legacy and helping us protect millions of innocent people worldwide.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};