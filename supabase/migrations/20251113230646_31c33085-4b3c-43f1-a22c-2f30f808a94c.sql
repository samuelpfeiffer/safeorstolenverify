-- Add email notification preferences to profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS email_notifications_enabled BOOLEAN DEFAULT true;

-- Create function to notify users about newly reported stolen items
CREATE OR REPLACE FUNCTION notify_users_of_stolen_item()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  affected_users RECORD;
  notification_payload JSONB;
BEGIN
  -- Build the notification payload
  notification_payload := jsonb_build_object(
    'stolen_item_id', NEW.id,
    'item_type', NEW.item_type,
    'brand', NEW.brand,
    'model', NEW.model,
    'imei', NEW.imei,
    'vin', NEW.vin,
    'serial_number', NEW.serial_number,
    'date_stolen', NEW.date_stolen,
    'location', NEW.location,
    'police_report_number', NEW.police_report_number
  );

  -- Find all users who previously searched for this item
  FOR affected_users IN
    SELECT DISTINCT 
      p.id,
      p.email,
      p.full_name,
      vs.serial_number,
      vs.created_at as search_date
    FROM verification_searches vs
    INNER JOIN profiles p ON vs.user_id = p.id
    WHERE p.email_notifications_enabled = true
      AND (
        (NEW.imei IS NOT NULL AND vs.serial_number = NEW.imei) OR
        (NEW.vin IS NOT NULL AND vs.serial_number = NEW.vin) OR
        (NEW.serial_number IS NOT NULL AND vs.serial_number = NEW.serial_number)
      )
      -- Only notify users who searched before the item was reported stolen
      AND vs.created_at < NEW.created_at
  LOOP
    -- Insert into a notifications queue table for the edge function to process
    INSERT INTO stolen_item_notifications (
      user_id,
      user_email,
      user_name,
      stolen_item_id,
      searched_identifier,
      search_date,
      notification_data,
      status
    ) VALUES (
      affected_users.id,
      affected_users.email,
      affected_users.full_name,
      NEW.id,
      affected_users.serial_number,
      affected_users.search_date,
      notification_payload,
      'pending'
    );
  END LOOP;

  RETURN NEW;
END;
$$;

-- Create notifications queue table
CREATE TABLE IF NOT EXISTS stolen_item_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  user_name TEXT,
  stolen_item_id UUID NOT NULL REFERENCES stolen_items(id) ON DELETE CASCADE,
  searched_identifier TEXT NOT NULL,
  search_date TIMESTAMP WITH TIME ZONE NOT NULL,
  notification_data JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'sent', 'failed'
  error_message TEXT,
  sent_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS idx_notifications_status ON stolen_item_notifications(status);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON stolen_item_notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_created ON stolen_item_notifications(created_at DESC);

-- Enable RLS on notifications table
ALTER TABLE stolen_item_notifications ENABLE ROW LEVEL SECURITY;

-- Users can view their own notifications
CREATE POLICY "Users can view own notifications" ON stolen_item_notifications
  FOR SELECT USING (auth.uid() = user_id);

-- Create trigger on stolen_items table
DROP TRIGGER IF EXISTS notify_stolen_item_trigger ON stolen_items;
CREATE TRIGGER notify_stolen_item_trigger
  AFTER INSERT ON stolen_items
  FOR EACH ROW
  EXECUTE FUNCTION notify_users_of_stolen_item();

-- Create function to update notification status
CREATE OR REPLACE FUNCTION update_notification_status(
  notification_id UUID,
  new_status TEXT,
  error_msg TEXT DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE stolen_item_notifications
  SET 
    status = new_status,
    error_message = error_msg,
    sent_at = CASE WHEN new_status = 'sent' THEN NOW() ELSE sent_at END,
    updated_at = NOW()
  WHERE id = notification_id;
END;
$$;

COMMENT ON TABLE stolen_item_notifications IS 'Queue for email notifications when previously verified items are reported stolen';
COMMENT ON FUNCTION notify_users_of_stolen_item() IS 'Triggered when new stolen item is reported - queues notifications for users who previously verified the item';
COMMENT ON FUNCTION update_notification_status(UUID, TEXT, TEXT) IS 'Updates the status of a notification after email send attempt';