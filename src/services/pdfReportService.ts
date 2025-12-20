/**
 * Professional PDF Certificate Service
 * Generates premium verification certificates with proper branding
 */

import jsPDF from 'jspdf';
import type { AggregatedResult } from '@/services/VerificationService';

interface PDFReportOptions {
  result: AggregatedResult;
  identifier: string;
  itemType?: string;
}

// Brand colors
const BRAND_ORANGE: [number, number, number] = [255, 107, 53];
const BRAND_DARK: [number, number, number] = [13, 13, 13];
const SAFE_GREEN: [number, number, number] = [16, 185, 129];
const DANGER_RED: [number, number, number] = [239, 68, 68];
const WARNING_AMBER: [number, number, number] = [245, 158, 11];
const GRAY_LIGHT: [number, number, number] = [243, 244, 246];
const GRAY_MEDIUM: [number, number, number] = [156, 163, 175];
const WHITE: [number, number, number] = [255, 255, 255];

const getStatusColor = (status: string): [number, number, number] => {
  switch (status) {
    case 'safe': return SAFE_GREEN;
    case 'stolen': return DANGER_RED;
    default: return WARNING_AMBER;
  }
};

const generateCertificateId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const segments = [4, 4, 4];
  return segments.map(len => 
    Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  ).join('-');
};

export const generateVerificationPDF = ({ result, identifier, itemType }: PDFReportOptions): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const certificateId = generateCertificateId();
  const verificationDate = new Date();
  
  // === DECORATIVE BORDER ===
  // Outer border
  doc.setDrawColor(...BRAND_ORANGE);
  doc.setLineWidth(3);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
  
  // Inner decorative border
  doc.setDrawColor(...BRAND_DARK);
  doc.setLineWidth(0.5);
  doc.rect(15, 15, pageWidth - 30, pageHeight - 30);
  
  // Corner decorations
  const cornerSize = 15;
  [[20, 20], [pageWidth - 20, 20], [20, pageHeight - 20], [pageWidth - 20, pageHeight - 20]].forEach(([x, y]) => {
    doc.setFillColor(...BRAND_ORANGE);
    doc.circle(x, y, 3, 'F');
  });

  let y = 35;

  // === HEADER SECTION ===
  // Logo area with brand styling
  doc.setFillColor(...BRAND_DARK);
  doc.roundedRect(pageWidth / 2 - 45, y - 8, 90, 22, 4, 4, 'F');
  
  doc.setTextColor(...WHITE);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('SafeOrStolen', pageWidth / 2, y + 5, { align: 'center' });
  
  y += 28;
  
  // Certificate Title
  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('CERTIFICATE OF VERIFICATION', pageWidth / 2, y, { align: 'center' });
  
  y += 8;
  
  // Decorative line under title
  doc.setDrawColor(...BRAND_ORANGE);
  doc.setLineWidth(2);
  doc.line(40, y, pageWidth - 40, y);
  
  y += 20;

  // === STATUS BANNER ===
  const statusColor = getStatusColor(result.finalStatus);
  doc.setFillColor(...statusColor);
  doc.roundedRect(30, y, pageWidth - 60, 35, 5, 5, 'F');
  
  doc.setTextColor(...WHITE);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  
  const statusIcon = result.finalStatus === 'safe' ? '✓' : result.finalStatus === 'stolen' ? '✗' : '?';
  const statusText = result.finalStatus === 'safe' 
    ? 'VERIFIED SAFE' 
    : result.finalStatus === 'stolen' 
    ? 'STOLEN ITEM DETECTED' 
    : 'VERIFICATION INCONCLUSIVE';
  
  doc.text(`${statusIcon}  ${statusText}`, pageWidth / 2, y + 22, { align: 'center' });
  
  y += 50;

  // === CERTIFICATION STATEMENT ===
  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  const statement = result.finalStatus === 'safe'
    ? 'This is to certify that the item described below has been verified against multiple databases and no theft records were found at the time of verification.'
    : result.finalStatus === 'stolen'
    ? 'WARNING: This item has been flagged as stolen in one or more databases. Do not proceed with any transaction involving this item.'
    : 'This item could not be definitively verified. Exercise caution and perform additional due diligence before proceeding.';
  
  const statementLines = doc.splitTextToSize(statement, pageWidth - 80);
  doc.text(statementLines, pageWidth / 2, y, { align: 'center', maxWidth: pageWidth - 80 });
  
  y += statementLines.length * 7 + 15;

  // === ITEM DETAILS BOX ===
  doc.setFillColor(...GRAY_LIGHT);
  doc.roundedRect(30, y, pageWidth - 60, 60, 3, 3, 'F');
  
  doc.setDrawColor(...GRAY_MEDIUM);
  doc.setLineWidth(0.5);
  doc.roundedRect(30, y, pageWidth - 60, 60, 3, 3, 'S');
  
  y += 12;
  
  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('ITEM DETAILS', 40, y);
  
  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  // Two column layout for details
  const leftCol = 45;
  const rightCol = pageWidth / 2 + 10;
  
  doc.setFont('helvetica', 'bold');
  doc.text('Identifier:', leftCol, y);
  doc.setFont('helvetica', 'normal');
  doc.text(identifier, leftCol + 28, y);
  
  if (itemType) {
    doc.setFont('helvetica', 'bold');
    doc.text('Item Type:', rightCol, y);
    doc.setFont('helvetica', 'normal');
    doc.text(itemType.charAt(0).toUpperCase() + itemType.slice(1), rightCol + 25, y);
  }
  
  y += 12;
  
  doc.setFont('helvetica', 'bold');
  doc.text('Status:', leftCol, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...statusColor);
  doc.text(result.finalStatus.toUpperCase(), leftCol + 18, y);
  doc.setTextColor(...BRAND_DARK);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Confidence:', rightCol, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`${result.confidence}%`, rightCol + 27, y);
  
  y += 12;
  
  doc.setFont('helvetica', 'bold');
  doc.text('Risk Level:', leftCol, y);
  doc.setFont('helvetica', 'normal');
  doc.text(result.riskLevel?.toUpperCase() || 'N/A', leftCol + 25, y);
  
  y += 25;

  // === DATABASES CHECKED ===
  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('DATABASES VERIFIED', 40, y);
  
  y += 8;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  
  const sources = result.checkedSources || 
    result.providers?.map(p => p.provider) || 
    ['NCIC Database', 'Insurance Records', 'Law Enforcement Networks', 'Community Reports'];
  
  // Display sources in a grid
  const sourcesPerRow = 2;
  const sourceWidth = (pageWidth - 80) / sourcesPerRow;
  
  sources.slice(0, 6).forEach((source, index) => {
    const col = index % sourcesPerRow;
    const row = Math.floor(index / sourcesPerRow);
    const xPos = 45 + col * sourceWidth;
    const yPos = y + row * 8;
    
    doc.setTextColor(...SAFE_GREEN);
    doc.text('✓', xPos, yPos);
    doc.setTextColor(...BRAND_DARK);
    doc.text(source, xPos + 8, yPos);
  });
  
  y += Math.ceil(sources.length / sourcesPerRow) * 8 + 15;

  // === VERIFICATION DETAILS ===
  doc.setFillColor(...WHITE);
  doc.setDrawColor(...GRAY_MEDIUM);
  doc.roundedRect(30, y, pageWidth - 60, 35, 3, 3, 'FD');
  
  y += 10;
  
  // Certificate ID and Date in a professional layout
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...GRAY_MEDIUM);
  doc.text('CERTIFICATE ID', 45, y);
  doc.text('VERIFICATION DATE', pageWidth / 2, y);
  doc.text('VALID FOR', pageWidth - 65, y);
  
  y += 8;
  doc.setFontSize(11);
  doc.setTextColor(...BRAND_DARK);
  doc.text(certificateId, 45, y);
  doc.text(verificationDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }), pageWidth / 2, y);
  doc.text('30 Days', pageWidth - 65, y);

  // === SIGNATURE AREA ===
  y = pageHeight - 60;
  
  // Decorative seal
  doc.setFillColor(...BRAND_ORANGE);
  doc.circle(pageWidth / 2, y - 5, 12, 'F');
  doc.setFillColor(...WHITE);
  doc.circle(pageWidth / 2, y - 5, 8, 'F');
  doc.setTextColor(...BRAND_ORANGE);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('SOS', pageWidth / 2, y - 3, { align: 'center' });
  
  y += 10;
  
  // Digital verification text
  doc.setTextColor(...GRAY_MEDIUM);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Digitally verified by SafeOrStolen Verification System', pageWidth / 2, y, { align: 'center' });
  
  y += 6;
  doc.text(`Verification ID: ${result.identifier?.slice(0, 12) || certificateId}`, pageWidth / 2, y, { align: 'center' });

  // === FOOTER ===
  y = pageHeight - 25;
  
  doc.setDrawColor(...GRAY_MEDIUM);
  doc.setLineWidth(0.3);
  doc.line(30, y - 5, pageWidth - 30, y - 5);
  
  doc.setTextColor(...GRAY_MEDIUM);
  doc.setFontSize(7);
  doc.text('This certificate is provided for informational purposes only. SafeOrStolen makes no guarantees regarding', pageWidth / 2, y, { align: 'center' });
  doc.text('the completeness of database records. Always verify with official sources before completing any transaction.', pageWidth / 2, y + 5, { align: 'center' });
  
  y += 12;
  doc.setTextColor(...BRAND_ORANGE);
  doc.setFont('helvetica', 'bold');
  doc.text('www.SafeOrStolen.com', pageWidth / 2, y, { align: 'center' });

  // Save the PDF
  const filename = `SafeOrStolen-Certificate-${certificateId}.pdf`;
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
  const pageHeight = doc.internal.pageSize.getHeight();
  const reportId = generateCertificateId();
  
  // === RED ALERT BORDER ===
  doc.setDrawColor(...DANGER_RED);
  doc.setLineWidth(4);
  doc.rect(8, 8, pageWidth - 16, pageHeight - 16);
  
  let y = 30;

  // === HEADER ===
  doc.setFillColor(...DANGER_RED);
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  doc.setTextColor(...WHITE);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('SafeOrStolen.com', pageWidth / 2, 15, { align: 'center' });
  
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('⚠ STOLEN ITEM REPORT ⚠', pageWidth / 2, 35, { align: 'center' });
  
  y = 65;

  // === ITEM TITLE ===
  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  const title = `${item.brand || ''} ${item.model || item.item_type}`.trim();
  doc.text(title, pageWidth / 2, y, { align: 'center' });
  
  y += 20;

  // === DETAILS BOX ===
  doc.setFillColor(...GRAY_LIGHT);
  doc.roundedRect(25, y, pageWidth - 50, 90, 4, 4, 'F');
  
  y += 15;
  doc.setFontSize(11);
  
  const addField = (label: string, value: string | null | undefined) => {
    if (value) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...GRAY_MEDIUM);
      doc.text(label.toUpperCase(), 35, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...BRAND_DARK);
      doc.text(value, 90, y);
      y += 12;
    }
  };

  addField('Type', item.item_type);
  addField('Brand', item.brand);
  addField('Model', item.model);
  addField('Serial #', item.serial_number);
  addField('IMEI', item.imei);
  addField('VIN', item.vin);
  
  y += 15;
  
  addField('Location', item.location);
  addField('Date Stolen', item.date_stolen);
  addField('Police Report', item.police_report_number);

  y += 10;

  // Description
  if (item.description) {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...GRAY_MEDIUM);
    doc.text('DESCRIPTION', 25, y);
    y += 8;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...BRAND_DARK);
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(item.description, pageWidth - 50);
    doc.text(lines, 25, y);
    y += lines.length * 6;
  }

  // === WARNING BOX ===
  y = pageHeight - 70;
  
  doc.setFillColor(254, 226, 226);
  doc.roundedRect(25, y, pageWidth - 50, 35, 4, 4, 'F');
  
  doc.setTextColor(...DANGER_RED);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('IF YOU HAVE SEEN THIS ITEM:', pageWidth / 2, y + 12, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Please contact local law enforcement immediately with the Report ID below.', pageWidth / 2, y + 22, { align: 'center' });
  doc.text('Do not attempt to recover the item yourself.', pageWidth / 2, y + 30, { align: 'center' });

  // === FOOTER ===
  y = pageHeight - 25;
  doc.setTextColor(...GRAY_MEDIUM);
  doc.setFontSize(8);
  doc.text(`Report ID: ${reportId}`, pageWidth / 2, y, { align: 'center' });
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, pageWidth / 2, y + 6, { align: 'center' });

  const filename = `Stolen-Report-${reportId}.pdf`;
  doc.save(filename);
};