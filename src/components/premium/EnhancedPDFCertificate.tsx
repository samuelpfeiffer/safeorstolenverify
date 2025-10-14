import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Shield, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import jsPDF from 'jspdf';

interface EnhancedPDFCertificateProps {
  verificationData: {
    identifier: string;
    itemType: string;
    status: 'safe' | 'stolen' | 'lost';
    providers: string[];
    timestamp: string;
    details?: any;
  };
  userTier: string;
}

export const EnhancedPDFCertificate: React.FC<EnhancedPDFCertificateProps> = ({ 
  verificationData, 
  userTier 
}) => {
  const isPremium = ['personal', 'professional', 'enterprise'].includes(userTier);

  const generatePDF = () => {
    if (!isPremium) {
      toast.error('Upgrade to Personal plan or higher for PDF certificates');
      return;
    }

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Header with branding
      doc.setFillColor(59, 130, 246); // Primary blue
      doc.rect(0, 0, pageWidth, 40, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('SafeOrStolen.com', pageWidth / 2, 20, { align: 'center' });
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Official Verification Certificate', pageWidth / 2, 30, { align: 'center' });

      // Reset text color
      doc.setTextColor(0, 0, 0);
      
      // Certificate Title
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('VERIFICATION CERTIFICATE', pageWidth / 2, 60, { align: 'center' });

      // Status Badge
      const statusColor: [number, number, number] = verificationData.status === 'safe' ? [34, 197, 94] : [239, 68, 68];
      doc.setFillColor(statusColor[0], statusColor[1], statusColor[2]);
      doc.roundedRect(pageWidth / 2 - 30, 70, 60, 15, 3, 3, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(verificationData.status.toUpperCase(), pageWidth / 2, 80, { align: 'center' });

      // Item Details
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      let yPos = 105;
      
      doc.text('Item Identifier:', 20, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(verificationData.identifier, 70, yPos);
      
      yPos += 10;
      doc.setFont('helvetica', 'bold');
      doc.text('Item Type:', 20, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(verificationData.itemType, 70, yPos);
      
      yPos += 10;
      doc.setFont('helvetica', 'bold');
      doc.text('Verification Date:', 20, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(new Date(verificationData.timestamp).toLocaleString(), 70, yPos);

      // Databases Checked
      yPos += 20;
      doc.setFont('helvetica', 'bold');
      doc.text('Databases Checked:', 20, yPos);
      yPos += 8;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      verificationData.providers.forEach((provider) => {
        doc.text(`• ${provider}`, 25, yPos);
        yPos += 6;
      });

      // Security Watermark
      doc.setFontSize(60);
      doc.setTextColor(200, 200, 200);
      doc.setFont('helvetica', 'bold');
      doc.text('VERIFIED', pageWidth / 2, pageHeight / 2, { 
        align: 'center', 
        angle: 45 
      });

      // Footer
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.setFont('helvetica', 'italic');
      doc.text('This certificate is digitally generated and validates the verification performed.', pageWidth / 2, pageHeight - 20, { align: 'center' });
      doc.text('Certificate ID: ' + Date.now().toString(36), pageWidth / 2, pageHeight - 15, { align: 'center' });
      doc.text('SafeOrStolen.com - Protecting buyers from stolen goods since 2024', pageWidth / 2, pageHeight - 10, { align: 'center' });

      // Save PDF
      const fileName = `SafeOrStolen_Certificate_${verificationData.identifier}_${Date.now()}.pdf`;
      doc.save(fileName);
      
      toast.success('PDF certificate generated successfully');
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error('Failed to generate PDF certificate');
    }
  };

  if (!isPremium) {
    return (
      <div className="p-4 border border-border rounded-lg bg-muted/50">
        <div className="flex items-center gap-3 mb-3">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold">PDF Verification Certificate</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Generate professional PDF certificates for verified items. Perfect for resale documentation.
        </p>
        <Button variant="outline" disabled className="w-full">
          <Shield className="h-4 w-4 mr-2" />
          Upgrade to Personal Plan
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
      <div className="flex items-center gap-3 mb-3">
        <CheckCircle className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">PDF Verification Certificate</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-3">
        Download a professional PDF certificate with verification details, databases checked, and security watermark.
      </p>
      <Button onClick={generatePDF} className="w-full">
        <Download className="h-4 w-4 mr-2" />
        Download PDF Certificate
      </Button>
    </div>
  );
};