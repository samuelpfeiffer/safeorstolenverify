import { useEffect, useState } from 'react';
import { validateReactSchemas, formatValidationReport, type ValidationResult } from '@/utils/seo/schemaValidator';
import { toast } from 'sonner';

/**
 * Schema Validation Monitor - Runtime Schema Checker
 * 
 * Validates all schemas on the page in development mode
 * and alerts developers to issues before they reach production.
 * 
 * Only runs in development mode to avoid performance impact.
 */
export const SchemaValidationMonitor = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    if (!isDevelopment) return;

    // Wait for all schemas to be rendered
    const timer = setTimeout(() => {
      const schemaElements = document.querySelectorAll('script[type="application/ld+json"]');
      const schemas: any[] = [];
      
      schemaElements.forEach((script) => {
        try {
          const schema = JSON.parse(script.textContent || '{}');
          schemas.push(schema);
        } catch (error) {
          console.error('Failed to parse schema:', error);
        }
      });

      if (schemas.length === 0) {
        console.warn('⚠️  No schemas found on page');
        return;
      }

      const result = validateReactSchemas(schemas);
      setValidationResult(result);
      
      // Log to console
      console.log(formatValidationReport(result));
      
      // Show toast notifications for critical errors
      if (result.errors.length > 0) {
        toast.error(`Schema Validation Failed: ${result.errors.length} critical error(s)`, {
          description: 'Check console for details',
          duration: 10000,
        });
        
        // Log each critical error
        result.errors.forEach((error) => {
          console.error(`❌ [${error.schemaType}] ${error.message}`, {
            location: error.location,
            fix: error.fix
          });
        });
      } else if (result.warnings.length > 0) {
        toast.warning(`Schema Warnings: ${result.warnings.length} warning(s)`, {
          description: 'Check console for details',
          duration: 5000,
        });
      } else {
        console.log('✅ All schemas validated successfully!');
      }
      
      // Expose validation result globally for debugging
      (window as any).__schemaValidation = result;
    }, 2000); // Wait 2s for all schemas to render

    return () => clearTimeout(timer);
  }, [isDevelopment]);

  // Don't render anything (invisible monitor)
  return null;
};

/**
 * Development-only panel showing schema validation status
 * Adds a floating indicator in bottom-right corner
 */
export const SchemaValidationIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    if (!isDevelopment) return;

    const checkSchemas = () => {
      const validationResult = (window as any).__schemaValidation;
      if (validationResult) {
        setResult(validationResult);
        setIsVisible(true);
      }
    };

    // Check periodically for validation results
    const interval = setInterval(checkSchemas, 3000);
    return () => clearInterval(interval);
  }, [isDevelopment]);

  if (!isDevelopment || !isVisible || !result) return null;

  const statusColor = result.valid 
    ? 'bg-green-500' 
    : result.errors.length > 0 
    ? 'bg-red-500' 
    : 'bg-yellow-500';

  return (
    <div 
      className="fixed bottom-4 right-4 z-[9999] pointer-events-auto"
      title={`Schema Validation: ${result.valid ? 'Passed' : 'Failed'}`}
    >
      <button
        onClick={() => {
          console.log(formatValidationReport(result));
          toast.info('Schema validation report logged to console');
        }}
        className={`${statusColor} text-white px-4 py-2 rounded-full shadow-lg hover:opacity-80 transition-opacity flex items-center gap-2 text-sm font-medium`}
      >
        <span className="flex h-2 w-2 relative">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 bg-white`}></span>
        </span>
        {result.valid ? (
          <>
            ✓ Schemas OK ({result.schemasChecked})
          </>
        ) : (
          <>
            ! {result.errors.length} Error{result.errors.length !== 1 ? 's' : ''}
          </>
        )}
      </button>
    </div>
  );
};
