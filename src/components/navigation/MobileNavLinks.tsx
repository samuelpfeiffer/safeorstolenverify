
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
        to="/about" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/about" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        About Us
      </Link>
      <Link 
        to="/for-businesses" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors",
          currentPath === "/for-businesses" ? "text-sos-orange" : "text-white hover:text-sos-orange"
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
        to="/about" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/about" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        About
      </Link>
      <Link 
        to="/faq" 
        onClick={closeMenu} 
        className={cn("py-2 transition-colors", 
          currentPath === "/faq" ? "text-sos-orange" : "text-white hover:text-sos-orange"
        )}
      >
        Help
      </Link>
    </>
  );
};
