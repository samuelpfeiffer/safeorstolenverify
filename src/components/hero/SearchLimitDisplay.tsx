
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

type SearchLimitDisplayProps = {
  hasReachedLimit: boolean;
  remainingSearches: number;
  isSubscribed: boolean;
};

export const SearchLimitDisplay = ({ 
  hasReachedLimit, 
  remainingSearches, 
  isSubscribed
}: SearchLimitDisplayProps) => {
  const { remainingSearches: actualRemaining } = useSearchLimits();
  const { isAuthenticated } = useUnifiedAuth();

  if (isSubscribed) {
    return (
      <div className="text-center mt-3">
        <p className="text-sm text-sos-lime">
          ✨ Unlimited searches with your subscription
        </p>
      </div>
    );
  }

  // For non-authenticated users, show sign up message
  if (!isAuthenticated) {
    return (
      <div className="text-center mt-3 space-y-1">
        <p className="text-sm text-sos-lime font-semibold">
          ✨ Try it FREE - Sign up for 2 free verifications
        </p>
        <p className="text-xs text-muted-foreground">
          No credit card required • Instant access
        </p>
      </div>
    );
  }

  return (
    <div className="text-center mt-3 space-y-1">
      <p className="text-sm text-muted-foreground">
        {hasReachedLimit 
          ? "🎯 You've used your free searches" 
          : `${remainingSearches} of 2 free verifications remaining`
        }
      </p>
      {hasReachedLimit && (
        <p className="text-xs text-sos-lime font-medium">
          <a href="/pricing" className="hover:underline inline-flex items-center gap-1">
            Upgrade for unlimited verifications →
          </a>
        </p>
      )}
    </div>
  );
};
