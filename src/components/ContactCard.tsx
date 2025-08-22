import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Phone } from 'lucide-react';

interface ContactCardProps {
  message?: string;
  className?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ 
  message = "We couldn't find this item in our databases. Contact us for manual verification assistance.",
  className = ""
}) => {
  return (
    <Card className={`border-amber-200 bg-amber-50 ${className}`}>
      <CardHeader>
        <CardTitle className="text-amber-800 flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Need Help with Verification?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-amber-700">{message}</p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="border-amber-300 text-amber-800 hover:bg-amber-100"
            onClick={() => window.location.href = 'mailto:support@safeorstolen.com?subject=Manual Verification Request'}
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Support
          </Button>
          
          <Button
            variant="outline"
            className="border-amber-300 text-amber-800 hover:bg-amber-100"
            onClick={() => window.open('/contact', '_blank')}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Form
          </Button>
        </div>
        
        <p className="text-sm text-amber-600">
          Our team can manually search additional databases and provide expert verification within 24-48 hours.
        </p>
      </CardContent>
    </Card>
  );
};