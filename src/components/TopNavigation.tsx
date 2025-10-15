import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Search, Home, Shield, ChevronDown, Users, Briefcase, ShoppingBag, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
const TopNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    user,
    signOut
  } = useAuth();
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
  const navigationItems = [{
    label: 'Home',
    href: '/',
    icon: Home
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
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-sos/95 backdrop-blur-lg border-b border-sos-orange/10 shadow-lg" : "bg-transparent")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar with FasterCapital Branding */}
        

        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="flex items-center gap-3 group transition-transform hover:scale-105" aria-label="SafeOrStolen Home">
              <div className="relative">
                <img src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png" alt="SafeOrStolen Logo - Stolen goods verification platform" className="h-10 w-10 filter drop-shadow-lg" width="40" height="40" />
                <div className="absolute -inset-2 bg-sos-orange/20 rounded-full blur-xl group-hover:bg-sos-orange/30 transition-colors"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl tracking-tight">SafeOrStolen</span>
                <div className="text-xs text-sos-orange font-medium">Verify Before You Buy</div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation with Dropdown Menus */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map(item => <button key={item.href} onClick={() => navigate(item.href)} className={cn("px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px]", location.pathname === item.href ? "text-sos-orange bg-sos-orange/10" : "text-gray-300 hover:text-white hover:bg-white/5")}>
                {item.label}
              </button>)}

            {/* Users Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10 min-h-[44px] px-5">
                    <Users className="h-4 w-4 mr-2" />
                    For Users
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Buyers & Sellers</h4>
                        <p className="text-xs text-gray-400">Verify items on marketplaces</p>
                      </div>
                      <div className="grid gap-2">
                        {usersMenu.map(item => <NavigationMenuLink key={item.href} asChild>
                            <button onClick={() => navigate(item.href)} className="w-full text-left p-4 rounded-lg hover:bg-gray-800 transition-colors group min-h-[60px]">
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium text-gray-300 group-hover:text-white mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-gray-500 group-hover:text-gray-400">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </NavigationMenuLink>)}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Businesses Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10 min-h-[44px] px-5">
                    <Briefcase className="h-4 w-4 mr-2" />
                    For Businesses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Enterprise Solutions</h4>
                        <p className="text-xs text-gray-400">API access & bulk verification</p>
                      </div>
                      <div className="grid gap-2">
                        {businessesMenu.map(item => <NavigationMenuLink key={item.href} asChild>
                            <button onClick={() => navigate(item.href)} className="w-full text-left p-4 rounded-lg hover:bg-gray-800 transition-colors group min-h-[60px]">
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium text-gray-300 group-hover:text-white mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-gray-500 group-hover:text-gray-400">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </NavigationMenuLink>)}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* How It Works Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10 min-h-[44px] px-5">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    How It Works
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Verification Services</h4>
                        <p className="text-xs text-gray-400">Check phones, cars, electronics & more</p>
                      </div>
                      <div className="grid gap-2">
                        {howItWorksMenu.map(item => <NavigationMenuLink key={item.href} asChild>
                            <button onClick={() => navigate(item.href)} className="w-full text-left p-4 rounded-lg hover:bg-gray-800 transition-colors group min-h-[60px]">
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium text-gray-300 group-hover:text-white mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-gray-500 group-hover:text-gray-400">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </NavigationMenuLink>)}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Resources Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-white/5 data-[state=open]:text-sos-orange data-[state=open]:bg-sos-orange/10 min-h-[44px] px-5">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-gray-900 border-gray-800">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-sos-orange mb-1">Support & Learning</h4>
                        <p className="text-xs text-gray-400">Everything you need to know</p>
                      </div>
                      <div className="grid gap-2">
                        {resourcesMenu.map(item => <NavigationMenuLink key={item.href} asChild>
                            <button onClick={() => navigate(item.href)} className="w-full text-left p-4 rounded-lg hover:bg-gray-800 transition-colors group min-h-[60px]">
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium text-gray-300 group-hover:text-white mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-gray-500 group-hover:text-gray-400">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </button>
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
            {/* Prominent Verify Button - Larger for mobile usability */}
            <Button onClick={() => navigate('/stolen-item-checker')} className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all min-h-[48px] px-8">
              <Search className="h-5 w-5 mr-2" />
              Verify Item
            </Button>
            
            {isAuthenticated ? <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white min-h-[48px]">
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
                  {userMenuItems.map(item => <DropdownMenuItem key={item.href} onClick={() => navigate(item.href)} className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800 min-h-[44px]">
                      {item.icon && <item.icon className="h-4 w-4" />}
                      {item.label}
                    </DropdownMenuItem>)}
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 min-h-[44px]">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> : <div className="flex items-center gap-3">
                <Button variant="ghost" onClick={() => navigate('/auth?tab=signin')} className="text-gray-300 hover:text-white min-h-[48px] px-6">
                  Sign In
                </Button>
                <Button onClick={() => navigate('/auth?tab=signup')} className="bg-sos-orange hover:bg-sos-orange/90 text-white font-medium min-h-[48px] px-8">
                  <User className="h-4 w-4 mr-2" />
                  Get Started
                </Button>
              </div>}
          </div>

          {/* Mobile menu button - Larger touch target */}
          <div className="lg:hidden">
            <Button variant="ghost" size="lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-white/10 min-h-[48px] min-w-[48px]" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Improved spacing and touch targets */}
        {isMobileMenuOpen && <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg rounded-2xl mt-4 p-6 border border-white/10 mb-4">
            {/* Mobile FasterCapital Branding */}
            <div className="mb-6 pb-4 border-b border-white/10">
              <FasterCapitalBranding />
            </div>

            <div className="flex flex-col space-y-2">
              {navigationItems.map(item => <button key={item.href} onClick={() => {
            navigate(item.href);
            setIsMobileMenuOpen(false);
          }} className={cn("flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all min-h-[56px]", location.pathname === item.href ? "text-sos-orange bg-sos-orange/10" : "text-gray-300 hover:text-white hover:bg-white/5")}>
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span className="font-medium">{item.label}</span>
                </button>)}
              
              {/* Users Menu in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-gray-400 text-sm font-semibold mb-3 px-4">For Users</p>
                {usersMenu.map(item => <button key={item.href} onClick={() => {
              navigate(item.href);
              setIsMobileMenuOpen(false);
            }} className="w-full text-left px-5 py-4 rounded-xl hover:bg-white/5 transition-all min-h-[56px]">
                    <div className="text-sm font-medium text-gray-300 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </button>)}
              </div>

              {/* Businesses Menu in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-gray-400 text-sm font-semibold mb-3 px-4">For Businesses</p>
                {businessesMenu.map(item => <button key={item.href} onClick={() => {
              navigate(item.href);
              setIsMobileMenuOpen(false);
            }} className="w-full text-left px-5 py-4 rounded-xl hover:bg-white/5 transition-all min-h-[56px]">
                    <div className="text-sm font-medium text-gray-300 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </button>)}
              </div>

              {/* How It Works Menu in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-gray-400 text-sm font-semibold mb-3 px-4">How It Works</p>
                {howItWorksMenu.map(item => <button key={item.href} onClick={() => {
              navigate(item.href);
              setIsMobileMenuOpen(false);
            }} className="w-full text-left px-5 py-4 rounded-xl hover:bg-white/5 transition-all min-h-[56px]">
                    <div className="text-sm font-medium text-gray-300 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </button>)}
              </div>
              
              {/* Resources Menu in Mobile */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-gray-400 text-sm font-semibold mb-3 px-4">Resources</p>
                {resourcesMenu.map(item => <button key={item.href} onClick={() => {
              navigate(item.href);
              setIsMobileMenuOpen(false);
            }} className="w-full text-left px-5 py-4 rounded-xl hover:bg-white/5 transition-all min-h-[56px]">
                    <div className="text-sm font-medium text-gray-300 hover:text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </button>)}
              </div>
              
              {isAuthenticated ? <>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <p className="text-gray-400 text-sm font-semibold mb-3 px-4">Account</p>
                    {userMenuItems.map(item => <button key={item.href} onClick={() => {
                navigate(item.href);
                setIsMobileMenuOpen(false);
              }} className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/5 px-5 py-4 rounded-xl w-full text-left transition-all min-h-[56px]">
                        {item.icon && <item.icon className="h-5 w-5" />}
                        {item.label}
                      </button>)}
                    <button onClick={() => {
                handleSignOut();
                setIsMobileMenuOpen(false);
              }} className="flex items-center gap-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-5 py-4 rounded-xl w-full text-left transition-all mt-2 min-h-[56px]">
                      <LogOut className="h-5 w-5" />
                      Sign Out
                    </button>
                  </div>
                </> : <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
                  <Button onClick={() => {
              navigate('/auth?tab=signin');
              setIsMobileMenuOpen(false);
            }} variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-white/5 min-h-[56px] text-base">
                    Sign In
                  </Button>
                  <Button onClick={() => {
              navigate('/auth?tab=signup');
              setIsMobileMenuOpen(false);
            }} className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white min-h-[56px] text-base">
                    Get Started
                  </Button>
                </div>}
            </div>
          </div>}
      </div>
    </nav>;
};
export default TopNavigation;