import { Shield, Zap, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const UrgencyBanner = () => {
  return (
    <div className="sticky top-[80px] z-40 w-full">
      <Card className="mx-auto max-w-7xl border-sos-lime/30 bg-gradient-to-r from-sos-lime/10 via-card to-primary/10 backdrop-blur-lg">
        <div className="flex flex-wrap items-center justify-center gap-6 py-3 px-4 text-sm">
          {/* Pricing */}
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-sos-lime" />
            <span className="font-semibold text-foreground">
              $14.99/month
            </span>
            <span className="text-muted-foreground">
              Unlimited verifications
            </span>
          </div>

          <div className="h-4 w-px bg-border hidden sm:block" />

          {/* Speed */}
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-sos-orange" />
            <span className="font-semibold text-foreground">
              3-second results
            </span>
            <span className="text-muted-foreground">
              Instant verification
            </span>
          </div>

          <div className="h-4 w-px bg-border hidden sm:block" />

          {/* Database */}
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-sos-lime" />
            <span className="text-xs text-muted-foreground">
              <strong>150+</strong> trusted data sources worldwide
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
