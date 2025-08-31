/**
 * AI Database Service
 * Handles all database operations for the Advanced AI system
 */

import { supabase } from '@/integrations/supabase/client';

export interface AIAnalysisSession {
  id: string;
  user_id?: string;
  query: string;
  analysis_type: string;
  priority: string;
  status: string;
  result?: string;
  confidence?: number;
  sources?: string[];
  reasoning?: string[];
  recommendations?: string[];
  models_used?: string[];
  processing_time_ms?: number;
  cost_estimate?: number;
  created_at: string;
  updated_at: string;
}

export interface DeepThinkingProcess {
  id: string;
  session_id: string;
  process_id: string;
  query: string;
  context?: any;
  steps?: any[];
  final_analysis?: string;
  confidence?: number;
  reasoning?: string[];
  recommendations?: string[];
  sources?: string[];
  start_time: string;
  end_time?: string;
  created_at: string;
}

export interface InternetSearchResult {
  id: string;
  session_id: string;
  search_query: string;
  search_type: string;
  title: string;
  url: string;
  snippet?: string;
  source: string;
  confidence?: number;
  relevance?: number;
  metadata?: any;
  created_at: string;
}

export interface AIFeedback {
  id: string;
  session_id: string;
  user_id?: string;
  helpful: boolean;
  accurate: boolean;
  actionable: boolean;
  rating: number;
  comments?: string;
  outcome_useful?: boolean;
  outcome_prevented_fraud?: boolean;
  outcome_saved_money?: boolean;
  outcome_improved_safety?: boolean;
  created_at: string;
}

export interface AIModelPerformance {
  id: string;
  model_id: string;
  model_name: string;
  provider: string;
  total_queries: number;
  successful_queries: number;
  total_latency_ms: number;
  success_rate?: number;
  average_latency_ms?: number;
  last_updated: string;
  created_at: string;
}

export interface AISystemConfig {
  id: string;
  config_key: string;
  config_value: any;
  description?: string;
  is_active: boolean;
  updated_by?: string;
  created_at: string;
  updated_at: string;
}

export class AIDatabaseService {
  
  // Analysis Sessions
  async createAnalysisSession(data: {
    query: string;
    analysis_type: string;
    priority: string;
    user_id?: string;
  }): Promise<AIAnalysisSession | null> {
    try {
      const { data: session, error } = await supabase
        .from('ai_analysis_sessions')
        .insert({
          user_id: data.user_id,
          query: data.query,
          analysis_type: data.analysis_type,
          priority: data.priority,
          status: 'processing'
        })
        .select()
        .single();

      if (error) {
        console.error('Failed to create analysis session:', error);
        return null;
      }

      return session;
    } catch (error) {
      console.error('Database error creating session:', error);
      return null;
    }
  }

  async updateAnalysisSession(
    sessionId: string, 
    updates: Partial<AIAnalysisSession>
  ): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('ai_analysis_sessions')
        .update(updates)
        .eq('id', sessionId);

      if (error) {
        console.error('Failed to update analysis session:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Database error updating session:', error);
      return false;
    }
  }

  async getAnalysisSession(sessionId: string): Promise<AIAnalysisSession | null> {
    try {
      const { data, error } = await supabase
        .from('ai_analysis_sessions')
        .select('*')
        .eq('id', sessionId)
        .single();

      if (error) {
        console.error('Failed to get analysis session:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Database error getting session:', error);
      return null;
    }
  }

  async getUserAnalysisSessions(
    userId: string, 
    limit: number = 20
  ): Promise<AIAnalysisSession[]> {
    try {
      const { data, error } = await supabase
        .from('ai_analysis_sessions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Failed to get user sessions:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Database error getting user sessions:', error);
      return [];
    }
  }

  // Deep Thinking Processes
  async createDeepThinkingProcess(data: {
    session_id: string;
    process_id: string;
    query: string;
    context?: any;
  }): Promise<DeepThinkingProcess | null> {
    try {
      const { data: process, error } = await supabase
        .from('deep_thinking_processes')
        .insert({
          session_id: data.session_id,
          process_id: data.process_id,
          query: data.query,
          context: data.context || {}
        })
        .select()
        .single();

      if (error) {
        console.error('Failed to create thinking process:', error);
        return null;
      }

      return process;
    } catch (error) {
      console.error('Database error creating thinking process:', error);
      return null;
    }
  }

  async updateDeepThinkingProcess(
    processId: string,
    updates: Partial<DeepThinkingProcess>
  ): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('deep_thinking_processes')
        .update(updates)
        .eq('process_id', processId);

      if (error) {
        console.error('Failed to update thinking process:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Database error updating thinking process:', error);
      return false;
    }
  }

  async getDeepThinkingProcess(processId: string): Promise<DeepThinkingProcess | null> {
    try {
      const { data, error } = await supabase
        .from('deep_thinking_processes')
        .select('*')
        .eq('process_id', processId)
        .single();

      if (error) {
        console.error('Failed to get thinking process:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Database error getting thinking process:', error);
      return null;
    }
  }

  // Internet Search Results
  async saveSearchResults(
    sessionId: string,
    results: Array<{
      search_query: string;
      search_type: string;
      title: string;
      url: string;
      snippet?: string;
      source: string;
      confidence?: number;
      relevance?: number;
      metadata?: any;
    }>
  ): Promise<boolean> {
    try {
      const searchData = results.map(result => ({
        session_id: sessionId,
        ...result
      }));

      const { error } = await supabase
        .from('internet_search_results')
        .insert(searchData);

      if (error) {
        console.error('Failed to save search results:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Database error saving search results:', error);
      return false;
    }
  }

  async getSessionSearchResults(sessionId: string): Promise<InternetSearchResult[]> {
    try {
      const { data, error } = await supabase
        .from('internet_search_results')
        .select('*')
        .eq('session_id', sessionId)
        .order('relevance', { ascending: false });

      if (error) {
        console.error('Failed to get search results:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Database error getting search results:', error);
      return [];
    }
  }

  // AI Feedback
  async submitFeedback(feedback: {
    session_id: string;
    user_id?: string;
    helpful: boolean;
    accurate: boolean;
    actionable: boolean;
    rating: number;
    comments?: string;
    outcome_useful?: boolean;
    outcome_prevented_fraud?: boolean;
    outcome_saved_money?: boolean;
    outcome_improved_safety?: boolean;
  }): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('ai_feedback')
        .insert(feedback);

      if (error) {
        console.error('Failed to submit feedback:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Database error submitting feedback:', error);
      return false;
    }
  }

  async getSessionFeedback(sessionId: string): Promise<AIFeedback[]> {
    try {
      const { data, error } = await supabase
        .from('ai_feedback')
        .select('*')
        .eq('session_id', sessionId);

      if (error) {
        console.error('Failed to get session feedback:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Database error getting feedback:', error);
      return [];
    }
  }

  // Model Performance
  async updateModelPerformance(data: {
    model_id: string;
    model_name: string;
    provider: string;
    successful: boolean;
    latency_ms: number;
  }): Promise<boolean> {
    try {
      // First, try to get existing performance data
      const { data: existing } = await supabase
        .from('ai_model_performance')
        .select()
        .eq('model_id', data.model_id)
        .single();

      if (existing) {
        // Update existing record
        const newTotalQueries = existing.total_queries + 1;
        const newSuccessfulQueries = existing.successful_queries + (data.successful ? 1 : 0);
        const newTotalLatency = existing.total_latency_ms + data.latency_ms;
        const newSuccessRate = newSuccessfulQueries / newTotalQueries;
        const newAverageLatency = newTotalLatency / newTotalQueries;

        const { error } = await supabase
          .from('ai_model_performance')
          .update({
            total_queries: newTotalQueries,
            successful_queries: newSuccessfulQueries,
            total_latency_ms: newTotalLatency,
            success_rate: newSuccessRate,
            average_latency_ms: newAverageLatency,
            last_updated: new Date().toISOString()
          })
          .eq('model_id', data.model_id);

        if (error) {
          console.error('Failed to update model performance:', error);
          return false;
        }
      } else {
        // Create new record
        const { error } = await supabase
          .from('ai_model_performance')
          .insert({
            model_id: data.model_id,
            model_name: data.model_name,
            provider: data.provider,
            total_queries: 1,
            successful_queries: data.successful ? 1 : 0,
            total_latency_ms: data.latency_ms,
            success_rate: data.successful ? 1.0 : 0.0,
            average_latency_ms: data.latency_ms
          });

        if (error) {
          console.error('Failed to create model performance record:', error);
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error('Database error updating model performance:', error);
      return false;
    }
  }

  async getModelPerformance(): Promise<AIModelPerformance[]> {
    try {
      const { data, error } = await supabase
        .from('ai_model_performance')
        .select('*')
        .order('success_rate', { ascending: false });

      if (error) {
        console.error('Failed to get model performance:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Database error getting model performance:', error);
      return [];
    }
  }

  // System Configuration
  async getSystemConfig(): Promise<AISystemConfig[]> {
    try {
      const { data, error } = await supabase
        .from('ai_system_config')
        .select('*')
        .eq('is_active', true);

      if (error) {
        console.error('Failed to get system config:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Database error getting system config:', error);
      return [];
    }
  }

  async getConfigValue(key: string): Promise<any> {
    try {
      const { data, error } = await supabase
        .from('ai_system_config')
        .select('config_value')
        .eq('config_key', key)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error(`Failed to get config for ${key}:`, error);
        return null;
      }

      return data?.config_value;
    } catch (error) {
      console.error(`Database error getting config for ${key}:`, error);
      return null;
    }
  }

  async updateSystemConfig(
    key: string,
    value: any,
    userId?: string
  ): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('ai_system_config')
        .update({
          config_value: value,
          updated_by: userId,
          updated_at: new Date().toISOString()
        })
        .eq('config_key', key);

      if (error) {
        console.error(`Failed to update config for ${key}:`, error);
        return false;
      }

      return true;
    } catch (error) {
      console.error(`Database error updating config for ${key}:`, error);
      return false;
    }
  }

  // Analytics and Reporting
  async getAnalyticsData(userId?: string): Promise<{
    totalSessions: number;
    completedSessions: number;
    averageConfidence: number;
    topAnalysisTypes: Array<{ type: string; count: number }>;
    modelUsage: Array<{ model: string; count: number }>;
  }> {
    try {
      let query = supabase
        .from('ai_analysis_sessions')
        .select('*');

      if (userId) {
        query = query.eq('user_id', userId);
      }

      const { data: sessions, error } = await query;

      if (error) {
        console.error('Failed to get analytics data:', error);
        return {
          totalSessions: 0,
          completedSessions: 0,
          averageConfidence: 0,
          topAnalysisTypes: [],
          modelUsage: []
        };
      }

      const totalSessions = sessions?.length || 0;
      const completedSessions = sessions?.filter(s => s.status === 'completed').length || 0;
      const confidenceScores = sessions?.filter(s => s.confidence !== null).map(s => s.confidence) || [];
      const averageConfidence = confidenceScores.length > 0 
        ? confidenceScores.reduce((sum, conf) => sum + (conf || 0), 0) / confidenceScores.length 
        : 0;

      // Analysis types distribution
      const analysisTypeCounts: Record<string, number> = {};
      sessions?.forEach(session => {
        analysisTypeCounts[session.analysis_type] = (analysisTypeCounts[session.analysis_type] || 0) + 1;
      });
      const topAnalysisTypes = Object.entries(analysisTypeCounts)
        .map(([type, count]) => ({ type, count }))
        .sort((a, b) => b.count - a.count);

      // Model usage distribution
      const modelUsageCounts: Record<string, number> = {};
      sessions?.forEach(session => {
        session.models_used?.forEach((model: string) => {
          modelUsageCounts[model] = (modelUsageCounts[model] || 0) + 1;
        });
      });
      const modelUsage = Object.entries(modelUsageCounts)
        .map(([model, count]) => ({ model, count }))
        .sort((a, b) => b.count - a.count);

      return {
        totalSessions,
        completedSessions,
        averageConfidence,
        topAnalysisTypes,
        modelUsage
      };
    } catch (error) {
      console.error('Database error getting analytics:', error);
      return {
        totalSessions: 0,
        completedSessions: 0,
        averageConfidence: 0,
        topAnalysisTypes: [],
        modelUsage: []
      };
    }
  }

  // Cleanup and Maintenance
  async cleanupOldSessions(daysOld: number = 30): Promise<number> {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysOld);

      const { data, error } = await supabase
        .from('ai_analysis_sessions')
        .delete()
        .lt('created_at', cutoffDate.toISOString())
        .select();

      if (error) {
        console.error('Failed to cleanup old sessions:', error);
        return 0;
      }

      return data?.length || 0;
    } catch (error) {
      console.error('Database error cleaning up sessions:', error);
      return 0;
    }
  }
}

export const aiDatabaseService = new AIDatabaseService();