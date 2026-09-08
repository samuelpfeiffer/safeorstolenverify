import { memo } from 'react';
import { Link } from '@/lib/router-compat';

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

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-3 space-y-1 animate-in fade-in duration-300">
        <p className="text-sm text-muted-foreground">
          ✅ <span className="font-semibold text-sos-lime">2 Free Checks</span> — no sign-up required
        </p>
        <Link 
          to="/pricing" 
          className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline transition-all hover:gap-2"
        >
          Then $0.99/check or $10/month unlimited →
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center mt-3 space-y-1 animate-in fade-in duration-300">
      {hasReachedLimit ? (
        <Link 
          to="/pricing" 
          className="inline-flex items-center gap-1 text-sm text-primary font-semibold hover:underline transition-all hover:gap-2"
        >
          🔓 Free checks used — $0.99/check or $10/month unlimited →
        </Link>
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            🔍 <span className="font-semibold text-sos-lime">{remainingSearches} free check{remainingSearches !== 1 ? 's' : ''} remaining</span>
          </p>
          <Link 
            to="/pricing" 
            className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline transition-all hover:gap-2"
          >
            Then $0.99/check or $10/mo unlimited →
          </Link>
        </>
      )}
    </div>
  );
};

export const SearchLimitDisplay = memo(SearchLimitDisplayComponent);
