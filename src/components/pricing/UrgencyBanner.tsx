import { Clock, TrendingUp, Users } from 'lucide-react';

export const UrgencyBanner = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Main urgency banner */}
        <div className="bg-gradient-to-r from-sos-orange via-sos-orange/90 to-sos-orange rounded-2xl p-6 mb-6 shadow-orange">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                🔥 LIMITED TIME OFFER
              </h3>
              <p className="text-lg font-semibold opacity-90">
                Launch Special: $2.99 per check (Regular $4.99)
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-mono text-xl font-bold">47:23:15</span>
              </div>
              <p className="text-xs opacity-80 mt-1">Offer ends soon</p>
            </div>
          </div>
        </div>

        {/* Social proof grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="modern-card p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-sos-lime" />
            <p className="text-2xl font-black text-foreground">1,247</p>
            <p className="text-sm text-muted-foreground">Verified today</p>
          </div>
          
          <div className="modern-card p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-sos-orange" />
            <p className="text-2xl font-black text-foreground">87</p>
            <p className="text-sm text-muted-foreground">Stolen items found (24hrs)</p>
          </div>
          
          <div className="modern-card p-4 text-center bg-sos-lime/10 border-sos-lime/20">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-2xl font-black text-foreground">$842</p>
            <p className="text-sm text-muted-foreground">Avg. buyer saves</p>
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