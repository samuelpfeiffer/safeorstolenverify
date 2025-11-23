# SafeOrStolen Site Architecture

## Navigation Structure

### Primary Navigation (Header)
```
Home | Verify | Pricing | How It Works | Install App | Blog
```

### Main Site Sections

#### 1. VERIFICATION TOOLS
**Main Route:** `/verify`
- `/verify` - Main verification tool (IMEI, VIN, Serial)
- `/verify/ebay` - eBay item verification
- `/verify/facebook-marketplace` - Facebook Marketplace verification
- `/verify/offerup` - OfferUp verification
- `/verify/auctions` - Auction verification
- `/verify/pawnshops` - Pawnshop verification

**Specific Checkers:**
- `/imei-checker` - Phone IMEI verification
- `/vin-checker` - Vehicle VIN verification
- `/serial-number-checker` - Serial number verification
- `/check-car` - Vehicle verification
- `/check-phone` - Phone verification
- `/check-laptop` - Laptop verification
- `/check-bike` - Bike verification
- `/check-firearm` - Firearm verification

#### 2. MOBILE APP
**Main Route:** `/mobile-app`
- `/mobile-app` - Main app landing page
- `/app/download` - Comprehensive download page
- `/app/ios` - iOS installation guide
- `/app/android` - Android installation guide
- `/app/pwa` - PWA installation guide
- `/install-app` - Universal install page

**App Comparisons:**
- `/app/vs-checkmend` - vs CheckMEND
- `/app/vs-imeiinfo` - vs IMEI.info
- `/app/vs-carfax` - vs Carfax
- `/app/vs-swappa` - vs Swappa
- `/app/vs-nicb` - vs NICB
- `/app/vs-stolen-register` - vs Stolen Register
- `/app/vs-imeipro` - vs IMEIPro

#### 3. INFORMATION & GUIDES
**Main Route:** `/how-it-works`
- `/how-it-works` - Main guide
- `/how-it-works-detailed` - Detailed explanation
- `/marketplace-safety` - Marketplace safety guide
- `/legal-guide` - Legal aspects of stolen goods

**Marketplace Guides:**
- `/guides/ebay-buyer-protection` - eBay safety
- `/guides/facebook-marketplace-safety` - Facebook safety
- `/guides/offerup-verification` - OfferUp safety
- `/guides/auction-house-safety` - Auction safety
- `/guides/pawnshop-buying-tips` - Pawnshop tips

#### 4. RESOURCES
- `/blog` - Blog home
- `/blog/[slug]` - Individual blog posts
- `/faq` - Frequently asked questions
- `/statistics` - Stolen goods statistics
- `/testimonials` - User testimonials
- `/case-studies` - Success stories

#### 5. COMPARISON PAGES
**Main Route:** `/vs`
- `/vs/carfax` - vs Carfax
- `/vs/checkmend` - vs CheckMEND
- `/vs/imei-info` - vs IMEI.info
- `/vs/stolen-register` - vs Stolen Register
- `/vs/nicb` - vs NICB
- `/vs/autocheck` - vs AutoCheck

#### 6. COMPANY
- `/about` - About us
- `/contact` - Contact page
- `/press` - Press releases
- `/transparency` - Transparency report
- `/security` - Security practices

#### 7. LEGAL
- `/terms` - Terms of service
- `/privacy` - Privacy policy
- `/disclaimer` - Disclaimer
- `/cookies` - Cookie policy

#### 8. USER ACCOUNT
**Protected Routes:**
- `/dashboard` - User dashboard
- `/profile` - User profile
- `/subscription` - Subscription management
- `/search-history` - Search history
- `/analytics` - Personal analytics

#### 9. REGIONAL PAGES (SEO)
**State VIN Lookups:**
- `/[state]-vin-lookup` (50 states)
- `/arizona-vin-lookup`
- `/california-vin-lookup`
- etc.

**License Plate Lookups:**
- `/[state]-license-plate-lookup` (5 key states)
- `/arizona-license-plate-lookup`
- `/california-license-plate-lookup`
- etc.

**International:**
- `/uk-vehicle-check`
- `/canada-vin-check`
- `/australia-vin-check`

#### 10. BUSINESS & ENTERPRISE
- `/for-brands` - Business solutions
- `/data-partnerships` - Data partnerships
- `/enterprise-demo` - Enterprise demo

---

## Page Consolidation Plan

### DUPLICATES TO CONSOLIDATE:

**Verification Pages (Keep 1, Redirect Others):**
- KEEP: `/verify` (main verification tool)
- REDIRECT: `/check-if-stolen`, `/stolen-item-checker`, `/check-stolen-item`, `/verify-not-stolen`

**Statistics Pages:**
- KEEP: `/stolen-goods-statistics-2025`
- REDIRECT: `/stolen-goods-statistics-2024`, `/statistics`, `/stolen-goods-statistics`

**Mobile App:**
- KEEP: `/mobile-app` (main), `/app/download` (comprehensive)
- REDIRECT: `/download`, `/install-app` → `/app/download`

**Dashboards:**
- KEEP: `/dashboard` (main dashboard)
- REDIRECT: `/dashboard-old` → `/dashboard`

---

## URL Redirect Strategy

### SEO-Safe Redirects:
All redirects use 301 (permanent) redirects with proper canonical tags.

### Redirect Categories:

1. **Old URLs → New Clean URLs**
2. **Duplicate Content → Primary Page**
3. **Marketplace-Specific → Unified Pages**
4. **Competitor Names → Comparison Pages**

---

## Footer Structure

### Column 1: Verification
- Verify Items
- IMEI Checker
- VIN Checker
- Serial Number Checker
- Mobile App

### Column 2: Marketplaces
- eBay Verification
- Facebook Marketplace
- OfferUp Safety
- Auction Houses
- Pawn Shops

### Column 3: Resources
- Blog
- How It Works
- FAQ
- Statistics
- Case Studies

### Column 4: Company
- About
- Contact
- Press
- Careers
- Transparency

### Column 5: Legal
- Terms
- Privacy
- Disclaimer
- Security
- Cookies

---

## Mobile Navigation

### Primary (Bottom Nav):
- Home
- Verify
- App
- Account

### Drawer Menu:
- All primary navigation
- Quick links
- User account

---

## SEO Best Practices Applied

### 1. Clear URL Structure
✅ Logical hierarchy
✅ Keyword-rich URLs
✅ No duplicate content
✅ Proper redirects (301)

### 2. Internal Linking
✅ Every page links to homepage
✅ Breadcrumb navigation
✅ Related content links
✅ Clear site hierarchy

### 3. Mobile Optimization
✅ Responsive design
✅ Touch-friendly buttons (44px min)
✅ Fast loading (<3s)
✅ Mobile-first indexing ready

### 4. Meta Tags (Every Page)
✅ Unique title (max 60 chars)
✅ Unique description (max 160 chars)
✅ Keywords
✅ Canonical URL
✅ Open Graph tags
✅ Twitter Card tags

### 5. Schema Markup
✅ WebApplication schema
✅ Organization schema
✅ BreadcrumbList schema
✅ FAQPage schema (where applicable)
✅ Service schema

### 6. Performance
✅ Image optimization (WebP, lazy load)
✅ Code splitting
✅ Minification
✅ CDN usage
✅ Cache headers

### 7. Accessibility
✅ Alt text on images
✅ Proper heading hierarchy (H1 → H2 → H3)
✅ Aria labels
✅ Keyboard navigation
✅ Color contrast (WCAG AA)

---

## Sitemap Organization

### Primary Sitemap (sitemap.xml)
- Homepage
- Core verification pages
- Mobile app pages
- Key information pages

### Blog Sitemap (sitemap-blog.xml)
- All blog posts
- Updated weekly

### Regional Sitemap (sitemap-states.xml)
- All 50 state VIN lookup pages
- License plate lookup pages

### Comparison Sitemap (sitemap-vs.xml)
- All competitor comparison pages

---

## Analytics & Tracking

### GA4 Events Tracked:
- Page views
- Verification searches
- App downloads
- Subscription conversions
- User engagement
- Scroll depth
- Exit intent

### Conversion Goals:
1. Verification completed
2. App installed
3. Subscription purchased
4. Email captured
5. Social share

---

## Content Strategy

### Page Types:

1. **Landing Pages** (High Priority SEO)
   - Homepage
   - Verification tool
   - Mobile app
   - Pricing

2. **Information Pages** (Medium Priority SEO)
   - How it works
   - Marketplace guides
   - Legal guide

3. **Comparison Pages** (High Priority SEO)
   - Competitor comparisons
   - Feature comparisons

4. **Blog Content** (High Priority SEO)
   - How-to guides
   - Industry news
   - User stories
   - Best practices

5. **Regional Pages** (Medium Priority SEO)
   - State-specific VIN lookups
   - Local SEO optimization

6. **Legal Pages** (Low Priority SEO, Required)
   - Terms, Privacy, Disclaimer

---

## Technical Requirements

### Performance Targets:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- FCP < 1.8s

### Browser Support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 8+)

### Accessibility:
- WCAG 2.1 AA compliance
- Screen reader compatible
- Keyboard navigation
- High contrast mode

---

## Maintenance Schedule

### Daily:
- Monitor console errors
- Check uptime
- Review analytics

### Weekly:
- Update blog content
- Review search performance
- Check broken links

### Monthly:
- SEO audit
- Performance review
- Security scan
- Content updates

### Quarterly:
- Full site audit
- Competitor analysis
- User feedback review
- Feature roadmap update
