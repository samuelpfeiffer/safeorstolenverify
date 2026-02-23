
-- Usage tracking (anonymous + authenticated users via fingerprint)
CREATE TABLE IF NOT EXISTS public.usage_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fingerprint TEXT NOT NULL UNIQUE,
  user_id UUID,
  check_count INTEGER DEFAULT 0,
  last_check_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions (new paywall table)
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  fingerprint TEXT,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT UNIQUE,
  stripe_price_id TEXT,
  plan TEXT,
  status TEXT DEFAULT 'active',
  checks_used_this_month INTEGER DEFAULT 0,
  checks_limit INTEGER DEFAULT 50,
  period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Validation trigger for subscriptions plan field
CREATE OR REPLACE FUNCTION public.validate_subscription_plan()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.plan IS NOT NULL AND NEW.plan NOT IN ('single','basic','pro','business') THEN
    RAISE EXCEPTION 'Invalid plan value: %', NEW.plan;
  END IF;
  IF NEW.status IS NOT NULL AND NEW.status NOT IN ('active','cancelled','past_due') THEN
    RAISE EXCEPTION 'Invalid status value: %', NEW.status;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER validate_subscription_before_insert_update
  BEFORE INSERT OR UPDATE ON public.subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.validate_subscription_plan();

-- Email lead capture
CREATE TABLE IF NOT EXISTS public.email_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  source TEXT DEFAULT 'unknown',
  identifier_type TEXT,
  verdict TEXT,
  fingerprint TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- PDF certificates issued
CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  verification_id UUID,
  user_id UUID,
  fingerprint TEXT,
  identifier TEXT NOT NULL,
  identifier_type TEXT NOT NULL,
  verdict TEXT NOT NULL,
  trust_score INTEGER,
  pdf_url TEXT,
  share_token TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.usage_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Service role can do everything (Edge Functions use this)
CREATE POLICY "service_role_all_usage" ON public.usage_tracking
  FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all_subs" ON public.subscriptions
  FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all_leads" ON public.email_leads
  FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all_certs" ON public.certificates
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Users can read their own subscriptions
CREATE POLICY "users_read_own_subs" ON public.subscriptions
  FOR SELECT TO authenticated USING (user_id = auth.uid());

-- Users can read their own certificates
CREATE POLICY "users_read_own_certs" ON public.certificates
  FOR SELECT TO authenticated USING (user_id = auth.uid());

-- Public can read certificates by share_token (for shareable links)
CREATE POLICY "public_read_cert_by_token" ON public.certificates
  FOR SELECT TO anon USING (share_token IS NOT NULL);

-- Deny anonymous access to usage_tracking and email_leads
CREATE POLICY "deny_anon_usage_tracking" ON public.usage_tracking
  FOR ALL TO anon USING (false) WITH CHECK (false);
CREATE POLICY "deny_anon_email_leads" ON public.email_leads
  FOR ALL TO anon USING (false) WITH CHECK (false);
CREATE POLICY "deny_anon_subscriptions_write" ON public.subscriptions
  FOR ALL TO anon USING (false) WITH CHECK (false);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_usage_fingerprint ON public.usage_tracking(fingerprint);
CREATE INDEX IF NOT EXISTS idx_subs_user ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subs_fingerprint ON public.subscriptions(fingerprint);
CREATE INDEX IF NOT EXISTS idx_subs_stripe ON public.subscriptions(stripe_subscription_id);
