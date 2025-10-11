-- Add subscription tier fields to profiles table
ALTER TABLE profiles 
  ADD COLUMN IF NOT EXISTS subscription_tier TEXT DEFAULT 'free',
  ADD COLUMN IF NOT EXISTS monthly_verification_limit INTEGER DEFAULT 2,
  ADD COLUMN IF NOT EXISTS verifications_used_this_month INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS billing_cycle_start_date TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS trial_end_date TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS is_trial_expired BOOLEAN DEFAULT FALSE;

-- Set trial_end_date for existing users (14 days from signup)
UPDATE profiles 
SET trial_end_date = created_at + INTERVAL '14 days'
WHERE trial_end_date IS NULL;

-- Create subscription_history table for billing audit trail
CREATE TABLE IF NOT EXISTS subscription_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  subscription_tier TEXT NOT NULL,
  billing_period_start TIMESTAMP WITH TIME ZONE NOT NULL,
  billing_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
  verifications_included INTEGER NOT NULL,
  verifications_used INTEGER DEFAULT 0,
  overage_charges NUMERIC DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_subscription_history_user_period 
ON subscription_history(user_id, billing_period_start);

-- Enable RLS on subscription_history
ALTER TABLE subscription_history ENABLE ROW LEVEL SECURITY;

-- Users can view their own subscription history
CREATE POLICY "Users can view own subscription history"
ON subscription_history FOR SELECT
USING (auth.uid() = user_id);

-- Service role can manage subscription history
CREATE POLICY "Service role can manage subscription history"
ON subscription_history FOR ALL
USING (auth.role() = 'service_role');

-- Add billing tracking to verification_results
ALTER TABLE verification_results 
  ADD COLUMN IF NOT EXISTS billed_as TEXT,
  ADD COLUMN IF NOT EXISTS overage_cost NUMERIC;

-- Create function for monthly quota reset
CREATE OR REPLACE FUNCTION reset_monthly_verifications()
RETURNS void AS $$
BEGIN
  UPDATE profiles
  SET 
    verifications_used_this_month = 0,
    billing_cycle_start_date = NOW()
  WHERE 
    subscription_tier IN ('starter', 'personal', 'professional', 'enterprise')
    AND billing_cycle_start_date < NOW() - INTERVAL '1 month';
    
  -- Log the reset in audit logs
  INSERT INTO audit_logs (action, table_name, new_values)
  VALUES (
    'MONTHLY_QUOTA_RESET',
    'profiles',
    jsonb_build_object(
      'reset_count', (SELECT COUNT(*) FROM profiles 
                      WHERE subscription_tier IN ('starter', 'personal', 'professional', 'enterprise')
                      AND billing_cycle_start_date < NOW() - INTERVAL '1 month'),
      'timestamp', NOW()
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update RLS policies on profiles to prevent subscription field manipulation
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Users can update safe profile fields only (not subscription fields)
CREATE POLICY "Users can update safe profile fields"
ON profiles FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (
  auth.uid() = id AND
  -- Ensure subscription fields cannot be modified by user
  subscription_tier IS NOT DISTINCT FROM (SELECT subscription_tier FROM profiles WHERE id = auth.uid()) AND
  monthly_verification_limit IS NOT DISTINCT FROM (SELECT monthly_verification_limit FROM profiles WHERE id = auth.uid()) AND
  verifications_used_this_month IS NOT DISTINCT FROM (SELECT verifications_used_this_month FROM profiles WHERE id = auth.uid()) AND
  billing_cycle_start_date IS NOT DISTINCT FROM (SELECT billing_cycle_start_date FROM profiles WHERE id = auth.uid()) AND
  trial_end_date IS NOT DISTINCT FROM (SELECT trial_end_date FROM profiles WHERE id = auth.uid()) AND
  is_trial_expired IS NOT DISTINCT FROM (SELECT is_trial_expired FROM profiles WHERE id = auth.uid())
);

-- Service role can modify all fields including subscription
CREATE POLICY "Service role can manage all profile fields"
ON profiles FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');