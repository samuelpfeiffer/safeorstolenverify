import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useRealVerification } from '@/hooks/useRealVerification';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { Search, Shield, CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';

/**
 * Verification Page - Main verification interface
 * Allows authenticated users to verify items
 */
const VerificationPage: React.FC = () => {
  const { user } = useUnifiedAuth();
  const { verifyItem, isLoading } = useRealVerification();
  const { hasReachedLimit, remainingSearches } = useSearchLimits();
  const [serialNumber, setSerialNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerification = async () => {
    if (!serialNumber.trim()) return;
    
    try {
      const result = await verifyItem(serialNumber, 'unknown');
      setVerificationResult(result);
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'stolen':
        return <XCircle className="h-6 w-6 text-red-500" />;
      case 'unknown':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      default:
        return <Clock className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'stolen':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'unknown':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <>
      <Helmet>
        <title>Item Verification - Safe or Stolen</title>
        <meta name="description" content="Verify if your item is safe or stolen using our real-time database" />
      </Helmet>

      <div className="min-h-screen bg-sos pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-sos-orange" />
                <h1 className="text-4xl font-bold text-white">Item Verification</h1>
              </div>
              <p className="text-gray-300 text-lg">
                Enter a serial number, VIN, or IMEI to verify if an item is safe or stolen
              </p>
            </div>

            {/* Search Section */}
            <Card className="bg-sos-dark border-sos-orange/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Verify Your Item</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-4">
                  <Input
                    placeholder="Enter serial number, VIN, or IMEI..."
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    className="flex-1 bg-sos/50 border-sos-orange/20 text-white"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleVerification}
                    disabled={hasReachedLimit || isLoading || !serialNumber.trim()}
                    className="bg-sos-orange hover:bg-sos-orange/90"
                  >
                    {isLoading ? 'Verifying...' : 'Verify Now'}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Searches remaining: <strong className="text-sos-orange">{remainingSearches}</strong>
                  </span>
                  <Badge variant="outline" className="border-sos-lime text-sos-lime">
                    Real-time verification
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            {verificationResult && (
              <Card className="bg-sos-dark border-sos-orange/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    {getStatusIcon(verificationResult.status)}
                    <span>Verification Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Status Badge */}
                  <div className="flex items-center justify-center">
                    <Badge className={`text-lg px-6 py-2 ${getStatusColor(verificationResult.status)}`}>
                      {verificationResult.status.toUpperCase()}
                    </Badge>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Verification Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Serial Number:</span>
                          <span className="text-white font-mono">{serialNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Confidence:</span>
                          <span className="text-white">{verificationResult.confidence}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Source:</span>
                          <span className="text-white">{verificationResult.source}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Verified:</span>
                          <span className="text-white">{new Date().toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Additional Information</h4>
                      <div className="text-sm text-gray-300">
                        {verificationResult.message && (
                          <p className="mb-2">{verificationResult.message}</p>
                        )}
                        {verificationResult.details && (
                          <div className="space-y-1">
                            {Object.entries(verificationResult.details).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-400 capitalize">{key.replace('_', ' ')}:</span>
                                <span className="text-white">{String(value)}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-sos-orange/20" />

                  {/* Actions */}
                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSerialNumber('');
                        setVerificationResult(null);
                      }}
                      className="border-sos-orange text-sos-orange hover:bg-sos-orange/20"
                    >
                      Verify Another Item
                    </Button>
                    <Button className="bg-sos-lime text-black hover:bg-sos-lime/90">
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Help Section */}
            <Card className="bg-sos-dark border-sos-orange/20 mt-8">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">How Verification Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-sos-orange font-bold">1</span>
                    </div>
                    <p className="text-gray-300">Enter the serial number, VIN, or IMEI of your item</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-sos-orange font-bold">2</span>
                    </div>
                    <p className="text-gray-300">We check multiple databases in real-time</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-sos-orange font-bold">3</span>
                    </div>
                    <p className="text-gray-300">Get instant results with confidence scores</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationPage;