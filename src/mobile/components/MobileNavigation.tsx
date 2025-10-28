import React from 'react';
import { Link } from 'react-router-dom';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { Home, Search, History, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mobileDetection } from '../utils/mobileDetection';

export const MobileNavigation: React.FC = () => {
  const location = useSafeLocation();
  const isStandalone = mobileDetection.isStandalone();

  if (!isStandalone || !location) return null;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Verify', path: '/mobile-verify' },
    { icon: History, label: 'History', path: '/mobile-dashboard' },
    { icon: Settings, label: 'Settings', path: '/mobile-settings' },
    { icon: User, label: 'Account', path: '/auth' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-40 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5 mb-1", isActive && "scale-110")} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
