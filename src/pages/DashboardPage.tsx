import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  BarChart3, 
  Shield, 
  Clock, 
  TrendingUp, 
  Search, 
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * User Dashboard - Personal verification dashboard
 * Shows user's verification history and statistics
 */
const DashboardPage: React.FC = () => {
  const { user } = useUnifiedAuth();

  // Fetch user's verification statistics
  const { data: stats } = useQuery({
    queryKey: ['user-verification-stats', user?.id],
    queryFn: async () => {
      if (!user) return null;
      
      const { data: verifications } = await supabase
        .from('verification_results')
        .select('verification_status')
        .eq('user_id', user.id);

      const total = verifications?.length || 0;
      const safe = verifications?.filter(v => v.verification_status === 'safe').length || 0;
      const stolen = verifications?.filter(v => v.verification_status === 'stolen').length || 0;
      const unknown = verifications?.filter(v => v.verification_status === 'unknown').length || 0;

      return { total, safe, stolen, unknown };
    },
    enabled: !!user
  });

  // Fetch recent verification history
  const { data: recentVerifications } = useQuery({
    queryKey: ['recent-verifications', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data } = await supabase
        .from('verification_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      return data || [];
    },
    enabled: !!user
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'stolen':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'unknown':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-500/20 text-green-400';
      case 'stolen':
        return 'bg-red-500/20 text-red-400';
      case 'unknown':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - Safe or Stolen</title>
        <meta name="description" content="Your personal verification dashboard" />
      </Helmet>

      <div className="min-h-screen bg-sos pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-300">
                Welcome back, {user?.user_metadata?.full_name || user?.email}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-sos-dark border-sos-orange/20">
                <CardContent className="p-6 text-center">
                  <Search className="h-8 w-8 text-sos-orange mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Verify New Item</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Check if an item is safe or stolen
                  </p>
                  <Button asChild className="bg-sos-orange hover:bg-sos-orange/90">
                    <Link to="/verify">Start Verification</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-sos-dark border-sos-orange/20">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-sos-lime mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">View Analytics</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    See detailed verification statistics
                  </p>
                  <Button asChild variant="outline" className="border-sos-lime text-sos-lime">
                    <Link to="/analytics">View Analytics</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-sos-dark border-sos-orange/20">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-sos-orange mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Manage Account</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Update profile and subscription
                  </p>
                  <Button asChild variant="outline" className="border-sos-orange text-sos-orange">
                    <Link to="/profile">Manage Account</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-sos-dark border-sos-orange/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-sos-orange mb-2">
                    {stats?.total || 0}
                  </div>
                  <div className="text-gray-400 text-sm">Total Verifications</div>
                </CardContent>
              </Card>

              <Card className="bg-sos-dark border-sos-orange/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {stats?.safe || 0}
                  </div>
                  <div className="text-gray-400 text-sm">Safe Items</div>
                </CardContent>
              </Card>

              <Card className="bg-sos-dark border-sos-orange/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {stats?.stolen || 0}
                  </div>
                  <div className="text-gray-400 text-sm">Stolen Items</div>
                </CardContent>
              </Card>

              <Card className="bg-sos-dark border-sos-orange/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {stats?.unknown || 0}
                  </div>
                  <div className="text-gray-400 text-sm">Unknown Status</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-sos-dark border-sos-orange/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Recent Verifications</span>
                  <Button asChild variant="outline" size="sm" className="border-sos-orange text-sos-orange">
                    <Link to="/analytics">View All</Link>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {recentVerifications && recentVerifications.length > 0 ? (
                  <div className="space-y-4">
                    {recentVerifications.map((verification, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-4 bg-sos/30 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(verification.verification_status)}
                          <div>
                            <div className="text-white font-medium">
                              {verification.item_type}
                            </div>
                            <div className="text-gray-400 text-sm font-mono">
                              {verification.serial_number?.substring(0, 20)}...
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(verification.verification_status)}>
                            {verification.verification_status}
                          </Badge>
                          <div className="text-gray-400 text-xs mt-1">
                            {new Date(verification.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-white font-medium mb-2">No verifications yet</h3>
                    <p className="text-gray-400 mb-4">
                      Start by verifying your first item to see your activity here.
                    </p>
                    <Button asChild className="bg-sos-orange hover:bg-sos-orange/90">
                      <Link to="/verify">Verify First Item</Link>
                    </Button>
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

export default DashboardPage;