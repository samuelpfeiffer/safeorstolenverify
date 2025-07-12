import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { BarChart, TrendingUp, Shield, Clock } from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  const { isAuthenticated } = useUnifiedAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sos flex items-center justify-center">
        <Card className="bg-sos-dark border-sos-orange/20 max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Sign In Required</h2>
            <p className="text-gray-300 mb-6">
              Please sign in to view your analytics.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sos text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Analytics Dashboard</h1>
          <p className="text-xl text-gray-300">
            Track your verification history and patterns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Verifications */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm text-gray-400">
                <BarChart className="h-4 w-4" />
                Total Verifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">42</div>
              <div className="text-xs text-green-500">+12% this month</div>
            </CardContent>
          </Card>

          {/* Success Rate */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm text-gray-400">
                <TrendingUp className="h-4 w-4" />
                Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">89%</div>
              <div className="text-xs text-green-500">+3% improvement</div>
            </CardContent>
          </Card>

          {/* Verified Items */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                Verified Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">37</div>
              <div className="text-xs text-gray-300">Legitimate items</div>
            </CardContent>
          </Card>

          {/* Avg Response Time */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="h-4 w-4" />
                Avg Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2.3s</div>
              <div className="text-xs text-green-500">-0.5s faster</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Verification History */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="text-white">Verification History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <BarChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Chart visualization will be available soon</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Item Categories */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="text-white">Item Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Electronics</span>
                  <span className="text-white">67%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-sos-orange h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Accessories</span>
                  <span className="text-white">23%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-sos-orange h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Other</span>
                  <span className="text-white">10%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-sos-orange h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;