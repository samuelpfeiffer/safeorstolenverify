
import { Card, CardContent } from "@/components/ui/card";

export const CurrentSolutionsSection = () => {
  return (
    <section className="py-16 bg-sos-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Why Current "Solutions" Don't Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-sos-gray-800/50 border-sos-orange/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Police Databases</h3>
                <p className="text-gray-300 text-sm">
                  Not accessible to consumers. Designed for law enforcement only.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-sos-gray-800/50 border-sos-orange/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">IMEI Checkers</h3>
                <p className="text-gray-300 text-sm">
                  Only check carrier blacklists, not theft databases. Miss 80% of stolen phones.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-sos-gray-800/50 border-sos-orange/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">"Trust the Seller"</h3>
                <p className="text-gray-300 text-sm">
                  Criminal sellers are sophisticated. Reviews and meetings don't guarantee legitimacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
