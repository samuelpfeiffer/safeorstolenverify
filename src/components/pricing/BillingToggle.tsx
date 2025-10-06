import React from 'react';

interface BillingToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
}

export const BillingToggle: React.FC<BillingToggleProps> = ({ isAnnual, onToggle }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <button
        onClick={() => onToggle(false)}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          !isAnnual
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onToggle(true)}
        className={`px-4 py-2 rounded-lg font-medium transition-all relative ${
          isAnnual
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
      >
        Annual
        <span className="absolute -top-2 -right-2 bg-sos-lime text-black text-xs px-2 py-0.5 rounded-full font-bold">
          Save 20%
        </span>
      </button>
    </div>
  );
};
