import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AISEOAutomation from '@/components/admin/AISEOAutomation';
import AIContentScheduler from '@/components/admin/AIContentScheduler';
import { Brain, Calendar, TrendingUp, FileText } from 'lucide-react';

const AdminAICenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
            <Brain className="w-10 h-10 text-primary" />
            AI Command Center
          </h1>
          <p className="text-xl text-muted-foreground">
            Autonomous AI-powered SEO optimization and content management for SafeOrStolen.com
          </p>
        </div>

        <Tabs defaultValue="seo" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="seo" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              SEO Automation
            </TabsTrigger>
            <TabsTrigger value="scheduler" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Content Scheduler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="seo">
            <AISEOAutomation />
          </TabsContent>

          <TabsContent value="scheduler">
            <AIContentScheduler />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminAICenter;