import { ExternalLink, Rocket } from 'lucide-react';

export const FasterCapitalBranding = () => {
  return (
    <div className="flex items-center gap-4 text-base md:text-lg">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Rocket className="h-5 w-5 text-sos-lime" />
        <span>Accelerated by</span>
      </div>
      <a
        href="https://fastercapital.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 transition-colors group"
        title="FasterCapital accelerator"
        aria-label="Visit FasterCapital website"
      >
        <img src="/images/partners/fastercapital-logo.png" alt="FasterCapital official logo" className="h-5 w-auto" loading="lazy" />
        <span className="fc-gradient-text font-semibold">FasterCapital</span>
        <ExternalLink className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};
