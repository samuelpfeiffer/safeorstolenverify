import { Link } from "@/lib/router-compat";
import { PageSEO } from "@/components/seo/PageSEO";

export default function TennesseeGunLookupPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <PageSEO
        title="Gun Serial Number Lookup Free Tennessee"
        description="Free gun serial number lookup for Tennessee. Enter the serial and search police theft reports from 33 states and DC plus live Ohio records. 2 free checks."
        canonical="/gun-serial-number-lookup/tennessee"
      />
      <article className="container mx-auto max-w-3xl px-4 space-y-6">
        <h1 className="text-4xl font-black">Gun Serial Number Lookup Free Tennessee</h1>
        <p className="text-lg text-muted-foreground">
          To check a gun serial in Tennessee, enter it at the checker below. The search covers 242,839 police firearm theft and loss reports from 33 states and Washington, DC, standardized to NCIC gun codes, plus live Ohio records and SafeOrStolen theft reports. A Tennessee serial is checked against those records. The first 2 checks are free.
        </p>
        <Link to="/firearms-check" className="inline-block rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground">
          Check a Tennessee gun serial
        </Link>
        <h2 className="text-2xl font-bold">What does a match mean?</h2>
        <p className="text-muted-foreground">A match means that serial appears in a police theft or loss report. Do not buy it. Give the serial and the result to local police on the non-emergency line.</p>
      </article>
    </main>
  );
}
