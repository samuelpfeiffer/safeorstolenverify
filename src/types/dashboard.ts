/**
 * Dashboard type definitions
 */

export interface SEOSuggestion {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  created_at: string;
  suggestion_type: string;
  implementation_notes?: string;
  ai_confidence_score: number;
  expected_impact: string;
  completed_at?: string;
}

export interface SEOKeyword {
  id: string;
  keyword: string;
  search_volume: number;
  difficulty_score: number;
  trend?: 'up' | 'down' | 'stable';
  current_rank?: number;
  target_rank?: number;
  created_at: string;
  updated_at: string;
  last_checked_at?: string;
}

export interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  scheduledPosts: number;
  totalViews: number;
}

export interface SchedulerEntry {
  id: string;
  type: 'content' | 'seo' | 'sitemap';
  status: 'pending' | 'running' | 'completed' | 'failed';
  scheduledAt: string;
  completedAt?: string;
  metadata?: Record<string, any>;
}
