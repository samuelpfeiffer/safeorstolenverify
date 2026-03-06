import { memo } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="text-center mt-3 space-y-1 animate-in fade-in duration-300">
      {hasReachedLimit ? (
        <Link 
          to="/pricing" 
          className="inline-flex items-center gap-1 text-sm text-destructive font-semibold hover:underline transition-all hover:gap-2"
        >
          🔒 Free checks used — subscribe for $1/month unlimited →
        </Link>
      ) : (
        <p className="text-xs text-muted-foreground">
          {remainingSearches > 0 
            ? `${remainingSearches} free check${remainingSearches > 1 ? 's' : ''} remaining · Then $1/month unlimited`
            : 'Sign up for 2 free checks · Then $1/month unlimited'
          }
        </p>
      )}
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export const SearchLimitDisplay = memo(SearchLimitDisplayComponent);
