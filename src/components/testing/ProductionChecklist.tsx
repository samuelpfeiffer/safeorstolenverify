
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ExternalLink, CheckCircle, AlertTriangle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: 'critical' | 'important' | 'recommended';
  completed: boolean;
  link?: string;
}

const initialChecklist: ChecklistItem[] = [
  // Critical Items
  {
    id: 'domain',
    title: 'Custom Domain Setup',
    description: 'Configure custom domain in Lovable project settings',
    category: 'critical',
    completed: false,
    link: 'https://docs.lovable.dev/user-guides/custom-domains'
  },
  {
    id: 'stripe-live',
    title: 'Stripe Live Mode',
    description: 'Switch from test mode to live mode in Stripe dashboard',
    category: 'critical',
    completed: false,
    link: 'https://dashboard.stripe.com'
  },
  {
    id: 'supabase-prod',
    title: 'Supabase Production Configuration',
    description: 'Verify production database and authentication settings',
    category: 'critical',
    completed: false
  },
  {
    id: 'auth-urls',
    title: 'Authentication URLs',
    description: 'Update Site URL and Redirect URLs in Supabase Auth settings',
    category: 'critical',
    completed: false
  },
  {
    id: 'ssl-certificate',
    title: 'SSL Certificate',
    description: 'Ensure HTTPS is properly configured and working',
    category: 'critical',
    completed: false
  },

  // Important Items
  {
    id: 'analytics',
    title: 'Analytics Setup',
    description: 'Configure Google Analytics or preferred analytics service',
    category: 'important',
    completed: false
  },
  {
    id: 'error-monitoring',
    title: 'Error Monitoring',
    description: 'Set up error tracking (Sentry, LogRocket, etc.)',
    category: 'important',
    completed: false
  },
  {
    id: 'backup-strategy',
    title: 'Backup Strategy',
    description: 'Implement database backup and recovery procedures',
    category: 'important',
    completed: false
  },
  {
    id: 'performance-monitoring',
    title: 'Performance Monitoring',
    description: 'Set up performance monitoring and alerting',
    category: 'important',
    completed: false
  },
  {
    id: 'legal-pages',
    title: 'Legal Pages Review',
    description: 'Review and update Terms of Service and Privacy Policy',
    category: 'important',
    completed: false
  },

  // Recommended Items
  {
    id: 'social-media',
    title: 'Social Media Accounts',
    description: 'Create and configure social media presence',
    category: 'recommended',
    completed: false
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Submit sitemap to search engines and verify SEO setup',
    category: 'recommended',
    completed: false
  },
  {
    id: 'user-documentation',
    title: 'User Documentation',
    description: 'Create help documentation and FAQ updates',
    category: 'recommended',
    completed: false
  },
  {
    id: 'launch-announcement',
    title: 'Launch Announcement',
    description: 'Prepare launch announcement and marketing materials',
    category: 'recommended',
    completed: false
  },
  {
    id: 'feedback-system',
    title: 'Feedback System',
    description: 'Implement user feedback collection mechanism',
    category: 'recommended',
    completed: false
  }
];

export const ProductionChecklist = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);

  const toggleItem = (id: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const getStats = () => {
    const total = checklist.length;
    const completed = checklist.filter(item => item.completed).length;
    const critical = checklist.filter(item => item.category === 'critical');
    const criticalCompleted = critical.filter(item => item.completed).length;
    
    return {
      total,
      completed,
      percentage: Math.round((completed / total) * 100),
      critical: critical.length,
      criticalCompleted,
      criticalPercentage: Math.round((criticalCompleted / critical.length) * 100)
    };
  };

  const getCategoryItems = (category: ChecklistItem['category']) => {
    return checklist.filter(item => item.category === category);
  };

  const stats = getStats();
  const isReadyForLaunch = stats.criticalCompleted === stats.critical;

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <Card className="bg-card border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Production Launch Checklist
          </CardTitle>
          <CardDescription>
            Complete these items before launching to production
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{stats.completed}/{stats.total}</div>
              <div className="text-sm text-gray-400">Total Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{stats.criticalCompleted}/{stats.critical}</div>
              <div className="text-sm text-gray-400">Critical Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sos-orange">{stats.percentage}%</div>
              <div className="text-sm text-gray-400">Complete</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{stats.percentage}%</span>
            </div>
            <Progress value={stats.percentage} className="h-3" />
          </div>

          {isReadyForLaunch ? (
            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <CheckCircle className="h-5 w-5" />
                All critical items completed! Ready for launch.
              </div>
            </div>
          ) : (
            <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
              <div className="flex items-center gap-2 text-red-400 font-medium">
                <AlertTriangle className="h-5 w-5" />
                {stats.critical - stats.criticalCompleted} critical items remaining
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Critical Items */}
      <Card className="bg-card border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Critical Items
            <Badge variant="destructive">{stats.critical - stats.criticalCompleted} remaining</Badge>
          </CardTitle>
          <CardDescription>
            These items must be completed before launch
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {getCategoryItems('critical').map((item) => (
              <div 
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700"
              >
                <Checkbox
                  checked={item.completed}
                  onCheckedChange={() => toggleItem(item.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
                {item.link && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-sos-orange hover:text-sos-orange/80"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Items */}
      <Card className="bg-card border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-yellow-500" />
            Important Items
          </CardTitle>
          <CardDescription>
            Highly recommended for a successful launch
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {getCategoryItems('important').map((item) => (
              <div 
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700"
              >
                <Checkbox
                  checked={item.completed}
                  onCheckedChange={() => toggleItem(item.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
                {item.link && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-sos-orange hover:text-sos-orange/80"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Items */}
      <Card className="bg-card border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            Recommended Items
          </CardTitle>
          <CardDescription>
            Optional but beneficial for long-term success
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {getCategoryItems('recommended').map((item) => (
              <div 
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700"
              >
                <Checkbox
                  checked={item.completed}
                  onCheckedChange={() => toggleItem(item.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
                {item.link && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-sos-orange hover:text-sos-orange/80"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
