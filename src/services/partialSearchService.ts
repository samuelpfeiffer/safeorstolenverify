/**
 * Partial Serial Number Search Service
 * Supports fuzzy matching for incomplete or damaged serial numbers
 */

import { searchBikeIndexPartial, BikeIndexResult, formatBikeResult } from './bikeIndexService';
import { calculateSimilarity } from './aggregatedSearchService';

export interface PartialSearchResult {
 serial: string;
 similarity: number; // 0-100
 source: string;
 sourceUrl: string;
 itemType: string;
 stolen: boolean;
 data: any;
 displayInfo?: {
 title: string;
 description: string;
 imageUrl?: string;
 detailUrl?: string;
 };
}

export interface PartialSearchResponse {
 query: string;
 pattern: string;
 results: PartialSearchResult[];
 totalMatches: number;
 searchDuration: number;
}

/**
 * Convert user wildcard input to regex pattern
 * Supports * for any characters and ? for single character
 */
export function wildcardToPattern(input: string): string {
 const escaped = input
 .replace(/[.+^${}()|[\]\\]/g, '\\$&') // Escape regex special chars
 .replace(/\*/g, '.*') // * = any characters
 .replace(/\?/g, '.'); // ? = single character
 
 return `^${escaped}$`;
}

/**
 * Check if a serial matches a wildcard pattern
 */
export function matchesPattern(serial: string, pattern: string): boolean {
 try {
 const regex = new RegExp(wildcardToPattern(pattern), 'i');
 return regex.test(serial);
 } catch {
 return false;
 }
}

/**
 * Search for items with partial serial numbers
 * Uses fuzzy matching across multiple databases
 */
export async function partialSerialSearch(
 partialSerial: string
): Promise<PartialSearchResponse> {
 const startTime = Date.now();
 const results: PartialSearchResult[] = [];
 
 // Clean the input and create pattern
 const cleanInput = partialSerial.trim().toUpperCase();
 const pattern = wildcardToPattern(cleanInput);
 
 // Minimum 4 known characters for meaningful search
 const knownChars = cleanInput.replace(/[*?]/g, '');
 if (knownChars.length < 4) {
 return {
 query: partialSerial,
 pattern,
 results: [],
 totalMatches: 0,
 searchDuration: Date.now() - startTime,
 };
 }
 
 // Search BikeIndex for stolen bicycles (supports partial matching)
 try {
 const bikeResults = await searchBikeIndexPartial(partialSerial);
 
 for (const bike of bikeResults) {
 if (bike.serial) {
 const similarity = calculateSimilarity(cleanInput, bike.serial);
 const formatted = formatBikeResult(bike);
 
 // Only include results with reasonable similarity
 if (similarity >= 50) {
 results.push({
 serial: bike.serial,
 similarity,
 source: 'BikeIndex for stolen bicycles',
 sourceUrl: 'https://bikeindex.org',
 itemType: 'Bicycle',
 stolen: bike.stolen,
 data: bike,
 displayInfo: {
 title: formatted.title,
 description: formatted.description,
 imageUrl: formatted.imageUrl || undefined,
 detailUrl: formatted.detailUrl,
 },
 });
 }
 }
 }
 } catch (error) {
 console.error('BikeIndex stolen bicycle search error:', error);
 }
 
 // TODO: Add more partial search sources:
 // - Internal SafeOrStolen database with pattern matching
 // - nationwide firearm theft reports
 
 // Sort by similarity (highest first)
 results.sort((a, b) => b.similarity - a.similarity);
 
 // Limit to top 20 results
 const limitedResults = results.slice(0, 20);
 
 return {
 query: partialSerial,
 pattern,
 results: limitedResults,
 totalMatches: results.length,
 searchDuration: Date.now() - startTime,
 };
}

/**
 * Get tips for better partial search results
 */
export function getPartialSearchTips(): string[] {
 return [
 'Enter at least 4-5 known characters for best results',
 'Use * for unknown sections (e.g., ABC*789)',
 'Use ? for single unknown characters (e.g., AB?1234)',
 'Include both letters AND numbers if visible',
 'Try multiple variations if unsure about characters',
 'The more characters you provide, the more accurate results',
 ];
}

/**
 * Validate partial search input
 */
export function validatePartialInput(input: string): {
 valid: boolean;
 error?: string;
} {
 const clean = input.trim();
 
 if (clean.length < 4) {
 return { valid: false, error: 'Please enter at least 4 characters' };
 }
 
 const knownChars = clean.replace(/[*?]/g, '');
 if (knownChars.length < 3) {
 return { valid: false, error: 'Please provide at least 3 known characters' };
 }
 
 if (/^[*?]+$/.test(clean)) {
 return { valid: false, error: 'Please include some known characters' };
 }
 
 return { valid: true };
}
