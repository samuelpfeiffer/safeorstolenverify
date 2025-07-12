
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, DollarSign, Scale } from "lucide-react";

export const ProblemIdentificationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-red-400">The Crisis We Discovered</h2>
            <p className="text-lg text-gray-300">
              Deep research revealed the scope of the stolen goods crisis affecting millions globally
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-red-950/20 border-red-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="h-6 w-6 text-red-400" />
                  <h3 className="text-lg font-semibold text-red-300">$13 Billion Crisis</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Annual value of stolen goods circulating through secondhand markets, creating a massive underground economy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-950/20 border-orange-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-orange-400" />
                  <h3 className="text-lg font-semibold text-orange-300">2.3M Victims</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Americans who unknowingly purchase stolen goods each year, facing legal and financial consequences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-yellow-950/20 border-yellow-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-yellow-300">System Gap</h3>
                </div>
                <p className="text-sm text-gray-300">
                  No reliable verification system existed for consumers to check item legitimacy before purchase.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-950/20 border-purple-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="h-6 w-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-purple-300">Legal Consequences</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Innocent buyers face arrest, legal fees, and emotional trauma for unknowingly possessing stolen items.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-secondary/50 backdrop-blur-lg border-gray-700">
            <CardContent className="p-8">
              <p className="text-gray-300 leading-relaxed text-center">
                <span className="text-sos-orange font-semibold">The revelation was clear:</span> millions of innocent people needed protection from a system that couldn't distinguish between criminal intent and unfortunate circumstance. The technology existed to solve this problem - it just needed to be built and made accessible to everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
