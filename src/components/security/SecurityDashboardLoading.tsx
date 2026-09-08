
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SecurityDashboardLoading = () => {
  return (
    <Card className="bg-sos border-sos-orange/20">
      <CardHeader>
        <CardTitle className="text-sos-orange">Security Dashboard</CardTitle>
        <CardDescription className="text-gray-300">Loading security metrics...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 bg-gray-700 rounded-[0.25rem] animate-pulse" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
