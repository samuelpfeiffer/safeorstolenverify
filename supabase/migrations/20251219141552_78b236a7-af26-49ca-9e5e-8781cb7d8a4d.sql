-- Fix stolen_item_notifications table schema - add missing columns
ALTER TABLE public.stolen_item_notifications 
  ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS error_message text,
  ADD COLUMN IF NOT EXISTS sent_at timestamp with time zone,
  ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone DEFAULT now(),
  ADD COLUMN IF NOT EXISTS searched_identifier text,
  ADD COLUMN IF NOT EXISTS search_date timestamp with time zone,
  ADD COLUMN IF NOT EXISTS notification_data jsonb;

-- Add index on status for performance
CREATE INDEX IF NOT EXISTS idx_stolen_item_notifications_status 
ON public.stolen_item_notifications(status);

-- Add trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_notification_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS update_notification_timestamp ON public.stolen_item_notifications;
CREATE TRIGGER update_notification_timestamp
BEFORE UPDATE ON public.stolen_item_notifications
FOR EACH ROW EXECUTE FUNCTION public.update_notification_updated_at();

-- Fix newsletter RLS policy - drop overly permissive policy
DROP POLICY IF EXISTS "Newsletter managed by secure functions" ON public.newsletter_subscribers;