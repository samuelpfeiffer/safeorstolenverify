import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Search, Home, Shield, ChevronDown, Users, Briefcase, ShoppingBag, HelpCircle, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
import sosLogo from '@/assets/sos-logo.png';
const TopNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string>('');
  const {
    user,
    signOut
  } = useAuth();
  const isAuthenticated = !!user;
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu and reset dropdown state on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMenu(''); // Reset dropdown menu state
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and body scroll lock for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  const navigationItems = [{
    label: 'Home',
    href: '/',
    icon: Home
  }, {
    label: 'Mobile App',
    href: '/mobile-app',
    icon: Smartphone
  }, {
    label: 'Pricing',
    href: '/pricing'
  }];

  // Users Menu (For Consumers)
  const usersMenu = [{
    label: 'For Buyers',
    href: '/for-consumers',
    description: 'Verify items before you buy on marketplaces',
    icon: ShoppingBag
  }, {
    label: 'For Sellers',
    href: '/seller-guide',
    description: 'Prove legitimacy & build trust with buyers',
    icon: Users
  }, {
    label: 'Buyer Guide',
    href: '/buyer-guide',
    description: 'Complete guide to buying secondhand safely',
    icon: Shield
  }, {
    label: 'Download App',
    href: '/download-app',
    description: 'Get our mobile app for iOS & Android',
    icon: Home
  }];

  // Businesses Menu
  const businessesMenu = [{
    label: 'For Businesses',
    href: '/for-brands',
    description: 'API access, bulk verification, enterprise solutions',
    icon: Briefcase
  }, {
    label: 'Pawn Shops',
    href: '/pawn-shops',
    description: 'Verify inventory & comply with regulations',
    icon: Shield
  }, {
    label: 'Resellers',
    href: '/resellers',
    description: 'Check items in bulk for marketplace sellers',
    icon: ShoppingBag
  }, {
    label: 'API Documentation',
    href: '/api-docs',
    description: 'Developer resources & integration guides',
    icon: Home
  }];

  // How It Works Menu
  const howItWorksMenu = [{
    label: 'How It Works',
    href: '/how-it-works',
    description: 'Complete verification process explained',
    icon: HelpCircle
  }, {
    label: 'IMEI Check',
    href: '/imei-check',
    description: 'Verify phone IMEI numbers',
    icon: Shield
  }, {
    label: 'VIN Verification',
    href: '/vin-verification',
    description: 'Check vehicle VIN for theft records',
    icon: Shield
  }, {
    label: 'Serial Number Check',
    href: '/serial-number-checker',
    description: 'Verify electronics & equipment',
    icon: Shield
  }, {
    label: 'Firearms Check',
    href: '/firearms-check',
    description: 'Verify gun serial numbers',
    icon: Shield
  }];

  // Resources & Support Menu
  const resourcesMenu = [{
    label: 'Blog & Guides',
    href: '/blog',
    description: 'Expert tips on fraud prevention',
    icon: Home
  }, {
    label: 'Case Studies',
    href: '/case-studies',
    description: 'Real stories from our users',
    icon: Users
  }, {
    label: 'FAQ',
    href: '/faq',
    description: 'Frequently asked questions',
    icon: HelpCircle
  }, {
    label: 'Contact Support',
    href: '/contact',
    description: '24/7 customer support',
    icon: Shield
  }, {
    label: 'About Us',
    href: '/about',
    description: 'Our mission and team',
    icon: Home
  }, {
    label: 'Our Mission',
    href: '/our-mission',
    description: 'Reducing crime globally',
    icon: Shield
  }, {
    label: 'Press & News',
    href: '/press',
    description: 'Latest announcements and media',
    icon: Home
  }];
  const userMenuItems = isAuthenticated ? [{
    label: 'Search History',
    href: '/search-history',
    icon: Search
  }, {
    label: 'Profile',
    href: '/dashboard'
  }, {
    label: 'Security Settings',
    href: '/security',
    icon: Shield
  }] : [];
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/98 backdrop-blur-lg border-b border-border shadow-elegant" : "bg-background/95 backdrop-blur-md")}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Bar with FasterCapital Branding */}
        

        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-105" aria-label="SafeOrStolen Home">
              <div className="relative">
                <img 
                  src={sosLogo}
                  alt="SafeOrStolen - Verify Before You Buy or Sell" 
                  className="h-12 w-auto filter drop-shadow-lg object-contain" 
                  width="auto" 
                  height="48"
                />
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with Dropdown Menus */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map(item => <Link key={item.href} to={item.href} className={cn("px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 min-h-[44px]", location.pathname === item.href ? "text-primary bg-primary/10 border border-primary/20" : "text-foreground hover:text-primary hover:bg-muted/50")}>
                {item.label}
              </Link>)}
            
            {/* Blog Link - Prominent */}
            <Link 
              to="/blog" 
              className={cn("px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px]", 
                location.pathname === '/blog' ? "text-sos-orange bg-sos-orange/10" : "text-foreground/90 hover:text-white hover:bg-white/5")}
            >
              Blog
            </Link>

            {/* Single NavigationMenu wrapper for all dropdowns */}
            <NavigationMenu value={openMenu} onValueChange={setOpenMenu}>
              <NavigationMenuList>
                {/* Users Dropdown */}
                <NavigationMenuItem value="users">
                  <NavigationMenuTrigger className="bg-transparent text-foreground/90 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10 min-h-[44px] px-5">
                    <Users className="h-4 w-4 mr-2" />
                    For Users
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Buyers & Sellers</h4>
                        <p className="text-xs text-foreground/80">Verify items on marketplaces</p>
                      </div>
                      <div className="grid gap-2">
                        {usersMenu.map(item => <NavigationMenuLink key={item.href} asChild>
                            <Link to={item.href} className="block w-full text-left p-4 rounded-lg hover:bg-gray-800 transition-colors group min-h-[60px]">
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium text-foreground/90 group-hover:text-white mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground group-hover:text-foreground/80">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>)}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Businesses Dropdown */}
                <NavigationMenuItem value="businesses">
                  <NavigationMenuTrigger className="bg-transparent text-foreground/90 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10 min-h-[44px] px-5">
                    <Briefcase className="h-4 w-4 mr-2" />
                    For Businesses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Enterprise Solutions</h4>
                        <p className="text-xs text-foreground/80">API access & bulk verification</p>
                      </div>
                      <div className="grid gap-2">
                        {businessesMenu.map(item => <NavigationMenuLink key={item.href} asChild>
                            <Link to={item.href} className="block w-full text-left p-4 rounded-lg hover:bg-gray-800 transition-colors group min-h-[60px]">
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium text-foreground/90 group-hover:text-white mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground group-hover:text-foreground/80">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>)}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* How It Works Dropdown */}
                <NavigationMenuItem value="howitworks">
                  <NavigationMenuTrigger className="bg-transparent text-foreground/90 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10 min-h-[44px] px-5">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    How It Works
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Verification Services</h4>
                        <p className="text-xs text-foreground/80">Check phones, cars, electronics & more</p>
                      </div>
                      <div className="grid gap-2">
                        {howItWorksMenu.map(item => <NavigationMenuLink key={item.href} asChild>
                            <Link to={item.href} className="block w-full text-left p-4 rounded-lg hover:bg-gray-800 transition-colors group min-h-[60px]">
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium text-foreground/90 group-hover:text-white mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground group-hover:text-foreground/80">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>)}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem value="resources">
                  <NavigationMenuTrigger className="bg-transparent text-foreground/90 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10 min-h-[44px] px-5">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Support & Learning</h4>
                        <p className="text-xs text-foreground/80">Everything you need to know</p>
                      </div>
                      <div className="grid gap-2">
                        {resourcesMenu.map(item => <NavigationMenuLink key={item.href} asChild>
                            <Link to={item.href} className="block w-full text-left p-4 rounded-lg hover:bg-gray-800 transition-colors group min-h-[60px]">
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium text-foreground/90 group-hover:text-white mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground group-hover:text-foreground/80">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>)}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* User Menu & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Prominent Verify Button - Trust-focused */}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-trust hover:shadow-lg transition-all min-h-[48px] px-8 border border-primary/20">
              <Link to="/stolen-item-checker">
                <Shield className="h-5 w-5 mr-2" />
                Verify Now
              </Link>
            </Button>
            
            {isAuthenticated ? <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-foreground/90 hover:text-white min-h-[48px]">
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
                  {userMenuItems.map(item => <DropdownMenuItem key={item.href} asChild>
                      <Link to={item.href} className="flex items-center gap-2 text-foreground/90 hover:text-white hover:bg-gray-800 min-h-[44px] cursor-pointer">
                        {item.icon && <item.icon className="h-4 w-4" />}
                        {item.label}
                      </Link>
                    </DropdownMenuItem>)}
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 min-h-[44px]">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> : <div className="flex items-center gap-3">
                <Button variant="ghost" asChild className="text-foreground/90 hover:text-white min-h-[48px] px-6">
                  <Link to="/auth?tab=signin">Sign In</Link>
                </Button>
                <Button asChild className="bg-sos-orange hover:bg-sos-orange/90 text-white font-medium min-h-[48px] px-8">
                  <Link to="/auth?tab=signup">
                    <User className="h-4 w-4 mr-2" />
                    Get Started
                  </Link>
                </Button>
              </div>}
          </div>

          {/* Mobile menu button - Larger touch target */}
          <div className="lg:hidden">
            <Button variant="ghost" size="lg" onClick={toggleMobileMenu} className="text-white hover:bg-white/10 min-h-[48px] min-w-[48px]" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Improved spacing and touch targets */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg rounded-2xl mt-4 p-6 border border-white/10 mb-4 relative z-50">
            {/* Mobile FasterCapital Branding */}
            <div className="mb-6 pb-4 border-b border-white/10">
              <FasterCapitalBranding />
            </div>

            <div className="flex flex-col space-y-2">
              {navigationItems.map(item => <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={cn("flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all min-h-[56px]", location.pathname === item.href ? "text-sos-orange bg-sos-orange/10" : "text-foreground/90 hover:text-white hover:bg-white/5")}>
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span className="font-medium">{item.label}</span>
                </Link>)}
              
              {/* Users Menu in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-foreground/80 text-sm font-semibold mb-3 px-4">For Users</p>
                {usersMenu.map(item => <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left px-5 py-4 rounded-xl hover:bg-white/5 transition-all min-h-[56px]">
                    <div className="text-sm font-medium text-foreground/90 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  </Link>)}
              </div>

              {/* Businesses Menu in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-foreground/80 text-sm font-semibold mb-3 px-4">For Businesses</p>
                {businessesMenu.map(item => <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left px-5 py-4 rounded-xl hover:bg-white/5 transition-all min-h-[56px]">
                    <div className="text-sm font-medium text-foreground/90 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  </Link>)}
              </div>

              {/* How It Works Menu in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-foreground/80 text-sm font-semibold mb-3 px-4">How It Works</p>
                {howItWorksMenu.map(item => <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left px-5 py-4 rounded-xl hover:bg-white/5 transition-all min-h-[56px]">
                    <div className="text-sm font-medium text-foreground/90 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  </Link>)}
              </div>
              
              {/* Resources Menu in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-foreground/80 text-sm font-semibold mb-3 px-4">Resources</p>
                {resourcesMenu.map(item => <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left px-5 py-4 rounded-xl hover:bg-white/5 transition-all min-h-[56px]">
                    <div className="text-sm font-medium text-foreground/90 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  </Link>)}
              </div>
              
              {isAuthenticated ? <>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <p className="text-foreground/80 text-sm font-semibold mb-3 px-4">Account</p>
                    {userMenuItems.map(item => <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-foreground/90 hover:text-white hover:bg-white/5 px-5 py-4 rounded-xl w-full text-left transition-all min-h-[56px]">
                        {item.icon && <item.icon className="h-5 w-5" />}
                        {item.label}
                      </Link>)}
                    <button onClick={() => {
                handleSignOut();
                setIsMobileMenuOpen(false);
              }} className="flex items-center gap-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-5 py-4 rounded-xl w-full text-left transition-all mt-2 min-h-[56px]">
                      <LogOut className="h-5 w-5" />
                      Sign Out
                    </button>
                  </div>
                </> : <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
                  <Button asChild variant="ghost" className="w-full text-foreground/90 hover:text-white hover:bg-white/5 min-h-[56px] text-base">
                    <Link to="/auth?tab=signin" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white min-h-[56px] text-base">
                    <Link to="/auth?tab=signup" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>}
            </div>
          </div>
          </>
        )}
      </div>
    </nav>;
};
export default TopNavigation;