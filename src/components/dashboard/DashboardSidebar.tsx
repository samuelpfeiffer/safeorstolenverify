import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { History, Receipt, CreditCard, Settings, Share, Search, Clock, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const DashboardSidebar = ({ activeTab, onTabChange }: DashboardSidebarProps) => {
  const menuItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboard,
      hasShare: false,
    },
    {
      id: 'verification',
      label: 'New Verification',
      icon: Search,
      hasShare: false,
    },
    {
      id: 'activity',
      label: 'Activity Timeline',
      icon: Clock,
      hasShare: false,
      isLink: true,
      linkTo: '/activity',
    },
    {
      id: 'search-history',
      label: 'Search History',
      icon: History,
      hasShare: true,
    },
    {
      id: 'purchase-history',
      label: 'Purchase History',
      icon: CreditCard,
      hasShare: true,
    },
    {
      id: 'receipts',
      label: 'Receipts',
      icon: Receipt,
      hasShare: true,
    },
    {
      id: 'settings',
      label: 'Account Settings',
      icon: Settings,
      hasShare: false,
    },
  ];

  const handleEmailShare = (type: string) => {
    const subject = `Safe or Stolen - ${type} Export`;
    const body = `Please find my ${type.toLowerCase()} from Safe or Stolen verification service.`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <Card className="p-4 h-fit">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <div key={item.id} className="space-y-1">
              {item.isLink ? (
                <Button
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 border ${
                    isActive 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Link to={item.linkTo || '#'}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              ) : (
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 border ${
                    isActive 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => onTabChange(item.id)}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              )}
              
              {item.hasShare && isActive && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 ml-7"
                  onClick={() => handleEmailShare(item.label)}
                >
                  <Share className="h-3 w-3" />
                  Email Share
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};