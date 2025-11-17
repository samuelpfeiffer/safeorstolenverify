import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, Download, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MobileAppCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-sos/5">
      <div className="container mx-auto max-w-6xl">
        <Card className="overflow-hidden border-2 border-sos-orange/20 bg-gradient-to-br from-card via-card to-sos-orange/5">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left: Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sos-orange/10 border border-sos-orange/20 w-fit">
                <Smartphone className="w-4 h-4 text-sos-orange" />
                <span className="text-sm font-semibold text-sos-orange">Mobile App Available</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                Verify On-The-Go with
                <span className="block text-transparent bg-gradient-to-r from-sos-orange to-sos-lime bg-clip-text">
                  Our Mobile App
                </span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Install SafeOrStolen directly from your browser - no app store needed. 
                Check items instantly while shopping at Facebook Marketplace, OfferUp, pawn shops, or anywhere.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sos-orange/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-sos-orange" />
                  </div>
                  <div>
                    <p className="font-semibold">Instant Access</p>
                    <p className="text-sm text-muted-foreground">Launch from your home screen</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sos-lime/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-sos-lime" />
                  </div>
                  <div>
                    <p className="font-semibold">Works Offline</p>
                    <p className="text-sm text-muted-foreground">View history without internet</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sos-orange/10 flex items-center justify-center">
                    <Download className="w-5 h-5 text-sos-orange" />
                  </div>
                  <div>
                    <p className="font-semibold">Free to Install</p>
                    <p className="text-sm text-muted-foreground">2 free searches included</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-sos-orange to-sos-lime text-white font-bold hover:shadow-xl transition-all hover:scale-105"
                >
                  <Link to="/install-app">
                    <Download className="w-5 h-5 mr-2" />
                    Install App Now
                  </Link>
                </Button>

                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-sos-orange/30 hover:border-sos-orange hover:bg-sos-orange/5"
                >
                  <Link to="/mobile-app">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                ✨ Works on iOS, Android, and Desktop • No App Store Required
              </p>
            </div>

            {/* Right: Visual */}
            <div className="flex items-center justify-center relative">
              <div className="relative">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sos-orange/20 to-sos-lime/20 blur-3xl rounded-full" />
                
                {/* Phone mockup */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <Smartphone className="w-32 h-32 md:w-40 md:h-40 text-sos-orange drop-shadow-2xl" />
                  
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-black text-foreground">50M+</p>
                    <p className="text-sm text-muted-foreground">Stolen Items Database</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
