
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Youtube } from 'lucide-react';

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
        to="/pricing" 
        className={cn("transition-colors", 
          currentPath === "/pricing" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Pricing
      </Link>
      <a
        href="https://www.youtube.com/@SafeOrStolen"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "transition-colors flex items-center gap-1",
          currentPath === "/youtube" ? "text-red-500" : "text-white hover:text-red-500"
        )}
        aria-label="SafeOrStolen YouTube Channel"
      >
        <Youtube className="w-4 h-4" />
        Videos
      </a>
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
