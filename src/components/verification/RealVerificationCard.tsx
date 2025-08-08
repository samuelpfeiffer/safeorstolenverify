import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  AlertTriangle, 
  XCircle, 
  HelpCircle, 
  Clock,
  Database,
  TrendingUp,
  Download,
  Share
} from 'lucide-react';
import { format } from 'date-fns';
import { type VerificationStatus } from '@/utils/typeGuards';

interface VerificationResult {
  id: string;
  status: VerificationStatus;
  confidence: number;
  source: string;
  details?: any;
  message?: string;
  verified_at: string;
  serial_number: string;
  item_type: string;
}

interface RealVerificationCardProps {
  verificationResult: VerificationResult;
}

const RealVerificationCard = ({ verificationResult }: RealVerificationCardProps) => {
  const getStatusIcon = (status: VerificationStatus) => {
    switch (status) {
      case 'safe':
        return <Shield className="h-8 w-8 text-green-500" />;
      case 'stolen':
        return <XCircle className="h-8 w-8 text-red-500" />;
      case 'lost':
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />;
      case 'unknown':
        return <HelpCircle className="h-8 w-8 text-gray-500" />;
      case 'error':
        return <XCircle className="h-8 w-8 text-red-500" />;
      default:
        return <HelpCircle className="h-8 w-8 text-gray-500" />;
    }
  };

  const getStatusColor = (status: VerificationStatus) => {
    switch (status) {
      case 'safe':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'stolen':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'lost':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'unknown':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'error':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-400';
    if (confidence >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const generateReport = () => {
    const reportData = {
      verificationId: verificationResult.id,
      serialNumber: verificationResult.serial_number,
      itemType: verificationResult.item_type,
      status: verificationResult.status,
      confidence: verificationResult.confidence,
      source: verificationResult.source,
      verifiedAt: verificationResult.verified_at,
      message: verificationResult.message,
      details: verificationResult.details
    };

    const dataStr = JSON.stringify(reportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `verification-report-${verificationResult.serial_number}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const shareResult = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Verification Result',
          text: `${verificationResult.item_type} verification: ${verificationResult.status.toUpperCase()}`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copy URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getStatusIcon(verificationResult.status)}
            <div>
              <h3 className="text-xl font-bold text-white">
                {verificationResult.item_type} Verification
              </h3>
              <p className="text-sm text-gray-400">
                Serial: {verificationResult.serial_number}
              </p>
            </div>
          </div>
          <Badge className={getStatusColor(verificationResult.status)}>
            {verificationResult.status.toUpperCase()}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Status Message */}
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <p className="text-lg text-white font-medium">
            {verificationResult.message}
          </p>
        </div>

        {/* Verification Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-sos-orange" />
                <span className="text-sm font-medium text-gray-300">Confidence Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      verificationResult.confidence >= 80 ? 'bg-green-500' :
                      verificationResult.confidence >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${verificationResult.confidence}%` }}
                  ></div>
                </div>
                <span className={`font-bold ${getConfidenceColor(verificationResult.confidence)}`}>
                  {verificationResult.confidence}%
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-sos-orange" />
                <span className="text-sm font-medium text-gray-300">Data Source</span>
              </div>
              <p className="text-white font-medium">{verificationResult.source}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-sos-orange" />
                <span className="text-sm font-medium text-gray-300">Verified At</span>
              </div>
              <p className="text-white">
                {format(new Date(verificationResult.verified_at), 'PPp')}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-sos-orange" />
                <span className="text-sm font-medium text-gray-300">Verification ID</span>
              </div>
              <p className="text-xs text-gray-400 font-mono">
                {verificationResult.id}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        {verificationResult.details && Object.keys(verificationResult.details).length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Additional Information</h4>
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(verificationResult.details).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                    </span>
                    <p className="text-white font-medium">
                      {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
          <Button 
            onClick={generateReport}
            variant="outline" 
            className="border-sos-orange text-sos-orange hover:bg-sos-orange hover:text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          
          <Button 
            onClick={shareResult}
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <Share className="h-4 w-4 mr-2" />
            Share Result
          </Button>

          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-sos-orange hover:bg-sos-orange/90"
          >
            Verify Another Item
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealVerificationCard;
