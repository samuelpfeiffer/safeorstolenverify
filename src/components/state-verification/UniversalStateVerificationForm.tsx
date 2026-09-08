import React, { useState } from 'react';
import { useNavigate } from '@/lib/router-compat';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, MapPin, CheckCircle2 } from 'lucide-react';
import { US_STATES } from '@/data/stateVerificationData';
import { toast } from 'sonner';
import { useSmartDetection } from '@/hooks/useSmartDetection';
import { mapDetectedTypeToItemType } from '@/lib/aiDetection';
import { SmartDetectionIndicator } from '@/components/verification/SmartDetectionIndicator';

interface UniversalStateVerificationFormProps {
 stateCode?: string;
 itemType?: 'vehicle' | 'phone' | 'serial' | 'plate';
 showStateSelector?: boolean;
}

export const UniversalStateVerificationForm: React.FC<UniversalStateVerificationFormProps> = ({
 stateCode: defaultStateCode,
 itemType: defaultItemType,
 showStateSelector = true
}) => {
 const navigate = useNavigate();
 const [selectedState, setSelectedState] = useState(defaultStateCode || '');
 const [identifier, setIdentifier] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [manualOverrideType, setManualOverrideType] = useState(defaultItemType || '');
 const [showManualSelect, setShowManualSelect] = useState(false);
 const { detection, isDetecting, detectionError, detect } = useSmartDetection(500);

 // Effective type: manual override > AI detection > default prop
 const effectiveType = manualOverrideType || (detection ? mapDetectedTypeToItemType(detection.type) : defaultItemType || '');

 const handleIdentifierChange = (value: string) => {
 setIdentifier(value);
 if (!defaultItemType) {
 setManualOverrideType('');
 setShowManualSelect(false);
 detect(value);
 }
 };

 const validateInput = (): boolean => {
 if (!identifier.trim()) {
 toast.error('Please enter an identifier to verify');
 return false;
 }
 return true;
 };

 const handleVerify = async () => {
 if (!validateInput()) return;

 setIsLoading(true);
 
 const stateInfo = selectedState ? US_STATES.find(s => s.code === selectedState) : null;
 const searchQuery = stateInfo 
 ? `${identifier} ${stateInfo.name}` 
 : identifier;
 
 const typeParam = effectiveType || 'serial';
 navigate(`/verify?q=${encodeURIComponent(searchQuery)}&type=${typeParam}${selectedState ? `&state=${selectedState}` : ''}`);
 
 toast.success(`Searching ${typeParam} verification databases...`);
 };

 const selectedStateName = selectedState 
 ? US_STATES.find(s => s.code === selectedState)?.name 
 : null;

 return (
 <Card className="p-6 bg-card border-border shadow-lg">
 <div className="space-y-6">
 {/* Header */}
 <div className="flex items-center gap-3">
 <div className="p-3 rounded-full bg-primary/10">
 <Shield className="h-8 w-8 text-primary" />
 </div>
 <div>
 <h3 className="text-xl font-bold text-foreground">Universal Item Verification</h3>
 <p className="text-sm text-muted-foreground">
 AI-powered detection — just paste any identifier
 </p>
 </div>
 </div>

 {/* State Selector */}
 {showStateSelector && (
 <div className="space-y-2">
 <Label htmlFor="state-select" className="flex items-center gap-2">
 <MapPin className="h-4 w-4 text-muted-foreground" />
 Select State (Optional)
 </Label>
 <Select value={selectedState} onValueChange={setSelectedState}>
 <SelectTrigger id="state-select" className="bg-background">
 <SelectValue placeholder="All States - Nationwide Search" />
 </SelectTrigger>
 <SelectContent className="bg-popover border-border max-h-[300px]">
 <SelectItem value="">All States - Nationwide Search</SelectItem>
 {US_STATES.map(state => (
 <SelectItem key={state.code} value={state.code}>
 {state.name} ({state.code})
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 {selectedStateName && (
 <p className="text-xs text-muted-foreground flex items-center gap-1">
 <CheckCircle2 className="h-3 w-3 text-green-500" />
 Searching {selectedStateName} DMV + National databases
 </p>
 )}
 </div>
 )}

 {/* Smart Input with AI Detection */}
 <div className="space-y-2">
 <Label htmlFor="identifier" className="text-sm font-medium">
 Enter Any Identifier
 </Label>
 <Input
 id="identifier"
 placeholder="Paste IMEI, VIN, License Plate, or Serial Number..."
 value={identifier}
 onChange={(e) => handleIdentifierChange(e.target.value)}
 className="font-mono bg-background text-base py-5"
 />
 {!defaultItemType && (
 <SmartDetectionIndicator
 isDetecting={isDetecting}
 detection={detection}
 detectionError={detectionError}
 showManualSelect={showManualSelect}
 onToggleManual={() => setShowManualSelect(!showManualSelect)}
 manualType={manualOverrideType}
 onManualTypeChange={(t) => { setManualOverrideType(t); setShowManualSelect(false); }}
 />
 )}
 </div>

 {/* Verify Button */}
 <Button 
 onClick={handleVerify} 
 className="w-full" 
 size="lg"
 disabled={isLoading || !identifier.trim()}
 >
 {isLoading ? (
 <>
 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
 Searching Databases...
 </>
 ) : (
 <>
 <Shield className="mr-2 h-5 w-5" />
 Verify Now - Free
 </>
 )}
 </Button>

 {/* Trust Indicators */}
 <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
 <span className="flex items-center gap-1">
 <CheckCircle2 className="h-3 w-3 text-green-500" />
 Vehicle Theft Records
 </span>
 <span className="flex items-center gap-1">
 <CheckCircle2 className="h-3 w-3 text-green-500" />
 DMV Records
 </span>
 <span className="flex items-center gap-1">
 <CheckCircle2 className="h-3 w-3 text-green-500" />
 Stolen Property Registries
 </span>
 <span className="flex items-center gap-1">
 <CheckCircle2 className="h-3 w-3 text-green-500" />
 Verification Databases
 </span>
 </div>
 </div>
 </Card>
 );
};
