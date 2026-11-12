CREATE TABLE public.plate_owner_kit_purchases (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL, state text NOT NULL CHECK (state IN ('Florida','California','Texas','Arizona','New York','Georgia','Illinois','Pennsylvania','Ohio','North Carolina')), plate text NOT NULL CHECK (length(plate) BETWEEN 1 AND 12 AND plate ~ '^[A-Z0-9 -]+$'), selected_reason text NOT NULL CHECK (length(selected_reason) BETWEEN 1 AND 500), payment_id text UNIQUE NOT NULL CHECK (payment_id ~ '^cs_'), created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.plate_owner_kit_purchases TO authenticated;
GRANT ALL ON public.plate_owner_kit_purchases TO service_role;
ALTER TABLE public.plate_owner_kit_purchases ENABLE ROW LEVEL SECURITY;
CREATE POLICY plate_kit_read_own ON public.plate_owner_kit_purchases FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE INDEX plate_kit_user_time ON public.plate_owner_kit_purchases(user_id, created_at DESC);
CREATE TABLE public.plate_owner_business_leads (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), company text NOT NULL CHECK (length(company) BETWEEN 1 AND 150), contact_name text NOT NULL CHECK (length(contact_name) BETWEEN 1 AND 100), work_email text NOT NULL CHECK (length(work_email) <= 254 AND work_email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'), phone text NOT NULL CHECK (length(phone) BETWEEN 7 AND 30 AND phone ~ '^[0-9+(). -]+$'), industry text NOT NULL CHECK (industry IN ('insurance','towing-impound','legal','licensed PI','other')), license_number text CHECK (length(license_number) <= 100), monthly_volume integer NOT NULL CHECK (monthly_volume BETWEEN 0 AND 1000000), created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.plate_owner_business_leads TO anon, authenticated;
GRANT SELECT ON public.plate_owner_business_leads TO authenticated;
GRANT ALL ON public.plate_owner_business_leads TO service_role;
ALTER TABLE public.plate_owner_business_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY plate_lead_submit ON public.plate_owner_business_leads FOR INSERT TO anon, authenticated WITH CHECK (length(company) BETWEEN 1 AND 150 AND length(contact_name) BETWEEN 1 AND 100 AND monthly_volume BETWEEN 0 AND 1000000);
CREATE POLICY plate_lead_admin_read ON public.plate_owner_business_leads FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE TRIGGER plate_lead_updated BEFORE UPDATE ON public.plate_owner_business_leads FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();