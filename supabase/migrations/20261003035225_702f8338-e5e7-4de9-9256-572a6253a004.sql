ALTER TABLE public.stolen_items
  ADD COLUMN IF NOT EXISTS city text,
  ADD COLUMN IF NOT EXISTS state text,
  ADD COLUMN IF NOT EXISTS police_report_provided boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS contact_pref text NOT NULL DEFAULT 'email',
  ADD COLUMN IF NOT EXISTS photo_paths text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS registered_item_id uuid,
  ADD COLUMN IF NOT EXISTS terms_accepted_at timestamptz,
  ADD COLUMN IF NOT EXISTS review_reason text,
  ADD COLUMN IF NOT EXISTS status_changed_at timestamptz;

CREATE INDEX IF NOT EXISTS stolen_items_status_idx ON public.stolen_items(status);

CREATE TABLE public.registered_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  item_type text NOT NULL,
  identifier text NOT NULL,
  brand text,
  model text,
  description text,
  photo_paths text[] NOT NULL DEFAULT '{}',
  proof_path text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.registered_items TO authenticated;
GRANT ALL ON public.registered_items TO service_role;
ALTER TABLE public.registered_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "owners manage own registered items" ON public.registered_items
  FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER registered_items_updated_at BEFORE UPDATE ON public.registered_items
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TABLE public.report_disputes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stolen_item_id uuid NOT NULL REFERENCES public.stolen_items(id) ON DELETE CASCADE,
  reason text NOT NULL,
  contact_email text,
  status text NOT NULL DEFAULT 'open',
  created_at timestamptz NOT NULL DEFAULT now(),
  resolved_at timestamptz
);
GRANT ALL ON public.report_disputes TO service_role;
GRANT SELECT ON public.report_disputes TO authenticated;
ALTER TABLE public.report_disputes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins read disputes" ON public.report_disputes
  FOR SELECT TO authenticated USING (public.is_admin_user());

CREATE TABLE public.report_review_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stolen_item_id uuid NOT NULL REFERENCES public.stolen_items(id) ON DELETE CASCADE,
  admin_id uuid,
  action text NOT NULL,
  note text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.report_review_log TO service_role;
GRANT SELECT ON public.report_review_log TO authenticated;
ALTER TABLE public.report_review_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins read review log" ON public.report_review_log
  FOR SELECT TO authenticated USING (public.is_admin_user());

CREATE TABLE public.owner_alert_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stolen_item_id uuid NOT NULL REFERENCES public.stolen_items(id) ON DELETE CASCADE,
  general_area text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.owner_alert_log TO service_role;
ALTER TABLE public.owner_alert_log ENABLE ROW LEVEL SECURITY;
CREATE INDEX owner_alert_log_item_idx ON public.owner_alert_log(stolen_item_id, created_at DESC);