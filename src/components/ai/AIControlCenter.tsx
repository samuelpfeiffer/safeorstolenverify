import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdvancedAIInterface } from './AdvancedAIInterface';
import { AIAnalyticsDashboard } from './AIAnalyticsDashboard';
import { AISessionHistory } from './AISessionHistory';
import { AIFeedbackForm } from './AIFeedbackForm';
import { Brain, BarChart3, History, MessageSquare } from 'lucide-react';

export const AIControlCenter: React.FC = () => {
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">AI Control Center</h1>
        <p className="text-muted-foreground">
          Advanced AI capabilities with deep thinking and internet search
        </p>
      </div>

      <Tabs defaultValue="analysis" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Analysis
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            History
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="feedback" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Feedback
          </TabsTrigger>
        </TabsList>

        <TabsContent value="analysis" className="space-y-4">
          <AdvancedAIInterface />
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <AISessionHistory />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <AIAnalyticsDashboard />
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          {selectedSessionId ? (
            <AIFeedbackForm 
              sessionId={selectedSessionId}
              onFeedbackSubmitted={() => setSelectedSessionId(null)}
            />
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No Session Selected</h3>
              <p className="text-muted-foreground">
                Go to the History tab and select an analysis session to provide feedback.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};