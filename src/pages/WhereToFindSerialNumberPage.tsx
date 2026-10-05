import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';

/**
 * Where to find the serial number, IMEI or VIN on any item (Oct 5 2026).
 * The step before every check. Locations are the standard, manufacturer-documented
 * spots; each row links to the right SafeOrStolen check.
 */

type Row = { item: string; id: string; where: string; check: string; checkLabel: string };

const ROWS: { group: string; rows: Row[] }[] = [
  {
    group: 'Phones, tablets and computers',
    rows: [
      { item: 'Any phone', id: 'IMEI (15 digits)', where: 'Dial *#06# to show it on screen. Also in Settings → About phone (Android) or Settings → General → About (iPhone), on the box label, and on the SIM tray of many models.', check: '/imei-checker', checkLabel: 'Check an IMEI' },
      { item: 'iPad and other tablets', id: 'Serial number or IMEI', where: 'Settings → General → About (iPad) or Settings → About tablet (Android). Cellular models also have an IMEI. Often engraved on the back.', check: '/imei-checker', checkLabel: 'Check a tablet' },
      { item: 'MacBook', id: 'Serial number', where: 'Apple menu → About This Mac, and printed on the underside of the case.', check: '/serial-number-checker', checkLabel: 'Check a serial' },
      { item: 'Windows laptop', id: 'Serial number (S/N)', where: 'The label on the underside or inside the battery bay, and the system firmware (BIOS/UEFI) setup screen.', check: '/serial-number-checker', checkLabel: 'Check a serial' },
    ],
  },
  {
    group: 'Game consoles, TVs and electronics',
    rows: [
      { item: 'PlayStation 5', id: 'Serial number', where: 'The sticker on the back or bottom of the console, and Settings → System → System Software → Console Information.', check: '/check-ps5', checkLabel: 'Check a PS5' },
      { item: 'Xbox Series X|S', id: 'Serial number', where: 'The sticker on the back of the console near the ports, and Settings → System → Console info.', check: '/check-xbox', checkLabel: 'Check an Xbox' },
      { item: 'Nintendo Switch', id: 'Serial number', where: 'The bottom edge of the console next to the USB-C port, and System Settings → System → Serial Information.', check: '/check-gaming-console-stolen', checkLabel: 'Check a console' },
      { item: 'TV', id: 'Serial number', where: 'The label on the back panel and the settings menu (usually Support or About This TV). They should match.', check: '/how-to-check-if-tv-stolen', checkLabel: 'How to check a TV' },
      { item: 'Camera body and lens', id: 'Serial numbers', where: 'The bottom plate of the camera body; on lenses, the barrel or the mount ring.', check: '/check-camera-stolen', checkLabel: 'Check a camera' },
      { item: 'Drone', id: 'Serial number', where: 'Printed on the aircraft body or inside the battery compartment, and shown in the drone’s companion app.', check: '/serial-number-checker', checkLabel: 'Check a serial' },
      { item: 'Watch', id: 'Serial number', where: 'Engraved on the case back, or between the lugs on many luxury watches. Match it to the warranty card.', check: '/check-watch-stolen', checkLabel: 'Check a watch' },
    ],
  },
  {
    group: 'Tools, equipment and appliances',
    rows: [
      { item: 'Power tools', id: 'Serial number', where: 'The nameplate or data label on the motor housing or handle. It also lists the model number.', check: '/how-to-check-if-tools-stolen', checkLabel: 'How to check a tool' },
      { item: 'Generators, mowers, pressure washers', id: 'Serial number', where: 'The label on the engine or frame. Small engines often carry their own engine serial too.', check: '/serial-number-checker', checkLabel: 'Check a serial' },
      { item: 'Appliances', id: 'Serial number', where: 'Inside the door frame or door edge of fridges, washers and dishwashers, or on the back panel.', check: '/check-appliances', checkLabel: 'Check an appliance' },
      { item: 'Guitars', id: 'Serial number', where: 'The back of the headstock on most electric guitars; inside the sound hole on most acoustics.', check: '/serial-number-checker', checkLabel: 'Check a serial' },
    ],
  },
  {
    group: 'Bikes, scooters and firearms',
    rows: [
      { item: 'Bicycle or e-bike', id: 'Frame serial number', where: 'Stamped under the bottom bracket, where the pedals meet the frame. Sometimes on the head tube or rear dropout.', check: '/how-to-check-if-bike-stolen', checkLabel: 'How to check a bike' },
      { item: 'Electric scooter', id: 'Serial number', where: 'Under the deck or on the stem, and usually in the scooter’s app.', check: '/serial-number-checker', checkLabel: 'Check a serial' },
      { item: 'Firearm', id: 'Serial number', where: 'Stamped on the frame or receiver. Guns made in the US since 1968 must carry one; never buy one that is missing or altered.', check: '/how-to-check-if-gun-is-stolen', checkLabel: 'How to check a gun' },
    ],
  },
  {
    group: 'Vehicles, trailers and boats',
    rows: [
      { item: 'Car, truck or SUV', id: 'VIN (17 characters)', where: 'The dashboard at the base of the windshield on the driver’s side, the driver’s door jamb sticker, and the title, registration and insurance card. All should match.', check: '/vin-checker', checkLabel: 'Check a VIN' },
      { item: 'Motorcycle', id: 'VIN', where: 'Stamped on the steering head (the frame neck behind the handlebars), with a separate engine number on the engine case.', check: '/check-motorcycle-stolen-vin', checkLabel: 'Check a motorcycle' },
      { item: 'Trailer, ATV or dirt bike', id: 'VIN or serial', where: 'Trailers: the tongue or frame near the hitch. ATVs and dirt bikes: the frame, often near the front or steering head.', check: '/how-to-check-if-trailer-atv-stolen', checkLabel: 'How to check a trailer or ATV' },
      { item: 'Boat or jet ski', id: 'HIN (12 characters)', where: 'The upper right (starboard) corner of the transom, the back of the hull. Also on the registration.', check: '/how-to-check-if-boat-stolen', checkLabel: 'How to check a boat' },
      { item: 'License plate', id: 'Plate number', where: 'On the vehicle. A plate can be moved between cars, so always check the VIN as well.', check: '/license-plate-lookup', checkLabel: 'Look up a plate' },
    ],
  },
];

const FAQS = [
  {
    q: 'How do I find my phone’s IMEI number?',
    a: 'Dial *#06# and it appears on screen. It is also in Settings → About phone on Android or Settings → General → About on iPhone, on the original box, and on the SIM tray of many models.',
  },
  {
    q: 'Where is the VIN on a car?',
    a: 'On the dashboard at the base of the windshield on the driver’s side, on the sticker in the driver’s door jamb, and on the title, registration and insurance card. All of them should show the same 17 characters.',
  },
  {
    q: 'What if an item has no serial number?',
    a: 'Many items such as furniture or most jewelry have none. Check the seller’s receipt and story instead, and look for engravings, markings or, for diamonds, a laser inscription that matches a grading report. A serial that has been scratched off or covered is a red flag.',
  },
  {
    q: 'Can I check a serial number to see if an item is stolen?',
    a: 'Yes. Enter the serial, IMEI or VIN on SafeOrStolen. Depending on the item it searches theft reports filed on SafeOrStolen, police firearm theft records, a national stolen-bicycle registry, Arizona law-enforcement vehicle records and public web results. A clean result only means no report was found in the records searched.',
  },
];

export default function WhereToFindSerialNumberPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <PageSEO
        title="Where to Find the Serial Number, IMEI or VIN on Any Item | SafeOrStolen"
        description="Where to find the serial number, IMEI or VIN on phones, laptops, PS5, Xbox, TVs, cameras, tools, bikes, guns, cars, motorcycles, trailers and boats, and how to check it before you buy."
        keywords="where to find serial number, how to find imei, where is the vin, ps5 serial number location, bike serial number location, tool serial number"
        canonical="/where-to-find-serial-number"
        structuredData={faqSchema}
      />
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">Where to Find the Serial Number, IMEI or VIN on Any Item</h1>
          <p className="text-lg text-muted-foreground speakable-summary">
            Before you buy or sell something used, find its unique number: an IMEI for phones, a VIN for vehicles, a HIN for
            boats, or a serial number for almost everything else. Check that the number on the item matches its settings
            screen, box and paperwork, then run it on SafeOrStolen to see if it has been reported stolen.
          </p>
        </header>

        {ROWS.map((section) => (
          <section key={section.group} className="space-y-3">
            <h2 className="text-2xl font-semibold">{section.group}</h2>
            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {section.rows.map((r) => (
                <div key={r.item} className="p-4 grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-4">
                  <div>
                    <h3 className="font-semibold">{r.item}</h3>
                    <p className="text-xs text-muted-foreground">{r.id}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">{r.where}</p>
                    <Link to={r.check} className="text-sm text-primary hover:underline">{r.checkLabel} →</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Red flags</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>The number has been scratched off, painted over, re-stamped or covered with a new sticker.</li>
            <li>The number on the item doesn’t match the settings screen, box, receipt or title.</li>
            <li>The seller won’t let you see the number before you pay.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common questions</h2>
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.a}</p>
            </div>
          ))}
        </section>

        <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-center space-y-3">
          <p className="font-semibold">Found the number? Check it before you hand over any money.</p>
          <Link to="/verify" className="inline-block rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground">
            Check a serial, IMEI or VIN
          </Link>
        </div>
      </div>
    </>
  );
}
