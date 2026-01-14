/**
 * Receipt Generator Service
 * Generates downloadable/shareable verification receipts
 */

import { jsPDF } from 'jspdf';
import type { SearchResult } from './parallelSearchEngine';

export interface ReceiptData {
  searchId: string;
  query: string;
  queryType: string;
  timestamp: Date;
  status: string;
  confidenceScore: number;
  sourcesChecked: number;
  sourcesWithResults: number;
  sources: Array<{
    name: string;
    status: string;
    stolenStatus?: string;
  }>;
  itemDetails?: {
    type?: string;
    manufacturer?: string;
    model?: string;
    year?: string;
  };
}

/**
 * Generate a verification receipt PDF
 */
export function generateReceipt(result: SearchResult): Blob {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let y = 20;

  // Header
  doc.setFillColor(15, 23, 42); // Dark blue
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('SafeOrStolen', margin, 25);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Verification Receipt', margin, 35);
  
  y = 60;
  doc.setTextColor(0, 0, 0);
  
  // Status Banner
  const statusColors = {
    stolen: [220, 38, 38],    // Red
    safe: [22, 163, 74],      // Green
    check_details: [202, 138, 4], // Yellow
    unknown: [107, 114, 128], // Gray
  };
  
  const statusColor = statusColors[result.overallStatus as keyof typeof statusColors] || statusColors.unknown;
  doc.setFillColor(statusColor[0], statusColor[1], statusColor[2]);
  doc.roundedRect(margin, y, pageWidth - (margin * 2), 30, 3, 3, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  const statusText = result.overallStatus === 'stolen' ? '🚨 STOLEN' :
                     result.overallStatus === 'safe' ? '✅ SAFE' :
                     result.overallStatus === 'check_details' ? '⚠️ CHECK DETAILS' : '❓ UNKNOWN';
  doc.text(statusText, pageWidth / 2, y + 18, { align: 'center' });
  
  y += 45;
  doc.setTextColor(0, 0, 0);
  
  // Verification Details Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Verification Details', margin, y);
  y += 10;
  
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  
  const details = [
    ['Search ID:', result.searchId],
    ['Query:', result.query],
    ['Type:', result.queryType.toUpperCase()],
    ['Date:', result.timestamp.toLocaleDateString()],
    ['Time:', result.timestamp.toLocaleTimeString()],
    ['Confidence:', `${result.confidenceScore}%`],
    ['Sources Checked:', `${result.sourcesChecked}`],
    ['Sources with Data:', `${result.sourcesWithResults}`],
  ];
  
  details.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value, margin + 45, y);
    y += 7;
  });
  
  y += 10;
  
  // Item Details (if available)
  if (result.itemDetails) {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Item Details', margin, y);
    y += 10;
    
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    
    const itemDetails = [
      ['Type:', result.itemDetails.type || 'N/A'],
      ['Manufacturer:', result.itemDetails.manufacturer || 'N/A'],
      ['Model:', result.itemDetails.model || 'N/A'],
      ['Year:', result.itemDetails.year || 'N/A'],
    ];
    
    itemDetails.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label, margin, y);
      doc.setFont('helvetica', 'normal');
      doc.text(value, margin + 40, y);
      y += 7;
    });
    
    y += 10;
  }
  
  // Sources Checked
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Sources Checked', margin, y);
  y += 10;
  
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;
  
  doc.setFontSize(10);
  result.sources.forEach((source) => {
    const statusIcon = source.status === 'found' 
      ? (source.stolenStatus === 'stolen' ? '🚨' : '✓')
      : source.status === 'not_found' 
      ? '—'
      : '✗';
    
    doc.setFont('helvetica', 'normal');
    doc.text(`${statusIcon} ${source.sourceName}`, margin, y);
    
    const statusLabel = source.status === 'found' 
      ? (source.stolenStatus === 'stolen' ? 'STOLEN' : 'CLEAR')
      : source.status === 'not_found' 
      ? 'Not Found'
      : 'Error';
    doc.text(statusLabel, pageWidth - margin - 30, y);
    y += 6;
  });
  
  y += 15;
  
  // Recommendations
  if (result.recommendations && result.recommendations.length > 0) {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommendations', margin, y);
    y += 10;
    
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    result.recommendations.forEach((rec) => {
      const lines = doc.splitTextToSize(`• ${rec}`, pageWidth - (margin * 2));
      doc.text(lines, margin, y);
      y += lines.length * 5;
    });
  }
  
  // Footer
  const footerY = doc.internal.pageSize.getHeight() - 20;
  doc.setFillColor(248, 250, 252);
  doc.rect(0, footerY - 10, pageWidth, 30, 'F');
  
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(
    'This verification receipt was generated by SafeOrStolen.com',
    pageWidth / 2,
    footerY,
    { align: 'center' }
  );
  doc.text(
    'Verify online: safeorstolen.com/verify/' + result.searchId,
    pageWidth / 2,
    footerY + 7,
    { align: 'center' }
  );
  
  // Generate blob
  return doc.output('blob');
}

/**
 * Download the receipt as a PDF file
 */
export async function downloadReceipt(result: SearchResult): Promise<void> {
  const blob = generateReceipt(result);
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `SafeOrStolen-Receipt-${result.searchId}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}

/**
 * Generate a shareable receipt URL
 */
export function getShareableUrl(searchId: string): string {
  return `${window.location.origin}/verify/${searchId}`;
}

/**
 * Format receipt data for API storage
 */
export function formatReceiptData(result: SearchResult): ReceiptData {
  return {
    searchId: result.searchId,
    query: result.query,
    queryType: result.queryType,
    timestamp: result.timestamp,
    status: result.overallStatus,
    confidenceScore: result.confidenceScore,
    sourcesChecked: result.sourcesChecked,
    sourcesWithResults: result.sourcesWithResults,
    sources: result.sources.map(s => ({
      name: s.sourceName,
      status: s.status,
      stolenStatus: s.stolenStatus,
    })),
    itemDetails: result.itemDetails,
  };
}
