-- Enable pg_cron and pg_net extensions for scheduled jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Schedule daily blog generation at 9 AM UTC
SELECT cron.schedule(
  'generate-daily-blog-post',
  '0 9 * * *', -- Every day at 9 AM UTC
  $$
  SELECT
    net.http_post(
        url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/generate-daily-blog',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI"}'::jsonb,
        body:='{}'::jsonb
    ) as request_id;
  $$
);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA cron TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA cron TO postgres;