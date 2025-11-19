import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  type: z.enum(['vin', 'imei', 'serial', 'license_plate']),
  value: z.string().min(3, 'Please enter a valid identifier'),
  cityCode: z.string().min(2),
});

interface CityTheftLookupFormProps {
  onSubmit: (data: { cityCode: string; type: string; value: string }) => Promise<void>;
  isLoading: boolean;
  defaultCity: string;
  cityName: string;
}

export const CityTheftLookupForm: React.FC<CityTheftLookupFormProps> = ({
  onSubmit,
  isLoading,
  defaultCity,
  cityName,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'vin',
      value: '',
      cityCode: defaultCity,
    },
  });

  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    await onSubmit({
      cityCode: values.cityCode,
      type: values.type,
      value: values.value,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6 bg-card border border-border rounded-lg p-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">Verify Items in {cityName}</h2>
          <p className="text-muted-foreground">Check if vehicles, phones, or electronics are stolen</p>
        </div>

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select item type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="vin">VIN (Vehicle)</SelectItem>
                  <SelectItem value="license_plate">License Plate</SelectItem>
                  <SelectItem value="imei">IMEI (Phone/Tablet)</SelectItem>
                  <SelectItem value="serial">Serial Number</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Identifier</FormLabel>
              <FormControl>
                <Input placeholder="Enter VIN, IMEI, Serial, or License Plate" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Checking...
            </>
          ) : (
            `Check in ${cityName}`
          )}
        </Button>
      </form>
    </Form>
  );
};
