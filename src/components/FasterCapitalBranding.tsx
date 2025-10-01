import { Shield, BadgeCheck } from 'lucide-react';

export const FasterCapitalBranding = () => {
  return (
    <div className="flex items-center justify-center gap-3 text-base md:text-lg">
      <Shield className="h-6 w-6 text-primary" />
      <span className="text-muted-foreground">Protecting buyers and sellers with</span>
      <span className="font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
        Real-Time Verification
      </span>
      <BadgeCheck className="h-6 w-6 text-secondary" />
    </div>
  );
};
