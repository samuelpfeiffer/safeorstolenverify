-- Security Fix: Require authentication for AI feedback
-- This ensures all feedback is tied to authenticated users

-- First, handle any existing NULL user_id records
-- Set them to a system user or delete them (deleting orphaned feedback)
DELETE FROM public.ai_feedback WHERE user_id IS NULL;

-- Make user_id NOT NULL to enforce authentication
ALTER TABLE public.ai_feedback 
ALTER COLUMN user_id SET NOT NULL;

-- The existing RLS policies are already good:
-- "Authenticated users can manage their own feedback" requires auth.uid() = user_id
-- No changes needed to policies

-- Add audit logging
INSERT INTO public.audit_logs (
  user_id, action, table_name, new_values
) VALUES (
  NULL,
  'SECURITY_MIGRATION_APPLIED',
  'ai_feedback',
  jsonb_build_object(
    'migration', 'require_authentication_for_ai_feedback',
    'timestamp', NOW(),
    'description', 'Made user_id required - all feedback must be from authenticated users'
  )
);