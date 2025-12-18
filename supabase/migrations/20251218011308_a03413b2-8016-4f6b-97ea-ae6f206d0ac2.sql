-- Fix RLS policies for critical tables that are blocking authenticated users

-- 1. PROFILES TABLE - Users need to read/update their own profile
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;

CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
TO authenticated 
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE 
TO authenticated 
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
ON public.profiles FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = id);

-- 2. VERIFICATION_SEARCHES TABLE - Users need to manage their searches
DROP POLICY IF EXISTS "Users can view own searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can insert own searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can update own searches" ON public.verification_searches;

CREATE POLICY "Users can view own searches" 
ON public.verification_searches FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own searches" 
ON public.verification_searches FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own searches" 
ON public.verification_searches FOR UPDATE 
TO authenticated 
USING (auth.uid() = user_id);

-- 3. VERIFICATION_RESULTS TABLE
DROP POLICY IF EXISTS "Users can view own results" ON public.verification_results;
DROP POLICY IF EXISTS "Users can insert own results" ON public.verification_results;

CREATE POLICY "Users can view own results" 
ON public.verification_results FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own results" 
ON public.verification_results FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

-- 4. PURCHASES TABLE - Users need to view their purchases
DROP POLICY IF EXISTS "Users can view own purchases" ON public.purchases;
DROP POLICY IF EXISTS "Users can insert own purchases" ON public.purchases;

CREATE POLICY "Users can view own purchases" 
ON public.purchases FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own purchases" 
ON public.purchases FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

-- 5. CHECKOUT_SESSIONS TABLE
DROP POLICY IF EXISTS "Users can view own checkout sessions" ON public.checkout_sessions;
DROP POLICY IF EXISTS "Users can insert own checkout sessions" ON public.checkout_sessions;
DROP POLICY IF EXISTS "Users can update own checkout sessions" ON public.checkout_sessions;

CREATE POLICY "Users can view own checkout sessions" 
ON public.checkout_sessions FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own checkout sessions" 
ON public.checkout_sessions FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own checkout sessions" 
ON public.checkout_sessions FOR UPDATE 
TO authenticated 
USING (auth.uid() = user_id);

-- 6. RECEIPTS TABLE
DROP POLICY IF EXISTS "Users can view own receipts" ON public.receipts;
DROP POLICY IF EXISTS "Users can insert own receipts" ON public.receipts;

CREATE POLICY "Users can view own receipts" 
ON public.receipts FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own receipts" 
ON public.receipts FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

-- 7. SEARCH_HISTORY TABLE
DROP POLICY IF EXISTS "Users can view own search history" ON public.search_history;
DROP POLICY IF EXISTS "Users can insert own search history" ON public.search_history;

CREATE POLICY "Users can view own search history" 
ON public.search_history FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own search history" 
ON public.search_history FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

-- 8. CREDIT_TRANSACTIONS TABLE
DROP POLICY IF EXISTS "Users can view own credit transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "Users can insert own credit transactions" ON public.credit_transactions;

CREATE POLICY "Users can view own credit transactions" 
ON public.credit_transactions FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own credit transactions" 
ON public.credit_transactions FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);