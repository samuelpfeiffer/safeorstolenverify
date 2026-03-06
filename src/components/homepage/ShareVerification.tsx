import { Share2, Link as LinkIcon, MessageCircle, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Referral/share section on the homepage — encourages users to share results
 * to drive viral traffic. Works with the existing shared_reports + certificates tables.
 */
export const ShareVerification = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyDemo = () => {
    navigator.clipboard.writeText('https://safeorstolen.com/verify');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Share & Protect</div>
          <h2 className="text-3xl font-black text-foreground mb-3">
            Share Your Verification. Help Others Stay Safe.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every verified item generates a shareable report. Post it in your listing, send it to buyers,
            or share with friends who are about to buy secondhand. Every share helps fight stolen goods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* For Sellers */}
          <div className="modern-card p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <LinkIcon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-foreground font-bold text-base mb-2">Add to Your Listing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Paste your verification link directly into your Facebook Marketplace, OfferUp, or Craigslist listing. Verified items sell 2x faster.
            </p>
          </div>

          {/* For Buyers */}
          <div className="modern-card p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-foreground font-bold text-base mb-2">Send to a Friend</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Know someone buying a used phone or car? Send them SafeOrStolen. Two free checks — no excuses.
            </p>
          </div>

          {/* Certificates */}
          <div className="modern-card p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Share2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-foreground font-bold text-base mb-2">PDF Certificate</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Download a timestamped PDF proof of verification. Attach it to listings, emails, or keep for your records.
            </p>
          </div>
        </div>

        {/* Share CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
            <Link
              to="/verify"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3.5 rounded-xl transition-all button-glow"
            >
              <Share2 className="w-4 h-4" />
              Verify & Share Now — Free
            </Link>
            <button
              onClick={handleCopyDemo}
              className="inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary text-foreground font-semibold px-6 py-3.5 rounded-xl transition-all hover:bg-primary/5"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Link to Share
                </>
              )}
            </button>
          </div>
          <p className="text-muted-foreground/60 text-xs mt-3">
            Every share helps protect someone from buying stolen goods
          </p>
        </div>
      </div>
    </section>
  );
};
