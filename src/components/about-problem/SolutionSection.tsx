
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, CheckCircle, Target } from "lucide-react";

export const SolutionSection = () => {
  const solutionFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Real-Time Database Integration",
      description: "Our own extensive stolen-item reports and public web results provide instant verification"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Verification",
      description: "Get results in seconds through our advanced matching algorithms and comprehensive data analysis"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Consumer Protection",
      description: "Prevent legal issues and financial losses before they happen with proactive verification"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Crime Prevention",
      description: "Disrupt criminal networks by eliminating the market for stolen goods"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-sos-lime/10 to-green-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Revolutionary Solution</h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              SafeOrStolen is the world's first comprehensive verification system that bridges 
              our comprehensive stolen-item reports and public web results, creating a robust shield
              against stolen goods purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {solutionFeatures.map((feature, index) => (
              <Card key={index} className="bg-sos-lime/10 border-sos-lime/30 hover:bg-sos-lime/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-sos-lime/20 rounded-full flex items-center justify-center">
                      <div className="text-sos-lime">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-sos-lime">{feature.title}</h3>
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-sos-lime/20 to-green-900/30 rounded-lg p-8 border border-sos-lime/30">
            <h3 className="text-2xl font-bold text-sos-lime mb-4">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-sos-lime/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-sos-lime font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-white">Upload or Scan</h4>
                <p className="text-foreground/90 text-sm">Take a photo or enter the item's serial number, IMEI, or unique identifier</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-sos-lime/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-sos-lime font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-white">Instant Analysis</h4>
                <p className="text-foreground/90 text-sm">Our AI searches multiple databases and cross-references theft reports in real-time</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-sos-lime/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-sos-lime font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-white">Clear Verdict</h4>
                <p className="text-foreground/90 text-sm">Get a definitive "Safe" or "Stolen" result with detailed evidence and next steps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
