/**
 * AI Item Analysis Component
 * Displays AI-powered risk assessment for items
 */

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Brain, AlertTriangle, CheckCircle, HelpCircle, Loader2, Shield, FileQuestion } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AnalysisResult {
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  riskScore: number;
  redFlags: { flag: string; severity: string; explanation: string }[];
  greenFlags: { flag: string; explanation: string }[];
  detailedAnalysis: {
    photoAnalysis?: string;
    priceComparison?: string;
    sellerAssessment?: string;
    serialVerification?: string;
  };
  recommendations: {
    questionsToAsk: string[];
    documentsToRequest: string[];
    verificationSteps: string[];
    verdict: 'proceed' | 'investigate' | 'avoid';
    verdictExplanation: string;
  };
  similarPatterns?: string[];
}

export const AIItemAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    serialNumber: '',
    price: '',
    location: '',
    sellerInfo: ''
  });
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!formData.description && !formData.category) {
      toast({
        title: 'Missing information',
        description: 'Please provide at least a category and description',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-item-analysis', {
        body: {
          ...formData,
          price: formData.price ? parseFloat(formData.price) : undefined
        }
      });

      if (error) throw error;
      setResult(data);
    } catch (err) {
      console.error('[AI Analysis] Error:', err);
      toast({
        title: 'Analysis failed',
        description: 'Unable to analyze item. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'proceed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'investigate': return <HelpCircle className="h-5 w-5 text-yellow-500" />;
      case 'avoid': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default: return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Risk Analysis
        </CardTitle>
        <CardDescription>
          Get AI-powered fraud detection and risk assessment for items you're considering
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!result ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Category</label>
                <Select value={formData.category} onValueChange={(v) => setFormData(p => ({ ...p, category: v }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone / Mobile</SelectItem>
                    <SelectItem value="laptop">Laptop / Computer</SelectItem>
                    <SelectItem value="vehicle">Vehicle / Car</SelectItem>
                    <SelectItem value="bicycle">Bicycle</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="tools">Tools / Equipment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Price Listed ($)</label>
                <Input 
                  type="number"
                  placeholder="e.g., 500"
                  value={formData.price}
                  onChange={(e) => setFormData(p => ({ ...p, price: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Item Description</label>
              <Textarea
                placeholder="Describe the item in detail..."
                value={formData.description}
                onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Serial Number (optional)</label>
                <Input 
                  placeholder="Enter serial number"
                  value={formData.serialNumber}
                  onChange={(e) => setFormData(p => ({ ...p, serialNumber: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Seller Location (optional)</label>
                <Input 
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) => setFormData(p => ({ ...p, location: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Seller Info (optional)</label>
              <Textarea
                placeholder="Any info about the seller (profile age, reviews, behavior)..."
                value={formData.sellerInfo}
                onChange={(e) => setFormData(p => ({ ...p, sellerInfo: e.target.value }))}
                rows={2}
              />
            </div>

            <Button onClick={handleAnalyze} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Analyze Item
                </>
              )}
            </Button>
          </>
        ) : (
          <div className="space-y-4">
            {/* Risk Score */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
              <div>
                <p className="text-sm text-muted-foreground">Risk Level</p>
                <p className="text-2xl font-bold capitalize">{result.riskLevel}</p>
              </div>
              <div className={`h-16 w-16 rounded-full ${getRiskColor(result.riskLevel)} flex items-center justify-center text-white font-bold text-xl`}>
                {result.riskScore}
              </div>
            </div>

            {/* Verdict */}
            <div className="flex items-center gap-3 p-4 rounded-lg border">
              {getVerdictIcon(result.recommendations.verdict)}
              <div>
                <p className="font-medium capitalize">{result.recommendations.verdict}</p>
                <p className="text-sm text-muted-foreground">{result.recommendations.verdictExplanation}</p>
              </div>
            </div>

            {/* Red Flags */}
            {result.redFlags.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  Red Flags ({result.redFlags.length})
                </h4>
                <div className="space-y-2">
                  {result.redFlags.map((flag, i) => (
                    <div key={i} className="p-3 rounded bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{flag.flag}</span>
                        <Badge variant="outline" className="text-xs">{flag.severity}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{flag.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Green Flags */}
            {result.greenFlags.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Positive Indicators ({result.greenFlags.length})
                </h4>
                <div className="space-y-2">
                  {result.greenFlags.map((flag, i) => (
                    <div key={i} className="p-3 rounded bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                      <span className="font-medium text-sm">{flag.flag}</span>
                      <p className="text-sm text-muted-foreground mt-1">{flag.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <Accordion type="single" collapsible>
              <AccordionItem value="questions">
                <AccordionTrigger>Questions to Ask Seller</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1">
                    {result.recommendations.questionsToAsk.map((q, i) => (
                      <li key={i} className="text-sm">{q}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="documents">
                <AccordionTrigger>Documents to Request</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1">
                    {result.recommendations.documentsToRequest.map((d, i) => (
                      <li key={i} className="text-sm">{d}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="steps">
                <AccordionTrigger>Verification Steps</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-1">
                    {result.recommendations.verificationSteps.map((s, i) => (
                      <li key={i} className="text-sm">{s}</li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button variant="outline" onClick={() => setResult(null)} className="w-full">
              <FileQuestion className="h-4 w-4 mr-2" />
              Analyze Another Item
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
