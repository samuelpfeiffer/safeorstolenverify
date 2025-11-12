-- Add free search tracking columns to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS free_searches_used INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS trial_started_at TIMESTAMP WITH TIME ZONE;

-- Add index for performance
CREATE INDEX IF NOT EXISTS idx_profiles_trial_status ON profiles(trial_started_at, free_searches_used);

-- Comment explaining the trial policy
COMMENT ON COLUMN profiles.free_searches_used IS 'Tracks number of free searches used during 14-day trial';
COMMENT ON COLUMN profiles.trial_started_at IS 'Timestamp when user first started their trial (first search)';