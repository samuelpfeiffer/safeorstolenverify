-- =====================================================
-- AUTONOMOUS REVENUE SYSTEM - CRON JOBS SETUP
-- =====================================================
-- INSTRUCTIONS:
-- 1. Copy this entire SQL script
-- 2. Go to: https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/sql/new
-- 3. Paste and replace YOUR_SERVICE_ROLE_KEY with your actual service role key
--    (Find it at: Settings → API → service_role (secret))
-- 4. Click "Run" to execute
-- =====================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- ===== REVENUE CRITICAL =====
-- Collect metrics every hour
SELECT cron.schedule(
  'collect-metrics-hourly',
  '0 * * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/ai-metrics-collector',
    headers:='{"Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
  );
  $$
);

-- Revenue optimization daily at 3 AM
SELECT cron.schedule(
  'optimize-revenue-daily',
  '0 3 * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/ai-revenue-optimizer',
    headers:='{"Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
  );
  $$
);

-- AI Executive decisions twice daily (6 AM and 6 PM)
SELECT cron.schedule(
  'ai-executive-decisions',
  '0 6,18 * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/ai-executive-system',
    headers:='{"Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
  );
  $$
);

-- Content generation every 6 hours
SELECT cron.schedule(
  'generate-content',
  '0 */6 * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-content-generator',
    headers:='{"Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
  );
  $$
);

-- Auto-fix content issues every 6 hours
SELECT cron.schedule(
  'auto-fix-content',
  '30 */6 * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/auto-fix-content-issues',
    headers:='{"Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
  );
  $$
);

-- Learning system weekly (Sunday 2 AM)
SELECT cron.schedule(
  'ai-learning-weekly',
  '0 2 * * 0',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/ai-learning-system',
    headers:='{"Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
  );
  $$
);

-- Master autonomous cycle (Full system check daily at midnight)
SELECT cron.schedule(
  'master-autonomous-daily',
  '0 0 * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-master-scheduler',
    headers:='{"Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
  );
  $$
);

-- =====================================================
-- VERIFY INSTALLATION
-- Run this query to verify cron jobs are active:
-- SELECT * FROM cron.job;
-- 
-- You should see 7 jobs listed.
-- =====================================================
