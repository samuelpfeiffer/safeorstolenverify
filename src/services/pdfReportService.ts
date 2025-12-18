/**
 * PDF Report Service - Generate verification reports as PDF
 * Uses jsPDF for client-side PDF generation
 */

import jsPDF from 'jspdf';
import type { AggregatedResult } from '@/services/VerificationService';

interface PDFReportOptions {
  result: AggregatedResult;
  identifier: string;
  itemType?: string;
}

const STATUS_COLORS: Record<string, [number, number, number]> = {
  safe: [16, 185, 129], // green
  stolen: [239, 68, 68], // red
  unknown: [245, 158, 11], // amber
  lost: [245, 158, 11], // amber
};

const RISK_COLORS: Record<string, [number, number, number]> = {
  low: [16, 185, 129],
  medium: [245, 158, 11],
  high: [239, 68, 68],
  critical: [220, 38, 38],
};

export const generateVerificationPDF = ({ result, identifier, itemType }: PDFReportOptions): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Header
  doc.setFillColor(23, 23, 23);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('SafeOrStolen', 20, 25);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Verification Report', 20, 33);

  doc.setFontSize(10);
  doc.text(`Generated: ${new Date().toLocaleString()}`, pageWidth - 20, 25, { align: 'right' });
  doc.text(`Report ID: ${result.identifier?.slice(0, 8) || 'N/A'}`, pageWidth - 20, 33, { align: 'right' });

  y = 55;

  // Status Banner
  const statusColor = STATUS_COLORS[result.finalStatus] || STATUS_COLORS.unknown;
  doc.setFillColor(...statusColor);
  doc.roundedRect(20, y, pageWidth - 40, 30, 3, 3, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  const statusText = result.finalStatus === 'safe' ? '✓ ITEM VERIFIED SAFE' : 
                     result.finalStatus === 'stolen' ? '⚠ STOLEN ITEM DETECTED' :
                     '? VERIFICATION INCONCLUSIVE';
  doc.text(statusText, pageWidth / 2, y + 18, { align: 'center' });
  
  y += 45;

  // Item Information Section
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Item Information', 20, y);
  
  y += 10;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  
  const addRow = (label: string, value: string) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label + ':', 25, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 80, y);
    y += 8;
  };

  addRow('Identifier', identifier);
  if (itemType) addRow('Item Type', itemType.charAt(0).toUpperCase() + itemType.slice(1));
  addRow('Status', result.finalStatus.toUpperCase());
  addRow('Confidence', `${result.confidence}%`);
  addRow('Risk Level', result.riskLevel?.toUpperCase() || 'N/A');
  
  y += 10;

  // Databases Checked Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Databases Checked', 20, y);
  
  y += 10;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  if (result.checkedSources && result.checkedSources.length > 0) {
    result.checkedSources.forEach((source) => {
      doc.text(`• ${source}`, 25, y);
      y += 6;
    });
  } else if (result.providers && result.providers.length > 0) {
    result.providers.forEach((provider) => {
      const providerStatus = provider.status === 'safe' ? '✓' : provider.status === 'stolen' ? '✗' : '?';
      doc.text(`${providerStatus} ${provider.provider}`, 25, y);
      y += 6;
    });
  }

  y += 10;

  // Analysis Summary
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Analysis Summary', 20, y);
  
  y += 10;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const message = result.message || 'No additional information available.';
  const lines = doc.splitTextToSize(message, pageWidth - 50);
  doc.text(lines, 25, y);
  y += lines.length * 6 + 10;

  // Recommendations (if stolen)
  if (result.finalStatus === 'stolen') {
    doc.setFillColor(254, 226, 226);
    doc.roundedRect(20, y, pageWidth - 40, 40, 3, 3, 'F');
    
    doc.setTextColor(185, 28, 28);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('⚠ WARNING', 25, y + 10);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const warningText = 'This item has been reported as stolen. Do not purchase this item. If you have information about this item, please contact local law enforcement.';
    const warningLines = doc.splitTextToSize(warningText, pageWidth - 55);
    doc.text(warningLines, 25, y + 18);
    y += 50;
  }

  // Footer
  const footerY = doc.internal.pageSize.getHeight() - 20;
  doc.setTextColor(128, 128, 128);
  doc.setFontSize(8);
  doc.text('This report is provided for informational purposes only.', pageWidth / 2, footerY - 8, { align: 'center' });
  doc.text('Verify all information with official sources before making purchase decisions.', pageWidth / 2, footerY - 3, { align: 'center' });
  doc.text('SafeOrStolen.com - Protecting Buyers & Sellers', pageWidth / 2, footerY + 5, { align: 'center' });

  // Save the PDF
  const filename = `safeorstolen-verification-${identifier.slice(0, 8)}-${Date.now()}.pdf`;
  doc.save(filename);
};

export const generateStolenReportPDF = (item: {
  id: string;
  item_type: string;
  brand?: string | null;
  model?: string | null;
  serial_number?: string | null;
  imei?: string | null;
  vin?: string | null;
  description?: string | null;
  date_stolen?: string | null;
  location?: string | null;
  police_report_number?: string | null;
}): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Header
  doc.setFillColor(220, 38, 38);
  doc.rect(0, 0, pageWidth, 35, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('STOLEN ITEM REPORT', pageWidth / 2, 22, { align: 'center' });
  
  doc.setFontSize(10);
  doc.text('SafeOrStolen.com', pageWidth / 2, 30, { align: 'center' });

  y = 50;

  // Item Details
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  const title = `${item.brand || ''} ${item.model || item.item_type}`.trim();
  doc.text(title, 20, y);
  
  y += 15;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');

  const addField = (label: string, value: string | null | undefined) => {
    if (value) {
      doc.setFont('helvetica', 'bold');
      doc.text(label + ':', 20, y);
      doc.setFont('helvetica', 'normal');
      doc.text(value, 75, y);
      y += 10;
    }
  };

  addField('Type', item.item_type);
  addField('Brand', item.brand);
  addField('Model', item.model);
  addField('Serial Number', item.serial_number);
  addField('IMEI', item.imei);
  addField('VIN', item.vin);
  addField('Location', item.location);
  addField('Date Stolen', item.date_stolen);
  addField('Police Report', item.police_report_number);

  y += 10;

  if (item.description) {
    doc.setFont('helvetica', 'bold');
    doc.text('Description:', 20, y);
    y += 8;
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(item.description, pageWidth - 40);
    doc.text(lines, 20, y);
  }

  // Footer
  const footerY = doc.internal.pageSize.getHeight() - 25;
  doc.setFillColor(254, 226, 226);
  doc.rect(0, footerY - 10, pageWidth, 35, 'F');
  
  doc.setTextColor(185, 28, 28);
  doc.setFontSize(9);
  doc.text('If you have seen this item, please contact local law enforcement.', pageWidth / 2, footerY, { align: 'center' });
  doc.text(`Report ID: ${item.id}`, pageWidth / 2, footerY + 8, { align: 'center' });

  const filename = `stolen-report-${item.id.slice(0, 8)}.pdf`;
  doc.save(filename);
};
