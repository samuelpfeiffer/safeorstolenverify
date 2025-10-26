-- Add search_count column to profiles table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles' 
    AND column_name = 'search_count'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN search_count INTEGER DEFAULT 0;
  END IF;
END $$;

-- Add search_count_reset_at column to profiles table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles' 
    AND column_name = 'search_count_reset_at'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN search_count_reset_at TIMESTAMPTZ;
  END IF;
END $$;

-- Create function to increment search count
CREATE OR REPLACE FUNCTION public.increment_search_count(user_id UUID)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count INTEGER;
BEGIN
  UPDATE public.profiles
  SET search_count = search_count + 1
  WHERE id = user_id
  RETURNING search_count INTO new_count;
  
  RETURN new_count;
END;
$$;