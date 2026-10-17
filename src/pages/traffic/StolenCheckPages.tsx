/** Oct 8 2026: copy fixed by hand. Removed "instant"/"3 seconds", vague "stolen databases", all caps, exclamation marks and the FFL "legal protection" claim. */
import React from 'react';
import { Link } from '@/lib/router-compat';
import { StolenCheckLanding } from '@/components/traffic/StolenCheckLanding';

export const CheckStolenPhone = () => (
 <StolenCheckLanding
 itemType="Phone"
 title="Is My Phone Stolen? Free IMEI Check"
 description="Check if a phone is stolen before you buy. Enter the IMEI to see the make and model and search for theft reports in a few seconds. 2 free checks."
 keywords={[
 'is my phone stolen',
 'check if phone is stolen',
 'stolen phone check',
 'IMEI check',
 'stolen iPhone check',
 'stolen Samsung check',
 'phone blacklist check',
 'used phone verification'
 ]}
 faqs={[
 {
 q: 'How do I find the IMEI number?',
 a: 'Dial *#06# on the phone to see the IMEI. You can also find it in Settings > About Phone, or on the original box.'
 },
 {
 q: 'What happens if the phone is stolen?',
 a: 'If the phone comes back as reported stolen, don\'t buy it. Leave the meetup and tell local police where and when it was being sold. Buying it anyway can mean losing the phone and your money when police return it to its owner.'
 },
 {
 q: 'Is this check really free?',
 a: 'Yes. You get 2 free checks when you sign up, no credit card required. After that it\'s $0.99 a check or $10 a month for unlimited checks.'
 },
 {
 q: 'How accurate is the stolen phone database?',
 a: "A phone check searches SafeOrStolen's own theft reports and public web results, and shows the make and model the IMEI belongs to. For the carrier side, a paid lost/stolen blacklist check is available. Before you pay, also watch the seller sign out of their account and ask for proof of ownership."
 }
 ]}
 />
);

export const CheckStolenCar = () => (
 <StolenCheckLanding
 itemType="Car"
 title="Is This Car Stolen? Free VIN Check"
 description="Check if a car is stolen before you buy. Enter the VIN to decode the year, make and model, see open recalls and search for theft reports. 2 free checks."
 keywords={[
 'is this car stolen',
 'check if car is stolen',
 'stolen car check',
 'VIN check',
 'stolen vehicle check',
 'used car verification',
 'vehicle history check',
 'car theft check'
 ]}
 faqs={[
 {
 q: 'Where do I find the VIN number?',
 a: 'The VIN is located on the dashboard (visible through windshield), driver\'s door jamb, vehicle registration, and insurance documents.'
 },
 {
 q: 'What if the VIN shows as stolen?',
 a: 'Do not proceed with the purchase. Contact local law enforcement immediately. Never confront the seller yourself.'
 },
 {
 q: 'Does this check title history too?',
 a: 'Our check focuses on stolen status. For full title history, we recommend combining with a full vehicle history report.'
 },
 {
 q: 'How quickly do I get results?',
 a: 'Results come back in a few seconds after you enter the VIN, with every source searched listed.'
 }
 ]}
 />
);

export const CheckStolenLaptop = () => (
 <StolenCheckLanding
 itemType="Laptop"
 title="Is This Laptop Stolen? Free Serial Number Check"
 description="Check if a laptop is stolen before you buy. Enter the serial number and search for theft reports in a few seconds. Works for MacBooks, Dell, HP and more."
 keywords={[
 'is this laptop stolen',
 'check if laptop is stolen',
 'stolen laptop check',
 'MacBook stolen check',
 'laptop serial number check',
 'used laptop verification',
 'stolen computer check'
 ]}
 faqs={[
 {
 q: 'Where do I find the laptop serial number?',
 a: 'Check the bottom of the laptop, in System Settings/About, or on the original box. For MacBooks: Apple Menu > About This Mac.'
 },
 {
 q: 'What types of laptops can I check?',
 a: 'We can verify Apple MacBooks, Dell, HP, Lenovo, ASUS, and most major laptop brands.'
 },
 {
 q: 'Should I meet the seller in person?',
 a: 'Yes, always meet in a public place and verify the serial number matches what you checked before paying.'
 },
 {
 q: 'What if the seller won\'t provide the serial?',
 a: 'This is a major red flag. Legitimate sellers have nothing to hide. Walk away from the deal.'
 }
 ]}
 />
);

export const CheckStolenBike = () => (
 <StolenCheckLanding
 itemType="Bicycle"
 title="Is This Bike Stolen? Free Serial Number Check"
 description="Check if a bike is stolen before you buy. Enter the serial number to search a national stolen-bicycle registry and SafeOrStolen theft reports. 2 free checks."
 keywords={[
 'is this bike stolen',
 'check if bike is stolen',
 'stolen bike check',
 'bicycle serial number check',
 'used bike verification',
 'stolen bicycle database'
 ]}
 faqs={[
 {
 q: 'Where is the bicycle serial number?',
 a: 'Usually located under the bottom bracket (where the pedal cranks meet), on the head tube, or rear dropout.'
 },
 {
 q: 'What if the serial number is filed off?',
 a: 'A removed serial number is a major red flag indicating the bike may be stolen. Do not purchase.'
 },
 {
 q: 'Does this work for e-bikes?',
 a: 'Yes, we can verify electric bikes, road bikes, mountain bikes, and all bicycle types.'
 },
 {
 q: 'How do I report a stolen bike?',
 a: 'Report it to local police first and give them the serial number. Then report it free on SafeOrStolen at safeorstolen.com/report-stolen, so anyone who checks that serial before buying sees your report.'
 }
 ]}
 />
);

export const CheckStolenFirearm = () => (
 <>
 <StolenCheckLanding
 itemType="Firearm"
 title="Is This Gun Stolen? Free Serial Number Check"
 description="Check if a gun is stolen before you buy. Search the serial against police theft reports from 33 states and DC, live Ohio records and SafeOrStolen reports."
 keywords={[
 'is this gun stolen',
 'check if firearm is stolen',
 'stolen gun check',
 'firearm serial number check',
 'used gun verification',
 'stolen firearm database'
 ]}
 faqs={[
 {
 q: 'Where is the firearm serial number?',
 a: 'Usually on the frame or receiver of the firearm. Check manufacturer documentation for exact location.'
 },
 {
 q: 'Is it legal to buy a stolen firearm?',
 a: 'No. Under federal law (18 U.S.C. § 922(j)) it is a crime to receive or possess a firearm you know or have reason to believe is stolen. Check the serial before any private sale, and walk away from a gun with a scratched or ground-off serial.'
 },
 {
 q: 'What databases do you check?',
 a: "A gun check searches SafeOrStolen's own theft reports, public web results, police firearm theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records. It also flags serials that look altered or obliterated. For a private sale, you can also buy through a licensed dealer (FFL) or ask local police to run the serial."
 },
 {
 q: 'Should I use an FFL dealer?',
 a: 'Doing the transfer through a licensed dealer means the buyer goes through a background check and the sale is recorded. A dealer generally can\'t tell you whether the gun was reported stolen, so check the serial yourself as well.'
 }
 ]}
 />
 <section className="max-w-4xl mx-auto px-4 pb-16">
 <p className="text-sm text-muted-foreground">
 Buying privately? Whether a background check is required depends on your state — see our{' '}
 <Link to="/state-firearm-transfer-laws" className="text-primary underline underline-offset-4">
 state-by-state firearm transfer law guide
 </Link>
 .
 </p>
 </section>
 </>
);
