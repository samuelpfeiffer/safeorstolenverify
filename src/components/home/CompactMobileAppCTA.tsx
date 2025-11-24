import { Smartphone, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CompactMobileAppCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-primary/90 to-primary/80 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-75"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Icon & Text */}
            <div className="flex items-center gap-6 text-primary-foreground flex-1">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-3xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-primary-foreground/30">
                <Smartphone className="h-10 w-10 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    🏆 EXCLUSIVE
                  </span>
                  <span className="text-sm font-semibold">Only Verification Service with Mobile App</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                  Download SafeOrStolen App
                </h2>
                <p className="text-primary-foreground/95 text-lg">
                  ✓ Barcode Scanning • ✓ Works Offline • ✓ 3-Second Verification • ✓ Free Download
                </p>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  No competitor offers a mobile app - CheckMEND, IMEI.info, Carfax are web-only
                </p>
              </div>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="flex flex-col gap-3 shrink-0">
              <Link to="/mobile-app">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full md:w-auto min-w-[220px] text-lg font-semibold shadow-2xl hover:shadow-xl transition-all"
                >
                  <Download className="mr-2 h-6 w-6" />
                  Download App FREE
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/install-app">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full md:w-auto min-w-[220px] bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
                >
                  Installation Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};