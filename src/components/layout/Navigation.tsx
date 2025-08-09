import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Search, Shield, User, Settings, LogOut, Crown, BarChart3 } from 'lucide-react';

/**
 * Main Application Navigation
 * Responsive navigation with user authentication state
 */
export const Navigation: React.FC = () => {
  const { isAuthenticated, user, signOut } = useUnifiedAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = user?.email === 'admin@safeorstolen.com' || 
                  user?.email?.endsWith('@safeorstolen.com') ||
                  user?.email === 'samandhisbigideas@gmail.com';

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Verify Item', href: '/verify', icon: Search, protected: true },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3, protected: true },
    { name: 'Pricing', href: '/pricing', icon: null },
    { name: 'About', href: '/about', icon: null },
    { name: 'Contact', href: '/contact', icon: null },
  ];

  const adminNavigation = [
    { name: 'Admin Dashboard', href: '/admin', icon: Shield },
    { name: 'User Management', href: '/admin/users', icon: User },
    { name: 'Security Center', href: '/admin/security', icon: Shield },
    { name: 'System Settings', href: '/admin/settings', icon: Settings },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
      to={href}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActiveRoute(href)
          ? 'bg-sos-orange text-white'
          : 'text-gray-300 hover:text-white hover:bg-sos-orange/20'
      }`}
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
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        isActiveRoute(href)
          ? 'bg-sos-orange text-white'
          : 'text-gray-300 hover:text-white hover:bg-sos-orange/20'
      }`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
    </Link>
  );

  return (
    <nav className="bg-sos-dark/95 backdrop-blur-sm border-b border-sos-orange/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png" 
                alt="Safe or Stolen" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Safe or Stolen</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-white">
                <span className="opacity-80 mr-1">Accelerated by</span>
                <span className="bg-gradient-to-r from-fc-blue to-fc-red bg-clip-text text-transparent font-semibold">FasterCapital</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              if (item.protected && !isAuthenticated) return null;
              return (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
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
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.user_metadata?.avatar_url} />
                        <AvatarFallback className="bg-sos-orange text-white">
                          {user?.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-sos-dark border-sos-orange/20" align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium text-white">{user?.user_metadata?.full_name || 'User'}</p>
                        <p className="w-[200px] truncate text-sm text-gray-400">{user?.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator className="bg-sos-orange/20" />
                    
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="text-white hover:bg-sos-orange/20">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/subscription" className="text-white hover:bg-sos-orange/20">
                        <Crown className="mr-2 h-4 w-4" />
                        Subscription
                      </Link>
                    </DropdownMenuItem>

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
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button asChild className="bg-sos-orange hover:bg-sos-orange/90">
                  <Link to="/auth?tab=register">Get Started</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden" size="icon">
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
