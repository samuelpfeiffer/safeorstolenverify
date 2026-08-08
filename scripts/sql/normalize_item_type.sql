-- normalize_item_type.sql
-- Collapses verification_searches.item_type to 6 canonical lowercase values:
--   phone | vehicle | plate | serial | firearm | bicycle
-- Run each step in order in the Supabase SQL editor.
-- No schema changes, no RLS changes.

-- ============================================================
-- STEP 1 — PREVIEW (read-only). REVIEW THIS BEFORE PROCEEDING.
-- ============================================================
select item_type, count(*)
from verification_searches
group by item_type
order by count desc;


-- ============================================================
-- STEP 2 — BACKFILL. Wrapped in a transaction so you can ROLLBACK.
-- Matching is case-insensitive and ignores spaces/underscores/hyphens/dots.
-- Anything unmapped is left UNCHANGED (never blanked).
-- ============================================================
BEGIN;

UPDATE verification_searches
SET item_type = CASE regexp_replace(lower(trim(item_type)), '[\s_\-\.]', '', 'g')

  -- phone
  WHEN 'phone'         THEN 'phone'
  WHEN 'smartphone'    THEN 'phone'
  WHEN 'imei'          THEN 'phone'
  WHEN 'iphone'        THEN 'phone'
  WHEN 'android'       THEN 'phone'
  WHEN 'androidphone'  THEN 'phone'
  WHEN 'mobile'        THEN 'phone'
  WHEN 'mobilephone'   THEN 'phone'
  WHEN 'cell'          THEN 'phone'
  WHEN 'cellphone'     THEN 'phone'

  -- vehicle
  WHEN 'vehicle'       THEN 'vehicle'
  WHEN 'vin'           THEN 'vehicle'
  WHEN 'car'           THEN 'vehicle'
  WHEN 'truck'         THEN 'vehicle'
  WHEN 'motorcycle'    THEN 'vehicle'
  WHEN 'auto'          THEN 'vehicle'
  WHEN 'automobile'    THEN 'vehicle'

  -- plate
  WHEN 'plate'         THEN 'plate'
  WHEN 'licenseplate'  THEN 'plate'
  WHEN 'tag'           THEN 'plate'

  -- serial
  WHEN 'serial'        THEN 'serial'
  WHEN 'serialnumber'  THEN 'serial'
  WHEN 'electronics'   THEN 'serial'
  WHEN 'laptop'        THEN 'serial'
  WHEN 'tablet'        THEN 'serial'
  WHEN 'camera'        THEN 'serial'
  WHEN 'tool'          THEN 'serial'
  WHEN 'tools'         THEN 'serial'
  WHEN 'powertool'     THEN 'serial'
  WHEN 'powertools'    THEN 'serial'
  WHEN 'console'       THEN 'serial'
  WHEN 'gamingconsole' THEN 'serial'
  WHEN 'appliance'     THEN 'serial'
  WHEN 'appliances'    THEN 'serial'
  WHEN 'tv'            THEN 'serial'

  -- firearm
  WHEN 'firearm'       THEN 'firearm'
  WHEN 'gun'           THEN 'firearm'
  WHEN 'rifle'         THEN 'firearm'
  WHEN 'pistol'        THEN 'firearm'
  WHEN 'handgun'       THEN 'firearm'
  WHEN 'weapon'        THEN 'firearm'

  -- bicycle
  WHEN 'bicycle'       THEN 'bicycle'
  WHEN 'bike'          THEN 'bicycle'
  WHEN 'ebike'         THEN 'bicycle'

  -- anything else: leave exactly as-is
  ELSE item_type
END
WHERE item_type IS NOT NULL;

COMMIT;
-- (use ROLLBACK; instead of COMMIT; if the row count looks wrong)


-- ============================================================
-- STEP 3 — VERIFY: should return exactly 6 rows.
-- ============================================================
select item_type, count(*)
from verification_searches
group by item_type
order by count desc;


-- ============================================================
-- STEP 4 — LEFTOVERS: anything that did NOT map.
-- Empty result = clean. Any rows here need a mapping added
-- to BOTH this script and src/lib/itemType.ts before re-running.
-- ============================================================
select item_type, count(*)
from verification_searches
where item_type not in ('phone','vehicle','plate','serial','firearm','bicycle')
group by item_type;
