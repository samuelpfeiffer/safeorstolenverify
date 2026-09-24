import React, { useState } from 'react';
import { FileText, Copy, Download, Loader2, CheckCircle2, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

interface SellerReport {
  reportTitle: string;
  summary: string;
  verificationDetails: {
    status: string;
    databasesChecked: string[];
    confidenceLevel: string;
    verificationDate: string;
  };
  fullReport: string;
  listingSnippet: string;
  buyerMessage: string;
}

interface AISellerReportProps {
  identifier: string;
  identifierType: string;
  verificationResult: string;
}

export const AISellerReport: React.FC<AISellerReportProps> = ({
  identifier,
  identifierType,
  verificationResult,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState<SellerReport | null>(null);
  const [itemDescription, setItemDescription] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const generateReport = async () => {
    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-seller-report', {
        body: { identifier, identifierType, verificationResult, itemDescription, sellerName }
      });
      if (error) throw error;
      if (data?.report) {
        setReport(data.report);
        toast({ title: '✓ Report generated!', description: 'Your professional verification report is ready.' });
      }
    } catch (err) {
      console.error('Report error:', err);
      toast({ title: 'Generation failed', description: 'Could not generate report. Try again.', variant: 'destructive' });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
    toast({ title: `Copied ${label}!`, description: 'Paste it into your marketplace listing.' });
  };

  if (verificationResult !== 'clean' && verificationResult !== 'safe') {
    return null; // Only show for clean items
  }

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          📄 AI Seller Report Generator
          <Badge variant="secondary" className="text-[10px]">PRO</Badge>
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Generate a verification record buyers can review alongside the item identifier and your ownership records.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {!report ? (
          <>
            <div className="space-y-3">
              <Input
                placeholder="Your name (optional, shown on report)"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                maxLength={100}
              />
              <Textarea
                placeholder="Describe your item (e.g., 'iPhone 14 Pro, 256GB, Deep Purple, excellent condition')"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                maxLength={500}
                rows={2}
              />
            </div>
            <Button
              onClick={generateReport}
              disabled={isGenerating}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating AI Report...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Professional Report
                </>
              )}
            </Button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Report header */}
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-bold text-green-600">✓ VERIFIED SAFE</span>
              </div>
              <h3 className="text-sm font-bold">{report.reportTitle}</h3>
              <p className="text-xs text-muted-foreground mt-1">{report.summary}</p>
            </div>

            {/* Databases checked */}
            <div>
              <p className="text-xs font-semibold mb-1.5">Databases Checked:</p>
              <div className="flex flex-wrap gap-1">
                {report.verificationDetails.databasesChecked.map((db, i) => (
                  <Badge key={i} variant="outline" className="text-[10px]">{db}</Badge>
                ))}
              </div>
            </div>

            {/* Copyable sections */}
            <div className="space-y-3">
              {/* Listing snippet */}
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold">📋 Listing Snippet (copy → paste in listing)</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                    onClick={() => copyText(report.listingSnippet, 'listing snippet')}
                  >
                    {copied === 'listing snippet' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <p className="text-xs text-foreground">{report.listingSnippet}</p>
              </div>

              {/* Buyer message */}
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold">💬 Buyer Message (send to interested buyers)</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                    onClick={() => copyText(report.buyerMessage, 'buyer message')}
                  >
                    {copied === 'buyer message' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <p className="text-xs text-foreground">{report.buyerMessage}</p>
              </div>

              {/* Full report */}
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold">📄 Full Report</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                    onClick={() => copyText(report.fullReport, 'full report')}
                  >
                    {copied === 'full report' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <div className="text-xs text-foreground whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {report.fullReport}
                </div>
              </div>
            </div>

            <Button variant="outline" size="sm" onClick={() => setReport(null)} className="w-full">
              Generate New Report
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};
