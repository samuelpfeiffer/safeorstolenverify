CREATE TABLE public.ai_chat_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_chat_conversations TO authenticated;
GRANT ALL ON public.ai_chat_conversations TO service_role;

ALTER TABLE public.ai_chat_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own AI chat" ON public.ai_chat_conversations
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.touch_ai_chat_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER trg_ai_chat_touch
BEFORE UPDATE ON public.ai_chat_conversations
FOR EACH ROW EXECUTE FUNCTION public.touch_ai_chat_updated_at();