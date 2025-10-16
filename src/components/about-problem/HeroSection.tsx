
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-sos via-sos-dark/95 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Alert Badge */}
          <div className="mb-8 flex justify-center animate-fadeIn">
            <Badge variant="destructive" className="text-sm font-medium px-6 py-3 bg-red-500/10 text-red-400 border-red-500/20">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Crisis Alert: $13 Billion Annual Impact
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white animate-slideUp leading-tight">
            The <span className="text-red-400 relative">
              Hidden Crisis
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            </span> in 
            <br />Secondhand Commerce
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Every year, a <strong className="text-red-400">$13 billion criminal enterprise</strong> operates in plain sight, 
            victimizing millions of innocent consumers and legitimate businesses. 
            This is the stolen goods crisis that Safe Or Stolen was built to solve.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <Card className="glass-effect border-red-500/20 bg-red-500/5">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400 mb-1">$13B</div>
                <div className="text-sm text-foreground/90">Annual stolen goods market</div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-orange-500/20 bg-orange-500/5">
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-400 mb-1">2.3M</div>
                <div className="text-sm text-foreground/90">Victims annually</div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-yellow-500/20 bg-yellow-500/5">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-400 mb-1">95%</div>
                <div className="text-sm text-foreground/90">Purchases go unchecked</div>
              </CardContent>
            </Card>
          </div>

          {/* Core Problem Statement */}
          <Card className="glass-effect bg-red-900/20 border-red-700/30 p-8 mb-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <p className="text-lg text-red-300 font-semibold mb-4">The Core Problem</p>
              <p className="text-gray-200 text-lg leading-relaxed">
                Before Safe Or Stolen, there was <strong className="text-white">no reliable way</strong> for consumers to verify 
                if an item was stolen before purchasing it, leaving millions vulnerable 
                to legal and financial consequences.
              </p>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <p className="text-sos-lime font-medium mb-4">
              ✓ This is exactly why we built Safe Or Stolen
            </p>
            <p className="text-muted-foreground">
              The first and only platform that gives consumers the power to verify items before purchase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
