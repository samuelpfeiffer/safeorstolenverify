
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-sos to-sos-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            The <span className="text-red-400">Hidden Crisis</span> in 
            <br />Secondhand Commerce
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Every year, a $13 billion criminal enterprise operates in plain sight, 
            victimizing millions of innocent consumers and legitimate businesses. 
            This is the stolen goods crisis that Safe Or Stolen was built to solve.
          </p>
          <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-6 mb-8">
            <p className="text-lg text-red-300 font-semibold mb-2">The Core Problem</p>
            <p className="text-gray-200">
              Before Safe Or Stolen, there was no reliable way for consumers to verify 
              if an item was stolen before purchasing it, leaving millions vulnerable 
              to legal and financial consequences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
