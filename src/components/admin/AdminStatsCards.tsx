import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Activity, TrendingUp } from "lucide-react";

interface AdminStatsData {
  totalUsers: number;
  totalVerifications: number;
  totalSubscribers: number;
}

interface AdminStatsCardsProps {
  stats?: AdminStatsData;
}

export const AdminStatsCards = ({ stats }: AdminStatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="bg-sos-dark border-sos-orange/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white">
            <Users className="h-5 w-5 text-sos-orange" />
            Total Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-sos-orange">{stats?.totalUsers || 0}</div>
          <p className="text-gray-400 text-sm">Registered accounts</p>
        </CardContent>
      </Card>

      <Card className="bg-sos-dark border-sos-orange/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white">
            <Activity className="h-5 w-5 text-sos-lime" />
            Verifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-sos-lime">{stats?.totalVerifications || 0}</div>
          <p className="text-gray-400 text-sm">Items verified</p>
        </CardContent>
      </Card>

      <Card className="bg-sos-dark border-sos-orange/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white">
            <TrendingUp className="h-5 w-5 text-sos-orange" />
            Subscribers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-sos-orange">{stats?.totalSubscribers || 0}</div>
          <p className="text-gray-400 text-sm">Active subscriptions</p>
        </CardContent>
      </Card>
    </div>
  );
};