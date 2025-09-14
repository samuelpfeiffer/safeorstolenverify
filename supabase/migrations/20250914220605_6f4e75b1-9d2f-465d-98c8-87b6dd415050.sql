-- Fix critical security issues identified in the SEO audit
-- Update function search paths to prevent security vulnerabilities

-- Fix search_path for all functions to prevent SQL injection
ALTER FUNCTION handle_new_user() SET search_path = public;
ALTER FUNCTION update_updated_at_column() SET search_path = public;

-- Review and tighten RLS policies that allow anonymous access
-- These policies should be restricted to authenticated users only

-- Update profiles table policies to be more secure
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
CREATE POLICY "Authenticated users can view profiles" 
ON profiles FOR SELECT 
USING (auth.role() = 'authenticated');

-- Secure AI analysis sessions - remove anonymous access
DROP POLICY IF EXISTS "Anonymous can create AI analysis sessions" ON ai_analysis_sessions;
CREATE POLICY "Authenticated users can create AI analysis sessions"
ON ai_analysis_sessions FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create a comprehensive security policy review trigger
CREATE OR REPLACE FUNCTION security_audit_log()
RETURNS TRIGGER AS $$
BEGIN
  -- Log all policy changes for security audit trail
  INSERT INTO security_logs (
    table_name, 
    operation, 
    user_id, 
    timestamp,
    details
  ) VALUES (
    TG_TABLE_NAME,
    TG_OP,
    auth.uid(),
    now(),
    jsonb_build_object('old', OLD, 'new', NEW)
  );
  
  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create security audit table if it doesn't exist
CREATE TABLE IF NOT EXISTS security_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  table_name TEXT NOT NULL,
  operation TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  details JSONB
);

-- Enable RLS on security logs
ALTER TABLE security_logs ENABLE ROW LEVEL SECURITY;

-- Only admins can view security logs
CREATE POLICY "Admin users can view security logs"
ON security_logs FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.user_id = auth.uid()
    AND profiles.role = 'admin'
  )
);