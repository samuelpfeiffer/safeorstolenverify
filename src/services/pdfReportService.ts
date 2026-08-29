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

/**
 * Vector glyphs. jsPDF's built-in Helvetica has no Unicode coverage, so
 * characters like ✓ / ✗ / ⚠ render as stray apostrophes. Draw them instead.
 */
const drawCheck = (doc: jsPDF, x: number, y: number, size: number, color: [number, number, number]) => {
  doc.setDrawColor(...color);
  doc.setLineWidth(size * 0.16);
  doc.line(x, y - size * 0.15, x + size * 0.35, y + size * 0.25);
  doc.line(x + size * 0.35, y + size * 0.25, x + size, y - size * 0.7);
};

const drawCross = (doc: jsPDF, x: number, y: number, size: number, color: [number, number, number]) => {
  doc.setDrawColor(...color);
  doc.setLineWidth(size * 0.16);
  doc.line(x, y - size * 0.7, x + size, y + size * 0.25);
  doc.line(x + size, y - size * 0.7, x, y + size * 0.25);
};

const drawBang = (doc: jsPDF, x: number, y: number, size: number, color: [number, number, number]) => {
  doc.setDrawColor(...color);
  doc.setFillColor(...color);
  doc.setLineWidth(size * 0.16);
  doc.line(x + size / 2, y - size * 0.7, x + size / 2, y - size * 0.05);
  doc.circle(x + size / 2, y + size * 0.2, size * 0.09, 'F');
};


export const generateVerificationPDF = ({ result, identifier, itemType }: PDFReportOptions): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const certificateId = generateCertificateId();
  const verificationDate = new Date();

  // Reserved footer band — nothing above may intrude into it.
  const FOOTER_TOP = pageHeight - 52;

  // === DECORATIVE BORDER ===
  doc.setDrawColor(...BRAND_ORANGE);
  doc.setLineWidth(3);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

  doc.setDrawColor(...BRAND_DARK);
  doc.setLineWidth(0.5);
  doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

  // Corner decorations
  [[20, 20], [pageWidth - 20, 20], [20, pageHeight - 20], [pageWidth - 20, pageHeight - 20]].forEach(([x, y]) => {
    doc.setFillColor(...BRAND_ORANGE);
    doc.circle(x, y, 3, 'F');
  });

  let y = 28;

  // === HEADER SECTION ===
  doc.setFillColor(...BRAND_DARK);
  doc.roundedRect(pageWidth / 2 - 45, y - 8, 90, 22, 4, 4, 'F');

  doc.setTextColor(...WHITE);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('SafeOrStolen', pageWidth / 2, y + 5, { align: 'center' });

  y += 24;

  // Certificate Title
  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('CERTIFICATE OF VERIFICATION', pageWidth / 2, y, { align: 'center' });

  y += 7;

  doc.setDrawColor(...BRAND_ORANGE);
  doc.setLineWidth(2);
  doc.line(40, y, pageWidth - 40, y);

  y += 10;

  // === STATUS BANNER ===
  const statusColor = getStatusColor(result.finalStatus);
  doc.setFillColor(...statusColor);
  doc.roundedRect(30, y, pageWidth - 60, 24, 5, 5, 'F');

  const statusText =
    result.finalStatus === 'safe' ? 'VERIFIED SAFE'
    : result.finalStatus === 'stolen' ? 'STOLEN ITEM DETECTED'
    : result.finalStatus === 'lost' ? 'REPORTED LOST'
    : 'VERIFICATION INCONCLUSIVE';

  doc.setTextColor(...WHITE);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');

  // Centre the glyph + label as one unit (vector glyph, never a Unicode char).
  const labelWidth = doc.getTextWidth(statusText);
  const glyphSize = 6;
  const groupStart = pageWidth / 2 - (labelWidth + glyphSize + 5) / 2;
  const glyphBaseline = y + 15;

  if (result.finalStatus === 'safe') drawCheck(doc, groupStart, glyphBaseline, glyphSize, WHITE);
  else if (result.finalStatus === 'stolen') drawCross(doc, groupStart, glyphBaseline, glyphSize, WHITE);
  else drawBang(doc, groupStart, glyphBaseline, glyphSize, WHITE);

  doc.text(statusText, groupStart + glyphSize + 5, y + 16);

  y += 30;

  // === CERTIFICATION STATEMENT ===
  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');

  const statement =
    result.finalStatus === 'safe'
      ? 'This is to certify that the item described below was checked against the databases listed and no theft records were found at the time of verification.'
      : result.finalStatus === 'stolen'
      ? 'WARNING: This item has been flagged as stolen in one or more of the databases listed below. Do not proceed with any transaction involving this item.'
      : result.finalStatus === 'lost'
      ? 'This item has been reported lost in one or more of the databases listed below. Contact the original owner before proceeding.'
      : 'This item could not be definitively verified. Exercise caution and perform additional due diligence before proceeding.';

  const statementLines = doc.splitTextToSize(statement, pageWidth - 80);
  doc.text(statementLines, pageWidth / 2, y, { align: 'center', maxWidth: pageWidth - 80 });

  y += statementLines.length * 6 + 8;

  // === ITEM DETAILS BOX ===
  const detailsBoxTop = y;
  const detailsBoxHeight = 46;
  doc.setFillColor(...GRAY_LIGHT);
  doc.roundedRect(30, detailsBoxTop, pageWidth - 60, detailsBoxHeight, 3, 3, 'F');
  doc.setDrawColor(...GRAY_MEDIUM);
  doc.setLineWidth(0.5);
  doc.roundedRect(30, detailsBoxTop, pageWidth - 60, detailsBoxHeight, 3, 3, 'S');

  y = detailsBoxTop + 10;

  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('ITEM DETAILS', 40, y);

  y += 11;
  doc.setFontSize(10);

  const leftCol = 40;
  const rightCol = pageWidth / 2 + 5;

  doc.setFont('helvetica', 'bold');
  doc.text('Identifier:', leftCol, y);
  doc.setFont('helvetica', 'normal');
  doc.text(String(identifier).slice(0, 32), leftCol + 24, y);

  if (itemType) {
    doc.setFont('helvetica', 'bold');
    doc.text('Item Type:', rightCol, y);
    doc.setFont('helvetica', 'normal');
    doc.text(itemType.charAt(0).toUpperCase() + itemType.slice(1), rightCol + 24, y);
  }

  y += 11;

  doc.setFont('helvetica', 'bold');
  doc.text('Status:', leftCol, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...statusColor);
  doc.text(result.finalStatus.toUpperCase(), leftCol + 24, y);
  doc.setTextColor(...BRAND_DARK);

  doc.setFont('helvetica', 'bold');
  doc.text('Risk Level:', rightCol, y);
  doc.setFont('helvetica', 'normal');
  doc.text(result.riskLevel?.toUpperCase() || 'N/A', rightCol + 24, y);

  y += 11;

  doc.setFont('helvetica', 'bold');
  doc.text('Sources Checked:', leftCol, y);
  doc.setFont('helvetica', 'normal');
  const allSources = result.checkedSources?.length
    ? result.checkedSources
    : (result.providers?.map(p => p.provider) ?? []);
  doc.text(String(allSources.length), leftCol + 36, y);

  doc.setFont('helvetica', 'bold');
  doc.text('Verified:', rightCol, y);
  doc.setFont('helvetica', 'normal');
  doc.text(verificationDate.toLocaleDateString('en-US'), rightCol + 24, y);

  y = detailsBoxTop + detailsBoxHeight + 10;

  // === DATABASES CHECKED ===
  doc.setTextColor(...BRAND_DARK);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('DATABASES VERIFIED', 40, y);

  y += 8;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  const metaBoxHeightReserve = 36; // meta box (24) + gaps
  const sourcesPerRow = 2;
  const colWidth = (pageWidth - 80) / sourcesPerRow;
  const rowHeight = 6;
  // Cap rows so the list can never grow into the footer band.
  const maxRows = Math.max(1, Math.floor((FOOTER_TOP - metaBoxHeightReserve - y) / rowHeight));
  const maxSources = maxRows * sourcesPerRow;
  const shown = allSources.slice(0, maxSources);

  shown.forEach((source, index) => {
    const col = index % sourcesPerRow;
    const row = Math.floor(index / sourcesPerRow);
    const xPos = 42 + col * colWidth;
    const yPos = y + row * rowHeight;

    drawCheck(doc, xPos, yPos - 1, 3, SAFE_GREEN);
    doc.setTextColor(...BRAND_DARK);
    doc.text(String(source).slice(0, 38), xPos + 6, yPos);
  });

  y += Math.max(1, Math.ceil(shown.length / sourcesPerRow)) * rowHeight;

  if (allSources.length > shown.length) {
    doc.setTextColor(...GRAY_MEDIUM);
    doc.text(`+ ${allSources.length - shown.length} more source(s)`, 42, y + 1);
    y += 6;
  }

  // === CERTIFICATE META BOX === (pinned directly above the footer band)
  const metaBoxHeight = 24;
  const metaBoxTop = Math.max(y + 6, FOOTER_TOP - metaBoxHeight - 10);

  doc.setFillColor(...WHITE);
  doc.setDrawColor(...GRAY_MEDIUM);
  doc.setLineWidth(0.5);
  doc.roundedRect(30, metaBoxTop, pageWidth - 60, metaBoxHeight, 3, 3, 'FD');

  // Seal sits on the box's left edge — clear of the sources list.
  doc.setFillColor(...BRAND_ORANGE);
  doc.circle(44, metaBoxTop + metaBoxHeight / 2, 8, 'F');
  doc.setFillColor(...WHITE);
  doc.circle(44, metaBoxTop + metaBoxHeight / 2, 5.5, 'F');
  doc.setTextColor(...BRAND_ORANGE);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text('SOS', 44, metaBoxTop + metaBoxHeight / 2 + 2, { align: 'center' });

  const metaCols: Array<[string, string]> = [
    ['CERTIFICATE ID', certificateId],
    ['VERIFICATION DATE', verificationDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })],
    ['VALID FOR', '30 Days'],
  ];
  const metaStart = 58;
  const metaWidth = (pageWidth - 30 - metaStart) / metaCols.length;

  metaCols.forEach(([label, value], i) => {
    const x = metaStart + i * metaWidth;
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...GRAY_MEDIUM);
    doc.text(label, x, metaBoxTop + 9);
    doc.setFontSize(10);
    doc.setTextColor(...BRAND_DARK);
    doc.text(value, x, metaBoxTop + 17);
  });

  // === FOOTER === (entirely inside the inner border)
  let fy = FOOTER_TOP;

  doc.setDrawColor(...GRAY_MEDIUM);
  doc.setLineWidth(0.3);
  doc.line(30, fy, pageWidth - 30, fy);

  fy += 7;
  doc.setTextColor(...GRAY_MEDIUM);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Digitally generated by the SafeOrStolen Verification System. Provided for informational purposes only.', pageWidth / 2, fy, { align: 'center' });
  fy += 5;
  doc.text('Not all thefts are reported, so no service can guarantee 100% accuracy. Always verify with official', pageWidth / 2, fy, { align: 'center' });
  fy += 5;
  doc.text('sources and contact local law enforcement before completing a high-value transaction.', pageWidth / 2, fy, { align: 'center' });

  fy += 9;
  doc.setTextColor(...BRAND_ORANGE);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('www.SafeOrStolen.com', pageWidth / 2, fy, { align: 'center' });

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
  doc.text('STOLEN ITEM REPORT', pageWidth / 2, 35, { align: 'center' });
  {
    const w = doc.getTextWidth('STOLEN ITEM REPORT');
    drawBang(doc, pageWidth / 2 - w / 2 - 14, 33, 8, WHITE);
    drawBang(doc, pageWidth / 2 + w / 2 + 6, 33, 8, WHITE);
  }

  
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