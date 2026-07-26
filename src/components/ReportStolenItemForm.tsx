import { useState, useRef } from 'react';
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
import { AlertCircle, Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { ShareReportModal } from './report/ShareReportModal';

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

interface UploadedImage {
  file: File;
  preview: string;
}

export function ReportStolenItemForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareData, setShareData] = useState<{ url: string; code: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: UploadedImage[] = [];
    const maxImages = 5;
    const remainingSlots = maxImages - uploadedImages.length;

    for (let i = 0; i < Math.min(files.length, remainingSlots); i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        newImages.push({
          file,
          preview: URL.createObjectURL(file),
        });
      }
    }

    if (files.length > remainingSlots) {
      toast({
        title: 'Image Limit',
        description: `Maximum ${maxImages} images allowed. Only first ${remainingSlots} added.`,
        variant: 'destructive',
      });
    }

    setUploadedImages([...uploadedImages, ...newImages]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...uploadedImages];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

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

      // Insert into stolen_items table
      const { data: insertedItem, error } = await supabase
        .from('stolen_items')
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
          status: 'reported',
        })
        .select()
        .single();

      if (error) throw error;

      // Generate shareable link
      try {
        const { data: shareResult, error: shareError } = await supabase.functions.invoke(
          'generate-report-link',
          {
            body: { stolenItemId: insertedItem.id },
          }
        );

        if (!shareError && shareResult?.shareUrl) {
          setShareData({
            url: shareResult.shareUrl,
            code: shareResult.shareCode,
          });
          setShowShareModal(true);
        }
      } catch (shareErr) {
        console.error('Error generating share link:', shareErr);
        // Still show success, just without share modal
        toast({
          title: 'Report Submitted Successfully',
          description: 'Your stolen item report has been added to our database.',
        });
      }

      // Check for watchlist matches (fire and forget). The edge function derives
      // the identifier/itemType from the DB row and verifies caller ownership.
      supabase.functions.invoke('check-watchlist-matches', {
        body: { stolenItemId: insertedItem.id },
      }).catch(console.error);

      // Clear form and images
      form.reset();
      uploadedImages.forEach(img => URL.revokeObjectURL(img.preview));
      setUploadedImages([]);

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
    <>
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

              {/* Image Upload Section */}
              <div className="space-y-3">
                <FormLabel>Photos (Optional)</FormLabel>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageSelect}
                    className="hidden"
                    id="image-upload"
                  />
                  
                  {uploadedImages.length === 0 ? (
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Click to upload photos (max 5)
                      </span>
                    </label>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {uploadedImages.map((img, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={img.preview}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-20 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                        
                        {uploadedImages.length < 5 && (
                          <label
                            htmlFor="image-upload"
                            className="flex items-center justify-center w-full h-20 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-muted-foreground/50 transition-colors"
                          >
                            <ImageIcon className="h-6 w-6 text-muted-foreground" />
                          </label>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground text-center">
                        {uploadedImages.length}/5 photos uploaded
                      </p>
                    </div>
                  )}
                </div>
                <FormDescription>
                  Upload photos of the item to help with identification
                </FormDescription>
              </div>

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
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Stolen Item Report'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Share Modal */}
      {shareData && (
        <ShareReportModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          shareUrl={shareData.url}
          shareCode={shareData.code}
          itemType={form.getValues('itemType')}
        />
      )}
    </>
  );
}
