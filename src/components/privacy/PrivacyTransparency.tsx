import React, { useState } from 'react';
import { Shield, Lock, Eye, Database, AlertCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const PrivacyTransparency: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="bg-slate-800/90 border-slate-700 text-white hover:bg-slate-700"
          >
            <Shield className="h-4 w-4 mr-2" />
            Privacy & Security
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Privacy & Data Protection</DialogTitle>
            <DialogDescription className="text-slate-400">
              Your privacy and security are our top priorities
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {/* Who Owns SafeOrStolen */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileText className="h-5 w-5 text-blue-500" />
                  About SafeOrStolen
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <p>
                  <strong>Platform:</strong> SafeOrStolen.com is a stolen goods verification platform operated by SafeOrStolen LLC.
                </p>
                <p>
                  <strong>Mission:</strong> To protect consumers and businesses from purchasing stolen goods through real-time database verification.
                </p>
                <p>
                  <strong>Contact:</strong> support@safeorstolen.com
                </p>
              </CardContent>
            </Card>

            {/* What Data We Collect */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Database className="h-5 w-5 text-green-500" />
                  What Data We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Account Data:</strong> Email address, name (optional)</li>
                  <li><strong>Verification Data:</strong> Serial numbers, IMEI, VIN numbers you search</li>
                  <li><strong>Usage Data:</strong> Search history, timestamps, verification results</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Your Data */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Eye className="h-5 w-5 text-purple-500" />
                  How We Use Your Data
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>To verify items against stolen goods databases</li>
                  <li>To provide you with verification results and history</li>
                  <li>To improve our service and detection algorithms</li>
                  <li>To comply with legal requirements and law enforcement requests</li>
                  <li>To send service updates (you can opt out)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lock className="h-5 w-5 text-yellow-500" />
                  Data Security & Storage
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Encryption:</strong> All data is encrypted in transit (SSL/TLS) and at rest</li>
                  <li><strong>Storage:</strong> Secure cloud infrastructure with regular backups</li>
                  <li><strong>Access:</strong> Strictly limited to authorized personnel only</li>
                  <li><strong>Retention:</strong> Account data kept while account is active; verification data for 7 years (legal compliance)</li>
                  <li><strong>Deletion:</strong> You can request data deletion at any time (subject to legal requirements)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Your Data Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Access:</strong> View all your data at any time in your dashboard</li>
                  <li><strong>Correction:</strong> Update or correct your information</li>
                  <li><strong>Deletion:</strong> Request account and data deletion</li>
                  <li><strong>Export:</strong> Download your verification history</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing emails anytime</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-sm">
                    For privacy requests: <a href="mailto:privacy@safeorstolen.com" className="text-blue-400 hover:underline">privacy@safeorstolen.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Legal Basis */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileText className="h-5 w-5 text-orange-500" />
                  Legal Protections
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>No Sale:</strong> We never sell your personal data to third parties</li>
                  <li><strong>No Sharing:</strong> Verification data not shared except with law enforcement (legal requirement)</li>
                  <li><strong>GDPR Compliant:</strong> Full compliance with European data protection laws</li>
                  <li><strong>CCPA Compliant:</strong> California Consumer Privacy Act compliant</li>
                  <li><strong>Terms:</strong> Full terms available at safeorstolen.com/terms</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-sm text-blue-400">
              <strong>Last Updated:</strong> October 2025 • Questions? Contact privacy@safeorstolen.com
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
