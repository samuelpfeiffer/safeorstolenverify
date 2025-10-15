import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AdminAnalyticsTab = () => {
  return (
    <Card className="bg-sos-dark border-sos-orange/20">
      <CardHeader>
        <CardTitle className="text-white">Advanced Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-primary/5 p-4 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Total Users</div>
            <div className="text-2xl font-bold">--</div>
            <div className="text-xs text-muted-foreground mt-1">Connect analytics to view</div>
          </div>
          <div className="bg-primary/5 p-4 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Verifications Today</div>
            <div className="text-2xl font-bold">--</div>
            <div className="text-xs text-muted-foreground mt-1">Connect analytics to view</div>
          </div>
          <div className="bg-primary/5 p-4 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Active Subscriptions</div>
            <div className="text-2xl font-bold">--</div>
            <div className="text-xs text-muted-foreground mt-1">Connect analytics to view</div>
          </div>
        </div>
        <p className="text-gray-300">
          Analytics features include:
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
          <li>User engagement metrics and retention</li>
          <li>Verification success rates</li>
          <li>Geographic usage patterns</li>
          <li>Revenue analytics</li>
          <li>Fraud detection insights</li>
        </ul>
      </CardContent>
    </Card>
  );
};