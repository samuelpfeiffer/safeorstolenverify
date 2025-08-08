
import { ExternalLink, Rocket } from 'lucide-react';

export const FasterCapitalBranding = () => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-center gap-2 text-gray-400">
        <Rocket className="h-4 w-4 text-sos-lime" />
        <span>Proudly accelerated by:</span>
      </div>
      <a 
        href="https://fastercapital.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sos-orange hover:text-sos-orange/80 transition-colors group"
        title="FasterCapital - Accelerating our mission to fight the $13B stolen goods crisis"
      >
        <strong className="font-semibold">FasterCapital</strong>
        <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};
