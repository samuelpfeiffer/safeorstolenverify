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
      ai_agent_learnings: {
        Row: {
          agent_name: string
          confidence_score: number | null
          created_at: string
          failure_count: number | null
          id: string
          pattern_data: Json
          pattern_type: string
          success_count: number | null
          updated_at: string
        }
        Insert: {
          agent_name: string
          confidence_score?: number | null
          created_at?: string
          failure_count?: number | null
          id?: string
          pattern_data: Json
          pattern_type: string
          success_count?: number | null
          updated_at?: string
        }
        Update: {
          agent_name?: string
          confidence_score?: number | null
          created_at?: string
          failure_count?: number | null
          id?: string
          pattern_data?: Json
          pattern_type?: string
          success_count?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      ai_agent_runs: {
        Row: {
          agent_name: string
          completed_at: string | null
          cost_estimate: number | null
          created_at: string
          error_message: string | null
          id: string
          input_data: Json | null
          output_data: Json | null
          started_at: string | null
          status: string
          tokens_used: number | null
        }
        Insert: {
          agent_name: string
          completed_at?: string | null
          cost_estimate?: number | null
          created_at?: string
          error_message?: string | null
          id?: string
          input_data?: Json | null
          output_data?: Json | null
          started_at?: string | null
          status?: string
          tokens_used?: number | null
        }
        Update: {
          agent_name?: string
          completed_at?: string | null
          cost_estimate?: number | null
          created_at?: string
          error_message?: string | null
          id?: string
          input_data?: Json | null
          output_data?: Json | null
          started_at?: string | null
          status?: string
          tokens_used?: number | null
        }
        Relationships: []
      }
      ai_content_queue: {
        Row: {
          content: string | null
          content_type: string
          created_at: string
          created_by: string | null
          id: string
          metadata: Json | null
          published_at: string | null
          reviewed_by: string | null
          scheduled_publish_at: string | null
          seo_score: number | null
          status: string
          title: string | null
        }
        Insert: {
          content?: string | null
          content_type: string
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          published_at?: string | null
          reviewed_by?: string | null
          scheduled_publish_at?: string | null
          seo_score?: number | null
          status?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          content_type?: string
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          published_at?: string | null
          reviewed_by?: string | null
          scheduled_publish_at?: string | null
          seo_score?: number | null
          status?: string
          title?: string | null
        }
        Relationships: []
      }
      ai_recommendations: {
        Row: {
          action_data: Json | null
          agent_name: string
          category: string
          created_at: string
          description: string | null
          id: string
          priority: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          title: string
        }
        Insert: {
          action_data?: Json | null
          agent_name: string
          category: string
          created_at?: string
          description?: string | null
          id?: string
          priority?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          title: string
        }
        Update: {
          action_data?: Json | null
          agent_name?: string
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          priority?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          title?: string
        }
        Relationships: []
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
          search_terms: unknown
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
          search_terms?: unknown
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
          search_terms?: unknown
          story?: string
          updated_at?: string
          user_id?: string | null
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
      fraud_analysis: {
        Row: {
          auto_action_taken: string | null
          created_at: string
          fraud_probability: number
          id: string
          indicators: Json | null
          recommendation: string | null
          report_id: string | null
          reviewed: boolean | null
          reviewed_at: string | null
          reviewed_by: string | null
        }
        Insert: {
          auto_action_taken?: string | null
          created_at?: string
          fraud_probability?: number
          id?: string
          indicators?: Json | null
          recommendation?: string | null
          report_id?: string | null
          reviewed?: boolean | null
          reviewed_at?: string | null
          reviewed_by?: string | null
        }
        Update: {
          auto_action_taken?: string | null
          created_at?: string
          fraud_probability?: number
          id?: string
          indicators?: Json | null
          recommendation?: string | null
          report_id?: string | null
          reviewed?: boolean | null
          reviewed_at?: string | null
          reviewed_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fraud_analysis_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "stolen_items"
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
          email_notifications_enabled: boolean | null
          free_searches_used: number | null
          full_name: string | null
          id: string
          is_promotion_winner: boolean | null
          is_trial_expired: boolean | null
          monthly_verification_limit: number | null
          promotion_expires_at: string | null
          promotion_searches_remaining: number | null
          search_count: number
          search_count_reset_at: string | null
          stripe_customer_id: string | null
          subscription_end: string | null
          subscription_interval: string | null
          subscription_tier: string | null
          terms_accepted: boolean | null
          terms_accepted_at: string | null
          trial_end_date: string | null
          trial_started_at: string | null
          updated_at: string
          verifications_used_this_month: number | null
        }
        Insert: {
          avatar_url?: string | null
          billing_cycle_start_date?: string | null
          created_at?: string
          credit_balance?: number | null
          email?: string | null
          email_notifications_enabled?: boolean | null
          free_searches_used?: number | null
          full_name?: string | null
          id: string
          is_promotion_winner?: boolean | null
          is_trial_expired?: boolean | null
          monthly_verification_limit?: number | null
          promotion_expires_at?: string | null
          promotion_searches_remaining?: number | null
          search_count?: number
          search_count_reset_at?: string | null
          stripe_customer_id?: string | null
          subscription_end?: string | null
          subscription_interval?: string | null
          subscription_tier?: string | null
          terms_accepted?: boolean | null
          terms_accepted_at?: string | null
          trial_end_date?: string | null
          trial_started_at?: string | null
          updated_at?: string
          verifications_used_this_month?: number | null
        }
        Update: {
          avatar_url?: string | null
          billing_cycle_start_date?: string | null
          created_at?: string
          credit_balance?: number | null
          email?: string | null
          email_notifications_enabled?: boolean | null
          free_searches_used?: number | null
          full_name?: string | null
          id?: string
          is_promotion_winner?: boolean | null
          is_trial_expired?: boolean | null
          monthly_verification_limit?: number | null
          promotion_expires_at?: string | null
          promotion_searches_remaining?: number | null
          search_count?: number
          search_count_reset_at?: string | null
          stripe_customer_id?: string | null
          subscription_end?: string | null
          subscription_interval?: string | null
          subscription_tier?: string | null
          terms_accepted?: boolean | null
          terms_accepted_at?: string | null
          trial_end_date?: string | null
          trial_started_at?: string | null
          updated_at?: string
          verifications_used_this_month?: number | null
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
      shared_reports: {
        Row: {
          created_at: string | null
          id: string
          share_code: string
          stolen_item_id: string | null
          views: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          share_code: string
          stolen_item_id?: string | null
          views?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          share_code?: string
          stolen_item_id?: string | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_reports_stolen_item_id_fkey"
            columns: ["stolen_item_id"]
            isOneToOne: false
            referencedRelation: "stolen_items"
            referencedColumns: ["id"]
          },
        ]
      }
      stolen_items: {
        Row: {
          brand: string | null
          created_at: string
          date_stolen: string | null
          description: string | null
          id: string
          imei: string | null
          item_type: string
          location: string | null
          model: string | null
          police_report_number: string | null
          serial_number: string | null
          status: string
          updated_at: string
          user_id: string | null
          vin: string | null
        }
        Insert: {
          brand?: string | null
          created_at?: string
          date_stolen?: string | null
          description?: string | null
          id?: string
          imei?: string | null
          item_type: string
          location?: string | null
          model?: string | null
          police_report_number?: string | null
          serial_number?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
          vin?: string | null
        }
        Update: {
          brand?: string | null
          created_at?: string
          date_stolen?: string | null
          description?: string | null
          id?: string
          imei?: string | null
          item_type?: string
          location?: string | null
          model?: string | null
          police_report_number?: string | null
          serial_number?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
          vin?: string | null
        }
        Relationships: []
      }
      stripe_webhook_events: {
        Row: {
          created_at: string | null
          error_message: string | null
          event_type: string
          id: string
          processed_at: string | null
          stripe_event_id: string
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          event_type: string
          id?: string
          processed_at?: string | null
          stripe_event_id: string
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          event_type?: string
          id?: string
          processed_at?: string | null
          stripe_event_id?: string
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
      user_watchlist: {
        Row: {
          alert_email: boolean | null
          created_at: string | null
          description: string | null
          id: string
          identifier: string
          item_type: string
          user_id: string
        }
        Insert: {
          alert_email?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: string
          identifier: string
          item_type: string
          user_id: string
        }
        Update: {
          alert_email?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: string
          identifier?: string
          item_type?: string
          user_id?: string
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
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          item_type: string
          result?: Json | null
          serial_number: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          item_type?: string
          result?: Json | null
          serial_number?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_auth_rate_limit: { Args: never; Returns: boolean }
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
      clean_expired_pending_verifications: { Args: never; Returns: undefined }
      generate_api_key: { Args: never; Returns: string }
      generate_unique_clean_slug: {
        Args: { input_slug: string; post_id: string }
        Returns: string
      }
      get_complete_schema: { Args: never; Returns: Json }
      get_current_user_role: { Args: never; Returns: string }
      get_newsletter_subscriber_count: { Args: never; Returns: number }
      get_public_community_stories: {
        Args: never
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
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      increment_search_count: { Args: { user_id: string }; Returns: number }
      is_admin: { Args: never; Returns: boolean }
      is_admin_user: { Args: never; Returns: boolean }
      is_authenticated_user: { Args: never; Returns: boolean }
      is_service_role: { Args: never; Returns: boolean }
      is_service_role_or_admin: { Args: never; Returns: boolean }
      reset_monthly_verifications: { Args: never; Returns: undefined }
      subscribe_to_newsletter: { Args: { user_email: string }; Returns: Json }
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
        Args: { key_user_id: string }
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
