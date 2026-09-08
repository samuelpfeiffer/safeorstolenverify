/**
 * Watchlist Section - User watchlist for tracking items
 */

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { Bell, Plus, Trash2, Eye, Loader2 } from 'lucide-react';

interface WatchlistItem {
  id: string;
  item_type: string;
  identifier: string;
  description: string | null;
  alert_email: boolean;
  created_at: string;
}

const ITEM_TYPES = [
  { value: 'smartphone', label: 'Phone/IMEI' },
  { value: 'vehicle', label: 'Vehicle/VIN' },
  { value: 'bicycle', label: 'Bicycle' },
  { value: 'laptop', label: 'Laptop' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'firearm', label: 'Firearm' },
];

export const WatchlistSection = () => {
  const { user } = useUnifiedAuth();
  const { toast } = useToast();
  const [items, setItems] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  
  // Form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemType, setNewItemType] = useState('');
  const [newIdentifier, setNewIdentifier] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [alertEmail, setAlertEmail] = useState(true);

  useEffect(() => {
    if (user) {
      fetchWatchlist();
    }
  }, [user]);

  const fetchWatchlist = async () => {
    try {
      const { data, error } = await supabase
        .from('user_watchlist')
        .select('*')
        .eq('user_id', user?.id ?? '')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems((data ?? []).map((r) => ({ ...r, alert_email: r.alert_email ?? false, created_at: r.created_at ?? '', description: r.description ?? '' })));
    } catch (error) {
      console.error('Error fetching watchlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newItemType || !newIdentifier) return;

    setAdding(true);
    try {
      const { error } = await supabase
        .from('user_watchlist')
        .insert({
          user_id: user.id,
          item_type: newItemType,
          identifier: newIdentifier.toUpperCase(),
          description: newDescription || null,
          alert_email: alertEmail,
        });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: 'Already Watching',
            description: 'This item is already in your watchlist.',
            variant: 'destructive',
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: 'Added to Watchlist',
          description: 'You will be notified if this item is reported stolen.',
        });
        setShowAddForm(false);
        setNewItemType('');
        setNewIdentifier('');
        setNewDescription('');
        fetchWatchlist();
      }
    } catch (error) {
      console.error('Error adding to watchlist:', error);
      toast({
        title: 'Error',
        description: 'Failed to add item to watchlist.',
        variant: 'destructive',
      });
    } finally {
      setAdding(false);
    }
  };

  const handleRemoveItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('user_watchlist')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setItems(items.filter(item => item.id !== id));
      toast({
        title: 'Removed',
        description: 'Item removed from watchlist.',
      });
    } catch (error) {
      console.error('Error removing item:', error);
      toast({
        title: 'Error',
        description: 'Failed to remove item.',
        variant: 'destructive',
      });
    }
  };

  const toggleAlerts = async (id: string, currentValue: boolean) => {
    try {
      const { error } = await supabase
        .from('user_watchlist')
        .update({ alert_email: !currentValue })
        .eq('id', id);

      if (error) throw error;
      
      setItems(items.map(item => 
        item.id === id ? { ...item, alert_email: !currentValue } : item
      ));
    } catch (error) {
      console.error('Error updating alerts:', error);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Watchlist
            </CardTitle>
            <CardDescription>
              Get notified if items you're watching are reported stolen
            </CardDescription>
          </div>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            variant={showAddForm ? 'outline' : 'default'}
            size="sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Add Form */}
        {showAddForm && (
          <form onSubmit={handleAddItem} className="p-4 border rounded-lg bg-muted/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="item-type">Item Type</Label>
                <Select value={newItemType} onValueChange={setNewItemType} required>
                  <SelectTrigger id="item-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {ITEM_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="identifier">Identifier (Serial/IMEI/VIN)</Label>
                <Input
                  id="identifier"
                  value={newIdentifier}
                  onChange={(e) => setNewIdentifier(e.target.value)}
                  placeholder="Enter serial number, IMEI, or VIN"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Input
                id="description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="e.g., My laptop, Dad's car"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch
                  id="alerts"
                  checked={alertEmail}
                  onCheckedChange={setAlertEmail}
                />
                <Label htmlFor="alerts">Email alerts if reported stolen</Label>
              </div>
              <Button type="submit" disabled={adding}>
                {adding && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Add to Watchlist
              </Button>
            </div>
          </form>
        )}

        {/* Watchlist Items */}
        {items.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No items in your watchlist yet.</p>
            <p className="text-sm">Add items to get notified if they're reported stolen.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="capitalize">
                      {item.item_type}
                    </Badge>
                    <code className="text-sm font-mono bg-muted px-2 py-0.5 rounded-[0.25rem]">
                      {item.identifier}
                    </code>
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={item.alert_email}
                      onCheckedChange={() => toggleAlerts(item.id, item.alert_email)}
                    />
                    <Bell className={`w-4 h-4 ${item.alert_email ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
