import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, BarChart, AlertCircle, ChevronDown, BookOpen, HelpCircle, FileText, Building2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Logo served from /public to avoid JS bundle bloat (266KB PNG)
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
    { to: '/verify', label: 'Verify' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/compare', label: 'Compare' },
    { to: '/mobile-app', label: 'App' },
  ];

  const resourceLinks = [
    { to: '/blog', label: 'Blog', icon: BookOpen },
    { to: '/faq', label: 'Help & FAQ', icon: HelpCircle },
    { to: '/how-it-works', label: 'How It Works', icon: FileText },
    { to: '/for-businesses', label: 'For Business', icon: Building2 },
    { to: '/theftaz', label: 'TheftAZ Search', icon: Search },
    { to: '/partial-serial-number-search', label: 'Partial Serial Search', icon: Search },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img 
              src="/sos-logo.png" 
              alt="SafeOrStolen Logo" 
              width={36}
              height={36}
              className="h-9 w-9 transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              SafeOrStolen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isAIVerify = link.to === '/verify';
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    isAIVerify
                      ? 'flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-primary border border-primary/60 bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all rounded-lg shadow-sm shadow-primary/20'
                      : 'flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50'
                  }
                >
                  {'icon' in link && link.icon && <link.icon className="w-3.5 h-3.5 text-red-600" aria-hidden="true" />}
                  {link.label}
                </Link>
              );
            })}
            
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 outline-none">
                Resources
                <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-52 bg-card border border-border shadow-xl rounded-xl">
                {resourceLinks.map((link) => (
                  <DropdownMenuItem key={link.to} onClick={() => navigate(link.to)} className="cursor-pointer gap-2">
                    <link.icon className="w-4 h-4 text-muted-foreground" />
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 rounded-lg">
                    <User className="w-4 h-4" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-xl">
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>Profile</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    <BarChart className="w-4 h-4 mr-2" />Analytics
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/report-stolen')}>
                    <AlertCircle className="w-4 h-4 mr-2" />Report Stolen
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate('/auth')} className="text-muted-foreground hover:text-foreground rounded-lg">
                  Sign In
                </Button>
                <Button size="sm" onClick={() => navigate('/auth?mode=signup')} className="rounded-lg button-glow font-semibold">
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-1 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="px-4 pt-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Resources</p>
              {resourceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-2 py-3 text-foreground hover:bg-muted/50 rounded-lg font-medium transition-colors"
                >
                  <link.icon className="w-4 h-4 text-muted-foreground" />
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="pt-4 px-4 space-y-2 border-t border-border/50 mt-3">
              {isAuthenticated ? (
                <>
                  <Button variant="outline" className="w-full justify-start gap-2 rounded-lg" onClick={() => { navigate('/dashboard'); setIsMobileMenuOpen(false); }}>
                    Dashboard
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 rounded-lg text-destructive" onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }}>
                    <LogOut className="w-4 h-4" />Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full rounded-lg" onClick={() => { navigate('/auth'); setIsMobileMenuOpen(false); }}>
                    Sign In
                  </Button>
                  <Button className="w-full rounded-lg font-semibold" onClick={() => { navigate('/auth?mode=signup'); setIsMobileMenuOpen(false); }}>
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
