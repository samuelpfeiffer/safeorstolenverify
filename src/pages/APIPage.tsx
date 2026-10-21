import { Link } from "@/lib/router-compat";
import { PageSEO } from "@/components/seo/PageSEO";

const FAQS = [
  {
    question: "Does SafeOrStolen have an API?",
    answer: "Yes. POST https://safeorstolen.com/verify-api runs the same check as the website. Send an identifier and an optional item type. A signed-in account uses a Bearer token. The first 2 checks can run without an account when a browser fingerprint is included.",
  },
  {
    question: "What does a request look like?",
    answer: "POST /verify-api with JSON: { identifier, itemType, fingerprint }. identifier is the IMEI, VIN, plate, or serial. itemType is optional, such as phone, vehicle, gun, bike, or plate. Authenticated calls send Authorization: Bearer YOUR_SESSION_TOKEN.",
  },
  {
    question: "What does it cost?",
    answer: "1 free check, no account needed, then $0.99 for 2 checks or $10 a month for unlimited checks.",
  },
  {
    question: "What does a miss mean?",
    answer: "No record found means the identifier was not found in the sources searched. It is not proof the item is clean.",
  },
];

export default function APIPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <PageSEO
        title="SafeOrStolen API | Check an IMEI, VIN, or Serial"
        description="POST to /verify-api to check an IMEI, VIN, plate, or serial number. 1 free check, then $0.99 or $10 a month."
        canonical="/api"
      />
      <article className="container mx-auto max-w-3xl px-4 space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-black">Check API</h1>
          <p className="text-lg text-muted-foreground">
            Run the same check the website runs. One endpoint, JSON in and JSON out.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Endpoint</h2>
          <pre className="rounded-xl border border-border bg-card p-4 text-sm overflow-x-auto">POST https://safeorstolen.com/verify-api</pre>
          <p className="text-muted-foreground">Header: Content-Type: application/json. Signed-in calls also send Authorization: Bearer YOUR_SESSION_TOKEN.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Body</h2>
          <pre className="rounded-xl border border-border bg-card p-4 text-sm overflow-x-auto">{`{
  "identifier": "356789012345678",
  "itemType": "phone",
  "fingerprint": "browser-id"
}`}</pre>
          <p className="text-muted-foreground">identifier is required. itemType is optional. fingerprint is required only for the 1 free check without an account.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Limits</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>1 free check, no account needed</li>
            <li>Then $0.99 for 2 checks, or $10 a month unlimited</li>
            <li>60 requests a minute per account</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Questions</h2>
          {FAQS.map((f) => (
            <div key={f.question}>
              <h3 className="font-semibold">{f.question}</h3>
              <p className="text-muted-foreground">{f.answer}</p>
            </div>
          ))}
        </section>

        <Link to="/verify" className="inline-block rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90">
          Run a check
        </Link>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      }) }} />
    </main>
  );
}
