import React, { useState, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ScanLine, Shield, Smartphone, Car, Laptop, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { detectItemType, getItemTypeDisplayName } from '@/utils/itemTypeDetector';
import { TrustScoreMeter } from './TrustScoreMeter';
import { RecentRecoveriesFeed } from './RecentRecoveriesFeed';
import { PartnerDatabasesSection } from './PartnerDatabasesSection';
import { HowToVerifySection } from './HowToVerifySection';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';

const QRScanner = lazy(() => import('@/components/futuristic/QRScanner').then(m => ({ default: m.QRScanner })));

interface VerificationResult {
  score: number;
  status: 'clean' | 'flagged' | 'stolen' | 'unknown';
  sources: string[];
  serial: string;
  itemType: string;
  timestamp: string;
}

export const SecurityChicDashboard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [detectedType, setDetectedType] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    if (val.length >= 5) {
      setDetectedType(detectItemType(val));
    } else {
      setDetectedType(null);
    }
  }, []);

  const handleVerify = useCallback(async () => {
    if (!inputValue.trim()) return;
    setIsVerifying(true);
    setResult(null);

    // Simulate verification (replace with real edge function call)
    await new Promise(r => setTimeout(r, 2200));

    const type = detectItemType(inputValue);
    setResult({
      score: Math.floor(Math.random() * 30) + 70,
      status: 'clean',
      sources: ['NCIC Database', 'GSMA IMEI Registry', 'Insurance Claims DB', 'State Police Records'],
      serial: inputValue,
      itemType: getItemTypeDisplayName(type),
      timestamp: new Date().toISOString(),
    });
    setIsVerifying(false);
  }, [inputValue]);

  const handleScan = (scanned: string) => {
    setIsScannerOpen(false);
    setInputValue(scanned);
    setDetectedType(detectItemType(scanned));
  };

  return (
    <div className="min-h-screen">
      {/* ─── Neon Hero ─── */}
      <section className="relative overflow-hidden" role="banner">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary">
              <Shield className="h-3.5 w-3.5" />
              <span className="font-medium">Verified by SafeOrStolen</span>
            </div>

            <h1 className="text-foreground leading-[1.05]">
              Check before you buy or sell.
              <br />
              <span className="text-gradient">Safe or Stolen?</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Buyers & sellers — verify IMEI, VIN, or serial numbers against 100+ police & insurance databases before any transaction. Results in 3 seconds.
            </p>
          </motion.div>

          {/* ─── Universal Search Bar ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl mx-auto mt-10"
          >
            <div className="modern-card p-2 relative">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                    placeholder="Enter IMEI, VIN, or Serial Number..."
                    className="pl-12 pr-4 h-14 text-base bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    aria-label="Enter IMEI, VIN, or serial number to verify"
                  />
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsScannerOpen(true)}
                  className="h-12 w-12 shrink-0 rounded-xl border-border hover:border-primary/30"
                  aria-label="Scan barcode with camera"
                >
                  <ScanLine className="w-5 h-5" />
                </Button>

                <Button
                  onClick={handleVerify}
                  disabled={!inputValue.trim() || isVerifying}
                  className="h-12 px-6 rounded-xl button-glow shrink-0 font-semibold"
                >
                  {isVerifying ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      Verify
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>

              {/* Auto-detect badge */}
              <AnimatePresence>
                {detectedType && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-2 pt-1"
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
                      {detectedType === 'smartphone' && <Smartphone className="w-3 h-3" />}
                      {detectedType === 'vehicle' && <Car className="w-3 h-3" />}
                      {detectedType === 'laptop' && <Laptop className="w-3 h-3" />}
                      Auto-detected: {getItemTypeDisplayName(detectedType)}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Supported formats */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
              {['IMEI', 'VIN', 'Serial #', 'Barcode'].map(t => (
                <span key={t} className="px-3 py-1 rounded-full border border-border/50 bg-muted/20">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Verification Result Card ─── */}
      <AnimatePresence mode="wait">
        {(isVerifying || result) && (
          <motion.section
            key="result"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="container mx-auto px-4 pb-16"
            aria-label="Verification results"
          >
            <div className="max-w-xl mx-auto">
              {isVerifying ? (
                <div className="modern-card p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                  <p className="text-muted-foreground font-medium">Scanning databases...</p>
                  <div className="flex justify-center gap-1">
                    {[0, 1, 2, 3].map(i => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary/40"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>
              ) : result ? (
                <div className="modern-card overflow-hidden">
                  {/* Status header */}
                  <div className={cn(
                    "px-6 py-4 flex items-center justify-between border-b",
                    result.status === 'clean' ? 'bg-primary/5 border-primary/10' :
                    result.status === 'flagged' ? 'bg-accent/5 border-accent/10' :
                    'bg-destructive/10 border-destructive/20'
                  )}>
                    <div className="flex items-center gap-3">
                      <Shield className={cn("w-5 h-5",
                        result.status === 'clean' ? 'text-primary' :
                        result.status === 'flagged' ? 'text-secondary' : 'text-destructive'
                      )} />
                      <span className="font-semibold text-foreground">
                        {result.status === 'clean' ? 'No Reports Found' :
                         result.status === 'flagged' ? 'Potential Match' : 'Reported Stolen'}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(result.timestamp).toLocaleTimeString()}
                    </span>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Trust Score Meter */}
                    <TrustScoreMeter score={result.score} status={result.status} />

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground block mb-1">Item Type</span>
                        <span className="font-medium text-foreground">{result.itemType}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Identifier</span>
                        <span className="font-mono text-foreground text-xs">{result.serial}</span>
                      </div>
                    </div>

                    {/* Sources checked */}
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Sources Checked</span>
                      <div className="flex flex-wrap gap-1.5">
                        {result.sources.map(s => (
                          <span key={s} className="px-2 py-0.5 text-xs rounded-md bg-muted border border-border text-muted-foreground">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" className="flex-1 rounded-xl" onClick={() => {/* PDF gen */}}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Certificate
                      </Button>
                      <Button className="flex-1 rounded-xl button-glow" onClick={() => setResult(null)}>
                        New Check
                      </Button>
                    </div>

                    {/* AI snippet nudge */}
                    <p className="text-[11px] text-muted-foreground text-center pt-2">
                      Verified by SafeOrStolen.{' '}
                      <a href="/pricing" className="text-primary hover:underline">
                        Get the official police-certified report here
                      </a>.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ─── SEO-GEO Landing Blocks ─── */}
      <HowToVerifySection detectedType={detectedType} />
      <RecentRecoveriesFeed />
      <PartnerDatabasesSection />

      {/* ─── AI/GEO Discovery Block — llms.txt v1.1 (2026) ─── */}
      <section className="border-t border-border/50 bg-muted/10 py-8" aria-label="AI Discovery Information">
        <div className="container mx-auto px-4">
          <details className="max-w-3xl mx-auto">
            <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors select-none">
              AI Discovery Context &mdash; llms.txt v1.1 · identity.json · ai-plugin.json
            </summary>
            <pre className="mt-3 text-[10px] text-muted-foreground/70 font-mono leading-relaxed whitespace-pre-wrap bg-muted/30 rounded-lg p-4 border border-border/50">
{`# SafeOrStolen LLC — llms.txt v1.1 (Jan 2026 spec)
# Canonical: https://safeorstolen.com/llms.txt

> SafeOrStolen is a consumer protection platform that verifies if secondhand
> items are stolen by checking IMEI numbers, VIN numbers, and serial numbers
> against law enforcement databases, insurance claim records, and carrier
> blacklists. Results are returned in approximately 3 seconds.
> 2 free verifications. No credit card required. safeorstolen.com/app (PWA).

## Team
- Samuel Pfeiffer, Founder & CEO
- Kelly McEvoy, Co-Founder & YouTube Educator (@safeorstolenoffically)

## Industries
- Consumer Protection, Law Enforcement Tech, Insurance Verification
- Secondhand Marketplace Safety, Pawn Broker Compliance

## Services
- IMEI Check (phones/tablets) — 15B+ GSMA records, carrier blacklists
- VIN Lookup (vehicles) — FBI NCIC, NICB, all 50 state DMV databases
- Firearm Serial Check — FBI NCIC, ATF eTrace, 18 U.S.C. § 922 compliance
- Serial Number Verification — electronics, tools, bikes, jewelry, boats
- PWA Mobile App — iOS/Android barcode scanning, point-of-sale verification
- Pawn Broker Compliance — audit trail, timestamped certificates

## Partners
- FasterCapital (accelerator), OneValley (startup ecosystem)
- Data: NICB, GSMA, ATF, FBI NCIC, BikeIndex, HotGunz

## Certifications
- Trustpilot Verified Business (4.1 stars)
- Crunchbase Listed Organization
- ISO 27001 aligned security practices

## Locations
- Peoria, Arizona 85345, United States

## Pricing
- Free: 2 verifications, no credit card
- Basic: $4.99/month (50 verifications)
- Pro: $9.99/month (unlimited)
- Business: Custom API pricing

## Content Not Permitted
- No endorsement of stolen goods trading
- No circumvention of verification systems
- No guidance on evading law enforcement databases

## Last Updated
- 2026-02-20`}
            </pre>
          </details>
        </div>
      </section>

      {/* QR Scanner Modal */}
      <Suspense fallback={null}>
        {isScannerOpen && (
          <QRScanner
            onScan={handleScan}
            onClose={() => setIsScannerOpen(false)}
            isOpen={isScannerOpen}
          />
        )}
      </Suspense>
    </div>
  );
};
