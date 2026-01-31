import { memo } from 'react';
import { Link } from 'react-router-dom';
import { FREE_SEARCH_LIMIT } from '@/features/pricing/constants';

type SearchLimitDisplayProps = {
  hasReachedLimit: boolean;
  remainingSearches: number;
  isSubscribed: boolean;
  isAuthenticated: boolean;
};

const SearchLimitDisplayComponent = ({ 
  hasReachedLimit, 
  remainingSearches, 
  isSubscribed,
  isAuthenticated
}: SearchLimitDisplayProps) => {

  if (isSubscribed) {
    return (
      <div className="text-center mt-3 animate-in fade-in duration-300">
        <p className="text-sm text-sos-lime font-medium">
          ✨ Unlimited Plan – Verify as many items as you need
        </p>
      </div>
    );
  }

  // For non-authenticated users, show sign up message
  if (!isAuthenticated) {
    return (
      <div className="text-center mt-3 space-y-1 animate-in fade-in duration-300">
        <p className="text-sm text-sos-lime font-semibold">
          🎁 Sign up for {FREE_SEARCH_LIMIT} FREE verifications
        </p>
        <p className="text-xs text-muted-foreground">
          No credit card required
        </p>
      </div>
    );
  }

  return (
    <div className="text-center mt-3 space-y-1 animate-in fade-in duration-300">
      <p className="text-sm text-muted-foreground">
        {hasReachedLimit 
          ? "🎯 You've used your free checks" 
          : `Free checks left: ${remainingSearches} of ${FREE_SEARCH_LIMIT}`
        }
      </p>
      {hasReachedLimit && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">
            You've used your {FREE_SEARCH_LIMIT} free checks.
          </p>
          <Link 
            to="/pricing" 
            className="inline-flex items-center gap-1 text-sm text-sos-lime font-semibold hover:underline transition-all hover:gap-2"
          >
            Unlock Unlimited checks for $4.99/month →
          </Link>
        </div>
      )}
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export const SearchLimitDisplay = memo(SearchLimitDisplayComponent);
