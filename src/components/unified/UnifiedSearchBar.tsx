import { useState } from 'react';
import { Search, Scan } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useUnifiedVerification } from '@/hooks/useUnifiedVerification';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';

interface UnifiedSearchBarProps {
  onOpenQrScanner?: () => void;
  variant?: 'default' | 'hero' | 'compact';
}

export const UnifiedSearchBar = ({ onOpenQrScanner, variant = 'default' }: UnifiedSearchBarProps) => {
  const [input, setInput] = useState('');
  const { verifyItem, isLoading } = useUnifiedVerification();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSearch = async () => {
    if (!input.trim()) {
      return;
    }

    if (!user) {
      // Redirect to signup for guests
      navigate('/signup?redirect=verify');
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
      <div className="flex gap-2 w-full">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="VIN, IMEI, Serial Number..."
          className="flex-1"
          disabled={isLoading}
        />
        {onOpenQrScanner && (
          <Button 
            variant="outline" 
            size="icon"
            onClick={onOpenQrScanner}
            disabled={isLoading}
          >
            <Scan className="h-4 w-4" />
          </Button>
        )}
        <Button 
          onClick={handleSearch}
          disabled={isLoading || !input.trim()}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
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
              disabled={isLoading}
            />
          </div>
          
          {onOpenQrScanner && (
            <Button 
              variant="outline" 
              size="icon"
              onClick={onOpenQrScanner}
              disabled={isLoading}
              title="Scan QR Code or Barcode"
            >
              <Scan className="h-5 w-5" />
            </Button>
          )}

          <Button 
            onClick={handleSearch}
            disabled={isLoading || !input.trim()}
            className="min-w-[120px]"
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Checking...
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Verify Now
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 bg-muted rounded">🚗 Vehicles (VIN)</span>
          <span className="px-2 py-1 bg-muted rounded">📱 Phones (IMEI)</span>
          <span className="px-2 py-1 bg-muted rounded">🚲 Bikes</span>
          <span className="px-2 py-1 bg-muted rounded">💻 Electronics</span>
          <span className="px-2 py-1 bg-muted rounded">🔑 Any Serial #</span>
        </div>
      </div>
    </Card>
  );
};
