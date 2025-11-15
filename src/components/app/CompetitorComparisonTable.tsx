import { Check, X, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface CompetitorFeature {
  feature: string;
  safeorstolen: boolean | string;
  competitor: boolean | string;
}

interface CompetitorComparisonTableProps {
  competitorName: string;
  competitorLogo?: string;
  features: CompetitorFeature[];
  keyAdvantage: string;
}

export const CompetitorComparisonTable = ({
  competitorName,
  features,
  keyAdvantage
}: CompetitorComparisonTableProps) => {
  const renderValue = (value: boolean | string, isSafeOrStolen: boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`h-6 w-6 ${isSafeOrStolen ? 'text-primary' : 'text-muted-foreground'}`} />
      ) : (
        <X className="h-6 w-6 text-muted-foreground" />
      );
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="h-5 w-5 text-primary fill-primary" />
          <Badge variant="outline" className="bg-primary/20 text-primary border-primary/40">
            Key Advantage
          </Badge>
        </div>
        <p className="text-center text-lg font-semibold text-foreground">
          {keyAdvantage}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-semibold text-foreground">Feature</th>
              <th className="text-center p-4 font-semibold text-primary">
                SafeOrStolen
              </th>
              <th className="text-center p-4 font-semibold text-muted-foreground">
                {competitorName}
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, idx) => (
              <tr 
                key={idx} 
                className={`border-b border-border ${
                  idx % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                }`}
              >
                <td className="p-4 text-foreground font-medium">{item.feature}</td>
                <td className="p-4 text-center">
                  {renderValue(item.safeorstolen, true)}
                </td>
                <td className="p-4 text-center">
                  {renderValue(item.competitor, false)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
