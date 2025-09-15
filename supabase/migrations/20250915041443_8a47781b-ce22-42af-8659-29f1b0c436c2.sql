-- Create function to initialize sample SEO data
CREATE OR REPLACE FUNCTION public.initialize_sample_seo_data()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Insert sample keywords
  INSERT INTO public.seo_keywords (keyword, target_rank, search_volume, difficulty_score) VALUES 
  ('stolen goods checker', 1, 5400, 45),
  ('IMEI verification', 1, 8100, 52),
  ('check if stolen', 1, 12000, 38),
  ('verify before buying', 1, 3600, 41),
  ('marketplace safety', 1, 2400, 49),
  ('stolen item lookup', 1, 1800, 43),
  ('serial number check stolen', 1, 900, 47),
  ('safe marketplace shopping', 1, 1200, 44)
  ON CONFLICT DO NOTHING;
  
  -- Insert sample performance data
  INSERT INTO public.seo_performance (date, ai_optimization_score, total_keywords_tracking, keyword_rankings_improved, average_position, click_through_rate) VALUES 
  (CURRENT_DATE, 78, 8, 3, 15.2, 3.4)
  ON CONFLICT (date) DO UPDATE SET 
  ai_optimization_score = EXCLUDED.ai_optimization_score,
  total_keywords_tracking = EXCLUDED.total_keywords_tracking,
  keyword_rankings_improved = EXCLUDED.keyword_rankings_improved,
  average_position = EXCLUDED.average_position,
  click_through_rate = EXCLUDED.click_through_rate;
  
  -- Insert sample AI suggestions
  INSERT INTO public.ai_seo_suggestions (suggestion_type, priority, title, description, implementation_notes, ai_confidence_score, expected_impact) VALUES 
  ('content', 'high', 'Optimize homepage meta description for "stolen goods verification"', 'Current meta description doesn''t include primary keyword. Rewrite to include "stolen goods verification" within first 60 characters for better SERP visibility.', 'Update homepage meta tag and test click-through rates', 0.92, 'high'),
  ('technical', 'high', 'Improve page load speed for mobile users', 'Mobile page load time is 3.2 seconds. Optimize images and defer non-critical scripts to achieve <2 seconds load time.', 'Implement lazy loading and compress images', 0.88, 'high'),
  ('keywords', 'medium', 'Target long-tail keyword: "how to check if phone is stolen IMEI"', 'Low competition long-tail keyword with 1,200 monthly searches. Create dedicated content page targeting this phrase.', 'Create comprehensive guide page with step-by-step instructions', 0.85, 'medium'),
  ('strategic', 'high', 'Build topical authority cluster around marketplace safety', 'Create content cluster with 8-10 pages covering marketplace safety topics to establish domain authority.', 'Plan content calendar and internal linking strategy', 0.90, 'high')
  ON CONFLICT DO NOTHING;
END;
$$;