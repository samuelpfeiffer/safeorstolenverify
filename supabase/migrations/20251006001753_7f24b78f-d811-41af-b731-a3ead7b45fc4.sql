-- Add credit balance tracking to profiles
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS credit_balance INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS subscription_interval TEXT DEFAULT 'month';

-- Create credit transactions table for audit trail
CREATE TABLE IF NOT EXISTS credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  transaction_type TEXT NOT NULL CHECK (transaction_type IN ('purchase', 'usage', 'bonus', 'refund')),
  amount INTEGER NOT NULL,
  balance_after INTEGER NOT NULL,
  stripe_session_id TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_id ON credit_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_created_at ON credit_transactions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_credit_balance ON profiles(credit_balance);

-- Enable RLS on credit_transactions
ALTER TABLE credit_transactions ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own credit transactions
CREATE POLICY "Users can view their own credit transactions"
ON credit_transactions FOR SELECT
USING (auth.uid() = user_id);

-- Policy: Service role can manage all credit transactions
CREATE POLICY "Service role can manage all credit transactions"
ON credit_transactions FOR ALL
USING (auth.role() = 'service_role');