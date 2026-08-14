import React from 'react';
import { Star } from 'lucide-react';
import { handleExternalNavigation } from '@/utils/navigationUtils';

interface TrustpilotBadgeProps {
  variant?: 'default' | 'compact' | 'footer';
  /** Retained for API compatibility. No review counts or star ratings are published. */
  showReviewCount?: boolean;
}

/**
 * Links to the SafeOrStolen Trustpilot profile.
 * No numeric rating or review count is displayed — self-published ratings are
 * against Google's structured-data policy and go stale.
 */
export const TrustpilotBadge: React.FC<TrustpilotBadgeProps> = ({ variant = 'default' }) => {
  const trustpilotUrl = 'https://www.trustpilot.com/review/safeorstolen.com';

  if (variant === 'compact') {
    return (
      <button
        onClick={() => handleExternalNavigation(trustpilotUrl, true)}
        className="inline-flex items-center gap-1.5 text-xs hover:opacity-80 transition-opacity"
        aria-label="View SafeOrStolen reviews on Trustpilot"
      >
        <Star className="h-3 w-3 text-green-600" />
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
        <Star className="h-3.5 w-3.5 text-green-600" />
        <div className="flex flex-col items-start">
          <span className="text-xs font-semibold text-foreground">Customer reviews</span>
          <span className="text-[10px] text-muted-foreground">Read them on Trustpilot</span>
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
      <Star className="h-5 w-5 text-green-600" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-green-600">Trustpilot</span>
        <span className="text-xs text-muted-foreground">Read customer reviews</span>
      </div>
    </button>
  );
};
