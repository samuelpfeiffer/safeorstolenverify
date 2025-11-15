import { Globe, Search, Shield, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const WebScraperInfo = () => {
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Automated Web Verification</CardTitle>
        </div>
        <CardDescription>
          Enhanced protection with web scraping technology
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Search className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Multi-Database Search</p>
              <p className="text-xs text-muted-foreground">
                Automatically searches across multiple stolen item registries and databases
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Real-Time Data</p>
              <p className="text-xs text-muted-foreground">
                Scrapes live data from current online stolen item listings
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Database className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Comprehensive Coverage</p>
              <p className="text-xs text-muted-foreground">
                Checks community databases, police registries, and public listings
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
