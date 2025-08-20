-- Create table to store pending verification data during auth flow
CREATE TABLE public.pending_verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  serial_number TEXT NOT NULL,
  item_type TEXT,
  user_intent TEXT CHECK (user_intent IN ('buyer', 'seller')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '1 hour')
);

-- Enable RLS
ALTER TABLE public.pending_verifications ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous users to insert and select their own session data
CREATE POLICY "pending_verifications_session_access" ON public.pending_verifications
FOR ALL
USING (true)
WITH CHECK (true);

-- Add search counter to profiles table if not exists
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS search_count INTEGER NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS search_count_reset_at TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Create function to clean up expired pending verifications
CREATE OR REPLACE FUNCTION clean_expired_pending_verifications()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM public.pending_verifications 
  WHERE expires_at < now();
END;
$$;