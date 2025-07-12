
-- First, let's check existing policies and only create the missing ones

-- Enable Row Level Security on tables that don't have it yet
DO $$
BEGIN
    -- Check and enable RLS on profiles if not already enabled
    IF NOT (SELECT pg_class.relrowsecurity FROM pg_class WHERE relname = 'profiles') THEN
        ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
    END IF;
    
    -- Check and enable RLS on verification_searches if not already enabled
    IF NOT (SELECT pg_class.relrowsecurity FROM pg_class WHERE relname = 'verification_searches') THEN
        ALTER TABLE public.verification_searches ENABLE ROW LEVEL SECURITY;
    END IF;
    
    -- Check and enable RLS on receipts if not already enabled
    IF NOT (SELECT pg_class.relrowsecurity FROM pg_class WHERE relname = 'receipts') THEN
        ALTER TABLE public.receipts ENABLE ROW LEVEL SECURITY;
    END IF;
    
    -- Check and enable RLS on terms_acceptance if not already enabled
    IF NOT (SELECT pg_class.relrowsecurity FROM pg_class WHERE relname = 'terms_acceptance') THEN
        ALTER TABLE public.terms_acceptance ENABLE ROW LEVEL SECURITY;
    END IF;
END $$;

-- Create RLS policies only if they don't exist
DO $$
BEGIN
    -- Profiles table policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can view their own profile') THEN
        EXECUTE 'CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id)';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can update their own profile') THEN
        EXECUTE 'CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id)';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Service role can insert profiles') THEN
        EXECUTE 'CREATE POLICY "Service role can insert profiles" ON public.profiles FOR INSERT WITH CHECK (true)';
    END IF;
    
    -- Verification searches table policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'verification_searches' AND policyname = 'Users can view their own verification searches') THEN
        EXECUTE 'CREATE POLICY "Users can view their own verification searches" ON public.verification_searches FOR SELECT USING (auth.uid() = user_id)';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'verification_searches' AND policyname = 'Users can insert their own verification searches') THEN
        EXECUTE 'CREATE POLICY "Users can insert their own verification searches" ON public.verification_searches FOR INSERT WITH CHECK (auth.uid() = user_id)';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'verification_searches' AND policyname = 'Users can update their own verification searches') THEN
        EXECUTE 'CREATE POLICY "Users can update their own verification searches" ON public.verification_searches FOR UPDATE USING (auth.uid() = user_id)';
    END IF;
    
    -- Receipts table policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'receipts' AND policyname = 'Users can view their own receipts') THEN
        EXECUTE 'CREATE POLICY "Users can view their own receipts" ON public.receipts FOR SELECT USING (auth.uid() = user_id)';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'receipts' AND policyname = 'Users can insert their own receipts') THEN
        EXECUTE 'CREATE POLICY "Users can insert their own receipts" ON public.receipts FOR INSERT WITH CHECK (auth.uid() = user_id)';
    END IF;
    
    -- Terms acceptance table policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'terms_acceptance' AND policyname = 'Users can view their own terms acceptance') THEN
        EXECUTE 'CREATE POLICY "Users can view their own terms acceptance" ON public.terms_acceptance FOR SELECT USING (auth.uid() = user_id)';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'terms_acceptance' AND policyname = 'Users can insert their own terms acceptance') THEN
        EXECUTE 'CREATE POLICY "Users can insert their own terms acceptance" ON public.terms_acceptance FOR INSERT WITH CHECK (auth.uid() = user_id)';
    END IF;
END $$;

-- Update foreign key constraints to be NOT NULL where needed (only if they're currently nullable)
DO $$
BEGIN
    -- Check if verification_searches.user_id is nullable and update if needed
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'verification_searches' 
        AND column_name = 'user_id' 
        AND is_nullable = 'YES'
    ) THEN
        ALTER TABLE public.verification_searches ALTER COLUMN user_id SET NOT NULL;
    END IF;
    
    -- Check if receipts.user_id is nullable and update if needed
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'receipts' 
        AND column_name = 'user_id' 
        AND is_nullable = 'YES'
    ) THEN
        ALTER TABLE public.receipts ALTER COLUMN user_id SET NOT NULL;
    END IF;
    
    -- Check if terms_acceptance.user_id is nullable and update if needed
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'terms_acceptance' 
        AND column_name = 'user_id' 
        AND is_nullable = 'YES'
    ) THEN
        ALTER TABLE public.terms_acceptance ALTER COLUMN user_id SET NOT NULL;
    END IF;
END $$;

-- Ensure the trigger exists for profile creation
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'on_auth_user_created'
    ) THEN
        CREATE TRIGGER on_auth_user_created
            AFTER INSERT ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
    END IF;
END $$;
