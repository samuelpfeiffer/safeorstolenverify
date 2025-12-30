import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ScanLine, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

// Lazy load QR Scanner for performance
const QRScanner = React.lazy(() => import('@/components/futuristic/QRScanner').then(m => ({ default: m.QRScanner })));

// Words to cycle through in the typing animation - customer language
const PLACEHOLDER_WORDS = [
  'iPhone serial number',
  'Phone IMEI (dial *#06#)',
  'Car VIN number',
  'Samsung phone IMEI',
  'Laptop serial',
  'Bike serial number',
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
    <div className={cn('w-full max-w-2xl mx-auto', className)}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Enter ${typingText}...`}
            className="pl-12 pr-4 h-14 text-lg bg-card border-2 border-border focus:border-primary transition-colors rounded-xl"
          />
        </div>
        
        <div className="flex gap-3">
          <Button 
            type="submit" 
            size="lg" 
            className="flex-1 h-14 text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl group"
            disabled={!inputValue.trim()}
          >
            Check If It's Stolen - Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => setIsScannerOpen(true)}
            className="h-14 px-6 rounded-xl border-2"
          >
            <ScanLine className="w-5 h-5" />
          </Button>
        </div>
      </form>

      {/* Supported items - customer language */}
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
        <span className="px-3 py-1 bg-muted/30 rounded-full">📱 iPhones & Phones</span>
        <span className="px-3 py-1 bg-muted/30 rounded-full">🚗 Cars & Vehicles</span>
        <span className="px-3 py-1 bg-muted/30 rounded-full">💻 Laptops</span>
        <span className="px-3 py-1 bg-muted/30 rounded-full">🚲 Bikes</span>
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
