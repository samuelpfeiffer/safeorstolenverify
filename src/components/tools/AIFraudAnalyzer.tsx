import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Send, Loader2, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface FraudResult {
  riskScore: number;
  recommendation: string;
  indicators: string[];
}

const AIFraudAnalyzer = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    itemType: 'electronics',
    price: '',
    sellerHistory: '',
    location: ''
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<FraudResult | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!formData.identifier) {
      toast({ title: 'Missing Information', description: 'Please enter a serial number', variant: 'destructive' });
      return;
    }

    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const indicators: string[] = [];
    let riskScore = 20;
    if (formData.sellerHistory && parseInt(formData.sellerHistory) < 5) { indicators.push('New seller'); riskScore += 15; }
    if (formData.price && parseFloat(formData.price) < 100) { indicators.push('Low price'); riskScore += 20; }
    if (formData.identifier.length < 6) { indicators.push('Short identifier'); riskScore += 10; }

    const recommendation = riskScore < 30 ? 'Low risk - Proceed with caution' : riskScore < 60 ? 'Medium risk - Verify thoroughly' : 'High risk - Avoid';
    setResult({ riskScore: Math.min(riskScore, 100), recommendation, indicators });
    setIsAnalyzing(false);
  };

  const getRiskColor = (score: number) => score < 30 ? 'text-green-500' : score < 60 ? 'text-yellow-500' : 'text-red-500';

  return (
    <>
      <Helmet><title>AI Fraud Analyzer | SafeOrStolen</title></Helmet>
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-purple-500" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">AI Fraud Analyzer</h1>
            <p className="text-muted-foreground">AI-powered risk assessment</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>Deal Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Serial / IMEI / VIN</Label>
                  <Input value={formData.identifier} onChange={(e) => setFormData(p => ({ ...p, identifier: e.target.value }))} className="font-mono" />
                </div>
                <div className="space-y-2">
                  <Label>Asking Price ($)</Label>
                  <Input type="number" value={formData.price} onChange={(e) => setFormData(p => ({ ...p, price: e.target.value }))} />
                </div>
                <div className="space-y-2">
                  <Label>Seller Reviews</Label>
                  <Input type="number" value={formData.sellerHistory} onChange={(e) => setFormData(p => ({ ...p, sellerHistory: e.target.value }))} placeholder="0 for new" />
                </div>
                <Button onClick={handleAnalyze} disabled={isAnalyzing || !formData.identifier} className="w-full">
                  {isAnalyzing ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Analyzing...</> : <><Send className="w-4 h-4 mr-2" />Analyze</>}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Risk Assessment</CardTitle></CardHeader>
              <CardContent>
                {!result && !isAnalyzing && <div className="text-center py-12 text-muted-foreground"><Info className="w-12 h-12 mx-auto mb-4 opacity-50" /><p>Enter info and click Analyze</p></div>}
                {isAnalyzing && <div className="text-center py-12"><Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-purple-500" /></div>}
                {result && !isAnalyzing && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className={`text-5xl font-bold ${getRiskColor(result.riskScore)}`}>{result.riskScore}</div>
                      <p className="text-sm text-muted-foreground mt-1">Risk Score</p>
                      <Progress value={result.riskScore} className="mt-3 h-2" />
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-medium mb-2 flex items-center gap-2">{result.riskScore < 30 ? <CheckCircle className="w-4 h-4 text-green-500" /> : <AlertTriangle className="w-4 h-4 text-yellow-500" />}Recommendation</h4>
                      <p className="text-sm">{result.recommendation}</p>
                    </div>
                    {result.indicators.length > 0 && <div><h4 className="font-medium mb-2">Indicators</h4><div className="flex flex-wrap gap-2">{result.indicators.map((i, idx) => <Badge key={idx} variant="outline">{i}</Badge>)}</div></div>}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFraudAnalyzer;
