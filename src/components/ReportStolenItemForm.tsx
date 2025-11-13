import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, Upload } from 'lucide-react';

const reportSchema = z.object({
  itemType: z.string().min(1, 'Item type is required'),
  brand: z.string().optional(),
  model: z.string().optional(),
  serialNumber: z.string().optional(),
  imei: z.string().optional(),
  vin: z.string().optional(),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  dateStolen: z.string().min(1, 'Date stolen is required'),
  location: z.string().min(1, 'Location is required'),
  policeReportNumber: z.string().optional(),
  estimatedValue: z.string().optional(),
});

type ReportFormData = z.infer<typeof reportSchema>;

export function ReportStolenItemForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReportFormData>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      itemType: '',
      brand: '',
      model: '',
      serialNumber: '',
      imei: '',
      vin: '',
      description: '',
      dateStolen: '',
      location: '',
      policeReportNumber: '',
      estimatedValue: '',
    },
  });

  const onSubmit = async (data: ReportFormData) => {
    try {
      setIsSubmitting(true);

      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: 'Authentication Required',
          description: 'Please sign in to report a stolen item',
          variant: 'destructive',
        });
        return;
      }

      // Insert into stolen_items table (using type assertion for table that will be created)
      const { error } = await supabase
        .from('stolen_items' as any)
        .insert({
          user_id: user.id,
          item_type: data.itemType,
          brand: data.brand || null,
          model: data.model || null,
          serial_number: data.serialNumber || null,
          imei: data.imei || null,
          vin: data.vin || null,
          description: data.description,
          date_stolen: data.dateStolen,
          location: data.location,
          police_report_number: data.policeReportNumber || null,
          estimated_value: data.estimatedValue ? parseFloat(data.estimatedValue) : null,
          status: 'active',
        });

      if (error) throw error;

      toast({
        title: 'Report Submitted Successfully',
        description: 'Your stolen item report has been added to our database. Users who search for this item will be notified.',
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting report:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit stolen item report. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-destructive" />
          Report Stolen Item
        </CardTitle>
        <CardDescription>
          Help protect others by reporting your stolen property. This information will be added to our database
          and users will be notified if they search for this item.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="itemType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select item type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="smartphone">Smartphone</SelectItem>
                      <SelectItem value="laptop">Laptop</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="vehicle">Vehicle</SelectItem>
                      <SelectItem value="bicycle">Bicycle</SelectItem>
                      <SelectItem value="watch">Watch</SelectItem>
                      <SelectItem value="camera">Camera</SelectItem>
                      <SelectItem value="firearm">Firearm</SelectItem>
                      <SelectItem value="jewelry">Jewelry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Apple, Samsung, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Input placeholder="iPhone 15 Pro, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serialNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serial Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Serial number if available" {...field} />
                  </FormControl>
                  <FormDescription>Any identifier like serial, IMEI, VIN, etc.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="imei"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IMEI (for phones)</FormLabel>
                    <FormControl>
                      <Input placeholder="15-digit IMEI" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>VIN (for vehicles)</FormLabel>
                    <FormControl>
                      <Input placeholder="17-character VIN" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Detailed description including color, condition, unique features..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dateStolen"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Stolen *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="estimatedValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Value ($)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Stolen *</FormLabel>
                  <FormControl>
                    <Input placeholder="City, State or detailed location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="policeReportNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Police Report Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Case/report number if filed" {...field} />
                  </FormControl>
                  <FormDescription>
                    Including a police report number increases credibility
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Stolen Item Report'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
