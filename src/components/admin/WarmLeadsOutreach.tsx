import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Users, TrendingUp, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WarmLead {
  id: string;
  email: string;
  full_name: string | null;
  free_searches_used: number;
  created_at: string;
  total_searches: number;
}

export const WarmLeadsOutreach = () => {
  const [leads, setLeads] = useState<WarmLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchWarmLeads();
  }, []);

  const fetchWarmLeads = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, email, full_name, free_searches_used, created_at')
      .gte('free_searches_used', 2)
      .or('subscription_tier.is.null,subscription_tier.eq.free')
      .not('email', 'is', null)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setLeads(data as WarmLead[]);
    }
    setLoading(false);
  };

  const copyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    toast({ title: 'Email copied!' });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAllEmails = () => {
    const emails = leads.map(l => l.email).join(', ');
    navigator.clipboard.writeText(emails);
    toast({ title: `${leads.length} emails copied!` });
  };

  const emailTemplate = `Subject: Quick question about your SafeOrStolen experience

Hi [NAME],

Thanks for signing up for SafeOrStolen!

I'm curious: have you had a chance to try our verification service? Is there anything that would make you want to subscribe?

Our unlimited plan is just $1/month — verify as many items as you need across all categories. Cancel anytime.

Best,
The SafeOrStolen Team

P.S. Reply to this email if you have any questions — we're here to help!`;

  if (loading) {
    return <div className="animate-pulse">Loading warm leads...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            Warm Leads - Users Who Hit Free Limit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-lg px-3 py-1">
                <Users className="w-4 h-4 mr-1" />
                {leads.length} warm leads
              </Badge>
            </div>
            <Button onClick={copyAllEmails} variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Copy All Emails
            </Button>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {leads.map((lead) => (
              <div 
                key={lead.id} 
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{lead.full_name || 'No name'}</p>
                  <p className="text-sm text-muted-foreground">{lead.email}</p>
                  <p className="text-xs text-muted-foreground">
                    Joined: {new Date(lead.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{lead.free_searches_used} searches</Badge>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => copyEmail(lead.email, lead.id)}
                  >
                    {copiedId === lead.id ? (
                      <Check className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Email Template
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="text-sm bg-muted p-4 rounded-lg whitespace-pre-wrap overflow-x-auto">
            {emailTemplate}
          </pre>
          <Button 
            className="mt-4" 
            onClick={() => {
              navigator.clipboard.writeText(emailTemplate);
              toast({ title: 'Email template copied!' });
            }}
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Template
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
