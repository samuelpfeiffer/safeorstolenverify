-- Security Fix: Add admin user to user_roles table
-- This migration provides a template to add your first admin user
-- IMPORTANT: Replace 'YOUR_USER_ID_HERE' with your actual user ID

-- Step 1: Find your user ID (run this query separately in SQL Editor):
-- SELECT id, email FROM auth.users WHERE email = 'your-email@domain.com';

-- Step 2: Once you have your user ID, uncomment and run this insert:
-- INSERT INTO public.user_roles (user_id, role)
-- VALUES ('YOUR_USER_ID_HERE'::uuid, 'admin'::app_role)
-- ON CONFLICT (user_id, role) DO NOTHING;

-- Example usage:
-- INSERT INTO public.user_roles (user_id, role)
-- VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567890'::uuid, 'admin'::app_role)
-- ON CONFLICT (user_id, role) DO NOTHING;

-- This is a template migration to guide you through adding an admin user
-- The actual INSERT is commented out because we don't know your user ID yet
-- Follow the steps above to complete the setup