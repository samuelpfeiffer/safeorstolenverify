import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Share2, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface VerificationCertificateProps {
  result: {
    status: string;
    message: string;
    providers: string[];
    timestamp: string;
  };
  searchInput: string;
  userTier: string;
}

export const VerificationCertificate = ({ result, searchInput, userTier }: VerificationCertificateProps) => {
  const isPremium = ['personal', 'professional', 'enterprise'].includes(userTier);

  const generatePDF = () => {
    // Premium feature: Generate PDF certificate
    if (!isPremium) {
      toast.error('Upgrade to Personal plan or higher for PDF certificates');
      return;
    }

    toast.success('PDF certificate generated', {
      description: 'Your verification certificate is ready'
    });
  };

  const shareResult = () => {
    if (!isPremium) {
      toast.error('Upgrade to Personal plan or higher for sharing features');
      return;
    }

    const shareData = {
      title: 'SafeOrStolen Verification',
      text: `Verification Result: ${result.status.toUpperCase()} - ${result.message}`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${shareData.text}\n\n${shareData.url}`);
      toast.success('Link copied to clipboard');
    }
  };

  return (
    <Card className="p-6 border-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Verification Certificate</h3>
        </div>
        {isPremium && (
          <div className="flex gap-2">
            <Button onClick={generatePDF} size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={shareResult} size="sm" variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">Item Identifier</p>
            <p className="font-mono">{searchInput}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Status</p>
            <p className={`font-semibold ${
              result.status === 'safe' ? 'text-green-600' : 'text-red-600'
            }`}>
              {result.status.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Verified On</p>
            <p>{new Date(result.timestamp).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Databases Checked</p>
            <p>{result.providers.length}</p>
          </div>
        </div>

        {!isPremium && (
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm text-center">
              🔒 Upgrade to <strong>Personal</strong> plan to download PDF certificates and share results
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};
