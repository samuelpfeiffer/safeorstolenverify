import { Shield, BadgeCheck, Users } from 'lucide-react';
import heroImage from '@/assets/hero-verification-devices.png';

export const AppDownloadSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/80 to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMThjMy43IDAgNy4xLTEuMTIgMTAtM2wtLjQtMy44Yy0yLjEgMS4yLTQuNSAyLTcuMSAyLTggMC0xNC00LTE2LTEwaDI4YzAgMy43LTEuMTIgNy4xLTMgMTB6IiBmaWxsPSIjZmZmIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Exclusive Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-bold shadow-lg animate-pulse">
              🏆 EXCLUSIVE: Only Verification Service With Mobile App
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Verify On-The-Go With Our Mobile App
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              CheckMend doesn't have it. IMEIinfo doesn't have it. Stolen Register doesn't have it. 
              <span className="block mt-2 font-bold">Only SafeOrStolen offers instant mobile verification - anywhere, anytime!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* App Screenshots */}
            <div className="relative">
              <div className="bg-primary-foreground rounded-3xl p-8 shadow-2xl border-4 border-primary-foreground/20">
                <img 
                  src={heroImage} 
                  alt="SafeOrStolen mobile app - the only verification service with iOS and Android apps"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-xl">
                iOS & Android
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary-foreground">Camera Scanning</h3>
                    <p className="text-primary-foreground/80">Point, scan, verify - check items in seconds while shopping in-store or meeting sellers</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary-foreground">Offline History</h3>
                    <p className="text-primary-foreground/80">Access all your verification reports even without internet connection</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary-foreground">Instant Alerts</h3>
                    <p className="text-primary-foreground/80">Push notifications when items match stolen property databases</p>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="pt-6 space-y-4">
                <a 
                  href="/download-app" 
                  className="block w-full bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold py-4 px-8 rounded-xl text-center transition-all hover:scale-105 shadow-xl"
                >
                  📱 Download for iOS & Android
                </a>
                <p className="text-center text-primary-foreground/70 text-sm">
                  ⭐ 4.9/5 rating • 100,000+ downloads • Free to use
                </p>
              </div>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="mt-16 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Why Our Competitors Don't Offer Mobile Apps
              </h3>
              <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
                CheckMend, IMEIinfo, and Stolen Register are stuck with desktop-only websites. 
                We invested in mobile-first technology so you can verify items right when you need to - 
                at garage sales, meetups, car lots, or while browsing Facebook Marketplace on your phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};