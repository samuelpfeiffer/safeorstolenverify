// Error recovery utilities for handling dynamic imports and component failures
import { ComponentType, ReactNode, createElement } from 'react';

export const withErrorRecovery = <P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) => {
  return (props: P) => {
    try {
      return createElement(Component, props);
    } catch (error) {
      console.error('Component error caught by error recovery:', error);
      return fallback || createElement('div', { 
        className: 'p-4 text-center text-red-500' 
      }, 'Component unavailable');
    }
  };
};

export const safeImport = async <T>(importFn: () => Promise<{ default: T }>) => {
  try {
    const module = await importFn();
    return module.default;
  } catch (error) {
    console.error('Dynamic import failed:', error);
    throw new Error(`Failed to load module: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const createFallbackComponent = (name: string) => () =>
  createElement('div', { className: 'min-h-screen flex items-center justify-center' },
    createElement('div', { className: 'text-center p-8' },
      createElement('h2', { className: 'text-xl font-semibold mb-2' }, `Loading ${name}...`),
      createElement('div', { className: 'animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange mx-auto' })
    )
  );

export const handleModuleError = (error: Error, moduleName: string) => {
  console.error(`Module ${moduleName} failed to load:`, error);
  
  // Clear any cached modules that might be corrupted
  if ('webpackChunkName' in error || error.message.includes('Loading chunk')) {
    window.location.reload();
  }
  
  return null;
};