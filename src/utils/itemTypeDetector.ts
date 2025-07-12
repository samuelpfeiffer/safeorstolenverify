
/**
 * Basic detection of item type based on input format
 */
export const detectItemType = (serial: string): string => {
  if (/^[0-9]{15}$/.test(serial)) return "IMEI Number";
  if (/^[A-HJ-NPR-Z0-9]{17}$/.test(serial)) return "VIN Number";
  return "Serial Number";
};
