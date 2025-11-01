-- Update ai_executives table with missing columns (only add if not exists)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'ai_executives' AND column_name = 'is_active') THEN
    ALTER TABLE ai_executives ADD COLUMN is_active BOOLEAN DEFAULT true;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'ai_executives' AND column_name = 'configuration') THEN
    ALTER TABLE ai_executives ADD COLUMN configuration JSONB DEFAULT '{}'::jsonb;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'ai_executives' AND column_name = 'metrics') THEN
    ALTER TABLE ai_executives ADD COLUMN metrics JSONB DEFAULT '{}'::jsonb;
  END IF;
END $$;