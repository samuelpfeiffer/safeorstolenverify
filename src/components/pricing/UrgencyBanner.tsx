import { Shield, Database, Zap } from 'lucide-react';

export const UrgencyBanner = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Value proposition banner */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-sos-lime/10 rounded-2xl p-6 mb-6 border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-foreground">
                Try Free • No Credit Card Required
              </h3>
              <p className="text-lg font-semibold text-muted-foreground">
                2 free verifications included • Valid for 14 days
              </p>
            </div>
          </div>
        </div>

        {/* Trust indicators grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="modern-card p-4 text-center">
            <Database className="w-8 h-8 mx-auto mb-2 text-sos-lime" />
            <p className="text-2xl font-black text-foreground">150+</p>
            <p className="text-sm text-muted-foreground">Data sources</p>
          </div>
          
          <div className="modern-card p-4 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-sos-orange" />
            <p className="text-2xl font-black text-foreground">3 Sec</p>
            <p className="text-sm text-muted-foreground">Average verification time</p>
          </div>
          
          <div className="modern-card p-4 text-center bg-sos-lime/10 border-sos-lime/20">
            <Shield className="w-8 h-8 mx-auto mb-2 text-sos-lime" />
            <p className="text-2xl font-black text-foreground">Safe</p>
            <p className="text-sm text-muted-foreground">Protect your purchase</p>
          </div>
        </div>

        {/* Trust guarantee */}
        <div className="mt-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/20 rounded-xl p-4 text-center">
          <p className="font-bold text-foreground">
            ✅ 100% Money-Back Guarantee if Item is Stolen • 
            ✅ Instant Results or Full Refund
          </p>
        </div>
      </div>
    </div>
  );
};