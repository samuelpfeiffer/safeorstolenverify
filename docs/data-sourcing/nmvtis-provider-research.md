# Can SafeOrStolen get national vehicle theft/title data? (NMVTIS research)

Researched October 9, 2026.

**How this was researched:** All of this came from web search results. The page-fetching tool couldn't reach aamva.org, vehiclehistory.bja.ojp.gov, ecfr.gov or the vendor sites from this environment, so I never opened those pages in full. Each fact below is tied to the URL the search engine quoted it from. Before you spend money, open the two AAMVA rate schedule PDFs (linked in section 2) and read them yourself. Where I couldn't find a number, I say so.

---

## The short version

- NMVTIS is the federal title database. It's mostly about title brands (salvage, flood, rebuilt), junk/salvage/total-loss records, and the last odometer reading. Its theft information is **second-hand**: it shows the NICB copy of FBI NCIC stolen-vehicle records. It is not a live police check.
- Becoming an approved provider yourself costs real money. AAMVA's published schedule lists a **$30,000 one-time setup fee** and a **$7,500 monthly minimum bill**, plus per-VIN fees. Vendor sites also mention a $1,000 application fee. That works out to roughly $120,000 in the first year before you sell a single report. That's not realistic for a one- or two-person shop yet.
- The practical route is to **buy reports or API calls from an existing approved provider**. VinAudit lists API access at $100/month plus $1 per query. You can pass the data through, or link out, while you grow.

---

## 1. What NMVTIS is and what's actually in it

**Who runs it.** NMVTIS is the National Motor Vehicle Title Information System. The U.S. Department of Justice oversees it through the Bureau of Justice Assistance (BJA), and AAMVA (American Association of Motor Vehicle Administrators) runs it day to day as the "system operator." Private companies sell reports under contract with AAMVA.
- BJA program site: https://vehiclehistory.bja.ojp.gov/nmvtis_about
- AAMVA NMVTIS page: https://www.aamva.org/technology/systems/vehicle-systems/nmvtis
- Approved providers "operate under contract with AAMVA": https://www.aamva.org/vehicles/nmvtis/nmvtis-for-general-public-consumers

**Who feeds it data.**
- **State DMVs/titling agencies** send title records, brands, and odometer readings. Rules for states are at 28 CFR 25.54: https://www.ecfr.gov/current/title-28/chapter-I/part-25/subpart-B/section-25.54
- **Insurance carriers** must report vehicles they declare a total loss, "regardless of whether a claim is paid or not" (28 CFR 25.55): https://www.law.cornell.edu/cfr/text/28/25.55
- **Junk and salvage yards** must send a monthly inventory of the junk/salvage vehicles they took in (28 CFR 25.56). Entities handling fewer than five such vehicles a year are exempt. Source: https://www.ecfr.gov/current/title-28/chapter-I/part-25/subpart-B (as quoted in search results), and https://vehiclehistory.bja.ojp.gov/nmvtis_insurance
- Insurers and yards usually report through AAMVA-approved third-party "data consolidators": https://www.aamva.org/vehicles/nmvtis/nmvtis-for-junk,-salvage-insurance-entities

**What a consumer report shows.** The BJA FAQ lists: current and previous state of title, title issue date, latest odometer reading, brand history (Flood, Salvage, Rebuilt, etc.), junk/salvage/total-loss history, and "theft history data (if any)." Source: https://vehiclehistory.bja.ojp.gov/faq/list

AAMVA describes it more cautiously. NMVTIS gives title, odometer, and brand history, "and in some cases historical theft data." Source: https://www.aamva.org/vehicles/nmvtis/nmvtis-for-general-public-consumers

**About the theft data specifically.** This part matters most for SafeOrStolen.
- BJA's own "Contacting NMVTIS" page says NMVTIS **does not contain theft records itself**. It only shows theft records held by the **National Insurance Crime Bureau (NICB)**. Those records start with a police agency entering the theft into the FBI's **NCIC**, and NICB copies them into its own system. Getting a record removed means going back to the reporting police agency. Source: https://vehiclehistory.bja.ojp.gov/contacting-nmvtis-responses
- The 2009 federal rule says the same thing: theft status in NMVTIS comes from "state brands and the theft file of the National Insurance Crime Bureau (NICB), which is derived from the FBI's National Crime Information" Center. Source: https://www.federalregister.gov/documents/2009/01/30/E9-1835/national-motor-vehicle-title-information-system-nmvtis
- NCIC automatically notifies NICB, the National Vehicle Service (NVS), Nlets, and NMVTIS when a stolen-vehicle record is entered, cleared, and so on. This is in the NCIC Vehicle File manual as published by Utah DPS: https://site.utah.gov/dps-tac/wp-content/uploads/sites/38/2017/10/Vehicle.pdf
- Some providers add a separate theft check on top of the NMVTIS report. Auto Data Direct says its theft check is NCIC theft data "obtained from the National Vehicle Service," allowed "as long as it is made part of a NMVTIS history report," and shows Active or Closed status. Source (vendor claim): https://blog.add123.com/adds-nmvtis-report-is-all-that-and-a-bit-more
- Bumper says its theft data comes from NCIC and that most theft records are just an alert with a date and status. Source (vendor claim): https://www.bumper.com/about/data/

**Bottom line on theft:** An NMVTIS report's theft section is a pass-through of NICB's copy of NCIC records, plus any state theft brands. It's useful, but it's not the same as a police officer running the VIN. A "no theft record" result does not prove a car isn't stolen. NMVTIS also has no owner names and no full repair history: https://vehiclehistory.bja.ojp.gov/faq/list

---

## 2. How a company becomes an approved NMVTIS data provider

**Who approves:** AAMVA, as system operator, through an application and a signed contract. Approved providers get listed on the AAMVA and DOJ sites and may use the NMVTIS logo.
- https://www.aamva.org/vehicles/nmvtis/nmvtis-for-general-public-consumers
- Current list of approved providers (VinAudit, ClearVin, VINsmart, Bumper, carVertical, EpicVIN, VinData, and others): https://vehiclehistory.bja.ojp.gov/nmvtis_vehiclehistory

**Application page.** AAMVA has a page called "How to Become an Approved NMVTIS Data Provider" under its consumer section. Search results didn't include its steps. Start here: https://www.aamva.org/vehicles/nmvtis/general-public-and-consumers. BJA also mentions a flyer that explains "the business model and application process": https://vehiclehistory.bja.ojp.gov/es/node/276

**Published fees, from AAMVA's Private Rate Schedule, October 2026:**
https://www.aamva.org/getmedia/032edcc9-8cfe-45e3-88c0-37bc83f4aea2/Products-Services-Catalog-Private-Rate-October-2026.pdf
(previous year: https://www.aamva.org/getmedia/ce4bafbb-ff9a-4443-bfe4-01da73033869/Products-Services-Catalog-Private-Rate-October-2025.pdf)

| Item | Amount | Notes |
|---|---|---|
| One-time setup fee (MVA-NMVTSET1) | **$30,000** | Non-refundable, paid to AAMVA |
| Extra deposit | Not stated | Start-ups or companies without enough financial or credit history "may be required" to pay one at contract signing |
| Monthly minimum | **$7,500/month** | Billed the greater of $7,500 or your actual transactions times the rate |
| Per-VIN data inquiry | **Couldn't find the number** | Charged only when a title, brand, or junk/salvage record is found. No charge for a VIN with no record. Tiered by volume. The tier table didn't come through in search, so open the PDF. |
| Boolean "record exists?" check | **$0.0162 per inquiry** | Up from $0.015 in the 2025 schedule. Returns only true/false. |
| Reconnection fee (NMC-RECFEE) | **$10,000** | Charged if you don't go live within two months of your production date, or if AAMVA suspends you and has to restore service. Covers retesting and recertification. |
| Application fee | **$1,000 (unconfirmed)** | Not in the AAMVA schedule I saw. Reported by vendors, e.g. https://vehicledatabases.com/api/nmvtis |

The only per-VIN cost I found is a vendor's claim. VinAudit says the NMVTIS fee it pays "starts at about $1 per report" and falls to around $0.25 at high volume: https://www.vinaudit.com/affordable-vs-premium-vehicle-history-api. Treat that as a rough hint, not AAMVA's rate.

**Other requirements I could confirm:**
- You must be a U.S.-based commercial entity (AAMVA rate schedule above).
- You need financial documentation and a business plan showing how you'll use the data, and you have to pass AAMVA certification testing before going live. These come from vendor pages, not AAMVA: https://vehicledatabases.com/api/nmvtis
- Rates can change after September 30 each year with 30 days' written notice (AAMVA schedule).

**What I couldn't find:** published security or audit requirements, insurance requirements, the contract text, or a typical approval timeline. The only timing rule I found is the two-month go-live window in the reconnection-fee clause. Ask AAMVA for the contract and application packet.

**How to contact AAMVA:** I couldn't find a published NMVTIS email address. AAMVA's pages point people to its website contact form with "Help Desk" picked as the subject: https://www.aamva.org/vehicles/nmvtis/state-titling-agency/nmvtis-community

---

## 3. Rules that would limit SafeOrStolen

- **No owner names or addresses.** The operator may not give personally identifying information, such as the owner's name or address, to an individual buyer. Source: 28 CFR 25.53 (https://www.law.cornell.edu/cfr/text/28/part-25). BJA's FAQ also says "no personal identifying information will be made available to individual consumers via NMVTIS" (https://vehiclehistory.bja.ojp.gov/faq/list). State DMV records with personal info fall under the Driver's Privacy Protection Act, 18 U.S.C. 2721-2725.
- **No bulk downloading or storing.** The 2009 rule's preamble says consumer-access providers are restricted from downloading and storing bulk NMVTIS data for resale or reuse: https://www.federalregister.gov/documents/2009/01/30/E9-1835/national-motor-vehicle-title-information-system-nmvtis. In practice this means you look up one VIN at a time, live. You can't build your own national copy.
- **Price.** I found no price floor or cap. The same 2009 notice says all providers pay the operator the same fees and are "not restricted in what they can charge the end user" (same Federal Register link). That's an old document, so confirm it in the current contract. Consumer prices today run from free summaries up to about $20: https://www.edmunds.com/car-buying/which-vehicle-history-report-is-right-for-you.html
- **Free vs. paid.** NMVTIS is designed as a fee-for-service system paid for by user fees. You pay AAMVA for every VIN that returns a record, whatever you charge your customer. I found no rule that bans giving a report away. But a free lookup costs you money on every hit, and the $7,500 monthly minimum applies either way. Sources: the AAMVA schedule above, and https://www.aamva.org/vehicles/nmvtis/nmvtis-for-general-public-consumers
- **Required disclaimer and state pointer.**
  - Approved providers have to point customers to the titling state for information that isn't in the NMVTIS report: https://www.aamva.org/vehicles/nmvtis/nmvtis-for-general-public-consumers
  - Providers also post a standard "NMVTIS Consumer Access Product Disclaimer." It says NMVTIS doesn't cover repair history, that state update speed varies, that damage may not show if no insurer or state reported it, and that it's no substitute for an inspection. Examples: https://www.vinaudit.com/nmvtis-disclaimer and https://add123.com/nmvtisdisclaimer
  - The official copy is linked from the BJA FAQ: https://vehiclehistory.bja.ojp.gov/faq/list
- **Logo.** Only approved providers may use the NMVTIS logo or say they sell NMVTIS reports. A reseller has to follow its provider's rules on this: https://www.aamva.org/vehicles/nmvtis/nmvtis-for-general-public-consumers

---

## 4. Other ways to get national theft data

**a) Resell through an approved provider. This is the realistic option.**
- **VinAudit API:**
  - Free trial of up to 10 queries.
  - "Self-Service" tier at **$100/month plus $1 per query**.
  - Enterprise tier with volume discounts.
  - Source: https://data.vinaudit.com/vehicle-history-api
  - Dealer program is about $20/month plus $1 per report: https://www.vinaudit.com/dealers
- **VinAudit partner (wholesale) agreement:**
  - You prepay for report credits, priced by quantity. Credits don't expire.
  - Unused credits can be refunded within 30 days.
  - VinAudit can change prices without notice.
  - Partners are "subject to testing, audit, and approval by VinAudit and AAMVA."
  - Source: https://www.vinaudit.com/partner-agreement
- **ClearVin:**
  - API pricing "depends on your monthly volume and type of access." No public number: https://blog.clearvin.com/api-access-to-automotive-databases/
  - Dealer single-VIN check listed at $2.50: https://www.clearvin.com/en/dealer/
- **Vehicle Databases:** pay-as-you-go and subscription plans with free test credits. No per-call NMVTIS price published: https://vehicledatabases.com/api/nmvtis
- **VINsmart, VinData, Auto Data Direct:** I found no published reseller or API prices.

**b) NICB.**
- VINCheck is free for consumers. It's limited to 5 searches per IP address per day. It only covers theft and salvage records from participating insurers, not law enforcement records.
  - https://www.nicb.org/vincheck
  - https://nicb.org/vincheck/terms-use-vincheck
- Its terms call it a free public service to consumers. Third-party sources say automated or commercial use isn't allowed, but I couldn't read that clause myself. **Don't scrape it.** Linking users to it is fine.
- NICB membership: Active members must be licensed insurers. Associate membership is open to some non-insurers (rental companies, auto auctions, finance companies). There's also a "Strategic Partners" category for organizations that don't qualify for either.
  - https://www.nicb.org/membership
  - https://www.nicb.org/about-nicb/strategic-partners
- I found nothing showing NICB licenses theft data to small websites. It might be worth one email, but don't expect a yes.

**c) NCIC directly: not possible.** Only law enforcement and criminal justice agencies with an ORI number can access NCIC. Private companies get no direct access.
- https://www.fbi.gov/file-repository/pias/pia-ncic-020723.pdf
- https://legalclarity.org/what-is-the-ncic-database-and-who-can-access-it/

**d) State bulk data.** Arizona ADOT/MVD has a commercial data-access process through Electronic Data Services (eds@azdot.gov), using form 96-0186B and a Data Access Agreement. You have to state a DPPA permissible use.
- https://azdot.gov/motor-vehicles/driver-services/driver-license-information/motor-vehicle-records
- https://apps.azdot.gov/files/mvd/mvd-forms-lib/96-0186B.pdf

This gets you Arizona title and registration records, not national theft data. I found no state that sells a national stolen-vehicle feed. I found no published price for Arizona bulk access.

---

## 5. Bottom line

**Is becoming a direct NMVTIS provider realistic right now? No.** Using AAMVA's own numbers:
- $30,000 setup
- possibly a deposit for a start-up
- about $1,000 to apply (unconfirmed)
- a $7,500 monthly minimum, which is $90,000 a year

That's about **$120,000+ in year one** whether or not anyone buys a report. On top of that you'd need certification testing, a business plan review, and a contract. To make that back at $1 margin per report, you'd need thousands of paid lookups every month. It becomes worth revisiting once you're reliably selling several thousand vehicle reports a month through a reseller.

**What's realistic:** resell through an approved provider. At VinAudit's published self-serve price, that's about **$100/month plus $1 per lookup**, with a free 10-query trial to test. Charge something like $3-$10 per national report, which is in line with current consumer prices. Keep your free Arizona law-enforcement check as the hook.

**Be honest on the site.** National theft results come from NICB/NCIC records passed through NMVTIS. A clean result doesn't guarantee a car isn't stolen.

**First 3 concrete steps:**
1. **Open both AAMVA rate schedule PDFs** (links in section 2) and write down the per-VIN tier rates I couldn't get. That number decides everything.
2. **Email VinAudit (and ClearVin for a comparison quote).** Ask for API or partner pricing for a consumer-facing site. Ask specifically:
   - Does the report include theft data, and from where (NICB, or NCIC via NVS)?
   - What disclaimer and branding rules apply?
   - Can you show a free "theft flag only" result and charge for the full report?
   - Do resellers need AAMVA approval? Their partner agreement says partners are subject to AAMVA approval.

   Start the VinAudit free trial and check the theft section on a few VINs.
3. **Send AAMVA a short inquiry** (draft below) through their contact form. Ask for the provider application packet, contract, and requirements, so you know the real bar for later.

### Draft inquiry to AAMVA (send via the aamva.org contact form, subject: Help Desk / NMVTIS)

> Subject: Question about becoming an NMVTIS data provider
>
> Hi,
>
> I run SafeOrStolen, a small website in Peoria, Arizona that helps people check whether a used car, phone, gun or bike has been reported stolen. Right now we only use Arizona law enforcement records, and we'd like to add national title and theft history through NMVTIS.
>
> Could you send me the current application packet and sample contract for becoming an Approved NMVTIS Data Provider? I've seen the setup fee and monthly minimum in your private rate schedule. I'd also like to know:
>
> - the current per-VIN rates by volume tier
> - whether there's an application fee
> - any security, audit or insurance requirements
> - how long approval usually takes
>
> We're a two-person company, so if there's a lower-volume path or you'd suggest starting through an existing provider, I'd appreciate hearing that too.
>
> Thanks,
> Samuel Pfeiffer
> SafeOrStolen
> Peoria, Arizona
> safeorstolenmail@gmail.com
