
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Search, Home, Shield, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const TopNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const isAuthenticated = !!user;
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navigationItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Real-time Verify', href: '/real-time-verification', icon: Search },
    { label: 'About Problem', href: '/about-problem' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'For Business', href: '/for-brands' },
    { label: 'Contact', href: '/contact' },
  ];

  // FasterCapital Program Requirements Menu
  const fasterCapitalRequirements = [
    { label: 'Raise Capital', href: '/fastercapital/raise-capital', description: 'Get funding from 155K+ angels and 50K+ VCs' },
    { label: 'Tech Cofounder', href: '/fastercapital/tech-cofounder', description: 'Get technical cofounders for your startup' },
    { label: 'Incubation', href: '/fastercapital/incubation', description: 'Join our 12-month acceleration program' },
    { label: 'Mega Financing', href: '/fastercapital/mega-financing', description: 'Financing for $100M+ projects' },
    { label: 'Business Plan', href: '/fastercapital/business-plan', description: 'Professional business plan development' },
    { label: 'Pitch Deck', href: '/fastercapital/pitch-deck', description: 'Investor-ready pitch deck creation' },
    { label: 'Financial Model', href: '/fastercapital/financial-model', description: 'Financial projections and modeling' },
    { label: 'Market Research', href: '/fastercapital/market-research', description: 'Comprehensive market analysis' },
  ];

  const userMenuItems = isAuthenticated ? [
    { label: 'Search History', href: '/search-history', icon: Search },
    { label: 'Profile', href: '/profile' },
    { label: 'Security Settings', href: '/security', icon: Shield },
  ] : [];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-sos/95 backdrop-blur-lg border-b border-sos-orange/10 shadow-lg"
        : "bg-transparent"
    )}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 group transition-transform hover:scale-105"
            >
              <div className="relative">
                <img 
                  src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png" 
                  alt="Safe or Stolen" 
                  className="h-10 w-10 filter drop-shadow-lg"
                />
                <div className="absolute -inset-2 bg-sos-orange/20 rounded-full blur-xl group-hover:bg-sos-orange/30 transition-colors"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl tracking-tight">Safe or Stolen</span>
                <div className="text-xs text-sos-orange font-medium">Verify Before You Buy</div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === item.href
                    ? "text-sos-orange bg-sos-orange/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            ))}
            
            {/* FasterCapital Requirements Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10">
                    FasterCapital
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Program Requirements</h4>
                        <p className="text-xs text-gray-400">Choose the right program for your startup</p>
                      </div>
                      <div className="grid gap-2">
                        {fasterCapitalRequirements.map((item) => (
                          <NavigationMenuLink key={item.href} asChild>
                            <button
                              onClick={() => navigate(item.href)}
                              className="w-full text-left p-3 rounded-lg hover:bg-gray-800 transition-colors group"
                            >
                              <div className="text-sm font-medium text-gray-300 group-hover:text-white mb-1">
                                {item.label}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400">
                                {item.description}
                              </div>
                            </button>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* User Menu & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
                    <div className="w-8 h-8 bg-sos-orange/20 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-sos-orange" />
                    </div>
                    <span className="text-sm font-medium">
                      {user?.email?.split('@')[0]}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 border-gray-800" align="end">
                  {userMenuItems.map((item) => (
                    <DropdownMenuItem
                      key={item.href}
                      onClick={() => navigate(item.href)}
                      className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="flex items-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  onClick={() => navigate('/auth')}
                  className="text-gray-300 hover:text-white"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => navigate('/auth')}
                  className="bg-sos-orange hover:bg-sos-orange/90 text-white font-medium"
                >
                  <User className="h-4 w-4 mr-2" />
                  Get Started
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg rounded-2xl mt-4 p-6 border border-white/10">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    navigate(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all",
                    location.pathname === item.href
                      ? "text-sos-orange bg-sos-orange/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  {item.label}
                </button>
              ))}
              
              {/* FasterCapital Requirements in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-gray-400 text-sm mb-3 px-4">FasterCapital Programs</p>
                {fasterCapitalRequirements.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      navigate(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                  >
                    <div className="text-sm font-medium text-gray-300 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </button>
                ))}
              </div>
              
              {isAuthenticated ? (
                <>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <p className="text-gray-400 text-sm mb-3 px-4">Account</p>
                    {userMenuItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => {
                          navigate(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl w-full text-left transition-all"
                      >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        {item.label}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-4 py-3 rounded-xl w-full text-left transition-all mt-2"
                    >
                      <LogOut className="h-5 w-5" />
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
                  <Button
                    onClick={() => {
                     navigate('/auth?tab=signin');
                      setIsMobileMenuOpen(false);
                    }}
                    variant="ghost"
                    className="w-full text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => {
                     navigate('/auth?tab=signin');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white"
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
