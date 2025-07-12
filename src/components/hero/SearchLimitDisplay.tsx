
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

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-3">
        <p className="text-sm text-sos-orange">
          🔐 Sign in to get 4 free searches
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Create your free account to start verifying items
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
