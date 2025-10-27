# Canonical URL Strategy

## Primary Method: Use PageSEO Component

All pages should use the `<PageSEO>` component which automatically handles canonical URLs:

```tsx
import { PageSEO } from '@/components/seo/PageSEO';

<PageSEO
  title="Page Title"
  description="Page description"
  canonical="/page-path"  // Relative path - will be converted to full URL
  structuredData={...}
/>
```

## How It Works

1. **PageSEO** component passes canonical to **OptimizedSEOHead**
2. **OptimizedSEOHead** converts relative paths to full URLs with `https://safeorstolen.com` domain
3. Renders both `<link rel="canonical">` and `<meta property="og:url">` tags consistently

## DO NOT:
- ❌ Add hardcoded `<link rel="canonical">` tags in Helmet
- ❌ Use multiple SEO components on same page
- ❌ Use `window.location.href` for canonicals (includes query params)
- ❌ Include query parameters in canonical URLs
- ❌ Use trailing slashes (e.g., `/pricing/` should be `/pricing`)

## Exceptions:

### Static Single-Purpose Pages
Pages with explicit, unchanging URLs can have hardcoded canonicals:
- `/imei-check` → `https://safeorstolen.com/imei-check`
- `/vin-verification` → `https://safeorstolen.com/vin-verification`
- `/mobile-app` → `https://safeorstolen.com/mobile-app`

### Dynamic City Pages
City pages use dynamic canonicals based on URL params:
```tsx
<link rel="canonical" href={`https://safeorstolen.com/city/${city}`} />
```

**IMPORTANT:** These exceptions should NOT also use `<PageSEO>` component to avoid duplicate canonical tags.

## Verification Checklist

For any new page:
- [ ] Uses `<PageSEO>` component with `canonical` prop
- [ ] No additional `<link rel="canonical">` tags in page
- [ ] Canonical URL is relative path (e.g., `/pricing`) not full URL
- [ ] No query parameters in canonical URL
- [ ] Only ONE SEO component active per page
- [ ] Test in browser: `curl https://safeorstolen.com/[page] | grep 'rel="canonical"'`
- [ ] Verify only ONE canonical tag appears

## Troubleshooting

### Multiple Canonical Tags on Same Page
**Problem:** Two `<link rel="canonical">` tags render
**Solution:** 
1. Check if page uses both hardcoded Helmet canonical AND PageSEO
2. Remove hardcoded canonical, let PageSEO handle it
3. Search for: `<link rel="canonical"` in the page file

### Canonical Has Query Parameters
**Problem:** `https://safeorstolen.com/page?param=value` in canonical
**Solution:** 
1. Never use `window.location.href` for canonicals
2. Use clean path in PageSEO: `canonical="/page"`

### Wrong Domain in Canonical
**Problem:** Using preview or localhost URLs
**Solution:** 
1. Always use relative paths: `canonical="/pricing"`
2. OptimizedSEOHead will add correct domain

## Testing After Changes

1. **Deploy to production**
2. **Test each page:**
   ```bash
   curl https://safeorstolen.com/pricing | grep 'rel="canonical"'
   # Should output exactly ONE line
   ```
3. **Use Google Rich Results Test:**
   - Enter URL: https://search.google.com/test/rich-results
   - Confirm single canonical tag present
   - Verify no "duplicate canonical" warnings
4. **Request re-indexing:**
   - Google Search Console → URL Inspection
   - Submit priority URLs
   - Monitor "Page indexing" report

## Common Mistakes to Avoid

1. **Using Full URLs in PageSEO:**
   ```tsx
   // ❌ WRONG
   <PageSEO canonical="https://safeorstolen.com/pricing" />
   
   // ✅ CORRECT
   <PageSEO canonical="/pricing" />
   ```

2. **Mixing Approaches:**
   ```tsx
   // ❌ WRONG - Two canonical sources
   <Helmet>
     <link rel="canonical" href="..." />
   </Helmet>
   <PageSEO canonical="..." />
   
   // ✅ CORRECT - One source only
   <PageSEO canonical="..." />
   ```

3. **Dynamic Query Parameters:**
   ```tsx
   // ❌ WRONG
   canonical={window.location.href} // /page?search=test
   
   // ✅ CORRECT
   canonical="/page" // Clean path only
   ```

## Files Modified (2025-10-27)

### Phase 1 - Critical Fix
- **src/components/seo/OptimizedSEOHead.tsx** - Added canonical link tag rendering

### Phase 2 - Cleanup
- **src/components/seo/OptimizedContent.tsx** - Removed window.location.href canonical

### Phase 3 - Verification
- **src/components/seo/MobileAppMetaTags.tsx** - Kept hardcoded canonical (single-purpose page)
- **src/pages/LocalSEOPage.tsx** - Kept dynamic city canonical (no PageSEO conflict)

## Expected Results

- ✅ All 99+ pages using PageSEO now have proper canonical tags
- ✅ No duplicate canonical tags on any page
- ✅ Clean URLs without query parameters
- ✅ Consistent og:url and canonical tags
- ✅ Google Search Console warnings should clear in 3-7 days
