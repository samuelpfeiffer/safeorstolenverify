import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Plus, X } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';

interface MonitoredItem {
  id: string;
  identifier: string;
  itemType: string;
  createdAt: string;
}

export const AlertMonitoring = () => {
  const [monitoredItems, setMonitoredItems] = useState<MonitoredItem[]>([]);
  const [newIdentifier, setNewIdentifier] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const { user } = useAuth();

  const addMonitoring = async () => {
    if (!newIdentifier.trim()) return;

    setIsAdding(true);
    try {
      // Premium feature: Set up monitoring alerts
      const { data, error } = await supabase
        .from('alert_notifications')
        .insert({
          user_id: user?.id,
          title: 'New Item Monitoring',
          message: `Now monitoring ${newIdentifier}`,
          notification_type: 'monitoring_setup',
          data: { identifier: newIdentifier }
        })
        .select()
        .single();

      if (error) throw error;

      toast.success('Monitoring activated', {
        description: `You'll be notified if ${newIdentifier} is reported stolen`
      });

      setNewIdentifier('');
      // Refresh monitored items list
    } catch (error) {
      toast.error('Failed to set up monitoring');
    } finally {
      setIsAdding(false);
    }
  };

  const removeMonitoring = async (id: string) => {
    try {
      await supabase
        .from('alert_notifications')
        .delete()
        .eq('id', id);

      setMonitoredItems(items => items.filter(item => item.id !== id));
      toast.success('Monitoring removed');
    } catch (error) {
      toast.error('Failed to remove monitoring');
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Alert Monitoring</h3>
        </div>
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
          Premium Feature
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter VIN, IMEI, or Serial Number to monitor"
            value={newIdentifier}
            onChange={(e) => setNewIdentifier(e.target.value)}
          />
          <Button onClick={addMonitoring} disabled={isAdding}>
            <Plus className="h-4 w-4 mr-2" />
            Monitor
          </Button>
        </div>

        {monitoredItems.length > 0 ? (
          <div className="space-y-2">
            {monitoredItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-muted rounded">
                <div>
                  <p className="font-mono text-sm">{item.identifier}</p>
                  <p className="text-xs text-muted-foreground">
                    Monitoring since {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeMonitoring(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <Bell className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No items being monitored</p>
            <p className="text-xs mt-1">Add items above to receive theft alerts</p>
          </div>
        )}

        <div className="mt-4 p-4 bg-primary/5 rounded-lg text-sm">
          <p className="font-semibold mb-2">🔔 How Monitoring Works:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Get instant email alerts if monitored items are reported stolen</li>
            <li>• Daily scans across all integrated databases</li>
            <li>• Monitor up to 10 items with Personal plan</li>
            <li>• Unlimited monitoring with Professional plan</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};
