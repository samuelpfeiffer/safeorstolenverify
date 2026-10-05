import { useState } from 'react';
import { Search, Scan, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useUnifiedVerification } from '@/hooks/useUnifiedVerification';
import { useNavigate } from '@/lib/router-compat';
import { useAuth } from '@/lib/auth';
import { useSearchLimits } from '@/hooks/useSearchLimits';
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
 const isAuthenticated = !!user;

 const handleSearch = async () => {
 const trimmed = input.trim();
 if (!trimmed) return;

 // Route to the actual /verify page with the identifier prefilled.
 // Auth + paywall + actual verification all happen there (single source of truth).
 // This was previously navigating to /verification-results which doesn't exist — silent 404.
 navigate(`/verify?q=${encodeURIComponent(trimmed)}`);
 };

 const handleKeyPress = (e: React.KeyboardEvent) => {
 if (e.key === 'Enter') handleSearch();
 };

 // Compact variant for inline use
 if (variant === 'compact') {
 return (
 <>
 <div className="flex gap-2 w-full">
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyPress={handleKeyPress}
 placeholder="VIN, IMEI, Serial Number..."
 className="flex-1 h-12 border-2 border-primary bg-background/80 focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/20 shadow-md hover:shadow-lg transition-all min-h-[48px]"
 disabled={isLoading}
 autoComplete="off"
 inputMode="text"
 enterKeyHint="search"
 />
 {onOpenQrScanner && (
 <Button 
 variant="outline" 
 size="icon"
 onClick={onOpenQrScanner}
 disabled={isLoading}
 className="h-12 w-12"
 aria-label="Scan QR code or barcode"
 title="Scan QR code or barcode"
 >
 <Scan className="h-5 w-5" />
 </Button>
 )}
 <Button 
 onClick={handleSearch}
 disabled={isLoading || !input.trim()}
 className="h-12"
 aria-label="Verify item"
 title="Verify item"
 >
 <Search className="h-5 w-5" />
 </Button>
 </div>
 <SearchLimitDisplay 
 hasReachedLimit={hasReachedLimit}
 remainingSearches={remainingSearches}
 isSubscribed={isSubscribed}
 isAuthenticated={isAuthenticated}
 />
 </>
 );
 }

 // Hero variant - prominently highlighted
 if (variant === 'hero') {
 return (
 <>
 <div className="p-0">
 <div className="flex flex-col sm:flex-row gap-4">
 <div className="flex-1">
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyPress={handleKeyPress}
 placeholder="👉 Enter your IMEI, VIN, or Serial Number here..."
 className="h-16 text-lg px-6 bg-card border-4 border-primary focus:border-primary focus:ring-4 focus:ring-primary/30 transition-all placeholder:text-muted-foreground font-medium shadow-xl hover:shadow-2xl animate-in min-h-[64px]"
 disabled={isLoading}
 autoComplete="off"
 inputMode="text"
 enterKeyHint="search"
 />
 </div>
 <div className="flex gap-3">
 {onOpenQrScanner && (
 <Button 
 variant="outline" 
 size="lg"
 onClick={onOpenQrScanner}
 disabled={isLoading}
 className="h-16 px-6 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
 >
 <Scan className="h-5 w-5 mr-2" />
 <span className="hidden sm:inline">Scan</span>
 </Button>
 )}
 <Button 
 onClick={handleSearch}
 disabled={isLoading || !input.trim()}
 size="lg"
 className="h-16 px-8 font-bold shadow-xl hover:shadow-2xl transition-all text-base"
 >
 {isLoading ? (
 <div className="flex items-center gap-2">
 <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>
 <span>Verifying...</span>
 </div>
 ) : (
 <div className="flex items-center gap-2">
 <Search className="h-5 w-5" />
 <span>Verify Now</span>
 </div>
 )}
 </Button>
 </div>
 </div>
 <SearchLimitDisplay 
 hasReachedLimit={hasReachedLimit}
 remainingSearches={remainingSearches}
 isSubscribed={isSubscribed}
 isAuthenticated={isAuthenticated}
 />
 </div>
 </>
 );
 }

 // Default variant - full featured
 return (
 <>
 <Card className="p-6 bg-gradient-to-br from-background to-background/50 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow">
 <div className="space-y-4">
 <div>
 <h3 className="text-lg font-semibold mb-2 text-foreground">
 Stolen-Item Search
 </h3>
 <p className="text-sm text-muted-foreground">
 Checks our own stolen-item reports, public web results and AI analysis, plus a national stolen-bicycle registry for bikes and police gun theft records from 34 states for guns
 </p>
 </div>

 <div className="flex gap-3">
 <div className="flex-1 relative">
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary animate-pulse" />
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyPress={handleKeyPress}
 placeholder="👉 Type VIN, IMEI, License Plate, or Serial Number here..."
 className="pl-12 h-14 text-base bg-card border-3 border-primary/60 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-primary/80 transition-all shadow-lg hover:shadow-xl placeholder:font-medium min-h-[56px]"
 disabled={isLoading}
 autoComplete="off"
 inputMode="text"
 enterKeyHint="search"
 />
 </div>
 
 {onOpenQrScanner && (
 <Button 
 variant="outline" 
 size="icon"
 onClick={onOpenQrScanner}
 disabled={isLoading}
 title="Scan QR Code or Barcode"
 className="h-14 w-14 border-2 hover:bg-primary/10"
 >
 <Scan className="h-5 w-5" />
 </Button>
 )}

 <Button 
 onClick={handleSearch}
 disabled={isLoading || !input.trim()}
 className="min-w-[140px] h-14 font-semibold shadow-lg hover:shadow-xl transition-all"
 >
 {isLoading ? (
 <div className="flex items-center gap-2">
 <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
 <span>Checking...</span>
 </div>
 ) : hasReachedLimit && !isSubscribed ? (
 <>
 <Lock className="h-5 w-5 mr-2" />
 Upgrade
 </>
 ) : (
 <>
 <Search className="h-5 w-5 mr-2" />
 Verify Now
 </>
 )}
 </Button>
 </div>

 <SearchLimitDisplay 
 hasReachedLimit={hasReachedLimit}
 remainingSearches={remainingSearches}
 isSubscribed={isSubscribed}
 isAuthenticated={isAuthenticated}
 />

 <div className="flex flex-wrap gap-2 text-xs">
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">🚗 Vehicles (VIN)</span>
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">📱 Phones (IMEI)</span>
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">🚲 Bikes</span>
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">💻 Electronics</span>
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">🔑 Any Serial #</span>
 </div>
 </div>
 </Card>
 </>
 );
};
