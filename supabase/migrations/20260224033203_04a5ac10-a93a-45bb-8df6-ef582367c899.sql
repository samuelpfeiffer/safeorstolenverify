
-- usage_tracking: add missing columns
ALTER TABLE public.usage_tracking
  ADD COLUMN IF NOT EXISTS check_type text,
  ADD COLUMN IF NOT EXISTS identifier text,
  ADD COLUMN IF NOT EXISTS result jsonb;

CREATE INDEX IF NOT EXISTS idx_usage_tracking_fingerprint ON public.usage_tracking(fingerprint);
CREATE INDEX IF NOT EXISTS idx_usage_tracking_user_id ON public.usage_tracking(user_id);

-- subscriptions: set user_id NOT NULL where possible, update defaults
ALTER TABLE public.subscriptions
  ALTER COLUMN plan SET DEFAULT 'free',
  ALTER COLUMN checks_limit SET DEFAULT 2;

-- Add checks_used column (existing code uses checks_used_this_month, keep both)
ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS checks_used integer DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_customer_id ON public.subscriptions(stripe_customer_id);

-- email_leads: add unique constraint on email
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'email_leads_email_unique'
  ) THEN
    ALTER TABLE public.email_leads ADD CONSTRAINT email_leads_email_unique UNIQUE (email);
  END IF;
END $$;
