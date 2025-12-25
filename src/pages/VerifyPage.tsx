/**
 * Verification Page - Unified Verification Hub
 * All verification happens here with item type cards, scanner, and voice search
 */

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Loader2, Shield, AlertTriangle, Camera, Smartphone, Car, Bike, Monitor, CircuitBoard, Crosshair, FileText, Mic, MicOff, Link2, ExternalLink, CheckCircle, ShieldAlert, Tag } from 'lucide-react';
import { QRScanner } from '@/components/futuristic/QRScanner';
import { useParallelVerification } from '@/hooks/useParallelVerification';
import { ParallelVerificationDisplay } from '@/components/verification/ParallelVerificationDisplay';
import { VerificationProgress } from '@/components/verification/VerificationProgress';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { PostVerificationUpsell } from '@/components/conversion/PostVerificationUpsell';
import { WhySignUpCard } from '@/components/conversion/WhySignUpCard';
import { SocialProofBanner } from '@/components/conversion/SocialProofBanner';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { PageSEO } from '@/components/seo/PageSEO';
import { StatusCodeHandler } from '@/components/seo/StatusCodeHandler';
import { supabase } from '@/integrations/supabase/client';
import { useVoiceSearch } from '@/hooks/useVoiceSearch';
import { usePendingVerification } from '@/hooks/usePendingVerification';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { useMarketplaceUrlAnalyzer } from '@/hooks/useMarketplaceUrlAnalyzer';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import { cn } from '@/lib/utils';
import type { AggregatedResult } from '@/services/VerificationService';

// Item type configuration for quick-select cards
const ITEM_TYPES = [
  { id: 'smartphone', label: 'Phone/IMEI', icon: Smartphone, color: 'text-blue-500', bgColor: 'bg-blue-500/10', description: 'Check IMEI blacklist' },
  { id: 'vehicle', label: 'Vehicle/VIN', icon: Car, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10', description: 'Verify VIN history' },
  { id: 'bicycle', label: 'Bicycle', icon: Bike, color: 'text-orange-500', bgColor: 'bg-orange-500/10', description: 'Search Bike Index' },
  { id: 'firearm', label: 'Firearm', icon: Crosshair, color: 'text-red-500', bgColor: 'bg-red-500/10', description: 'Check HotGunz DB' },
  { id: 'laptop', label: 'Laptop', icon: Monitor, color: 'text-purple-500', bgColor: 'bg-purple-500/10', description: 'Verify serial number' },
  { id: 'electronics', label: 'Electronics', icon: CircuitBoard, color: 'text-cyan-500', bgColor: 'bg-cyan-500/10', description: 'Check equipment' },
  { id: 'license_plate', label: 'License Plate', icon: FileText, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10', description: 'State DMV lookup' },
] as const;

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const [identifier, setIdentifier] = useState('');
  const [itemType, setItemType] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [customResult, setCustomResult] = useState<AggregatedResult | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const { verify, isLoading: verifyLoading, result: hookResult, progress } = useParallelVerification();
  const { isAuthenticated } = useUnifiedAuth();
  const { remainingSearches, isSubscribed } = useSearchLimits();
  const { pendingVerification, savePendingVerification } = usePendingVerification();
  const navigate = useNavigate();

  // Marketplace URL analyzer integration
  const {
    isAnalyzing: urlAnalyzing,
    analysis: urlAnalysis,
    analyzeUrl,
    reset: resetUrlAnalysis,
    detectMarketplaceFromUrl,
    supportedMarketplaces
  } = useMarketplaceUrlAnalyzer();

  // Combined loading state
  const isLoading = verifyLoading || urlAnalyzing;

  // Detect if input is a URL
  const isUrl = useMemo(() => {
    const trimmed = identifier.trim().toLowerCase();
    return trimmed.startsWith('http://') || trimmed.startsWith('https://') || 
           trimmed.includes('facebook.com') || trimmed.includes('ebay.com') ||
           trimmed.includes('craigslist.org') || trimmed.includes('offerup.com') ||
           trimmed.includes('mercari.com') || trimmed.includes('poshmark.com');
  }, [identifier]);

  // Detect marketplace from URL input
  const detectedMarketplace = useMemo(() => {
    if (isUrl) {
      return detectMarketplaceFromUrl(identifier);
    }
    return null;
  }, [identifier, isUrl, detectMarketplaceFromUrl]);

  // Voice search integration
  const { isListening, isSupported: voiceSupported, startListening, stopListening } = useVoiceSearch({
    onResult: (text) => {
      setIdentifier(text);
    }
  });

  // Typing animation for placeholder
  const typingText = useTypingAnimation({
    words: ['Serial Number', 'VIN', 'IMEI', 'License Plate', 'Marketplace URL', 'eBay Link', 'FB Marketplace'],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseTime: 1500,
  });

  const result = customResult || hookResult;

  // Set item type / identifier from URL params (e.g., ?type=smartphone&q=123...) and auto-open scanner
  useEffect(() => {
    const typeParam = searchParams.get('type');
    const scanParam = searchParams.get('scan');
    const qParam = searchParams.get('q');

    if (typeParam) {
      setItemType(typeParam);
    }

    if (qParam) {
      setIdentifier(decodeURIComponent(qParam));
    }

    if (scanParam === 'true') {
      setIsScannerOpen(true);
    }
  }, [searchParams]);

  // If the user typed an identifier before signup/signin, restore it after auth
  useEffect(() => {
    if (!pendingVerification) return;

    if (!identifier) {
      setIdentifier(pendingVerification.serial_number);
    }

    if (!itemType && pendingVerification.item_type) {
      setItemType(pendingVerification.item_type);
    }
  }, [pendingVerification, identifier, itemType]);

  const US_STATES = [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
  ];

  const handleScanResult = (scannedText: string) => {
    setIdentifier(scannedText);
    setIsScannerOpen(false);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous results
    setCustomResult(null);
    resetUrlAnalysis();

    // If input is a URL, analyze it first
    if (isUrl) {
      await analyzeUrl(identifier.trim());
      return;
    }

    // If license plate selected, use universal-state-lookup
    if (itemType === 'license_plate') {
      if (!stateCode) {
        return; // State is required for license plates
      }
      
      try {
        const { data: lookupResult, error } = await supabase.functions.invoke('universal-state-lookup', {
          body: { 
            stateCode: stateCode,
            type: 'license_plate',
            value: identifier 
          }
        });

        if (error) throw error;

        // Convert to aggregated result format
        const convertedResult: AggregatedResult = {
          identifier: identifier,
          itemType: 'license_plate',
          finalStatus: lookupResult.status === 'stolen' ? 'stolen' : lookupResult.status === 'safe' ? 'safe' : 'unknown',
          message: lookupResult.message || `License plate check completed for ${stateCode}`,
          riskLevel: lookupResult.status === 'stolen' ? 'critical' : lookupResult.status === 'safe' ? 'low' : 'medium',
          confidence: lookupResult.confidence || 85,
          providers: [{
            provider: `${stateCode} License Plate Database`,
            status: lookupResult.status,
            confidence: lookupResult.confidence || 85,
            message: lookupResult.message,
            responseTime: 0,
            details: lookupResult.details
          }],
          checkedSources: [`${stateCode} DMV Database`],
          timestamp: new Date().toISOString()
        };

        setCustomResult(convertedResult);
      } catch (error) {
        console.error('License plate lookup error:', error);
      }
    } else {
      await verify(identifier, itemType || undefined);
    }
  };

  // Simplified verification schema - one Service + one HowTo
  const verificationServiceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SafeOrStolen Stolen Item Verification",
      "description": "Instant verification service to check if items are stolen using IMEI, VIN, or serial numbers",
      "url": "https://safeorstolen.com/verify",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com"
      },
      "serviceType": "Stolen Item Verification",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check if an Item is Stolen",
      "description": "Step-by-step guide to verify IMEI, VIN, and serial numbers",
      "totalTime": "PT1M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Identifier",
          "text": "Input the IMEI, VIN, or serial number"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Click Verify",
          "text": "Submit to search verification databases"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Review Results",
          "text": "Get instant results showing if item is safe or stolen"
        }
      ]
    }
  ];

  return (
    <>
      {/* SEO Components - Critical for Google indexing */}
      <StatusCodeHandler statusCode={200} />
      <PageSEO
        title="Protect Buyers & Sellers - Instant Stolen Verification | 3 Second Check"
        description="Protect BOTH buyers AND sellers with instant stolen verification. Every search makes stolen items harder to sell. Check IMEI, VIN, serial numbers in 3 seconds. Reduce crime globally."
        keywords="protect buyers sellers, stop stolen goods, instant stolen verification, barcode stolen checker, 3 second IMEI check, stolen verification app, reduce crime"
        canonical="/verify"
        structuredData={verificationServiceSchema}
      />
      
      {/* Minimal noscript fallback for crawlers */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Free Stolen Item Verification</h1>
          <p>Check if any item is stolen using IMEI, VIN, or serial number. SafeOrStolen verifies against 50+ databases with results in 3 seconds.</p>
        </div>
      </noscript>
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-8">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation 
          items={[
            { name: 'Verify Item', href: '/verify' }
          ]}
        />

        {/* Header with Social Proof */}
        <div className="text-center space-y-3">
          <SocialProofBanner />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Verify Any Item Instantly
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Check IMEI, VIN, or serial numbers against 100+ databases in seconds.
          </p>
          <DataPartnerBadges variant="minimal" className="mt-4" />
        </div>

        {/* Search Section */}
        <div className="space-y-6">

        {/* Quick-Select Item Type Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {ITEM_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setItemType(type.id)}
              className={`p-3 rounded-lg border transition-all text-left ${
                itemType === type.id 
                  ? 'border-primary bg-primary/10 ring-2 ring-primary/20' 
                  : 'border-border hover:border-primary/50 hover:bg-muted/50'
              }`}
            >
              <div className={`w-8 h-8 rounded-md ${type.bgColor} flex items-center justify-center mb-2`}>
                <type.icon className={`w-4 h-4 ${type.color}`} />
              </div>
              <p className="font-medium text-sm">{type.label}</p>
              <p className="text-xs text-muted-foreground">{type.description}</p>
            </button>
          ))}
        </div>

        {/* Auth Gate - More compelling sign up prompt */}
        {!isAuthenticated && (
          <WhySignUpCard />
        )}

        {/* Search Form */}
        <Card className={cn(isUrl && "border-2 border-secondary/50")}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {isUrl ? (
                <>
                  <Link2 className="w-5 h-5 text-secondary" />
                  Analyze Marketplace Listing
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Enter Item Information
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-4">
              {/* Unified Input - Detects URL vs Identifier */}
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder={itemType === 'license_plate' ? 'License Plate Number' : `Enter ${typingText} or paste URL...`}
                      value={identifier}
                      onChange={(e) => {
                        setIdentifier(e.target.value);
                        // Reset URL analysis when input changes
                        if (urlAnalysis) resetUrlAnalysis();
                      }}
                      disabled={isLoading}
                      className={cn(
                        "text-lg py-6 pr-24",
                        isUrl && "border-secondary focus:ring-secondary"
                      )}
                      required
                    />
                    {/* Detection Badge */}
                    {identifier.trim() && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {isUrl ? (
                          <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                            {detectedMarketplace || 'URL'}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs">
                            ID
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsScannerOpen(true)}
                    disabled={isLoading}
                    className="h-auto py-6 px-4 gap-2"
                    title="Scan barcode"
                  >
                    <Camera className="w-5 h-5" />
                    <span className="hidden sm:inline">Scan</span>
                  </Button>
                  {voiceSupported && (
                    <Button
                      type="button"
                      variant={isListening ? "default" : "outline"}
                      onClick={isListening ? stopListening : startListening}
                      disabled={isLoading}
                      className={cn(
                        "h-auto py-6 px-4 gap-2",
                        isListening && "bg-red-500 hover:bg-red-600"
                      )}
                      title={isListening ? "Stop listening" : "Voice search"}
                    >
                      {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      <span className="hidden sm:inline">{isListening ? 'Stop' : 'Voice'}</span>
                    </Button>
                  )}
                </div>
                
                {/* Supported Marketplaces hint when URL mode */}
                {isUrl && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    Supports: Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, Poshmark
                  </p>
                )}
              </div>

              {/* Item Type Selector - Only for non-URL mode */}
              {!isUrl && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select value={itemType} onValueChange={setItemType} disabled={isLoading}>
                    <SelectTrigger className="py-6">
                      <SelectValue placeholder="Auto-detect type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smartphone">Mobile Phone</SelectItem>
                      <SelectItem value="vehicle">Vehicle (VIN)</SelectItem>
                      <SelectItem value="license_plate">License Plate</SelectItem>
                      <SelectItem value="laptop">Laptop</SelectItem>
                      <SelectItem value="bicycle">Bicycle</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="firearm">Firearm</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {/* State selector - only shown for license plates */}
                  {itemType === 'license_plate' && (
                    <Select value={stateCode} onValueChange={setStateCode} disabled={isLoading} required>
                      <SelectTrigger className="py-6">
                        <SelectValue placeholder="Select State *" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {US_STATES.map((state) => (
                          <SelectItem key={state.code} value={state.code}>
                            {state.name} ({state.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !identifier.trim() || (!isUrl && itemType === 'license_plate' && !stateCode)}
                className={cn("w-full", isUrl && "bg-secondary hover:bg-secondary/90")}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {isUrl ? 'Analyzing...' : 'Verifying...'}
                  </>
                ) : isUrl ? (
                  <>
                    <Link2 className="w-5 h-5 mr-2" />
                    Analyze Listing
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Verify Across All Databases
                  </>
                )}
              </Button>

            </form>

            {/* Real-time Progress Indicator */}
            {isLoading && !isUrl && (
              <VerificationProgress 
                itemType={itemType || 'general'} 
                isActive={isLoading} 
              />
            )}

            {/* URL Analysis Results */}
            {urlAnalysis && urlAnalysis.success && (
              <div className="mt-6 space-y-4 p-4 border-2 border-secondary/30 rounded-lg bg-secondary/5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-secondary/20">
                      {urlAnalysis.marketplace?.name}
                    </Badge>
                    {urlAnalysis.aiAnalyzed && (
                      <Badge variant="outline" className="text-xs">
                        AI Analyzed
                      </Badge>
                    )}
                  </div>
                  <a 
                    href={urlAnalysis.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    View Original <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Item Details */}
                {urlAnalysis.itemDetails && (
                  <div className="space-y-2">
                    {(urlAnalysis.itemDetails.title || urlAnalysis.itemDetails.sourceTitle) && (
                      <h4 className="font-semibold text-foreground">
                        {urlAnalysis.itemDetails.title || urlAnalysis.itemDetails.sourceTitle}
                      </h4>
                    )}
                    {urlAnalysis.itemDetails.price && (
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-lg">{urlAnalysis.itemDetails.price}</span>
                      </div>
                    )}
                    {urlAnalysis.itemDetails.seller && (
                      <p className="text-sm text-muted-foreground">
                        Seller: {urlAnalysis.itemDetails.seller}
                      </p>
                    )}
                  </div>
                )}

                {/* Identifiers Found - Click to Verify */}
                {urlAnalysis.identifiers && urlAnalysis.identifiers.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-foreground flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Identifiers Found - Click to Verify
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {urlAnalysis.identifiers.map((id: { value: string; type: string }, index: number) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setIdentifier(id.value);
                            setItemType(id.type === 'IMEI' ? 'smartphone' : id.type === 'VIN' ? 'vehicle' : '');
                            resetUrlAnalysis();
                          }}
                          className="flex items-center gap-2 border-green-200 hover:border-green-400 hover:bg-green-50"
                        >
                          <Badge variant="secondary" className="text-xs">
                            {id.type}
                          </Badge>
                          <span className="font-mono text-sm">{id.value}</span>
                          <Search className="h-3 w-3" />
                          Verify
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Risk Factors */}
                {urlAnalysis.riskFactors && urlAnalysis.riskFactors.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-foreground flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-yellow-600" />
                      Risk Factors ({urlAnalysis.riskFactors.length})
                    </h5>
                    <div className="p-3 rounded-lg bg-yellow-100">
                      <ul className="space-y-1">
                        {urlAnalysis.riskFactors.map((risk: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0 text-yellow-600" />
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* No Identifiers Warning */}
                {(!urlAnalysis.identifiers || urlAnalysis.identifiers.length === 0) && (
                  <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800">No identifiers found</p>
                        <p className="text-xs text-yellow-700 mt-1">
                          This listing doesn't include visible serial numbers, IMEIs, or VINs. 
                          Ask the seller for the identifier before purchasing.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" onClick={() => {
                    setIdentifier('');
                    resetUrlAnalysis();
                  }}>
                    Analyze Another
                  </Button>
                </div>
              </div>
            )}

            {/* URL Analysis Error */}
            {urlAnalysis && !urlAnalysis.success && (
              <div className="mt-4 p-4 border border-destructive/50 bg-destructive/5 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                  <div>
                    <p className="font-medium text-destructive">Analysis Failed</p>
                    <p className="text-sm text-muted-foreground mt-1">{urlAnalysis.error}</p>
                    <Button variant="outline" size="sm" onClick={resetUrlAnalysis} className="mt-3">
                      Try Again
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        {!result && !isLoading && !urlAnalysis && (
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">What we check:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• GSMA Device Check (Global IMEI Blacklist)</li>
                    <li>• IMEI.info Lost Device Database</li>
                    <li>• CheckMEND (UK/EU Electronics Registry)</li>
                    <li>• NICB VINCheck (US Vehicle Database)</li>
                    <li>• State DMV & Police Databases (License Plates - All 50 States)</li>
                    <li>• Bike Index (Global Bicycle Registry)</li>
                    <li>• HotGunz (US Firearms Database)</li>
                    <li>• StolenRegister.com (Worldwide Property)</li>
                    <li>• Immobilize (US Property Registry)</li>
                    <li>• <strong>Marketplace URL Analysis</strong> (Facebook, eBay, Craigslist, OfferUp, Mercari)</li>
                  </ul>
                  <p className="text-xs text-muted-foreground pt-2">
                    Paste a marketplace URL or enter an identifier directly. All checks are performed in parallel.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        </div>

        {/* Results */}
        {result && (
          <>
            <ParallelVerificationDisplay result={result} />
            <PostVerificationUpsell 
              verificationStatus={result.finalStatus}
              remainingSearches={remainingSearches}
              isSubscribed={isSubscribed}
              onUpgrade={() => navigate('/pricing')}
            />
          </>
        )}
      </div>
      
      {/* Credibility Bar Before Footer */}
      <SitewideCredibilityBar className="mt-12" />
      
      {/* QR/Barcode Scanner Modal */}
      <QRScanner
        isOpen={isScannerOpen}
        onScan={handleScanResult}
        onClose={() => setIsScannerOpen(false)}
      />
    </div>
    </>
  );
};

export default VerifyPage;
