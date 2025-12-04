import React from 'react';
import { Star } from 'lucide-react';
import { handleExternalNavigation } from '@/utils/navigationUtils';

interface TrustpilotBadgeProps {
  variant?: 'default' | 'compact' | 'footer';
  showReviewCount?: boolean;
}

export const TrustpilotBadge: React.FC<TrustpilotBadgeProps> = ({ 
  variant = 'default',
  showReviewCount = true 
}) => {
  const rating = 4.1;
  const reviewCount = 5;
  const trustpilotUrl = 'https://www.trustpilot.com/review/safeorstolen.com';

  if (variant === 'compact') {
    return (
      <button
        onClick={() => handleExternalNavigation(trustpilotUrl, true)}
        className="inline-flex items-center gap-1.5 text-xs hover:opacity-80 transition-opacity"
        aria-label="View SafeOrStolen reviews on Trustpilot"
      >
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < Math.floor(rating) ? 'fill-green-500 text-green-500' : 'fill-muted text-muted'}`}
            />
          ))}
        </div>
        <span className="text-muted-foreground">{rating}</span>
        <span className="text-green-600 font-medium">Trustpilot</span>
      </button>
    );
  }

  if (variant === 'footer') {
    return (
      <button
        onClick={() => handleExternalNavigation(trustpilotUrl, true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors border border-border"
        aria-label="View SafeOrStolen reviews on Trustpilot"
      >
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? 'fill-green-500 text-green-500' : 'fill-muted text-muted'}`}
            />
          ))}
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs font-semibold text-foreground">{rating}/5</span>
          {showReviewCount && (
            <span className="text-[10px] text-muted-foreground">{reviewCount} reviews</span>
          )}
        </div>
        <span className="text-xs font-bold text-green-600">Trustpilot</span>
      </button>
    );
  }

  // Default variant
  return (
    <button
      onClick={() => handleExternalNavigation(trustpilotUrl, true)}
      className="flex items-center gap-3 p-3 rounded-xl bg-card hover:bg-accent/50 transition-colors border border-border shadow-sm"
      aria-label="View SafeOrStolen reviews on Trustpilot"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-green-500 text-green-500' : 'fill-muted text-muted'}`}
            />
          ))}
        </div>
        <span className="text-lg font-bold text-foreground">{rating}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-green-600">Trustpilot</span>
        {showReviewCount && (
          <span className="text-xs text-muted-foreground">{reviewCount} verified reviews</span>
        )}
      </div>
    </button>
  );
};
