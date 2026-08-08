/**
 * Deno copy of src/lib/itemType.ts — keep both in sync.
 *
 * Canonical item_type normalizer.
 *
 * The `verification_searches.item_type` column must only ever contain one of
 * six lowercase machine values. Display labels ("Serial Number", "Mobile Phone")
 * must NEVER be written to the database — use a separate display helper.
 */

export type CanonicalItemType =
  | 'phone'
  | 'vehicle'
  | 'plate'
  | 'serial'
  | 'firearm'
  | 'bicycle';

export const CANONICAL_ITEM_TYPES: CanonicalItemType[] = [
  'phone',
  'vehicle',
  'plate',
  'serial',
  'firearm',
  'bicycle',
];

/**
 * Deno copy of src/lib/itemType.ts — keep both in sync.
 * Fallback used when an input cannot be mapped. */
export const DEFAULT_ITEM_TYPE: CanonicalItemType = 'serial';

const MAP: Record<string, CanonicalItemType> = {
  // phone
  phone: 'phone',
  smartphone: 'phone',
  imei: 'phone',
  iphone: 'phone',
  android: 'phone',
  androidphone: 'phone',
  mobile: 'phone',
  mobilephone: 'phone',
  cell: 'phone',
  cellphone: 'phone',
  // vehicle
  vehicle: 'vehicle',
  vin: 'vehicle',
  car: 'vehicle',
  truck: 'vehicle',
  motorcycle: 'vehicle',
  auto: 'vehicle',
  automobile: 'vehicle',
  // plate
  plate: 'plate',
  licenseplate: 'plate',
  tag: 'plate',
  // serial
  serial: 'serial',
  serialnumber: 'serial',
  electronics: 'serial',
  laptop: 'serial',
  tablet: 'serial',
  camera: 'serial',
  tool: 'serial',
  tools: 'serial',
  powertool: 'serial',
  powertools: 'serial',
  console: 'serial',
  gamingconsole: 'serial',
  appliance: 'serial',
  appliances: 'serial',
  tv: 'serial',
  // firearm
  firearm: 'firearm',
  gun: 'firearm',
  rifle: 'firearm',
  pistol: 'firearm',
  handgun: 'firearm',
  weapon: 'firearm',
  // bicycle
  bicycle: 'bicycle',
  bike: 'bicycle',
  ebike: 'bicycle',
};

/**
 * Deno copy of src/lib/itemType.ts — keep both in sync.
 * Lowercase, trim, strip spaces/underscores/hyphens. */
function canonicalKey(input: string): string {
  return input.toLowerCase().trim().replace(/[\s_\-.]/g, '');
}

/**
 * Deno copy of src/lib/itemType.ts — keep both in sync.
 *
 * Maps any raw label or machine value to a canonical item type.
 * Returns null when the input is unrecognized.
 */
export function normalizeItemType(input: string): CanonicalItemType | null {
  if (!input || typeof input !== 'string') return null;
  const key = canonicalKey(input);
  if (!key) return null;
  return MAP[key] ?? null;
}

/**
 * Deno copy of src/lib/itemType.ts — keep both in sync.
 *
 * Always returns a canonical value, never null.
 * Logs a warning with the offending raw value before falling back.
 */
export function toCanonicalItemType(
  input: string | null | undefined,
  fallback: CanonicalItemType = DEFAULT_ITEM_TYPE
): CanonicalItemType {
  const normalized = input ? normalizeItemType(input) : null;
  if (normalized) return normalized;
  console.warn(
    `[itemType] Unmapped item_type value "${input ?? ''}" — storing "${fallback}" instead.`
  );
  return fallback;
}

/**
 * Deno copy of src/lib/itemType.ts — keep both in sync.
 * Display label for a canonical value (never store these). */
export function itemTypeLabel(type: CanonicalItemType): string {
  const labels: Record<CanonicalItemType, string> = {
    phone: 'Phone (IMEI)',
    vehicle: 'Vehicle (VIN)',
    plate: 'License Plate',
    serial: 'Serial Number',
    firearm: 'Firearm',
    bicycle: 'Bicycle',
  };
  return labels[type];
}
