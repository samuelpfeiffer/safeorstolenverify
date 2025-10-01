
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MobileNavLinksProps {
  currentPath: string;
  closeMenu: () => void;
}

export const MobileNavLinks = ({ currentPath, closeMenu }: MobileNavLinksProps) => {
  return (
    <>
      <Link 
        to="/" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Home
      </Link>
      <Link 
        to="/about-problem" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/about-problem" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        About the Problem
      </Link>
      <Link 
        to="/how-it-works" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/how-it-works" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        How It Works
      </Link>
      <Link 
        to="/our-story" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/our-story" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Our Story
      </Link>
      <Link 
        to="/for-brands" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/for-brands" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        For Business
      </Link>
      <Link 
        to="/pricing" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/pricing" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Pricing
      </Link>
      <Link 
        to="/data-sources" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/data-sources" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Data Sources
      </Link>
      <Link 
        to="/contact" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/contact" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Contact
      </Link>
    </>
  );
};
