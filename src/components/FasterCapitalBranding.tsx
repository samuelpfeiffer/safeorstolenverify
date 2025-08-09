
import { ExternalLink, Rocket } from 'lucide-react';

export const FasterCapitalBranding = () => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-center gap-2 text-gray-300">
        <Rocket className="h-4 w-4 text-fc-red" />
        <span>Accelerated by</span>
      </div>
      <a 
        href="https://fastercapital.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white transition-colors group"
        title="FasterCapital - Accelerating our mission"
      >
        <strong className="font-semibold bg-gradient-to-r from-fc-blue to-fc-red bg-clip-text text-transparent">FasterCapital</strong>
        <ExternalLink className="h-4 w-4 text-fc-blue group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};
