/**
 * Download Report Button - Generates PDF verification reports
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, FileText } from 'lucide-react';
import { generateVerificationPDF } from '@/services/pdfReportService';
import { useToast } from '@/hooks/use-toast';
import type { AggregatedResult } from '@/services/VerificationService';

interface DownloadReportButtonProps {
  result: AggregatedResult;
  identifier: string;
  itemType?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const DownloadReportButton = ({
  result,
  identifier,
  itemType,
  variant = 'outline',
  size = 'default',
  className = '',
}: DownloadReportButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      generateVerificationPDF({ result, identifier, itemType });
      toast({
        title: 'Report Downloaded',
        description: 'Your verification report has been saved as a PDF.',
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: 'Download Failed',
        description: 'Unable to generate the PDF report. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      variant={variant}
      size={size}
      className={className}
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </>
      )}
    </Button>
  );
};

export const DownloadReportIcon = ({
  result,
  identifier,
  itemType,
}: Omit<DownloadReportButtonProps, 'variant' | 'size' | 'className'>) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      generateVerificationPDF({ result, identifier, itemType });
      toast({
        title: 'Report Downloaded',
        description: 'Your verification report has been saved.',
      });
    } catch (error) {
      toast({
        title: 'Download Failed',
        description: 'Unable to generate the report.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      variant="ghost"
      size="icon"
      title="Download PDF Report"
    >
      {isGenerating ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <FileText className="w-4 h-4" />
      )}
    </Button>
  );
};
