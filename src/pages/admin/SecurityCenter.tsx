import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield,
  AlertTriangle,
  CheckCircle,
  Activity,
  Lock,
  Eye,
  Users,
  Database,
  RefreshCw,
  Download
} from 'lucide-react';

const SecurityCenter: React.FC = () => {
  const securityScore = 92;
  
  const securityChecks = [
    { name: 'SSL Certificate', status: 'passed', description: 'Valid SSL certificate installed' },
    { name: 'Rate Limiting', status: 'passed', description: 'API rate limiting enabled' },
    { name: 'Authentication', status: 'passed', description: 'Secure authentication in place' },
    { name: 'Data Encryption', status: 'passed', description: 'Data encrypted at rest and in transit' },
    { name: 'Access Logs', status: 'warning', description: 'Some suspicious activity detected' },
    { name: 'Backup Security', status: 'passed', description: 'Backups are encrypted and secured' }
  ];

  const recentEvents = [
    {
      id: 1,
      type: 'auth_success',
      message: 'Successful admin login',
      timestamp: '2 minutes ago',
      severity: 'low'
    },
    {
      id: 2,
      type: 'rate_limit',
      message: 'Rate limit exceeded for IP 192.168.1.100',
      timestamp: '15 minutes ago',
      severity: 'medium'
    },
    {
      id: 3,
      type: 'auth_fail',
      message: 'Failed login attempt',
      timestamp: '1 hour ago',
      severity: 'medium'
    },
    {
      id: 4,
      type: 'backup',
      message: 'Daily backup completed successfully',
      timestamp: '2 hours ago',
      severity: 'low'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'failed':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-sos text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Security Center</h1>
            <p className="text-gray-300 mt-2">Monitor and manage system security</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button className="bg-sos-orange hover:bg-sos-orange/80">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Security Score */}
        <Card className="bg-sos-dark border-sos-orange/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Shield className="h-5 w-5 text-sos-orange" />
              Security Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-white">{securityScore}%</span>
                  <Badge className="bg-green-500 text-white">Excellent</Badge>
                </div>
                <Progress value={securityScore} className="h-2" />
                <p className="text-gray-400 text-sm mt-2">
                  Your system security is excellent. Keep monitoring for potential threats.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-sos-orange/20 rounded-full flex items-center justify-center mb-2">
                  <Shield className="h-10 w-10 text-sos-orange" />
                </div>
                <p className="text-sm text-gray-400">Protected</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Lock className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">99.8%</p>
                  <p className="text-gray-400 text-sm">Uptime</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Eye className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1,247</p>
                  <p className="text-gray-400 text-sm">Monitored Events</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-gray-400 text-sm">Active Alerts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sos-orange/20 rounded-lg">
                  <Users className="h-6 w-6 text-sos-orange" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">89</p>
                  <p className="text-gray-400 text-sm">Active Sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Security Checks */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5 text-sos-orange" />
                Security Checks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityChecks.map((check, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-sos/30 rounded">
                    {getStatusIcon(check.status)}
                    <div className="flex-1">
                      <p className="text-white font-medium">{check.name}</p>
                      <p className="text-gray-400 text-sm">{check.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Security Events */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Activity className="h-5 w-5 text-sos-orange" />
                Recent Security Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-3 bg-sos/30 rounded">
                    <div className="w-2 h-2 bg-sos-orange rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{event.message}</p>
                      <p className="text-gray-400 text-xs">{event.timestamp}</p>
                    </div>
                    <Badge className={getSeverityColor(event.severity)}>
                      {event.severity}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;