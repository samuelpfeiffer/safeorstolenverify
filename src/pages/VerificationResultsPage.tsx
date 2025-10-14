import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, CheckCircle, AlertTriangle, Download, Bell, FileText, ArrowRight, Lock, ArrowLeft } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { EnhancedPDFCertificate } from '@/components/premium/EnhancedPDFCertificate';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const VerificationResultsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUnifiedAuth();
  const [verificationData, setVerificationData] = useState<any>(null);
  const [userTier, setUserTier] = useState('free');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVerificationData();
    if (isAuthenticated) {
      loadUserProfile();
    }
  }, [id, isAuthenticated]);

  const loadVerificationData = async () => {
    // For now, using mock data from URL parameters
    // In production, this would fetch from database
    const params = new URLSearchParams(window.location.search);
    
    const mockData = {
      id: id || 'unknown',
      identifier: params.get('identifier') || 'Unknown',
      itemType: params.get('type') || 'unknown',
      status: (params.get('status') || 'safe') as 'safe' | 'stolen' | 'lost',
      providers: params.get('providers')?.split(',') || ['Multi-Database Check'],
      timestamp: new Date().toISOString(),
      details: {
        fraudRiskScore: parseInt(params.get('riskScore') || '15'),
        confidenceScore: parseInt(params.get('confidence') || '85'),
        checksDone: 6
      }
    };

    setVerificationData(mockData);
    setLoading(false);
  };

  const loadUserProfile = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('profiles')
      .select('subscription_tier')
      .eq('id', user.id)
      .single();

    if (data) {
      setUserTier(data.subscription_tier || 'free');
    }
  };

  const enableAlertMonitoring = () => {
    if (!isAuthenticated) {
      toast.error('Please sign in to enable alert monitoring');
      navigate('/auth');
      return;
    }

    if (userTier === 'free' || userTier === 'starter') {
      toast.info('Alert monitoring requires Personal plan or higher');
      navigate('/pricing');
      return;
    }

    toast.success('Alert monitoring enabled for this item');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading verification results...</p>
        </div>
      </div>
    );
  }

  if (!verificationData) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Verification Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The verification ID you're looking for doesn't exist or has expired.
          </p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Search
          </Button>
        </div>
      </div>
    );
  }

  const statusConfig = {
    safe: {
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      title: 'Item Appears Safe',
      message: 'No theft records found in our databases'
    },
    stolen: {
      icon: AlertTriangle,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      borderColor: 'border-destructive/20',
      title: 'STOLEN ITEM DETECTED',
      message: 'This item has been reported as stolen'
    },
    lost: {
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      title: 'Lost Item Detected',
      message: 'This item has been reported as lost'
    }
  };

  const config = statusConfig[verificationData.status] || statusConfig.safe;
  const StatusIcon = config.icon;

  return (
    <>
      <PageSEO
        title={`Verification Results - ${verificationData.identifier}`}
        description={`Verification results for ${verificationData.itemType}. Status: ${verificationData.status}`}
        noIndex={true}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Button 
              onClick={() => navigate('/')} 
              variant="outline"
              className="flex items-center gap-2 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              New Search
            </Button>
            
            <h1 className="text-3xl font-bold">Verification Results</h1>
            <p className="text-muted-foreground mt-2">
              Completed on {new Date(verificationData.timestamp).toLocaleString()}
            </p>
          </div>

          {/* Main Result Card */}
          <Card className={`mb-6 border-2 ${config.borderColor} ${config.bgColor}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${config.bgColor}`}>
                    <StatusIcon className={`h-8 w-8 ${config.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-1">{config.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {config.message}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant={verificationData.status === 'safe' ? 'default' : 'destructive'} className="text-lg px-4 py-1">
                  {verificationData.status.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Item Identifier</p>
                  <p className="font-mono font-semibold">{verificationData.identifier}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Item Type</p>
                  <p className="font-semibold capitalize">{verificationData.itemType}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Databases Checked</p>
                  <p className="font-semibold">{verificationData.details.checksDone} databases</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Confidence Score</p>
                  <p className="font-semibold">{verificationData.details.confidenceScore}%</p>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <p className="text-sm font-semibold mb-2">Providers Checked:</p>
                <div className="flex flex-wrap gap-2">
                  {verificationData.providers.map((provider: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {provider}
                    </Badge>
                  ))}
                </div>
              </div>

              {verificationData.details.fraudRiskScore > 40 && (
                <>
                  <Separator className="my-4" />
                  <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-orange-900">Fraud Risk Warning</p>
                      <p className="text-sm text-orange-700">
                        This item has a fraud risk score of {verificationData.details.fraudRiskScore}/100. 
                        Exercise caution before proceeding with this purchase.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Premium Features */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* PDF Certificate */}
            <EnhancedPDFCertificate 
              verificationData={verificationData}
              userTier={userTier}
            />

            {/* Alert Monitoring */}
            <Card className={userTier !== 'free' && userTier !== 'starter' ? 'border-primary/20 bg-primary/5' : 'bg-muted/50'}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bell className={`h-5 w-5 ${userTier !== 'free' && userTier !== 'starter' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <CardTitle className="text-lg">Alert Monitoring</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">
                  Get notified if this item is reported stolen in the future.
                </CardDescription>
                {userTier === 'free' || userTier === 'starter' ? (
                  <Button variant="outline" onClick={() => navigate('/pricing')} className="w-full">
                    <Lock className="h-4 w-4 mr-2" />
                    Upgrade to Personal Plan
                  </Button>
                ) : (
                  <Button onClick={enableAlertMonitoring} className="w-full">
                    <Bell className="h-4 w-4 mr-2" />
                    Enable Monitoring
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Need More Verifications?</h3>
                  <p className="text-sm text-muted-foreground">
                    Upgrade to unlock unlimited verifications, PDF certificates, and priority support
                  </p>
                </div>
                <Button onClick={() => navigate('/pricing')}>
                  View Plans
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default VerificationResultsPage;