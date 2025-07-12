
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Database } from 'lucide-react';

interface DataRetentionSettingsProps {
  dataRetention: {
    verification_results: number;
    audit_logs: number;
    subscribers: number;
  };
}

export const DataRetentionSettings = ({ dataRetention }: DataRetentionSettingsProps) => {
  return (
    <Card className="bg-sos border-sos-orange/20">
      <CardHeader>
        <CardTitle className="text-sos-orange flex items-center gap-2">
          <Database className="h-5 w-5" />
          Data Retention
        </CardTitle>
        <CardDescription className="text-gray-300">
          Manage how long your data is stored
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-white">Retention Periods</Label>
          <div className="text-sm text-gray-400 space-y-1">
            <p>Verification Results: {dataRetention.verification_results} years</p>
            <p>Audit Logs: {dataRetention.audit_logs} years</p>
            <p>Subscriber Data: {dataRetention.subscribers} years</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
