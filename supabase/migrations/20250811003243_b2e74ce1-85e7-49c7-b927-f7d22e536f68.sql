-- Patch migration to ensure oauth_tokens exists with required columns and policies
-- Do NOT run in parallel with other tools

-- Ensure helper function exists
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create table if missing (minimal skeleton)
CREATE TABLE IF NOT EXISTS public.oauth_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  provider TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Ensure required columns exist
ALTER TABLE public.oauth_tokens
  ADD COLUMN IF NOT EXISTS access_token TEXT,
  ADD COLUMN IF NOT EXISTS refresh_token TEXT,
  ADD COLUMN IF NOT EXISTS id_token TEXT,
  ADD COLUMN IF NOT EXISTS scope TEXT,
  ADD COLUMN IF NOT EXISTS token_type TEXT,
  ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS revoked BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS metadata JSONB NOT NULL DEFAULT '{}'::jsonb;

-- Add provider whitelist constraint if missing
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint c
    JOIN pg_class t ON c.conrelid = t.oid
    JOIN pg_namespace n ON n.oid = t.relnamespace
    WHERE c.conname = 'oauth_tokens_provider_check'
      AND t.relname = 'oauth_tokens'
      AND n.nspname = 'public'
  ) THEN
    ALTER TABLE public.oauth_tokens
    ADD CONSTRAINT oauth_tokens_provider_check CHECK (provider IN (
      'google','apple','facebook','github','microsoft','slack','discord','x','linkedin','custom'
    ));
  END IF;
END $$;

-- Unique constraint on (user_id, provider)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint c
    JOIN pg_class t ON c.conrelid = t.oid
    JOIN pg_namespace n ON n.oid = t.relnamespace
    WHERE c.conname = 'user_provider_unique'
      AND t.relname = 'oauth_tokens'
      AND n.nspname = 'public'
  ) THEN
    ALTER TABLE public.oauth_tokens
    ADD CONSTRAINT user_provider_unique UNIQUE (user_id, provider);
  END IF;
END $$;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_user_id ON public.oauth_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_provider ON public.oauth_tokens(provider);
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_revoked ON public.oauth_tokens(revoked);
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_expires_at ON public.oauth_tokens(expires_at);

-- Enable RLS
ALTER TABLE public.oauth_tokens ENABLE ROW LEVEL SECURITY;

-- Recreate policies idempotently
DROP POLICY IF EXISTS "Users can view their own oauth tokens" ON public.oauth_tokens;
DROP POLICY IF EXISTS "Users can insert their own oauth tokens" ON public.oauth_tokens;
DROP POLICY IF EXISTS "Users can update their own oauth tokens" ON public.oauth_tokens;
DROP POLICY IF EXISTS "Users can delete their own oauth tokens" ON public.oauth_tokens;

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

-- Update trigger
DROP TRIGGER IF EXISTS trg_oauth_tokens_updated_at ON public.oauth_tokens;
CREATE TRIGGER trg_oauth_tokens_updated_at
BEFORE UPDATE ON public.oauth_tokens
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();