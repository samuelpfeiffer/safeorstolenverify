export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      ai_analysis_sessions: {
        Row: {
          analysis_type: string
          confidence: number | null
          cost_estimate: number | null
          created_at: string
          id: string
          models_used: string[] | null
          priority: string
          processing_time_ms: number | null
          query: string
          reasoning: string[] | null
          recommendations: string[] | null
          result: string | null
          sources: string[] | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          analysis_type: string
          confidence?: number | null
          cost_estimate?: number | null
          created_at?: string
          id?: string
          models_used?: string[] | null
          priority: string
          processing_time_ms?: number | null
          query: string
          reasoning?: string[] | null
          recommendations?: string[] | null
          result?: string | null
          sources?: string[] | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          analysis_type?: string
          confidence?: number | null
          cost_estimate?: number | null
          created_at?: string
          id?: string
          models_used?: string[] | null
          priority?: string
          processing_time_ms?: number | null
          query?: string
          reasoning?: string[] | null
          recommendations?: string[] | null
          result?: string | null
          sources?: string[] | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_executive_actions: {
        Row: {
          action_data: Json
          action_type: string
          created_at: string | null
          decision_id: string | null
          error: string | null
          executed_at: string | null
          executive_role: string
          id: string
          result: Json | null
          status: string | null
        }
        Insert: {
          action_data: Json
          action_type: string
          created_at?: string | null
          decision_id?: string | null
          error?: string | null
          executed_at?: string | null
          executive_role: string
          id?: string
          result?: Json | null
          status?: string | null
        }
        Update: {
          action_data?: Json
          action_type?: string
          created_at?: string | null
          decision_id?: string | null
          error?: string | null
          executed_at?: string | null
          executive_role?: string
          id?: string
          result?: Json | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_executive_actions_decision_id_fkey"
            columns: ["decision_id"]
            isOneToOne: false
            referencedRelation: "ai_executive_decisions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_executive_decisions: {
        Row: {
          confidence: number | null
          created_at: string | null
          decision_data: Json
          decision_type: string
          executed_at: string | null
          executive_role: string
          id: string
          impact_score: number | null
          priority: string | null
          reasoning: string | null
          result: Json | null
          status: string | null
        }
        Insert: {
          confidence?: number | null
          created_at?: string | null
          decision_data: Json
          decision_type: string
          executed_at?: string | null
          executive_role: string
          id?: string
          impact_score?: number | null
          priority?: string | null
          reasoning?: string | null
          result?: Json | null
          status?: string | null
        }
        Update: {
          confidence?: number | null
          created_at?: string | null
          decision_data?: Json
          decision_type?: string
          executed_at?: string | null
          executive_role?: string
          id?: string
          impact_score?: number | null
          priority?: string | null
          reasoning?: string | null
          result?: Json | null
          status?: string | null
        }
        Relationships: []
      }
      ai_executives: {
        Row: {
          actions_taken: number | null
          created_at: string | null
          decisions_count: number | null
          id: string
          last_decision_at: string | null
          role: string
          status: string | null
          success_rate: number | null
          updated_at: string | null
        }
        Insert: {
          actions_taken?: number | null
          created_at?: string | null
          decisions_count?: number | null
          id?: string
          last_decision_at?: string | null
          role: string
          status?: string | null
          success_rate?: number | null
          updated_at?: string | null
        }
        Update: {
          actions_taken?: number | null
          created_at?: string | null
          decisions_count?: number | null
          id?: string
          last_decision_at?: string | null
          role?: string
          status?: string | null
          success_rate?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_feedback: {
        Row: {
          accurate: boolean
          actionable: boolean
          comments: string | null
          created_at: string
          helpful: boolean
          id: string
          outcome_improved_safety: boolean | null
          outcome_prevented_fraud: boolean | null
          outcome_saved_money: boolean | null
          outcome_useful: boolean | null
          rating: number
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          accurate: boolean
          actionable: boolean
          comments?: string | null
          created_at?: string
          helpful: boolean
          id?: string
          outcome_improved_safety?: boolean | null
          outcome_prevented_fraud?: boolean | null
          outcome_saved_money?: boolean | null
          outcome_useful?: boolean | null
          rating: number
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          accurate?: boolean
          actionable?: boolean
          comments?: string | null
          created_at?: string
          helpful?: boolean
          id?: string
          outcome_improved_safety?: boolean | null
          outcome_prevented_fraud?: boolean | null
          outcome_saved_money?: boolean | null
          outcome_useful?: boolean | null
          rating?: number
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_feedback_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_analysis_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_model_performance: {
        Row: {
          average_latency_ms: number | null
          created_at: string
          id: string
          last_updated: string
          model_id: string
          model_name: string
          provider: string
          success_rate: number | null
          successful_queries: number | null
          total_latency_ms: number | null
          total_queries: number | null
        }
        Insert: {
          average_latency_ms?: number | null
          created_at?: string
          id?: string
          last_updated?: string
          model_id: string
          model_name: string
          provider: string
          success_rate?: number | null
          successful_queries?: number | null
          total_latency_ms?: number | null
          total_queries?: number | null
        }
        Update: {
          average_latency_ms?: number | null
          created_at?: string
          id?: string
          last_updated?: string
          model_id?: string
          model_name?: string
          provider?: string
          success_rate?: number | null
          successful_queries?: number | null
          total_latency_ms?: number | null
          total_queries?: number | null
        }
        Relationships: []
      }
      ai_seo_suggestions: {
        Row: {
          ai_confidence_score: number | null
          completed_at: string | null
          created_at: string | null
          description: string
          expected_impact: string | null
          id: string
          implementation_notes: string | null
          priority: string
          status: string | null
          suggestion_type: string
          title: string
        }
        Insert: {
          ai_confidence_score?: number | null
          completed_at?: string | null
          created_at?: string | null
          description: string
          expected_impact?: string | null
          id?: string
          implementation_notes?: string | null
          priority?: string
          status?: string | null
          suggestion_type: string
          title: string
        }
        Update: {
          ai_confidence_score?: number | null
          completed_at?: string | null
          created_at?: string | null
          description?: string
          expected_impact?: string | null
          id?: string
          implementation_notes?: string | null
          priority?: string
          status?: string | null
          suggestion_type?: string
          title?: string
        }
        Relationships: []
      }
      ai_system_config: {
        Row: {
          config_key: string
          config_value: Json
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          config_key: string
          config_value: Json
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          config_key?: string
          config_value?: Json
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      alert_notifications: {
        Row: {
          alert_id: string | null
          created_at: string
          data: Json | null
          id: string
          message: string
          notification_type: string
          sent_at: string | null
          status: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          alert_id?: string | null
          created_at?: string
          data?: Json | null
          id?: string
          message: string
          notification_type: string
          sent_at?: string | null
          status?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          alert_id?: string | null
          created_at?: string
          data?: Json | null
          id?: string
          message?: string
          notification_type?: string
          sent_at?: string | null
          status?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alert_notifications_alert_id_fkey"
            columns: ["alert_id"]
            isOneToOne: false
            referencedRelation: "real_time_alerts"
            referencedColumns: ["id"]
          },
        ]
      }
      api_keys: {
        Row: {
          api_key: string
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean | null
          key_name: string
          permissions: Json | null
          updated_at: string
          usage_count: number | null
          usage_limit: number | null
          user_id: string | null
        }
        Insert: {
          api_key: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_name: string
          permissions?: Json | null
          updated_at?: string
          usage_count?: number | null
          usage_limit?: number | null
          user_id?: string | null
        }
        Update: {
          api_key?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_name?: string
          permissions?: Json | null
          updated_at?: string
          usage_count?: number | null
          usage_limit?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      api_usage_logs: {
        Row: {
          api_endpoint: string
          created_at: string
          id: string
          request_count: number | null
          reset_time: string
          user_id: string
        }
        Insert: {
          api_endpoint: string
          created_at?: string
          id?: string
          request_count?: number | null
          reset_time: string
          user_id: string
        }
        Update: {
          api_endpoint?: string
          created_at?: string
          id?: string
          request_count?: number | null
          reset_time?: string
          user_id?: string
        }
        Relationships: []
      }
      api_usage_tracking: {
        Row: {
          api_key_id: string | null
          created_at: string | null
          endpoint: string
          id: string
          identifier: string | null
          ip_address: string | null
          response_status: number | null
          response_time_ms: number | null
          user_agent: string | null
        }
        Insert: {
          api_key_id?: string | null
          created_at?: string | null
          endpoint: string
          id?: string
          identifier?: string | null
          ip_address?: string | null
          response_status?: number | null
          response_time_ms?: number | null
          user_agent?: string | null
        }
        Update: {
          api_key_id?: string | null
          created_at?: string | null
          endpoint?: string
          id?: string
          identifier?: string | null
          ip_address?: string | null
          response_status?: number | null
          response_time_ms?: number | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_usage_tracking_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "external_api_keys"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          id: string
          ip_address: string | null
          new_values: Json | null
          old_values: Json | null
          record_id: string | null
          table_name: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      autonomous_system_metrics: {
        Row: {
          created_at: string | null
          id: string
          metric_type: string
          metric_value: Json
        }
        Insert: {
          created_at?: string | null
          id?: string
          metric_type: string
          metric_value: Json
        }
        Update: {
          created_at?: string | null
          id?: string
          metric_type?: string
          metric_value?: Json
        }
        Relationships: []
      }
      blog_categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      blog_post_categories: {
        Row: {
          category_id: string | null
          created_at: string
          id: string
          post_id: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          id?: string
          post_id?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string
          id?: string
          post_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_categories_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_post_tags: {
        Row: {
          created_at: string
          id: string
          post_id: string | null
          tag_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          post_id?: string | null
          tag_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string | null
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "blog_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_id: string
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          meta_description: string | null
          meta_keywords: string | null
          meta_title: string | null
          published_at: string | null
          reading_time: number | null
          slug: string
          status: string
          title: string
          updated_at: string
          view_count: number | null
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string | null
          meta_title?: string | null
          published_at?: string | null
          reading_time?: number | null
          slug: string
          status?: string
          title: string
          updated_at?: string
          view_count?: number | null
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string | null
          meta_title?: string | null
          published_at?: string | null
          reading_time?: number | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
          view_count?: number | null
        }
        Relationships: []
      }
      blog_tags: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      business_metrics: {
        Row: {
          created_at: string | null
          id: string
          metric_data: Json | null
          metric_type: string
          metric_value: number
          recorded_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metric_data?: Json | null
          metric_type: string
          metric_value: number
          recorded_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metric_data?: Json | null
          metric_type?: string
          metric_value?: number
          recorded_at?: string | null
        }
        Relationships: []
      }
      checkmend_api_usage: {
        Row: {
          api_endpoint: string
          created_at: string
          id: string
          request_count: number | null
          reset_time: string
          user_id: string
        }
        Insert: {
          api_endpoint: string
          created_at?: string
          id?: string
          request_count?: number | null
          reset_time: string
          user_id: string
        }
        Update: {
          api_endpoint?: string
          created_at?: string
          id?: string
          request_count?: number | null
          reset_time?: string
          user_id?: string
        }
        Relationships: []
      }
      checkmend_verification_cache: {
        Row: {
          cache_key: string
          created_at: string
          expires_at: string
          id: string
          item_type: string
          serial_number: string
          updated_at: string
          verification_data: Json
        }
        Insert: {
          cache_key: string
          created_at?: string
          expires_at: string
          id?: string
          item_type: string
          serial_number: string
          updated_at?: string
          verification_data: Json
        }
        Update: {
          cache_key?: string
          created_at?: string
          expires_at?: string
          id?: string
          item_type?: string
          serial_number?: string
          updated_at?: string
          verification_data?: Json
        }
        Relationships: []
      }
      checkout_sessions: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          id: string
          plan_name: string
          status: string | null
          stripe_price_id: string
          stripe_session_id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          id?: string
          plan_name: string
          status?: string | null
          stripe_price_id: string
          stripe_session_id: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          id?: string
          plan_name?: string
          status?: string | null
          stripe_price_id?: string
          stripe_session_id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      community_stories: {
        Row: {
          created_at: string
          email: string | null
          experience_type: string
          id: string
          is_approved: boolean
          item_type: string
          name: string | null
          search_terms: unknown | null
          story: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          experience_type: string
          id?: string
          is_approved?: boolean
          item_type: string
          name?: string | null
          search_terms?: unknown | null
          story: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          experience_type?: string
          id?: string
          is_approved?: boolean
          item_type?: string
          name?: string | null
          search_terms?: unknown | null
          story?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      competitor_analysis: {
        Row: {
          ai_insights: string | null
          competitor_domain: string
          competitor_rank: number | null
          content_gap_analysis: string | null
          created_at: string | null
          id: string
          keyword: string
          last_analyzed_at: string | null
          our_rank: number | null
        }
        Insert: {
          ai_insights?: string | null
          competitor_domain: string
          competitor_rank?: number | null
          content_gap_analysis?: string | null
          created_at?: string | null
          id?: string
          keyword: string
          last_analyzed_at?: string | null
          our_rank?: number | null
        }
        Update: {
          ai_insights?: string | null
          competitor_domain?: string
          competitor_rank?: number | null
          content_gap_analysis?: string | null
          created_at?: string | null
          id?: string
          keyword?: string
          last_analyzed_at?: string | null
          our_rank?: number | null
        }
        Relationships: []
      }
      content_performance: {
        Row: {
          ai_content_score: number | null
          bounce_rate: number | null
          created_at: string | null
          current_rankings: Json | null
          id: string
          last_analyzed_at: string | null
          meta_description: string | null
          optimization_suggestions: string[] | null
          organic_traffic: number | null
          page_title: string | null
          page_url: string
          target_keywords: string[] | null
          time_on_page: number | null
        }
        Insert: {
          ai_content_score?: number | null
          bounce_rate?: number | null
          created_at?: string | null
          current_rankings?: Json | null
          id?: string
          last_analyzed_at?: string | null
          meta_description?: string | null
          optimization_suggestions?: string[] | null
          organic_traffic?: number | null
          page_title?: string | null
          page_url: string
          target_keywords?: string[] | null
          time_on_page?: number | null
        }
        Update: {
          ai_content_score?: number | null
          bounce_rate?: number | null
          created_at?: string | null
          current_rankings?: Json | null
          id?: string
          last_analyzed_at?: string | null
          meta_description?: string | null
          optimization_suggestions?: string[] | null
          organic_traffic?: number | null
          page_title?: string | null
          page_url?: string
          target_keywords?: string[] | null
          time_on_page?: number | null
        }
        Relationships: []
      }
      credit_transactions: {
        Row: {
          amount: number
          balance_after: number
          created_at: string | null
          description: string | null
          id: string
          stripe_session_id: string | null
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          balance_after: number
          created_at?: string | null
          description?: string | null
          id?: string
          stripe_session_id?: string | null
          transaction_type: string
          user_id: string
        }
        Update: {
          amount?: number
          balance_after?: number
          created_at?: string | null
          description?: string | null
          id?: string
          stripe_session_id?: string | null
          transaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "credit_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_portal_sessions: {
        Row: {
          created_at: string
          id: string
          stripe_session_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          stripe_session_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          stripe_session_id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      deep_thinking_processes: {
        Row: {
          confidence: number | null
          context: Json | null
          created_at: string
          end_time: string | null
          final_analysis: string | null
          id: string
          process_id: string
          query: string
          reasoning: string[] | null
          recommendations: string[] | null
          session_id: string | null
          sources: string[] | null
          start_time: string
          steps: Json[] | null
        }
        Insert: {
          confidence?: number | null
          context?: Json | null
          created_at?: string
          end_time?: string | null
          final_analysis?: string | null
          id?: string
          process_id: string
          query: string
          reasoning?: string[] | null
          recommendations?: string[] | null
          session_id?: string | null
          sources?: string[] | null
          start_time?: string
          steps?: Json[] | null
        }
        Update: {
          confidence?: number | null
          context?: Json | null
          created_at?: string
          end_time?: string | null
          final_analysis?: string | null
          id?: string
          process_id?: string
          query?: string
          reasoning?: string[] | null
          recommendations?: string[] | null
          session_id?: string | null
          sources?: string[] | null
          start_time?: string
          steps?: Json[] | null
        }
        Relationships: [
          {
            foreignKeyName: "deep_thinking_processes_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_analysis_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      external_api_keys: {
        Row: {
          api_key: string
          created_at: string | null
          expires_at: string | null
          id: string
          is_active: boolean | null
          key_name: string
          permissions: Json | null
          updated_at: string | null
          usage_count: number | null
          usage_limit: number | null
          user_id: string | null
        }
        Insert: {
          api_key: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_name: string
          permissions?: Json | null
          updated_at?: string | null
          usage_count?: number | null
          usage_limit?: number | null
          user_id?: string | null
        }
        Update: {
          api_key?: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_name?: string
          permissions?: Json | null
          updated_at?: string | null
          usage_count?: number | null
          usage_limit?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      internet_search_results: {
        Row: {
          confidence: number | null
          created_at: string
          id: string
          metadata: Json | null
          relevance: number | null
          search_query: string
          search_type: string
          session_id: string | null
          snippet: string | null
          source: string
          title: string
          url: string
        }
        Insert: {
          confidence?: number | null
          created_at?: string
          id?: string
          metadata?: Json | null
          relevance?: number | null
          search_query: string
          search_type: string
          session_id?: string | null
          snippet?: string | null
          source: string
          title: string
          url: string
        }
        Update: {
          confidence?: number | null
          created_at?: string
          id?: string
          metadata?: Json | null
          relevance?: number | null
          search_query?: string
          search_type?: string
          session_id?: string | null
          snippet?: string | null
          source?: string
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "internet_search_results_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_analysis_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_integrations: {
        Row: {
          api_credentials: Json | null
          created_at: string
          id: string
          last_sync_at: string | null
          marketplace_name: string
          status: string | null
          sync_frequency: number | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          api_credentials?: Json | null
          created_at?: string
          id?: string
          last_sync_at?: string | null
          marketplace_name: string
          status?: string | null
          sync_frequency?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          api_credentials?: Json | null
          created_at?: string
          id?: string
          last_sync_at?: string | null
          marketplace_name?: string
          status?: string | null
          sync_frequency?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      marketplace_listings: {
        Row: {
          created_at: string
          currency: string | null
          description: string | null
          external_listing_id: string
          id: string
          images: Json | null
          integration_id: string | null
          item_condition: string | null
          location: string | null
          marketplace_name: string
          metadata: Json | null
          price: number | null
          risk_score: number | null
          title: string
          updated_at: string
          user_id: string | null
          verification_status: string | null
        }
        Insert: {
          created_at?: string
          currency?: string | null
          description?: string | null
          external_listing_id: string
          id?: string
          images?: Json | null
          integration_id?: string | null
          item_condition?: string | null
          location?: string | null
          marketplace_name: string
          metadata?: Json | null
          price?: number | null
          risk_score?: number | null
          title: string
          updated_at?: string
          user_id?: string | null
          verification_status?: string | null
        }
        Update: {
          created_at?: string
          currency?: string | null
          description?: string | null
          external_listing_id?: string
          id?: string
          images?: Json | null
          integration_id?: string | null
          item_condition?: string | null
          location?: string | null
          marketplace_name?: string
          metadata?: Json | null
          price?: number | null
          risk_score?: number | null
          title?: string
          updated_at?: string
          user_id?: string | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_listings_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "marketplace_integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          is_subscribed: boolean
          subscribed_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_subscribed?: boolean
          subscribed_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_subscribed?: boolean
          subscribed_at?: string
        }
        Relationships: []
      }
      oauth_tokens: {
        Row: {
          access_token: string
          created_at: string
          expires_at: string | null
          id: string
          id_token: string | null
          metadata: Json
          provider: string
          refresh_token: string | null
          revoked: boolean
          scope: string | null
          token_type: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          expires_at?: string | null
          id?: string
          id_token?: string | null
          metadata?: Json
          provider: string
          refresh_token?: string | null
          revoked?: boolean
          scope?: string | null
          token_type?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          id_token?: string | null
          metadata?: Json
          provider?: string
          refresh_token?: string | null
          revoked?: boolean
          scope?: string | null
          token_type?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      pending_verifications: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          item_type: string | null
          serial_number: string
          session_id: string
          user_intent: string | null
        }
        Insert: {
          created_at?: string
          expires_at?: string
          id?: string
          item_type?: string | null
          serial_number: string
          session_id: string
          user_intent?: string | null
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          item_type?: string | null
          serial_number?: string
          session_id?: string
          user_intent?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          billing_cycle_start_date: string | null
          created_at: string
          credit_balance: number | null
          email: string | null
          full_name: string | null
          id: string
          is_promotion_winner: boolean | null
          is_trial_expired: boolean | null
          monthly_verification_limit: number | null
          promotion_expires_at: string | null
          promotion_searches_remaining: number | null
          search_count: number
          search_count_reset_at: string | null
          subscription_interval: string | null
          subscription_tier: string | null
          terms_accepted: boolean | null
          terms_accepted_at: string | null
          trial_end_date: string | null
          updated_at: string
          verifications_used_this_month: number | null
        }
        Insert: {
          avatar_url?: string | null
          billing_cycle_start_date?: string | null
          created_at?: string
          credit_balance?: number | null
          email?: string | null
          full_name?: string | null
          id: string
          is_promotion_winner?: boolean | null
          is_trial_expired?: boolean | null
          monthly_verification_limit?: number | null
          promotion_expires_at?: string | null
          promotion_searches_remaining?: number | null
          search_count?: number
          search_count_reset_at?: string | null
          subscription_interval?: string | null
          subscription_tier?: string | null
          terms_accepted?: boolean | null
          terms_accepted_at?: string | null
          trial_end_date?: string | null
          updated_at?: string
          verifications_used_this_month?: number | null
        }
        Update: {
          avatar_url?: string | null
          billing_cycle_start_date?: string | null
          created_at?: string
          credit_balance?: number | null
          email?: string | null
          full_name?: string | null
          id?: string
          is_promotion_winner?: boolean | null
          is_trial_expired?: boolean | null
          monthly_verification_limit?: number | null
          promotion_expires_at?: string | null
          promotion_searches_remaining?: number | null
          search_count?: number
          search_count_reset_at?: string | null
          subscription_interval?: string | null
          subscription_tier?: string | null
          terms_accepted?: boolean | null
          terms_accepted_at?: string | null
          trial_end_date?: string | null
          updated_at?: string
          verifications_used_this_month?: number | null
        }
        Relationships: []
      }
      promotion_stats: {
        Row: {
          created_at: string
          id: string
          total_winners: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          total_winners?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          total_winners?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      property_verifications: {
        Row: {
          api_response: Json | null
          confidence_score: number | null
          created_at: string
          data_retention_until: string | null
          id: string
          property_address: string
          property_type: string | null
          recipero_report_id: string | null
          updated_at: string
          user_id: string
          verification_status: string
        }
        Insert: {
          api_response?: Json | null
          confidence_score?: number | null
          created_at?: string
          data_retention_until?: string | null
          id?: string
          property_address: string
          property_type?: string | null
          recipero_report_id?: string | null
          updated_at?: string
          user_id: string
          verification_status?: string
        }
        Update: {
          api_response?: Json | null
          confidence_score?: number | null
          created_at?: string
          data_retention_until?: string | null
          id?: string
          property_address?: string
          property_type?: string | null
          recipero_report_id?: string | null
          updated_at?: string
          user_id?: string
          verification_status?: string
        }
        Relationships: []
      }
      purchases: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          id: string
          status: string | null
          stripe_customer_id: string | null
          stripe_session_id: string | null
          updated_at: string
          user_id: string
          verification_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          id?: string
          status?: string | null
          stripe_customer_id?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id: string
          verification_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          id?: string
          status?: string | null
          stripe_customer_id?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string
          verification_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchases_verification_id_fkey"
            columns: ["verification_id"]
            isOneToOne: false
            referencedRelation: "verification_searches"
            referencedColumns: ["id"]
          },
        ]
      }
      rate_limits: {
        Row: {
          action: string
          count: number | null
          created_at: string | null
          id: string
          user_id: string
          window_start: string | null
        }
        Insert: {
          action: string
          count?: number | null
          created_at?: string | null
          id?: string
          user_id: string
          window_start?: string | null
        }
        Update: {
          action?: string
          count?: number | null
          created_at?: string | null
          id?: string
          user_id?: string
          window_start?: string | null
        }
        Relationships: []
      }
      real_time_alerts: {
        Row: {
          alert_type: string
          created_at: string
          criteria: Json
          id: string
          is_active: boolean | null
          last_triggered_at: string | null
          notification_methods: Json | null
          trigger_count: number | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string
          criteria: Json
          id?: string
          is_active?: boolean | null
          last_triggered_at?: string | null
          notification_methods?: Json | null
          trigger_count?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string
          criteria?: Json
          id?: string
          is_active?: boolean | null
          last_triggered_at?: string | null
          notification_methods?: Json | null
          trigger_count?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      receipts: {
        Row: {
          created_at: string
          id: string
          purchase_id: string | null
          receipt_url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          purchase_id?: string | null
          receipt_url?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          purchase_id?: string | null
          receipt_url?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "receipts_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: false
            referencedRelation: "purchases"
            referencedColumns: ["id"]
          },
        ]
      }
      recipero_api_usage: {
        Row: {
          api_endpoint: string
          created_at: string
          id: string
          request_count: number | null
          reset_time: string
          user_id: string
        }
        Insert: {
          api_endpoint: string
          created_at?: string
          id?: string
          request_count?: number | null
          reset_time: string
          user_id: string
        }
        Update: {
          api_endpoint?: string
          created_at?: string
          id?: string
          request_count?: number | null
          reset_time?: string
          user_id?: string
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sensitive_data_access_log: {
        Row: {
          access_type: string
          created_at: string | null
          id: string
          ip_address: string | null
          record_id: string | null
          risk_score: number | null
          session_data: Json | null
          table_name: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          access_type: string
          created_at?: string | null
          id?: string
          ip_address?: string | null
          record_id?: string | null
          risk_score?: number | null
          session_data?: Json | null
          table_name: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          access_type?: string
          created_at?: string | null
          id?: string
          ip_address?: string | null
          record_id?: string | null
          risk_score?: number | null
          session_data?: Json | null
          table_name?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      seo_keywords: {
        Row: {
          created_at: string | null
          current_rank: number | null
          difficulty_score: number | null
          id: string
          keyword: string
          last_checked_at: string | null
          search_volume: number | null
          target_rank: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_rank?: number | null
          difficulty_score?: number | null
          id?: string
          keyword: string
          last_checked_at?: string | null
          search_volume?: number | null
          target_rank?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_rank?: number | null
          difficulty_score?: number | null
          id?: string
          keyword?: string
          last_checked_at?: string | null
          search_volume?: number | null
          target_rank?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      seo_performance: {
        Row: {
          ai_optimization_score: number | null
          average_position: number | null
          click_through_rate: number | null
          created_at: string | null
          date: string
          id: string
          keyword_rankings_declined: number | null
          keyword_rankings_improved: number | null
          organic_traffic: number | null
          total_keywords_tracking: number | null
        }
        Insert: {
          ai_optimization_score?: number | null
          average_position?: number | null
          click_through_rate?: number | null
          created_at?: string | null
          date?: string
          id?: string
          keyword_rankings_declined?: number | null
          keyword_rankings_improved?: number | null
          organic_traffic?: number | null
          total_keywords_tracking?: number | null
        }
        Update: {
          ai_optimization_score?: number | null
          average_position?: number | null
          click_through_rate?: number | null
          created_at?: string | null
          date?: string
          id?: string
          keyword_rankings_declined?: number | null
          keyword_rankings_improved?: number | null
          organic_traffic?: number | null
          total_keywords_tracking?: number | null
        }
        Relationships: []
      }
      social_media_findings: {
        Row: {
          confidence_level: string | null
          created_at: string
          id: string
          monitoring_id: string | null
          platform: string
          post_content: string | null
          post_images: Json | null
          post_url: string
          similarity_score: number | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          confidence_level?: string | null
          created_at?: string
          id?: string
          monitoring_id?: string | null
          platform: string
          post_content?: string | null
          post_images?: Json | null
          post_url: string
          similarity_score?: number | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          confidence_level?: string | null
          created_at?: string
          id?: string
          monitoring_id?: string | null
          platform?: string
          post_content?: string | null
          post_images?: Json | null
          post_url?: string
          similarity_score?: number | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_media_findings_monitoring_id_fkey"
            columns: ["monitoring_id"]
            isOneToOne: false
            referencedRelation: "social_media_monitoring"
            referencedColumns: ["id"]
          },
        ]
      }
      social_media_monitoring: {
        Row: {
          created_at: string
          findings_count: number | null
          id: string
          last_scan_at: string | null
          monitoring_status: string | null
          platform: string
          search_terms: string[]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          findings_count?: number | null
          id?: string
          last_scan_at?: string | null
          monitoring_status?: string | null
          platform: string
          search_terms: string[]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          findings_count?: number | null
          id?: string
          last_scan_at?: string | null
          monitoring_status?: string | null
          platform?: string
          search_terms?: string[]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          created_at: string
          data_retention_until: string | null
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          data_retention_until?: string | null
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          data_retention_until?: string | null
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      subscription_history: {
        Row: {
          billing_period_end: string
          billing_period_start: string
          created_at: string | null
          id: string
          overage_charges: number | null
          subscription_tier: string
          user_id: string
          verifications_included: number
          verifications_used: number | null
        }
        Insert: {
          billing_period_end: string
          billing_period_start: string
          created_at?: string | null
          id?: string
          overage_charges?: number | null
          subscription_tier: string
          user_id: string
          verifications_included: number
          verifications_used?: number | null
        }
        Update: {
          billing_period_end?: string
          billing_period_start?: string
          created_at?: string | null
          id?: string
          overage_charges?: number | null
          subscription_tier?: string
          user_id?: string
          verifications_included?: number
          verifications_used?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      system_configuration: {
        Row: {
          config_key: string
          config_value: Json
          created_at: string | null
          description: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          config_key: string
          config_value: Json
          created_at?: string | null
          description?: string | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          config_key?: string
          config_value?: Json
          created_at?: string | null
          description?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      terms_acceptance: {
        Row: {
          accepted_at: string
          id: string
          ip_address: string | null
          terms_version: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          accepted_at?: string
          id?: string
          ip_address?: string | null
          terms_version?: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          accepted_at?: string
          id?: string
          ip_address?: string | null
          terms_version?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_terms_acceptance: {
        Row: {
          accepted_at: string
          created_at: string
          id: string
          ip_address: string | null
          terms_version: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          accepted_at?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          terms_version?: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          accepted_at?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          terms_version?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      users_roles: {
        Row: {
          created_at: string | null
          id: string
          role_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      verification_items: {
        Row: {
          created_at: string | null
          id: string
          identifier: string
          item_type: string
          message: string | null
          metadata: Json | null
          reported_by: string | null
          status: string
          updated_at: string | null
          verified_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          identifier: string
          item_type: string
          message?: string | null
          metadata?: Json | null
          reported_by?: string | null
          status: string
          updated_at?: string | null
          verified_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          identifier?: string
          item_type?: string
          message?: string | null
          metadata?: Json | null
          reported_by?: string | null
          status?: string
          updated_at?: string | null
          verified_at?: string | null
        }
        Relationships: []
      }
      verification_results: {
        Row: {
          api_response: Json | null
          api_source: string
          billed_as: string | null
          checkmend_report_id: string | null
          confidence_score: number | null
          created_at: string
          data_retention_until: string | null
          device_specifications: Json | null
          due_diligence_data: Json | null
          id: string
          insurance_history: Json | null
          item_type: string
          network_status: Json | null
          overage_cost: number | null
          ownership_verification: Json | null
          property_address: string | null
          recipero_report_id: string | null
          risk_assessment: Json | null
          serial_number: string
          updated_at: string
          user_id: string
          verification_status: string
          verified_at: string
        }
        Insert: {
          api_response?: Json | null
          api_source: string
          billed_as?: string | null
          checkmend_report_id?: string | null
          confidence_score?: number | null
          created_at?: string
          data_retention_until?: string | null
          device_specifications?: Json | null
          due_diligence_data?: Json | null
          id?: string
          insurance_history?: Json | null
          item_type: string
          network_status?: Json | null
          overage_cost?: number | null
          ownership_verification?: Json | null
          property_address?: string | null
          recipero_report_id?: string | null
          risk_assessment?: Json | null
          serial_number: string
          updated_at?: string
          user_id: string
          verification_status: string
          verified_at?: string
        }
        Update: {
          api_response?: Json | null
          api_source?: string
          billed_as?: string | null
          checkmend_report_id?: string | null
          confidence_score?: number | null
          created_at?: string
          data_retention_until?: string | null
          device_specifications?: Json | null
          due_diligence_data?: Json | null
          id?: string
          insurance_history?: Json | null
          item_type?: string
          network_status?: Json | null
          overage_cost?: number | null
          ownership_verification?: Json | null
          property_address?: string | null
          recipero_report_id?: string | null
          risk_assessment?: Json | null
          serial_number?: string
          updated_at?: string
          user_id?: string
          verification_status?: string
          verified_at?: string
        }
        Relationships: []
      }
      verification_searches: {
        Row: {
          created_at: string
          id: string
          item_type: string
          result: Json | null
          serial_number: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          item_type: string
          result?: Json | null
          serial_number: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          item_type?: string
          result?: Json | null
          serial_number?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_auth_rate_limit: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      check_enhanced_rate_limit: {
        Args: {
          action_type: string
          ip_address?: string
          max_requests?: number
          user_identifier: string
          window_minutes?: number
        }
        Returns: Json
      }
      check_item_verification_status: {
        Args: { item_identifier: string; item_type_param?: string }
        Returns: Json
      }
      check_secure_rate_limit: {
        Args: {
          action_type: string
          max_requests?: number
          user_identifier: string
          window_minutes?: number
        }
        Returns: Json
      }
      clean_expired_checkmend_cache: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      clean_expired_pending_verifications: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_expired_tokens: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      generate_api_key: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_complete_schema: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_newsletter_subscriber_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_public_community_stories: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string
          experience_type: string
          id: string
          is_approved: boolean
          item_type: string
          name: string
          story: string
          updated_at: string
        }[]
      }
      get_security_status: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      initialize_sample_seo_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_admin_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_authenticated_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_service_role: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_service_role_or_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      reset_monthly_verifications: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      subscribe_to_newsletter: {
        Args: { user_email: string }
        Returns: Json
      }
      validate_and_track_api_usage: {
        Args: {
          p_api_key: string
          p_endpoint: string
          p_identifier?: string
          p_ip_address?: string
          p_user_agent?: string
        }
        Returns: Json
      }
      validate_api_key_access: {
        Args:
          | { key_user_id: string }
          | {
              operation_type: string
              requesting_user_id: string
              resource_user_id: string
            }
        Returns: boolean
      }
      validate_oauth_token_access: {
        Args:
          | {
              operation_type: string
              requesting_user_id: string
              resource_user_id: string
            }
          | { token_id: string; token_user_id: string }
        Returns: boolean
      }
      validate_serial_number_enhanced: {
        Args: { input_serial: string }
        Returns: Json
      }
      validate_serial_number_secure: {
        Args: { input_serial: string }
        Returns: Json
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
