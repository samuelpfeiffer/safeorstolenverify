import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface AppFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

interface AppFeatureGridProps {
  features: AppFeature[];
  columns?: 2 | 3 | 4;
}

export const AppFeatureGrid = ({ features, columns = 3 }: AppFeatureGridProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {features.map((feature, idx) => (
        <Card 
          key={idx} 
          className={`group hover:shadow-lg transition-all duration-300 ${
            feature.highlight 
              ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/40' 
              : 'bg-card hover:bg-card/80'
          }`}
        >
          <CardContent className="p-6">
            <div className={`mb-4 inline-flex p-3 rounded-lg ${
              feature.highlight 
                ? 'bg-primary/20 text-primary' 
                : 'bg-primary/10 text-primary'
            }`}>
              <feature.icon className="h-6 w-6" />
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
