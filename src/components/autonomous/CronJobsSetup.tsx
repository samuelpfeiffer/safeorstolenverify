import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Code } from 'lucide-react';

export const CronJobsSetup: React.FC = () => {
  const projectId = 'lxrdzbknktwlubbmlsqe';
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Cron Jobs Setup
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Code className="h-4 w-4" />
          <AlertDescription>
            To enable 24/7 autonomous operations, you need to enable pg_cron extension and set up scheduled jobs in Supabase.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Step 1: Enable Extensions</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Run this SQL in your Supabase SQL Editor:
            </p>
            <div className="bg-muted p-3 rounded-md font-mono text-sm">
              <code>
                CREATE EXTENSION IF NOT EXISTS pg_cron;<br />
                CREATE EXTENSION IF NOT EXISTS pg_net;
              </code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Step 2: Schedule Autonomous Functions</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Copy and run these SQL commands to schedule the autonomous systems:
            </p>
            
            <div className="space-y-3">
              <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                <code className="whitespace-pre-wrap break-all">
{`-- Error Fixer (every 5 minutes)
SELECT cron.schedule(
  'autonomous-error-fixer-every-5min',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-error-fixer',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI"}'::jsonb,
    body:=concat('{"time": "', now(), '"}')::jsonb
  ) as request_id;
  $$
);

-- SEO Optimizer (every 5 minutes)
SELECT cron.schedule(
  'autonomous-seo-optimizer-every-5min',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-seo-optimizer',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI"}'::jsonb,
    body:=concat('{"time": "', now(), '"}')::jsonb
  ) as request_id;
  $$
);

-- Health Monitor (every 10 minutes)
SELECT cron.schedule(
  'autonomous-health-monitor-every-10min',
  '*/10 * * * *',
  $$
  SELECT net.http_post(
    url:='https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/autonomous-health-monitor',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cmR6Ymtua3R3bHViYm1sc3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzE3MjAsImV4cCI6MjA2MjA0NzcyMH0.0ic5cOvgvV-tRy-tLAgGfXNJSEOkZD6-RwbG_3Gq2uI"}'::jsonb,
    body:=concat('{"time": "', now(), '"}')::jsonb
  ) as request_id;
  $$
);`}
                </code>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline">
              <a 
                href={`https://supabase.com/dashboard/project/${projectId}/sql/new`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Open SQL Editor
              </a>
            </Button>
            
            <Button asChild variant="outline">
              <a 
                href={`https://supabase.com/dashboard/project/${projectId}/database/extensions`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Manage Extensions
              </a>
            </Button>
          </div>
        </div>

        <Alert>
          <AlertDescription>
            Once cron jobs are set up, the system will automatically:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Detect and fix errors every 5 minutes</li>
              <li>Optimize SEO and outrank competitors every 5 minutes</li>
              <li>Monitor system health every 10 minutes</li>
            </ul>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};
