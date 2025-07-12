/**
 * Utility to detect React context and debug React hook issues
 */

export const detectReactContext = () => {
  const detection = {
    hasReact: typeof window !== 'undefined' && !!(window as any).React,
    hasReactDOM: typeof window !== 'undefined' && !!(window as any).ReactDOM,
    hasReactDevTools: typeof window !== 'undefined' && !!(window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__,
    inBrowser: typeof window !== 'undefined',
    moduleContext: typeof module !== 'undefined'
  };

  return detection;
};

export const logReactEnvironment = () => {
  const detection = detectReactContext();
  
  console.group('🔍 React Environment Detection');
  console.log('Has React (global):', detection.hasReact);
  console.log('Has ReactDOM:', detection.hasReactDOM);
  console.log('Has React DevTools:', detection.hasReactDevTools);
  console.log('In Browser:', detection.inBrowser);
  console.log('Module Context:', detection.moduleContext);
  console.groupEnd();
  
  return detection;
};