import { useEffect, useState } from 'react';
import { checkStripeHealth, type StripeHealthResult } from '@/utils/monitoring/stripeHealthCheck';
import { checkAuthHealth, type AuthHealthResult } from '@/utils/monitoring/authHealthCheck';
import { toast } from 'sonner';

/**
 * System Health Monitor - Real-time validation of critical systems
 * 
 * Monitors Stripe and Authentication health in development mode
 * Alerts developers to issues before they affect users
 */
export const SystemHealthMonitor = () => {
  const [stripeHealth, setStripeHealth] = useState<StripeHealthResult | null>(null);
  const [authHealth, setAuthHealth] = useState<AuthHealthResult | null>(null);
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    if (!isDevelopment) return;

    const runHealthChecks = async () => {
      // Check Stripe health
      const stripeResult = await checkStripeHealth();
      setStripeHealth(stripeResult);
      
      // Check Auth health
      const authResult = await checkAuthHealth();
      setAuthHealth(authResult);

      // Show critical alerts
      const criticalIssues = [
        ...stripeResult.issues.filter(i => i.severity === 'critical'),
        ...authResult.issues.filter(i => i.severity === 'critical')
      ];

      if (criticalIssues.length > 0) {
        toast.error(`System Health: ${criticalIssues.length} critical issue(s)`, {
          description: 'Check console for details',
          duration: 10000,
        });
        
        console.error('🚨 CRITICAL SYSTEM ISSUES:', criticalIssues);
      }

      // Log full reports
      console.log('💳 Stripe Health:', stripeResult);
      console.log('🔐 Auth Health:', authResult);

      // Expose globally for debugging
      (window as any).__systemHealth = {
        stripe: stripeResult,
        auth: authResult,
        timestamp: Date.now()
      };
    };

    // Run checks after initial render
    const timer = setTimeout(runHealthChecks, 3000);

    // Re-check every 30 seconds
    const interval = setInterval(runHealthChecks, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isDevelopment]);

  // Invisible component
  return null;
};

/**
 * System Health Indicator - Visual status display
 */
export const SystemHealthIndicator = () => {
  const [health, setHealth] = useState<any>(null);
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    if (!isDevelopment) return;

    const checkHealth = () => {
      const systemHealth = (window as any).__systemHealth;
      if (systemHealth) {
        setHealth(systemHealth);
      }
    };

    const interval = setInterval(checkHealth, 3000);
    return () => clearInterval(interval);
  }, [isDevelopment]);

  if (!isDevelopment || !health) return null;

  const stripeCritical = health.stripe?.issues.filter((i: any) => i.severity === 'critical').length || 0;
  const authCritical = health.auth?.issues.filter((i: any) => i.severity === 'critical').length || 0;
  const totalCritical = stripeCritical + authCritical;

  const statusColor = totalCritical > 0 ? 'bg-red-500' : 'bg-green-500';

  return (
    <div 
      className="fixed bottom-20 right-4 z-[9998] pointer-events-auto"
      title="System Health Status"
    >
      <button
        onClick={() => {
          console.log('💳 Stripe:', health.stripe);
          console.log('🔐 Auth:', health.auth);
          toast.info('Health report logged to console');
        }}
        className={`${statusColor} text-white px-3 py-2 rounded-lg shadow-lg hover:opacity-80 transition-opacity flex items-center gap-2 text-xs font-medium`}
      >
        <span className="flex h-2 w-2 relative">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 bg-white`}></span>
        </span>
        {totalCritical > 0 ? (
          <>⚠️ {totalCritical} Issue{totalCritical !== 1 ? 's' : ''}</>
        ) : (
          <>✓ Systems OK</>
        )}
      </button>
    </div>
  );
};
