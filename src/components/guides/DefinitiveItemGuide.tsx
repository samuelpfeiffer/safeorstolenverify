import {
  ExternalLink,
  Shield,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";

export type GuideMethod = {
  name: string;
  cost: string;
  description: string;
  tellsYou: string;
  url?: string;
  linkLabel?: string;
};

export type GuideFaq = { question: string; answer: string };

export type DefinitiveGuideProps = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string;
  directAnswer: string;
  identifierTitle: string;
  identifierIntro: string;
  identifierLocations: string[];
  methods: GuideMethod[];
  redFlags: string[];
  stolenSteps: string[];
  safeOrStolenText: string;
  toolHref: string;
  toolLabel: string;
  faqs: GuideFaq[];
  related: { href: string; label: string }[];
  published?: string;
  /** buyer (default), victim (had something stolen), or legal information */
  variant?: "buyer" | "victim" | "legal";
};

const LABELS = {
  buyer: {
    badge: "Buyer and seller guide",
    identifier: "Find the identifier",
    methods: "Checks to run before you pay",
    methodsToc: "Checks to run, costs, and limits",
    methodsIntro:
      "No single search proves ownership or catches every theft. Use several independent checks and understand what each one can—and cannot—tell you.",
    redFlags: "Warning signs",
    stolen: "What to do if the item may be stolen",
  },
  victim: {
    badge: "Theft victim guide",
    identifier: "Find your identifier",
    methods: "Steps to take now",
    methodsToc: "Steps to take now",
    methodsIntro:
      "Work through these in order. Speed matters for tracking, blocking, and insurance, and the identifier is what police, carriers, registries, and insurers ask for.",
    redFlags: "Mistakes to avoid",
    stolen: "Keep records and follow up",
  },
  legal: {
    badge: "General legal information",
    identifier: "Key points",
    methods: "How to protect yourself as a buyer",
    methodsToc: "How to protect yourself",
    methodsIntro:
      "This is general information, not legal advice. Laws differ by state and situation; speak with a licensed attorney about your facts.",
    redFlags: "Warning signs a deal may involve stolen property",
    stolen: "If you think you bought stolen property",
  },
} as const;

const DATE_MODIFIED = "2026-09-24";

export function DefinitiveItemGuide({
  slug,
  title,
  metaTitle,
  description,
  keywords,
  directAnswer,
  identifierTitle,
  identifierIntro,
  identifierLocations,
  methods,
  redFlags,
  stolenSteps,
  safeOrStolenText,
  toolHref,
  toolLabel,
  faqs,
  related,
  published = DATE_MODIFIED,
  variant = "buyer",
}: DefinitiveGuideProps) {
  const L = LABELS[variant];
  const pageUrl = `https://safeorstolen.com${slug}`;
  const steps = variant !== "buyer" ? [
    `${identifierTitle}. ${identifierIntro}`,
    ...methods.map((method) => `${method.name}: ${method.description}`),
  ] : [
    `Find and photograph the item's identifier. ${identifierIntro}`,
    ...methods.map((method) => `${method.name}: ${method.description}`),
    "Compare the identifier on the physical item with the listing, receipt, packaging, and any account or registration screen.",
    "Stop the transaction and preserve the listing and messages if an identifier is missing, altered, mismatched, or reported stolen.",
  ];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      datePublished: published,
      dateModified: DATE_MODIFIED,
      author: {
        "@type": "Person",
        name: "Samuel Pfeiffer",
        jobTitle: "Founder & CEO",
      },
      publisher: {
        "@type": "Organization",
        name: "SafeOrStolen",
        url: "https://safeorstolen.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: title,
      description,
      step: steps.map((text, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: `Step ${index + 1}`,
        text,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title={metaTitle}
        description={description}
        keywords={keywords}
        canonical={slug}
        type="article"
        modifiedTime={DATE_MODIFIED}
        structuredData={structuredData}
      />
      <article className="container mx-auto max-w-3xl px-4 py-16 text-muted-foreground leading-relaxed">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <Shield className="h-4 w-4" /> {L.badge}
        </div>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mb-8 text-sm">
          By <strong className="text-foreground">Samuel Pfeiffer</strong>,
          Founder of SafeOrStolen · Updated September 24, 2026
        </p>

        <div className="mb-8 rounded-lg border border-primary/40 bg-card p-5">
          <p className="text-lg text-foreground">
            <strong>Short answer:</strong> {directAnswer}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to={toolHref}>
              {toolLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/how-to-check-if-item-stolen">All item guides</Link>
          </Button>
        </div>

        <nav
          aria-label="On this page"
          className="mb-10 rounded-lg bg-card p-5 text-sm"
        >
          <p className="mb-2 font-semibold text-foreground">On this page</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              <a className="hover:text-primary" href="#identifier">
                {L.identifier}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#methods">
                {L.methodsToc}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#red-flags">
                {L.redFlags}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#if-stolen">
                {L.stolen}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#safeorstolen">
                Where SafeOrStolen fits
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#faq">
                Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>

        <h2
          id="identifier"
          className="mb-4 mt-12 text-3xl font-bold text-foreground"
        >
          {identifierTitle}
        </h2>
        <p>{identifierIntro}</p>
        <ul className="my-5 list-disc space-y-2 pl-6">
          {identifierLocations.map((location) => (
            <li key={location}>{location}</li>
          ))}
        </ul>
        {variant === "buyer" && (
          <p>
            Photograph the identifier before paying and compare every place it
            appears. A mismatch, missing label, altered plate, or seller who
            refuses to provide it is a reason to stop.
          </p>
        )}

        <h2
          id="methods"
          className="mb-4 mt-12 text-3xl font-bold text-foreground"
        >
          {L.methods}
        </h2>
        <p className="mb-6">{L.methodsIntro}</p>
        <div className="space-y-6">
          {methods.map((method, index) => (
            <section
              key={method.name}
              className="border-l-2 border-primary/40 pl-5"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {index + 1}. {method.name}
              </h3>
              <p className="my-1 text-sm font-medium text-primary">
                Cost: {method.cost}
              </p>
              <p>{method.description}</p>
              <p className="mt-2">
                <strong className="text-foreground">What it tells you:</strong>{" "}
                {method.tellsYou}
              </p>
              
            </section>
          ))}
        </div>

        <h2
          id="red-flags"
          className="mb-4 mt-12 text-3xl font-bold text-foreground"
        >
          {L.redFlags}
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          {redFlags.map((flag) => (
            <li key={flag}>{flag}</li>
          ))}
        </ul>

        <h2
          id="if-stolen"
          className="mb-4 mt-12 text-3xl font-bold text-foreground"
        >
          {L.stolen}
        </h2>
        <ol className="list-decimal space-y-2 pl-6">
          {stolenSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="my-8 flex gap-3 rounded-lg border border-border bg-card p-4 text-sm">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <p>
            {variant === "legal"
              ? "This page is general information, not legal advice. Laws differ by state and by the facts of each case. Speak with a licensed attorney in your state about your situation."
              : variant === "victim"
                ? "Do not try to recover an item yourself or confront anyone who has it. Give the information to police. Call emergency services only if someone is in immediate danger."
                : "No service can guarantee 100% accuracy, and not every theft is reported. Do not confront a seller. For a high-value purchase or a strong warning sign, contact local law enforcement."}
          </p>
        </div>
        {variant === "victim" && (
          <div className="my-8 rounded-lg border border-primary/40 bg-card p-5">
            <p className="mb-3 text-foreground">
              <strong>Log it on SafeOrStolen.</strong> Add the item and its
              identifier to SafeOrStolen's stolen-item reports, so anyone who
              checks that identifier on SafeOrStolen sees it was reported
              stolen. This does not replace a police report.
            </p>
            <Button asChild>
              <Link to="/report-stolen">
                Report a stolen item <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}

        <h2
          id="safeorstolen"
          className="mb-4 mt-12 text-3xl font-bold text-foreground"
        >
          Where SafeOrStolen fits
        </h2>
        <p>{safeOrStolenText}</p>
        <p className="mt-4">
          SafeOrStolen checks its own stolen-item reports, public web results,
          and AI analysis. It also checks BikeIndex for bicycles and HotGunz for
          firearms. It does not search NCIC, police, DMV, insurance,
          carrier-blacklist, or other outside registries described in this
          guide; those are separate checks for the reader to perform.
        </p>
        <p className="mt-4">
          Buyers can save the result with their other due-diligence records.
          After a clean check, sellers can share a{" "}
          <Link className="text-primary underline" to="/proof-of-purchase">
            Proof of Clean Purchase
          </Link>
          : a permanent, timestamped verification record. It is not a title,
          guarantee of ownership, or legal document.
        </p>

        <h2 id="faq" className="mb-4 mt-12 text-3xl font-bold text-foreground">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <section key={faq.question}>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {faq.question}
              </h3>
              <p>{faq.answer}</p>
            </section>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-foreground">
          Related guides and tools
        </h2>
        <ul className="space-y-2">
          {related.map((item) => (
            <li key={item.href} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <Link className="text-primary underline" to={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
