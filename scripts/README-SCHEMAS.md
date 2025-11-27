# Schema System Documentation

## Quick Reference

### Run Tests
```bash
# Full test suite
tsx scripts/test-schema-system.ts

# Quick count
tsx scripts/count-schemas-now.ts
```

### Generate Static HTML (Automatic during build)
```bash
npm run build
# Automatically runs: tsx scripts/generate-static-schemas.ts
```

### Verify Results
```bash
# Check generated files
ls -la dist/*.html

# View schema in a file
grep -A 50 'application/ld+json' dist/index.html
```

---

## Files Overview

### `schema-definitions.ts`
**Purpose:** Single source of truth for all 37 schemas
**Contains:** 
- 11 page definitions
- 34 page-specific schemas
- Utility functions

### `generate-static-schemas.ts`
**Purpose:** Injects schemas into static HTML files
**Runs:** Automatically after `npm run build`
**Output:** 11 HTML files in `dist/` with embedded schemas

### `test-schema-system.ts`
**Purpose:** Comprehensive validation suite
**Tests:**
- Schema count (37 total)
- Structure validation
- Duplicate detection
- Page coverage
- Type distribution

### `count-schemas-now.ts`
**Purpose:** Quick visual count
**Output:** Formatted list of all schemas

---

## Schema Types Used

| Type | Count | Pages |
|------|-------|-------|
| BreadcrumbList | 11 | All pages |
| Service | 9 | Home, Verify, Pricing |
| FAQPage | 5 | Multiple |
| MobileApplication | 2 | /mobile-app, /app |
| SoftwareApplication | 5 | Global + apps |
| WebApplication | 2 | /dashboard, /account |
| HowTo | 1 | /verify |
| AboutPage | 1 | /about |
| ContactPoint | 1 | /about |
| WebPage | 2 | /terms, /privacy |
| Organization | 1 | Global |
| WebSite | 1 | Global |

---

## Adding New Schemas

1. **Edit `schema-definitions.ts`:**
```typescript
{
  path: '/new-page',
  title: 'New Page Title',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Service Name",
      // ... schema data
    }
  ]
}
```

2. **Test:**
```bash
tsx scripts/test-schema-system.ts
```

3. **Build:**
```bash
npm run build
```

4. **Verify:**
```bash
grep 'application/ld+json' dist/new-page.html | wc -l
```

---

## Troubleshooting

### "Only 5 schemas validating"
✅ **Fixed:** Static generation ensures all schemas visible

### "Schemas not in page source"
- ✅ Check: Did build run successfully?
- ✅ Check: Is `generate-static-schemas.ts` being executed?
- ✅ Check: Are files in `dist/` folder?

### "Build fails"
- Check: Node version (need 18+)
- Check: Dependencies installed
- Run: `npm install`

### "Test fails"
- Check schema syntax in `schema-definitions.ts`
- Ensure all required fields present
- Verify no duplicate schemas on same page

---

## Best Practices

1. **Always test before building:**
   ```bash
   tsx scripts/test-schema-system.ts && npm run build
   ```

2. **Verify after build:**
   ```bash
   tsx scripts/count-schemas-now.ts
   ```

3. **Validate with Google:**
   - Use Rich Results Test
   - Submit sitemap to GSC
   - Monitor "Schema OK" status

4. **Keep schemas updated:**
   - Update dates in legal pages
   - Refresh offer prices
   - Add new FAQs as needed

---

## Performance Notes

- **Build Time:** +2-3 seconds for schema injection
- **File Size:** +5-10KB per page (compressed schemas)
- **SEO Impact:** Massive improvement (5 → 37 schemas)
- **Maintenance:** Update only `schema-definitions.ts`

---

For questions or issues, refer to:
- Main docs: `SCHEMA-IMPLEMENTATION-COMPLETE.md`
- Google schema docs: https://schema.org/
- Rich results test: https://search.google.com/test/rich-results
