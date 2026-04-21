/**
 * Verification Page - Unified Verification Hub
 * All verification happens here with item type cards, scanner, and voice search
 */

import { useState, useEffect } from 'react';
import { useVerifyGate } from '@/hooks/useVerifyGate';
import { UpgradeModal } from '@/components/UpgradeModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Loader2, Shield, AlertTriangle, Camera, Smartphone, Car, Bike, Monitor, CircuitBoard, Crosshair, FileText, Mic, MicOff, Link2, Sparkles } from 'lucide-react';
import { useSmartDetection } from '@/hooks/useSmartDetection';
import { mapDetectedTypeToItemType } from '@/lib/aiDetection';
import { SmartDetectionIndicator } from '@/components/verification/SmartDetectionIndicator';
import { QRScanner } from '@/components/futuristic/QRScanner';
import { useParallelVerification } from '@/hooks/useParallelVerification';
import { ParallelVerificationDisplay } from '@/components/verification/ParallelVerificationDisplay';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { PostVerificationUpsell } from '@/components/conversion/PostVerificationUpsell';
import { ViralShareCard } from '@/components/conversion/ViralShareCard';
import { SearchLimitDisplay } from '@/components/hero/SearchLimitDisplay';
import { WhySignUpCard } from '@/components/conversion/WhySignUpCard';
import { SocialProofBanner } from '@/components/conversion/SocialProofBanner';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { StatusCodeHandler } from '@/components/seo/StatusCodeHandler';
import { supabase } from '@/integrations/supabase/client';
import { useVoiceSearch } from '@/hooks/useVoiceSearch';
import { usePendingVerification } from '@/hooks/usePendingVerification';
import { MarketplaceUrlAnalyzer } from '@/components/search/MarketplaceUrlAnalyzer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import type { AggregatedResult } from '@/services/VerificationService';

// Item type configuration for quick-select cards
const ITEM_TYPES = [
  { id: 'smartphone', label: 'Phone/IMEI', icon: Smartphone, color: 'text-blue-500', bgColor: 'bg-blue-500/10', description: 'Verify device status', link: '/check-phone' },
  { id: 'vehicle', label: 'Vehicle/VIN', icon: Car, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10', description: 'Check theft history', link: '/vin-checker' },
  { id: 'bicycle', label: 'Bicycle', icon: Bike, color: 'text-orange-500', bgColor: 'bg-orange-500/10', description: 'Search bike registries', link: '/check-bike' },
  { id: 'firearm', label: 'Firearm', icon: Crosshair, color: 'text-red-500', bgColor: 'bg-red-500/10', description: 'Verify firearm status', link: '/check-firearm' },
  { id: 'laptop', label: 'Laptop', icon: Monitor, color: 'text-purple-500', bgColor: 'bg-purple-500/10', description: 'Check serial number', link: '/check-laptop' },
  { id: 'electronics', label: 'Electronics', icon: CircuitBoard, color: 'text-cyan-500', bgColor: 'bg-cyan-500/10', description: 'Verify equipment', link: '/check-electronics' },
  { id: 'license_plate', label: 'License Plate', icon: FileText, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10', description: 'State database lookup', link: '/license-plate-lookup' },
] as const;

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const [identifier, setIdentifier] = useState('');
  const [itemType, setItemType] = useState('');
  const [manualOverrideType, setManualOverrideType] = useState('');
  const [showManualSelect, setShowManualSelect] = useState(false);
  const [stateCode, setStateCode] = useState('');
  const [customResult, setCustomResult] = useState<AggregatedResult | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const { detection, isDetecting, detectionError, detect, reset: resetDetection } = useSmartDetection(500);
  const [urlFromParams, setUrlFromParams] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'manual' | 'url'>('manual');
  const { verify, isLoading, result: hookResult, progress } = useParallelVerification();
  const { isAuthenticated } = useUnifiedAuth();
  const { remainingSearches, isSubscribed } = useSearchLimits();
  const { pendingVerification, savePendingVerification } = usePendingVerification();
  const { checkGate, isBlocked, blockReason, resetGate, checksRemaining } = useVerifyGate();
  const navigate = useNavigate();

  // Voice search integration
  const { isListening, isSupported: voiceSupported, startListening, stopListening } = useVoiceSearch({
    onResult: (text) => {
      setIdentifier(text);
    }
  });

  // Typing animation for placeholder
  const typingText = useTypingAnimation({
    words: ['Serial Number', 'VIN', 'IMEI', 'License Plate', 'Phone IMEI', 'Vehicle VIN', 'Laptop Serial'],
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
    const urlParam = searchParams.get('url');

    if (typeParam) {
      setItemType(typeParam);
    }

    if (qParam) {
      setIdentifier(decodeURIComponent(qParam));
    }

    if (urlParam) {
      setUrlFromParams(decodeURIComponent(urlParam));
      setActiveTab('url');
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

  // Compute effective item type: manual override > AI detection > URL param
  const effectiveItemType = manualOverrideType || (detection ? mapDetectedTypeToItemType(detection.type) : itemType);

  const handleIdentifierChange = (value: string) => {
    setIdentifier(value);
    setManualOverrideType('');
    setShowManualSelect(false);
    detect(value);
  };

  const handleManualTypeOverride = (type: string) => {
    setManualOverrideType(type);
    setShowManualSelect(false);
  };

  const handleScanResult = (scannedText: string) => {
    setIdentifier(scannedText);
    detect(scannedText);
    setIsScannerOpen(false);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    // CRITICAL: Require authentication for all verifications
    if (!isAuthenticated) {
      const trimmed = identifier.trim();

      // Best-effort: save the user's typed identifier so we can restore it post-auth
      if (trimmed) {
        savePendingVerification(trimmed, effectiveItemType || undefined, 'buyer').catch(() => {
          // Ignore errors here; URL redirect still preserves the value
        });
      }

      const redirect = `/verify?q=${encodeURIComponent(trimmed)}${effectiveItemType ? `&type=${encodeURIComponent(effectiveItemType)}` : ''}`;
      navigate(`/auth?tab=signup&redirect=${encodeURIComponent(redirect)}`);
      return;
    }

    // SERVER-SIDE GATE: Check if user has remaining checks
    const allowed = await checkGate();
    if (!allowed) return; // UpgradeModal will show automatically via isBlocked

    // If license plate selected, use universal-state-lookup
    if (effectiveItemType === 'license_plate') {
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
      await verify(identifier, effectiveItemType || undefined);
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
      <TopNavigation />
      {/* SEO Components - Critical for Google indexing */}
      <PageSEO
        title="Free Stolen Item Check - IMEI VIN Serial Verification"
        description="Verify if any item is stolen in 3 seconds. Check IMEI, VIN, serial numbers against 100+ databases. Protect yourself from stolen goods."
        keywords="verify stolen items, instant verification, stolen goods check, marketplace safety"
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
      <StatusCodeHandler statusCode={200} />
      <div className="container mx-auto px-4 py-8 pt-24 max-w-6xl">
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
            Paste URL or Enter ID — Check in Seconds
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-secondary">Only SafeOrStolen</strong> can analyze marketplace listing URLs. Or manually enter IMEI, VIN, serial numbers.
          </p>
          <DataPartnerBadges variant="minimal" className="mt-4" />
        </div>

        {/* Input Method Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'manual' | 'url')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted/50 p-1 h-auto">
            <TabsTrigger 
              value="url" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">Paste Listing URL</span>
              <span className="hidden sm:inline text-xs bg-secondary/20 px-2 py-0.5 rounded-full">UNIQUE</span>
            </TabsTrigger>
            <TabsTrigger 
              value="manual" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Search className="w-4 h-4" />
              <span className="font-semibold">Enter ID Manually</span>
            </TabsTrigger>
          </TabsList>

          {/* URL PASTE TAB */}
          <TabsContent value="url" className="mt-0">
            <Card className="border-2 border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link2 className="w-5 h-5 text-secondary" />
                  Analyze Marketplace Listing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarketplaceUrlAnalyzer 
                  onIdentifierFound={(id) => {
                    setIdentifier(id);
                    setActiveTab('manual');
                  }}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* MANUAL ENTRY TAB */}
          <TabsContent value="manual" className="mt-0 space-y-6">

        {/* Auth Gate - More compelling sign up prompt */}
        {!isAuthenticated && (
          <WhySignUpCard />
        )}

        {/* Search Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Enter Item Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder={effectiveItemType === 'license_plate' ? 'License Plate Number' : `Paste IMEI, VIN, License Plate, or Serial Number...`}
                      value={identifier}
                      onChange={(e) => handleIdentifierChange(e.target.value)}
                      disabled={isLoading}
                      className="text-lg py-6 flex-1"
                      required
                    />
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
                        className={`h-auto py-6 px-4 gap-2 ${isListening ? 'bg-destructive hover:bg-destructive/90' : ''}`}
                        title={isListening ? "Stop listening" : "Voice search"}
                      >
                        {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        <span className="hidden sm:inline">{isListening ? 'Stop' : 'Voice'}</span>
                      </Button>
                    )}
                  </div>

                  {/* AI Smart Detection Indicator */}
                  <SmartDetectionIndicator
                    isDetecting={isDetecting}
                    detection={detection}
                    detectionError={detectionError}
                    showManualSelect={showManualSelect}
                    onToggleManual={() => setShowManualSelect(!showManualSelect)}
                    manualType={manualOverrideType}
                    onManualTypeChange={handleManualTypeOverride}
                  />
              </div>

              {/* State selector - only shown for license plates */}
              {effectiveItemType === 'license_plate' && (
                <div className="space-y-2">
                  <label htmlFor="state-select" className="text-sm font-medium">
                    Select State *
                  </label>
                  <Select value={stateCode} onValueChange={setStateCode} disabled={isLoading} required>
                    <SelectTrigger id="state-select" className="py-6">
                      <SelectValue placeholder="Choose a state" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {US_STATES.map((state) => (
                        <SelectItem key={state.code} value={state.code}>
                          {state.name} ({state.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    License plate checks use state-specific databases and parallel verification
                  </p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !identifier.trim() || (effectiveItemType === 'license_plate' && !stateCode)}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Verify Across All Databases
                  </>
                )}
              </Button>

              {progress && (
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-pulse">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {progress}
                </div>
              )}

              {/* Free checks remaining display */}
              <SearchLimitDisplay
                hasReachedLimit={checksRemaining !== null && checksRemaining <= 0}
                remainingSearches={checksRemaining ?? remainingSearches}
                isSubscribed={isSubscribed}
                isAuthenticated={isAuthenticated}
              />
            </form>
          </CardContent>
        </Card>

        {/* Info Card */}
        {!result && !isLoading && (
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Comprehensive Verification</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Global carrier blacklists & device registries</li>
                    <li>• Federal & state law enforcement databases</li>
                    <li>• Insurance theft & loss claim records</li>
                    <li>• National vehicle title & history databases</li>
                    <li>• State DMV & police records (All 50 States)</li>
                    <li>• International bicycle registries</li>
                    <li>• Firearms verification databases</li>
                    <li>• Property & asset recovery networks</li>
                  </ul>
                  <p className="text-xs text-muted-foreground pt-2">
                    All checks are performed in parallel across 100+ databases for fast, comprehensive results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick-Select Item Type Cards - Clickable links to dedicated pages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {ITEM_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                if (type.link) {
                  navigate(type.link);
                } else {
                  setManualOverrideType(type.id);
                  setShowManualSelect(false);
                }
              }}
              className={`p-3 rounded-lg border transition-all text-left ${
                effectiveItemType === type.id 
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
          </TabsContent>
        </Tabs>

        {/* Results */}
        {result && (
          <>
            <ParallelVerificationDisplay result={result} />
            <ViralShareCard
              status={result.finalStatus}
              itemLabel={identifier ? `${identifier.slice(0, 6)}…` : undefined}
            />
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

      {/* Server-side paywall upgrade modal */}
      <UpgradeModal isOpen={isBlocked} reason={blockReason} onClose={resetGate} />

      {/* Checks remaining warning */}
      {checksRemaining === 1 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-yellow-900/90 border border-yellow-700 text-yellow-300 text-sm px-4 py-2 rounded-lg shadow-lg">
          ⚠️ This is your last free verification.{' '}
          <a href="/pricing" className="underline ml-1 font-semibold">Upgrade for unlimited checks →</a>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default VerifyPage;
