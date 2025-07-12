
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Users, Shield } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      number: "$13B",
      label: "Annual stolen goods market value",
      source: "National Insurance Crime Bureau"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "2.3M",
      label: "Americans unknowingly buy stolen goods yearly",
      source: "FBI Crime Statistics"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      number: "78%",
      label: "Of stolen items are never recovered",
      source: "Department of Justice"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      number: "0%",
      label: "Effective consumer verification tools existed",
      source: "Market Analysis (Pre-Safe Or Stolen)"
    }
  ];

  return (
    <section className="py-16 bg-sos-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">The Scale of the Crisis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-sos-gray-800/80 backdrop-blur-lg border-sos-orange/30 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                      <div className="text-red-400">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-200 mb-3 text-sm">{stat.label}</div>
                  <div className="text-xs text-gray-300">Source: {stat.source}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
