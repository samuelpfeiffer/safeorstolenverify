# Comprehensive Testing Checklist

## Date: November 16, 2025
## Status: Ready for Testing

---

## 🎯 Phase 1 & 2 Features to Test

### **Critical Path Testing**

---

## 1️⃣ **AI Features Testing**

### **A. AI Safety Advisor Chat**
**Location:** Floating button (bottom-right corner on all pages)

**Test Cases:**
- [ ] **Visibility:** Chat button appears on all pages
- [ ] **Open/Close:** Click button to open, X to close
- [ ] **Initial Message:** Greeting message displays immediately
- [ ] **Send Message:** Type question and send
- [ ] **AI Response:** Receives relevant safety advice
- [ ] **Loading State:** Spinner shows while processing
- [ ] **Error Handling:** Test with no internet connection
- [ ] **Mobile:** Works on small screens
- [ ] **Multiple Messages:** Chat history persists in session
- [ ] **Context Awareness:** AI understands verification context

**Sample Test Questions:**
- "What should I check before buying a used phone?"
- "Is it illegal to buy stolen goods unknowingly?"
- "What are red flags when buying on Facebook Marketplace?"

---

### **B. Smart Search Suggestions**
**Location:** Verification page search input

**Test Cases:**
- [ ] **Typing:** Start typing a serial number (e.g., "ABC123")
- [ ] **Suggestions Appear:** Dropdown shows after 3 characters
- [ ] **Format Detection:** Shows IMEI/VIN format hints
- [ ] **Click Suggestion:** Clicking fills the input field
- [ ] **Similar Searches:** Shows previously searched items
- [ ] **Loading Indicator:** Spinner appears while fetching
- [ ] **No Results:** Gracefully handles no suggestions
- [ ] **Keyboard Navigation:** Arrow keys navigate suggestions
- [ ] **Mobile:** Touch-friendly dropdown
- [ ] **Performance:** Debounces input (doesn't spam API)

**Test Inputs:**
- Partial IMEI: `35678912` (should suggest completing to 15 digits)
- Partial VIN: `1HGBH41JXMN10` (should suggest completing to 17 chars)
- Previous search: If you've searched before, should appear

---

### **C. Photo Item Identification**
**Location:** Verification page → "Photo ID" tab

**Test Cases:**
- [ ] **Upload Button:** Click to open file picker
- [ ] **File Validation:** Rejects non-image files
- [ ] **Processing:** Shows "Analyzing image..." message
- [ ] **AI Analysis:** Returns item details (type, brand, model)
- [ ] **Serial Extraction:** Identifies visible serial numbers
- [ ] **Confidence Score:** Shows confidence level
- [ ] **Auto-Fill:** Extracted data populates search field
- [ ] **Error Messages:** Handles unclear/dark images gracefully
- [ ] **Large Files:** Handles 5MB+ images
- [ ] **Mobile Camera:** Works with phone camera upload

**Test Images:**
- Clear phone photo with visible IMEI sticker
- Laptop with serial number label
- Bike frame with serial number engraved
- Blurry image (should indicate low confidence)

---

## 2️⃣ **Security Testing**

### **A. Anonymous Access Restrictions**

**Test as Logged Out User:**
- [ ] **Can View:** Published blog posts
- [ ] **Can View:** Approved community stories
- [ ] **Can View:** Public pages (home, about, pricing)
- [ ] **Cannot Access:** Dashboard
- [ ] **Cannot Access:** AI analysis sessions
- [ ] **Cannot Access:** Profile page
- [ ] **Cannot Access:** Search history
- [ ] **Cannot Access:** Admin pages

**Expected Behavior:** Redirect to sign-in page with message

---

### **B. Authenticated User Restrictions**

**Test as Regular User:**
- [ ] **Can View:** Own verification searches only
- [ ] **Can Create:** Own blog posts
- [ ] **Can Create:** Community stories
- [ ] **Can Manage:** Own AI feedback
- [ ] **Cannot View:** Other users' searches
- [ ] **Cannot View:** Admin metrics
- [ ] **Cannot View:** AI executive decisions
- [ ] **Cannot Access:** Content generation logs

---

### **C. Admin Access**

**Test as Admin User:**
- [ ] **Can View:** All metrics and analytics
- [ ] **Can Manage:** SEO keywords and strategy
- [ ] **Can View:** AI executive decisions
- [ ] **Can Approve:** Community stories
- [ ] **Can View:** Content generation logs
- [ ] **Cannot Bypass:** Service role restrictions

---

## 3️⃣ **Page Accessibility Testing**

### **A. New Pages**
- [ ] **`/resource-center`** - Loads without 404
- [ ] **`/database`** - Loads without 404
- [ ] **Both pages** - Display correct content
- [ ] **Both pages** - Have proper SEO meta tags
- [ ] **Both pages** - Mobile responsive
- [ ] **Both pages** - Load times < 3 seconds

---

### **B. Existing Pages**
- [ ] **`/`** - Homepage loads
- [ ] **`/verify`** - Verification page loads
- [ ] **`/dashboard`** - Dashboard loads (auth required)
- [ ] **`/pricing`** - Pricing page loads
- [ ] **`/blog`** - Blog index loads
- [ ] **`/blog/[slug]`** - Individual post loads
- [ ] **`/how-it-works`** - Guide page loads
- [ ] **`/about`** - About page loads
- [ ] **`/contact`** - Contact page loads

---

## 4️⃣ **Verification System Testing**

### **A. Search Functionality**
- [ ] **Serial Number:** Search works
- [ ] **IMEI:** 15-digit format validated
- [ ] **VIN:** 17-character format validated
- [ ] **Results Display:** Shows verification status
- [ ] **History:** Saves to user's search history
- [ ] **Credits:** Deducts from user's balance (if applicable)
- [ ] **Rate Limiting:** Respects search limits

---

### **B. Database Integration**
- [ ] **NICB VINCheck:** Vehicle verification works
- [ ] **IMEI.info:** Phone verification works
- [ ] **CheckMEND:** Electronics verification works
- [ ] **Bike Index:** Bicycle verification works
- [ ] **Multiple Sources:** Queries all relevant databases
- [ ] **Cache:** Subsequent searches for same item are faster

---

## 5️⃣ **Authentication Testing**

### **A. Sign Up**
- [ ] **Email/Password:** Creates account successfully
- [ ] **Google OAuth:** Sign up with Google works
- [ ] **Email Verification:** Confirmation email sent (if enabled)
- [ ] **Profile Creation:** Profile auto-created on signup
- [ ] **Welcome Message:** User sees welcome toast
- [ ] **Redirect:** Goes to dashboard after signup

---

### **B. Sign In**
- [ ] **Email/Password:** Logs in successfully
- [ ] **Google OAuth:** Sign in with Google works
- [ ] **Remember Me:** Session persists on refresh
- [ ] **Forgot Password:** Reset email sent
- [ ] **Error Messages:** Clear feedback on failed login
- [ ] **Rate Limiting:** Blocks after too many attempts

---

### **C. Sign Out**
- [ ] **Sign Out Button:** Visible in navigation
- [ ] **Session Clear:** Auth state cleared on signout
- [ ] **Redirect:** Goes to homepage
- [ ] **Secure:** Cannot access protected routes after signout

---

## 6️⃣ **Stripe Integration Testing**

### **A. Checkout Flow**
- [ ] **Pricing Page:** Displays all plans
- [ ] **Plan Selection:** Click "Subscribe" button
- [ ] **Stripe Redirect:** Redirects to Stripe Checkout
- [ ] **Payment:** Test payment succeeds (use test card)
- [ ] **Success Redirect:** Returns to success page
- [ ] **Database Update:** User's subscription_tier updated
- [ ] **Credits Added:** If applicable, credits added to balance

**Test Card:** `4242 4242 4242 4242` (Exp: 12/34, CVC: 123)

---

### **B. Customer Portal**
- [ ] **Portal Link:** Accessible from profile/dashboard
- [ ] **View Invoices:** Past invoices displayed
- [ ] **Update Payment:** Can update card details
- [ ] **Cancel Subscription:** Can cancel (test on test account)
- [ ] **Reactivate:** Can reactivate cancelled subscription

---

## 7️⃣ **Mobile Responsiveness**

**Test on devices:**
- [ ] **iPhone (Safari)** - All features work
- [ ] **Android (Chrome)** - All features work
- [ ] **iPad (Safari)** - Tablet layout correct
- [ ] **Small screens (< 375px)** - No horizontal scroll
- [ ] **Touch targets:** Buttons are 44x44px minimum
- [ ] **Text size:** Readable without zooming
- [ ] **Navigation:** Mobile menu works

---

## 8️⃣ **Performance Testing**

### **A. Page Load Times**
- [ ] **Homepage:** < 2 seconds
- [ ] **Verify Page:** < 2.5 seconds
- [ ] **Blog Posts:** < 2 seconds
- [ ] **Dashboard:** < 3 seconds (auth required)

---

### **B. API Response Times**
- [ ] **AI Chat:** < 5 seconds per response
- [ ] **Search Suggestions:** < 500ms
- [ ] **Photo Analysis:** < 10 seconds
- [ ] **Verification Search:** < 5 seconds (depends on external APIs)

---

## 9️⃣ **SEO Validation**

### **A. Meta Tags**
- [ ] **Title:** Unique per page, < 60 characters
- [ ] **Description:** Unique per page, < 160 characters
- [ ] **Canonical URL:** Set correctly on all pages
- [ ] **OG Tags:** Facebook preview looks good
- [ ] **Twitter Cards:** Twitter preview looks good

---

### **B. Structured Data**
- [ ] **Homepage:** Organization schema present
- [ ] **Blog Posts:** Article schema present
- [ ] **Services:** Service schema with serviceType
- [ ] **FAQs:** FAQ schema present
- [ ] **Validation:** No errors in Rich Results Test

**Test Tool:** https://search.google.com/test/rich-results

---

## 🔟 **Error Handling**

### **A. Network Errors**
- [ ] **Offline Mode:** User sees "No internet" message
- [ ] **API Timeout:** Graceful error message, retry option
- [ ] **500 Errors:** User-friendly message, support contact

---

### **B. Form Validation**
- [ ] **Required Fields:** Clear error messages
- [ ] **Email Format:** Validates email format
- [ ] **Password Strength:** Shows requirements
- [ ] **Serial Format:** Validates IMEI/VIN format

---

## 🎨 **UI/UX Testing**

### **A. Design Consistency**
- [ ] **Colors:** Semantic tokens used (no hardcoded colors)
- [ ] **Typography:** Consistent font sizes and weights
- [ ] **Spacing:** Consistent padding and margins
- [ ] **Dark Mode:** Toggles correctly (if enabled)
- [ ] **Animations:** Smooth transitions, not jarring

---

### **B. Accessibility**
- [ ] **Keyboard Navigation:** Can tab through all elements
- [ ] **Screen Reader:** Alt text on images
- [ ] **Focus Indicators:** Visible focus states
- [ ] **Color Contrast:** WCAG AA compliant
- [ ] **Skip Links:** Skip to main content link present

---

## ✅ **Sign-Off**

### **Phase 1 & 2 Complete:**
- [ ] All critical tests pass
- [ ] No console errors
- [ ] No 404 errors
- [ ] Security restrictions working
- [ ] AI features functional
- [ ] Mobile responsive
- [ ] SEO optimized

### **Blocker Issues:**
- [ ] None identified OR
- [ ] List blocker issues here:

---

## 📝 **Testing Notes**

**Tester Name:** ___________________
**Date:** ___________________
**Browser/Device:** ___________________

**Issues Found:**
1. 
2. 
3. 

**Additional Comments:**

---

**Status:** Ready for Production after all tests pass ✅
