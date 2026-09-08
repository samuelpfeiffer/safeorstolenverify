import React from 'react';
import { Link } from '@/lib/router-compat';

interface InternalLinkingOptimizerProps {
  currentPage: string;
  className?: string;
}

export const InternalLinkingOptimizer: React.FC<InternalLinkingOptimizerProps> = ({ 
  currentPage,
  className = "text-primary hover:text-primary/80 underline"
}) => {
  
  // Strategic internal links for SEO juice distribution
  const getRelevantLinks = (page: string) => {
    const linkStrategies = {
      homepage: [
        { url: "/blog/complete-verification-guide", anchor: "how to check if something is stolen", priority: "high" },
        { url: "/blog/theft-trends-report-2024", anchor: "stolen goods statistics", priority: "high" },
        { url: "/check-phone", anchor: "IMEI checker", priority: "medium" },
        { url: "/check-car", anchor: "VIN verification", priority: "medium" },
        { url: "/pricing", anchor: "our verification services", priority: "medium" }
      ],
      guide: [
        { url: "/dashboard", anchor: "verification tool", priority: "high" },
        { url: "/blog/theft-trends-report-2024", anchor: "latest theft statistics", priority: "high" },
        { url: "/check-phone", anchor: "phone verification", priority: "medium" },
        { url: "/how-it-works", anchor: "verification process", priority: "medium" }
      ],
      statistics: [
        { url: "/blog/complete-verification-guide", anchor: "protection guide", priority: "high" },
        { url: "/dashboard", anchor: "verify items now", priority: "high" },
        { url: "/about", anchor: "our methodology", priority: "medium" },
        { url: "/report-stolen", anchor: "report stolen goods", priority: "low" }
      ],
      service: [
        { url: "/blog/complete-verification-guide", anchor: "buyer protection guide", priority: "high" },
        { url: "/pricing", anchor: "pricing plans", priority: "medium" },
        { url: "/how-it-works", anchor: "how verification works", priority: "medium" }
      ]
    };

    return linkStrategies[page as keyof typeof linkStrategies] || linkStrategies.homepage;
  };

  const links = getRelevantLinks(currentPage);
  const highPriorityLinks = links.filter(link => link.priority === 'high');

  if (highPriorityLinks.length === 0) return null;

  return (
    <div className="mt-8 p-6 bg-gray-800/30 rounded-lg border border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {highPriorityLinks.map((link, index) => (
          <Link 
            key={index}
            to={link.url}
            className={`${className} block p-3 bg-gray-800/50 rounded-[0.25rem] hover:bg-gray-800/70 transition-colors`}
          >
            {link.anchor}
          </Link>
        ))}
      </div>
    </div>
  );
};