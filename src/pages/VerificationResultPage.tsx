import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Shield, CheckCircle, AlertTriangle, XCircle, Download, Share2, ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { PageSEO } from '@/components/seo/PageSEO';

interface VerificationResult {
  id: string;
  serial_number: string;
  item_type: string;
  status?: 'safe' | 'stolen' | 'lost' | 'unknown';
  risk_level?: string;
  confidence_score: number;
  created_at: string;
  metadata?: any;
}

export const VerificationResultPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadVerificationResult();
    }
  }, [id]);

  const loadVerificationResult = async () => {
    try {
      const { data, error } = await supabase
        .from('verification_results')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setResult(data);
    } catch (error) {
      console.error('Error loading verification:', error);
      toast({
        title: 'Error',
        description: 'Failed to load verification result',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'safe':
        return {
          icon: CheckCircle,
          color: 'text-green-500',
          bg: 'bg-green-500/10',
          border: 'border-green-500/30',
          title: 'Verified Safe',
          description: 'This item passed all verification checks and is safe to purchase.'
        };
      case 'stolen':
        return {
          icon: XCircle,
          color: 'text-red-500',
          bg: 'bg-red-500/10',
          border: 'border-red-500/30',
          title: 'Reported Stolen',
          description: 'This item has been reported as stolen. Do not proceed with purchase.'
        };
      case 'lost':
        return {
          icon: AlertTriangle,
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
          border: 'border-orange-500/30',
          title: 'Reported Lost',
          description: 'This item has been reported as lost. Exercise caution.'
        };
      default:
        return {
          icon: AlertTriangle,
          color: 'text-yellow-500',
          bg: 'bg-yellow-500/10',
          border: 'border-yellow-500/30',
          title: 'Unknown Status',
          description: 'Unable to verify the status of this item.'
        };
    }
  };

  const handleDownloadPDF = () => {
    toast({
      title: 'Coming Soon',
      description: 'PDF export functionality will be available soon'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Verification Result - SafeOrStolen',
          text: `Check out this verification result for ${result?.item_type}`,
          url: window.location.href
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link Copied',
        description: 'Verification link copied to clipboard'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading verification..." />
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Result Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The verification result you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/')}>
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const statusConfig = getStatusConfig(result.status || 'unknown');
  const StatusIcon = statusConfig.icon;

  return (
    <>
      <PageSEO
        title={`Verification Result: ${result.serial_number} | SafeOrStolen`}
        description={`View detailed verification results for ${result.item_type} with serial number ${result.serial_number}`}
        canonical={`/verification/${id}`}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Verification Result
            </h1>
            <p className="text-muted-foreground">
              Result ID: {result.id.slice(0, 8)}... • {new Date(result.created_at).toLocaleDateString()}
            </p>
          </div>

          {/* Main Status Card */}
          <Card className={`mb-8 border-2 ${statusConfig.border} ${statusConfig.bg}`}>
            <CardContent className="pt-8">
              <div className="text-center space-y-6">
                <div className="relative inline-block">
                  <div className={`w-32 h-32 rounded-full ${statusConfig.bg} flex items-center justify-center mx-auto`}>
                    <StatusIcon className={`w-16 h-16 ${statusConfig.color}`} />
                  </div>
                  {result.status === 'safe' && (
                    <div className="absolute -top-2 -right-2">
                      <Shield className="w-12 h-12 text-sos-lime" />
                    </div>
                  )}
                </div>
                
                <div>
                  <h2 className={`text-3xl font-black mb-2 ${statusConfig.color}`}>
                    {statusConfig.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {statusConfig.description}
                  </p>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <Button onClick={handleDownloadPDF} variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button onClick={handleShare} variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Result
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Item Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Serial Number</p>
                  <p className="font-mono font-bold">{result.serial_number}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Item Type</p>
                  <p className="font-semibold capitalize">{result.item_type}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Verification Date</p>
                  <p className="font-semibold">{new Date(result.created_at).toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Confidence Score</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${result.status === 'safe' ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${result.confidence_score || 0}%` }}
                      />
                    </div>
                    <span className="font-bold">{result.confidence_score || 0}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Risk Level</p>
                  <Badge className={result.risk_level === 'low' ? 'bg-green-500' : 'bg-red-500'}>
                    {result.risk_level?.toUpperCase() || 'UNKNOWN'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {result.status === 'safe' ? (
                <>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">Safe to Purchase</p>
                      <p className="text-sm text-muted-foreground">
                        This item has passed all verification checks. You can proceed with confidence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-sos-orange mt-0.5" />
                    <div>
                      <p className="font-semibold">Keep This Receipt</p>
                      <p className="text-sm text-muted-foreground">
                        Download and save this verification for your records.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">Do Not Proceed</p>
                      <p className="text-sm text-muted-foreground">
                        This item has been flagged. Contact local authorities if you have information.
                      </p>
                    </div>
                  </div>
                  <Button variant="destructive" asChild className="w-full">
                    <Link to="/report">Report Additional Information</Link>
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default VerificationResultPage;
