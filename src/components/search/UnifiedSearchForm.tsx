import { memo, useState } from 'react';
import { useSearchFormLogic } from '@/hooks/useSearchFormLogic';
import { UnifiedSearchInput } from './UnifiedSearchInput';
import { UnifiedSearchButton } from './UnifiedSearchButton';
import { MarketplaceUrlAnalyzer } from './MarketplaceUrlAnalyzer';
import { SearchLimitDisplay } from '@/components/hero/SearchLimitDisplay';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QrCode, Shield, Link2, Hash } from 'lucide-react';
import { useNavigate } from '@/lib/router-compat';

interface UnifiedSearchFormProps {
 variant?: 'default' | 'hero' | 'compact' | 'simple';
 showTypeSelector?: boolean;
 onOpenQrScanner?: () => void;
 className?: string;
}

const UnifiedSearchFormComponent = ({ 
 variant = 'default',
 showTypeSelector = false,
 onOpenQrScanner,
 className = ''
}: UnifiedSearchFormProps) => {
 const {
 input,
 isLoading,
 error,
 handleInputChange,
 handleSearch,
 clearInput,
 remainingSearches,
 hasReachedLimit,
 isSubscribed,
 isAuthenticated
 } = useSearchFormLogic();

 const navigate = useNavigate();
 const [searchMode, setSearchMode] = useState<'direct' | 'url'>('direct');

 const handleKeyPress = (e: React.KeyboardEvent) => {
 if (e.key === 'Enter' && !isLoading) {
 handleSearch();
 }
 };

 // Handler when URL analyzer finds an identifier to verify
 const handleIdentifierFromUrl = (identifier: string, type: string) => {
 // Navigate to verification results with the identifier
 const encodedIdentifier = encodeURIComponent(identifier);
 navigate(`/results?serial=${encodedIdentifier}&type=${type}`);
 };

 // Compact variant - minimal inline form (no tabs)
 if (variant === 'compact') {
 return (
 <div className={`space-y-3 ${className}`}>
 <div className="flex gap-2">
 <UnifiedSearchInput
 value={input}
 onChange={handleInputChange}
 onKeyPress={handleKeyPress}
 placeholder="IMEI, VIN, Serial Number..."
 isLoading={isLoading}
 variant="compact"
 error={error}
 />
 {onOpenQrScanner && (
 <Button 
 variant="outline" 
 size="icon"
 onClick={onOpenQrScanner}
 disabled={isLoading}
 className="h-12 w-12 min-h-[48px] active:scale-[0.98] transition-transform touch-manipulation"
 aria-label="Scan QR Code"
 >
 <QrCode className="h-5 w-5" />
 </Button>
 )}
 <UnifiedSearchButton
 onClick={handleSearch}
 isLoading={isLoading}
 disabled={!input.trim()}
 variant="compact"
 isAuthenticated={isAuthenticated}
 hasReachedLimit={hasReachedLimit}
 isSubscribed={isSubscribed}
 />
 </div>
 <SearchLimitDisplay 
 hasReachedLimit={hasReachedLimit}
 remainingSearches={remainingSearches}
 isSubscribed={isSubscribed}
 isAuthenticated={isAuthenticated}
 />
 </div>
 );
 }

 // Hero variant - prominent, large form with tabs
 if (variant === 'hero') {
 return (
 <div className={`space-y-4 ${className}`}>
 <Tabs value={searchMode} onValueChange={(v) => setSearchMode(v as 'direct' | 'url')} className="w-full">
 <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-4 bg-background/50 backdrop-blur">
 <TabsTrigger value="direct" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
 <Hash className="h-4 w-4" />
 Enter ID
 </TabsTrigger>
 <TabsTrigger value="url" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
 <Link2 className="h-4 w-4" />
 Paste URL
 </TabsTrigger>
 </TabsList>

 <TabsContent value="direct" className="mt-0">
 <div className="flex flex-col sm:flex-row gap-4">
 <div className="flex-1">
 <UnifiedSearchInput
 value={input}
 onChange={handleInputChange}
 onKeyPress={handleKeyPress}
 placeholder="Enter your IMEI, VIN, or Serial Number here..."
 isLoading={isLoading}
 variant="hero"
 error={error}
 autoFocus
 />
 </div>
 <div className="flex gap-3">
 {onOpenQrScanner && (
 <Button 
 variant="outline" 
 size="lg"
 onClick={onOpenQrScanner}
 disabled={isLoading}
 className="h-16 px-6 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all min-h-[64px] active:scale-[0.98] touch-manipulation"
 aria-label="Scan QR Code"
 >
 <QrCode className="h-5 w-5 mr-2" />
 <span className="hidden sm:inline">Scan</span>
 </Button>
 )}
 <UnifiedSearchButton
 onClick={handleSearch}
 isLoading={isLoading}
 disabled={!input.trim()}
 variant="hero"
 isAuthenticated={isAuthenticated}
 hasReachedLimit={hasReachedLimit}
 isSubscribed={isSubscribed}
 />
 </div>
 </div>
 </TabsContent>

 <TabsContent value="url" className="mt-0">
 <MarketplaceUrlAnalyzer 
 onIdentifierFound={handleIdentifierFromUrl}
 />
 </TabsContent>
 </Tabs>

 <SearchLimitDisplay 
 hasReachedLimit={hasReachedLimit}
 remainingSearches={remainingSearches}
 isSubscribed={isSubscribed}
 isAuthenticated={isAuthenticated}
 />
 </div>
 );
 }

 // Simple variant - basic card with minimal styling
 if (variant === 'simple') {
 return (
 <Card className={`bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-xl ${className}`}>
 <div className="text-center mb-6">
 <Shield className="h-8 w-8 text-sos-orange mx-auto mb-4" />
 <h3 className="text-xl font-semibold text-white mb-2">Verify Item</h3>
 <p className="text-gray-300 text-sm">
 Enter serial number, IMEI, or unique identifier
 </p>
 </div>

 <div className="space-y-4">
 <div className="relative">
 <UnifiedSearchInput
 value={input}
 onChange={handleInputChange}
 onKeyPress={handleKeyPress}
 placeholder="Enter IMEI, VIN, Serial Number..."
 isLoading={isLoading}
 variant="default"
 error={error}
 showIcon
 />
 {onOpenQrScanner && (
 <Button 
 onClick={onOpenQrScanner} 
 variant="ghost" 
 size="sm"
 className="absolute right-2 top-2 h-8 w-8 p-0 text-gray-400 hover:text-white"
 disabled={isLoading}
 aria-label="Scan QR Code"
 >
 <QrCode className="h-4 w-4" />
 </Button>
 )}
 </div>

 <div className="grid grid-cols-2 gap-3">
 <UnifiedSearchButton
 onClick={handleSearch}
 isLoading={isLoading}
 disabled={!input.trim()}
 variant="default"
 isAuthenticated={isAuthenticated}
 hasReachedLimit={hasReachedLimit}
 isSubscribed={isSubscribed}
 className="w-full"
 />
 
 <Button 
 onClick={clearInput}
 size="lg"
 variant="outline"
 className="border-white/20 text-white hover:bg-white/10"
 disabled={isLoading || !input.trim()}
 >
 Clear
 </Button>
 </div>

 <p className="text-xs text-gray-400 text-center">
 Results in a few seconds • Every source listed
 </p>
 </div>

 <SearchLimitDisplay 
 hasReachedLimit={hasReachedLimit}
 remainingSearches={remainingSearches}
 isSubscribed={isSubscribed}
 isAuthenticated={isAuthenticated}
 />
 </Card>
 );
 }

 // Default variant - full featured with card and tabs
 return (
 <Card className={`p-6 bg-gradient-to-br from-background to-background/50 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow ${className}`}>
 <div className="space-y-4">
 <div>
 <Badge variant="secondary" className="mb-4 bg-sos-orange/10 text-sos-orange border-sos-orange/20">
 <Shield className="h-3 w-3 mr-1" />
 Secure Verification
 </Badge>
 <h3 className="text-lg font-semibold mb-2 text-foreground">
 Stolen-Item Search
 </h3>
 <p className="text-sm text-muted-foreground">
 Searches SafeOrStolen theft reports and public web results, plus a national stolen-bicycle registry for bikes, police firearm theft and loss reports from 33 states and Washington, DC and live Ohio records for guns, and Arizona law-enforcement records for Arizona vehicles
 </p>
 </div>

 <Tabs value={searchMode} onValueChange={(v) => setSearchMode(v as 'direct' | 'url')} className="w-full">
 <TabsList className="grid w-full grid-cols-2 mb-4">
 <TabsTrigger value="direct" className="flex items-center gap-2">
 <Hash className="h-4 w-4" />
 Enter ID Directly
 </TabsTrigger>
 <TabsTrigger value="url" className="flex items-center gap-2">
 <Link2 className="h-4 w-4" />
 Paste Listing URL
 </TabsTrigger>
 </TabsList>

 <TabsContent value="direct" className="mt-0 space-y-4">
 <div className="flex gap-3">
 <div className="flex-1 relative">
 <UnifiedSearchInput
 value={input}
 onChange={handleInputChange}
 onKeyPress={handleKeyPress}
 placeholder="Type VIN, IMEI, License Plate, or Serial Number..."
 isLoading={isLoading}
 variant="default"
 error={error}
 showIcon
 />
 </div>
 
 {onOpenQrScanner && (
 <Button 
 variant="outline" 
 size="icon"
 onClick={onOpenQrScanner}
 disabled={isLoading}
 title="Scan QR Code or Barcode"
 className="h-14 w-14 border-2 hover:bg-primary/10 min-h-[56px] active:scale-[0.98] transition-transform touch-manipulation"
 aria-label="Scan QR Code"
 >
 <QrCode className="h-5 w-5" />
 </Button>
 )}

 <UnifiedSearchButton
 onClick={handleSearch}
 isLoading={isLoading}
 disabled={!input.trim()}
 variant="default"
 isAuthenticated={isAuthenticated}
 hasReachedLimit={hasReachedLimit}
 isSubscribed={isSubscribed}
 />
 </div>

 <div className="flex flex-wrap gap-2 text-xs">
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">Vehicles (VIN)</span>
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">Phones (IMEI)</span>
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">Bikes</span>
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">Electronics</span>
 <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">Any Serial #</span>
 </div>
 </TabsContent>

 <TabsContent value="url" className="mt-0">
 <MarketplaceUrlAnalyzer 
 onIdentifierFound={handleIdentifierFromUrl}
 />
 </TabsContent>
 </Tabs>

 <SearchLimitDisplay 
 hasReachedLimit={hasReachedLimit}
 remainingSearches={remainingSearches}
 isSubscribed={isSubscribed}
 isAuthenticated={isAuthenticated}
 />
 </div>
 </Card>
 );
};

export const UnifiedSearchForm = memo(UnifiedSearchFormComponent);
