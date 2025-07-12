
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface SecurityMetricCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
}

export const SecurityMetricCard = ({ title, value, description, icon: Icon }: SecurityMetricCardProps) => {
  return (
    <Card className="bg-sos border-sos-orange/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-2">
          <Icon className="h-4 w-4" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-sos-orange">
          {value}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
