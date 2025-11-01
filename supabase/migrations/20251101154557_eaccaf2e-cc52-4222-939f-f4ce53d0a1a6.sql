-- Create table for storing user webhook configurations
CREATE TABLE public.user_webhooks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  event TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_webhooks ENABLE ROW LEVEL SECURITY;

-- Users can view their own webhooks
CREATE POLICY "Users can view their own webhooks"
ON public.user_webhooks
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own webhooks
CREATE POLICY "Users can insert their own webhooks"
ON public.user_webhooks
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own webhooks
CREATE POLICY "Users can update their own webhooks"
ON public.user_webhooks
FOR UPDATE
USING (auth.uid() = user_id);

-- Users can delete their own webhooks
CREATE POLICY "Users can delete their own webhooks"
ON public.user_webhooks
FOR DELETE
USING (auth.uid() = user_id);

-- Service role has full access
CREATE POLICY "Service role can manage all webhooks"
ON public.user_webhooks
FOR ALL
USING (auth.role() = 'service_role');

-- Create index for faster queries
CREATE INDEX idx_user_webhooks_user_id ON public.user_webhooks(user_id);
CREATE INDEX idx_user_webhooks_event ON public.user_webhooks(event);

-- Trigger to update updated_at timestamp
CREATE TRIGGER update_user_webhooks_updated_at
BEFORE UPDATE ON public.user_webhooks
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();