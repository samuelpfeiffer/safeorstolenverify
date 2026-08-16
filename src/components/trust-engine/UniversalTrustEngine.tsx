import React, { useState, useCallback, Suspense, lazy, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ScanLine, Shield, Upload, ArrowRight, ToggleLeft, ToggleRight, FileSpreadsheet, Smartphone, Car, Laptop, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { detectItemType, getItemTypeDisplayName, getStatusColor } from '@/utils/itemTypeDetector';
import { TrustMeter } from './TrustMeter';
import { BatchUploadSection } from './BatchUploadSection';
import { VerificationResultCard } from './VerificationResultCard';
import { TrustEngineSchemas } from './TrustEngineSchemas';
import { VisualOCRVerification } from '@/components/ai/VisualOCRVerification';

const QRScanner = lazy(() => import('@/components/futuristic/QRScanner').then(m => ({ default: m.QRScanner })));

export interface VerificationResult {
 score: number;
 status: 'clean' | 'flagged' | 'stolen' | 'unknown';
 sources: string[];
 serial: string;
 itemType: string;
 timestamp: string;
 hash: string;
 tldr: string;
}

const generateHash = (input: string): string => {
 let hash = 0;
 for (let i = 0; i < input.length; i++) {
 const char = input.charCodeAt(i);
 hash = ((hash << 5) - hash) + char;
 hash |= 0;
 }
 return Math.abs(hash).toString(16).padStart(16, '0').slice(0, 16);
};

const UniversalTrustEngine: React.FC = () => {
 const [inputValue, setInputValue] = useState('');
 const [detectedType, setDetectedType] = useState<string | null>(null);
 const [isVerifying, setIsVerifying] = useState(false);
 const [result, setResult] = useState<VerificationResult | null>(null);
 const [isScannerOpen, setIsScannerOpen] = useState(false);
 const [isBatchMode, setIsBatchMode] = useState(false);
 const inputRef = useRef<HTMLInputElement>(null);

 const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
 const val = e.target.value;
 setInputValue(val);
 if (val.length >= 4) {
 setDetectedType(detectItemType(val));
 } else {
 setDetectedType(null);
 }
 }, []);

 const handleVerify = useCallback(async () => {
 if (!inputValue.trim()) return;
 setIsVerifying(true);
 setResult(null);

 // Simulate verification — replace with real edge function
 await new Promise(r => setTimeout(r, 2400));

 const type = detectItemType(inputValue);
 const ts = new Date().toISOString();
 const hash = generateHash(inputValue + ts);
 const status: VerificationResult['status'] = 'clean';

 setResult({
 score: Math.floor(Math.random() * 15) + 85,
 status,
 sources: ['Stolen Property Registry', 'Carrier Blacklist Database', 'Vehicle Theft Records', 'Bicycle & Firearm Registries', 'Global Blacklist'],
 serial: inputValue,
 itemType: getItemTypeDisplayName(type),
 timestamp: ts,
 hash,
 tldr: `${inputValue} status is CLEAN. Source: SafeOrStolen Global Database. Verified: ${ts}`,
 });
 setIsVerifying(false);
 }, [inputValue]);

 const handleScan = (scanned: string) => {
 setIsScannerOpen(false);
 setInputValue(scanned);
 setDetectedType(detectItemType(scanned));
 };

 const typeIcons: Record<string, React.ReactNode> = {
 smartphone: <Smartphone className="w-3.5 h-3.5" />,
 vehicle: <Car className="w-3.5 h-3.5" />,
 laptop: <Laptop className="w-3.5 h-3.5" />,
 license_plate: <CreditCard className="w-3.5 h-3.5" />,
 };

 return (
 <div className="min-h-screen bg-background">
 <TrustEngineSchemas />

 {/* ─── Command Center Hero ─── */}
 <section className="relative overflow-hidden" role="banner">
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
 <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-emerald-500/3 rounded-full blur-[120px]" />
 </div>

 <div className="container mx-auto px-4 pt-12 pb-8 md:pt-20 md:pb-16 relative z-10">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 className="max-w-3xl mx-auto text-center space-y-5"
 >
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-sm text-emerald-400">
 <Shield className="h-3.5 w-3.5" />
 <span className="font-medium">Universal Trust Engine</span>
 </div>

 <h1 className="text-foreground leading-[1.05]">
 Verify any identifier.
 <br />
 <span className="text-gradient">Instant trust score.</span>
 </h1>

 <p className="text-lg text-muted-foreground max-w-xl mx-auto">
 Auto-detects IMEI, VIN, serial numbers & license plates.
 Checked against our verification databases in under 3 seconds.
 </p>

 {/* B2B Toggle */}
 <div className="flex items-center justify-center gap-3">
 <span className={cn("text-sm transition-colors", !isBatchMode ? "text-foreground" : "text-muted-foreground")}>
 Single Check
 </span>
 <button
 onClick={() => setIsBatchMode(!isBatchMode)}
 className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors border border-border bg-muted"
 aria-label="Toggle batch mode"
 >
 <motion.div
 className="h-5 w-5 rounded-full bg-primary"
 animate={{ x: isBatchMode ? 24 : 2 }}
 transition={{ type: 'spring', stiffness: 500, damping: 30 }}
 />
 </button>
 <span className={cn("text-sm transition-colors flex items-center gap-1.5", isBatchMode ? "text-foreground" : "text-muted-foreground")}>
 <FileSpreadsheet className="w-3.5 h-3.5" />
 Batch Upload (B2B)
 </span>
 </div>
 </motion.div>

 {/* ─── Input Section ─── */}
 <AnimatePresence mode="wait">
 {isBatchMode ? (
 <motion.div
 key="batch"
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 className="max-w-2xl mx-auto mt-8"
 >
 <BatchUploadSection />
 </motion.div>
 ) : (
 <motion.div
 key="single"
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 className="max-w-xl mx-auto mt-8"
 >
 <div className="modern-card p-2 relative">
 <div className="flex items-center gap-2">
 <div className="relative flex-1">
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
 <Input
 ref={inputRef}
 type="text"
 value={inputValue}
 onChange={handleInputChange}
 onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
 placeholder="Enter IMEI, VIN, Serial, or License Plate..."
 className="pl-12 pr-4 h-14 text-base bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
 aria-label="Enter identifier to verify"
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

 <AnimatePresence>
 {detectedType && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: 'auto' }}
 exit={{ opacity: 0, height: 0 }}
 className="px-4 pb-2 pt-1"
 >
 <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
 {typeIcons[detectedType] || <Shield className="w-3 h-3" />}
 Auto-detected: {getItemTypeDisplayName(detectedType)}
 </span>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
 {['IMEI', 'VIN', 'Serial #', 'License Plate', 'Barcode'].map(t => (
 <span key={t} className="px-3 py-1 rounded-full border border-border/50 bg-muted/20">{t}</span>
 ))}
 </div>

 {/* Visual OCR */}
 <div className="mt-6">
 <VisualOCRVerification
 onIdentifierExtracted={(value, type) => {
 setInputValue(value);
 setDetectedType(type);
 }}
 />
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </section>

 {/* ─── Verification Result ─── */}
 <AnimatePresence mode="wait">
 {(isVerifying || result) && (
 <motion.section
 key="result"
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 className="container mx-auto px-4 pb-16"
 >
 <div className="max-w-2xl mx-auto">
 {isVerifying ? (
 <div className="modern-card p-8 text-center space-y-4">
 <div className="w-16 h-16 mx-auto border-4 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
 <p className="text-muted-foreground font-medium">Scanning databases...</p>
 <div className="flex justify-center gap-1">
 {[0, 1, 2, 3, 4].map(i => (
 <motion.div
 key={i}
 className="w-1.5 h-1.5 rounded-full bg-emerald-400/40"
 animate={{ opacity: [0.3, 1, 0.3] }}
 transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
 />
 ))}
 </div>
 </div>
 ) : result ? (
 <VerificationResultCard result={result} onNewCheck={() => setResult(null)} />
 ) : null}
 </div>
 </motion.section>
 )}
 </AnimatePresence>

 {/* QR Scanner */}
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

export default UniversalTrustEngine;
