-- Enable required extension for UUID generation if not already enabled
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Helper function to auto-update updated_at timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create table for secure OAuth token storage
CREATE TABLE IF NOT EXISTS public.oauth_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  provider TEXT NOT NULL CHECK (provider IN (
    'google','apple','facebook','github','microsoft','slack','discord','x','linkedin','custom'
  )),
  access_token TEXT,
  refresh_token TEXT,
  id_token TEXT,
  scope TEXT,
  token_type TEXT,
  expires_at TIMESTAMPTZ,
  revoked BOOLEAN NOT NULL DEFAULT FALSE,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT user_provider_unique UNIQUE (user_id, provider)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_user_id ON public.oauth_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_provider ON public.oauth_tokens(provider);
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_revoked ON public.oauth_tokens(revoked);
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_expires_at ON public.oauth_tokens(expires_at);

-- Enable Row Level Security
ALTER TABLE public.oauth_tokens ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running migration safely
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'oauth_tokens'
  ) THEN
    -- Drop all existing policies to avoid duplicates when re-running
    EXECUTE 'DROP POLICY IF EXISTS "Users can view their own oauth tokens" ON public.oauth_tokens';
    EXECUTE 'DROP POLICY IF EXISTS "Users can insert their own oauth tokens" ON public.oauth_tokens';
    EXECUTE 'DROP POLICY IF EXISTS "Users can update their own oauth tokens" ON public.oauth_tokens';
    EXECUTE 'DROP POLICY IF EXISTS "Users can delete their own oauth tokens" ON public.oauth_tokens';
  END IF;
END $$;

-- Create strict RLS policies
CREATE POLICY "Users can view their own oauth tokens"
ON public.oauth_tokens
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own oauth tokens"
ON public.oauth_tokens
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own oauth tokens"
ON public.oauth_tokens
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own oauth tokens"
ON public.oauth_tokens
FOR DELETE
USING (auth.uid() = user_id);

-- Trigger to keep updated_at fresh
DROP TRIGGER IF EXISTS trg_oauth_tokens_updated_at ON public.oauth_tokens;
CREATE TRIGGER trg_oauth_tokens_updated_at
BEFORE UPDATE ON public.oauth_tokens
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();