
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const MarketImpactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-900/20 to-red-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary/50 backdrop-blur-lg border-gray-700">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-7 w-7 text-sos-orange" />
                <h2 className="text-2xl font-bold text-sos-orange">Growing Crisis</h2>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  The stolen goods market isn't just large—it's rapidly expanding. As e-commerce 
                  and secondhand marketplaces grow, so does the opportunity for criminals to 
                  exploit innocent consumers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-950/20 p-6 rounded-lg border border-orange-800/30">
                    <h3 className="text-lg font-semibold text-orange-300 mb-3">Market Growth</h3>
                    <p className="text-sm">
                      The secondhand market is projected to reach $64B by 2024, but without 
                      verification systems, it becomes a haven for criminal activity.
                    </p>
                  </div>
                  
                  <div className="bg-red-950/20 p-6 rounded-lg border border-red-800/30">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Technology Gap</h3>
                    <p className="text-sm">
                      While e-commerce advanced rapidly, consumer protection tools lagged behind, 
                      creating vulnerability windows that criminals exploit daily.
                    </p>
                  </div>
                </div>
                
                <p>
                  This crisis demanded an innovative solution—one that could bridge law enforcement 
                  databases with consumer protection needs. That's why we built Safe Or Stolen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
