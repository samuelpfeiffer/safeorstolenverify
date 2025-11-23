# SafeOrStolen Navigation Structure

## Design Philosophy

**Goals:**
1. **Clear hierarchy** - Users should know where they are at all times
2. **Maximum 3 clicks** to any page from homepage
3. **Consistent patterns** across all pages
4. **Mobile-first** navigation design
5. **SEO-optimized** internal linking

---

## Primary Navigation (Header)

### Desktop Navigation Bar
```
[Logo] Home | Verify | Pricing | How It Works | Download App | Blog [Sign In/Account]
```

**Sticky Header:** Yes (fixed position, backdrop blur)
**Max Items:** 6 main links + CTA button
**Active State:** Red underline gradient animation

---

## Navigation Hierarchy

### Level 1: Main Categories (Header)
```
├── Home (/)
├── Verify (/verify)
├── Pricing (/pricing)
├── How It Works (/how-it-works)
├── Download App (/app/download) [Featured CTA]
└── Blog (/blog)
```

### Level 2: Sub-Categories (Dropdowns/Pages)

#### Verify Dropdown:
```
/verify
  ├── IMEI Checker (Phones)
  ├── VIN Checker (Vehicles)
  ├── Serial Number Checker
  ├── By Marketplace:
  │   ├── eBay
  │   ├── Facebook Marketplace
  │   ├── OfferUp
  │   ├── Auctions
  │   └── Pawn Shops
  └── By Item:
      ├── Check Phone
      ├── Check Car
      ├── Check Laptop
      ├── Check Bike
      └── Check Firearm
```

#### Download App:
```
/app/download
  ├── iOS Installation
  ├── Android Installation
  ├── PWA Installation
  └── Install Guide
```

#### Blog:
```
/blog
  ├── Latest Posts
  ├── How-To Guides
  ├── Industry News
  ├── User Stories
  └── Best Practices
```

---

## Mobile Navigation

### Bottom Navigation Bar (PWA Only)
```
[Home] [Verify] [History] [Settings] [Account]
```

**When Displayed:** Only in standalone PWA mode
**Position:** Fixed bottom, safe area padding
**Items:** 5 icons with labels

### Mobile Menu (Hamburger)
**Triggered By:** Menu icon in header (small screens)
**Style:** Slide-in drawer from left
**Contents:**
- All header links
- Quick links to key pages
- User account section

---

## Footer Navigation

### Column Layout (5 columns, responsive)

**Column 1: Verification**
```
├── Verify Items
├── IMEI Checker
├── VIN Checker
├── Serial Checker
└── Mobile App
```

**Column 2: Marketplaces**
```
├── eBay Verification
├── Facebook Marketplace
├── OfferUp Safety
├── Auction Houses
└── Pawn Shops
```

**Column 3: Resources**
```
├── Blog
├── How It Works
├── FAQ
├── Statistics
└── Testimonials
```

**Column 4: Company**
```
├── About
├── Contact
├── Press
├── For Brands
└── Transparency
```

**Column 5: Legal**
```
├── Terms of Service
├── Privacy Policy
├── Disclaimer
└── Security
```

**Footer Bottom:**
```
[Logo + Tagline] | [Social Media Icons] | © 2025 SafeOrStolen
```

---

## Breadcrumb Navigation

### Pattern:
```
Home > Category > Subcategory > Current Page
```

### Examples:
```
Home > Verify > eBay Verification
Home > Blog > IMEI Checker Guide
Home > Mobile App > Download > iOS Installation
Home > Guides > Marketplace Safety > Facebook Marketplace
```

### Implementation:
- Visible on all pages except homepage
- Clickable links for each level
- Schema.org BreadcrumbList markup
- Mobile-friendly (horizontal scroll if needed)

---

## Internal Linking Strategy

### Every Page Must Include:

1. **Link to Homepage** (logo + breadcrumb)
2. **3-5 Related Pages** (contextual links in content)
3. **Relevant Blog Posts** (2-3 related articles)
4. **Primary CTA** (Verify Now / Download App)
5. **Footer Links** (complete site navigation)

### Link Patterns:

**From Homepage:**
- → All main verification tools
- → Mobile app download
- → How it works
- → Latest blog posts

**From Verification Pages:**
- → Other verification types
- → Marketplace-specific guides
- → Mobile app (CTA)
- → Pricing

**From Blog Posts:**
- → Related blog posts
- → Relevant verification tools
- → How-to guides
- → Mobile app

**From Comparison Pages:**
- → Our verification tool
- → Mobile app
- → Pricing
- → Other comparisons

---

## Mobile-Specific Navigation

### PWA Install Banner
- **Position:** Top of page (dismissible)
- **Trigger:** Mobile web users only
- **Content:** "Install SafeOrStolen app for faster verification"
- **CTA:** "Install Now" button

### Mobile Menu Organization
```
📱 Main Menu
├── 🏠 Home
├── 🔍 Verify
│   ├── Phones (IMEI)
│   ├── Vehicles (VIN)
│   └── Serial Numbers
├── 💰 Pricing
├── ❓ How It Works
├── 📝 Blog
├── 📲 Download App
└── 👤 Account
    ├── Dashboard
    ├── History
    ├── Settings
    └── Sign Out
```

---

## Conversion Flow Navigation

### Primary Conversion Path:
```
Homepage → Verify Tool → Results → [Upgrade CTA] → Pricing → Checkout
```

### Secondary Conversion Path:
```
Blog Post → Related Verify Tool → Results → [Download App CTA] → App Download
```

### Tertiary Conversion Path:
```
Comparison Page → "Try SafeOrStolen" CTA → Verify Tool → Results → Upgrade
```

---

## Navigation Best Practices

### DO:
✅ Use descriptive link text ("IMEI Checker" not "Click Here")
✅ Maintain consistent navigation across all pages
✅ Include breadcrumbs for hierarchy
✅ Use rel="noopener noreferrer" for external links
✅ Add title attributes for accessibility
✅ Highlight active navigation items
✅ Use semantic HTML (`<nav>`, `<header>`, `<footer>`)

### DON'T:
❌ Create orphan pages (pages with no navigation links)
❌ Use generic link text
❌ Hide navigation on mobile
❌ Create deep hierarchies (>3 levels)
❌ Use JavaScript-only links (always include href)
❌ Forget keyboard navigation
❌ Use color alone to indicate state

---

## Accessibility Requirements

### Keyboard Navigation:
- Tab key cycles through all links
- Enter key activates links
- Escape key closes mobile menu/dropdowns
- Arrow keys navigate dropdowns

### Screen Reader Support:
- ARIA labels on icon-only buttons
- ARIA current for active page
- ARIA expanded for dropdowns
- Skip to content link

### Visual Indicators:
- Focus visible on all interactive elements
- Active state clearly indicated
- Hover states on all links
- High contrast in both light/dark modes

---

## Performance Considerations

### Navigation Loading:
- Inline critical navigation HTML
- Lazy load mobile menu content
- Preload likely next pages
- Use route prefetching

### Mobile Optimization:
- Touch targets minimum 44x44px
- No hover-only interactions
- Swipe gestures for mobile menu
- Fast transitions (<200ms)

---

## Analytics Tracking

### Track These Navigation Events:
```javascript
// Header navigation clicks
gtag('event', 'nav_click', {
  'location': 'header',
  'link_text': 'Download App',
  'link_url': '/app/download'
});

// Footer navigation clicks
gtag('event', 'nav_click', {
  'location': 'footer',
  'link_text': 'IMEI Checker',
  'link_url': '/imei-checker'
});

// Mobile navigation
gtag('event', 'mobile_nav_click', {
  'item': 'Verify',
  'from_page': window.location.pathname
});

// Breadcrumb clicks
gtag('event', 'breadcrumb_click', {
  'level': '2',
  'link_text': 'Blog'
});
```

---

## A/B Testing Opportunities

### Test Variations:
1. **Header CTA text:** "Download App" vs "Get App" vs "Install App"
2. **Navigation order:** Current vs "Verify" first vs "Pricing" second
3. **Mobile menu style:** Drawer vs full-screen vs dropdown
4. **Footer layout:** 5 columns vs 4 columns vs accordion (mobile)

---

## Maintenance Schedule

### Daily:
- Monitor broken links
- Check navigation rendering

### Weekly:
- Review navigation analytics
- Test on different devices
- Check accessibility

### Monthly:
- Analyze navigation paths
- Optimize based on user behavior
- Update based on new content

### Quarterly:
- Full navigation audit
- User testing sessions
- Competitor analysis
- Redesign if needed
