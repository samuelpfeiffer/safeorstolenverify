import { Shield, BadgeCheck, Users, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const AppDownloadSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/80 to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMThjMy43IDAgNy4xLTEuMTIgMTAtM2wtLjQtMy44Yy0yLjEgMS4yLTQuNSAyLTcuMSAyLTggMC0xNC00LTE2LTEwaDI4YzAgMy43LTEuMTIgNy4xLTMgMTB6IiBmaWxsPSIjZmZmIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Exclusive Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-bold shadow-lg">
              🏆 EXCLUSIVE: Only Verification Service With Mobile App
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Verify Phones, Cars, Guns & More On-The-Go
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              CheckMend doesn't have it. IMEIinfo doesn't have it. Stolen Register doesn't have it. 
              <span className="block mt-2 font-bold">Only SafeOrStolen offers complete mobile verification - IMEI, VIN, Serial Numbers & Firearms!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* App Visual */}
            <div className="relative">
              <div className="bg-primary-foreground rounded-3xl p-12 shadow-2xl border-4 border-primary-foreground/20 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Smartphone className="h-32 w-32 text-primary mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-primary mb-2">Mobile App</h3>
                  <p className="text-muted-foreground text-lg">Available on iOS & Android</p>
                </div>
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
                    <h3 className="font-bold text-xl mb-2 text-primary-foreground">All-In-One Verification</h3>
                    <p className="text-primary-foreground/80">Check phones (IMEI), vehicles (VIN), electronics (serial numbers), and firearms (serial numbers) - all in one mobile app!</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary-foreground">Firearms Database Access</h3>
                    <p className="text-primary-foreground/80">Search stolen gun databases including HotGunz, ATF records, and NCIC reports right from your phone</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary-foreground">Camera Scanning</h3>
                    <p className="text-primary-foreground/80">Point, scan, verify - check items in seconds while shopping or meeting sellers. Works with QR codes, barcodes, and serial numbers</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary-foreground">Offline & Instant Alerts</h3>
                    <p className="text-primary-foreground/80">Access verification history offline and get push notifications when items match stolen property databases</p>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="pt-6 space-y-4">
                <Link 
                  to="/download-app" 
                  className="block w-full bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold py-4 px-8 rounded-xl text-center transition-all hover:scale-105 shadow-xl"
                >
                  📱 Download for iOS & Android - Verify Phones, Cars & Guns!
                </Link>
                <p className="text-center text-primary-foreground/70 text-sm">
                  ⭐ Free Download • All verification types included
                </p>
              </div>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="mt-16 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                The Only Mobile App That Verifies Everything Including Firearms
              </h3>
              <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                CheckMend, IMEIinfo, and Stolen Register are stuck with desktop-only websites and don't offer firearms verification. 
                We invested in mobile-first technology so you can verify phones, cars, laptops, AND firearms right when you need to - 
                at gun shows, garage sales, meetups, car lots, or while browsing online marketplaces on your phone.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground/70 text-sm">
                <Badge variant="secondary" className="text-sm">📱 Phones (IMEI)</Badge>
                <Badge variant="secondary" className="text-sm">🚗 Vehicles (VIN)</Badge>
                <Badge variant="secondary" className="text-sm">💻 Electronics</Badge>
                <Badge variant="secondary" className="text-sm">🔫 Firearms</Badge>
                <Badge variant="secondary" className="text-sm">🚲 Bicycles</Badge>
                <Badge variant="secondary" className="text-sm">📦 All Items</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};