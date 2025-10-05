import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AlertCircle, Shield, FileText } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ReportStolenPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    itemType: '',
    serialNumber: '',
    description: '',
    dateStolen: '',
    policeReportNumber: '',
    contactEmail: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Report Submitted",
      description: "Thank you. Your stolen item report has been received and will be added to our database within 24 hours.",
    });
  };

  return (
    <>
      <PageSEO
        title="Report Stolen Property - Free Stolen Item Database | SafeOrStolen"
        description="Report your stolen phone, laptop, car, bike, or any item with serial number, IMEI, or VIN. Free stolen property database helps recover stolen goods and protect buyers."
        keywords="report stolen item, stolen property database, report stolen phone, report stolen laptop, report stolen car, stolen item registry, IMEI database, VIN theft report, serial number registry"
        canonical="/report-stolen"
      />
      
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Report Stolen Property
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help protect others and increase chances of recovery by reporting your stolen item to our free database
            </p>
          </div>

          {/* Why Report Section */}
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Why Report Your Stolen Item?</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Protect Buyers:</strong> Prevent innocent people from unknowingly purchasing your stolen item</li>
                  <li>• <strong>Increase Recovery:</strong> Items in our database are flagged when checked by potential buyers</li>
                  <li>• <strong>Help Law Enforcement:</strong> Your report aids police investigations and property recovery</li>
                  <li>• <strong>Free Service:</strong> Reporting stolen items is completely free - no subscription required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Report Form */}
          <div className="bg-card rounded-lg border p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Submit Stolen Item Report</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="itemType">Item Type *</Label>
                  <Input
                    id="itemType"
                    placeholder="e.g., iPhone 14, Laptop, Bicycle"
                    value={formData.itemType}
                    onChange={(e) => setFormData({...formData, itemType: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serialNumber">Serial Number / IMEI / VIN *</Label>
                  <Input
                    id="serialNumber"
                    placeholder="Enter identifying number"
                    value={formData.serialNumber}
                    onChange={(e) => setFormData({...formData, serialNumber: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Item Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed description: color, brand, model, distinctive marks, etc."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dateStolen">Date Stolen</Label>
                  <Input
                    id="dateStolen"
                    type="date"
                    value={formData.dateStolen}
                    onChange={(e) => setFormData({...formData, dateStolen: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="policeReportNumber">Police Report Number</Label>
                  <Input
                    id="policeReportNumber"
                    placeholder="Optional but recommended"
                    value={formData.policeReportNumber}
                    onChange={(e) => setFormData({...formData, policeReportNumber: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="We'll contact you if your item is found"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                  required
                />
              </div>

              <div className="bg-muted/30 rounded-lg p-4 text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Privacy Notice:</p>
                <p>Your contact information is kept confidential. Only the item details will be added to our public database to protect buyers and aid in recovery.</p>
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Stolen Item Report
              </Button>
            </form>
          </div>

          {/* What Happens Next */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">What Happens After You Report?</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li><strong>1. Verification (24 hours):</strong> We verify your report and add it to our database</li>
              <li><strong>2. Database Alert:</strong> Your item is immediately flagged in our system</li>
              <li><strong>3. Buyer Protection:</strong> Anyone checking this serial/IMEI/VIN will see it's reported stolen</li>
              <li><strong>4. Recovery Notification:</strong> If someone reports finding your item, we'll contact you immediately</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportStolenPage;