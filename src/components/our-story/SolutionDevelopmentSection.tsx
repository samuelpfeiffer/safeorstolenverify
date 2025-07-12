
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Database, Globe, Users } from "lucide-react";

export const SolutionDevelopmentSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Building the Solution</h2>
            <p className="text-lg text-gray-300">
              How we transformed the vision into the world's most comprehensive verification platform
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-secondary/50 backdrop-blur-lg border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-sos-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Database Network</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We began building partnerships with law enforcement agencies, insurance companies, and manufacturers worldwide to create the most comprehensive stolen goods database ever assembled.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 backdrop-blur-lg border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Verification Technology</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our platform delivers verification results in under 5 seconds, cross-referencing millions of records including police reports, insurance claims, and manufacturer databases.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 backdrop-blur-lg border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We made verification accessible to everyone - consumers, businesses, and law enforcement - through our web platform, API integrations, and mobile applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 backdrop-blur-lg border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Protection</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Every verification helps build a safer marketplace for everyone, creating a network effect that protects millions of people from becoming victims of the stolen goods crisis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
