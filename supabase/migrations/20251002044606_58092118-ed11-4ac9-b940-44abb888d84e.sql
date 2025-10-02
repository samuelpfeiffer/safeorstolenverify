-- Create a table to track autonomous system metrics
CREATE TABLE IF NOT EXISTS public.autonomous_system_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_type TEXT NOT NULL,
  metric_value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.autonomous_system_metrics ENABLE ROW LEVEL SECURITY;

-- Allow admins to view metrics
CREATE POLICY "Admin can view autonomous metrics"
  ON public.autonomous_system_metrics
  FOR SELECT
  USING (is_admin_user());

-- Allow system to insert metrics
CREATE POLICY "System can insert metrics"
  ON public.autonomous_system_metrics
  FOR INSERT
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_autonomous_metrics_type_created 
  ON public.autonomous_system_metrics(metric_type, created_at DESC);
