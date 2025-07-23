
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Search, Shield, User, Settings, LogOut, Crown, Home, ChevronDown, Building2, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Simplified Main Application Navigation
 */
export const Navigation: React.FC = () => {
  const { user, signOut } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const isAdmin = user?.email === 'admin@safeorstolen.com' || 
                  user?.email?.endsWith('@safeorstolen.com') ||
                  user?.email === 'samuel@safeorstolen.com';

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
    { name: 'Verify', href: '/real-time-verification', icon: Search },  
    { name: 'About Problem', href: '/about-problem', icon: Shield },
    { name: 'How It Works', href: '/how-it-works', icon: null },
    { name: 'Our Story', href: '/our-story', icon: null },
    { name: 'For Business', href: '/for-brands', icon: Building2 },
    { name: 'Contact', href: '/contact', icon: null },
  ];

  const adminNavigation = [
    { name: 'Admin Dashboard', href: '/admin', icon: Shield },
    { name: 'User Management', href: '/admin/users', icon: User },
    { name: 'Security Center', href: '/admin/security', icon: Shield },
    { name: 'System Settings', href: '/admin/settings', icon: Settings },
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
      "bg-sos/95 backdrop-blur-sm border-b border-sos-orange/20 sticky top-0 z-50 transition-all duration-300",
      isScrolled && "shadow-lg"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex justify-between transition-all duration-300",
          isMobile ? "h-14" : "h-16"
        )}>
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" 
                  alt="Safe or Stolen"
                  className={cn(
                    "filter drop-shadow-lg",
                    isMobile ? "h-6 w-6" : "h-8 w-8"
                  )}
                />
                <div className="absolute -inset-2 bg-sos-orange/20 rounded-full blur-xl group-hover:bg-sos-orange/30 transition-colors"></div>
              </div>
              <div className={cn(isMobile ? "hidden" : "hidden sm:block")}>
                <span className={cn(
                  "font-bold text-white",
                  isMobile ? "text-lg" : "text-xl"
                )}>Safe or Stolen</span>
                <div className="text-xs text-sos-orange font-medium">Verify Before You Buy</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-4">
                {/* User Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
                      <Avatar className={cn(isMobile ? "h-6 w-6" : "h-8 w-8")}>
                        <AvatarImage src={user?.avatar} />
                        <AvatarFallback className="bg-sos-orange text-white">
                          {user?.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className={cn(
                        "font-medium",
                        isMobile ? "text-xs" : "text-sm"
                      )}>
                        {user?.email?.split('@')[0]}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-sos border-sos-orange/20 z-50" align="end">
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
              <div className="hidden md:flex items-center space-x-3">
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
                <Button variant="ghost" className="md:hidden" size={isMobile ? "sm" : "icon"}>
                  <Menu className={cn(isMobile ? "h-5 w-5" : "h-6 w-6")} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-sos border-sos-orange/20 text-white w-[300px] sm:w-[350px]">
                <div className="mt-6 space-y-2">
                  {navigation.map((item) => (
                    <MobileNavLink 
                      key={item.name} 
                      href={item.href} 
                      icon={item.icon}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </MobileNavLink>
                  ))}

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
