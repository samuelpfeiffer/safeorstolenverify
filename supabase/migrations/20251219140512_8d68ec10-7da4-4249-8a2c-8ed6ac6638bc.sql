-- =====================================================
-- SECURITY FIX: Tighten RLS policies on profiles and audit_logs
-- and create missing tables
-- =====================================================

-- 1. DROP problematic audit_logs policies that allow NULL user_id access
DROP POLICY IF EXISTS "authenticated_insert_audit" ON public.audit_logs;
DROP POLICY IF EXISTS "users_select_own_audit" ON public.audit_logs;

-- 2. Create stricter audit_logs policies
-- Users can only insert audit logs for themselves (not NULL)
CREATE POLICY "authenticated_users_insert_own_audit"
ON public.audit_logs
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Service role can insert system audit logs (for edge functions)
CREATE POLICY "service_role_insert_system_audit"
ON public.audit_logs
FOR INSERT
TO service_role
WITH CHECK (true);

-- Users can only view their own audit logs
CREATE POLICY "authenticated_users_view_own_audit"
ON public.audit_logs
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- 3. Ensure profiles table has no public access (drop any if they exist)
DROP POLICY IF EXISTS "public_can_view_profiles" ON public.profiles;
DROP POLICY IF EXISTS "anon_can_view_profiles" ON public.profiles;

-- 4. Create gsc_oauth_tokens table for Google Search Console integration
CREATE TABLE IF NOT EXISTS public.gsc_oauth_tokens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  access_token text NOT NULL,
  refresh_token text,
  token_type text DEFAULT 'Bearer',
  expires_at timestamp with time zone,
  scope text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS on gsc_oauth_tokens
ALTER TABLE public.gsc_oauth_tokens ENABLE ROW LEVEL SECURITY;

-- Only users can manage their own OAuth tokens
CREATE POLICY "users_manage_own_gsc_tokens"
ON public.gsc_oauth_tokens
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Service role can manage all tokens (for token refresh)
CREATE POLICY "service_role_manage_gsc_tokens"
ON public.gsc_oauth_tokens
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 5. Create stolen_item_notifications table
CREATE TABLE IF NOT EXISTS public.stolen_item_notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stolen_item_id uuid REFERENCES public.stolen_items(id) ON DELETE CASCADE,
  notification_type text NOT NULL,
  message text,
  is_read boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  read_at timestamp with time zone
);

-- Enable RLS on stolen_item_notifications
ALTER TABLE public.stolen_item_notifications ENABLE ROW LEVEL SECURITY;

-- Users can only view their own notifications
CREATE POLICY "users_view_own_notifications"
ON public.stolen_item_notifications
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can update their own notifications (mark as read)
CREATE POLICY "users_update_own_notifications"
ON public.stolen_item_notifications
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Service role can manage all notifications (for sending)
CREATE POLICY "service_role_manage_notifications"
ON public.stolen_item_notifications
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_gsc_oauth_tokens_user_id ON public.gsc_oauth_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_stolen_item_notifications_user_id ON public.stolen_item_notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_stolen_item_notifications_unread ON public.stolen_item_notifications(user_id, is_read) WHERE is_read = false;