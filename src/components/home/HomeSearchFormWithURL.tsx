import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Link2, ScanLine, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Lazy load QR Scanner for performance
const QRScanner = React.lazy(() => import('@/components/futuristic/QRScanner').then(m => ({ default: m.QRScanner })));

// Supported marketplace badges
const SUPPORTED_MARKETPLACES = [
  { name: 'Facebook Marketplace', icon: '📘' },
  { name: 'eBay', icon: '🛒' },
  { name: 'Craigslist', icon: '📋' },
  { name: 'OfferUp', icon: '📱' },
  { name: 'Mercari', icon: '🏷️' },
  { name: 'Poshmark', icon: '👗' },
];

interface HomeSearchFormWithURLProps {
  className?: string;
}

export const HomeSearchFormWithURL: React.FC<HomeSearchFormWithURLProps> = ({ className }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'search' | 'url'>('url');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/verify?q=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleURLSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlValue.trim()) {
      navigate(`/verify?url=${encodeURIComponent(urlValue.trim())}`);
    }
  };

  const handleScanResult = (result: string) => {
    setIsScannerOpen(false);
    setSearchValue(result);
    navigate(`/verify?q=${encodeURIComponent(result)}`);
  };

  return (
    <div className={cn('w-full max-w-2xl mx-auto', className)}>
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'search' | 'url')} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4 bg-muted/50 p-1 h-auto">
          <TabsTrigger 
            value="url" 
            className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold">Paste Listing URL</span>
            <span className="hidden sm:inline text-xs bg-secondary/20 px-2 py-0.5 rounded-full">NEW</span>
          </TabsTrigger>
          <TabsTrigger 
            value="search" 
            className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Search className="w-4 h-4" />
            <span className="font-semibold">Enter ID Manually</span>
          </TabsTrigger>
        </TabsList>

        {/* URL PASTE TAB - THE STAR FEATURE */}
        <TabsContent value="url" className="mt-0">
          <form onSubmit={handleURLSubmit} className="space-y-4">
            <div className="relative">
              <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="url"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                placeholder="Paste Facebook Marketplace, eBay, or Craigslist URL..."
                className="pl-12 pr-4 h-14 text-lg bg-card border-2 border-border focus:border-primary transition-colors rounded-xl"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl group"
              disabled={!urlValue.trim()}
            >
              Analyze Listing
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Supported Marketplaces */}
          <div className="mt-6">
            <p className="text-sm text-muted-foreground mb-3 text-center">Works with:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUPPORTED_MARKETPLACES.map((mp) => (
                <span 
                  key={mp.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm text-foreground/80 hover:bg-muted transition-colors"
                >
                  <span>{mp.icon}</span>
                  <span>{mp.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Unique Value Proposition */}
          <div className="mt-6 p-4 bg-secondary/10 border border-secondary/30 rounded-xl">
            <p className="text-center text-sm">
              <span className="text-secondary font-semibold">✨ Only SafeOrStolen</span>
              <span className="text-muted-foreground"> can analyze marketplace listings for stolen items. </span>
              <span className="text-foreground">No other service offers this.</span>
            </p>
          </div>
        </TabsContent>

        {/* MANUAL SEARCH TAB */}
        <TabsContent value="search" className="mt-0">
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter IMEI, VIN, or Serial Number..."
                className="pl-12 pr-4 h-14 text-lg bg-card border-2 border-border focus:border-primary transition-colors rounded-xl"
              />
            </div>
            
            <div className="flex gap-3">
              <Button 
                type="submit" 
                size="lg" 
                className="flex-1 h-14 text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl group"
                disabled={!searchValue.trim()}
              >
                Check Now
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

          {/* Scannable Items */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-muted/30 rounded-full">📱 Phones</span>
            <span className="px-3 py-1 bg-muted/30 rounded-full">🚗 Vehicles</span>
            <span className="px-3 py-1 bg-muted/30 rounded-full">💻 Laptops</span>
            <span className="px-3 py-1 bg-muted/30 rounded-full">🚲 Bikes</span>
            <span className="px-3 py-1 bg-muted/30 rounded-full">🔫 Firearms</span>
            <span className="px-3 py-1 bg-muted/30 rounded-full">🔧 Tools</span>
          </div>
        </TabsContent>
      </Tabs>

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
