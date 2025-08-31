import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, User, Crown, Menu } from 'lucide-react';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { MobileMenu } from '@/components/navigation/MobileMenu';
export const SOSHeader: React.FC = () => {
  const { user, signOut } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { remainingSearches, isSubscribed, isLoading } = useSearchLimits();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [location.pathname]);
  const navigation = [
    { title: 'Home', href: '/' },
    { title: 'How It Works', href: '/how-it-works' },
    { title: 'For Businesses', href: '/for-brands' },
    { title: 'Subscriptions', href: '/subscriptions' },
    { title: 'Blog', href: '/blog' },
    { title: 'FasterCapital', href: '/fastercapital/raise-capital' },
  ];

  const isActive = (href: string) => (href === '/' ? location.pathname === '/' : location.pathname.startsWith(href));

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    const parts = name.split(' ');
    if (parts.length > 1) return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    return name[0]?.toUpperCase() || 'U';
  };

  return (
    <header className="bg-sos-dark/95 backdrop-blur-sm border-b border-sos-orange/20 sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png"
            alt="Safe or Stolen logo"
            className="w-8 h-8 rounded-md"
          />
          <div className="hidden sm:block">
            <div className="font-bold text-lg text-white leading-tight">safeorstolen.com</div>
            <p className="text-[10px] text-gray-400 -mt-0.5">Verify Before You Buy</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={`relative text-sm font-medium transition-all duration-200 hover:scale-105 ${
                isActive(item.href) ? 'text-sos-orange' : 'text-gray-300 hover:text-sos-orange'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.title}
              {isActive(item.href) && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-sos-orange rounded" />
              )}
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={(user as any)?.avatar} />
                    <AvatarFallback className="bg-sos-orange text-white text-xs">
                      {getInitials((user as any)?.fullName || (user as any)?.email)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:flex flex-col items-start">
                    <span className="text-sm text-white font-medium leading-none truncate max-w-[140px]">
                      {(user as any)?.fullName || (user as any)?.email?.split('@')[0] || 'User'}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge variant="outline" className="text-xs border-sos-orange/30 text-gray-300">Plan</Badge>
                    </div>
                  </div>
                  {/* Credits pill */}
                  <Badge
                    variant="outline"
                    className="hidden md:inline-flex rounded-full border-sos-orange/30 bg-sos-orange/10 text-sos-orange text-[10px] px-2 py-0.5"
                  >
                    {isLoading ? 'credits' : (isSubscribed ? 'unlimited' : `${remainingSearches} credits`)}
                  </Badge>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-sos-dark border-sos-orange/20" align="end" sideOffset={8}>
                <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
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
                <DropdownMenuSeparator className="bg-sos-orange/20" />
                <DropdownMenuItem onClick={signOut} className="text-white hover:bg-sos-orange/20 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" asChild className="text-gray-300 hover:text-white">
                <Link to="/auth?tab=signin">Sign In</Link>
              </Button>
              <Button asChild className="bg-sos-orange hover:bg-sos-orange/90 text-white">
                <Link to="/auth?tab=signup">Get Started</Link>
              </Button>
            </div>
          )}

          {/* Mobile menu trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* Mobile menu panel */}
      <MobileMenu
        isOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
        currentPath={location.pathname}
      />
    </header>
  );
};
