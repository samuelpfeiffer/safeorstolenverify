/**
 * Safe className utilities to prevent undefined className errors
 */

export const safeClassName = (className?: string | null | undefined): string => {
  if (typeof className !== 'string') {
    return '';
  }
  return className.trim();
};

export const conditionalClassName = (
  condition: boolean | undefined | null,
  trueClass: string,
  falseClass: string = ''
): string => {
  return condition ? safeClassName(trueClass) : safeClassName(falseClass);
};

export const safeTemplateClassName = (template: TemplateStringsArray, ...values: unknown[]): string => {
  try {
    let result = template[0] || '';
    
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      let stringValue = '';
      
      if (value !== null && value !== undefined) {
        stringValue = String(value);
      }
      
      result += stringValue + (template[i + 1] || '');
    }
    
    return result.trim();
  } catch (error) {
    console.warn('safeTemplateClassName error:', error);
    return '';
  }
};

export const mergeClassNames = (...classNames: (string | undefined | null)[]): string => {
  return classNames
    .filter(className => typeof className === 'string' && className.trim().length > 0)
    .join(' ')
    .trim();
};