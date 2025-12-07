-- Allow anonymous users to insert verification searches with null user_id for free searches
-- This enables the "verify first, signup later" flow

-- First, make user_id nullable if it isn't already
ALTER TABLE public.verification_searches 
ALTER COLUMN user_id DROP NOT NULL;

-- Add policy for anonymous inserts (null user_id)
CREATE POLICY "Anonymous users can insert searches" ON public.verification_searches
FOR INSERT
TO anon
WITH CHECK (user_id IS NULL);

-- Add policy for anonymous users to view their own searches (by session/IP tracking)
CREATE POLICY "Anonymous users can view recent searches" ON public.verification_searches
FOR SELECT
TO anon
USING (
  user_id IS NULL 
  AND created_at > NOW() - INTERVAL '1 hour'
);