-- Fix blog post slugs by removing timestamps
-- This fixes 404 errors for blog posts that have timestamps in their slugs

UPDATE blog_posts 
SET slug = 'complete-guide-verify-imei-numbers-used-phone'
WHERE slug = 'complete-guide-verify-imei-numbers-used-phone-1759314016.095080';

UPDATE blog_posts 
SET slug = 'vin-verification-complete-guide-used-cars'
WHERE slug = 'vin-verification-complete-guide-used-cars-1759314016.095080';

UPDATE blog_posts 
SET slug = 'red-flags-buying-used-electronics'
WHERE slug = 'red-flags-buying-used-electronics-1759314016.095080';