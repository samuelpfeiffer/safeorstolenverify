import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AdminAnalyticsTab = () => {
  return (
    <Card className="bg-sos-dark border-sos-orange/20">
      <CardHeader>
        <CardTitle className="text-white">Advanced Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">
          Detailed analytics dashboard coming soon. This will include:
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
          <li>User engagement metrics</li>
          <li>Verification success rates</li>
          <li>Geographic usage patterns</li>
          <li>Revenue analytics</li>
          <li>Fraud detection insights</li>
        </ul>
      </CardContent>
    </Card>
  );
};