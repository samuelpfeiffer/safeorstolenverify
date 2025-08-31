import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { aiDatabaseService } from '@/services/aiDatabaseService';
import { useAuth } from '@/lib/auth';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Activity, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  BarChart3
} from 'lucide-react';

interface AnalyticsData {
  totalSessions: number;
  completedSessions: number;
  averageConfidence: number;
  topAnalysisTypes: Array<{ type: string; count: number }>;
  modelUsage: Array<{ model: string; count: number }>;
}

export const AIAnalyticsDashboard: React.FC = () => {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalSessions: 0,
    completedSessions: 0,
    averageConfidence: 0,
    topAnalysisTypes: [],
    modelUsage: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, [user]);

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      const data = await aiDatabaseService.getAnalyticsData(user?.id);
      setAnalytics(data);
    } catch (error) {
      console.error('Failed to load analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const completionRate = analytics.totalSessions > 0 
    ? (analytics.completedSessions / analytics.totalSessions) * 100 
    : 0;

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-muted rounded w-3/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Analytics Dashboard</h2>
          <p className="text-muted-foreground">
            Insights into your AI analysis usage and performance
          </p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <Activity className="h-3 w-3" />
          Live Data
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Sessions</p>
                <p className="text-2xl font-bold">{analytics.totalSessions}</p>
              </div>
              <Brain className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{analytics.completedSessions}</p>
                <p className="text-xs text-muted-foreground">
                  {completionRate.toFixed(1)}% success rate
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Confidence</p>
                <p className="text-2xl font-bold">
                  {(analytics.averageConfidence * 100).toFixed(1)}%
                </p>
                <Progress 
                  value={analytics.averageConfidence * 100} 
                  className="h-2 mt-2" 
                />
              </div>
              <Target className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Performance</p>
                <p className="text-2xl font-bold">
                  {analytics.averageConfidence >= 0.8 ? 'Excellent' : 
                   analytics.averageConfidence >= 0.6 ? 'Good' : 'Improving'}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {analytics.averageConfidence >= 0.8 ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <AlertCircle className="h-3 w-3 text-yellow-500" />
                  )}
                  <span className="text-xs text-muted-foreground">
                    Based on confidence scores
                  </span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Types Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Analysis Types
            </CardTitle>
            <CardDescription>
              Distribution of different analysis types used
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topAnalysisTypes.map((item, index) => {
                const percentage = analytics.totalSessions > 0 
                  ? (item.count / analytics.totalSessions) * 100 
                  : 0;
                
                return (
                  <div key={item.type} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="capitalize">
                          {item.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {item.count} sessions
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
              
              {analytics.topAnalysisTypes.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Brain className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No analysis data available yet</p>
                  <p className="text-sm">Start using AI analysis to see insights here</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              AI Model Usage
            </CardTitle>
            <CardDescription>
              Performance across different AI models
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.modelUsage.map((model, index) => {
                const totalModelUsage = analytics.modelUsage.reduce((sum, m) => sum + m.count, 0);
                const percentage = totalModelUsage > 0 
                  ? (model.count / totalModelUsage) * 100 
                  : 0;
                
                const getModelColor = (modelName: string) => {
                  switch (modelName.toLowerCase()) {
                    case 'gpt-4o': return 'bg-green-500';
                    case 'claude-3-opus': return 'bg-blue-500';
                    case 'grok': return 'bg-purple-500';
                    case 'synthetic': return 'bg-orange-500';
                    default: return 'bg-gray-500';
                  }
                };
                
                return (
                  <div key={model.model} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getModelColor(model.model)}`} />
                        <span className="font-medium">{model.model}</span>
                        <span className="text-sm text-muted-foreground">
                          {model.count} uses
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
              
              {analytics.modelUsage.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Activity className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No model usage data available</p>
                  <p className="text-sm">AI model statistics will appear here</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Summary */}
      {analytics.totalSessions > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Activity Summary
            </CardTitle>
            <CardDescription>
              Overview of your AI analysis activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">
                  {analytics.completedSessions}
                </p>
                <p className="text-sm text-muted-foreground">Successful Analyses</p>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">
                  {(analytics.averageConfidence * 100).toFixed(0)}%
                </p>
                <p className="text-sm text-muted-foreground">Average Confidence</p>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">
                  {analytics.topAnalysisTypes[0]?.type || 'N/A'}
                </p>
                <p className="text-sm text-muted-foreground">Most Used Type</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};