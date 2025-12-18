import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const ReportStolenTool = () => {
  const [formData, setFormData] = useState({
    itemType: 'electronics',
    serialNumber: '',
    brand: '',
    model: '',
    description: '',
    stolenDate: '',
    stolenLocation: '',
    policeReportNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reportId, setReportId] = useState<string | null>(null);
  
  const { user } = useUnifiedAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: 'Sign In Required',
        description: 'Please sign in to report a stolen item',
        variant: 'destructive'
      });
      navigate('/auth', { state: { redirect: '/report-stolen' } });
      return;
    }

    if (!formData.serialNumber.trim()) {
      toast({
        title: 'Missing Information',
        description: 'Serial number is required',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('stolen_items')
        .insert({
          serial_number: formData.serialNumber.trim().toUpperCase(),
          item_type: formData.itemType,
          brand: formData.brand || null,
          model: formData.model || null,
          description: formData.description || null,
          stolen_date: formData.stolenDate || null,
          stolen_location: formData.stolenLocation || null,
          police_report_number: formData.policeReportNumber || null,
          reported_by: user.id,
          status: 'pending',
          source: 'user_report'
        })
        .select('id')
        .single();

      if (error) throw error;

      setReportId(data.id);
      setSubmitted(true);
      
      toast({
        title: 'Report Submitted',
        description: 'Thank you for helping protect other buyers'
      });
    } catch (err: any) {
      toast({
        title: 'Submission Failed',
        description: err.message || 'Unable to submit report',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Report Submitted | SafeOrStolen</title>
        </Helmet>

        <div className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Report Submitted</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for reporting this stolen item. Your report helps protect other buyers from purchasing stolen goods.
            </p>
            {reportId && (
              <p className="text-sm text-muted-foreground mb-6">
                Report ID: <code className="bg-muted px-2 py-1 rounded">{reportId}</code>
              </p>
            )}
            <div className="flex gap-4 justify-center">
              <Button onClick={() => { setSubmitted(false); setFormData({ ...formData, serialNumber: '', brand: '', model: '', description: '' }); }}>
                Report Another Item
              </Button>
              <Button variant="outline" onClick={() => navigate('/verify')}>
                Back to Verification
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Report Stolen Item | SafeOrStolen</title>
        <meta name="description" content="Report a stolen item to help protect other buyers. Add to our community database." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Report Stolen Item</h1>
            <p className="text-muted-foreground">
              Help protect other buyers by reporting stolen items
            </p>
          </div>

          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Please ensure you have filed a police report before submitting. False reports may result in account suspension.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
              <CardDescription>
                Provide as much detail as possible to help identify the stolen item
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="itemType">Item Type *</Label>
                    <select 
                      id="itemType"
                      value={formData.itemType}
                      onChange={(e) => setFormData(prev => ({ ...prev, itemType: e.target.value }))}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      required
                    >
                      <option value="electronics">Electronics</option>
                      <option value="phone">Phone/Tablet</option>
                      <option value="laptop">Laptop/Computer</option>
                      <option value="vehicle">Vehicle</option>
                      <option value="bicycle">Bicycle</option>
                      <option value="firearm">Firearm</option>
                      <option value="jewelry">Jewelry/Watch</option>
                      <option value="tools">Tools/Equipment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serialNumber">Serial Number / IMEI / VIN *</Label>
                    <Input
                      id="serialNumber"
                      value={formData.serialNumber}
                      onChange={(e) => setFormData(prev => ({ ...prev, serialNumber: e.target.value.toUpperCase() }))}
                      placeholder="Enter identifier"
                      className="font-mono uppercase"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      id="brand"
                      value={formData.brand}
                      onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
                      placeholder="e.g., Apple, Samsung, Trek"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      value={formData.model}
                      onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                      placeholder="e.g., iPhone 15 Pro, MacBook Air"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Color, distinguishing marks, accessories..."
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stolenDate">Date Stolen</Label>
                    <Input
                      id="stolenDate"
                      type="date"
                      value={formData.stolenDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, stolenDate: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stolenLocation">Location Stolen</Label>
                    <Input
                      id="stolenLocation"
                      value={formData.stolenLocation}
                      onChange={(e) => setFormData(prev => ({ ...prev, stolenLocation: e.target.value }))}
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="policeReportNumber">Police Report Number</Label>
                  <Input
                    id="policeReportNumber"
                    value={formData.policeReportNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, policeReportNumber: e.target.value }))}
                    placeholder="If available"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Report
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ReportStolenTool;
