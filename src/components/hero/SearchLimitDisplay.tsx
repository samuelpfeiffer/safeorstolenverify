
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

  // For non-authenticated users, show pricing message
  if (!isAuthenticated) {
    return (
      <div className="text-center mt-3">
        <p className="text-sm text-sos-orange font-medium">
          💰 Just $0.99 per check - No account required
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Or save with bulk packages: 50 checks for $30, 250 for $100
        </p>
      </div>
    );
  }

  return (
    <div className="text-center mt-3">
      <p className="text-sm text-gray-400">
        {hasReachedLimit 
          ? "All free searches used - upgrade for unlimited access" 
          : `${remainingSearches} free search${remainingSearches !== 1 ? 'es' : ''} remaining`
        }
      </p>
      {hasReachedLimit && (
        <p className="text-xs text-sos-orange mt-1">
          Upgrade to a paid plan for unlimited searches!
        </p>
      )}
    </div>
  );
};
