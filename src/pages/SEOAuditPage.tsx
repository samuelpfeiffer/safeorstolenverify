import React from 'react';
import { SEOAuditReports } from '@/components/seo/SEOAuditReports';
import { SEOMasterReport } from '@/components/seo/SEOMasterReport';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SEOAuditPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">SafeOrStolen SEO Analysis</h1>
          <p className="text-muted-foreground">Comprehensive SEO audit and optimization completion report</p>
        </header>

        <Tabs defaultValue="completion" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="completion">Optimization Complete</TabsTrigger>
            <TabsTrigger value="audit">Detailed Audit</TabsTrigger>
          </TabsList>
          
          <TabsContent value="completion" className="space-y-6">
            <SEOMasterReport />
          </TabsContent>
          
          <TabsContent value="audit" className="space-y-6">
            <SEOAuditReports />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SEOAuditPage;