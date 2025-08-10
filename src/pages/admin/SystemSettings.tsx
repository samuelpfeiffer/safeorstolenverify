import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Settings,
  Database,
  Mail,
  Shield,
  Zap,
  Save,
  RefreshCw,
  Bell,
  Globe
} from 'lucide-react';

const SystemSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: 'Safe or Stolen',
    siteDescription: 'Verify if items are legitimate or stolen',
    maxSearchesPerUser: 4,
    enableEmailNotifications: true,
    enableSMSNotifications: false,
    enableRateLimiting: true,
    maintenanceMode: false,
    debugMode: false,
    autoBackup: true,
    backupRetentionDays: 30
  });

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving settings:', settings);
  };

  return (
    <div className="min-h-screen bg-sos text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">System Settings</h1>
            <p className="text-gray-300 mt-2">Configure system parameters and preferences</p>
          </div>
          <Button onClick={handleSave} className="bg-sos-orange hover:bg-sos-orange/80">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Settings className="h-5 w-5 text-sos-orange" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="siteName" className="text-gray-300">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings.siteName}
                    onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                    className="bg-sos border-sos-orange/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxSearches" className="text-gray-300">Max Searches per Free User</Label>
                  <Input
                    id="maxSearches"
                    type="number"
                    value={settings.maxSearchesPerUser}
                    onChange={(e) => setSettings({...settings, maxSearchesPerUser: parseInt(e.target.value)})}
                    className="bg-sos border-sos-orange/20 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription" className="text-gray-300">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                  className="bg-sos border-sos-orange/20 text-white"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-5 w-5 text-sos-orange" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-300">Rate Limiting</Label>
                  <p className="text-sm text-gray-400">Protect against abuse by limiting request rates</p>
                </div>
                <Switch
                  checked={settings.enableRateLimiting}
                  onCheckedChange={(checked) => setSettings({...settings, enableRateLimiting: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-300">Debug Mode</Label>
                  <p className="text-sm text-gray-400">Enable detailed logging for troubleshooting</p>
                </div>
                <Switch
                  checked={settings.debugMode}
                  onCheckedChange={(checked) => setSettings({...settings, debugMode: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Bell className="h-5 w-5 text-sos-orange" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-300">Email Notifications</Label>
                  <p className="text-sm text-gray-400">Send email notifications for important events</p>
                </div>
                <Switch
                  checked={settings.enableEmailNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, enableEmailNotifications: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-300">SMS Notifications</Label>
                  <p className="text-sm text-gray-400">Send SMS alerts for critical events</p>
                </div>
                <Switch
                  checked={settings.enableSMSNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, enableSMSNotifications: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Database & Backup Settings */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Database className="h-5 w-5 text-sos-orange" />
                Database & Backup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-300">Automatic Backups</Label>
                  <p className="text-sm text-gray-400">Automatically backup database daily</p>
                </div>
                <Switch
                  checked={settings.autoBackup}
                  onCheckedChange={(checked) => setSettings({...settings, autoBackup: checked})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="backupRetention" className="text-gray-300">Backup Retention (Days)</Label>
                <Input
                  id="backupRetention"
                  type="number"
                  value={settings.backupRetentionDays}
                  onChange={(e) => setSettings({...settings, backupRetentionDays: parseInt(e.target.value)})}
                  className="bg-sos border-sos-orange/20 text-white max-w-xs"
                />
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Mode */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Zap className="h-5 w-5 text-sos-orange" />
                Maintenance Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-300">Enable Maintenance Mode</Label>
                  <p className="text-sm text-gray-400">Temporarily disable access for system updates</p>
                </div>
                <Switch
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) => setSettings({...settings, maintenanceMode: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button onClick={handleSave} className="bg-sos-orange hover:bg-sos-orange/80">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;