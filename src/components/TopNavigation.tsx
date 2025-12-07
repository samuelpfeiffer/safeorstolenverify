import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, BarChart, AlertCircle, Youtube, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sosLogo from '@/assets/sos-logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

const TopNavigation = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, signOut } = useUnifiedAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/verify', label: 'Verify' },
    { to: '/compare', label: 'Compare' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/app', label: 'Download App', featured: true },
  ];

  const authenticatedLinks = [
    { to: '/analytics', label: 'Analytics', icon: 'BarChart' },
    { to: '/report-stolen', label: 'Report Stolen', icon: 'AlertCircle' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={sosLogo} 
              alt="SafeOrStolen Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-black tracking-tight">
              <span className="text-foreground">Safe</span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Or</span>
              <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Stolen</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold transition-colors relative group py-2 ${
                  link.featured 
                    ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Auth + Social */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Media Links */}
            <div className="flex items-center gap-2 mr-2">
              <a
                href="https://twitter.com/safeorstolen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SafeOrStolen on X/Twitter"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border/60 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://www.facebook.com/safeorstolen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SafeOrStolen on Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border/60 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Facebook className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/company/safeorstolen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SafeOrStolen on LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border/60 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              <Link
                to="/youtube"
                aria-label="SafeOrStolen on YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border/60 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Youtube className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <User className="w-4 h-4" />
                    <span>Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search-history')}>
                    History
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/analytics')}>
                    <BarChart className="w-4 h-4 mr-2" />
                    Analytics
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/report-stolen')}>
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Report Stolen
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/auth')}
                  className="text-foreground hover:text-sos-orange transition-colors"
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigate('/auth?mode=signup')}
                  className="sos-gradient hover:opacity-90 text-white font-bold shadow-orange transition-all"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button - 48x48 minimum tap target */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Enhanced tap targets with 8px spacing */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-4 min-h-[48px] flex items-center text-foreground hover:bg-muted/50 rounded-lg font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 px-4 space-y-2 border-t border-border/50 mt-4">
              {isAuthenticated ? (
                <>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      navigate('/dashboard');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      navigate('/profile');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      navigate('/analytics');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <BarChart className="w-4 h-4" />
                    Analytics
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      navigate('/report-stolen');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    Report Stolen
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 text-destructive"
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      navigate('/auth');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full sos-gradient hover:opacity-90 text-white font-bold"
                    onClick={() => {
                      navigate('/auth?mode=signup');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/50 mt-4">
              <a href="https://twitter.com/safeorstolen" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://www.facebook.com/safeorstolen" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/safeorstolen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://www.youtube.com/@safeorstolen" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
