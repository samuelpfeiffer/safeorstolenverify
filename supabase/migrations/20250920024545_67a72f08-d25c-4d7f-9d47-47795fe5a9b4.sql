-- Create a cron job to run blog automation daily at 10 AM
SELECT cron.schedule(
  'automated-blog-generation',
  '0 10 * * *', -- Daily at 10:00 AM UTC
  $$
  SELECT
    net.http_post(
        url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/schedule-blog-automation',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoyMDE1NTU1NTU1fQ.DUMMY_SIGNATURE"}'::jsonb,
        body:='{"scheduled": true, "time": "' || now() || '"}'::jsonb
    ) as request_id;
  $$
);

-- Also create an additional cron job for weekend content (runs at 2 PM on Saturdays)
SELECT cron.schedule(
  'weekend-blog-generation',
  '0 14 * * 6', -- Saturdays at 2:00 PM UTC
  $$
  SELECT
    net.http_post(
        url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/schedule-blog-automation',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoyMDE1NTU1NTU1fQ.DUMMY_SIGNATURE"}'::jsonb,
        body:='{"scheduled": true, "weekend": true, "time": "' || now() || '"}'::jsonb
    ) as request_id;
  $$
);