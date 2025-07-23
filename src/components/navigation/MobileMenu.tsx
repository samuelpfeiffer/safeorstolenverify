
import { MobileNavLinks } from './MobileNavLinks';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

interface MobileMenuProps {
  currentPath: string;
  closeMenu: () => void;
  isOpen: boolean;
}

export const MobileMenu = ({ currentPath, closeMenu, isOpen }: MobileMenuProps) => {
  const { isAuthenticated, signOut } = useUnifiedAuth();
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={closeMenu}
      />
      
      {/* Mobile Menu */}
      <div className="md:hidden bg-sos absolute top-full left-0 right-0 shadow-xl animate-fadeIn z-50 border-t border-sos-orange/20">
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain">
          <div className="flex justify-center mb-2">
            <span className="text-xs font-semibold text-sos-orange">Verify Before You Buy</span>
          </div>
          <MobileNavLinks currentPath={currentPath} closeMenu={closeMenu} />
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-800">
            {isAuthenticated ? (
              <>
                <Button 
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }} 
                  variant="outline" 
                  size="lg"
                  className="border-sos-orange text-sos-orange hover:bg-sos-orange/10 w-full min-h-[48px]"
                >
                  Logout
                </Button>
                <Link to="/search-history" className="w-full" onClick={closeMenu}>
                  <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 text-white w-full min-h-[48px]">
                    My Account
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth" className="w-full" onClick={closeMenu}>
                  <Button variant="outline" size="lg" className="border-sos-orange text-sos-orange hover:bg-sos-orange/10 w-full min-h-[48px]">
                    Login
                  </Button>
                </Link>
                <Link to="/auth?tab=register" className="w-full" onClick={closeMenu}>
                  <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 text-white w-full min-h-[48px]">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
