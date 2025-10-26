
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
      <div className="text-center mt-3">
        <p className="text-sm text-sos-orange font-medium">
          🎁 Sign up for 2 FREE verifications
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Then upgrade for unlimited access
        </p>
      </div>
    );
  }

  return (
    <div className="text-center mt-3">
      <p className="text-sm text-gray-400">
        {hasReachedLimit 
          ? "You've used your 2 free searches - upgrade for unlimited" 
          : `${remainingSearches} of 2 free searches remaining`
        }
      </p>
      {hasReachedLimit && (
        <p className="text-xs text-sos-orange mt-1">
          <a href="/pricing" className="hover:underline">
            View pricing plans →
          </a>
        </p>
      )}
    </div>
  );
};
