-- Security Fix: Require authentication for AI analysis sessions
-- This prevents anonymous users from creating sessions and ensures proper data ownership

-- First, set user_id to a system user for any existing NULL records
-- (In production, you may want to delete these or handle differently)
UPDATE public.ai_analysis_sessions 
SET user_id = (SELECT id FROM auth.users LIMIT 1)
WHERE user_id IS NULL;

-- Make user_id NOT NULL to enforce authentication
ALTER TABLE public.ai_analysis_sessions 
ALTER COLUMN user_id SET NOT NULL;

-- Drop and recreate policies with proper authentication requirements
DROP POLICY IF EXISTS "Authenticated users can create AI analysis sessions" ON public.ai_analysis_sessions;
DROP POLICY IF EXISTS "Authenticated users can update their own AI analysis sessions" ON public.ai_analysis_sessions;
DROP POLICY IF EXISTS "Authenticated users can view their own AI analysis sessions" ON public.ai_analysis_sessions;

-- Create stricter policies that require authentication AND ownership
CREATE POLICY "Users can create their own AI analysis sessions"
ON public.ai_analysis_sessions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own AI analysis sessions"
ON public.ai_analysis_sessions
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own AI analysis sessions"
ON public.ai_analysis_sessions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Service role policy remains unchanged for backend operations
-- (already exists: "Service role can manage all AI analysis sessions")

-- Add audit logging for security review
INSERT INTO public.audit_logs (
  user_id, action, table_name, new_values
) VALUES (
  NULL,
  'SECURITY_MIGRATION_APPLIED',
  'ai_analysis_sessions',
  jsonb_build_object(
    'migration', 'require_authentication_for_ai_sessions',
    'timestamp', NOW(),
    'description', 'Made user_id required and updated RLS policies'
  )
);