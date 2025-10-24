# Google Search Console Setup Guide for SafeOrStolen.com

## Step 1: Verify Your Domain

### Option A: DNS Verification (Recommended)
```
TXT Record Name: @
TXT Record Value: google-site-verification=YOUR_VERIFICATION_CODE
```

### Option B: HTML Tag Verification
Copy and paste this into the `<head>` section of your index.html:
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

---

## Step 2: Submit Your Sitemap

**Sitemap URL to Submit:**
```
https://safeorstolen.com/sitemap.xml
```

Alternative format (if you have dynamic sitemap):
```
https://safeorstolen.com/sitemap
```

---

## Step 3: Submit All Important URLs

### Core Verification Pages (Priority: High)
```
https://safeorstolen.com/
https://safeorstolen.com/stolen-item-checker
https://safeorstolen.com/imei-check
https://safeorstolen.com/vin-verification
https://safeorstolen.com/serial-number-checker
https://safeorstolen.com/stolen-search-console
```

### Natural Language Search URLs (Priority: High)
```
https://safeorstolen.com/how-do-i-check-if-stolen
https://safeorstolen.com/is-this-stolen
https://safeorstolen.com/verify-not-stolen
https://safeorstolen.com/check-if-phone-was-stolen
https://safeorstolen.com/check-if-car-was-stolen
https://safeorstolen.com/free-stolen-check
https://safeorstolen.com/stolen-goods-search
```

### Vehicle-Related URLs (Priority: High)
```
https://safeorstolen.com/stolen-vehicle-database
https://safeorstolen.com/vin-check-lookup
https://safeorstolen.com/check-stolen-car
https://safeorstolen.com/search-stolen-vehicle
https://safeorstolen.com/check-vehicle-stolen
https://safeorstolen.com/stolen-car-vin
https://safeorstolen.com/vehicles-by-license-plate
https://safeorstolen.com/search-stolen-cars
https://safeorstolen.com/vin-stolen-check
```

### Phone-Related URLs (Priority: High)
```
https://safeorstolen.com/stolen-phone-check
https://safeorstolen.com/search-stolen-phone
https://safeorstolen.com/search-stolen-mobile
https://safeorstolen.com/search-stolen-iphone
https://safeorstolen.com/imei-stolen-check
https://safeorstolen.com/check-phone
```

### Additional Search Terms (Priority: Medium)
```
https://safeorstolen.com/stolen-item-lookup
https://safeorstolen.com/check-stolen-item
https://safeorstolen.com/stolen-items-list
https://safeorstolen.com/check-stolen-database
https://safeorstolen.com/stolen-property-check
https://safeorstolen.com/stolen-item-search
https://safeorstolen.com/check-stolen-goods
https://safeorstolen.com/stolen-check-free
https://safeorstolen.com/verify-serial-number
```

### Firearms & Specialized Items (Priority: Medium)
```
https://safeorstolen.com/search-stolen-firearms
https://safeorstolen.com/search-stolen-guns
https://safeorstolen.com/stolen-gun-database
https://safeorstolen.com/firearms-check
```

### Bike-Related URLs (Priority: Medium)
```
https://safeorstolen.com/search-stolen-bikes
https://safeorstolen.com/check-bike-stolen
https://safeorstolen.com/check-bike
```

### Item Categories (Priority: Medium)
```
https://safeorstolen.com/check-car
https://safeorstolen.com/check-electronics
https://safeorstolen.com/item-categories
```

### Information & Guides (Priority: Medium)
```
https://safeorstolen.com/how-it-works
https://safeorstolen.com/about
https://safeorstolen.com/faq
https://safeorstolen.com/pricing
https://safeorstolen.com/contact
https://safeorstolen.com/blog
```

### Trust & Legal Pages (Priority: Low)
```
https://safeorstolen.com/trust-verification
https://safeorstolen.com/data-sources
https://safeorstolen.com/transparency
https://safeorstolen.com/accuracy
https://safeorstolen.com/terms
https://safeorstolen.com/privacy
```

---

## Step 4: Configure Robots.txt

Ensure your robots.txt allows Google to crawl:
```
User-agent: *
Allow: /

Sitemap: https://safeorstolen.com/sitemap.xml
```

---

## Step 5: Set Up Structured Data

Your site already has JSON-LD structured data implemented. Verify it with:
**Rich Results Test URL:**
```
https://search.google.com/test/rich-results
```

Test these key pages:
- Homepage (WebSite schema)
- Stolen Item Checker (WebApplication schema)
- Blog posts (Article schema)
- Press Release (NewsArticle schema)

---

## Step 6: Submit for Indexing (Manual URL Inspection)

Use the URL Inspection tool in Google Search Console to request indexing for:

**Top Priority URLs (Request Immediately):**
1. https://safeorstolen.com/
2. https://safeorstolen.com/stolen-item-checker
3. https://safeorstolen.com/imei-check
4. https://safeorstolen.com/vin-verification
5. https://safeorstolen.com/stolen-search-console
6. https://safeorstolen.com/how-do-i-check-if-stolen
7. https://safeorstolen.com/is-this-stolen
8. https://safeorstolen.com/verify-not-stolen

---

## Step 7: Set Up Performance Tracking

### Target Keywords to Monitor:
```
stolen item checker
check if stolen
is this stolen
verify not stolen
IMEI check
VIN verification
stolen phone check
stolen car check
how do i check if something is stolen
free stolen check
stolen goods search
stolen vehicle database
check if phone was stolen
check if car was stolen
stolen items list
check stolen database
stolen search console
```

---

## Step 8: International Targeting (Optional)

If targeting multiple countries:
**Geographic Target:** United States (Primary)
**Secondary Markets:** Canada, United Kingdom, Australia

---

## Step 9: Mobile Usability

Ensure all pages pass mobile-friendly test:
**Test URL:**
```
https://search.google.com/test/mobile-friendly
```

---

## Step 10: Core Web Vitals

Monitor these metrics in Google Search Console:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

---

## Quick Copy-Paste Checklist

**✅ Primary Actions:**
1. Add verification meta tag to `<head>`
2. Submit sitemap: `https://safeorstolen.com/sitemap.xml`
3. Request indexing for top 8 priority URLs
4. Set up keyword monitoring for "stolen item checker" and variants
5. Verify structured data with Rich Results Test

**✅ Weekly Tasks:**
- Check Coverage report for indexing issues
- Monitor Performance report for keyword rankings
- Review manual actions (should be 0)
- Check Core Web Vitals

**✅ Monthly Tasks:**
- Submit new blog posts for indexing
- Review and update popular search terms
- Analyze Search Analytics data
- Update content based on search queries

---

## Important Notes:

1. **Don't submit all URLs at once** - Google limits manual URL inspections. Focus on top priority pages first.

2. **Sitemap auto-updates** - Once your sitemap is submitted, Google will automatically check it regularly for new URLs.

3. **Be patient** - Indexing can take 1-4 weeks for new sites, faster for established domains.

4. **Monitor "Coverage"** report weekly to catch any indexing errors.

5. **Use "URL Parameters"** tool if you have query strings that shouldn't be indexed separately.

---

## Support Resources:

- Google Search Console Help: https://support.google.com/webmasters
- Schema.org Documentation: https://schema.org
- Google Search Central Blog: https://developers.google.com/search/blog

---

**Last Updated:** January 2025
**Domain:** safeorstolen.com
**Total Optimized URLs:** 75+
**Primary Focus:** Stolen item verification and safety
