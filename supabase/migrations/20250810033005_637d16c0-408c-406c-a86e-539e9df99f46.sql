-- Update featured images for blog posts to newly added local assets
UPDATE public.blog_posts SET featured_image_url = '/images/blog/imei-guide.jpg'
WHERE slug = 'how-to-check-an-imei-properly';

UPDATE public.blog_posts SET featured_image_url = '/images/blog/vin-checklist.jpg'
WHERE slug = 'vin-due-diligence-checklist';

UPDATE public.blog_posts SET featured_image_url = '/images/blog/marketplace-red-flags.jpg'
WHERE slug = 'marketplace-red-flags';

UPDATE public.blog_posts SET featured_image_url = '/images/blog/hotgunz-firearms.jpg'
WHERE slug = 'how-to-use-hotgunz';

UPDATE public.blog_posts SET featured_image_url = '/images/blog/what-to-do-if-stolen.jpg'
WHERE slug = 'what-to-do-if-stolen';

UPDATE public.blog_posts SET featured_image_url = '/images/blog/serial-numbers-101.jpg'
WHERE slug = 'serial-numbers-101';

UPDATE public.blog_posts SET featured_image_url = '/images/blog/safer-buyer-flow.jpg'
WHERE slug = 'safer-buyer-flow';

UPDATE public.blog_posts SET featured_image_url = '/images/blog/verification-data-privacy.jpg'
WHERE slug = 'verification-data-and-privacy';