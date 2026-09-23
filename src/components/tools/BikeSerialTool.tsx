import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Bike, Search, CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BikeResult {
 success: boolean;
 status: 'safe' | 'stolen' | 'unknown';
 confidence: number;
 message: string;
 details?: {
 manufacturer?: string;
 model?: string;
 year?: string;
 color?: string;
 stolenLocation?: string;
 stolenDate?: string;
 bikeIndexUrl?: string;
 };
}

const BikeSerialTool = () => {
 const [serial, setSerial] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [result, setResult] = useState<BikeResult | null>(null);
 const { toast } = useToast();

 const handleCheck = async () => {
 if (serial.trim().length < 4) {
 toast({
 title: 'Invalid Serial',
 description: 'Please enter at least 4 characters',
 variant: 'destructive'
 });
 return;
 }

 setIsLoading(true);
 setResult(null);

 try {
 const { data, error } = await supabase.functions.invoke('verify-bikeindex', {
 body: { identifier: serial.trim(), itemType: 'bicycle' }
 });

 if (error) throw error;
 setResult(data);
 } catch (err: any) {
 toast({
 title: 'Verification Failed',
 description: err.message || 'Unable to verify serial',
 variant: 'destructive'
 });
 } finally {
 setIsLoading(false);
 }
 };

 const getStatusIcon = (status: string) => {
 switch (status) {
 case 'safe': return <CheckCircle className="w-8 h-8 text-green-500" />;
 case 'stolen': return <XCircle className="w-8 h-8 text-red-500" />;
 default: return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
 }
 };

 const getStatusColor = (status: string) => {
 switch (status) {
 case 'safe': return 'bg-green-500/10 text-green-600 border-green-500/20';
 case 'stolen': return 'bg-red-500/10 text-red-600 border-red-500/20';
 default: return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
 }
 };

 return (
 <>
 <SEOHead
 title="Bike Serial Lookup"
 description="Check if a bicycle is reported stolen using SafeOrStolen.com's community reports and BikeIndex. Free bike serial number lookup tool."
 canonical="/tools/bike-serial"
 />

 <div className="min-h-screen bg-background py-12">
 <div className="container mx-auto px-4 max-w-2xl">
 <div className="text-center mb-8">
 <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
 <Bike className="w-8 h-8 text-orange-500" />
 </div>
 <h1 className="text-3xl font-bold text-foreground mb-2">Bike Serial Lookup</h1>
 <p className="text-muted-foreground">
 Search the stolen bicycle databases stolen bicycle registry
 </p>
 </div>

 <Card>
 <CardHeader>
 <CardTitle>Enter Bike Serial Number</CardTitle>
 <CardDescription>
 Find serial on bottom bracket, head tube, or rear dropout
 </CardDescription>
 </CardHeader>
 <CardContent className="space-y-4">
 <div className="space-y-2">
 <Label htmlFor="serial">Serial Number</Label>
 <div className="flex gap-2">
 <Input
 id="serial"
 placeholder="Enter bike serial number"
 value={serial}
 onChange={(e) => setSerial(e.target.value.toUpperCase())}
 className="font-mono text-lg uppercase"
 />
 <Button onClick={handleCheck} disabled={isLoading || serial.trim().length < 4}>
 {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
 </Button>
 </div>
 </div>

 {result && (
 <div className={`mt-6 p-6 rounded-lg border ${getStatusColor(result.status)}`}>
 <div className="flex items-center gap-4 mb-4">
 {getStatusIcon(result.status)}
 <div>
 <h3 className="text-xl font-semibold capitalize">{result.status}</h3>
 <p className="text-sm opacity-80">{result.message}</p>
 </div>
 </div>

 <div className="flex items-center gap-2 mb-4">
 <span className="text-sm">Confidence:</span>
 <Badge variant="outline">{Math.round(result.confidence * 100)}%</Badge>
 </div>

 {result.details && (
 <div className="space-y-2 text-sm mt-4 pt-4 border-t border-current/10">
 {result.details.manufacturer && (
 <div className="flex justify-between">
 <span className="opacity-70">Manufacturer:</span>
 <span className="font-medium">{result.details.manufacturer}</span>
 </div>
 )}
 {result.details.model && (
 <div className="flex justify-between">
 <span className="opacity-70">Model:</span>
 <span className="font-medium">{result.details.model}</span>
 </div>
 )}
 {result.details.color && (
 <div className="flex justify-between">
 <span className="opacity-70">Color:</span>
 <span className="font-medium">{result.details.color}</span>
 </div>
 )}
 {result.details.stolenLocation && (
 <div className="flex justify-between">
 <span className="opacity-70">Stolen Location:</span>
 <span className="font-medium">{result.details.stolenLocation}</span>
 </div>
 )}
 {result.details.stolenDate && (
 <div className="flex justify-between">
 <span className="opacity-70">Stolen Date:</span>
 <span className="font-medium">{result.details.stolenDate}</span>
 </div>
 )}
 {result.details.bikeIndexUrl && (
 <a 
 href={result.details.bikeIndexUrl} 
 target="_blank" 
 rel="noopener noreferrer"
 className="block mt-3 text-primary hover:underline"
 >
 View on BikeIndex →
 </a>
 )}
 </div>
 )}
 </div>
 )}
 </CardContent>
 </Card>

 <p className="text-center text-sm text-muted-foreground mt-6">
 Data provided by <a href="https://bikeindex.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BikeIndex</a>
 </p>
 </div>
 </div>
 </>
 );
};

export default BikeSerialTool;
