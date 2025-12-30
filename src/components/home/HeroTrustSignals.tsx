import { Star, Shield, Zap, Award } from 'lucide-react';

/**
 * Hero Trust Signals - Above fold social proof
 * Per audit: "No social proof above fold" is a conversion issue
 */
export const HeroTrustSignals = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
      {/* Verification Count */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <Shield className="h-4 w-4 text-emerald-500" />
        <span className="font-medium text-foreground">50,000+ Verified</span>
      </div>

      {/* Trustpilot-style Rating */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              className={`h-3.5 w-3.5 ${star <= 4 ? 'text-amber-500 fill-amber-500' : 'text-amber-500 fill-amber-500/50'}`} 
            />
          ))}
        </div>
        <span className="font-medium text-foreground">4.8 Rating</span>
      </div>

      {/* Speed */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
        <Zap className="h-4 w-4 text-blue-500" />
        <span className="font-medium text-foreground">3 Second Results</span>
      </div>

      {/* FasterCapital */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
        <Award className="h-4 w-4 text-primary" />
        <span className="font-medium text-foreground">FasterCapital Accelerated</span>
      </div>
    </div>
  );
};
