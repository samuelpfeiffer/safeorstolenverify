import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Scan, Lock, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RebuildHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* 3D Floating Elements - Pure CSS */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s', animationDuration: '20s' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s', animationDuration: '25s' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s', animationDuration: '30s' }}
        />
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Pre-headline Badge with 3D effect */}
          <Badge 
            variant="secondary" 
            className="mb-8 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm bg-card/80 border border-primary/20 shadow-lg hover:shadow-primary/20 transition-all hover:scale-105"
            style={{ transform: 'translateZ(20px)' }}
          >
            <Shield className="w-4 h-4 mr-2 inline" />
            Backed by FasterCapital
          </Badge>

          {/* Main Headline with 3D depth */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight"
            style={{ 
              textShadow: '0 4px 12px hsl(var(--primary) / 0.2)',
              transform: 'translateZ(40px)'
            }}
          >
            Verify Before You Buy.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-cyan-500">
              Never Get Scammed.
            </span>
          </h1>

          {/* Sub-headline */}
          <p 
            className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            style={{ transform: 'translateZ(30px)' }}
          >
            Instant verification for phones, vehicles & electronics using IMEI, VIN, and serial numbers
          </p>

          {/* Supporting Text */}
          <p 
            className="text-base md:text-lg mb-12 text-muted-foreground/80 max-w-3xl mx-auto"
            style={{ transform: 'translateZ(20px)' }}
          >
            Check stolen item databases in real-time. Protect yourself from fraud on Facebook Marketplace, OfferUp, and Craigslist.
          </p>

          {/* CTA Buttons with 3D hover effects */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            style={{ transform: 'translateZ(50px)' }}
          >
            <Button 
              size="lg" 
              className="group relative bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 hover:-translate-y-1"
              onClick={() => navigate('/pricing')}
            >
              <Scan className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Free Verification
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 text-lg px-8 py-6 h-auto backdrop-blur-sm hover:bg-primary/10 transition-all hover:scale-105 hover:-translate-y-1"
              onClick={() => navigate('/how-it-works')}
            >
              <Lock className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators with 3D cards */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            style={{ transform: 'translateZ(30px)' }}
          >
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-foreground">10+ Sources Checked</span>
              <span className="text-xs text-muted-foreground">Real-time verification</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-foreground">1,000+ Items Verified</span>
              <span className="text-xs text-muted-foreground">Trusted by buyers</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-foreground">2-Minute Checks</span>
              <span className="text-xs text-muted-foreground">Instant results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};