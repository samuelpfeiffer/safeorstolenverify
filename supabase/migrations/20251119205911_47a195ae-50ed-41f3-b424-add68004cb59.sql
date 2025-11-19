-- State Verification Databases Table
CREATE TABLE IF NOT EXISTS public.state_verification_databases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  state_code varchar(2) NOT NULL UNIQUE,
  state_name varchar(100) NOT NULL,
  has_direct_integration boolean DEFAULT false,
  database_name varchar(255),
  database_url text,
  supports_license_plate boolean DEFAULT false,
  supports_vin boolean DEFAULT true,
  api_available boolean DEFAULT false,
  rate_limit_per_hour integer DEFAULT 100,
  last_verified_at timestamptz,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- State Theft Lookup Cache Table (24hr cache)
CREATE TABLE IF NOT EXISTS public.state_theft_lookup_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  state_code varchar(2) NOT NULL,
  lookup_type varchar(50) NOT NULL,
  lookup_value varchar(255) NOT NULL,
  result_status varchar(50),
  result_data jsonb DEFAULT '{}'::jsonb,
  data_sources text[] DEFAULT ARRAY[]::text[],
  confidence_score numeric(3,2),
  cached_at timestamptz DEFAULT now(),
  expires_at timestamptz DEFAULT now() + interval '24 hours',
  created_at timestamptz DEFAULT now(),
  UNIQUE(state_code, lookup_type, lookup_value)
);

-- Enable RLS
ALTER TABLE public.state_verification_databases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.state_theft_lookup_cache ENABLE ROW LEVEL SECURITY;

-- RLS Policies for state_verification_databases
CREATE POLICY "Public can view state databases"
  ON public.state_verification_databases
  FOR SELECT
  USING (true);

CREATE POLICY "Service role can manage state databases"
  ON public.state_verification_databases
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- RLS Policies for state_theft_lookup_cache
CREATE POLICY "Service role can manage cache"
  ON public.state_theft_lookup_cache
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Authenticated users can view cache"
  ON public.state_theft_lookup_cache
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_state_theft_cache_lookup 
  ON public.state_theft_lookup_cache(state_code, lookup_type, lookup_value);

CREATE INDEX IF NOT EXISTS idx_state_theft_cache_expires 
  ON public.state_theft_lookup_cache(expires_at);

-- Insert initial state data for high-value states
INSERT INTO public.state_verification_databases (state_code, state_name, has_direct_integration, database_name, database_url, supports_license_plate, supports_vin, api_available, metadata)
VALUES 
  ('AZ', 'Arizona', true, 'TheftAZ', 'https://theftaz.azag.gov', true, true, true, '{"description": "Arizona Attorney General TheftAZ Database", "type": "public_web"}'::jsonb),
  ('FL', 'Florida', true, 'FDLE Public Access System', 'https://pas.fdle.state.fl.us', true, true, true, '{"description": "Florida Department of Law Enforcement Public Access System", "type": "public_web"}'::jsonb),
  ('TX', 'Texas', true, 'Texas DPS TCIC', 'https://www.dps.texas.gov', false, true, false, '{"description": "Texas Department of Public Safety Crime Information Center", "type": "public_reports"}'::jsonb),
  ('CA', 'California', true, 'CHP VTIS', 'https://www.chp.ca.gov', true, true, false, '{"description": "California Highway Patrol Vehicle Theft Information System", "type": "limited_public"}'::jsonb),
  ('NY', 'New York', true, 'NY DMV Stolen Vehicle Database', 'https://dmv.ny.gov', true, true, false, '{"description": "New York DMV Stolen Vehicle Registry", "type": "limited_public"}'::jsonb)
ON CONFLICT (state_code) DO UPDATE SET
  has_direct_integration = EXCLUDED.has_direct_integration,
  database_name = EXCLUDED.database_name,
  database_url = EXCLUDED.database_url,
  supports_license_plate = EXCLUDED.supports_license_plate,
  supports_vin = EXCLUDED.supports_vin,
  api_available = EXCLUDED.api_available,
  metadata = EXCLUDED.metadata,
  updated_at = now();