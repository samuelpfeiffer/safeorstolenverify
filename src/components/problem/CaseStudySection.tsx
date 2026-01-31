
import { Card, CardContent } from "@/components/ui/card";

export const CaseStudySection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-900/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-sos-gray-800/80 backdrop-blur-lg border-yellow-700/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Real Impact: The Hidden Cost of Uncertainty</h2>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Every day, millions of consumers face the anxiety of not knowing whether their secondhand purchases are legitimate. A smartphone bought online, electronics from a marketplace, or a vehicle from a private seller - any of these could potentially be stolen goods.
              </p>
              <p className="text-gray-200 mb-4 leading-relaxed">
                The consequences aren't just financial. When someone unknowingly purchases stolen goods, they face potential legal complications, loss of the item, and the emotional stress of being caught in a situation beyond their control. This uncertainty has created a crisis of trust in secondhand markets worldwide.
              </p>
              <p className="text-yellow-400 font-medium">
                SafeOrStolen exists to eliminate this uncertainty and protect innocent people from becoming victims of the stolen goods crisis.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
