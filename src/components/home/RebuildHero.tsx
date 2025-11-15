import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Database, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RebuildHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Pre-headline Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold animate-pulse">
            <TrendingUp className="w-4 h-4 mr-2 inline" />
            Backed by FasterCapital
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Don't Get Scammed on Facebook Marketplace
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Verify Phones, Cars & Electronics Aren't Stolen — Right From Your Phone
          </p>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 max-w-3xl mx-auto">
            The only mobile verification platform that checks IMEI, VIN, and serial numbers while you're standing next to the seller. Join 1,000+ protected buyers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all"
              onClick={() => navigate('/pricing')}
            >
              <Shield className="w-5 h-5 mr-2" />
              Start Free Verification
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 h-auto"
              onClick={() => navigate('/how-it-works')}
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Badge Strip */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Backed by FasterCapital</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>1,000+ Items Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Developing Law Enforcement Partnerships</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Real-Time Database Access</span>
            </div>
          </div>

          {/* Live Activity Ticker */}
          <div className="mt-10 inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 text-green-100 text-sm font-medium">
            <Database className="w-4 h-4 animate-pulse" />
            <span>Live: 247 verifications in the last 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};