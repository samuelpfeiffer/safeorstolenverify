-- Fix blog post slugs by removing timestamp suffixes and handling duplicates
-- Step 1: Create helper function to generate unique clean slugs
CREATE OR REPLACE FUNCTION generate_unique_clean_slug(input_slug TEXT, post_id UUID)
RETURNS TEXT AS $$
DECLARE
  base_slug TEXT;
  final_slug TEXT;
  counter INTEGER := 0;
BEGIN
  -- Remove timestamp suffix if present
  base_slug := REGEXP_REPLACE(input_slug, '-\d{10,}$', '');
  final_slug := base_slug;
  
  -- Ensure uniqueness by appending a counter if needed (excluding current post)
  WHILE EXISTS (
    SELECT 1 FROM blog_posts 
    WHERE slug = final_slug 
    AND id != post_id
  ) LOOP
    counter := counter + 1;
    final_slug := base_slug || '-' || counter;
  END LOOP;
  
  RETURN final_slug;
END;
$$ LANGUAGE plpgsql;

-- Step 2: Update all existing blog post slugs
DO $$
DECLARE
  post_record RECORD;
BEGIN
  FOR post_record IN 
    SELECT id, slug 
    FROM blog_posts 
    WHERE slug ~ '-\d{10,}$'
    ORDER BY created_at ASC
  LOOP
    UPDATE blog_posts 
    SET slug = generate_unique_clean_slug(post_record.slug, post_record.id)
    WHERE id = post_record.id;
  END LOOP;
END $$;

-- Step 3: Create trigger function for future posts
CREATE OR REPLACE FUNCTION set_clean_blog_slug()
RETURNS TRIGGER AS $$
BEGIN
  -- Only process if slug has timestamp suffix or is being created
  IF NEW.slug ~ '-\d{10,}$' OR (TG_OP = 'INSERT' AND NEW.slug IS NULL) THEN
    IF NEW.slug IS NULL THEN
      -- Generate from title for new posts
      NEW.slug := LOWER(REGEXP_REPLACE(REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'));
    END IF;
    NEW.slug := generate_unique_clean_slug(NEW.slug, NEW.id);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 4: Create trigger
DROP TRIGGER IF EXISTS blog_posts_clean_slug_trigger ON blog_posts;
CREATE TRIGGER blog_posts_clean_slug_trigger
  BEFORE INSERT OR UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION set_clean_blog_slug();