-- Create stolen_items table
CREATE TABLE IF NOT EXISTS public.stolen_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  item_type TEXT NOT NULL,
  brand TEXT,
  model TEXT,
  serial_number TEXT,
  imei TEXT,
  vin TEXT,
  description TEXT NOT NULL,
  date_stolen TIMESTAMP WITH TIME ZONE,
  location_stolen TEXT,
  police_report_number TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'recovered', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create stolen_item_notifications table
CREATE TABLE IF NOT EXISTS public.stolen_item_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  stolen_item_id UUID REFERENCES public.stolen_items(id) ON DELETE CASCADE,
  notification_type TEXT DEFAULT 'email' CHECK (notification_type IN ('email', 'sms', 'push')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
  notification_data JSONB DEFAULT '{}',
  searched_identifier TEXT,
  search_date TIMESTAMP WITH TIME ZONE,
  sent_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_stolen_items_user_id ON public.stolen_items(user_id);
CREATE INDEX IF NOT EXISTS idx_stolen_items_serial ON public.stolen_items(serial_number) WHERE serial_number IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_stolen_items_imei ON public.stolen_items(imei) WHERE imei IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_stolen_items_vin ON public.stolen_items(vin) WHERE vin IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_stolen_items_status ON public.stolen_items(status);
CREATE INDEX IF NOT EXISTS idx_stolen_item_notifications_user ON public.stolen_item_notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_stolen_item_notifications_status ON public.stolen_item_notifications(status);

-- Enable RLS
ALTER TABLE public.stolen_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stolen_item_notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for stolen_items
CREATE POLICY "Users can view their own stolen items"
  ON public.stolen_items
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own stolen items"
  ON public.stolen_items
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own stolen items"
  ON public.stolen_items
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own stolen items"
  ON public.stolen_items
  FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all stolen items"
  ON public.stolen_items
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- RLS Policies for stolen_item_notifications
CREATE POLICY "Users can view their own notifications"
  ON public.stolen_item_notifications
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all notifications"
  ON public.stolen_item_notifications
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Create trigger function to update updated_at
CREATE OR REPLACE FUNCTION public.update_stolen_items_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
DROP TRIGGER IF EXISTS update_stolen_items_updated_at_trigger ON public.stolen_items;
CREATE TRIGGER update_stolen_items_updated_at_trigger
  BEFORE UPDATE ON public.stolen_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_stolen_items_updated_at();

-- Create function to notify users when their searched items are reported stolen
CREATE OR REPLACE FUNCTION public.notify_users_of_stolen_item()
RETURNS TRIGGER AS $$
BEGIN
  -- Find users who previously searched for this item
  INSERT INTO public.stolen_item_notifications (
    user_id,
    stolen_item_id,
    notification_type,
    status,
    searched_identifier,
    search_date,
    notification_data
  )
  SELECT DISTINCT
    vs.user_id,
    NEW.id,
    'email',
    'pending',
    vs.identifier,
    vs.created_at,
    jsonb_build_object(
      'item_type', NEW.item_type,
      'brand', NEW.brand,
      'model', NEW.model,
      'date_stolen', NEW.date_stolen,
      'location_stolen', NEW.location_stolen
    )
  FROM public.verification_searches vs
  WHERE vs.user_id IS NOT NULL
    AND vs.user_id != NEW.user_id
    AND (
      (NEW.serial_number IS NOT NULL AND vs.identifier = NEW.serial_number)
      OR (NEW.imei IS NOT NULL AND vs.identifier = NEW.imei)
      OR (NEW.vin IS NOT NULL AND vs.identifier = NEW.vin)
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to notify users
DROP TRIGGER IF EXISTS notify_stolen_item_trigger ON public.stolen_items;
CREATE TRIGGER notify_stolen_item_trigger
  AFTER INSERT ON public.stolen_items
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_users_of_stolen_item();