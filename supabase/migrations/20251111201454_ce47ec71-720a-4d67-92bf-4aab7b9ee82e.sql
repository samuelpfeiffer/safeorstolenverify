-- Create stripe_webhook_events table for idempotency
CREATE TABLE IF NOT EXISTS public.stripe_webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_event_id TEXT NOT NULL UNIQUE,
  event_type TEXT NOT NULL,
  processed_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.stripe_webhook_events ENABLE ROW LEVEL SECURITY;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_stripe_webhook_events_event_id 
  ON public.stripe_webhook_events(stripe_event_id);

CREATE INDEX IF NOT EXISTS idx_stripe_webhook_events_processed 
  ON public.stripe_webhook_events(processed_at) 
  WHERE processed_at IS NOT NULL;

-- Only service role can access webhook events
CREATE POLICY "Service role can manage webhook events"
  ON public.stripe_webhook_events
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Add missing stripe_customer_id column to profiles if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles' 
    AND column_name = 'stripe_customer_id'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN stripe_customer_id TEXT;
    CREATE INDEX IF NOT EXISTS idx_profiles_stripe_customer_id 
      ON public.profiles(stripe_customer_id);
  END IF;
END $$;

COMMENT ON TABLE public.stripe_webhook_events IS 'Tracks Stripe webhook events for idempotency and debugging';