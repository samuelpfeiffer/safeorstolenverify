import React, { useState, Suspense } from 'react';
import { useNavigate } from '@/lib/router-compat';
import { Search, ScanLine, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

// Lazy load QR Scanner for performance
const QRScanner = React.lazy(() => import('@/components/futuristic/QRScanner').then(m => ({ default: m.QRScanner })));

// Words to cycle through in the typing animation
const PLACEHOLDER_WORDS = [
  'Serial Number',
  'IMEI Number',
  'VIN Number',
  'eBay URL',
  'Facebook Marketplace URL',
  'Craigslist URL',
];

interface HomeSearchFormWithURLProps {
  className?: string;
}

// Helper to detect if input is a URL
const isURL = (input: string): boolean => {
  try {
    const trimmed = input.trim();
    return trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.includes('.com/') || trimmed.includes('.org/');
  } catch {
    return false;
  }
};

export const HomeSearchFormWithURL: React.FC<HomeSearchFormWithURLProps> = ({ className }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const typingText = useTypingAnimation({
    words: PLACEHOLDER_WORDS,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseTime: 1500,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      if (isURL(trimmed)) {
        navigate(`/verify?url=${encodeURIComponent(trimmed)}`);
      } else {
        navigate(`/verify?q=${encodeURIComponent(trimmed)}`);
      }
    }
  };

  const handleScanResult = (result: string) => {
    setIsScannerOpen(false);
    setInputValue(result);
    navigate(`/verify?q=${encodeURIComponent(result)}`);
  };

  return (
    <div className={cn('w-full max-w-xl mx-auto', className)}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Enter ${typingText}...`}
            className="pl-12 pr-4 h-14 text-base bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all rounded-2xl"
          />
        </div>
        
        <div className="flex gap-2">
          <Button 
            type="submit" 
            size="lg" 
            className="flex-1 h-12 text-base font-semibold rounded-xl button-glow group"
            disabled={!inputValue.trim()}
          >
            Check Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => setIsScannerOpen(true)}
            className="h-12 px-5 rounded-xl"
          >
            <ScanLine className="w-5 h-5" />
          </Button>
        </div>
      </form>

      {/* Supported inputs */}
      <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
        <span className="px-3 py-1 bg-muted/30 rounded-full border border-border/50">IMEI</span>
        <span className="px-3 py-1 bg-muted/30 rounded-full border border-border/50">VIN</span>
        <span className="px-3 py-1 bg-muted/30 rounded-full border border-border/50">Serial #</span>
        <span className="px-3 py-1 bg-muted/30 rounded-full border border-border/50">Listing URL</span>
      </div>

      {/* QR Scanner Modal */}
      <Suspense fallback={null}>
        {isScannerOpen && (
          <QRScanner
            onScan={handleScanResult}
            onClose={() => setIsScannerOpen(false)}
            isOpen={isScannerOpen}
          />
        )}
      </Suspense>
    </div>
  );
};

export default HomeSearchFormWithURL;
