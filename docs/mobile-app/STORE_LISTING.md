# SafeOrStolen store listings (copy and paste)

Every claim below already appears on safeorstolen.com. Don't add claims about police or FBI access,
guaranteed results, or other companies (owner rules in AGENTS.md). Character counts were checked against each store's limit.

## Shared

- **Privacy policy URL:** https://safeorstolen.com/privacy
- **Terms:** https://safeorstolen.com/terms
- **Support URL / website:** https://safeorstolen.com
- **Support email:** safeorstolenmail@gmail.com
- **Account deletion URL (Google asks for it):** https://safeorstolen.com/delete-account
- **Icon:** `store-assets/app-icon-1024.png` (Apple), `store-assets/play-icon-512.png` (Google)
- **Google feature graphic:** `store-assets/play-feature-graphic-1024x500.png`

## Apple App Store

| Field | Text | Length |
|---|---|---|
| Name | SafeOrStolen: Stolen Check | 26/30 |
| Subtitle | Serial, IMEI, VIN & Gun Lookup | 30/30 |
| Keywords | checker,number,firearm,bike,phone,blacklist,license,plate,used,ps5,xbox,tool,laptop,pawn,theft,car | 98/100 |
| Promotional text | Buying used? Scan the serial, IMEI or VIN barcode and see in seconds if it's been reported stolen. Your first check is free. | 124/170 |
| Primary category | Utilities |
| Secondary category | Shopping |
| Price | Free (checks are paid on the website: 1 free check, then $4.99 per check or $10 a month) |
| Availability | United States only, to start (see SETUP.md, Step 7) |

Apple already searches the words in the name and subtitle (stolen, check, serial, IMEI, VIN, gun, lookup), so the keyword field doesn't repeat them and uses the space for other terms.

## Google Play

| Field | Text | Length |
|---|---|---|
| App name | SafeOrStolen: Stolen Check | 26/30 |
| Short description | Check if a phone, car, gun, bike or tool is reported stolen before you buy it. | 78/80 |
| Category | Tools |
| Tags | Utilities, Shopping |
| Countries | United States, to start |

## Full description (both stores)

```
Buying something used? Check whether it's been reported stolen before you hand over your money.

SafeOrStolen checks a serial number, IMEI, VIN, license plate or gun serial against theft reports in seconds. Type it in, or tap Scan and point your camera at the barcode on the box, sticker or door jamb.

WHAT YOU CAN CHECK
• Phones and tablets by IMEI
• Cars, trucks and motorcycles by VIN or license plate
• Guns by serial number
• Bikes and e-bikes by frame number
• Power tools, laptops, game consoles (PS5, Xbox), cameras, jewelry and more by serial number
• Marketplace listings, by pasting the link

WHAT EACH CHECK SEARCHES
• SafeOrStolen's own theft reports, on every check
• Gun checks: more than 220,000 police gun theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records
• Bike checks: a national stolen-bicycle registry
• VIN checks: decodes the vehicle and lists open recalls
• Vehicle checks: police reports in Arizona, Alaska and Chicago

Every result names each source it searched, so you know exactly what was checked. "No report found" means nothing matched in those records. It is not a guarantee, so always ask the seller for proof of ownership too.

WHY PEOPLE USE IT
• Meeting a seller from Facebook Marketplace, OfferUp or Craigslist
• Buying at a pawn shop, garage sale or swap meet
• Checking a used phone isn't blacklisted before you pay
• Selling, and wanting to show buyers the item is clean

PRICING
Your first check is free, with no account needed. After that it's $4.99 for one check or $10 a month for unlimited checks.

If an item shows as stolen, don't buy it and don't confront the seller. Leave, and give the details to your local police.
```

## Apple App Privacy answers (App Store Connect → App Privacy)

Based on what the site's code collects (checked Nov 14 2026). Confirm before submitting.

| Data type | Collected? | Linked to user? | Used for tracking? | Purpose |
|---|---|---|---|---|
| Email address, name | Yes (when you make an account) | Yes | No | App functionality, customer support |
| Purchase history | Yes | Yes | No | App functionality |
| Other user content (serial numbers, IMEIs, VINs, plates, photos you attach) | Yes | Yes (when signed in) | No | App functionality |
| Product interaction, other usage data | Yes (Google Analytics, Microsoft Clarity, HeyCatch) | No | No | Analytics |
| Crash data / diagnostics | Yes (error reports) | No | No | App functionality |
| Payment info | No: Stripe handles card details, and SafeOrStolen never sees them | | | |
| Location, contacts, health | No | | | |

**Tracking:** answer **No**, since the site doesn't use these for ads across other companies' apps. If ad pixels (Facebook,
TikTok) are ever switched on, this answer must change and the app would need Apple's tracking prompt.

## Google Play Data safety answers

- Data is **encrypted in transit**: Yes.
- Users can **request deletion**: Yes, at https://safeorstolen.com/delete-account and in the app (Settings → Delete my account).
- **Collected:** Personal info (name, email), Financial info (purchase history, not card numbers), App activity
  (in-app search history, other actions), App info and performance (crash logs, diagnostics), Photos (only those the user attaches).
- **Shared:** Payment processing with Stripe (Google counts processors as "service providers", not "sharing").

## Content rating

- Apple age rating: no objectionable content. The app looks up gun serial numbers but doesn't sell guns or show
  violence. Answer **None** to violence questions and **No** to unrestricted web access (the app only opens safeorstolen.com).
- Google (IARC questionnaire): category **Utility, Productivity, Communication, or Other**. If asked about weapons,
  say the app references firearms only to check serial numbers against theft reports, with no sales.

## App Review notes (Apple), paste into "Notes"

```
SafeOrStolen checks whether a used item (phone IMEI, vehicle VIN, gun or product serial number, license plate) has been reported stolen.

Native features: the Scan button on the Verify screen opens the native ML Kit barcode scanner to read IMEI, serial and VIN barcodes. The app also has an offline screen, a bottom tab bar and the system share sheet (Settings -> Share).

Purchases: the app is US-only. Paid checks ($4.99 per check or $10/month) use our website checkout, as allowed for the United States storefront.

Account deletion: Settings tab -> Delete my account (or Profile -> Delete my account).

Demo account: <email> / <password>
```
