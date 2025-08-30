
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  currentPath: string;
}

export const NavLinks = ({ currentPath }: NavLinksProps) => {
  return (
    <div className="hidden md:flex space-x-8">
      <Link 
        to="/" 
        className={cn("transition-colors", 
          currentPath === "/" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Home
      </Link>
      <Link 
        to="/about-problem" 
        className={cn("transition-colors", 
          currentPath === "/about-problem" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        About the Problem
      </Link>
      <Link 
        to="/how-it-works" 
        className={cn("transition-colors", 
          currentPath === "/how-it-works" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        How It Works
      </Link>
      <Link 
        to="/our-story" 
        className={cn("transition-colors", 
          currentPath === "/our-story" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Our Story
      </Link>
      <Link 
        to="/for-brands" 
        className={cn("transition-colors", 
          currentPath === "/for-brands" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        For Business
      </Link>
      <Link 
        to="/fastercapital/raise-capital" 
        className={cn("transition-colors", 
          currentPath === "/fastercapital/raise-capital" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        FasterCapital
      </Link>
      <Link 
        to="/data-sources" 
        className={cn("transition-colors", 
          currentPath === "/data-sources" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Data Sources
      </Link>
      <Link 
        to="/transparency" 
        className={cn("transition-colors", 
          currentPath === "/transparency" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Transparency
      </Link>
      <Link 
        to="/social-media-monitoring" 
        className={cn("transition-colors", 
          currentPath === "/social-media-monitoring" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Social Monitoring
      </Link>
      <Link 
        to="/community-watch" 
        className={cn("transition-colors", 
          currentPath === "/community-watch" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Community Watch
      </Link>
      <Link 
        to="/contact" 
        className={cn("transition-colors", 
          currentPath === "/contact" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Contact
      </Link>
    </div>
  );
};
