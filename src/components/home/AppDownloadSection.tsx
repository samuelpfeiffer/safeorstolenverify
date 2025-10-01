import { Shield, BadgeCheck, Users } from 'lucide-react';
import heroImage from '@/assets/hero-verification-devices.png';

export const AppDownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get the SafeOrStolen App
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify items on-the-go with our powerful mobile app. Scan, check, and buy with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* App Screenshots */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="SafeOrStolen mobile app showing verification interface"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Instant Scanning</h3>
                    <p className="text-muted-foreground">Use your camera to scan barcodes and serial numbers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Offline Access</h3>
                    <p className="text-muted-foreground">Check your verification history anytime, anywhere</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Push Alerts</h3>
                    <p className="text-muted-foreground">Get notified when items match stolen reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};