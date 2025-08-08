
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Search, Shield, User, Settings, LogOut, Crown, BarChart3, Home, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

/**
 * Main Application Navigation
 * Unified navigation with authentication state and enhanced features
 */
export const Navigation: React.FC = () => {
  const { user, signOut } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isAdmin = user?.email === 'admin@safeorstolen.com' || 
                  user?.email?.endsWith('@safeorstolen.com') ||
                  user?.email === 'samandhisbigideas@gmail.com';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Real-time Verify', href: '/real-time-verification', icon: Search },
    { name: 'Verify Item', href: '/verify', icon: Search, protected: true },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3, protected: true },
    { name: 'About Problem', href: '/about-problem', icon: null },
    { name: 'How It Works', href: '/how-it-works', icon: null },
    { name: 'Our Story', href: '/our-story', icon: null },
    { name: 'For Business', href: '/for-brands', icon: null },
    { name: 'Pricing', href: '/pricing', icon: null },
    { name: 'Contact', href: '/contact', icon: null },
  ];

  const adminNavigation = [
    { name: 'Admin Dashboard', href: '/admin', icon: Shield },
    { name: 'User Management', href: '/admin/users', icon: User },
    { name: 'Security Center', href: '/admin/security', icon: Shield },
    { name: 'System Settings', href: '/admin/settings', icon: Settings },
  ];

  // FasterCapital Program Requirements
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
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Security Settings', href: '/security', icon: Shield },
    { label: 'Subscription', href: '/subscription', icon: Crown },
  ] : [];

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActiveRoute(href)
          ? 'bg-sos-orange text-white'
          : 'text-gray-300 hover:text-white hover:bg-sos-orange/20'
      )}
    >
      {children}
    </Link>
  );

  const MobileNavLink = ({ href, children, icon: Icon, onClick }: { 
    href: string; 
    children: React.ReactNode; 
    icon?: any;
    onClick?: () => void;
  }) => (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
        isActiveRoute(href)
          ? 'bg-sos-orange text-white'
          : 'text-gray-300 hover:text-white hover:bg-sos-orange/20'
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
    </Link>
  );

  return (
    <nav className={cn(
      "bg-sos-dark/95 backdrop-blur-sm border-b border-sos-orange/20 sticky top-0 z-50 transition-all duration-300",
      isScrolled && "shadow-lg"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png" 
                  alt="Safe or Stolen" 
                  className="h-8 w-8 filter drop-shadow-lg"
                />
                <div className="absolute -inset-2 bg-sos-orange/20 rounded-full blur-xl group-hover:bg-sos-orange/30 transition-colors"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white">Safe or Stolen</span>
                <Badge variant="outline" className="border-sos-lime text-sos-lime text-xs ml-2">
                  FasterCapital
                </Badge>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              if (item.protected && !isAuthenticated) return null;
              return (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              );
            })}
            
            {/* FasterCapital Requirements Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-sos-orange/20 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/20">
                    FasterCapital
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-sos-dark border-sos-orange/20">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Program Requirements</h4>
                        <p className="text-xs text-gray-400">Choose the right program for your startup</p>
                      </div>
                      <div className="grid gap-2">
                        {fasterCapitalRequirements.map((item) => (
                          <NavigationMenuLink key={item.href} asChild>
                            <Link
                              to={item.href}
                              className="w-full text-left p-3 rounded-lg hover:bg-sos-orange/10 transition-colors group"
                            >
                              <div className="text-sm font-medium text-gray-300 group-hover:text-white mb-1">
                                {item.label}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400">
                                {item.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="hidden lg:flex items-center space-x-4">
                {/* Admin Badge */}
                {isAdmin && (
                  <Badge className="bg-sos-orange text-white">
                    <Crown className="h-3 w-3 mr-1" />
                    Admin
                  </Badge>
                )}

                {/* User Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.avatar} />
                        <AvatarFallback className="bg-sos-orange text-white">
                          {user?.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {user?.email?.split('@')[0]}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-sos-dark border-sos-orange/20 z-50" align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium text-white">{user?.fullName || 'User'}</p>
                        <p className="w-[200px] truncate text-sm text-gray-400">{user?.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator className="bg-sos-orange/20" />
                    
                    {userMenuItems.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link to={item.href} className="text-white hover:bg-sos-orange/20">
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}

                    {isAdmin && (
                      <>
                        <DropdownMenuSeparator className="bg-sos-orange/20" />
                        {adminNavigation.map((item) => (
                          <DropdownMenuItem key={item.name} asChild>
                            <Link to={item.href} className="text-white hover:bg-sos-orange/20">
                              <item.icon className="mr-2 h-4 w-4" />
                              {item.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </>
                    )}

                    <DropdownMenuSeparator className="bg-sos-orange/20" />
                    <DropdownMenuItem onClick={signOut} className="text-white hover:bg-sos-orange/20">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="hidden lg:flex items-center space-x-3">
                <Button variant="ghost" asChild className="text-gray-300 hover:text-white">
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button asChild className="bg-sos-orange hover:bg-sos-orange/90 text-white font-medium">
                  <Link to="/auth?tab=register">
                    <User className="h-4 w-4 mr-2" />
                    Get Started
                  </Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-sos-dark border-sos-orange/20 text-white">
                <div className="mt-6 space-y-2">
                  {navigation.map((item) => {
                    if (item.protected && !isAuthenticated) return null;
                    return (
                      <MobileNavLink 
                        key={item.name} 
                        href={item.href} 
                        icon={item.icon}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </MobileNavLink>
                    );
                  })}

                  {/* FasterCapital Requirements in Mobile */}
                  <div className="border-t border-sos-orange/20 pt-4 mt-4">
                    <p className="text-gray-400 text-sm mb-3 px-4">FasterCapital Programs</p>
                    {fasterCapitalRequirements.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-sos-orange/10 transition-all block"
                      >
                        <div className="text-sm font-medium text-gray-300 hover:text-white mb-1">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>

                  {isAuthenticated && isAdmin && (
                    <>
                      <div className="border-t border-sos-orange/20 my-4"></div>
                      <div className="text-sm font-medium text-gray-400 px-4 py-2">Admin</div>
                      {adminNavigation.map((item) => (
                        <MobileNavLink 
                          key={item.name} 
                          href={item.href} 
                          icon={item.icon}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </MobileNavLink>
                      ))}
                    </>
                  )}

                  {!isAuthenticated && (
                    <>
                      <div className="border-t border-sos-orange/20 my-4"></div>
                      <div className="space-y-2 px-4">
                        <Button variant="outline" asChild className="w-full">
                          <Link to="/auth" onClick={() => setIsOpen(false)}>Sign In</Link>
                        </Button>
                        <Button asChild className="w-full bg-sos-orange hover:bg-sos-orange/90">
                          <Link to="/auth?tab=register" onClick={() => setIsOpen(false)}>Get Started</Link>
                        </Button>
                      </div>
                    </>
                  )}

                  {isAuthenticated && (
                    <>
                      <div className="border-t border-sos-orange/20 pt-4 mt-4">
                        <p className="text-gray-400 text-sm mb-3 px-4">Account</p>
                        {userMenuItems.map((item) => (
                          <MobileNavLink
                            key={item.href}
                            href={item.href}
                            icon={item.icon}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </MobileNavLink>
                        ))}
                        <button
                          onClick={() => {
                            signOut();
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-4 py-3 rounded-lg w-full text-left transition-all mt-2"
                        >
                          <LogOut className="h-5 w-5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
