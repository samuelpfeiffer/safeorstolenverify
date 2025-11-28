-- Additional pg_cron jobs for enhanced autonomous AI system

-- Master Scheduler: Run every 6 hours for continuous orchestration
SELECT cron.schedule(
  'master-scheduler-6h',
  '0 */6 * * *',
  $$
  SELECT net.http_post(
    url := 'https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-master-scheduler',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI'
    ),
    body := jsonb_build_object('time', now()::text)
  ) as request_id;
  $$
);

-- SEO Executor: Run daily at 2 AM UTC
SELECT cron.schedule(
  'seo-executor-daily',
  '0 2 * * *',
  $$
  SELECT net.http_post(
    url := 'https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/seo-executor',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI'
    ),
    body := jsonb_build_object('time', now()::text)
  ) as request_id;
  $$
);

-- Competitor Tracker: Run weekly on Sunday at 4 AM UTC
SELECT cron.schedule(
  'competitor-tracker-weekly',
  '0 4 * * 0',
  $$
  SELECT net.http_post(
    url := 'https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/competitor-tracker',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI'
    ),
    body := jsonb_build_object('time', now()::text)
  ) as request_id;
  $$
);
