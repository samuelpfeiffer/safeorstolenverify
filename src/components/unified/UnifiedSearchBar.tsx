import { useState } from 'react';
import { Search, Scan, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useUnifiedVerification } from '@/hooks/useUnifiedVerification';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { PaywallModal } from '@/components/dashboard/PaywallModal';
import { SearchLimitDisplay } from '@/components/hero/SearchLimitDisplay';

interface UnifiedSearchBarProps {
  onOpenQrScanner?: () => void;
  variant?: 'default' | 'hero' | 'compact';
}

export const UnifiedSearchBar = ({ onOpenQrScanner, variant = 'default' }: UnifiedSearchBarProps) => {
  const [input, setInput] = useState('');
  const { verifyItem, isLoading } = useUnifiedVerification();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { remainingSearches, hasReachedLimit, isSubscribed, consumeSearch } = useSearchLimits();
  const [showPaywall, setShowPaywall] = useState(false);

  const handleSearch = async () => {
    if (!input.trim()) {
      return;
    }

    if (!user) {
      // Redirect to auth page for guests
      navigate('/auth?tab=signup&redirect=verify');
      return;
    }

    // Check search limits before proceeding
    const canSearch = await consumeSearch();
    if (!canSearch) {
      setShowPaywall(true);
      return;
    }

    const result = await verifyItem(input);
    if (result) {
      // Navigate to unified results page
      navigate('/verification-results', { 
        state: { 
          result,
          searchInput: input 
        } 
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (variant === 'compact') {
    return (
      <>
        <div className="flex gap-2 w-full">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="VIN, IMEI, Serial Number..."
            className="flex-1"
            disabled={isLoading || (hasReachedLimit && !isSubscribed)}
          />
          {onOpenQrScanner && (
            <Button 
              variant="outline" 
              size="icon"
              onClick={onOpenQrScanner}
              disabled={isLoading || (hasReachedLimit && !isSubscribed)}
            >
              <Scan className="h-4 w-4" />
            </Button>
          )}
          <Button 
            onClick={handleSearch}
            disabled={isLoading || !input.trim() || (hasReachedLimit && !isSubscribed)}
          >
            {hasReachedLimit && !isSubscribed ? (
              <Lock className="h-4 w-4" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
        </div>
        <SearchLimitDisplay 
          hasReachedLimit={hasReachedLimit}
          remainingSearches={remainingSearches}
          isSubscribed={isSubscribed}
        />
        <PaywallModal isOpen={showPaywall} onClose={() => setShowPaywall(false)} />
      </>
    );
  }

  return (
    <>
      <Card className="p-6 backdrop-blur-sm bg-background/80">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Universal Theft Database Search
            </h3>
            <p className="text-sm text-muted-foreground">
              Search across NICB, GSMA, CheckMEND, Bike Index, Arizona TheftAZ, and Immobilize databases
            </p>
          </div>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter VIN, IMEI, License Plate, or Serial Number..."
                className="pl-10"
                disabled={isLoading || (hasReachedLimit && !isSubscribed)}
              />
            </div>
            
            {onOpenQrScanner && (
              <Button 
                variant="outline" 
                size="icon"
                onClick={onOpenQrScanner}
                disabled={isLoading || (hasReachedLimit && !isSubscribed)}
                title="Scan QR Code or Barcode"
              >
                <Scan className="h-5 w-5" />
              </Button>
            )}

            <Button 
              onClick={handleSearch}
              disabled={isLoading || !input.trim() || (hasReachedLimit && !isSubscribed)}
              className="min-w-[120px]"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Checking...
                </>
              ) : hasReachedLimit && !isSubscribed ? (
                <>
                  <Lock className="h-4 w-4 mr-2" />
                  Upgrade
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Verify Now
                </>
              )}
            </Button>
          </div>

          <SearchLimitDisplay 
            hasReachedLimit={hasReachedLimit}
            remainingSearches={remainingSearches}
            isSubscribed={isSubscribed}
          />

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="px-2 py-1 bg-muted rounded">🚗 Vehicles (VIN)</span>
            <span className="px-2 py-1 bg-muted rounded">📱 Phones (IMEI)</span>
            <span className="px-2 py-1 bg-muted rounded">🚲 Bikes</span>
            <span className="px-2 py-1 bg-muted rounded">💻 Electronics</span>
            <span className="px-2 py-1 bg-muted rounded">🔑 Any Serial #</span>
          </div>
        </div>
      </Card>
      <PaywallModal isOpen={showPaywall} onClose={() => setShowPaywall(false)} />
    </>
  );
};
