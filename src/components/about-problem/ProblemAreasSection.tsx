
import { Card, CardContent } from "@/components/ui/card";

export const ProblemAreasSection = () => {
  const problemAreas = [
    {
      title: "Legal Consequences for Innocent Buyers",
      description: "Purchasing stolen goods is illegal in all 50 states, even unknowingly. Innocent buyers face potential criminal charges, fines, and must surrender items without compensation.",
      impact: "Millions at risk of wrongful prosecution"
    },
    {
      title: "Complete Financial Loss",
      description: "When stolen items are discovered, buyers lose their entire investment. No insurance covers these losses, and legal recourse is virtually non-existent.",
      impact: "Billions in consumer losses annually"
    },
    {
      title: "Fueling Criminal Enterprise",
      description: "Every stolen goods purchase directly funds criminal activity, creating a self-perpetuating cycle that victimizes communities and legitimate businesses.",
      impact: "Sustains $13B criminal economy"
    },
    {
      title: "Broken Trust in Marketplaces",
      description: "Without verification tools, consumers can't distinguish legitimate sellers from criminals, undermining trust in all secondhand markets.",
      impact: "Stifles legitimate commerce"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Four Critical Problems</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problemAreas.map((problem, index) => (
              <Card key={index} className="bg-red-900/20 border-red-700/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">{problem.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{problem.description}</p>
                  <div className="bg-red-950/30 p-3 rounded border border-red-800/30">
                    <p className="text-sm text-red-300 font-medium">Impact: {problem.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
