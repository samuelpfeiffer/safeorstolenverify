import React, { useEffect, useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAdvancedVerification } from '@/verification/hooks/useAdvancedVerification';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useGestures } from '../hooks/useGestures';
import { format } from 'date-fns';

const MobileDashboardPage: React.FC = () => {
  const { history, loadHistory } = useAdvancedVerification();
  const { user } = useUnifiedAuth();
  const navigate = useNavigate();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (user) {
      loadHistory(20);
    }
  }, [user, loadHistory]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadHistory(20);
    setTimeout(() => setRefreshing(false), 500);
  };

  const { handleTouchStart, handleTouchEnd } = useGestures({
    onSwipeDown: handleRefresh
  });

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'critical':
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case 'medium':
        return <Shield className="h-5 w-5 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getRiskBadge = (level: string) => {
    const getVariant = (lvl: string): "default" | "destructive" | "outline" | "secondary" => {
      if (lvl === 'critical' || lvl === 'high') return 'destructive';
      return 'default';
    };
    
    return (
      <Badge variant={getVariant(level)}>
        {level.toUpperCase()}
      </Badge>
    );
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-6 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-bold mb-2">Sign In Required</h2>
            <p className="text-muted-foreground mb-4">
              Please sign in to view your verification history
            </p>
            <Button onClick={() => navigate('/auth')}>
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <PageSEO
        title="Mobile Dashboard - Verification History | SafeOrStolen"
        description="View your complete verification history. Track all your IMEI, VIN, and serial number checks with risk assessments and status updates."
        canonical="/mobile-dashboard"
      />

      <div 
        className="min-h-screen bg-gradient-to-b from-background to-muted pb-20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Pull down to refresh
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {history.length}
                </div>
                <div className="text-xs text-muted-foreground">Total</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500">
                  {history.filter(h => h.risk_level === 'low').length}
                </div>
                <div className="text-xs text-muted-foreground">Safe</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-destructive">
                  {history.filter(h => h.risk_level === 'critical' || h.risk_level === 'high').length}
                </div>
                <div className="text-xs text-muted-foreground">Risk</div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <Button
                onClick={() => navigate('/mobile-verify')}
                className="w-full h-14"
                size="lg"
              >
                <Search className="mr-2 h-5 w-5" />
                New Verification
              </Button>
            </CardContent>
          </Card>

          {/* History */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Verifications</CardTitle>
                {refreshing && (
                  <TrendingUp className="h-4 w-4 animate-spin text-primary" />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {history.length === 0 ? (
                <div className="text-center py-8">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No verifications yet
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/mobile-verify')}
                    className="mt-4"
                  >
                    Start First Verification
                  </Button>
                </div>
              ) : (
                history.map((item) => (
                  <Card key={item.id} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getRiskIcon(item.risk_level)}
                          <span className="font-mono text-sm font-semibold">
                            {item.source}
                          </span>
                        </div>
                        {getRiskBadge(item.risk_level)}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-1">
                        Status: {item.status}
                      </p>
                      
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(item.verified_at), 'MMM d, yyyy h:mm a')}
                      </p>

                      {item.status === 'stolen' && (
                        <div className="mt-3 p-2 bg-destructive/10 rounded text-xs text-destructive font-semibold">
                          ⚠️ REPORTED STOLEN
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MobileDashboardPage;
