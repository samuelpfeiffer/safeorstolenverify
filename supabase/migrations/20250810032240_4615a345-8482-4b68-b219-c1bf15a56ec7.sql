-- Seed blog categories
INSERT INTO public.blog_categories (id, name, slug, description, color)
SELECT gen_random_uuid(), 'Guides', 'guides', 'Hands-on tutorials and checklists for safer purchases', '#2563EB'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_categories WHERE slug = 'guides');

INSERT INTO public.blog_categories (id, name, slug, description, color)
SELECT gen_random_uuid(), 'Mobile', 'mobile', 'Everything about IMEI, ESN and mobile device verification', '#16A34A'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_categories WHERE slug = 'mobile');

INSERT INTO public.blog_categories (id, name, slug, description, color)
SELECT gen_random_uuid(), 'Vehicles', 'vehicles', 'VIN checks and private‑sale due diligence', '#EA580C'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_categories WHERE slug = 'vehicles');

INSERT INTO public.blog_categories (id, name, slug, description, color)
SELECT gen_random_uuid(), 'Firearms', 'firearms', 'Stolen firearms awareness and HotGunz tips', '#9333EA'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_categories WHERE slug = 'firearms');

INSERT INTO public.blog_categories (id, name, slug, description, color)
SELECT gen_random_uuid(), 'Security', 'security', 'Marketplace safety, red flags and prevention', '#0EA5E9'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_categories WHERE slug = 'security');

INSERT INTO public.blog_categories (id, name, slug, description, color)
SELECT gen_random_uuid(), 'News', 'news', 'Product verification updates and announcements', '#64748B'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_categories WHERE slug = 'news');

-- Seed blog tags
INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'IMEI', 'imei'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'imei');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'VIN', 'vin'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'vin');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'Stolen', 'stolen'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'stolen');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'Buying Tips', 'buying-tips'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'buying-tips');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'Marketplace Safety', 'marketplace-safety'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'marketplace-safety');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'HotGunz', 'hotgunz'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'hotgunz');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'Due Diligence', 'due-diligence'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'due-diligence');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'Verification', 'verification'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'verification');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'Serial Numbers', 'serial-numbers'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'serial-numbers');

INSERT INTO public.blog_tags (id, name, slug)
SELECT gen_random_uuid(), 'Policy', 'policy'
WHERE NOT EXISTS (SELECT 1 FROM public.blog_tags WHERE slug = 'policy');

-- Fixed author id for seeded posts (does not need to exist in auth for public read)
-- Using a constant so upserts are deterministic
WITH author(id) AS (
  SELECT '00000000-0000-0000-0000-000000000001'::uuid
)

-- Post 1: IMEI guide
INSERT INTO public.blog_posts (
  id, author_id, title, slug, content, excerpt, meta_title, meta_description, meta_keywords, status, featured_image_url, reading_time, published_at, updated_at
)
SELECT gen_random_uuid(), author.id,
  'How to Check an IMEI Properly (Step-by-Step)',
  'how-to-check-an-imei-properly',
  'An IMEI check helps confirm if a device is blacklisted, stolen, or reported lost.\n\nStep 1 — Get the IMEI\n- Dial *#06# or check Settings > About.\n\nStep 2 — Validate format\n- Ensure it''s 15 digits. If not, the result won''t be reliable.\n\nStep 3 — Run a trusted lookup\n- Use a reputable IMEI source. On Safe or Stolen, we route your check through available providers and record a result with confidence.\n\nStep 4 — Verify seller details\n- Ask for original proof of purchase and compare serials.\n\nWhat the results mean\n- Safe: No negative records found by the provider.\n- Lost/Stolen: Blacklisted or reported — do not proceed.\n- Unknown: No record found; proceed with caution and ask for more proof.\n\nPro tips\n- Always verify before meeting or paying.\n- Cross-check the IMEI on the box and in the OS settings.\n',
  'A practical, trusted workflow to verify any phone IMEI before you buy — from getting the IMEI to interpreting results.',
  'How to Check an IMEI Properly',
  'Step-by-step IMEI verification workflow, interpreting results, and safer buying tips.',
  'imei, phone verification, stolen check, blacklist',
  'published',
  '/placeholder.svg',
  6,
  now(),
  now()
FROM author
WHERE NOT EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = 'how-to-check-an-imei-properly');

-- Post 2: VIN checklist
WITH author(id) AS (
  SELECT '00000000-0000-0000-0000-000000000001'::uuid
)
INSERT INTO public.blog_posts (
  id, author_id, title, slug, content, excerpt, meta_title, meta_description, meta_keywords, status, featured_image_url, reading_time, published_at, updated_at
)
SELECT gen_random_uuid(), author.id,
  'Private-Sale VIN Due Diligence Checklist',
  'vin-due-diligence-checklist',
  'When buying a vehicle privately, verify the VIN thoroughly.\n\nChecklist\n- Decode the VIN to confirm make, model, and year.\n- Match VIN across dash, door jamb, engine bay, and paperwork.\n- Pull a history report and inspect for salvage or theft.\n- Compare odometer readings in service and inspection records.\n- Meet in a safe, public place and bring a friend.\n\nIf anything feels off, walk away — there will always be another listing.\n',
  'A concise due diligence checklist to safely verify a vehicle''s VIN during private sales.',
  'VIN Due Diligence Checklist',
  'How to verify a vehicle VIN during private sales with a simple checklist.',
  'vin, due diligence, private sale, vehicle safety',
  'published',
  '/placeholder.svg',
  5,
  now(),
  now()
FROM author
WHERE NOT EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = 'vin-due-diligence-checklist');

-- Post 3: Marketplace red flags
WITH author(id) AS (
  SELECT '00000000-0000-0000-0000-000000000001'::uuid
)
INSERT INTO public.blog_posts (
  id, author_id, title, slug, content, excerpt, meta_title, meta_description, meta_keywords, status, featured_image_url, reading_time, published_at, updated_at
)
SELECT gen_random_uuid(), author.id,
  'Marketplace Red Flags: How to Spot Risky Listings',
  'marketplace-red-flags',
  'Common red flags include: unusually low prices, stock photos only, refusal to meet, urgency tactics, and mismatched serials.\n\nSafer flow\n- Verify the serial/IMEI/VIN first.\n- Ask for a simple video showing the serial in Settings/About and the physical label.\n- Request a receipt or warranty proof that matches the item.\n- Prefer local public meetups with verification on the spot.\n',
  'Spot the most common red flags on marketplaces and stay out of trouble.',
  'Marketplace Red Flags',
  'Identify risky marketplace listings with a practical verification flow.',
  'marketplace, safety, fraud, tips',
  'published',
  '/placeholder.svg',
  4,
  now(),
  now()
FROM author
WHERE NOT EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = 'marketplace-red-flags');

-- Post 4: Firearms + HotGunz
WITH author(id) AS (
  SELECT '00000000-0000-0000-0000-000000000001'::uuid
)
INSERT INTO public.blog_posts (
  id, author_id, title, slug, content, excerpt, meta_title, meta_description, meta_keywords, status, featured_image_url, reading_time, published_at, updated_at
)
SELECT gen_random_uuid(), author.id,
  'How to Use HotGunz to Check Stolen Firearms',
  'how-to-use-hotgunz',
  'HotGunz is a community-sourced database.\n\nHow to search\n- Gather the serial and model info.\n- Use our Firearms Check page to load the HotGunz widget.\n- Try several variations if serial formatting is unclear.\n\nRemember\n- Results are community-reported and may be incomplete — always follow local laws, and contact authorities when appropriate.\n',
  'A quick guide to checking firearms with HotGunz and staying compliant.',
  'How to Use HotGunz',
  'Quick guide to checking stolen firearms with HotGunz and best practices.',
  'hotgunz, firearms, stolen, safety',
  'published',
  '/placeholder.svg',
  4,
  now(),
  now()
FROM author
WHERE NOT EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = 'how-to-use-hotgunz');

-- Post 5: What to do if stolen
WITH author(id) AS (
  SELECT '00000000-0000-0000-0000-000000000001'::uuid
)
INSERT INTO public.blog_posts (
  id, author_id, title, slug, content, excerpt, meta_title, meta_description, meta_keywords, status, featured_image_url, reading_time, published_at, updated_at
)
SELECT gen_random_uuid(), author.id,
  'What to Do If You Discover an Item Is Stolen',
  'what-to-do-if-stolen',
  'If a check indicates stolen: stop communication, do not pay, and avoid handling the item further.\n\nNext steps\n- Preserve evidence: screenshots, chat logs, payment records.\n- Report to the platform and local authorities.\n- If you already paid, contact your bank or card to dispute.\n- Consider filing an online police report if your area supports it.\n',
  'Immediate steps to take if a verification shows an item is stolen.',
  'What to Do If an Item Is Stolen',
  'Actionable steps after a stolen result: reporting, refunds, and safety.',
  'stolen, report, refund, safety',
  'published',
  '/placeholder.svg',
  4,
  now(),
  now()
FROM author
WHERE NOT EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = 'what-to-do-if-stolen');

-- Post 6: Serial numbers 101
WITH author(id) AS (
  SELECT '00000000-0000-0000-0000-000000000001'::uuid
)
INSERT INTO public.blog_posts (
  id, author_id, title, slug, content, excerpt, meta_title, meta_description, meta_keywords, status, featured_image_url, reading_time, published_at, updated_at
)
SELECT gen_random_uuid(), author.id,
  'Serial Numbers 101: Where to Find and How to Verify',
  'serial-numbers-101',
  'Most electronics and tools carry a unique serial.\n\nTips\n- Check labels, packaging, and About/Settings screens.\n- Avoid sellers who refuse to share serials.\n- Compare serials across the device, box, and receipts.\n- Keep your own serials backed up for insurance claims.\n',
  'Learn where to find serial numbers and how to verify them.',
  'Serial Numbers 101',
  'Where to find serials on devices and how to verify them safely.',
  'serial numbers, verification, tips',
  'published',
  '/placeholder.svg',
  3,
  now(),
  now()
FROM author
WHERE NOT EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = 'serial-numbers-101');

-- Post 7: Safer buyer flow
WITH author(id) AS (
  SELECT '00000000-0000-0000-0000-000000000001'::uuid
)
INSERT INTO public.blog_posts (
  id, author_id, title, slug, content, excerpt, meta_title, meta_description, meta_keywords, status, featured_image_url, reading_time, published_at, updated_at
)
SELECT gen_random_uuid(), author.id,
  'A Safer Buyer Flow for Private Sales',
  'safer-buyer-flow',
  'Before you commit: verify identity, check serial/IMEI/VIN, and meet in a well-lit public place.\n\nQuick flow\n- Ask for current photos and a short serial video.\n- Verify via Safe or Stolen.\n- Bring a friend and don''t rush.\n- Use traceable payments when possible.\n',
  'A short, repeatable buyer flow to reduce risk in private transactions.',
  'Safer Buyer Flow',
  'Practical private-sale buyer flow to reduce fraud and risk.',
  'buyers, safety, checklist',
  'published',
  '/placeholder.svg',
  3,
  now(),
  now()
FROM author
WHERE NOT EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = 'safer-buyer-flow');

-- Post 8: Data and privacy note
WITH author(id) AS (
  SELECT '00000000-0000-0000-0000-000000000001'::uuid
)
INSERT INTO public.blog_posts (
  id, author_id, title, slug, content, excerpt, meta_title, meta_description, meta_keywords, status, featured_image_url, reading_time, published_at, updated_at
)
SELECT gen_random_uuid(), author.id,
  'How We Think About Verification Data & Privacy',
  'verification-data-and-privacy',
  'We minimize data collection to what''s needed for verification and provide clear audit trails.\n\nHighlights\n- Verification results are tied to your account for history.\n- We use Row Level Security (RLS) to protect user data.\n- You can clear cache and request deletion based on retention policies.\n',
  'A plain-English note on verification data, retention, and privacy.',
  'Verification Data & Privacy',
  'What we store for verification, how long, and why — in plain language.',
  'privacy, policy, verification',
  'published',
  '/placeholder.svg',
  3,
  now(),
  now()
FROM author
WHERE NOT EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = 'verification-data-and-privacy');

-- Link posts to categories
-- IMEI guide -> Guides, Mobile
INSERT INTO public.blog_post_categories (id, post_id, category_id)
SELECT gen_random_uuid(), p.id, c.id
FROM public.blog_posts p
JOIN public.blog_categories c ON c.slug IN ('guides','mobile')
WHERE p.slug = 'how-to-check-an-imei-properly'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_categories x WHERE x.post_id = p.id AND x.category_id = c.id
);

-- VIN checklist -> Guides, Vehicles
INSERT INTO public.blog_post_categories (id, post_id, category_id)
SELECT gen_random_uuid(), p.id, c.id
FROM public.blog_posts p
JOIN public.blog_categories c ON c.slug IN ('guides','vehicles')
WHERE p.slug = 'vin-due-diligence-checklist'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_categories x WHERE x.post_id = p.id AND x.category_id = c.id
);

-- Marketplace red flags -> Security
INSERT INTO public.blog_post_categories (id, post_id, category_id)
SELECT gen_random_uuid(), p.id, c.id
FROM public.blog_posts p
JOIN public.blog_categories c ON c.slug IN ('security')
WHERE p.slug = 'marketplace-red-flags'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_categories x WHERE x.post_id = p.id AND x.category_id = c.id
);

-- HotGunz -> Firearms
INSERT INTO public.blog_post_categories (id, post_id, category_id)
SELECT gen_random_uuid(), p.id, c.id
FROM public.blog_posts p
JOIN public.blog_categories c ON c.slug IN ('firearms')
WHERE p.slug = 'how-to-use-hotgunz'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_categories x WHERE x.post_id = p.id AND x.category_id = c.id
);

-- What to do if stolen -> Security
INSERT INTO public.blog_post_categories (id, post_id, category_id)
SELECT gen_random_uuid(), p.id, c.id
FROM public.blog_posts p
JOIN public.blog_categories c ON c.slug IN ('security')
WHERE p.slug = 'what-to-do-if-stolen'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_categories x WHERE x.post_id = p.id AND x.category_id = c.id
);

-- Serials 101 -> Guides
INSERT INTO public.blog_post_categories (id, post_id, category_id)
SELECT gen_random_uuid(), p.id, c.id
FROM public.blog_posts p
JOIN public.blog_categories c ON c.slug IN ('guides')
WHERE p.slug = 'serial-numbers-101'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_categories x WHERE x.post_id = p.id AND x.category_id = c.id
);

-- Safer buyer flow -> Guides, Security
INSERT INTO public.blog_post_categories (id, post_id, category_id)
SELECT gen_random_uuid(), p.id, c.id
FROM public.blog_posts p
JOIN public.blog_categories c ON c.slug IN ('guides','security')
WHERE p.slug = 'safer-buyer-flow'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_categories x WHERE x.post_id = p.id AND x.category_id = c.id
);

-- Data & privacy -> News, Security
INSERT INTO public.blog_post_categories (id, post_id, category_id)
SELECT gen_random_uuid(), p.id, c.id
FROM public.blog_posts p
JOIN public.blog_categories c ON c.slug IN ('news','security')
WHERE p.slug = 'verification-data-and-privacy'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_categories x WHERE x.post_id = p.id AND x.category_id = c.id
);

-- Link posts to tags
-- IMEI guide -> imei, verification, buying-tips
INSERT INTO public.blog_post_tags (id, post_id, tag_id)
SELECT gen_random_uuid(), p.id, t.id
FROM public.blog_posts p
JOIN public.blog_tags t ON t.slug IN ('imei','verification','buying-tips')
WHERE p.slug = 'how-to-check-an-imei-properly'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_tags x WHERE x.post_id = p.id AND x.tag_id = t.id
);

-- VIN checklist -> vin, due-diligence, buying-tips
INSERT INTO public.blog_post_tags (id, post_id, tag_id)
SELECT gen_random_uuid(), p.id, t.id
FROM public.blog_posts p
JOIN public.blog_tags t ON t.slug IN ('vin','due-diligence','buying-tips')
WHERE p.slug = 'vin-due-diligence-checklist'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_tags x WHERE x.post_id = p.id AND x.tag_id = t.id
);

-- Marketplace red flags -> marketplace-safety, buying-tips, verification
INSERT INTO public.blog_post_tags (id, post_id, tag_id)
SELECT gen_random_uuid(), p.id, t.id
FROM public.blog_posts p
JOIN public.blog_tags t ON t.slug IN ('marketplace-safety','buying-tips','verification')
WHERE p.slug = 'marketplace-red-flags'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_tags x WHERE x.post_id = p.id AND x.tag_id = t.id
);

-- HotGunz -> firearms tag (hotgunz), stolen
INSERT INTO public.blog_post_tags (id, post_id, tag_id)
SELECT gen_random_uuid(), p.id, t.id
FROM public.blog_posts p
JOIN public.blog_tags t ON t.slug IN ('hotgunz','stolen')
WHERE p.slug = 'how-to-use-hotgunz'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_tags x WHERE x.post_id = p.id AND x.tag_id = t.id
);

-- What to do if stolen -> stolen, policy
INSERT INTO public.blog_post_tags (id, post_id, tag_id)
SELECT gen_random_uuid(), p.id, t.id
FROM public.blog_posts p
JOIN public.blog_tags t ON t.slug IN ('stolen','policy')
WHERE p.slug = 'what-to-do-if-stolen'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_tags x WHERE x.post_id = p.id AND x.tag_id = t.id
);

-- Serials 101 -> serial-numbers, verification
INSERT INTO public.blog_post_tags (id, post_id, tag_id)
SELECT gen_random_uuid(), p.id, t.id
FROM public.blog_posts p
JOIN public.blog_tags t ON t.slug IN ('serial-numbers','verification')
WHERE p.slug = 'serial-numbers-101'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_tags x WHERE x.post_id = p.id AND x.tag_id = t.id
);

-- Safer buyer flow -> buying-tips, marketplace-safety
INSERT INTO public.blog_post_tags (id, post_id, tag_id)
SELECT gen_random_uuid(), p.id, t.id
FROM public.blog_posts p
JOIN public.blog_tags t ON t.slug IN ('buying-tips','marketplace-safety')
WHERE p.slug = 'safer-buyer-flow'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_tags x WHERE x.post_id = p.id AND x.tag_id = t.id
);

-- Data & privacy -> policy, verification
INSERT INTO public.blog_post_tags (id, post_id, tag_id)
SELECT gen_random_uuid(), p.id, t.id
FROM public.blog_posts p
JOIN public.blog_tags t ON t.slug IN ('policy','verification')
WHERE p.slug = 'verification-data-and-privacy'
AND NOT EXISTS (
  SELECT 1 FROM public.blog_post_tags x WHERE x.post_id = p.id AND x.tag_id = t.id
);
