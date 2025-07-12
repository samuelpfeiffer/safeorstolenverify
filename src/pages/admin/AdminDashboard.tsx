import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Shield, 
  Database, 
  Activity,
  TrendingUp,
  AlertTriangle,
  Settings,
  BarChart3
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Admin Dashboard</h1>
          <p className="text-xl text-gray-300">
            System overview and management controls
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm text-gray-400">
                <Users className="h-4 w-4" />
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,247</div>
              <div className="text-xs text-green-500">+12% this week</div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm text-gray-400">
                <Activity className="h-4 w-4" />
                Daily Verifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">342</div>
              <div className="text-xs text-green-500">+5% from yesterday</div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                Security Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-green-500">Excellent</div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm text-gray-400">
                <Database className="h-4 w-4" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-xs text-green-500">All systems operational</div>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-sos-dark border-sos-orange/20 hover:border-sos-orange/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-sos-orange" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Manage user accounts, permissions, and access levels.
              </p>
              <Button variant="outline" className="w-full">
                Manage Users
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20 hover:border-sos-orange/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-5 w-5 text-sos-orange" />
                Security Center
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Monitor security events and configure protection settings.
              </p>
              <Button variant="outline" className="w-full">
                Security Settings
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20 hover:border-sos-orange/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Settings className="h-5 w-5 text-sos-orange" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Configure system parameters and application settings.
              </p>
              <Button variant="outline" className="w-full">
                System Config
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="h-5 w-5 text-sos-orange" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-sos/50 rounded">
                  <div>
                    <p className="text-white text-sm">New user registration</p>
                    <p className="text-gray-400 text-xs">2 minutes ago</p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-sos/50 rounded">
                  <div>
                    <p className="text-white text-sm">Verification completed</p>
                    <p className="text-gray-400 text-xs">5 minutes ago</p>
                  </div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-sos/50 rounded">
                  <div>
                    <p className="text-white text-sm">System backup completed</p>
                    <p className="text-gray-400 text-xs">1 hour ago</p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <AlertTriangle className="h-5 w-5 text-sos-orange" />
                System Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <div>
                    <p className="text-white text-sm">High API usage detected</p>
                    <p className="text-gray-400 text-xs">Consider scaling resources</p>
                  </div>
                </div>
                
                <div className="text-center text-gray-400 py-8">
                  <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No critical alerts at this time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;