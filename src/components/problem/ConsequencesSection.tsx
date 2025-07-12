
import { Card, CardContent } from "@/components/ui/card";

export const ConsequencesSection = () => {
  const consequences = [
    {
      title: "Legal Liability",
      description: "Purchasing stolen goods is a crime in all 50 states, even if done unknowingly. Buyers can face fines, criminal charges, and must surrender the item without compensation."
    },
    {
      title: "Financial Loss", 
      description: "Consumers lose their entire purchase amount when stolen items are confiscated. No insurance or legal recourse exists for innocent buyers."
    },
    {
      title: "Supporting Crime",
      description: "Every stolen goods purchase funds further criminal activity, creating a cycle that victimizes communities and legitimate businesses."
    },
    {
      title: "Personal Risk",
      description: "Buying from criminals can expose purchasers to dangerous situations, identity theft, and further criminal schemes."
    }
  ];

  return (
    <section className="py-16 bg-sos/95">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What This Means for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consequences.map((consequence, index) => (
              <Card key={index} className="bg-red-900/20 border-red-700/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">{consequence.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{consequence.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
