
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
        className={cn("py-3 px-2 transition-colors rounded-lg min-h-[44px] flex items-center", 
          currentPath === "/" ? "text-sos-orange bg-sos-orange/10" : "text-white hover:text-sos-orange hover:bg-sos-orange/5"
        )}
      >
        Home
      </Link>
      <Link 
        to="/about-problem" 
        onClick={closeMenu} 
        className={cn("py-3 px-2 transition-colors rounded-lg min-h-[44px] flex items-center", 
          currentPath === "/about-problem" ? "text-sos-orange bg-sos-orange/10" : "text-white hover:text-sos-orange hover:bg-sos-orange/5"
        )}
      >
        About the Problem
      </Link>
      <Link 
        to="/how-it-works" 
        onClick={closeMenu} 
        className={cn("py-3 px-2 transition-colors rounded-lg min-h-[44px] flex items-center", 
          currentPath === "/how-it-works" ? "text-sos-orange bg-sos-orange/10" : "text-white hover:text-sos-orange hover:bg-sos-orange/5"
        )}
      >
        How It Works
      </Link>
      <Link 
        to="/our-story" 
        onClick={closeMenu} 
        className={cn("py-3 px-2 transition-colors rounded-lg min-h-[44px] flex items-center", 
          currentPath === "/our-story" ? "text-sos-orange bg-sos-orange/10" : "text-white hover:text-sos-orange hover:bg-sos-orange/5"
        )}
      >
        Our Story
      </Link>
      <button 
        onClick={() => {
          closeMenu();
          if (currentPath === "/") {
            setTimeout(() => {
              document.getElementById('fastercapital-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            window.location.href = "/#fastercapital-section";
          }
        }}
        className="py-3 px-2 text-white hover:text-sos-orange transition-colors text-left rounded-lg min-h-[44px] flex items-center hover:bg-sos-orange/5"
      >
        FasterCapital
      </button>
      <Link 
        to="/for-brands" 
        onClick={closeMenu} 
        className={cn("py-3 px-2 transition-colors rounded-lg min-h-[44px] flex items-center", 
          currentPath === "/for-brands" ? "text-sos-orange bg-sos-orange/10" : "text-white hover:text-sos-orange hover:bg-sos-orange/5"
        )}
      >
        For Business
      </Link>
      <Link 
        to="/contact" 
        onClick={closeMenu} 
        className={cn("py-3 px-2 transition-colors rounded-lg min-h-[44px] flex items-center", 
          currentPath === "/contact" ? "text-sos-orange bg-sos-orange/10" : "text-white hover:text-sos-orange hover:bg-sos-orange/5"
        )}
      >
        Contact
      </Link>
    </>
  );
};
