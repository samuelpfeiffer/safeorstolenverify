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
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
          <Rocket className="h-5 w-5 text-white" />
          <span className="font-bold text-white">FasterCapital</span>
        </div>
        <ExternalLink className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};
