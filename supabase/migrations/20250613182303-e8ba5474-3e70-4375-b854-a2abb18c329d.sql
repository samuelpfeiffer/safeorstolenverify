
-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image_url TEXT,
  author_id UUID REFERENCES auth.users NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMP WITH TIME ZONE,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  reading_time INTEGER, -- in minutes
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog categories table
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  color TEXT DEFAULT '#3B82F6',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog tags table
CREATE TABLE public.blog_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog post categories junction table
CREATE TABLE public.blog_post_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  category_id UUID REFERENCES public.blog_categories(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(post_id, category_id)
);

-- Create blog post tags junction table
CREATE TABLE public.blog_post_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES public.blog_tags(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(post_id, tag_id)
);

-- Add Row Level Security (RLS) for blog posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public reading of published posts
CREATE POLICY "Anyone can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (status = 'published');

-- Create policy for authenticated users to manage their own posts
CREATE POLICY "Authors can manage their own blog posts" 
  ON public.blog_posts 
  FOR ALL
  USING (auth.uid() = author_id);

-- Add RLS for categories (public read, admin write)
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blog categories" 
  ON public.blog_categories 
  FOR SELECT 
  TO public
  USING (true);

-- Add RLS for tags (public read, admin write)
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blog tags" 
  ON public.blog_tags 
  FOR SELECT 
  TO public
  USING (true);

-- Add RLS for junction tables (public read for published posts)
ALTER TABLE public.blog_post_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published post categories" 
  ON public.blog_post_categories 
  FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM public.blog_posts 
    WHERE id = post_id AND status = 'published'
  ));

ALTER TABLE public.blog_post_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published post tags" 
  ON public.blog_post_tags 
  FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM public.blog_posts 
    WHERE id = post_id AND status = 'published'
  ));

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC) WHERE status = 'published';
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_author_id ON public.blog_posts(author_id);
CREATE INDEX idx_blog_categories_slug ON public.blog_categories(slug);
CREATE INDEX idx_blog_tags_slug ON public.blog_tags(slug);

-- Insert some initial categories
INSERT INTO public.blog_categories (name, slug, description, color) VALUES 
('Verification Tips', 'verification-tips', 'Tips and guides for verifying items', '#10B981'),
('Product Safety', 'product-safety', 'Information about product safety and stolen goods', '#EF4444'),
('Industry News', 'industry-news', 'Latest news in the verification industry', '#3B82F6'),
('How To Guides', 'how-to-guides', 'Step-by-step guides for users', '#8B5CF6'),
('Company Updates', 'company-updates', 'Updates and announcements from Safe Or Stolen', '#F59E0B');

-- Insert some initial tags
INSERT INTO public.blog_tags (name, slug) VALUES 
('IMEI', 'imei'),
('VIN', 'vin'),
('Serial Number', 'serial-number'),
('Smartphones', 'smartphones'),
('Vehicles', 'vehicles'),
('Electronics', 'electronics'),
('Safety', 'safety'),
('Prevention', 'prevention'),
('Tips', 'tips'),
('Guide', 'guide');
