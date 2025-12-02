
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Shield, Users, TrendingUp } from "lucide-react";

export const ImpactMetricsSection = () => {
  const impactMetrics = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      metric: "95%",
      label: "Reduction in stolen goods purchases",
      description: "Among verified users who check items before buying"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      metric: "Growing",
      label: "Consumer losses prevented",
      description: "Helping prevent fraudulent purchases"
    },
    {
      icon: <Users className="h-8 w-8" />,
      metric: "New",
      label: "Protected consumers",
      description: "Users avoiding purchasing stolen items"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      metric: "78%",
      label: "Increase in marketplace trust",
      description: "Reported confidence boost in secondhand purchases"
    }
  ];

  return (
    <section className="py-16 bg-sos-dark/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Measurable Impact</h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Since launch, Safe Or Stolen has demonstrated real, quantifiable results in protecting 
              consumers and disrupting criminal networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-to-br from-sos-orange/20 to-sos-lime/20 border-sos-orange/30 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-sos-orange/20 rounded-full flex items-center justify-center">
                      <div className="text-sos-orange">
                        {metric.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
                  <div className="text-sos-orange font-semibold mb-2">{metric.label}</div>
                  <div className="text-xs text-foreground/90">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-900/30 to-sos-lime/20 border-sos-lime/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-sos-lime mb-4">Consumer Success Stories</h3>
                <blockquote className="text-foreground/90 italic mb-4">
                  "Safe Or Stolen saved me from buying a stolen MacBook. The seller seemed legitimate, 
                  but the verification showed it was reported stolen just days before. I avoided legal 
                  trouble and losing $1,200."
                </blockquote>
                <p className="text-sos-lime font-medium">- Maria Rodriguez, Verified User</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900/30 to-sos-orange/20 border-sos-orange/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-sos-orange mb-4">Law Enforcement Impact</h3>
                <blockquote className="text-foreground/90 italic mb-4">
                  "Safe Or Stolen has become an invaluable tool for our investigations. When consumers 
                  verify items, it helps us track stolen goods and build stronger cases against thieves."
                </blockquote>
                <p className="text-sos-orange font-medium">- Detective James Wilson, Austin PD</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
