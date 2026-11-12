#!/usr/bin/env python3
"""
Nov 12 2026: share thumbnails (og:image / twitter:image) and lightweight in-page photos.

Before this, every page shared the square logo as its social thumbnail (while the tags claimed
1200x630), and the 63 item check pages had no picture at all. This script builds:

  public/images/og/default.jpg            sitewide 1200x630 share card
  public/images/og/cat-<category>.jpg     one card per item category
  public/images/og/<route-slug>.jpg       one card per item check page, headlined with its H1
  public/images/cards/<photo>-<w>.webp    WebP copies of the site's own photos for in-page use
  src/lib/shareImages.generated.ts        which routes have their own card

Only the site's own photos (public/images/cards, made for SafeOrStolen) and the Inter font
(SIL Open Font License) are used. Run: python3 scripts/generate-share-images.py
"""
import json
import os
import re
import glob
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, 'public')
OUT = os.path.join(PUB, 'images', 'og')
CARDS = os.path.join(PUB, 'images', 'cards')
os.makedirs(OUT, exist_ok=True)

W, H = 1200, 630
BG = (15, 17, 21)
ORANGE = (244, 121, 25)
WHITE = (255, 255, 255)
GREY = (196, 201, 210)

FONT_DIR = '/usr/share/fonts/opentype/inter'
BOLD = os.path.join(FONT_DIR, 'Inter-Bold.otf')
SEMI = os.path.join(FONT_DIR, 'Inter-SemiBold.otf')
if not os.path.exists(SEMI):
    SEMI = BOLD

# Category -> background photo (all made for SafeOrStolen). Keep in sync with
# CATEGORY_IMAGES in src/lib/shareImages.ts.
PHOTOS = {
    'firearm': 'cards/firearms-check.jpg',
    'phone': 'cards/phone-imei.jpg',
    'vehicle': 'cards/vehicle-vin.jpg',
    'plate': 'cards/license-plate.jpg',
    'bike': 'cards/bicycle-serial.jpg',
    'electronics': 'cards/laptop-electronics.jpg',
    'general': 'item-verified-result.jpg',
}
CATEGORY_HEADLINES = {
    'firearm': 'Free Gun Serial Number Lookup',
    'phone': 'Free IMEI Check: Is This Phone Stolen?',
    'vehicle': 'Free VIN Check for Stolen Vehicles',
    'plate': 'Free License Plate Stolen Check',
    'bike': 'Free Bike Serial Number Check',
    'electronics': 'Free Serial Number Check for Electronics',
    'general': 'Check if an Item Is Stolen Before You Buy',
}


EXTRA_PAGES = [
    ('/firearms-check', 'Free Gun Serial Number Lookup for Private Citizens', 'firearm'),
    ('/app', 'Free App to Check a Gun Serial Number, IMEI or VIN', 'phone'),
]


def category_for(item_type: str, search_type: str) -> str:
    """Mirror of categoryForItem in src/lib/shareImages.ts."""
    it = (item_type or '').lower()
    st = (search_type or '').lower()
    if st == 'firearm' or 'firearm' in it or 'gun' in it:
        return 'firearm'
    if st == 'imei' or re.search(r'phone|iphone|android|samsung', it):
        return 'phone'
    if st == 'plate' or 'plate' in it:
        return 'plate'
    if st == 'vin' or re.search(r'vehicle|car\b|^car$', it):
        return 'vehicle'
    if st == 'bike' or re.search(r'bike|bicycle|scooter', it):
        return 'bike'
    if re.search(r'laptop|tablet|\btv\b|electronics', it):
        return 'electronics'
    return 'general'


def font(path, size):
    return ImageFont.truetype(path, size)


def wrap(draw, text, fnt, max_w):
    words, lines, cur = text.split(), [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if draw.textlength(t, font=fnt) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def cover(img, w, h):
    r = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * r), round(img.height * r)), Image.LANCZOS)
    left = (img.width - w) // 2
    top = (img.height - h) // 2
    return img.crop((left, top, left + w, top + h))


LOGO = Image.open(os.path.join(PUB, 'sos-logo.png')).convert('RGBA')
# Trim the logo's dark frame to the mark itself.
LOGO = LOGO.crop((95, 100, 545, 345))


def card(headline: str, photo_rel: str, out_path: str, kicker: str = 'SafeOrStolen'):
    canvas = Image.new('RGB', (W, H), BG)
    photo = Image.open(os.path.join(PUB, 'images', photo_rel)).convert('RGB')
    photo = cover(photo, 620, H)
    canvas.paste(photo, (W - 620, 0))

    # Fade the photo into the dark panel so the text side stays readable.
    fade = Image.new('L', (W, H), 0)
    fd = ImageDraw.Draw(fade)
    for x in range(W - 620, W - 320):
        a = int(255 * (1 - (x - (W - 620)) / 300))
        fd.line([(x, 0), (x, H)], fill=a)
    fd.rectangle([0, 0, W - 620, H], fill=255)
    canvas = Image.composite(Image.new('RGB', (W, H), BG), canvas, fade)

    d = ImageDraw.Draw(canvas)
    d.rectangle([64, 92, 64 + 8, 92 + 56], fill=ORANGE)
    d.text((88, 96), kicker, font=font(SEMI, 34), fill=ORANGE)

    max_w = 640
    size = 64
    while size > 40:
        f = font(BOLD, size)
        lines = wrap(d, headline, f, max_w)
        if len(lines) <= 4:
            break
        size -= 4
    y = 186
    for line in lines:
        d.text((64, y), line, font=f, fill=WHITE)
        y += int(size * 1.16)

    d.text((64, H - 112), 'First check free  ·  Results in seconds', font=font(SEMI, 28), fill=GREY)
    d.text((64, H - 70), 'safeorstolen.com', font=font(BOLD, 30), fill=WHITE)

    logo = LOGO.copy()
    logo.thumbnail((150, 84), Image.LANCZOS)
    plate = Image.new('RGBA', (logo.width + 24, logo.height + 16), (15, 17, 21, 230))
    plate.alpha_composite(logo, (12, 8))
    canvas.paste(plate, (W - plate.width - 28, H - plate.height - 24), plate)

    canvas.save(out_path, 'JPEG', quality=80, optimize=True, progressive=True)


def page_entries():
    """Find every item check page: route path, H1, category."""
    routes = {}
    for rf in glob.glob(os.path.join(ROOT, 'src', 'routes', '**', '*.tsx'), recursive=True):
        src = open(rf).read()
        m = re.search(r'createFileRoute\("([^"]+)"\)', src)
        imp = re.search(r'from "@/pages/([^"]+)"', src)
        if m and imp:
            routes[imp.group(1)] = m.group(1).rstrip('/') or '/'
    entries = []
    for pf in glob.glob(os.path.join(ROOT, 'src', 'pages', '**', '*.tsx'), recursive=True):
        src = open(pf).read()
        if '<ItemLandingPageTemplate' not in src:
            continue
        rel = os.path.relpath(pf, os.path.join(ROOT, 'src', 'pages'))[:-4]
        route = routes.get(rel)
        if not route:
            continue
        h1 = re.search(r'h1=["\']([^"\']+)["\']', src)
        it = re.search(r'itemType=["\']([^"\']+)["\']', src)
        st = re.search(r'searchType=["\']([^"\']+)["\']', src)
        entries.append({
            'route': route,
            'h1': h1.group(1) if h1 else '',
            'category': category_for(it.group(1) if it else '', st.group(1) if st else ''),
        })
    return sorted(entries, key=lambda e: e['route'])


def slug(route):
    return route.strip('/').replace('/', '--') or 'home'


def webp_copies():
    for base in ['firearms-check', 'phone-imei', 'vehicle-vin', 'license-plate', 'bicycle-serial',
                 'laptop-electronics']:
        for w in (480, 768):
            src = Image.open(os.path.join(CARDS, base + '.jpg')).convert('RGB')
            src = src.resize((w, round(src.height * w / src.width)), Image.LANCZOS)
            src.save(os.path.join(CARDS, f'{base}-{w}.webp'), 'WEBP', quality=72, method=6)
    for w in (480, 768):
        src = Image.open(os.path.join(PUB, 'images', 'item-verified-result.jpg')).convert('RGB')
        src = src.resize((w, round(src.height * w / src.width)), Image.LANCZOS)
        src.save(os.path.join(PUB, 'images', f'item-verified-result-{w}.webp'), 'WEBP', quality=72, method=6)


def main():
    card('Check if a Phone, Car, Gun or Bike Is Stolen Before You Buy', PHOTOS['general'],
         os.path.join(OUT, 'default.jpg'))
    for cat, photo in PHOTOS.items():
        card(CATEGORY_HEADLINES[cat], photo, os.path.join(OUT, f'cat-{cat}.jpg'))
    routes = []
    for e in page_entries():
        if not e['h1']:
            continue
        card(e['h1'], PHOTOS[e['category']], os.path.join(OUT, slug(e['route']) + '.jpg'))
        routes.append(e['route'])
    # Hand-built pages that rank and don't use the item template.
    for route, headline, cat in EXTRA_PAGES:
        card(headline, PHOTOS[cat], os.path.join(OUT, slug(route) + '.jpg'))
        routes.append(route)
    routes.sort()
    webp_copies()
    ts = (
        '// Generated by scripts/generate-share-images.py. Do not edit by hand.\n'
        '// Routes that have their own 1200x630 share card in public/images/og/.\n'
        f'export const ROUTES_WITH_SHARE_CARD: ReadonlySet<string> = new Set({json.dumps(routes, indent=2)});\n'
    )
    open(os.path.join(ROOT, 'src', 'lib', 'shareImages.generated.ts'), 'w').write(ts)
    print(f'{len(routes)} page cards, {len(PHOTOS)} category cards, 1 default')


if __name__ == '__main__':
    main()
