-- Add missing subscription_end column to profiles table for Stripe webhook compatibility
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS subscription_end TIMESTAMP WITH TIME ZONE;

-- Create index for subscription queries
CREATE INDEX IF NOT EXISTS idx_profiles_subscription_end ON profiles(subscription_end) WHERE subscription_end IS NOT NULL;

-- Add comment for documentation
COMMENT ON COLUMN profiles.subscription_end IS 'Subscription end date synced from Stripe webhook';