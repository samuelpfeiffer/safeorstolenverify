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
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          is_promotion_winner: boolean | null
          promotion_expires_at: string | null
          promotion_searches_remaining: number | null
          terms_accepted: boolean | null
          terms_accepted_at: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          is_promotion_winner?: boolean | null
          promotion_expires_at?: string | null
          promotion_searches_remaining?: number | null
          terms_accepted?: boolean | null
          terms_accepted_at?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          is_promotion_winner?: boolean | null
          promotion_expires_at?: string | null
          promotion_searches_remaining?: number | null
          terms_accepted?: boolean | null
          terms_accepted_at?: string | null
          updated_at?: string
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
      verification_results: {
        Row: {
          api_response: Json | null
          api_source: string
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
      clean_expired_checkmend_cache: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_expired_tokens: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      is_authenticated_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      subscribe_to_newsletter: {
        Args: { user_email: string }
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
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
