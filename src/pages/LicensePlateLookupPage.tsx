/**
 * Oct 7 2026: rewritten by hand for "free license plate lookup" (Search Console: "free license plate
 * lookup", "free license plate look up", "free license plate search", "stolen car plate lookup",
 * positions 37 to 53). This is the national hub; the state pages hang off it. The old copy said
 * SafeOrStolen "resolves the plate to its registered vehicle" and would "alert you if the registered
 * vehicle doesn't match": it has no DMV registration data, so both claims and the cross-reference
 * fields were removed. Named data supplier removed. Owner-name questions go to /license-plate-owner-lookup.
 */
import { useState } from 'react';
import { useNavigate, Link } from '@/lib/router-compat';
import { Shield, MapPin, Search, Car, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { US_STATES } from '@/data/stateVerificationData';
import { toast } from 'sonner';
import { PageSEO } from '@/components/seo/PageSEO';
import { StateLinksGrid } from '@/components/seo/StateLinksGrid';

const QUICK_ANSWER =
  "Pick the state, type the plate, and check it on SafeOrStolen (safeorstolen.com/license-plate-lookup). It searches SafeOrStolen's theft reports and public web results for that plate, and Arizona plates are also checked against Arizona law-enforcement stolen-vehicle records. Your first 2 checks are free. No public plate lookup can show the owner's name: the federal Driver's Privacy Protection Act keeps DMV owner records private.";

const CAN_CANT_ROWS: [string, string, string][] = [
  ['Is the plate reported stolen?', 'Yes, in the records searched', 'SafeOrStolen theft reports and public web results; Arizona plates also against Arizona law-enforcement records'],
  ['Has the plate shown up in listings or posts online?', 'Yes', 'SafeOrStolen lists any public web results that mention the plate'],
  ['Is the car itself reported stolen?', 'Use the VIN, not the plate', 'A VIN check on /vin-checker, because a plate can be moved to another car'],
  ["Who owns the car (name, address, phone)?", 'No', "DMV owner records are closed to the public under the Driver's Privacy Protection Act. See /license-plate-owner-lookup"],
  ['Title brands, liens, odometer', 'Not from a plate', "Your state DMV's title check by VIN, or a vehicle history report"],
  ['Is the registration current?', 'Look at the car', 'The registration sticker and paper registration, which should match the plate and VIN'],
];

const faqs = [
  {
    question: 'Is there a free license plate lookup?',
    answer:
      "Yes. SafeOrStolen (safeorstolen.com/license-plate-lookup) gives you 2 free plate checks with a free account and no credit card. Each check searches SafeOrStolen's theft reports and public web results for the plate, plus Arizona law-enforcement stolen-vehicle records for Arizona plates. After that a single check is $3.99, or $14.99 a month for unlimited checks.",
  },
  {
    question: 'Can I find out who owns a car from the license plate?',
    answer:
      "No, not as a member of the public. The federal Driver's Privacy Protection Act stops state DMVs from releasing an owner's name and address except for permitted purposes such as law enforcement, insurance claims and court cases. If you need the owner after a hit-and-run or for an abandoned car, give the plate to the police. Our page on license plate owner lookups explains the rest.",
  },
  {
    question: 'Can I do a free DMV license plate lookup?',
    answer:
      "Not for owner details. State DMVs don't run public plate searches that return a name or address. They release those records only to requesters with a permitted purpose under the Driver's Privacy Protection Act, usually on a signed records-request form. Many DMVs do offer a free title or brand check by VIN, which is more useful when you're buying a car.",
  },
  {
    question: 'How do I check if a car is stolen by license plate?',
    answer:
      "Enter the plate and state on SafeOrStolen to see whether the plate is reported stolen in the records searched. Then check the VIN, because thieves often put a clean plate on a stolen car. The VIN on the dashboard, the driver's door jamb and the title should all match, and the decoded year, make and model should match the car in front of you.",
  },
  {
    question: 'What does "no report found" mean on a plate check?',
    answer:
      "It means the plate does not appear in the records SafeOrStolen searched at the time of the check: its own theft reports, public web results and, for Arizona plates, Arizona law-enforcement records. It is not proof the car is clean. A recent theft may not be reported yet, and a swapped plate says nothing about the car it's bolted to.",
  },
  {
    question: 'Do paid license plate lookup sites show the owner?',
    answer:
      "Sites that charge for an owner lookup can't pull registered-owner records from the DMV for the public. What they return is usually general vehicle details or people-search data stitched together from other sources, which may be wrong or out of date. If you're buying a car, ask the seller for the title and compare the name with their photo ID.",
  },
  {
    question: 'What should I do if a plate comes back reported stolen?',
    answer:
      "Don't buy the car and don't confront the driver or seller. Note the plate, the car's make, model and color, and where you saw it. Call the police non-emergency line, or 911 if the car is moving or someone is in danger, and give them the details. Keep any listing or messages if it was for sale.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I look up a license plate for free?', acceptedAnswer: { '@type': 'Answer', text: QUICK_ANSWER } },
    ...faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  ],
};

const LicensePlateLookupPage = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    if (!plateNumber.trim()) {
      toast.error('Enter the license plate number');
      return;
    }
    if (!selectedState) {
      toast.error('Choose the state on the plate');
      return;
    }
    setIsLoading(true);
    const stateName = US_STATES.find((s) => s.code === selectedState)?.name || selectedState;
    const params = new URLSearchParams({ q: plateNumber, type: 'plate', state: selectedState });
    navigate(`/verify?${params.toString()}`);
    toast.success(`Checking ${stateName} plate ${plateNumber}`);
  };

  return (
    <>
      <PageSEO
        title="Free License Plate Lookup: Check If a Plate Is Stolen | SafeOrStolen"
        description="Free license plate lookup for any U.S. state: check if a plate is reported stolen, see what a plate search can and can't show, and why owner names stay private."
        keywords="free license plate lookup, license plate lookup, free license plate search, stolen car plate lookup, license plate check, car tag lookup, dmv license plate lookup"
        canonical="/license-plate-lookup"
        modifiedTime="2026-10-07"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Free License Plate Lookup</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Check whether a license plate is reported stolen. Pick the state, type the plate, and you get a result in a
                few seconds, with every source listed. A plate lookup never shows the owner's name; that stays private by
                federal law.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto shadow-xl border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-3">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Check a plate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="state" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    State on the plate <span className="text-destructive">*</span>
                  </Label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger id="state" className="bg-background h-12 text-base">
                      <SelectValue placeholder="Choose a state" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border max-h-[300px]">
                      {US_STATES.map((state) => (
                        <SelectItem key={state.code} value={state.code}>
                          {state.name} ({state.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plate" className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    License plate number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="plate"
                    placeholder="Letters and numbers only, e.g. ABC1234"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                    className="h-12 text-lg font-mono bg-background"
                    maxLength={8}
                  />
                </div>

                <Button
                  onClick={handleVerify}
                  className="w-full h-14 text-lg"
                  size="lg"
                  disabled={isLoading || !plateNumber.trim() || !selectedState}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                      Checking...
                    </>
                  ) : (
                    <>
                      <Shield className="mr-2 h-5 w-5" />
                      Check plate free
                    </>
                  )}
                </Button>

                <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    2 free checks, no credit card
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    Saved to your account with the date
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    Updated October 7, 2026
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick answer */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="text-xs font-bold tracking-wide text-primary mb-2">Quick answer</p>
            <h2 className="text-xl md:text-2xl font-bold mb-3">How do I look up a license plate for free?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{QUICK_ANSWER}</p>
          </div>
        </section>

        {/* What you can and can't find */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What a license plate lookup can and can't tell you</h2>
            <p className="text-muted-foreground mb-6">
              Most people searching a plate want one of two things: to know if a car is stolen, or to know who owns it. The
              first you can check yourself. The second only the police and a few permitted requesters can get.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Question</th>
                    <th className="px-4 py-3 font-semibold">Can a plate lookup answer it?</th>
                    <th className="px-4 py-3 font-semibold">Where the answer comes from</th>
                  </tr>
                </thead>
                <tbody>
                  {CAN_CANT_ROWS.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Want the owner? Read{' '}
              <Link to="/license-plate-owner-lookup" className="underline font-medium text-primary">
                license plate owner lookup: what you can and can't find
              </Link>
              . Checking a plate you think is stolen? See{' '}
              <Link to="/how-to-check-if-license-plate-stolen" className="underline font-medium text-primary">
                how to check if a license plate is stolen
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How to check a plate before you buy a used car</h2>
            <ol className="space-y-4">
              {[
                "Photograph the plate and the registration sticker in the seller's driveway or the listing photos. Note the state.",
                'Check the plate above. You see "reported stolen", "possible match" or "no report found in the records searched", and every source that was searched.',
                "Read the VIN from the dashboard (driver's side, through the windshield) and the driver's door jamb. They must match each other.",
                'Run the VIN on the VIN checker. The decoded year, make and model must match the car and the paperwork.',
                "Ask for the title and the registration. The plate, VIN and owner name on them should match the car and the seller's photo ID.",
                'If anything doesn\'t line up, walk away. Your check stays saved in your account with the date.',
              ].map((step, i) => (
                <li key={i} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Plate swap warning */}
        <section className="py-10 px-4 bg-yellow-50 dark:bg-yellow-900/10 border-y border-yellow-200 dark:border-yellow-800">
          <div className="max-w-3xl mx-auto flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-yellow-800 dark:text-yellow-200 mb-2">
                A clean plate can sit on a stolen car
              </h2>
              <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-3">
                Thieves swap plates so a stolen car doesn't come up when police run it. The plate may be stolen from a
                parked car of the same model, or taken off a junked one. Signs to look for:
              </p>
              <ul className="text-sm text-yellow-800 dark:text-yellow-300 list-disc pl-5 space-y-1">
                <li>New, shiny bolts on an old plate, or a plate held on with one screw or zip ties</li>
                <li>A registration sticker for a different year, or none at all</li>
                <li>A plate from one state and a title from another, with no clear reason</li>
                <li>A paper temporary tag with a handwritten date or no dealer name</li>
                <li>
                  A seller who won't let you see the VIN or the title. Check the{' '}
                  <Link to="/vin-checker" className="underline font-medium">
                    VIN
                  </Link>{' '}
                  every time.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <StateLinksGrid kind="plate" />

        {/* FAQs */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">License plate lookup questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Check the plate, then the VIN</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              The plate tells you about the plate. The VIN tells you about the car. Do both before you hand over money.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Search className="mr-2 h-5 w-5" />
                Check a plate
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/vin-checker">
                  <Car className="mr-2 h-5 w-5" />
                  Check a VIN
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LicensePlateLookupPage;
