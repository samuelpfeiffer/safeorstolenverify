import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Lightbulb, FileText, ShieldAlert } from 'lucide-react';
import {
  AgentStatusGrid,
  RecommendationsPanel,
  ContentApprovalQueue,
  FraudAlertsPanel,
  AIStatsOverview,
} from '@/components/admin/ai-orchestrator';

const AIOrchestrator = () => {
  return (
    <>
      <Helmet>
        <title>AI Orchestrator | SafeOrStolen Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary" />
            AI Orchestrator
          </h1>
          <p className="text-muted-foreground mt-2">
            Monitor and control all AI agents from a single dashboard
          </p>
        </div>

        <AIStatsOverview />

        <Tabs defaultValue="agents" className="mt-8">
          <TabsList className="mb-6">
            <TabsTrigger value="agents" className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Agents
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Recommendations
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="fraud" className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              Fraud
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents">
            <AgentStatusGrid />
          </TabsContent>

          <TabsContent value="recommendations">
            <RecommendationsPanel />
          </TabsContent>

          <TabsContent value="content">
            <ContentApprovalQueue />
          </TabsContent>

          <TabsContent value="fraud">
            <FraudAlertsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default AIOrchestrator;
