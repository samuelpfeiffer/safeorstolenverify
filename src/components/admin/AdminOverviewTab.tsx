import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VerificationResult {
  item_type: string;
  serial_number?: string;
  verification_status: string;
  created_at: string;
}

interface AdminOverviewTabProps {
  recentActivity?: VerificationResult[];
}

export const AdminOverviewTab = ({ recentActivity }: AdminOverviewTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Activity */}
      <Card className="bg-sos-dark border-sos-orange/20">
        <CardHeader>
          <CardTitle className="text-white">Recent Verification Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivity?.slice(0, 5).map((verification, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700">
              <div>
                <p className="text-white font-medium">{verification.item_type}</p>
                <p className="text-gray-400 text-sm">{verification.serial_number?.slice(0, 10)}...</p>
              </div>
              <Badge 
                variant={verification.verification_status === 'safe' ? 'default' : 'destructive'}
                className={verification.verification_status === 'safe' ? 'bg-sos-lime text-black' : ''}
              >
                {verification.verification_status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* System Health */}
      <Card className="bg-sos-dark border-sos-orange/20">
        <CardHeader>
          <CardTitle className="text-white">System Health</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Database Status</span>
            <Badge className="bg-sos-lime text-black">Healthy</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">API Response Time</span>
            <Badge variant="outline" className="border-sos-lime text-sos-lime">~245ms</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Verification Engine</span>
            <Badge className="bg-sos-lime text-black">Active</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Payment Processing</span>
            <Badge className="bg-sos-lime text-black">Operational</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};