import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Users, Send, TestTube, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";

interface FreeUser {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
  free_searches_used: number | null;
}

const UserOutreachPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useUnifiedAuth();
  const [freeUsers, setFreeUsers] = useState<FreeUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [testEmail, setTestEmail] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<"feedback" | "value" | "lastchance">("feedback");
  const [sendLimit, setSendLimit] = useState(10);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
      return;
    }
    fetchFreeUsers();
  }, [user, authLoading, navigate]);

  const fetchFreeUsers = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, full_name, created_at, free_searches_used, subscription_tier")
        .or("subscription_tier.is.null,subscription_tier.eq.free")
        .not("email", "is", null)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setFreeUsers(data || []);
    } catch (error: any) {
      toast.error("Failed to fetch users: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const sendTestEmail = async () => {
    if (!testEmail) {
      toast.error("Please enter a test email address");
      return;
    }

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-user-outreach", {
        body: { templateType: selectedTemplate, testEmail }
      });

      if (error) throw error;
      toast.success(`Test email sent to ${testEmail}`);
    } catch (error: any) {
      toast.error("Failed to send test email: " + error.message);
    } finally {
      setSending(false);
    }
  };

  const sendCampaign = async () => {
    if (freeUsers.length === 0) {
      toast.error("No free users to contact");
      return;
    }

    const confirmSend = window.confirm(
      `This will send the "${selectedTemplate}" email to up to ${sendLimit} free users. Continue?`
    );
    
    if (!confirmSend) return;

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-user-outreach", {
        body: { templateType: selectedTemplate, limit: sendLimit }
      });

      if (error) throw error;
      
      toast.success(`Campaign sent! ${data.sent} emails delivered, ${data.failed} failed`);
    } catch (error: any) {
      toast.error("Failed to send campaign: " + error.message);
    } finally {
      setSending(false);
    }
  };

  const templates = {
    feedback: {
      name: "Feedback Request",
      description: "Ask users what would make them upgrade - best for gathering insights",
      subject: "Quick question about SafeOrStolen"
    },
    value: {
      name: "Value Story",
      description: "Share a real success story showing the value of verification",
      subject: "You left money on the table 💰"
    },
    lastchance: {
      name: "Last Chance",
      description: "Remind users their free searches are expiring - creates urgency",
      subject: "Your free searches expire soon"
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">User Outreach Campaign</h1>
            <p className="text-muted-foreground mt-1">
              Email free users to understand conversion blockers
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Users className="h-4 w-4 mr-2" />
            {freeUsers.length} Free Users
          </Badge>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{freeUsers.length}</div>
              <p className="text-sm text-muted-foreground">Total Free Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">
                {freeUsers.filter(u => (u.free_searches_used || 0) > 0).length}
              </div>
              <p className="text-sm text-muted-foreground">Used Free Searches</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">
                {freeUsers.filter(u => (u.free_searches_used || 0) === 0).length}
              </div>
              <p className="text-sm text-muted-foreground">Never Searched</p>
            </CardContent>
          </Card>
        </div>

        {/* Template Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Select Email Template
            </CardTitle>
            <CardDescription>
              Choose the right message for your outreach goal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTemplate} onValueChange={(v) => setSelectedTemplate(v as any)}>
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
                <TabsTrigger value="value">Value Story</TabsTrigger>
                <TabsTrigger value="lastchance">Last Chance</TabsTrigger>
              </TabsList>
              
              {Object.entries(templates).map(([key, template]) => (
                <TabsContent key={key} value={key} className="mt-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Subject:</span> {template.subject}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Test Email */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5" />
              Test Email First
            </CardTitle>
            <CardDescription>
              Send a test to yourself before launching the campaign
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="testEmail">Your Email</Label>
                <Input
                  id="testEmail"
                  type="email"
                  placeholder="you@example.com"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                />
              </div>
              <div className="flex items-end">
                <Button onClick={sendTestEmail} disabled={sending}>
                  {sending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Send className="h-4 w-4 mr-2" />}
                  Send Test
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Send Campaign */}
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Launch Campaign
            </CardTitle>
            <CardDescription>
              Send the selected template to free users
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32">
                <Label htmlFor="limit">Send Limit</Label>
                <Input
                  id="limit"
                  type="number"
                  min={1}
                  max={freeUsers.length}
                  value={sendLimit}
                  onChange={(e) => setSendLimit(parseInt(e.target.value) || 10)}
                />
              </div>
              <p className="text-sm text-muted-foreground flex-1">
                Start with a small batch to test response rates before sending to everyone.
              </p>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <p className="text-sm text-amber-700 dark:text-amber-300">
                This will send real emails. Always test first!
              </p>
            </div>

            <Button 
              onClick={sendCampaign} 
              disabled={sending || freeUsers.length === 0}
              size="lg"
              className="w-full"
            >
              {sending ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <CheckCircle2 className="h-4 w-4 mr-2" />
              )}
              Send "{templates[selectedTemplate].name}" to {Math.min(sendLimit, freeUsers.length)} Users
            </Button>
          </CardContent>
        </Card>

        {/* User List Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Free Users Preview</CardTitle>
            <CardDescription>
              First 10 users who will receive the campaign
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {freeUsers.slice(0, 10).map((user) => (
                <div key={user.id} className="flex items-center justify-between p-2 bg-muted rounded">
                  <div>
                    <span className="font-medium">{user.full_name || "No name"}</span>
                    <span className="text-muted-foreground ml-2">{user.email}</span>
                  </div>
                  <Badge variant={user.free_searches_used ? "default" : "secondary"}>
                    {user.free_searches_used || 0} searches
                  </Badge>
                </div>
              ))}
              {freeUsers.length > 10 && (
                <p className="text-sm text-muted-foreground text-center pt-2">
                  + {freeUsers.length - 10} more users
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserOutreachPage;
