/**
 * Nov 12 2026: pictures for item check pages and their social share cards.
 *
 * Every photo here was made for SafeOrStolen (public/images/cards). Share cards (1200x630) are
 * built by scripts/generate-share-images.py; rerun it after adding an item check page.
 */
import { ROUTES_WITH_SHARE_CARD } from './shareImages.generated';

export type ImageCategory = 'firearm' | 'phone' | 'vehicle' | 'plate' | 'bike' | 'electronics' | 'general';

/** Mirror of category_for() in scripts/generate-share-images.py. */
export function categoryForItem(itemType?: string, searchType?: string): ImageCategory {
  const it = (itemType ?? '').toLowerCase();
  const st = (searchType ?? '').toLowerCase();
  if (st === 'firearm' || it.includes('firearm') || it.includes('gun')) return 'firearm';
  if (st === 'imei' || /phone|iphone|android|samsung/.test(it)) return 'phone';
  if (st === 'plate' || it.includes('plate')) return 'plate';
  if (st === 'vin' || /vehicle|car\b|^car$/.test(it)) return 'vehicle';
  if (st === 'bike' || /bike|bicycle|scooter/.test(it)) return 'bike';
  if (/laptop|tablet|\btv\b|electronics/.test(it)) return 'electronics';
  return 'general';
}

export interface PagePhoto {
  /** Base path without size or extension, e.g. /images/cards/firearms-check */
  base: string;
  /** Full-size JPEG for schema and fallback. */
  jpg: string;
  width: number;
  height: number;
  alt: string;
}

const PHOTOS: Record<ImageCategory, PagePhoto> = {
  firearm: {
    base: '/images/cards/firearms-check',
    jpg: '/images/cards/firearms-check.jpg',
    width: 1024,
    height: 576,
    alt: 'Used handgun on a gun store counter, ready for a serial number check before buying',
  },
  phone: {
    base: '/images/cards/phone-imei',
    jpg: '/images/cards/phone-imei.jpg',
    width: 1024,
    height: 576,
    alt: "Buyer holding a used phone open to its IMEI number in Settings, ready to check if it's stolen",
  },
  vehicle: {
    base: '/images/cards/vehicle-vin',
    jpg: '/images/cards/vehicle-vin.jpg',
    width: 1024,
    height: 576,
    alt: 'VIN plate visible through a car windshield, the number to check for theft reports',
  },
  plate: {
    base: '/images/cards/license-plate',
    jpg: '/images/cards/license-plate.jpg',
    width: 1024,
    height: 576,
    alt: 'License plate on the back of a used car, ready for a stolen vehicle check',
  },
  bike: {
    base: '/images/cards/bicycle-serial',
    jpg: '/images/cards/bicycle-serial.jpg',
    width: 1024,
    height: 576,
    alt: 'Road bike frame, where the serial number to check is stamped under the bottom bracket',
  },
  electronics: {
    base: '/images/cards/laptop-electronics',
    jpg: '/images/cards/laptop-electronics.jpg',
    width: 1024,
    height: 576,
    alt: 'Used laptop, phone and electronics on a desk, each with a serial number to check before buying',
  },
  general: {
    base: '/images/item-verified-result',
    jpg: '/images/item-verified-result.jpg',
    width: 960,
    height: 640,
    alt: 'SafeOrStolen check result on a phone and laptop, showing the serial number searched',
  },
};

export function photoForCategory(cat: ImageCategory): PagePhoto {
  return PHOTOS[cat];
}

/** The 1200x630 share card for a route: its own card when built, else its category's card. */
export function shareImageFor(pathname: string, cat: ImageCategory): string {
  const route = pathname.replace(/\/+$/, '') || '/';
  if (ROUTES_WITH_SHARE_CARD.has(route)) {
    const slug = route.replace(/^\/+/, '').replace(/\//g, '--') || 'home';
    return `/images/og/${slug}.jpg`;
  }
  return `/images/og/cat-${cat}.jpg`;
}

export const DEFAULT_SHARE_IMAGE = '/images/og/default.jpg';
