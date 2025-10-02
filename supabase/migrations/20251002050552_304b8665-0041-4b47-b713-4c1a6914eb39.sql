-- Check if cron extension is already enabled, if not enable it
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_cron') THEN
        CREATE EXTENSION pg_cron;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_net') THEN
        CREATE EXTENSION pg_net;
    END IF;
END $$;

-- Remove any existing cron jobs with same names to avoid conflicts
SELECT cron.unschedule(jobid)
FROM cron.job
WHERE jobname IN (
  'autonomous-error-fixer-5min',
  'ai-executive-team-5min', 
  'health-monitor-5min',
  'seo-optimizer-5min'
);

-- Schedule AI Error Fixer to run every 5 minutes
SELECT cron.schedule(
  'autonomous-error-fixer-5min',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-error-fixer',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI"}'::jsonb,
    body:=jsonb_build_object('timestamp', now()::text)
  );
  $$
);

-- Schedule AI Executive Team to run every 5 minutes
SELECT cron.schedule(
  'ai-executive-team-5min',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/ai-executive-orchestrator',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI"}'::jsonb,
    body:=jsonb_build_object('timestamp', now()::text)
  );
  $$
);

-- Schedule Health Monitor to run every 5 minutes
SELECT cron.schedule(
  'health-monitor-5min',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-health-monitor',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI"}'::jsonb,
    body:=jsonb_build_object('timestamp', now()::text)
  );
  $$
);

-- Schedule SEO Optimizer to run every 5 minutes  
SELECT cron.schedule(
  'seo-optimizer-5min',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-seo-optimizer',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI"}'::jsonb,
    body:=jsonb_build_object('timestamp', now()::text)
  );
  $$
);