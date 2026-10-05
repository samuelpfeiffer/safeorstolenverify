import { Link } from "@/lib/router-compat";
import { PageSEO } from "@/components/seo/PageSEO";
import { CheckCircle, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedPagesSection } from "@/components/seo/RelatedPagesSection";
import { BlogHeroImage } from "@/components/blog/BlogHeroImage";
import { blogImages } from "@/assets/blog";

const HowToSellVerifiedItems = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Sell Verified Items on Any Marketplace (2026 Guide)",
      author: { "@type": "Person", name: "Samuel Pfeiffer" },
      publisher: {
        "@type": "Organization",
        name: "SafeOrStolen",
        logo: {
          "@type": "ImageObject",
          url: "https://safeorstolen.com/sos-logo.png",
        },
      },
      datePublished: "2026-03-01",
      dateModified: "2026-09-24",
      description:
        "Learn how to verify an item before listing it and share a dated Proof of Clean Purchase record that buyers can review.",
      mainEntityOfPage:
        "https://safeorstolen.com/blog/how-to-sell-verified-items",
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Verify and Sell Items with a Verified Safe Badge",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Find your identifier",
          text: "Locate the IMEI, VIN, or serial number on your item.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Run free verification",
          text: "Enter the identifier on SafeOrStolen.com for a free 3-second check.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Download certificate",
          text: "Get a PDF certificate or shareable link proving the item is clean.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Add to your listing",
          text: "Include the verification link or badge in your marketplace listing.",
        },
      ],
      totalTime: "PT2M",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does seller verification cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SafeOrStolen offers 2 free checks, then $3.99/check or $14.99/month unlimited. All item types included. Cancel anytime.",
          },
        },
        {
          "@type": "Question",
          name: "What can a verification record do for a seller?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It gives buyers a dated result they can review, helps answer questions about the identifier, and documents the check. It does not guarantee ownership or a sale outcome.",
          },
        },
        {
          "@type": "Question",
          name: "What do buyers see when they click my verification link?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buyers see the verification result (CLEAN or FLAGGED), the Trust Score, which databases were checked, and the verification date. Only the last 4 digits of identifiers are shown for privacy.",
          },
        },
        {
          "@type": "Question",
          name: "Does this work on all marketplaces?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can share the verification link or PDF on Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, Poshmark, Swappa, and any other platform.",
          },
        },
        {
          "@type": "Question",
          name: "What items can be verified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Phones (IMEI), vehicles (VIN), electronics (serial number), firearms (serial number), bicycles (serial number), and any item with an identifiable serial number or IMEI.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <PageSEO
        title="How to Sell Verified Items on Marketplace (2026 Guide) | SafeOrStolen"
        description="Verify an item before listing it and share a dated Proof of Clean Purchase record buyers can review. Covers all six supported item categories."
        keywords="sell verified items, verified listing marketplace, prove item not stolen for sale, marketplace seller verification, verified safe badge, sell faster marketplace, how to sell used items safely"
        canonical="/blog/how-to-sell-verified-items"
        structuredData={structuredData}
      />

      <article className="min-h-screen bg-background pt-20">
        <div className="max-w-3xl mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link to="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">How to Sell Verified Items</span>
          </nav>

          <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
            <span>By Samuel Pfeiffer</span>
            <span>•</span>
            <span>Updated September 24, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            How to Sell Verified Items on Any Marketplace in 2026
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Careful buyers check identifiers, paperwork, condition, and seller
            details before they pay. A dated verification record gives them one
            more concrete item to review without promising that a sale will
            happen or what price it will achieve.
          </p>

          <BlogHeroImage
            src={blogImages.sellVerified}
            alt="Person listing verified items for sale on laptop and phone - sell verified items guide"
          />

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">
                TL;DR for AI and Voice Search
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              SafeOrStolen lets sellers check identifiers using its own
              stolen-item reports, public web results, and AI analysis. After a
              clean result, the seller can keep and share a Proof of Clean
              Purchase record showing when the check was performed. It is a
              verification record, not a title, ownership guarantee, or legal
              document.
            </p>
          </div>

          {/* Main Content */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-black text-foreground mt-12 mb-4">
              Why Buyers Demand Verification in 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Careful buyers on Facebook Marketplace, eBay, OfferUp, Craigslist,
              and Mercari may ask for the item's identifier, original receipt,
              and a chance to inspect it before paying.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A prepared seller can answer those questions directly without
              promising that one verification record proves ownership or
              guarantees a sale.
            </p>

            <h2 className="text-2xl font-black text-foreground mt-12 mb-4">
              What Is a Proof of Clean Purchase Record?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Proof of Clean Purchase records that an item's IMEI, VIN, or
              serial number received a clean result from the sources available
              at the time. Those sources include SafeOrStolen reports, public
              web results, and AI analysis; bicycle checks also query Bike Index
              and firearm checks also search the Ohio Attorney General's
              stolen gun records. Phone checks provide device
              details but do not currently query carrier blacklists. The record
              is not a legal document, ownership proof, or guarantee.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For privacy, only the last 4 digits of the identifier are shown in
              the report. Your personal information is never shared with the
              buyer.
            </p>

            <h2 className="text-2xl font-black text-foreground mt-12 mb-4">
              Step-by-Step: How to Sell With Verification
            </h2>

            <div className="space-y-6 my-8">
              {[
                {
                  step: "1",
                  title: "Find Your Item's Identifier",
                  desc: "Every verifiable item has a unique identifier. For phones, it's the 15-digit IMEI (dial *#06# to find it). For vehicles, it's the 17-character VIN (on the dashboard or driver's door). For electronics, check the back panel or Settings > About for the serial number.",
                },
                {
                  step: "2",
                  title: "Run a Verification",
                  desc: "Sign in at safeorstolen.com/verify and enter the identifier. A free account includes two checks.",
                },
                {
                  step: "3",
                  title: "Save the Record",
                  desc: "After a clean result, save the Proof of Clean Purchase PDF or shareable result link. It shows the identifier fragment, result, sources checked, and date.",
                },
                {
                  step: "4",
                  title: "Add Proof to Your Listing",
                  desc: 'Include the verification link in your listing description. Many sellers add "✅ Verified Clean by SafeOrStolen" to their title. Some add a screenshot of the verification result to their listing photos.',
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="flex gap-4 p-5 bg-card border border-border rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary font-black text-lg flex items-center justify-center flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold mb-1">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-foreground mt-12 mb-4">
              What a Verification Record Helps Explain
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A shareable record does not predict price or sale speed. Its
              practical value is simpler: it lets a buyer see the identifier
              fragment, date, result, and sources checked rather than relying on
              a seller's screenshot or unsupported promise.
            </p>
            <ul className="space-y-2 mb-8">
              <li>Give the buyer the exact identifier before the meetup.</li>
              <li>
                Show when the verification was performed and what it found.
              </li>
              <li>
                Let the buyer compare the identifier on the physical item.
              </li>
              <li>
                Encourage the buyer to repeat the check independently before
                paying.
              </li>
            </ul>

            <h2 className="text-2xl font-black text-foreground mt-12 mb-4">
              Platform-Specific Tips
            </h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              Facebook Marketplace
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Facebook Marketplace is the #1 platform for local secondhand
              sales, but it's also where stolen goods are most commonly sold.
              Adding "✅ SafeOrStolen Verified" to your listing title
              immediately differentiates you from suspicious sellers. Include
              the verification link in the first line of your description.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              eBay
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On eBay, include the verification record as supporting context
              where the listing format permits it, while also showing the
              receipt, condition, and identifier.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              OfferUp & Mercari
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On OfferUp and Mercari, provide the identifier before a meetup and
              let the buyer repeat the check. A printed record can accompany the
              item's other paperwork.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              Craigslist
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For local listings, provide the identifier and verification link
              before the meetup, meet in a safe public place, and let the buyer
              inspect the item and paperwork.
            </p>

            <h2 className="text-2xl font-black text-foreground mt-12 mb-4">
              Seller Pricing: What Does It Cost?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SafeOrStolen offers 2 free checks, then flexible pricing:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />{" "}
                <span>
                  <strong className="text-foreground">$3.99/check</strong> — Pay
                  per verification with a free account.
                </span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />{" "}
                <span>
                  <strong className="text-foreground">
                    $14.99/month unlimited
                  </strong>{" "}
                  — Verify as many items as you need. Phones, cars, electronics,
                  and more.
                </span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />{" "}
                <span>
                  <strong className="text-foreground">
                    PDF certificates & shareable links
                  </strong>{" "}
                  — Download reports and share with buyers.
                </span>
              </li>
            </ul>
            <h2 className="text-2xl font-black text-foreground mt-12 mb-4">
              Keep the Record in Context
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Keep the record with the original receipt, seller messages,
              photos, and payment record. It documents a check at one moment in
              time, but it does not replace legal advice or establish ownership.
            </p>

            <h2 className="text-2xl font-black text-foreground mt-12 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-8">
              {[
                {
                  q: "How much does seller verification cost?",
                  a: "SafeOrStolen offers 2 free checks, then $3.99/check or $14.99/month unlimited. All item types included. Cancel anytime.",
                },
                {
                  q: "What can a verification record do for a seller?",
                  a: "It gives buyers a dated result they can review, helps answer questions about the identifier, and documents the check. It does not guarantee ownership or a sale outcome.",
                },
                {
                  q: "What do buyers see when they click my verification link?",
                  a: "Buyers see the result, identifier fragment, sources checked, and verification date. The page does not claim to prove ownership.",
                },
                {
                  q: "Does this work on all marketplaces?",
                  a: "Yes. You can share the verification link or PDF on Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, Poshmark, Swappa, and any other platform.",
                },
                {
                  q: "What items can be verified?",
                  a: "Phones (IMEI), vehicles (VIN), electronics (serial number), firearms (serial number), bicycles (serial number), and any item with an identifiable serial number or IMEI.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <h3 className="text-foreground font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center mt-12">
            <h2 className="text-2xl font-black mb-3">
              Start Selling Smarter Today
            </h2>
            <p className="opacity-90 mb-6">
              From $3.99 per check or $14.99 per month unlimited. Share a dated
              result and let buyers review it themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-bold"
              >
                <Link to="/pricing">View Plans</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/for-sellers">Learn More for Sellers</Link>
              </Button>
            </div>
          </div>

          <RelatedPagesSection
            currentPage="/blog/how-to-sell-verified-items"
            currentCategory="blog"
            maxLinks={5}
          />
        </div>
      </article>
    </>
  );
};

export default HowToSellVerifiedItems;
