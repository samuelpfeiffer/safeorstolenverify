-- =====================================================
-- AUTONOMOUS BLOG GENERATION - 3X/WEEK (M/W/F at 9am UTC)
-- =====================================================

-- ===== MONDAY BLOG GENERATION =====
SELECT cron.schedule(
  'blog-automation-monday-9am',
  '0 9 * * 1',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/schedule-blog-automation',
    headers:='{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI", "Content-Type": "application/json"}'::jsonb,
    body:='{"automated": true, "day": "Monday"}'::jsonb
  );
  $$
);

-- ===== WEDNESDAY BLOG GENERATION =====
SELECT cron.schedule(
  'blog-automation-wednesday-9am',
  '0 9 * * 3',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/schedule-blog-automation',
    headers:='{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI", "Content-Type": "application/json"}'::jsonb,
    body:='{"automated": true, "day": "Wednesday"}'::jsonb
  );
  $$
);

-- ===== FRIDAY BLOG GENERATION =====
SELECT cron.schedule(
  'blog-automation-friday-9am',
  '0 9 * * 5',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/schedule-blog-automation',
    headers:='{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI", "Content-Type": "application/json"}'::jsonb,
    body:='{"automated": true, "day": "Friday"}'::jsonb
  );
  $$
);